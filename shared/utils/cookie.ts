import Cookies, { CookieAttributes } from 'js-cookie'

export const get = (key: string | undefined) => {
  if (!key) {
    return ''
  }
  return Cookies.get(key)
}

export const set = (key: string | undefined, value: string | Object, options?: CookieAttributes) => {
  if (!key) {
    return
  }
  Cookies.set(key, value, { expires: 7, secure: false, ...options })
}

export const remove = (key: string | undefined) => {
  if (!key) {
    return
  }

  Cookies.remove(key)
}
