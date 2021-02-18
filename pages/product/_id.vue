<template>
  <v-card>
    <v-img :src="productImage" width="300" height="300"></v-img>
    <v-card-text>{{ product[0].nftAsset.name }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Id',
  async asyncData({ params }) {
    const product = await fetch('https://teemo-ai-service.herokuapp.com/ownerships/list', {
      method: 'POST',
      body: JSON.stringify([params.id]),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
    return { product }
  },
  data() {
    return {
      product: [],
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product[0].nftAsset.name,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.product[0].nftAsset.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.productImage,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.productImage,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product[0].nftAsset.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product[0].nftAsset.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.productImage,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.productImage,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.product[0].nftAsset.name,
        },
      ],
    }
  },
  computed: {
    productImage() {
      return [process.env.ipfsGateway, this.product[0].nftAsset.image].join('')
    },
  },
}
</script>
