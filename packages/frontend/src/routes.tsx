import {useMemo} from 'react'
import {useRoutes} from 'hookrouter'
import Dashboard from './pages/Dashboard'
import Items from './pages/Items'
import Item from './pages/Item'

export type IRouteObject = {
  // show a different page title
  title?: string,
  page: JSX.Element,
}

export type IRouteFactory = (props: Record<string, any>) => IRouteObject | JSX.Element

function isRouteObject(route: IRouteObject | JSX.Element): route is IRouteObject {
  return (route as IRouteObject).page !== undefined
}

export const routes: Record<string, IRouteFactory> = {
  '/items': () => ({
    title: 'Items',
    page: <Items />,
  }),
  '/items/:id': (props) => <Item id={props.id} />,
  '/test': (props) => ({
    title: 'Test',
    page: <Dashboard />,
  }),
  '/': () => ({
    title: 'Home',
    page: <Dashboard />
  }),
}

export const useRoute = (): IRouteObject => {
  const routeResult = useRoutes(routes) as (IRouteObject | JSX.Element)
  if(isRouteObject(routeResult)) {
    return routeResult
  }
  else {
    return {
      page: routeResult,
    }
  }
}

export default routes