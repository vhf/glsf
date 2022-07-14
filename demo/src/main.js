import {toHtml} from 'hast-util-to-html'
import {doc, heading, image, mediaContainer, paragraph, render} from 'glsf'

const editor = document.getElementById('tree')
const output = document.getElementById('output')

const tree = doc([
  heading('Title', {level: 1}),
  heading('Subtitle', {level: 2}),
  paragraph('Welcome'),
  mediaContainer([
    image('https://api.lorem.space/image/fashion?w=650&h=150'),
    image('https://api.lorem.space/image/fashion?w=150&h=150'),
    image('https://api.lorem.space/image/fashion?w=250&h=150'),
    image('https://api.lorem.space/image/fashion?w=150&h=150'),
  ], {layout: '2x2'})
])

function renderHtml () {
  try {
    const tree = JSON.parse(editor.value)
    const hast = render(tree)
    const html = toHtml(hast)
    output.innerHTML = html
  } catch (err) {
    console.log(err)
  }
}

editor.innerHTML = JSON.stringify(tree, null, 2)
renderHtml()

editor.addEventListener('input', renderHtml)
