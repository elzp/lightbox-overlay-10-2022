import { createApp } from 'vue';
import PopUp from './PopUp.js';
import Button from './Button.js';

const app = createApp({
  data() {
    return {
      isVisible: false,
    };
  },
  components:{
    Button,
    PopUp
  },
  template: `
  <div>
  <Button @show="()=> {isVisible = true}"/>
  <PopUp v-if="isVisible" @close="()=> {isVisible = false}"/>
  </div>`,

  methods: {
    showPopUp(){},
  },
});
app.mount('#app');
