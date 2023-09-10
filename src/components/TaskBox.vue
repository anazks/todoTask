<template>
  
  <div v-if="alertContent && alertContent">
    <AlertPage :alertContent=alertContent  @updateShowAlerts="updateShowAlert" />
    <!-- <h1>halo</h1> -->
  </div>
     <div v-if="isEmptyData && !isLoading">
        <div class="flex items-center justify-center mt-64 animate-pulse">
            <div class="bg-gray-200 p-4 rounded-lg">
            Task Is Empty
                  <CreateButton/>
            </div>
          </div>
     </div>
     <div v-if="isLoading && isEmptyData" class="mt-28">
           <LoadingTask/>
            <LoadingTask/>
             <LoadingTask/>
             <LoadingTask/>
            <LoadingTask/>
             <LoadingTask/>
     </div>
  <div class="mt-14 p-8">
  
      <div v-for="task in task" :key="task._id" class="flex items-center justify-center h-fullscreen w-4/5  	shadow-md mx-auto mt-4 h-40 transition ease-in-out delay-150 bg-orange-600		 hover:-translate-y-1 hover:scale-110 hover:bg-stone-500	 duration-300">

          <div class="p-4">
            <div v-if="task.status">
              <button class="text-white  p-2 rounded-lg shadow-md" @click="showoptions(task._id)" v-if="!showOptions || showOptions && task._id != taskIdforBtns ">
               
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <div v-if="!task.status">
              <button class="text-white  p-2 rounded-lg shadow-md" @click="showoptions(task._id)" v-if="!showOptions || showOptions && task._id != taskIdforBtns ">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>                
              </button>
            </div>
         
          <transition name="fade" mode="out-in">
        <div class="w-4/3 h-full p-4 space-y-2 fade-in zoom-container hover:animate-zoom" v-if="showOptions && taskIdforBtns == task._id">
                
               <button  @click="openDeleteConfirmation(task._id)" class="px-6 flex w-full py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out flex mt-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        
                        <button  @click="EditTask(task._id)" class="px-6  w-full flex py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>                  
                      </button>
                      <button @click="doneIt(task._id)" class="px-6  w-full flex py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg> 
                    </button>
                    <button @click="duplicate(task._id)" class="px-6 w-full flex py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>                  
                  </button> 
                </div>
      </transition>
    </div>
      
          <div class="w-full h-full  items-center justify-center">
            
            <div class="flex space-x-4 ">
              <!-- <div v-if="task.reminder == true && task.status==false">
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-16 animate-ping text-red-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>                     
              </div> -->
            </div>
              <div class=" items-center justify-center pl-6">
                
                <p class="text-center  text-white text-lg md:text-xl lg:text-2xl xl:text-3xl pr-4 font-sans mt-16"  :class="{'bg-red-600':task.past && task.status==false  ,  'text-white':task.reminder == true }"> <b><i>{{task.task }}</i></b> </p>
                 <p class="text-sm float-right italic text-white bg-black font-bold p-3">{{task.date}}</p>
              
              </div>
             
            <div v-if="newTextFeild && TaskUpdation._id == task._id">
  
                    <form>
                        <input class="w-4/5 border border-gray-300 rounded px-2 py-2 focus:outline-none focus:border-blue-500" placeholder="update your task" v-model="TaskUpdation.task" type="Text" >
                        <input   type="hidden" v-model="TaskUpdation._id" >
                        <button @click.prevent="updateTask" class="px-6 w-4/3 flex py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-2" type="submit">Update</button>
                    </form>
            </div>
          
          </div> 
          
  
        </div>
        <DeleteConfirmation   @updateShowAlerts="updateShowAlert" @deleteAlert="deleteAlert"  @getTasks="getTasks"  :isOpen="isDeletePopupOpen" :taskId=taskToDeleteId @close="closeDeletePopup" @delete="deleteTask(task._id)" />
        
 
   </div>
  </template>
  
  <script>
  import DeleteConfirmation from './DeleteConfirmation.vue'
  import AlertPage from './AlertPage.vue'
  import LoadingTask from './LoadingTask.vue'
  import CreateButton from './CreateButton.vue'
  import axios from 'axios'
  import { mapState ,mapGetters} from 'vuex';
 
  export default {
    name: 'App',
    components:{
      DeleteConfirmation,
      LoadingTask,
      AlertPage,
      CreateButton
      
    },
    data(){
     return{
      TaskUpdation: {},
      newTextFeild : false,
      alertShow:false,
      alertContent:null,
      isDeletePopupOpen: false,
      showOptions: false,
      taskIdforBtns :''
     }
    },
      computed:{
         isEmptyData() {
      return this.$store.state.task.length === 0; // Change 'myData' to your state variable name
    },
         isLoading() {
               return this.$store.getters.isLoading;
         },
          ...mapState([
            'task'
          ]),
          ...mapGetters([
            'checkDate'
          ]),
      },
    mounted(){
        this.$store.dispatch('getAllTasks')  
        }, 
        methods :{
          buttonHide(){
            this.showOptions = false
          },
          showoptions(id){
            this.showOptions = true
            this.taskIdforBtns =id;
          },
          doneIt(taskId){
              this.$store.dispatch('DoneTask',taskId)
              this.showOptions = false
              this.alertContent="Marked as Done";
             
          },
          duplicate(taskId){
            this.$store.dispatch('duplicateTask',taskId)
            this.showOptions = false
            this.alertContent="Task Duplicated";
            
          },
          EditTask(taskId){ 
          console.log(taskId,"The id to be edited")
          axios.post(`https://to-do-api-9d3q.onrender.com/getOneTask/`,{taskId})
          .then(res => {
            console.log(res.data);
            this.TaskUpdation = res.data;
            this.newTextFeild = true;
            // this.getTasks();
          })
          .catch(error => {
            console.error(error);
          });
      },
      updateTask(){
        let newTask = this.TaskUpdation.task;
        let id = this.TaskUpdation._id;

        let object = {
            newTask,
            id
          }
          this.newTextFeild = false;
          this.$store.dispatch('UpdateTask',object)
          this.showOptions = false
          this.alertContent="Updated Successfully";
         

      },
      deleteTask(taskId){
          console.log(taskId)
      },
     openDeleteConfirmation(taskId) {
        this.alertShow=true;
        this.isDeletePopupOpen = true;
        this.taskToDeleteId = taskId;
      },
    updateShowAlert(){
      this.alertShow = false;
      this.alertContent = null;
      this.buttonHide()
    },
    closeDeletePopup() {
      this.alertShow=false;
      this.isDeletePopupOpen = false;
      this.taskToDeleteId = null;
    },
        }     
    // methods: {
      
    //   },
    //   EditTask(taskId){ 
    //       console.log(taskId,"The id to be edited")
    //       axios.get(`http://localhost:3000/api/Tasks/getOneTask/`,{
    //         params: {
    //           id: taskId
             
    //         }
    //       })
    //       .then(res => {
    //         console.log(res.data);
    //         this.TaskUpdation = res.data;
    //         this.newTextFeild = true;
    //         // this.getTasks();
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   },
    //   updateTask(){ 
    //     this.alertShow=true;
    //     console.log("updation")
    //       let newTask = this.TaskUpdation.task;
    //       let id = this.TaskUpdation._id;
    //       let object = {
    //         newTask,
    //         id
    //       }
    //       axios.post("http://localhost:3000/api/Tasks/updateTask",object)
    //       .then(res => {
    //         console.log(res.data);
    //          this.newTextFeild = false;
    //          this.alertContent="Updated Successfully";
    //           this.getTasks();
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   },
    //   doneIt(taskId){ 
    //       axios.post("http://localhost:3000/api/Tasks/DoneIt",{taskId})
    //       .then(res => {
    //         console.log(res.data);
    //          this.getTasks();
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   },
    //   duplicate(taskId){ 
    //     this.alertShow=true;
    //       axios.post("http://localhost:3000/api/Tasks/duplicate",{taskId})
    //       .then(res => {
    //         console.log(res.data); 
    //          this.alertContent="Task Duplicated";
    //          this.getTasks(); 
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   },
    //   openDeleteConfirmation(taskId) {
    //     this.alertShow=true;
    //     this.isDeletePopupOpen = true;
    //     this.taskToDeleteId = taskId;
    //   },
    //   closeDeletePopup() {
    //     this.alertShow=false;
    //     this.isDeletePopupOpen = false;
    //     this.taskToDeleteId = null;
    //     this.getTasks()
    //   },
    //   deleteTask(taskId) {
    //     let data  = this.taskToDeleteId;
    //     axios.post("http://localhost:3000/api/Tasks/delete",{data})
    //       .then(res => {
    //         console.log(res.data);
    //         // closeDeletePopup()
    //          this.getTasks();
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //     console.log('Deleting task with ID:', taskId);
    //     this.closeDeletePopup();
    //   },
    //   pending(value) {
    //     console.log("penifng")
    //     axios.post("http://localhost:3000/api/Tasks/pending",{value})
    //       .then(res => {
    //         console.log(res.data);
    //         this.Task = res.data;
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   },
    //   deleteAlert(){
    //     this.alertShow=true;
    //     this.alertContent="Task Deleted";
    //     // this.updateShowAlert();
    //     this.getTasks();
    //   },
    //   updateShowAlert(){
    //     this.alertShow = false;
    //     this.alertContent = null;
  
    //   }
    // }
  };
  </script>
  <style>

  </style>