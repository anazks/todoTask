<template>
    <div>
        <h1 class="bg-blue-500">halo</h1>
        <ul>
            <li v-for="task in task" :key="task._id">{{ task.task }}</li>
          </ul>
           
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {

        mounted(){
            this.$store.dispatch('getAllTasks')
        },
        computed: {
            ...mapState(['task'])
  },
}
</script>

<style lang="scss" scoped>

</style>