import { FortyModule } from "./module";

interface Route {
  path: string;
  module: FortyModule;
}

export class FortyRouter {
  private _routes: Array<Route>;
  private _currentRoute: Route;

  get routes(): Array<Route> {
    return this._routes;
  }

  set currentRoute(currentRoute: Route) {
    this._currentRoute = currentRoute;
  }

  get currentRoute(): Route {
    return this._currentRoute;
  }

  constructor(routes: Array<Route>) {
    this._routes = routes;
  }

  public init(): void {
    this.currentRoute = this.routes[0];
    this.currentRoute.module.init();
  }
}
