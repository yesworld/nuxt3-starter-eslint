<template>
  <Breadcrumb :home="home" :model="modelValue" />
</template>

<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem'

const home = ref({ icon: 'pi pi-home', to: '/' })
defineProps({
  modelValue: Array<MenuItem>,
})
</script>

<style lang="scss">
nav.p-breadcrumb {
  padding-left: 0;
  border: 0 !important;
  background: inherit !important;

  .p-breadcrumb-list {
    display: flex;
    flex-direction: row;

    li.p-menuitem:not(.p-disabled) .p-menuitem-link {
      .p-menuitem-icon:before,
      .p-menuitem-text {
        @apply text-primary-700;
      }
    }

    li.p-menuitem-separator > span {
      font-size: 12px;
      color: #93979c;
    }
  }
}
</style>
