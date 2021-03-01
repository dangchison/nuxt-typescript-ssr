import { Middleware, Context } from '@nuxt/types'

const myAuth: Middleware = ({ redirect, store }: Context) => {
  if (!store.getters['modules/AuthStoreModule/isAuthenticated']) {
    redirect('/login')
  }
}

export default myAuth
