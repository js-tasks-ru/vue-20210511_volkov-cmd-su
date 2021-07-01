<template>
  <div class="page page_meetup-forms">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: {
    title: {
      type: String,
    }
  }
};
</script>

<style scoped>
.page.page_meetup-forms {
  padding: 70px 0;
  text-align: center;
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }
}
</style>
