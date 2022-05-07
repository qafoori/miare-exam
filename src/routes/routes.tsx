import { privateRoutes } from './definition/private.routes'
import { publicRoutes } from './definition/public.routes'

/**
 * 
 * all routes together
 */
export const routes = {
  public: publicRoutes,
  private: privateRoutes,
}
