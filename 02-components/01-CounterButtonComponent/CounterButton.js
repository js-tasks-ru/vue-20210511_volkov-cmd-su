const CounterButton = {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      title: String,
      default: 0,
    },
  },
  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button
    type="button"
    @click="$emit('increment', count + 1)"
    >
  {{ count }}
  </button>`,
};

export default CounterButton;
