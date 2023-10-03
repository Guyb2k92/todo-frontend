import { IRoute, IRouteableComponent, IRouter } from "@aurelia/router";
import { Auth } from "./Services/auth-service";
import { TodoService } from "./Services/todo-service";

export class MyApp implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      path: "/login",
      component: import("./login"),
      title: "Login Page",
    },
    {
      path: ["/", "home"],
      component: import("./my-app"),
      title: "Home Page",
    },
  ];
  constructor(
    private _todoService: TodoService,
    private _auth: Auth,
    @IRouter private router: IRouter
  ) {}
}
