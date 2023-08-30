<template>
    <div v-if="isOpen">
        <div class="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div class="bg-white p-6 rounded shadow-lg">
              <h2 class="text-xl font-semibold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this item?</p>
              <div class="mt-4 flex justify-end">
                <button @click="closePopup" class="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 mr-2">
                  Cancel
                </button>
                <button @click="confirmDelete(taskId)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div v-if="!isPopupOpen">

          </div>
    </div>
  </template>
  
  <script>
  export default {
  props: {
    isOpen: Boolean, // Prop to control popup visibility
    taskId: String // Prop to pass the task ID to delete
  },
  methods: {
    closePopup() {
      this.$emit('close'); // Emit an event to close the popup
    },
    confirmDelete() {
        console.log(this.taskId,"here iam")
        let taskId = this.taskId;
        this.$emit('updateShowAlerts')
        this.$emit('close');
        this.$store.dispatch('DeleteTask',taskId)
    }
  }
};
  </script>

  <style scoped>
  /* Add any custom styles here */
  </style>
  