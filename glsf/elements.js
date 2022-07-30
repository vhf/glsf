import {u} from 'unist-builder'

export const doc = (content, attrs) => u('root', attrs, content)
export const paragraph = (text) => u('paragraph', [u('text', text)])
export const heading = (text, attrs) => u('heading', attrs, [u('text', text)])
export const mediaContainer = (content, attrs) =>
  u('media-container', attrs, content)
export const token = (tezosStoragePointer) => u('token', tezosStoragePointer)
export const image = (url, attrs) => u('image', {...attrs, url})
