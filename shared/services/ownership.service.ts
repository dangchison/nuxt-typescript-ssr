import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ResponsePaginateTypes, RequestParamsInput } from '~/shared/interfaces/axios.interface'
import { OwnershipRequestBody } from '~/shared/interfaces/ownership.interface'

export const getOwnerShips = (
  request: NuxtAxiosInstance,
  bodyData: Partial<OwnershipRequestBody> = {},
  params: Partial<RequestParamsInput> = {},
): Promise<ResponsePaginateTypes> => {
  return request.post('search/ownership', bodyData, { params })
}

export const getOwnerShipDetails = (request: NuxtAxiosInstance, bodyData: string[]): Promise<any[]> => {
  return request.post('search/ownerships/list', bodyData)
}
