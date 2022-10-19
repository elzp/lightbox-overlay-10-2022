export default {
  name: 'PopUp',
  props: ['labels'], // title', 'content', 'noButton', 'yesButton
  data() {
    return {
      count: 0,
    };
  },
  template: `
  <div
  class="
    h-screen
    absolute
    left-0
    top-0
    bottom-0
    right-0
    flex
    justify-center
    items-center
    bg-black
  "
>
  <div class="bg-white rounded md:w-1/3 w-1/2 border shadow-lg">
    <div class="rounded-t bg-orange-500">
      <div class="relative py-3 px-2 flex">
        <span class="font-semibold text-white md:text-base text-sm"
          >{{labels.title}}</span
        >
        <div
          class="
            absolute
            right-0
            top-0
            -mr-2
            -mt-2
            border
            cursor-pointer
            shadow-lg
            bg-white
            z-10
            p-1
            rounded-full
            p-2
          "
          @click="$emit('close')"
        >
          <img src="https://image.flaticon.com/icons/svg/151/151882.svg"
          class="w-2 h-2" />
        </div>
      </div>
    </div> 
    <div class="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
      <p>{{labels.content}}</p>
    </div>
    <div class="p-2 flex justify-end rounded-b">
      <button
        class="
          focus:outline-none
          py-1
          px-2
          md:py-2 md:px-3
          w-24
          bg-white
          text-black
          rounded
        "
      >
        {{labels.noButton}}
      </button>
      <button
        class="
          focus:outline-none
          py-1
          px-2
          md:py-2 md:px-3
          w-24
          mr-2
          bg-black
          text-white
          rounded
        "
      >
      {{labels.yesButton}}
      </button>
    </div>
  </div>
</div>`,
};
