import { json } from "aurelia-fetch-client";
import { LoginRequest } from "../Models/login-request-model";
import { IHttpClient } from "aurelia";

export class Auth {
  token: string;

  constructor(@IHttpClient private _http: IHttpClient) {
    this.token = localStorage.getItem("token") || null;
  }

  async login() {
    const userInfo: LoginRequest = {
      Username: "guyb@twizza.co.za",
      Password: "Demjeans1339!@#",
    };

    try {
      const request = await this._http.fetch(
        "https://localhost:7231/api/Auth/Login",
        {
          method: "post",
          body: json(userInfo),
        }
      );

      if (request.ok) {
        const response = await request.json();
        localStorage.setItem("token", response.jwtToken);
        this.token = response.jwtToken;
        this.token = null;
        localStorage.removeItem("token");
      } else {
        // Handle the case where the request was not successful (e.g., error handling)
        console.error("Error:", request.statusText);
      }
    } catch (error) {
      // Handle any exceptions that may occur during the fetch or JSON parsing
      console.error("Error:", error);
    }
  }

  async getToken() {
    return this.token;
  }
}
