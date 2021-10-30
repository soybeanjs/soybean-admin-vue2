<template>
  <div>
    <h3 class="text-red-400">{{ msg }}</h3>
    <p class="bg-blue-400">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      See
      <code>README.md</code>
      for more information.
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue-demi';

defineProps({
  msg: {
    type: String,
    default: ''
  }
});

const count = ref(0);
</script>

<style scoped></style>
