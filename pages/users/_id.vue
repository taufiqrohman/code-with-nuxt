<template>
  <div class="w-full">
    <div class="w-2/5 bg-white rounded border-gray-200 p-8">
      <div v-if="state === 'loading' && user === undefined" class="h-8">
        Loading ...
      </div>

      <div
        v-if="state === 'error'"
        class="bg-red-100 rounded p-2 border border-red-300 text-sm text-red-600"
      >
        {{ error || "An error occured." }} <br />
        <strong @click="fetchUser">Retry</strong>
      </div>

      <div v-if="state === 'success'" class="w-full flex flex-col">
        <h3 class="font-semibold text-gray-800 text-xl mb-8">
          {{ `${user.first_name} ${user.last_name}` }}
        </h3>

        <div class="flex flex-row justify-start items-start">
          <div class="w-1/2">
            <img
              class="w-full rounded object-cover"
              :src="user.avatar"
              alt=""
            />
          </div>
          <div class="w-1/2 flex flex-col pl-8">
            <div class="text-gray-800 text-base font-normal">First Name</div>
            <div class="text-gray-500 text-base mb-8">
              {{ user.first_name }}
            </div>

            <div class="text-gray-800 text-base font-normal">Last Name</div>
            <div class="text-gray-500 text-base mb-8">{{ user.last_name }}</div>

            <div class="text-gray-800 text-base font-normal">Email</div>
            <div class="text-gray-500 text-base mb-8">{{ user.email }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <primary-button to="/users">Back</primary-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PrimaryButton from "~/components/PrimaryButton.vue";
import { User } from "~/types/models";

enum State {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

interface Data {
  state: State;
  user?: User;
  error?: String;
}

export default Vue.extend({
  components: { PrimaryButton },
  data: function (): Data {
    return {
      state: State.Loading,
      user: undefined,
      error: undefined,
    };
  },
  mounted: function () {
    this.fetchUser();
  },
  computed: {
    id: function () {
      return Number(this.$route.params.id);
    },
  },
  methods: {
    fetchUser: async function () {
      this.state = State.Loading;

      const response = await this.$repositories.user.detail(this.id);
      if (response.isError) {
        this.state = State.Error;
        this.error = response.error;
        return;
      }

      this.state = State.Success;
      this.user = response.data;
      this.error = undefined;
    },
  },
});
</script>
