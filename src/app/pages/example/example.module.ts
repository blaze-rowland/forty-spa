import { FortyModule } from "../../lib/classes/module";
import { HeaderComponent } from "./components/header/header.component";
import { TestComponent } from "./components/test.component";

export class ExampleModule extends FortyModule {
  constructor() {
    // Will eventually have this done within the FortyModule init method
    customElements.define("forty-header", HeaderComponent);
    customElements.define("forty-test", TestComponent);

    super([HeaderComponent, TestComponent]);
  }
}
