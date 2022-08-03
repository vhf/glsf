import {
  doc, heading, image, mediaContainer, paragraph, inspectHast, glsfToHtml, column, columnContainer,
} from 'glsf';

const editor = document.getElementById('tree');
const debug = document.getElementById('debug');
const output = document.getElementById('output');

const tree = doc([
  heading('Title', { level: 1 }),
  heading('Subtitle', { level: 2 }),
  paragraph('We*lcom*e'),
  heading('Here are [columns](http://example.com)', { level: 2 }),
  columnContainer([
    column([
      mediaContainer([
        image('https://api.lorem.space/image/drink?w=600&h=300'),
        image('https://api.lorem.space/image/drink?w=600&h=600'),
        image('https://api.lorem.space/image/drink?w=600&h=600'),
        image('https://api.lorem.space/image/drink?w=600&h=600'),
      ], { layout: '1-3' }),
    ]),
    column([
      paragraph('*Lorem **ipsum*** dolor sit amet, consectetur adipiscing elit.'),
      paragraph('Quisque vulputate</p> dui eget lacus luctus, et vehicula dui sollicitudin.'),
      heading('Subtitle', { level: 2 }),
      paragraph('Duis et ultricies felis.'),
    ]),
  ]),
  heading('Example 1-2 <script>alert("lol")</script>', { level: 2 }),
  mediaContainer([
    image('https://api.lorem.space/image/drink?w=600&h=300'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
  ], { layout: '1-2' }),
  heading('Example 1-3', { level: 2 }),
  mediaContainer([
    image('https://api.lorem.space/image/drink?w=600&h=300'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
  ], { layout: '1-3' }),
  heading('Example 2x2', { level: 2 }),
  mediaContainer([
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
  ], { layout: '2x2' }),
  heading('Example 3x3', { level: 2 }),
  mediaContainer([
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
    image('https://api.lorem.space/image/drink?w=600&h=600'),
  ], { layout: '3x3' }),
]);

function renderHtml() {
  try {
    const inspect = inspectHast(JSON.parse(editor.value));
    debug.innerText = inspect;
    const html = glsfToHtml(JSON.parse(editor.value));
    output.innerHTML = html;
  } catch (err) {
    console.log(err);
  }
}

editor.innerHTML = JSON.stringify(tree, null, 2);
renderHtml();

editor.addEventListener('input', renderHtml);
