<template>
    <div class="fixed bottom-2  inset-x-0 flex justify-center">
      <div class="flex space-x-4">
        <button @click="TaskFilter(false)" class="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">Pending</button>
        <button    @click="TaskFilter(true)"  class="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">Completed</button>
        <button    @click="getAll"  class="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">All</button>

    </div>
    </div>
  </template>
  

<script>
    export default {
        methods:{
            TaskFilter(status){
                try {
                    this.$store.commit('TaskFilter',status)
                } catch (error) {
                    console.log(error)
                }
            },
            DoneTask(){
                try {
                    this.$store.commit('TaskFilter') 
                } catch (error) {
                  console.log(error)  
                }
                
            },
            getAll(){
                this.$store.commit("GetallTask");
            }
        }
    }
</script>

<style>

</style>