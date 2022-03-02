import {
  ComponentConfig,
  ComponentEvents,
  ComponentProperties,
  ComponentState,
  ComponentStyles,
  IComponent,
} from "../models/component.model";
import { ComponentService } from "../services/component.service";

export class FortyComponent extends HTMLElement implements IComponent {
  public readonly componentService = new ComponentService();
  public readonly root: ShadowRoot;
  public componentProperties: ComponentProperties | any = {};
  public config: ComponentConfig;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  public connectedCallback(): void {}

  public createComponent(elementType: string, markup: string): void {
    this._createElementRef(
      this.componentService.createComponentElement(elementType, markup)
    );
  }

  public createStyles(styles: ComponentStyles): void {
    this.componentProperties.styles = styles;
  }

  public createEvents(events: ComponentEvents): void {
    this.componentProperties.events = events;
  }

  public createState(state: ComponentState): void {
    this.componentProperties.state = state;
  }

  private _createElementRef(elementRef: HTMLElement): void {
    this.componentProperties.elementRef = elementRef;
    this.componentProperties.id = this.componentService.createComponentId();
    this.id = this.componentProperties.id;
  }
}
