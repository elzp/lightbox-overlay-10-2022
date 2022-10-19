import { createApp } from 'vue';
import PopUp from './PopUp.js';
import Button from './Button.js';

const app = createApp({
  data() {
    return {
      isVisible: false,
      labels: {
        title: 'Popup Title',
        content: 'hey! Are u sure u want to do this?',
        noButton: 'Nope',
        yesButton: 'Sure!',
      },
    };
  },
  components: {
    Button,
    PopUp,
  },
  template: `
  <div>
  <Button @show="()=> {isVisible = true}"/>
  <PopUp v-if="isVisible" @close="()=> {isVisible = false}" :labels="labels"/>
  </div>`,

  methods: {
    showPopUp() {},
  },
});
app.mount('#app');
