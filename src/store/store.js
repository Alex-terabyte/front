import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "../API/AuthService";
import { AuthContext } from "./../context/index";
import { useContext } from "react";

export default class Store {
  user = {};
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  async login(username, email, password) {
    try {
      const response = await AuthService.login(username, email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.isAuth = true;
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(username, email, password) {
    try {
      const response = await AuthService.registration(
        username,
        email,
        password
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.isAuth = true;
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
