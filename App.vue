<template>
  <router-view />
</template>
<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>
<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #121212;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: rgb(13,148,136);
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
</style>