import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) { // Salvar os items no Local Storage
   localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
   const json = localStorage.getItem("u")

   if(!json) return null;

   const user = JSON.parse(json);
   return user ?? null;
}

export async function LoginRequest ({email, password}: IUser) {
   try {
      const request = await Api.post("login", { email, password });

      return request.data;
   } catch (error) {
      return null;
   }
}