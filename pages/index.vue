<template>
  <v-row justify="center" align="center">
    <template v-for="item of ownerships">
      <v-col v-if="item.product" :key="item.ownership.id" cols="12" sm="8" md="6">
        <v-card @click="onGotoProductDetail(item.ownership.id)">
          <v-card-title>
            {{ item.product.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { ResponsePaginateTypes, RequestParamsInput } from '~/shared/interfaces/axios.interface'
import { OwnershipRequestBody } from '~/shared/interfaces/ownership.interface'
import { OwnershipModel, OwnershipModelInput } from '~/shared/models/ownership.model'

import { getOwnerShips } from '~/shared/services/ownership.service'

import { push } from '~/shared/utils/router'

@Component
export default class HomeComponent extends Vue {
  isLoading: boolean = false
  ownerships: OwnershipModel[] = []

  mounted(): void {
    this.fetchOwnerships()
  }

  onGotoProductDetail(productId: string) {
    push(this, { name: `product-id`, params: { id: productId } })
  }

  fetchOwnerships() {
    if (this.isLoading) {
      return
    }

    const ownershipBody: Partial<OwnershipRequestBody> = {
      type: 'in_stock',
      onSale: true,
      verifiedOnly: false,
      category: '',
    }

    const ownershipParams: Partial<RequestParamsInput> = {
      sort: 'ownership.date,desc',
      size: 10,
    }

    this.isLoading = true

    getOwnerShips(this.$axios, ownershipBody, ownershipParams)
      .then((result: ResponsePaginateTypes) => {
        this.ownerships = result.content.map((item: OwnershipModelInput) => new OwnershipModel().deserialize(item))
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>
