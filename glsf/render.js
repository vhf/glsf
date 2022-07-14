import {u} from 'unist-builder'
import {visit} from 'unist-util-visit'
import {map} from 'unist-util-map'
import {h, s} from 'hastscript'
import {toHtml} from 'hast-util-to-html'

// Const tree = u('root', [
//   u('subtree', {id: 1}),
//   u('subtree', {id: 2}, [
//     u('node', [u('leaf', 'leaf 1'), u('leaf', 'leaf 2')]),
//     u('leaf', {id: 3}, 'leaf 3'),
//     u('void', {id: 4, lol: true})
//   ])
// ])

// console.dir(tree, {depth: null})

// visit(tree, (node) => {
//   console.log(node)
// })
// visit(tree, 'leaf', (node) => {
//   console.log(node)
// })

const getAttrs = (node) => {
  const nodeAttrs = new Set(['type', 'children', 'value'])
  Object.entries(node).reduce((attrs, [key, value]) => {
    if (nodeAttrs.has(key)) return attrs
    attrs[key] = value
    return value
  }, {})
}

export const render = (tree) =>
  map(tree, (node) => {
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

      // this is dumb, see https://tailwindcss.com/docs/grid-template-columns
      if (layout.includes('x')) {
        const [cols, rows] = layout.split('x').map((x) => Number.parseInt(x))

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

        const onRow = layout.split('-').map((x) => Number.parseInt(x))

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

      return h('div', {...getAttrs(node), class: 'media-container'}, node.children)
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
