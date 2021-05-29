<template>
  <nuxt-link
    :to="to"
    class="bg-blue-400 rounded-full px-8 py-4 text-xs uppercase text-white"
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
