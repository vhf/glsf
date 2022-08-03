import { map } from 'unist-util-map';
import { h } from 'hastscript';

const getAttrs = (node) => {
  const nodeAttrs = new Set(['type', 'children', 'value']);
  Object.entries(node).reduce((attrs, [key, value]) => {
    if (nodeAttrs.has(key)) return attrs;
    attrs[key] = value;
    return value;
  }, {});
};

// Very basic, we match each node type and transform it to a HAST node, the result HAST tree
// can then be stringified, producing HTML
const nodeRenderer = {
  root: (node) => h('div', getAttrs(node), node.children),

  paragraph: (node) => h('p', getAttrs(node), node.children),

  heading: (node) => h(`h${node.level}`, getAttrs(node), node.children),

  'media-container': (node) => {
    const layout = node.layout || '1x1';

    let rows;
    let onRow;
    if (layout.includes('x')) {
      [onRow, rows] = layout.split('x').map((x) => parseInt(x, 10));
      onRow = new Array(rows).fill(onRow);
    } else if (layout.includes('-')) {
      onRow = layout.split('-').map((x) => parseInt(x, 10));
      rows = 2;
    } else {
      throw new Error(`Invalid layout ${layout}`);
    }

    const containers = [];
    let childIndex = 0;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < onRow[i]; j++) {
        row.push(h('div', { class: `item-${childIndex + 1}` }, [node.children[childIndex]]));
        childIndex++;
      }
      containers.push(h('div', { class: `row row-${i + 1}` }, row));
    }

    Object.assign(node, { children: containers });

    return h(
      'div',
      { ...getAttrs(node), class: `media-container layout-${layout}` },
      node.children,
    );
  },

  image: (node) => {
    const attrs = { src: node.url };

    if (node['aspect-ratio']) {
      attrs.style = `aspect-ratio: ${node['aspect-ratio']}`;
    }

    return h('img', attrs);
  },
};

// eslint-disable-next-line import/prefer-default-export
export const render = (tree) => map(tree, (node) => {
  if (!nodeRenderer[node.type]) {
    return node;
  }
  return nodeRenderer[node.type](node);
});
