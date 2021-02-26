<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  middleware: ['un-auth'],
})
export default class AppLayout extends Vue {}
</script>
