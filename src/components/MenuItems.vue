<script setup></script>
<template>
  <div class="items">
    <router-link to="/">Login</router-link>
    <router-link to="/">About</router-link>
    <router-link to="/">Feedback</router-link>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 40px;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-width: 200px;
  text-align: center;
  animation: popUp 0.3s ease-in-out forwards;

  a {
    text-decoration: none;
    color: #000;
    padding: 10px;

    &:hover {
      background-color: #ddd;
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom: 1px solid #ddd;
    }
    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: 1px solid #ddd;
    }
  }
}
</style>
