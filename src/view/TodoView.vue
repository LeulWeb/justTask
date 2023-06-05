<script setup>
import TodoInput from '../components/TodoInput.vue'
import TodoItem from '../components/TodoItem.vue'
import {Icon} from '@iconify/vue'
import {ref, watch, computed} from 'vue'
import {uid} from 'uid'

const todoList = ref([])


const completed = computed(()=>{
    return todoList.value.every((todo)=> todo.isDone)  
})

const listenNewTodo=(task)=>{
    todoList.value.push({
        id: uid(),
        task,
        isDone: false,
        isEditing: false
    })
    // setToLocalStorage()
}

const setToLocalStorage = ()=>{
    localStorage.setItem("todoList", JSON.stringify(todoList.value))
}

const getFromLocalStorage= ()=>{
    const list = JSON.parse(localStorage.getItem("todoList"))
    if(list){
        todoList.value = list
    }
}

// using watcher in vue
watch(todoList, ()=>{
    setToLocalStorage()
}, {deep: true})

// will be called always when the page loads or runs or component updates or mounted
getFromLocalStorage()

const handleToggle =(toggleIndex)=>{
    todoList.value[toggleIndex].isDone= !todoList.value[toggleIndex].isDone
    // setToLocalStorage()
}

const toggleEdit = (toggleIndex)=>{
    todoList.value[toggleIndex].isEditing = !todoList.value[toggleIndex].isEditing
    // setToLocalStorage()
}

const updateTodo = (newTask, index)=>{
    todoList.value[index].task = newTask
    // setToLocalStorage()
}
const deleteTodo = (id)=>{
    todoList.value= todoList.value.filter((task)=> task.id !== id)
    // setToLocalStorage()
}
</script>


<template>
    <section class="md:w-10/12 w-11/12 mx-auto grid place-content-center">
        <p class="text-indigo-600 font-bold text-2xl">What do you want to do?</p>
        <TodoInput  @emitTask="listenNewTodo"/>
        <ul v-if="todoList.length>0">
            <TodoItem v-for="(todo , index) in todoList" :key="todo.key"  :todo="todo" :index="index"  @toggle-done="handleToggle"  @edit-task="toggleEdit"  @updateTask="updateTodo" @deleteTask="deleteTodo"/>
        </ul>
        <div v-else class="flex items-center space-x-3 my-2">
            <Icon icon="fluent-emoji:sad-but-relieved-face" color="blue" width="30" />
            <p class="text-lg font-semibold ">No Task at the moment</p>
        </div>

        <p v-if="completed" class="text-lime-600 font-semibold text-xl">All Task is completed</p>
    </section>
</template>



<style scoped>

</style>