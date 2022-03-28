<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "drag-group",
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
</style>
