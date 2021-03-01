import { Plugin } from '@nuxt/types'
import { get } from 'lodash'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { remove } from '~/shared/utils/cookie'

const HandlingError = (err: AxiosError, $toast: any, redirect: any) => {
  if (get(err, 'response')) {
    const errorCode: number = get(err, 'response.status')

    if (errorCode === 401) {
      $toast.error(get(err, 'response.message', 'access token has expired'))
      remove(process.env.tokenName)
      redirect('/login')
    }

    if (![404, 422].includes(get(err, 'response.status'))) {
      $toast.error(get(err, 'response.message', 'Internal service error'))
    }
  }

  return get(err, 'response.data')
}

const handleParams = (params: any) => {
  for (const key in params) {
    if (typeof params[key] === 'string' && !params[key].trim()) {
      delete params[key]
    }
  }
}

const myAxios: Plugin = ({ $axios, $toast, redirect }) => {
  $axios.onRequest(({ params, data }: AxiosRequestConfig) => {
    handleParams(params)
    handleParams(data)
  })

  $axios.onRequestError((error: AxiosError) => {
    Promise.reject(error)
  })

  $axios.onResponse((response: AxiosResponse) => {
    return response.data
  })

  $axios.onResponseError((err: AxiosError) => {
    return Promise.reject(HandlingError(err, $toast, redirect))
  })
}

export default myAxios
