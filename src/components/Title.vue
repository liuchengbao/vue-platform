<template>
  <div class="content_title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title']
}
</script>

<style scoped>
.content_title {
  padding: 20px 0 20px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
