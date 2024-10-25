<template>
  <div class="bg-[#121212] flex items-center justify-center min-h-screen p-4">
    <div
      class="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div
        class="bg-[#1E1E1E] border-slate-800 shadow-2xl rounded-lg max-w-md p-4"
        v-for="(user, index) in users.slice(0, 40)"
        :key="index"
      >
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
              >Asheville, North Carolina</span
            >
          </div>
        </div>
        <img :src="posts[index]?.image" alt="Post image" />
        <div class="flex items-center justify-between mx-4 mt-3 mb-2">
          <div class="flex gap-5">
            <img
              :src="thumbsUp"
              class="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            />
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

const { users, error, pending } = useFetchUsers();
const posts = useGeneratePost(users);
</script>
