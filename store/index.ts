import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import Vuex, { Store } from 'vuex'
import { parse } from 'cookie'
import AuthStoreModule from '~/store/modules/AuthStoreModule'

interface RootState {
  version: string
}

const store = new Vuex.Store<RootState>({
  modules: {
    AuthStoreModule,
  },
})

const authStore = getModule(AuthStoreModule, store)

const actions = {
  nuxtServerInit(
    {},
    {
      req: {
        headers: { cookie },
      },
      store,
    }: Context,
  ) {
    if (cookie) {
      const cookieResults = parse(cookie)
      const authStoreTmp = getModule(AuthStoreModule, store)

      if (cookieResults.at) {
        authStoreTmp.setToken(cookieResults.at)
      }
    }
    // do it once more like so..
    // now just import stores from utils..
    // authStore.setToken('123123123123')
    // NOTE:
    // now all server side functions (asyncData, fetch etc..) will work without the need
    // for you to initialize stores only because nuxtServerInit is the very first function
    // called once server side. You'll need to call initialiseStores(ctx.store) once more client
    // side for everything to work (client side) correctly. I suggest using the module
    // nuxtClientInit and do the same.
  },
}

export { authStore, store, actions }
