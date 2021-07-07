interface IRedirectProps {
  to: string | string;
  from?: string;
  push?: boolean;
  exact?: boolean;
  strict?: boolean;
}

export interface IRouterConfigProps {
  path: string[] | string;
  component: any;
  exact?: boolean;
  redirect?: IRedirectProps;
  [propName: string]: any;
  key: string;
}

interface IChildrenRouteProps {
  childrenRoutes: Array<IRouterConfigProps>;
}

export interface IRouteProps extends IRouterConfigProps, IChildrenRouteProps {}
