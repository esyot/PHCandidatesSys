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
        <span class="name">{{ props.candidate.name }}</span>
        <span class="position">{{ props.candidate.position }}</span>
        <span class="party">Party-list: {{ props.candidate.party }}</span>
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
            <div class="text">
              <span>
                {{ criminalcase.title }}
              </span>
              <p>{{ criminalcase.description }}</p>
              <i
                >Source:
                <a :href="criminalcase.source" target="_blank">{{
                  criminalcase.source
                }}</a></i
              >
            </div>
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
  padding: 10px;
  animation: popUp 0.3s ease-in-out forwards, increaseOpacity 2s 0.3s forwards;

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

@media (orientation: portrait) {
  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    margin-inline: 10px;
    background-color: #fff;
    border-radius: 25px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .name {
      font-weight: bold;
      font-size: 18pt;
    }
    .position {
      width: 200px;
      text-align: center;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .right {
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
        font-size: 16pt;
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

    .background-container {
      overflow-y: auto;
      height: 35vh;
      width: 90vw;
      padding-inline: 10px;
    }

    .case-container {
      overflow-y: auto;
      height: 35vh;
      width: 90vw;
      padding-inline: 10px;
      .text {
        width: 100%;
        white-space: normal;
        overflow-wrap: break-word;
        word-wrap: break-word;

        span {
          font-weight: bold;
          font-size: 1rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.875rem;
          margin: 0;
        }
      }
    }
  }
}

@media (orientation: landscape) {
  .modal-container {
    display: flex;
    flex-direction: row;
    margin-inline: 10px;
    background-color: #fff;
    border-radius: 25px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .name {
      font-weight: bold;
      font-size: 18pt;
    }
    .position {
      width: 200px;
      text-align: center;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .right {
    width: 100%;
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
        font-size: 16pt;
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

    .background-container {
      overflow-y: auto;
      height: 50vh;
      padding-inline: 10px;
    }

    .case-container {
      overflow-y: auto;
      height: 50vh;
      padding-inline: 10px;
    }
  }
}
</style>
