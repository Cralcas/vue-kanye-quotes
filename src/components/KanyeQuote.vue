<script setup lang="ts">
import { ref } from "vue";
import QuoteForm from "./QuoteForm.vue";
import QuoteDisplay from "./QuoteDisplay.vue";

const quote = ref("");

const updateQuote = (newQuote: string) => {
  quote.value = newQuote;
};
</script>

<template>
  <QuoteDisplay :quote="quote" />
  <QuoteForm @getQuote="updateQuote" />
</template>
