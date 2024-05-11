<script setup lang="ts">
import { defineEmits } from "vue";
import { getData } from "../service/quoteService";

const emit = defineEmits<{
  (e: "getQuote", quote: string): void;
}>();

const handleSubmit = async () => {
  try {
    const newQuote = await getData();
    emit("getQuote", newQuote);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <button
      class="btn btn-sm md:btn-md lg:btn-lg bg-slate-900 text-white mt-5 hover:bg-slate-800"
    >
      New Quote
    </button>
  </form>
</template>
