<script setup>
import Candidates from "@/pages/Candidates.vue";
import HelloModal from "@/modals/HelloModal.vue";

import { ref, watchEffect } from "vue";

const isHelloModalClosed = ref(false);

const closeHelloModal = () => {
  isHelloModalClosed.value = !isHelloModalClosed.value;
};
</script>

<template>
  <div class="container">
    <HelloModal
      v-if="!isHelloModalClosed"
      @closeHelloModal="closeHelloModal"
    ></HelloModal>

    <Candidates></Candidates>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(to right, rgb(255, 42, 0), white, rgb(0, 110, 255));
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
}
</style>
