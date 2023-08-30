<template>
  <NavBarVue/>
  <AddTaskFormVue/>
  <BackButton/>
</template>

<script>

import NavBarVue from '@/components/NavBar.vue';
import AddTaskFormVue from '@/components/AddTaskFormVue.vue';
import BackButton from '../BackButton.vue';

export default {
name: 'App',
components: {
NavBarVue,
AddTaskFormVue,
BackButton
}
}
</script>

<style>

</style>
