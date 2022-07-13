import test from 'tape'
import {toHtml} from 'hast-util-to-html'
import {doc, heading, paragraph, render} from './index.js'

test('build tree #1', (t) => {
  const tree = doc([
    heading('Title', {level: 1}),
    heading('Subtitle', {level: 2}),
    paragraph('Welcome')
  ])
  t.deepEqual(
    tree,
    {
      type: 'root',
      children: [
        {type: 'heading', level: 1, children: [{type: 'text', value: 'Title'}]},
        {
          type: 'heading',
          level: 2,
          children: [{type: 'text', value: 'Subtitle'}]
        },
        {type: 'paragraph', children: [{type: 'text', value: 'Welcome'}]}
      ]
    },
    'should be ok'
  )
  t.end()
})

test('render tree #1', (t) => {
  const tree = doc([
    heading('Title', {level: 1}),
    heading('Subtitle', {level: 2}),
    paragraph('Welcome')
  ])

  const hast = render(tree)
  t.deepEqual(
    hast,
    {
      type: 'element',
      tagName: 'div',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'h1',
          properties: {},
          children: [{type: 'text', value: 'Title'}]
        },
        {
          type: 'element',
          tagName: 'h2',
          properties: {},
          children: [{type: 'text', value: 'Subtitle'}]
        },
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [{type: 'text', value: 'Welcome'}]
        }
      ]
    },
    'should be ok'
  )
  // Console.log(toHtml(hast))
  t.end()
})
