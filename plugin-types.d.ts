import Vue from "vue";
import { Repository } from "./repositories/repository";

declare module "vue/types/vue" {
    interface Vue {
        $repositories: Repository
    }
}
