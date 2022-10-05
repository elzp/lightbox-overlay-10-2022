export default {
  name: 'PopUp',
  data() {
    return {
      count: 0,
    };
  },
  method:{

  },
  template: `
  <button class="bg-orange-500 text-white p-2 rounded m-5"
  @click="$emit('show')">
    I want to do it!
  </button>`,
};
