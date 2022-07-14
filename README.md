# on chain galleries structured format

This design document proposes a structured format for galleries description. The gallery description would be an IPFS-stored JSON file.

Anyone interested in displaying such galleries would implement their own CSS.

Ideally, a `gallery -> html` frontend lib would be provided.
Ideally, a visual tool producing a `gallery` structured document would be provided.

## how to read

* an element
  - an attribute of this element
    - an option of this attribute
  > a children element (this element MUST be a child of this parent)

## elements

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
    - undefined (default)
    - 2x2
    - 3x3
    - 4x4
    - 1-2
    - 2-1
  > token
    - id
    - contract
  > caption
* quote
* hero
* column container
* table
* image
  - aspect-ratio
    - x/y

### notes
* heading/paragraph/quote content is in-line markdown
* table is a markdown table

## serialization

```json
{
  "version": "0.0.1",
  "generated_by": "url",
  "children": [
    {
      "elt": "",
      "attrs": {
        "attr": ""
      },
      "content": "",
      "children": []
    }
  ]
}
```
