import { Plugin } from '@nuxt/types'
import { last } from 'lodash'

const urljoin = require('url-join')

declare module 'vue/types/vue' {
  interface Vue {
    $ipfsRender(ipfsPath: string): void
  }
}

const myIPFSPlugin: Plugin = (context, inject) => {
  inject('ipfsRender', (ipfsPath: string) => {
    const gateway = 'http://45.77.170.208:8080/ipfs/'

    const ipfsHash = ipfsPath && last(ipfsPath.split('/'))
    const hasIpfs = !ipfsPath || ipfsHash === 'undefined'

    return hasIpfs
      ? require('~/assets/images/img-404.png')
      : urljoin([(gateway || '').toString(), (ipfsHash || '').toString()])
  })
}

export default myIPFSPlugin
