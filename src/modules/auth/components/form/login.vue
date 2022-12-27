<template>
  <div class="loginForm">
    <form class="p-fluid" @submit.prevent="handleSubmit(!v$.$invalid)">
      <div class="field">
        <div class="p-float-label p-input-icon-right">
          <i class="pi pi-envelope" />
          <InputText
            id="email"
            v-model="v$.email.$model"
            :class="{ 'p-invalid': v$.email.$invalid && submitted }"
            aria-describedby="email-error"
          />
          <label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email*</label>
        </div>
        <span v-if="v$.email.$error && submitted">
          <span v-for="(error, index) of v$.email.$errors" id="email-error" :key="index">
            <small class="p-error">{{ error.$message }}</small>
          </span>
        </span>
        <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{
          v$.email.required.$message.replace('Value', 'Email')
        }}</small>
      </div>
      <div class="field">
        <div class="p-float-label">
          <Password
            id="password"
            v-model="v$.password.$model"
            :class="{ 'p-invalid': v$.password.$invalid && submitted }"
            toggle-mask
          >
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
              {{ sp.level }}
              <Divider />

              <p class="mt-2">Suggestions</p>
              <ul class="ml-2 mt-0 pl-2" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
          <label for="password" :class="{ 'p-error': v$.password.$invalid && submitted }">Password*</label>
        </div>
        <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{
          v$.password.required.$message.replace('Value', 'Password')
        }}</small>
      </div>

      <Button type="submit" label="Submit" class="mt-2" />
    </form>
  </div>
</template>

<script setup>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import useAuthStore from '@/modules/auth/stores/auth'

const authStore = useAuthStore()

const formData = reactive({
  email: '',
  password: '',
})

const rules = {
  email: { required, email },
  password: { required },
}

const v$ = useVuelidate(rules, formData)

const submitted = ref(false)

const resetForm = () => {
  formData.email = ''
  formData.password = ''
  submitted.value = false
}

const handleSubmit = async (isFormValid) => {
  submitted.value = true

  if (!isFormValid) {
    return
  }

  const { data, error } = await sendLoginRequest(toRaw(formData))

  if (error) {
    alert('Error Auth')
    // eslint-disable-next-line no-console
    console.log('Error Auth:', error, error.value)
    return
  }

  const token = data?.JWT

  if (token) {
    authStore.setToken(token)
  }

  resetForm()
}
</script>

<style lang="scss">
.loginForm {
  min-width: 450px;

  form {
    margin-top: 2rem;
  }

  .field {
    margin-bottom: 1.5rem;
  }
}

@media screen and (max-width: 960px) {
  .loginForm {
    width: 80%;
  }
}
</style>
