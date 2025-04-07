<script setup>
import { ref, computed } from "vue";
import { orderBy } from "lodash";

import { candidates } from "/src/assets/json/candidates.js";
import CandidatePortfolioModal from "@/modals/CandidatePortfolioModal.vue";

const isSelectedCandidate = ref(false);
const selectedCandidate = ref(null);

const toggleCandidatePortfolioModal = (candidate) => {
  isSelectedCandidate.value = !isSelectedCandidate.value;
  selectedCandidate.value = candidate;
};

const orderedCandidates = computed(() => {
  // return orderBy(candidates, ["name"]);
  return candidates;
});
</script>

<template>
  <CandidatePortfolioModal
    v-if="isSelectedCandidate"
    :candidate="selectedCandidate"
    @toggleCandidatePortfolioModal="toggleCandidatePortfolioModal"
  ></CandidatePortfolioModal>

  <div class="cards">
    <div
      :title="'Click to view ' + candidate.name + `'s background and cases.`"
      @click="toggleCandidatePortfolioModal(candidate)"
      class="card"
      v-for="(candidate, index) in orderedCandidates"
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
    display: block;
    z-index: 1;
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 10px;
  box-shadow: 3px 3px 3px, rgba(0, 0, 0, 0.3);

  img {
    position: inherit;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
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
