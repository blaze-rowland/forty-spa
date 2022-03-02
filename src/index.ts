import { FortyApp } from "./app/lib/classes/app";
import { FortyRouter } from "./app/lib/classes/router";
import { ExampleModule } from "./app/pages/example/example.module";
import "./styles/index.scss";

const app = new FortyApp({
  rootElement: document.getElementById("app"),
  router: new FortyRouter([
    {
      path: "/",
      module: new ExampleModule(),
    },
  ]),
});

app.init();
