import { FortyComponent } from "./component";

// export type FortyComponentConfig = new (...args: any[]) => FortyComponent;
export type FortyComponentConfig<T = FortyComponent> = new (
  ...args: any[]
) => T;

export class FortyModule {
  private _components: Array<FortyComponentConfig>;

  get components(): Array<FortyComponentConfig> {
    return this._components;
  }

  constructor(components: Array<FortyComponentConfig>) {
    this._components = components;
  }

  public init(): void {
    this._components.forEach((component) => new component());
  }
}
