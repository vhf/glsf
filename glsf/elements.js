import {u} from 'unist-builder'

export const doc = (content) => u('root', content)
export const paragraph = (text) => u('paragraph', [u('text', text)])
export const heading = (text, attrs) => u('heading', attrs, [u('text', text)])
export const mediaContainer = (content, attrs) =>
  u('media-container', attrs, content)
export const token = (tokenId, fa2) => u('token', {tokenId, fa2})
export const image = (url, attrs) => u('image', {...attrs, url})
