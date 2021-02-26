import { ServerMiddleware } from '@nuxt/types'

const myLooger: ServerMiddleware = (req: any, res: any, next: Function) => {
  console.log(req.url)
  next()
}

export default myLooger
