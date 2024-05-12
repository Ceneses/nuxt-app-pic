<template>
<div>登录成功页面</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
console.log("用户信息 = ", user);
</script>

<style scoped>

</style>