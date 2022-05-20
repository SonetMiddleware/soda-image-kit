import { registerMediaType } from '@soda/soda-media-sdk'

const getCacheImage = (source: string, attachInfo?: string) => {
  return source
}

const render = (source: string, dom: HTMLDivElement, config?: any) => {
  if (config && config.replace) {
    //@ts-ignore
    dom.src = source
  } else {
    const img = document.createElement('img')
    img.src = source
    img.style.cssText = config.css
    if (config && config.insertBefore) {
      dom.parentElement.insertBefore(img, dom)
    } else {
      dom.append(img)
    }
  }
}
const initialize = () => {
  registerMediaType({
    name: 'image',
    meta: {
      cacheImageFunc: getCacheImage,
      renderFunc: render
    }
  })
}

export { getCacheImage, render }
export default initialize
