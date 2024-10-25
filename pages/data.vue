<template>
    <div class="max-w-2xl mx-auto p-4">
      <div v-if="pending" class="text-center text-gray-500">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">
        Something went wrong: {{ error.message }}
      </div>
      <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="user in users"
          :key="user.name.first + user.name.last"
          class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="user.picture.large"
            alt="Profile photo"
            class="w-full h-32 object-cover rounded-full"
          />
          <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ user.name.first }} {{ user.name.last }}
            </h2>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFetchUsers } from '@/composables/useFetchUsers';
  
  const { users, error, pending } = useFetchUsers();
  </script>