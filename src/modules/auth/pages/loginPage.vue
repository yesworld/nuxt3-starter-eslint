<template>
  <div class="flex flex-col items-center justify-center">
    <div class="mb-4 space-y-1">
      <h1 class="text-4xl font-bold">Login</h1>
      <p class="text-gray-500">Please enter your credentials</p>
    </div>

    <FormLogin class="mb-5" />

    <div class="mb-96 text-sm text-gray-600">
      Don't have account?
      <nuxt-link to="/login" class="text-primary-500 text-sm font-semibold hover:underline">Register</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'guest',
})
useHead({
  title: 'Login',
})

// const { handleSubmit } = useForm({
//   validationSchema: object({
//     email: string().required().email().label('Email'),
//     password: string().required().label('Password'),
//   }),
// })
// const auth = useAuthStore()
// const router = useRouter()
// const error = ref()
// const route = useRoute()
// const { store } = useAuthStorage()
// const onSubmit = handleSubmit(async (values) => {
//   const { data, error: err } = await useFetch('/api/auth/login', {
//     method: 'post',
//     body: values,
//   })
//   const token = data.value.data.token
//   const user = data.value.data.user
//   store(token, user)
//   auth.user = user
//   auth.loggedIn = true
//   if (!err.value && !data.value.error) router.push((route.query as any).next || '/')
//   else error.value = err.value || data.value.error?.message
// })
</script>
