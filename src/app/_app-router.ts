export type Route = { path: string; module: any };
export type Routes = Array<Route>;

export class AppRouter {
  private _routes: Routes;
  private _currentRoute: Route;

  set currentRoute(route: Route) {
    this._currentRoute = route;
  }

  get currentRoute(): Route {
    return this._currentRoute;
  }

  constructor(routes: Routes) {
    this._routes = routes;
    this.currentRoute = this._routes[1];
  }

  public init(): Array<any> {
    return this._currentRoute.module.init();
  }

  public changeRoute(route: string): void {
    this.currentRoute = this._routes.filter((x) => x.path === route)[0];
    this.init();
  }
}
