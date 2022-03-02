import { FortyComponent } from "../../../lib/classes/component";
import { Component } from "../../../lib/decorators/component.decorator";

@Component({
  selector: "forty-test",
})
export class TestComponent extends FortyComponent {
  public body: string = "I'm from the test component!";

  constructor() {
    super();
  }

  public init(): void {
    this._initElementRef();
    this._initStyles();
    this._initEventListeners();
    this._initState();
  }

  private _initElementRef(): void {
    this.createComponent(
      "div",
      `${this.body}` +
        this.componentService.markupMap(
          this.config?.values,
          (item) => `
            <p>${item}</p>
          `
        )
    );
  }

  private _initStyles(): void {
    this.createStyles(
      new Map([
        ["align-items", "center"],
        ["display", "flex"],
        ["gap", "0.5em"],
      ])
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
