import "./header.component.scss";
import "../../../../lib/module/html.module";
import html from "./header.component.html";

import { FortyComponent } from "../../../../lib/classes/component";
import { Component } from "../../../../lib/decorators/component.decorator";

@Component({
  selector: "forty-header",
})
export class HeaderComponent extends FortyComponent {
  constructor() {
    super();
  }

  public init(): void {
    this._initElementRef();
    this._initEventListeners();
    this._initState();

    // Able to use raw HTML for dumb components
    console.log(html);
  }

  private _initElementRef(): void {
    const testConfig = {
      values: ["Made", "With", "Love"],
    };

    this.createComponent(
      "header",
      `
        <h1>Forty!</h1>
        <forty-test config=${this.componentService.parseComponentConfig(
          testConfig
        )}></forty-test>
      `
    );
  }

  private _initEventListeners(): void {
    const test = () => {
      console.log(
        `You clicked the ${this.componentProperties.selector} component`
      );
    };
    this.createEvents(new Map([["click", test]]));
  }

  private _initState(): void {
    this.createState({ visible: true, loading: false });
  }
}
