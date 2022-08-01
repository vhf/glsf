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

// eslint-disable-next-line import/prefer-default-export
export const render = (tree) => map(tree, (node) => {
  // Very basic, we match each node type and transform it to a HAST node, the result HAST tree
  // can then be stringified, producing HTML
  if (node.type === 'root') {
    return h('div', getAttrs(node), node.children);
  }

  if (node.type === 'paragraph') {
    return h('p', getAttrs(node), node.children);
  }

  if (node.type === 'heading') {
    return h(`h${node.level}`, getAttrs(node), node.children);
  }

  if (node.type === 'media-container') {
    const layout = node.layout || '1x1';
    const containers = [];

    const children = [];
    for (let childIndex = 0; childIndex < node.children.length; childIndex++) {
      children.push(h('div', { class: `item-${childIndex + 1}` }, [node.children[childIndex]]));
    }
    containers.push(h('div', { class: `layout-${layout}` }, children));

    Object.assign(node, { children: containers });

    return h(
      'div',
      { ...getAttrs(node), class: 'media-container' },
      node.children,
    );
  }

  if (node.type === 'image') {
    const attrs = { src: node.url };

    if (node['aspect-ratio']) {
      attrs.style = `aspect-ratio: ${node['aspect-ratio']}`;
    }

    return h('img', attrs);
  }

  return node;
});
