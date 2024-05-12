<template>

  <section class="relative bg-[#ffffff]">
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="flex flex-col items-center justify-start max-[767px]:text-center">
        <h2 class="text-3xl font-semibold md:text-5xl">
          <span class="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">Simple &amp; Affordable</span> Pricing
        </h2>
        <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
          <p class="text-[#636262]">Simple &amp; fixed pricing. 30 days money-back guarantee</p>
        </div>
        <!-- Pricing Cards -->
        <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <div class="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-white px-8 pb-12 pt-8">
            <div class="mb-4 rounded-lg bg-[#1353fe] px-5 py-2">
              <p class="text-sm font-bold text-white">BASIC</p>
            </div>
            <p class="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
            <h2 class="mb-4 text-left text-3xl font-semibold md:text-5xl">$99<span class="text-sm font-light">/year</span>
            </h2>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Monthly Free Exclusive</p>
            </div>
            <div class="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Customer Support</p>
            </div>
            <a href="#" class="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]" @click="handlePayment">Get started</a>
          </div>
          <div class="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-[#376dfd] px-8 pb-12 pt-8 text-white [box-shadow:rgb(0,_0,_0)_6px_6px]">
            <div class="mb-4 rounded-lg bg-black px-5 py-2">
              <p class="text-sm font-bold text-white">GROWTH</p>
            </div>
            <p class="mb-6 font-light md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
            <h2 class="mb-4 text-left text-3xl font-semibold md:text-5xl">$149<span class="text-sm font-light">/year</span>
            </h2>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg" alt="" class="mr-2 inline-block w-5" />
              <p>Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg" alt="" class="mr-2 inline-block w-5" />
              <p>Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg" alt="" class="mr-2 inline-block w-5" />
              <p>Monthly Free Exclusive</p>
            </div>
            <div class="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg" alt="" class="mr-2 inline-block w-5" />
              <p>Customer Support</p>
            </div>
            <a href="#" class="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]">Get started</a>
          </div>
          <div class="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-white px-8 pb-12 pt-8">
            <div class="mb-4 rounded-lg bg-[#1353fe] px-5 py-2">
              <p class="text-sm font-bold text-white">PRO</p>
            </div>
            <p class="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
            <h2 class="mb-4 text-left text-3xl font-semibold md:text-5xl">$249<span class="text-sm font-light">/year</span>
            </h2>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Monthly Free Exclusive</p>
            </div>
            <div class="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg" alt="" class="mr-2 inline-block w-5" />
              <p>Customer Support</p>
            </div>
            <a href="#" class="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get started</a>
          </div>
        </div>
      </div>
    </div>
    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" class="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const handlePayment = async () => {
  const {data, error} = await useFetch('/api/stripe/payment', {
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