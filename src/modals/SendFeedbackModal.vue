<script setup>
import { defineEmits, reactive } from "vue";
import { db, collection, addDoc } from "@/firebase";
import { useToast } from "vue-toastification";

const emit = defineEmits();

const form = reactive({
  name: "",
  email: "",
  description: "",
});

const closeModal = () => {
  emit("toggleSendFeedbackModal");
};

const submitForm = async () => {
  const toast = useToast();

  try {
    const name = form.name;
    const email = form.email;
    const description = form.description;

    await addDoc(collection(db, "feedbacks"), {
      name,
      email,
      description,
    });

    form.name = "";
    form.email = "";
    form.description = "";

    closeModal();

    toast.success("Your Feeback was submitted successfully!");
  } catch (error) {
    toast.error(error);
  }
};
</script>

<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-container">
      <form @submit.prevent="submitForm">
        <div class="modal-header">
          <span>Submit Feedback</span>
          <button type="button" @click="closeModal">&times;</button>
        </div>

        <div class="modal-content">
          <div class="input-group">
            <label for="name">Name: </label>
            <input
              type="text"
              v-model="form.name"
              placeholder="Input full name"
              required
            />
          </div>
          <div class="input-group">
            <label for="email">E-mail: </label>
            <input type="email" v-model="form.email" placeholder="Input email" required />
          </div>

          <div class="input-group">
            <label for="description">Suggestions & Feedbacks: </label>
            <textarea
              v-model="form.description"
              placeholder="Input suggestions and feedbacks."
              required
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  animation: popUp 0.3s ease-in-out forwards, increaseOpacity 2s 0.3s forwards;

  .modal-container {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    min-width: 300px;
    margin-inline: 10px;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding-inline: 10px;
      background-color: rgb(2, 167, 255);
      color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      span {
        font-weight: bold;
        font-size: 16pt;
      }

      button {
        border: none;
        background-color: transparent;
        font-size: 24pt;
        color: #fff;
      }
    }

    .modal-content {
      padding-inline: 10px;

      .input-group {
        display: flex;
        flex-direction: column;
        padding: 10px;

        label {
          font-weight: bold;
        }
        input,
        textarea {
          padding: 10px;
          border-radius: 5px;
          margin-top: 5px;
        }
      }
    }

    .modal-footer {
      display: flex;
      justify-content: end;
      padding: 20px;
      background-color: #eee;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      button {
        border: none;
        background-color: rgb(2, 167, 255);
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        opacity: 50%;

        &:hover {
          opacity: 100%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
