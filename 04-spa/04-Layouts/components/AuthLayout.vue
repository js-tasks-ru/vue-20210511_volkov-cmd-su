<template>
  <div class="page page_onboarding">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String,
    }
  }
};
</script>

<style scoped>
.page.page_onboarding {
  text-align: center;
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
