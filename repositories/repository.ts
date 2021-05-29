import { NuxtAxiosInstance } from "@nuxtjs/axios";
import userRepository, { UserRepository } from "./user_repository";

export interface Repository {
  user: UserRepository,
}

export default ($axios: NuxtAxiosInstance): Repository => ({
  user: userRepository($axios)
});
