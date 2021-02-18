<template>
  <v-row justify="center" align="center">
    <template v-for="product of products">
      <v-col cols="12" sm="8" md="6" :key="product.ownership.id">
        <v-card @click="onGotoProductDetail(product.ownership.id)">
          <v-card-title>
            {{ product.nftAsset.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: [],
    }
  },
  mounted() {
    this.fetchOwnerships()
  },
  methods: {
    onGotoProductDetail(productId) {
      this.$router.push({ name: 'product-id___en', params: { id: productId } })
    },
    fetchOwnerships() {
      if (this.isLoading) {
        return
      }

      const ownershipBody = {
        type: 'in_stock',
        notForSale: false,
        onSale: false,
      }

      const ownershipParams = {
        sort: 'date,desc',
        size: 10,
        page: 0,
      }

      this.isLoading = true

      this.$axios
        .post(`/ownerships`, ownershipBody, ownershipParams)
        .then((result) => {
          this.products = result.content
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>
