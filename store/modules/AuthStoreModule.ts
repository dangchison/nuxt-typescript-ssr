import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'modules/AuthStoreModule',
  stateFactory: true,
  namespaced: true,
})
export default class AuthStoreModule extends VuexModule {
  token: string = ''

  get isAuthenticated(): boolean {
    return !!this.token
  }

  @Mutation
  updateToken(token: string) {
    this.token = token
  }

  @Action({ rawError: true, commit: 'updateToken' })
  setToken(token: string) {
    return token
  }
}
