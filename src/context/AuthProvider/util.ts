import { Api } from "../../services/api";
import { IUser } from "./types";

export async function LoginRequest ({email, password}: IUser) {
   try {
      const request = await Api.post("login", { email, password });

      return request.data;
   } catch (error) {
      return null;
   }
}