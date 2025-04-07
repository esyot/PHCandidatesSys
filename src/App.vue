<script setup>
import HelloModal from "@/modals/HelloModal.vue";
import MenuItems from "@/components/MenuItems.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const isHelloModalClosed = ref(false);

const closeHelloModal = () => {
  isHelloModalClosed.value = !isHelloModalClosed.value;
};

const isOpenMenuItems = ref(false);
const menuItemsRef = ref(null);

const toggleMenuItems = (event) => {
  event.stopPropagation();
  isOpenMenuItems.value = !isOpenMenuItems.value;
};

const handleClickOutside = (event) => {
  if (menuItemsRef.value && !menuItemsRef.value.contains(event.target)) {
    isOpenMenuItems.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="container">
    <HelloModal
      v-if="!isHelloModalClosed"
      @closeHelloModal="closeHelloModal"
    ></HelloModal>
    <nav>
      <div class="right">
        <div class="logo">
          <img src="/public/assets/images/ph-logo.jpg" alt="" />
        </div>
        <router-link to="/">Dashboard</router-link>
      </div>

      <div class="left">
        <i class="fas fa-bars" @click="toggleMenuItems" title="Click to view items"></i>

        <div ref="menuItemsRef">
          <MenuItems v-if="isOpenMenuItems"></MenuItems>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: linear-gradient(
    to right,
    rgb(86, 159, 255),
    rgb(255, 248, 213),
    rgb(255, 101, 70)
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    position: sticky;
    top: 0;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      .logo {
        img {
          height: 30px;
          width: 30px;
        }
      }

      a {
        text-decoration: none;
        color: #000;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .left {
      display: flex;
      position: relative;
      align-items: center;

      i {
        color: rgb(149, 149, 149);
        padding-inline: 10px;
        padding-block: 5px;
        background-color: #ffffff;
        opacity: 75%;
        border-radius: 100%;
        border: 1px solid #ddd;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

        &:hover {
          cursor: pointer;
          opacity: 100%;
        }
      }
    }
  }
}
</style>
