import { AxiosOptions, NuxtAxiosInstance } from "@nuxtjs/axios";
import { ListApiResponse, SingleApiResponse } from "~/types";
import { User } from "~/types/models";

const path = "/users";

export interface UserRepository {
  list: (page: number) => Promise<ListApiResponse<User>>;
  detail: (id: number) => Promise<SingleApiResponse<User>>,
};

export default ($axios: NuxtAxiosInstance): UserRepository => ({
  list: async (page: number) => {
    let response: ListApiResponse<User>;

    try {
      const request = await $axios.get(path, { params: { page } });
      const data = request.data;
      response = {
        data: data.data,
        error: undefined,
        isError: false,
        page: data.page,
        perPage: data.per_page,
        totalPage: data.total_pages,
        total: data.total
      };
    } catch (error) {
      response = {
        data: [],
        error: error,
        isError: true,
        page: 0,
        perPage: 0,
        totalPage: 0,
        total: 0
      };
    }

    return response;
  },
  detail: async (id: number) => {
    let response: SingleApiResponse<User>;
    
    try {
      const request = await $axios.get(`${path}/${id}`);
      response = {
        data: request.data.data,
        error: undefined,
        isError: false,
      };
    } catch(error) {
      response = {
        data: undefined,
        error: error,
        isError: true,
      };
    }

    return response;
  }
});
