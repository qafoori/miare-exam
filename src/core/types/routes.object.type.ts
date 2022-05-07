export type RoutesObject = {
  [name: string]: Route
}

export type Route = {
  get: string
  return: JSX.Element
  title: string
}
