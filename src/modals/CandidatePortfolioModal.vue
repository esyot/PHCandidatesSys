<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";

import { cases } from "/src/assets/json/cases.js";

const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits();

const selectedTab = ref("background");

const closeModal = () => {
  emit("toggle-candidate-portfolio-modal");
};

const selectTab = (tab) => {
  selectedTab.value = tab;
};
const criminalcases = computed(() => {
  return cases.filter((caseItem) => caseItem.candidate_id === props.candidate.id);
});
</script>

<template>
  <div class="modal" @click.self="closeModal">
    <button class="modal-close-btn" @click="closeModal">&times;</button>
    <div class="modal-container">
      <div class="left">
        <img :src="props.candidate.img" :alt="props.candidate.name" />
        <h2>{{ props.candidate.name }}</h2>
        <p>{{ props.candidate.position }}</p>
        <p>Party: {{ props.candidate.party }}</p>
      </div>

      <div class="right">
        <div class="menu-items">
          <span
            :class="{ active: selectedTab === 'background' }"
            @click="selectTab('background')"
            >Background</span
          >
          <span :class="{ active: selectedTab === 'cases' }" @click="selectTab('cases')"
            >Cases</span
          >
        </div>

        <div class="background-container" v-if="selectedTab === 'background'">
          {{ props.candidate.background }}
        </div>

        <div class="case-container" v-if="selectedTab === 'cases'">
          <div
            class="case-item"
            v-for="(criminalcase, index) in criminalcases"
            :key="index"
          >
            <strong>
              <i>{{ criminalcase.title }}</i>
            </strong>
            <p>{{ criminalcase.description }}</p>
            <i
              >Source:
              <a :href="criminalcase.source" target="_blank">{{
                criminalcase.source
              }}</a></i
            >
          </div>
          <div v-if="criminalcases.length === 0">None</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-close-btn {
    padding: 10px;
    font-size: 20pt;
    margin: 10px;
    border-radius: 100%;
    border: none;
    height: 50px;
    width: 50px;
    background-color: #3d3d3d;
    color: #fff;
    opacity: 50%;

    &:hover {
      opacity: 100%;
      cursor: pointer;
    }
  }
}

.modal-container {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 10px;
  min-width: 400px;
}

.left,
.right {
  padding: 20px;
}

.left {
  width: 50%;
  text-align: center;
}

.right {
  width: 50%;

  .menu-items {
    display: flex;
    list-style: none;
    gap: 0.3rem;
    border-bottom: 1px solid #ddd;
    overflow-x: auto;

    span {
      padding: 10px;
      border: none;
      background-color: #fff;
      font-size: 20pt;
      opacity: 50%;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      &.active {
        opacity: 100%;
        color: #007bff;
      }
    }
  }
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.case-container {
  overflow-y: auto;
  overflow-x: hidden;
  height: 50vh;
}

.case-item {
  display: flex;
  flex-direction: column;

  i {
    margin-bottom: 10px;
  }
}
</style>
