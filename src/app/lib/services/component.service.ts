import { ComponentConfig } from "../models/component.model";

export class ComponentService {
  constructor() {}

  public createComponentId(): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substring(0, 5);
  }

  public markupMap(
    arr: Array<any>,
    cb: (item: string, index?: number) => string
  ): string {
    if (!arr?.length) return;
    return arr.map((current, index) => cb(current, index)).join("");
  }

  public createComponentElement(
    elementType: string,
    markup: string
  ): HTMLElement {
    const element = document.createElement(elementType);
    element.innerHTML = markup;
    return element;
  }

  public parseComponentConfig(config: ComponentConfig): string {
    return JSON.stringify(config);
  }
}
