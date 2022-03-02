export interface ComponentState {
  visible?: boolean;
  loading?: boolean;
}

export type ComponentStyles = Map<string, string>;
export type ComponentEvents = Map<string, any>;

export interface ComponentProperties {
  id: string;
  elementRef: HTMLElement;
  selector?: string;
  styles?: ComponentStyles;
  state?: ComponentState;
  events?: ComponentEvents;
}

export type ComponentConfig = any;

export interface IComponent {
  createComponent: (elementType: string, markup: string) => void;
  createStyles: (styles: ComponentStyles) => void;
  createEvents: (events: ComponentEvents) => void;
  createState: (state: ComponentState) => void;
  init?: () => void;
}
