<script setup>
import {reactive, defineEmits} from 'vue'

const todoState = reactive({
    newTodo:'',
    isEmpty: false,
    errMessage : ''
})

const emit = defineEmits(['emitTask'])


const handleEmit=()=>{
    todoState.errMessage=''
    todoState.isEmpty=false

   if(todoState.newTodo !== ''){
     emit('emitTask', todoState.newTodo)
     todoState.newTodo=''
   }else{
    todoState.isEmpty= true
    todoState.errMessage="Empty task can not be added"
   }
}


</script>

<template>
  <section>
    <p class="py-2 my-2">{{todoState.newTodo}}</p>
    <input :style="{border: todoState.isEmpty? '2px solid red': ''}" class="outline-none border-2 border-indigo-600 mr-5 rounded-md p-2 focus:outline-none" type="text" placeholder="New task" v-model="todoState.newTodo" >
    <button @click="handleEmit" class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md">New task</button>
    <p v-show="todoState.isEmpty" class="text-red-700">{{todoState.errMessage}}</p>
  </section>
</template>



<style scoped>

</style>