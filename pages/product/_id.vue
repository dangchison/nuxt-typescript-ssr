<template>
  <v-card width="300">
    <v-img :src="$ipfsRender(product.image)" height="300"></v-img>
    <v-card-text>{{ product.name }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getOwnerShipDetails } from '~/shared/services/ownership.service'

@Component({
  asyncData({ $axios, $toast, params: { id }, redirect }) {
    return getOwnerShipDetails($axios, [id])
      .then((result: any) => {
        return { product: result[0] }
      })
      .catch((err: any) => {
        $toast.error(err.error)
        redirect({ name: 'index' })
      })
  },
  head(this: ProductDetailsComponent) {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product.name,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.product.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.product.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.product.image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.product.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.product.name,
        },
      ],
    }
  },
})
export default class ProductDetailsComponent extends Vue {
  product: any = {}
}
</script>
