import { AppRouter } from "./_app-router";

interface AppConfig {
  rootElement: HTMLElement;
  router: AppRouter;
}

interface IApp {
  config: AppConfig;
}

// @Component({
//   selector: "forty-root",
// })
// export class App extends IComponent {
//   constructor(config: AppConfig) {
//     super(config);
//   }

//   public init(): void {
//     const components = this.config.router.init();
//     components.forEach((component: any) => this._addToApp(component.init()));
//   }

//   private _addToApp(component: any) {
//     this.config.rootElement.appendChild(component.elementRef);
//   }
// }
