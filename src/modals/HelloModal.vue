<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const message = ref("Boto mo, kinabukasan ko!");

const closeHelloModal = () => {
  emit("closeHelloModal");
};
</script>

<template>
  <div class="modal" @click.self="closeHelloModal">
    <div class="modal-container">
      <div class="modal-content">
        <img src="/public/assets/images/flag-ph.jpg" alt="" />
        <span class="modal-msg"> {{ message }}</span>
      </div>
      <div class="modal-footer">
        <button @click="closeHelloModal">Close</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .modal-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

    .modal-content {
      display: flex;
      position: relative;

      img {
        object-fit: contain;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .modal-msg {
        position: absolute;
        color: #fff;
        font-size: 20pt;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      }
    }

    .modal-footer {
      display: flex;
      justify-content: center;
      margin: 10px;

      button {
        padding: 10px;
      }
    }
  }
}
</style>
