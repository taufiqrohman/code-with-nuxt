<template>
  <nuxt-link
    :to="to"
    class="text-gray-300 flex flex-row justify-start items-center p-4 hover:bg-secondary-gray"
    :class="{ 'bg-secondary-gray': active }"
  >
    <slot name="icon" /> <span class="ml-3"><slot /></span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    to: String,
    active: Boolean,
  },
});
</script>