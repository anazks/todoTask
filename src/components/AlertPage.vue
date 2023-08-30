<template>
    <div>

    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2'; // Import SweetAlert library
 
  export default {
    props: {
       // Prop to control popup visibility
       alertContent: String // Prop to pass the task ID to delete
  },
    mounted() {
    this.showAlert();
  },
    methods: {
      showAlert() {
        console.log(this.alertContent,"here iam")
        // this.$emit('updateShowAlerts')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.alertContent,
          showConfirmButton: false,
          timer: 1500
        });
        this.$emit('updateShowAlerts')
      }
    }
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  