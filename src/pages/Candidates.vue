<script setup>
import { ref } from "vue";
import { candidates } from "/src/assets/json/candidates.js";
import CandidatePortfolioModal from "@/modals/CandidatePortfolioModal.vue";

const isSelectedCandidate = ref(false);
const selectedCandidate = ref(null);

const toggleCandidatePortfolioModal = (candidate) => {
  isSelectedCandidate.value = !isSelectedCandidate.value;
  selectedCandidate.value = candidate;
};
</script>

<template>
  <CandidatePortfolioModal
    v-if="isSelectedCandidate"
    :candidate="selectedCandidate"
    @toggleCandidatePortfolioModal="toggleCandidatePortfolioModal"
  ></CandidatePortfolioModal>

  <div class="cards">
    <div
      @click="toggleCandidatePortfolioModal(candidate)"
      class="card"
      v-for="(candidate, index) in candidates"
      :key="index"
    >
      <img :src="candidate.img" alt="" />
      <span>{{ candidate.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  overflow-x: auto;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 2px;
}

@media (orientation: landscape) {
  .card {
    &:hover {
      transition: ease-in-out;
      transition-duration: 300ms;
      scale: 1.5;
      cursor: pointer;
    }
  }
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 3px 3px 3px, rgba(0, 0, 0, 0.3);

  img {
    position: inherit;
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  span {
    max-width: 90px;
    text-align: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
}
</style>
