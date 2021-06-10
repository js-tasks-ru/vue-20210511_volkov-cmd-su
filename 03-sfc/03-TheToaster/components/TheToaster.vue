<template>
  <div class="toasts">
    <div class="toast" v-for="(toast, index) in toasts" :key="index" :class="toast.class">
      <app-icon :icon="toast.icon" />
      {{ toast.text }}
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'TheToaster',

  components: { AppIcon },

  data() {
    return {
      toasts: [],
    };
  },

  /*mounted() {
    this.timer();
  },*/

  methods: {
    timer() {
      let id = setInterval(() => {
        if (this.toasts.length) {
          this.toasts.splice(0, 1);
          clearInterval(id);
        }
      }, DELAY);
    },
    error(message) {
      this.toasts.push({
        text: message,
        class: 'toast_error',
        icon: 'alert-circle',
      });
      this.timer();
    },
    success(message) {
      this.toasts.push({
        text: message,
        class: 'toast_success',
        icon: 'check-circle',
      });
      this.timer();
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
