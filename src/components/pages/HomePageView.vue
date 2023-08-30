<template>
    <div>
      <NavBarVue/>
      <CreateButtonVue/>
      <OptionBarVue/>
      <TaskBoxVue/>
    </div>
    

    
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import CreateButtonVue from '@/components/CreateButton.vue';
import OptionBarVue from '@/components/OptionBar.vue';
import TaskBoxVue from '@/components/TaskBox.vue';

export default {
name: 'App',
components: {
  NavBarVue,
  CreateButtonVue,
  OptionBarVue,
  TaskBoxVue
}
}
</script>

<style>

</style>
