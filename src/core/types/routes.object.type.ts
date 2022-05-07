/**
 *
 * these type are using to build a better routing for react apps
 */

export type RoutesObject = {
  [name: string]: Route
}

export type Route = {
  get: string
  return: JSX.Element
  title: string
}
