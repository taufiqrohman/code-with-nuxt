<template>
  <div class="w-full p-8">
    <table class="w-full">
      <thead>
        <tr class="border-b-2 border-gray-200 border-collapse">
          <th class="p-4 w-24 text-center"></th>
          <th class="p-4 text-left font-weight-bold text-gray-400 w-1/3">
            Full Name
          </th>
          <th class="p-4 text-left font-weight-bold text-gray-400 w-1/3">Email</th>
          <th class="p-4"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="`user-${user.id}`" class="border-b border-gray-200">
          <td class="p-4">
            <img
              :src="user.avatar"
              class="w-11 h-11 rounded-full objcet-cover"
              :alt="`${user.first_name} ${user.last_name}`"
            />
          </td>
          <td class="p-4">
            {{ `${user.first_name} ${user.last_name}` }}
          </td>
          <td class="p-4">{{ user.email }}</td>
          <td class="p-4 text-right">
            <a href="#" class="bg-blue-400 rounded-full p-4 text-xs uppercase text-white">
              View Detail
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "~/types/models";

interface UserListData {
  currentPage: number;
  perPage: Number;
  totalPage: number;
  total: number;
  data: Array<User>;
  error?: String;
}

export default Vue.extend({
  data: function (): UserListData {
    return {
      currentPage: 0,
      totalPage: 0,
      perPage: 0,
      total: 0,
      data: [],
      error: undefined,
    };
  },
  mounted: function () {
    this.fetchUserList();
  },
  methods: {
    fetchUserList: async function () {
      const result = await this.$repositories.user.list(this.currentPage + 1);
      if (result.isError && result.error !== undefined) {
        this.error = result.error;
        return;
      }

      this.data = result.data;
      this.currentPage = result.page;
      this.perPage = result.perPage;
      this.totalPage = result.totalPage;
      this.total = result.total;
      this.error = undefined;
    },
  },
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
