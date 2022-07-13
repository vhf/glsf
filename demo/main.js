import {toHtml} from 'hast-util-to-html'
import {doc, heading, paragraph, render} from 'glsf'

const editor = document.getElementById('tree')
const output = document.getElementById('output')

const tree = doc([
  heading('Title', {level: 1}),
  heading('Subtitle', {level: 2}),
  paragraph('Welcome')
])

function renderHtml () {
  const tree = JSON.parse(editor.value)
  const hast = render(tree)
  const html = toHtml(hast)
  output.innerHTML = html
}

editor.innerHTML = JSON.stringify(tree, null, 2)
renderHtml()

editor.addEventListener('input', renderHtml)
