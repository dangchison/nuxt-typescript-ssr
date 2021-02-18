export default function (req: any, res: any, next: Function) {
  console.log(req.url)
  next()
}
