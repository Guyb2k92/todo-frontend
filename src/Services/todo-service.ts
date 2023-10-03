import { IHttpClient } from "@aurelia/fetch-client";
import { Auth } from "./auth-service";

export class TodoService {
  constructor(@IHttpClient private http: IHttpClient, private auth: Auth) {
    http.configure((config) =>
      config.withBaseUrl("api/").withDefaults({
        credentials: "same-origin",
        headers: {
          Accept: "*/*",
          "X-Requested-With": "Fetch",
          Authorization: `Bearer ${auth.token}`,
        },
      })
    );
  }

  async GetTodos() {
    const request = await this.http.fetch("https://localhost:7231/todos");
    const response = await request.json();
  }
}
