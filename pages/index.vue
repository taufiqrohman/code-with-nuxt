<template>
  <div class="flex flex-row-reverse">
    <div class="w-1/2">
      <img
        src="~/assets/images/about.png"
        class="w-full max-h-80 rounded object-cover"
        alt=""
      />
    </div>

    <div class="w-1/2 text-gray-800 mr-8">
      <h3 class="font-bold text-2xl mb-4">Lorem ipsum dolor amet</h3>
      <p>
        consectetur adipiscing elit. Curabitur quam magna, tristique at sapien
        sed, feugiat finibus felis. Curabitur vitae mi nec massa facilisis
        convallis eget sit amet mauris. Nam vel augue est. Curabitur a tortor id
        sapien rutrum suscipit eu eu diam. Etiam vestibulum orci neque, in
        maximus lectus rutrum sit amet. In quis erat facilisis, rhoncus erat
        vitae, interdum massa. Sed sollicitudin diam imperdiet metus pulvinar,
        eget venenatis lacus vulputate.
      </p>

      <p>
        Maecenas vel posuere lacus. Integer eget purus feugiat ligula molestie
        varius eu sed ligula. Sed congue enim neque, eget malesuada massa
        molestie vel. Nam ullamcorper turpis cursus neque condimentum ultrices.
        Duis consequat leo auctor urna vehicula, a blandit quam consectetur.
        Quisque mattis scelerisque lorem sed varius. Aenean eget eros orci. Duis
        nec convallis nisl.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: function () {
    return {
      title: "About",
    };
  },
  meta: {
    pageTitle: "About",
  },
  data: function () {
    return {
      title: "About",
    };
  },
});
</script>