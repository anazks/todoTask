<template>
    <div class="rounded-lg fixed top-14 mt-4    right-4 flex items-center justify-center h-10  bg-black shadow-md mx-auto">
        <button @click="CreateTask" class="flex text-white w-full h-full rounded-lg bg-black p-3 items-center justify-center"> 
          New
          <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                                
            </span>
        </button>
    </div>
</template>

<script>
       export default {
  methods: {
    CreateTask() {
      this.$router.push('/addTask');
    }
  }
}
</script>