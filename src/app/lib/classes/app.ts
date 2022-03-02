import { FortyRouter } from "./router";

export interface IFortyAppConfig {
  rootElement: HTMLElement;
  router: FortyRouter;
}
export class FortyApp {
  private _config: IFortyAppConfig;

  constructor(config: IFortyAppConfig) {
    this._config = config;
  }

  public init(): void {
    this._config.router.init();

    this._config.rootElement.appendChild(
      new this._config.router.currentRoute.module.components[0]()
        .componentProperties.elementRef
    );
  }
}
