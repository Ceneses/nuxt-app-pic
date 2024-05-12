<template>
  <!-- Section SING IN -->
  <section>
    <div class="grid md:h-full md:grid-cols-2">
      <!-- Component -->
      <div class="flex flex-col items-center justify-center bg-[#f2f2f7]">
        <!-- Wrapper -->
        <div class="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div
              class="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                 alt="" class="inline-block"/>
          </div>
          <p class="mb-8 text-[#647084] md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
            enim.</p>
          <p class="font-bold">John Robert</p>
          <p class="text-sm">Senior Webflow Developer</p>
        </div>
      </div>
      <!-- Component -->
      <div class="flex flex-col items-center justify-center bg-white">
        <!-- Wrapper -->
        <div class="max-w-lg px-2 py-4 text-center md:px-2 md:py-4 lg:py-4">
          <!-- Title -->
          <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">登录</h2>
          <Auth
              :supabaseClient="supabaseClient"
              socialLayout="horizontal"
              :appearance="{
                  theme: ThemeSupa,
                  style: {
                    button: {
                      borderRadius: '8px',
                      borderColor: 'rgba(0,0,0,0.1)'
                    },
                    input: {
                      borderRadius: '8px'
                    }
                  },
                  variables: {
                    default: {
                      colors: {
                        brand: 'rgb(14, 165, 233)',
                        brandAccent: `gray`
                      }
                    }
                  }
                }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ThemeSupa} from '@supabase/auth-ui-shared'
import {Auth} from '@nuxtbase/auth-ui-vue'

const supabaseClient = useSupabaseClient();
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