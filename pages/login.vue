<template>
  <div class="">
    <div class="max-w-prose mx-auto">
      <div class="px-2 py-3 flex flex-row justify-center items-center gap-x-4">
        <span>账号:</span>
        <input type="text" class="p-2 border-2 rounded-lg" v-model="account">
      </div>
      <div class="px-2 py-3 flex flex-row justify-center items-center gap-x-4">
        <span>密码:</span>
        <input type="text" class="p-2 border-2 rounded-lg" v-model="password">
      </div>
      <div class="px-2 py-3 flex flex-row justify-center items-center gap-x-4">
        <button class="px-5 py-2 bg-blue-300 rounded-lg" @click.prevent="handleSignIn">登录</button>
        <button class="px-5 py-2 bg-blue-300 rounded-lg" @click.prevent="handleSignUp">注册</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const account = ref('');
const password = ref('');

const handleSignIn = async () => {
  await $fetch('/api/auth/signIn', {
    method: 'POST',
    body: {
      account: account.value,
      password: password.value
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const handleSignUp = async () => {
  await $fetch('/api/auth/signUp', {
    method: 'POST'
  })
}
</script>

<style scoped>

</style>