<script setup lang="ts">
import type { IQuote } from "@/models/IQuote";

defineProps<IQuote>();
</script>

<template>
  <div class="text-center px-2">
    <i class="text-base md:text-lg lg:text-2xl font-bold">{{
      quote ? `"${quote}"` : "Fetch a quote!"
    }}</i>
    <p v-if="quote" class="text-sm md:text-base lg:text-lg">-Kanye West</p>
  </div>
</template>
