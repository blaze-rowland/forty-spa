import { FortyApp } from "./lib/classes/app";
import { FortyRouter } from "./lib/classes/router";
export class App extends FortyApp {
  private _router: FortyRouter;

  constructor(router: FortyRouter) {
    super(null);
    this._router = router;
  }

  public init(): void {
    this._initializeRouter();
  }

  private _initializeRouter(): void {
    this._router.init();
  }
}
