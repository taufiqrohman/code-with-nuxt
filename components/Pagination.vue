<template>
  <div class="flex flex-row justify-end items-center">
    <div class="text-gray-400 text-base leading-4 mr-6">{{ overview }}</div>
    <nuxt-link
      :tag="prevLink === undefined ? 'button' : 'a'"
      :disabled="prevLink === undefined"
      :to="prevLink || '#'"
      class="mr-2"
      :class="{ 'cursor-not-allowed': prevLink === undefined }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{ 'text-gray-400': hasPrev, 'text-gray-300': !hasPrev }"
        viewbox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </nuxt-link>
    <nuxt-link
      :tag="nextLink === undefined ? 'button' : 'a'"
      :disabled="nextLink === undefined"
      :to="nextLink || '#'"
      class="mr-2"
      :class="{ 'cursor-not-allowed': nextLink === undefined }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{ 'text-gray-400': hasNext, 'text-gray-300': !hasNext }"
        viewbox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    path: {
      type: String,
      default: "/",
    },
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 0,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    hasNext: function () {
      return this.current < this.totalPage;
    },
    hasPrev: function () {
      return this.current > 1;
    },
    nextLink: function (): string | undefined {
      if (this.current == this.totalPage) return undefined;
      const nextPage = Number(this.current) + 1;
      return `${this.path}?page=${nextPage}`;
    },
    prevLink: function (): string | undefined {
      if (this.current == 1) return undefined;
      const prevPage = Number(this.current) - 1;
      return `${this.path}?page=${prevPage}`;
    },
    overview: function () {
      if (this.total === 0) return "";
      let startItem = (this.current - 1) * this.perPage + 1;
      let endItem =
        this.totalPage == this.current
          ? this.total
          : this.current * this.perPage;

      return `${startItem}-${endItem} of ${this.total}`;
    },
  },
});
</script>
