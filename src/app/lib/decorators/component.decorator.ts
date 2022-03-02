import {
  ComponentConfig,
  ComponentEvents,
  ComponentProperties,
  ComponentStyles,
} from "../models/component.model";

interface IComponentDecorator {
  selector: string;
}

export function Component(decorator: IComponentDecorator) {
  return function <
    T extends {
      new (...args: any[]): {
        componentProperties: ComponentProperties;
        root: ShadowRoot;
        config: ComponentConfig;
        getAttribute: (json: any) => string;
        init(): void;
      };
    }
  >(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        initializeComponent.call(this, decorator);

        attachEvents(
          this.componentProperties.events,
          this.componentProperties.elementRef
        );

        attachStyles(
          this.componentProperties.styles,
          this.componentProperties.elementRef
        );
      }
    };
  };
}

function initializeComponent(decorator: IComponentDecorator): void {
  this.config = JSON.parse(this.getAttribute("config"));

  this.componentProperties.selector = decorator.selector;
  this.init();
  this.root.appendChild(this.componentProperties.elementRef);
}

function attachEvents(events: ComponentEvents, element: HTMLElement): void {
  events?.forEach((e, type) => {
    element.addEventListener(type, e);
  });
}

function attachStyles(styles: ComponentStyles, element: HTMLElement): void {
  styles?.forEach((style, key) => {
    element.style[key] = style;
  });
}
