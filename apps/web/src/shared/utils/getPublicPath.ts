import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const getPublicPath = (assetUrl: string) =>
  assetUrl.startsWith('/')
    ? `${publicRuntimeConfig.assetPrefix}${assetUrl}`
    : assetUrl
