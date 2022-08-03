import test from 'tape';
import dedent from 'dedent';
import { inspectNoColor } from 'unist-util-inspect';
import {
  doc,
  heading,
  paragraph,
  glsfToHast,
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

test('glsfToHast tree #1', (t) => {
  const tree = doc([
    heading('Ti**tle**', { level: 1 }),
    heading('Subtitle [1](/foo)', { level: 2 }),
    paragraph('#welcome'),
  ]);

  const hast = glsfToHast(tree);

  t.deepEqual(
    inspectNoColor(hast),
    dedent`
      element<div>[3]
      │ properties: {}
      ├─0 element<h1>[1]
      │   │ properties: {}
      │   └─0 element<span>[1]
      │       │ properties: {}
      │       └─0 element<p>[2]
      │           │ properties: {}
      │           ├─0 text "Ti"
      │           └─1 element<strong>[1]
      │               │ properties: {}
      │               └─0 text "tle"
      ├─1 element<h2>[1]
      │   │ properties: {}
      │   └─0 element<span>[1]
      │       │ properties: {}
      │       └─0 element<p>[2]
      │           │ properties: {}
      │           ├─0 text "Subtitle "
      │           └─1 element<a>[1]
      │               │ properties: {"href":"/foo"}
      │               └─0 text "1"
      └─2 element<p>[1]
          │ properties: {}
          └─0 element<span>[1]
              │ properties: {}
              └─0 element<p>[1]
                  │ properties: {}
                  └─0 text "#welcome"
    `,
    'should be ok',
  );
  t.end();
});

test('glsfToHast mediaContainer 2x2', (t) => {
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

  const hast = glsfToHast(tree);

  t.deepEqual(
    inspectNoColor(hast),
    dedent`
      element<div>[1]
      │ properties: {}
      └─0 element<div>[2]
          │ properties: {"className":["media-container","layout-2x2"]}
          ├─0 element<div>[2]
          │   │ properties: {"className":["row","row-1"]}
          │   ├─0 element<div>[1]
          │   │   │ properties: {"className":["item-1"]}
          │   │   └─0 element<img>[0]
          │   │         properties: {"src":"https://api.lorem.space/image/fashion?w=650&h=150"}
          │   └─1 element<div>[1]
          │       │ properties: {"className":["item-2"]}
          │       └─0 element<img>[0]
          │             properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
          └─1 element<div>[2]
              │ properties: {"className":["row","row-2"]}
              ├─0 element<div>[1]
              │   │ properties: {"className":["item-3"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=250&h=150"}
              └─1 element<div>[1]
                  │ properties: {"className":["item-4"]}
                  └─0 element<img>[0]
                        properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
    `,
    'should be ok',
  );
  t.end();
});

test('glsfToHast mediaContainer 1-2', (t) => {
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

  const hast = glsfToHast(tree);

  t.deepEqual(
    inspectNoColor(hast),
    dedent`
      element<div>[1]
      │ properties: {}
      └─0 element<div>[2]
          │ properties: {"className":["media-container","layout-1-2"]}
          ├─0 element<div>[1]
          │   │ properties: {"className":["row","row-1"]}
          │   └─0 element<div>[1]
          │       │ properties: {"className":["item-1"]}
          │       └─0 element<img>[0]
          │             properties: {"src":"https://api.lorem.space/image/fashion?w=650&h=150"}
          └─1 element<div>[2]
              │ properties: {"className":["row","row-2"]}
              ├─0 element<div>[1]
              │   │ properties: {"className":["item-2"]}
              │   └─0 element<img>[0]
              │         properties: {"src":"https://api.lorem.space/image/fashion?w=150&h=150"}
              └─1 element<div>[1]
                  │ properties: {"className":["item-3"]}
                  └─0 element<img>[0]
                        properties: {"src":"https://api.lorem.space/image/fashion?w=250&h=150"}
    `,
    'should be ok',
  );
  t.end();
});
