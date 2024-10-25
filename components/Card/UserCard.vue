<template>
  <div class="bg-[#121212] flex items-center justify-center min-h-screen p-4">
    <div
      class="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div
        class="bg-[#1E1E1E] border-slate-800 shadow-2xl hover:shadow-gray-500 rounded-lg max-w-md p-4"
        v-for="(user, index) in users.slice(0, 100)"
        :key="index"
      >
        <div v-if="users.length === 0">{{ error?.message }}</div>
        <div class="flex items-center px-4 py-3">
          <img
            :src="user.picture.large"
            class="h-8 w-8 rounded-full"
            alt="User profile picture"
          />
          <div class="ml-3">
            <span
              class="text-sm text-white font-semibold antialiased block leading-tight"
            >
              {{ user.name.first }} {{ user.name.last }}
            </span>
            <span class="text-gray-400 text-xs block"
              >{{ user.location.city }}, {{ user.location.state }}
            </span>
          </div>
        </div>
        <div
          class="relative w-full h-[365px] w-[416px] flex items-center justify-center"
        >
          <img
            v-if="posts[index]?.image"
            :src="posts[index]?.image"
            :alt="posts[index]?.owner"
            class="w-full h-full object-cover rounded-lg"
          />
          <div
            v-else
            class="flex items-center justify-center w-full h-full bg-gray-800"
          >
            Loading...
          </div>
        </div>
        <div class="flex items-center justify-between mx-4 mt-3 mb-2">
          <div class="flex gap-5">
            <button
              class="hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              <img :src="thumbsUp" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchUsers } from "@/composables/useFetchUsers";
import { useGeneratePost } from "@/composables/useFetchUsers";
import thumbsUp from "@/assets/thumbsUp.svg";

const { users, error } = useFetchUsers();
const posts = useGeneratePost(users);
</script>
