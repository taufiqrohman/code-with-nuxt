<template>
  <div class="flex h-screen overflow-hidden bg-gray-100 w-full">
    <sidebar />
    <div class="flex-1 overflow-auto">
      <div
        class="w-full flex flex-row justify-between items-center h-16 p-4 lg:p-8 lg:pt-12"
      >
        <h3 class="text-gray-800 font-bold text-2xl">{{ pageTitle }}</h3>
        <user-info />
      </div>
      <div class="p-4 lg:p-8">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "~/parts/Sidebar.vue";
import UserInfo from "~/parts/UserInfo.vue";

export default Vue.extend({
  components: { Sidebar, UserInfo },
  computed: {
    pageTitle: function () {
      return this.$store.state.app.title;
    },
  },
});
</script>
