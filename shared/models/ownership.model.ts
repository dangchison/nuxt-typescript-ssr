import { Deserializable } from '~/shared/interfaces/deserializable'

export interface OwnershipModelInput {
  ownership: any
  product: any
}

export class OwnershipModel implements Deserializable<OwnershipModel>, OwnershipModelInput {
  ownership: any
  product: any

  deserialize(input: Partial<OwnershipModelInput>): OwnershipModel {
    Object.assign(this, input)
    return this
  }
}
