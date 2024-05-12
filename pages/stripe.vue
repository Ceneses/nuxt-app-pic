<template>
  <div>
    <h1>Nuxt Stripe instance</h1>
    <form @submit.prevent="handleSubmit">
      <!-- 表单内容 -->
      <button type="submit">Purchase</button>
    </form>
    <button type="submit" @click.prevent="handleSubscribe">Subscribe</button>
  </div>
</template>

<script setup lang="ts">
const handleSubmit = async () => {
  const {data, error} = await useFetch('/api/stripe/payment', {
    method: 'POST',
    immediate: true
  });
  console.log("返回数据",data)
  const pay_url = data._value;
  console.log("支付URL = ", pay_url);
  window.location.href = data._value;
};

const handleSubscribe = async () => {
  const {data, error} = await useFetch('/api/stripe/subscribe', {
    method: 'POST',
    immediate: true
  });
  console.log("返回数据",data)
  const pay_url = data._value;
  console.log("支付URL = ", pay_url);
  window.location.href = data._value;
};
</script>

<style scoped>

</style>