import Vue from "vue";
import initRepository from "../repositories/repository";
import { Context } from "@nuxt/types";
import { Inject } from "@nuxt/types/app";

export default (context: Context) => {
  Vue.prototype.$repositories = initRepository(context.$axios);
}