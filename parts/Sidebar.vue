<template>
  <aside class="hidden lg:flex lg:flex-shrink-0 bg-default-gray">
    <div class="flex flex-col w-64">
      <div class="flex items-center flex-row flex-shrink-0 p-8 mb-8">
        <img src="~/assets/images/logo.png" alt="AOne Logo" class="mr-4" />
        <div class="text-white font-bold text-xl">AOne</div>
      </div>

      <nav class="flex flex-col">
        <nav-item to="/" :active="$route.path == '/'">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About
        </nav-item>

        <nav-item
          to="/users"
          :active="$route.path == '/users' || $route.name == 'users-id'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Users
        </nav-item>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import NavItem from "~/components/NavItem.vue";
export default Vue.extend({
  components: { NavItem },
});
</script>