import {toHtml} from 'hast-util-to-html'
import {doc, heading, paragraph, render} from 'glsf'

const tree = doc([
  heading('Title', {level: 1}),
  heading('Subtitle', {level: 2}),
  paragraph('Welcome')
])

const hast = render(tree)

document.querySelector('body').innerHTML = toHtml(hast)
