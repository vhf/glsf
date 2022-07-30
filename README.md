# **g**a**l**leries **s**tructured **f**ormat

This design document proposes a structured format for galleries description. The gallery description could be an IPFS-stored JSON file.

Anyone interested in displaying such galleries would implement their own CSS. 

A sample `gallery -> html` frontend lib is provided.
Ideally, a visual tool producing a `gallery` structured document would be provided.

## design goals

* A glsf document stores content in a structure, how this structured gets displayed is up to the implementer.
* Rendering a glsf document should produce a safe output. By safe we mean: the output can be directly injected in a website without having to worry about XSS, CSRF, etc.
* A glsf document isn't only meant to be stored on IPFS and rendered to HTML. It could be rendered any other way, stored on any storage, etc.
* Implementing a renderer should be straightforward thanks to the [unist](https://github.com/syntax-tree/unist) spec and associated tooling.

## this repo

* [./glsf](./glsf) Draft lib, early PoC
* [./demo](./demo) Demo renderer, very early PoC

# example

## building a document

```js
import {doc, heading, image, mediaContainer, paragraph, render} from 'glsf'

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

// Serializing this document for storage:
const jsonString = JSON.stringify(tree)

// Deserializing from storage: (straightforward examples but it's great to have easy de/serialization)
const treeAgain = JSON.parse(jsonString)
```

## sample rendering

```js
import {toHtml} from 'hast-util-to-html'


const tree = JSON.parse(jsonString) // or: doc([…])

const hast = render(tree)
const html = toHtml(hast)
document.getElementById('foo').innerHTML = html
```


# spec
## how to read

```
* an element
  - an attribute of this element
    - an option of this attribute
```

## elements

```
* paragraph
* heading
  - level
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
* media container
  - layout
    - undefined (default to 1x1, a single media)
    - 2x2
    - 3x3
    - 4x4
    - 1-2
    - 2-1
* tezos-storage-pointer -- see <https://github.com/fxhash/specifications/blob/main/general/tezos-storage-pointers.md>
* caption
* image
  - aspect-ratio
    - x/y
* quote
* hero
* column container
* table
```

### notes
* heading/paragraph/quote content allows in-line markdown
* table is a markdown table

## serialization

```json
{
  "type": "root",
  "version": "0.1.2",
  "generatedBy": "Some Tool <http://example.com>",
  "children": [
    {
      "type": "heading",
      "level": 1,
      "children": [
        {
          "type": "text",
          "value": "Title"
        }
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "children": [
        {
          "type": "text",
          "value": "Subtitle"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Welcome"
        }
      ]
    }
  ]
}
```
