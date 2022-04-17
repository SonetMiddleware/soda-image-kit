import { registerMediaType } from '@soda/soda-media-sdk'
import { mixWatermarkImg } from './utils/imgHandler'
import { generateQrCodeBase64 } from './utils/qrcode'

const getCacheImage = async (source: string, attachInfo?: string) => {
  if (!attachInfo) {
    return source
  }
  const qrcode = await generateQrCodeBase64(attachInfo)
  const [imgDataUrl, imgDataBlob] = await mixWatermarkImg(source, qrcode)
  return imgDataUrl
}

const render = (source: string, dom: HTMLElement) => {
  dom.append(`<img src=${source} />`)
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

export * from './utils/qrcode'
export * from './utils/imgHandler'
export { getCacheImage, render }
export default initialize
