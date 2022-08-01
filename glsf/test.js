import test from 'tape';
import dedent from 'dedent';
import { inspectNoColor } from 'unist-util-inspect';
import {
  doc,
  heading,
  paragraph,
  render,
  mediaContainer,
  image,
} from './index.js';

test('doc attributes', (t) => {
  const tree = doc(
    [
      heading('Title', { level: 1 }),
      heading('Subtitle', { level: 2 }),
      paragraph('Welcome'),
    ],
    { version: '0.1.2', generatedBy: 'Some Tool <http://example.com>' },
  );

  t.deepEqual(
    tree,
    {
      type: 'root',
      version: '0.1.2',
      generatedBy: 'Some Tool <http://example.com>',
      children: [
        { type: 'heading', level: 1, children: [{ type: 'text', value: 'Title' }] },
        {
          type: 'heading',
          level: 2,
          children: [{ type: 'text', value: 'Subtitle' }],
        },
        { type: 'paragraph', children: [{ type: 'text', value: 'Welcome' }] },
      ],
    },
    'should be ok',
  );
  t.end();
});

test('build tree #1', (t) => {
  const tree = doc([
    heading('Title', { level: 1 }),
    heading('Subtitle', { level: 2 }),
    paragraph('Welcome'),
  ]);

  t.deepEqual(
    tree,
    {
      type: 'root',
      children: [
        { type: 'heading', level: 1, children: [{ type: 'text', value: 'Title' }] },
        {
          type: 'heading',
          level: 2,
          children: [{ type: 'text', value: 'Subtitle' }],
        },
        { type: 'paragraph', children: [{ type: 'text', value: 'Welcome' }] },
      ],
    },
    'should be ok',
  );
  t.end();
});

test('render tree #1', (t) => {
  const tree = doc([
    heading('Title', { level: 1 }),
    heading('Subtitle', { level: 2 }),
    paragraph('Welcome'),
  ]);

  const hast = render(tree);
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
          children: [{ type: 'text', value: 'Title' }],
        },
        {
          type: 'element',
          tagName: 'h2',
          properties: {},
          children: [{ type: 'text', value: 'Subtitle' }],
        },
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [{ type: 'text', value: 'Welcome' }],
        },
      ],
    },
    'should be ok',
  );
  t.end();
});

test('render mediaContainer 2x2', (t) => {
  const tree = doc([
    mediaContainer(
      [
        image('https://api.lorem.space/image/fashion?w=650&h=150'),
        image('https://api.lorem.space/image/fashion?w=150&h=150'),
        image('https://api.lorem.space/image/fashion?w=250&h=150'),
        image('https://api.lorem.space/image/fashion?w=150&h=150'),
      ],
      { layout: '2x2' },
    ),
  ]);

  const hast = render(tree);
  t.deepEqual(
    inspectNoColor(hast),
    dedent`
      element<div>[1]
      │ properties: {}
      └─0 element<div>[1]
          │ properties: {"className":["media-container"]}
          └─0 element<div>[4]
              │ properties: {"className":["layout-2x2"]}
              ├─0 element<div>[1]
              │   │ properties: {"className":["item-1"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=650&h=150"}
              ├─1 element<div>[1]
              │   │ properties: {"className":["item-2"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
              ├─2 element<div>[1]
              │   │ properties: {"className":["item-3"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=250&h=150"}
              └─3 element<div>[1]
                  │ properties: {"className":["item-4"]}
                  └─0 element<img>[0]
                        properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
    `,
    'should be ok',
  );
  t.end();
});

test('render mediaContainer 1-2', (t) => {
  const tree = doc([
    mediaContainer(
      [
        image('https://api.lorem.space/image/fashion?w=650&h=150'),
        image('https://api.lorem.space/image/fashion?w=150&h=150'),
        image('https://api.lorem.space/image/fashion?w=250&h=150'),
      ],
      { layout: '1-2' },
    ),
  ]);

  const hast = render(tree);

  t.deepEqual(
    inspectNoColor(hast),
    dedent`
      element<div>[1]
      │ properties: {}
      └─0 element<div>[1]
          │ properties: {"className":["media-container"]}
          └─0 element<div>[3]
              │ properties: {"className":["layout-1-2"]}
              ├─0 element<div>[1]
              │   │ properties: {"className":["item-1"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=650&h=150"}
              ├─1 element<div>[1]
              │   │ properties: {"className":["item-2"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
              └─2 element<div>[1]
                  │ properties: {"className":["item-3"]}
                  └─0 element<img>[0]
                        properties: {"src":"https://api.lorem.space/image/fashion?w=250&h=150"}
    `,
    'should be ok',
  );
  t.end();
});
