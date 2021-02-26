<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" sm="8" md="6" xl="4">
      <v-card class="pa-10">
        <v-card-title>This is Login Page</v-card-title>
        <v-card-actions>
          <v-btn color="primary" rounded block @click="onLogin">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'auth',
})
export default class LoginPage extends Vue {
  onLogin() {}
}
</script>
