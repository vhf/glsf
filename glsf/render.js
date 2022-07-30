import {map} from 'unist-util-map'
import {h} from 'hastscript'

const getAttrs = (node) => {
  const nodeAttrs = new Set(['type', 'children', 'value'])
  // eslint-disable-next-line unicorn/no-array-reduce
  Object.entries(node).reduce((attrs, [key, value]) => {
    if (nodeAttrs.has(key)) return attrs
    attrs[key] = value
    return value
  }, {})
}

export const render = (tree) =>
  map(tree, (node) => {
    // Very basic, we match each node type and transform it to a HAST node, the result HAST tree
    // can then be stringified, producing HTML
    if (node.type === 'root') {
      return h('div', getAttrs(node), node.children)
    }

    if (node.type === 'paragraph') {
      return h(`p`, getAttrs(node), node.children)
    }

    if (node.type === 'heading') {
      return h(`h${node.level}`, getAttrs(node), node.children)
    }

    if (node.type === 'media-container') {
      const layout = node.layout || '1x1'
      const containers = []

      if (layout.includes('x')) {
        const [cols, rows] = layout
          .split('x')
          .map((x) => Number.parseInt(x, 10))

        let childIndex = 0
        for (let row = 0; row < rows; row++) {
          const children = []
          for (let col = 0; col < cols; col++) {
            children.push(node.children[childIndex])
            childIndex++
          }

          containers.push(h('div', {class: 'row'}, children))
        }
      } else if (layout.includes('-')) {
        const onRow = layout.split('-').map((x) => Number.parseInt(x, 10))

        let childIndex = 0
        for (let row = 0; row < 2; row++) {
          const children = []
          for (let col = 0; col < onRow[row]; col++) {
            children.push(node.children[childIndex])
            childIndex++
          }

          containers.push(h('div', {class: 'row'}, children))
        }
      }

      Object.assign(node, {children: containers})

      return h(
        'div',
        {...getAttrs(node), class: 'media-container'},
        node.children
      )
    }

    if (node.type === 'image') {
      const attrs = {src: node.url}

      if (node['aspect-ratio']) {
        attrs.style = `aspect-ratio: ${node['aspect-ratio']}`
      }

      return h('img', attrs)
    }

    return node
  })
