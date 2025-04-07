<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const message = ref("Boto mo, Kinabukasan ko! #HALALAN2025");

const closeHelloModal = () => {
  emit("closeHelloModal");
};
</script>

<template>
  <div class="modal" @click.self="closeHelloModal">
    <div class="modal-container">
      <div class="modal-content">
        <img src="/public/assets/images/flag-ph.jpg" alt="" />
        <p class="modal-msg">{{ message }}</p>
        <span @click="closeHelloModal">Close</span>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  inset: 0;
  animation: popUp 0.3s ease-in-out forwards, increaseOpacity 2s 0.3s forwards;
  z-index: 100;

  .modal-container {
    background-color: #fff;
    width: 500px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    margin-inline: 10px;
    z-index: 100;

    .modal-content {
      display: flex;
      position: relative;
      flex-direction: column;

      img {
        object-fit: fill;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .modal-msg {
        position: absolute;
        color: #fff;
        font-size: 20pt;
        text-align: center;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      }

      span {
        display: flex;
        justify-content: center;
        padding: 10px;
        opacity: 75%;

        &:hover {
          opacity: 100%;
          cursor: pointer;
          background-color: #ddd;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }
  }
}
</style>
