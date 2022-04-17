import axios from "axios";
import $api from "../http";

export default class AuthService {
  static async registration(username, email, password) {
    return $api.post("/signup", {
      username,
      email,
      password,
    });
  }

  static async login(username, email, password) {
    return $api.post("/signin", {
      username,
      email,
      password,
    });
  }
}
