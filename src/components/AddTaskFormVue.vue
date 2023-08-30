<template>
    <div>
      <div class="flex items-center justify-center h-screen">
        <form  class="w-4/3 bg-purple-500 shadow-md rounded px-8 pt-2 pb-8 mb-4">
          <span v-if="errors.task" class="text-red-600"><i>{{errors.task}}</i></span>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="task">
              Task
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task"
              type="text"
              placeholder="Enter your task..."
              v-model="tasks.task"
            />
            <label class="block text-gray-700 text-sm font-bold mb-2" for="dueDate">
              Enter Due Date
            </label>
            <label for="datePicker">Select a date:</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dueDate"
              
              type="date"
              v-model="tasks.date"
            />
          </div>
          <div class="flex items-center justify-end">
            <button
              @click.prevent="addTask"
              class="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  // import Nav from '@/components/Nav.vue'; // Import your Nav component
  // import axios from 'axios'
  
  export default {
    data() {
      return {
        tasks: {
          task: "",
          date: "",
        },
        errors: {}
      };
    },
    methods:{
            async addTask(){
              if (!this.tasks.task) {
          this.errors.task = 'Task is required.';
        } else if(!this.tasks.date){
          this.errors.task = 'Pic a Due Date';
        }else{
          let body = this.tasks
          this.$store.dispatch('AddTask',body)
          this.tasks.date = '';
          this.tasks.task ='';
        }
            }
    }
    // methods: {
    //   async addTask() {
    //     if (!this.tasks.task) {
    //       this.errors.task = 'Task is required.';
    //     } else if(!this.tasks.date){
    //       this.errors.task = 'Pic a Due Date';
    //     }else{
    //       console.log("Add Task clicked");
    //     console.log(this.tasks.task); // You can access the task input value using this.tasks.task
    //     console.log(this.tasks.date); // You can access the due date input value using this.tasks.date
    //       let body = this.tasks
    //       console.log(body)
    //       await axios.post('http://localhost:3000/api/Tasks/AddTask',body).then(res=>{
    //         console.log(res.data)
    //         this.tasks.task ='';
    //         this.tasks.date = '';
    //     })
    //     }
        
    //   },
    // },
  };
  </script>
  <style>
  </style>
  