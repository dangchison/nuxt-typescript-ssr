import { Middleware, Context } from '@nuxt/types'

const myUnAuth: Middleware = ({ redirect, store }: Context) => {
  if (store.getters['modules/AuthStoreModule/isAuthenticated']) {
    redirect({ name: 'index' })
  }
}

export default myUnAuth
