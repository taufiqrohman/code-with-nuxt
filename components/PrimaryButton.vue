<template>
  <nuxt-link
    :to="to"
    class="bg-blue-400 rounded-full px-3 py-2 lg:px-8 lg:py-4 text-xs lg:text-sm uppercase text-white"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    to: String,
  },
});
</script>
