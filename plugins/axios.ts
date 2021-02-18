/**
 * Introduction file
 * Auth: kenshin
 * Date: 2/18/21
 */
import { get } from 'lodash'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface InterceptorInput {
  $axios: NuxtAxiosInstance
  $toast: any
}

const HandlingError = (err: AxiosError, $toast: any) => {
  if (get(err, 'response')) {
    if (get(err, 'response.status') === 422) {
      return get(err, 'response.data')
    } else {
      $toast.error(get(err, 'message'), get(err, 'response.data.path') + ' ' + get(err, 'response.data.error'))
    }
  }
}

export default function ({ $axios, $toast }: InterceptorInput) {
  $axios.onRequest((config: AxiosRequestConfig) => {
    console.log('Making request to ' + config.url)
    $axios.setToken('123', 'Bearer')
  })

  $axios.onRequestError((error: AxiosError) => {
    Promise.reject(error)
  })

  $axios.onResponse((response: AxiosResponse) => {
    return response.data
  })

  $axios.onResponseError((err: AxiosError) => {
    return Promise.reject(HandlingError(err, $toast))
  })
}
