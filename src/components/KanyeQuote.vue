<script setup lang="ts">
import { ref } from "vue";
import { getData } from "../service/quoteService";

const quote = ref("");

const fetchQuote = async () => {
  try {
    quote.value = await getData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handleSubmit = async () => {
  await fetchQuote();
};
</script>

<template>
  <div class="text-center">
    <i class="text-3xl font-bold">{{
      quote ? `"${quote}"` : "Fetch a quote!"
    }}</i>
    <p class="text-2xl">-Kanye West</p>
    <form @submit.prevent="handleSubmit">
      <button class="btn btn-active btn-neutral mt-10">New Quote</button>
    </form>
  </div>
</template>
