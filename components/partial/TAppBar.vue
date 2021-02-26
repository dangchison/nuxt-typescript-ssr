<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <!--    <v-btn icon @click.stop="miniVariant = !miniVariant">-->
    <!--      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
    <!--    </v-btn>-->
    <v-toolbar-title v-text="title" />
    <v-spacer />

    <v-btn color="primary" @click="onLogout">logout</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { remove } from '~/shared/utils/cookie'
import { push } from '~/shared/utils/router'

@Component
export default class TAppBarComponent extends Vue {
  @Prop({
    default: false,
  })
  clipped!: boolean

  @Prop({
    default: '',
  })
  title!: string

  onLogout() {
    remove(process.env.tokenName)
    push(this, { name: 'login' })
  }
}
</script>
