<template>
  <div class="flex h-screen overflow-hidden bg-gray-100 w-full">
    <sidebar />
    <div class="flex-1 overflow-auto">
      <div class="w-full flex flex-row justify-between h-16 p-8">
        <h3 class="text-gray-800 font-bold text-lg">{{ pageTitle }}</h3>
      </div>
      <div class="p-8">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "~/parts/Sidebar.vue";

export default Vue.extend({
  components: { Sidebar },
  computed: {
    pageTitle: function () {
      return this.$store.state.app.title;
    },
  },
});
</script>
