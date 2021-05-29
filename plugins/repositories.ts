import initRepository from "../repositories/repository";
import { Context } from "@nuxt/types";
import { Inject } from "@nuxt/types/app";

export default (context: Context, inject: Inject) => {
  inject('$repositories', initRepository(context.$axios));
}