import { fromMarkdown } from 'mdast-util-from-markdown';
import { h } from 'hastscript';
import { inspectNoColor } from 'unist-util-inspect';
import { map } from 'unist-util-map';
import { removePosition } from 'unist-util-remove-position';
import { sanitize, defaultSchema } from 'hast-util-sanitize';
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';
import deepmerge from 'deepmerge';

const phrasingHast = deepmerge(defaultSchema, {
  tagNames: [
    'em',
    'strong',
    'a',
    'strike',
  ],
});

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

  column: (node) => h('div', { ...getAttrs(node), class: 'column' }, node.children),

  'column-container': (node) => h('div', { ...getAttrs(node), class: 'column-container' }, node.children),

  image: (node) => {
    const attrs = { src: node.url };

    if (node['aspect-ratio']) {
      attrs.style = `aspect-ratio: ${node['aspect-ratio']}`;
    }

    return h('img', attrs);
  },

  text: (node) => {
    const mdast = fromMarkdown(node.value);
    const hast = toHast(mdast);
    // get the only child of "root", a "p"
    const content = hast.children[0];
    // make it a "span" instead
    return sanitize(h('span', content.children), phrasingHast);
  },
};

export const glsfToHast = (tree) => removePosition(map(tree, (node) => {
  if (!nodeRenderer[node.type]) {
    return node;
  }
  return nodeRenderer[node.type](node);
}));

export const glsfToHtml = (tree) => {
  const hast = glsfToHast(tree);
  const html = toHtml(hast);
  return html;
};

export const inspectHast = (tree) => inspectNoColor(glsfToHast(tree));
