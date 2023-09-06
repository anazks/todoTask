import axiosClient from '../../axiosClient';
import { createStore } from 'vuex';
export  const store =  createStore({
 
    state (){
        return {
            task :[]
        };
        
    },
    mutations :{
        allTask(state,data){
            state.task = data
            state.originalTask = data.slice()
        },
        TaskFilter(state,status){
          try {
            state.task = state.originalTask.filter(obj => obj.status === status);
          } catch (error) {
            console.log(error)
          }
        },
        GetallTask(state) {
            state.task = state.originalTask.slice(); // Restore the original task array
          }
    },
    actions :{
        async getAllTasks({ commit }){
          try {
              await axiosClient.get('/GetAllTask').then((response)=>{
                console.log(response.data,"data")
                const now = new Date();
                const date = new Date(now);
                const formattedDate = date.toISOString().split('T')[0];
                response.data.forEach(item =>{
                    if(item.date == formattedDate){
                        item.reminder = true;
                    }
                    const dateObject = new Date(item.date);
                    if(dateObject<date){
                      item.past = true;
                    }else{
                      console.log("The target date is in the future or is the same as the current date.");
                    }
                })
                commit('allTask',response.data)
            })
          } catch (error) {
              console.log(error)
          }

        },
        async DoneTask({dispatch},taskId){
            try {
                console.log("here at done task",taskId)
                await axiosClient.post('/doneIt',{taskId}).then( async(response)=>{
                    console.log(response)
                        await dispatch('getAllTasks')
                })
            } catch (error) {
                console.log(error)
            }
        },
        async duplicateTask({dispatch},taskId){
            try {
                await axiosClient.post('/Duplicate',{taskId}).then( async(response)=>{
                    console.log(response,"duplicated")
                        await dispatch('getAllTasks')
                })
            } catch (error) {
                console.log(error)
            }
        },
        async UpdateTask({dispatch},object){
            try {
                await axiosClient.post('/updateTask',object).then( async(response)=>{
                    console.log(response)
                    await dispatch('getAllTasks')
                })
            } catch (error) {
                console.log(error)
            }
        },
        async DeleteTask({dispatch},taskId){
            try {
                await axiosClient.post('/delete',{taskId}).then( async(response)=>{
                    console.log(response)
                    await dispatch('getAllTasks')
                })
            } catch (error) {
                console.log(error)
            }
        },
        async AddTask({dispatch},body){
            try {
                await axiosClient.post('/AddTask',body).then( async(response)=>{
                    console.log(response)
                    await dispatch('getAllTasks')
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
  })