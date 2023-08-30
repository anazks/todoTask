<template>
    <div class="flex items-end justify-end  p-2">
      <button  @click="back" class="bg-black text-white flex items-center space-x-2 p-2 rounded-lg shadow-md">
        <span>Back</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.707 15.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 10H16a1 1 0 1 1 0 2H7.414l3.293 3.293z"/>
        </svg>
      </button>
    </div>
  </template>

<script>
      export default {
  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>