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
      return h(
        'div',
        {...getAttrs(node), class: 'media-container'},
        node.children
      )
    }

    if (node.type === 'image') {
      const attrs = {src: node.attrs.src}
      if (node.attrs['aspect-ratio']) {
        attrs.style = `aspect-ratio: ${node.attrs['aspect-ratio']}`
      }

      return h('img', attrs)
    }

    return node
  })
