<script setup>
import { defineProps, defineEmits } from 'vue';
import {Icon} from '@iconify/vue'


const props = defineProps({
    todo: {
        type: Object,
        required: true,
    },

    index:{
        type: Number,
        required: true
    }
})

// defining the emit
defineEmits(['toggle-done', 'edit-task', 'updateTask', 'deleteTask'])

</script>



<template>
    <div class="flex space-x-4 shadow-md bg-white p-3 justify-between rounded-md my-2">
        <div class="flex items-center space-x-3">
            <input type="checkbox" class="accent-lime-500 ease-out w-5 h-5 text-white rounded-full" :checked="todo.isDone" @input="$emit('toggle-done', index)">
             <div v-if="todo.isEditing" class="update border-b-2 border-indigo-600 focus:outline-none outline-none  focus-within:outline-none">
                    <input type="text" :value="todo.task" @input="$emit('updateTask', $event.target.value, index)">
                </div>
            <p v-else :class="{'done': todo.isDone}">{{ todo.task }}</p>
        </div>
        <div class="flex space-x-2 opacity-0 hover:opacity-100">
            <Icon v-if="todo.isEditing"  icon="solar:check-circle-broken" width="22" color="green"  @click="$emit('edit-task', index)"/>
            <Icon v-else icon="iconamoon:edit" color="blue" width="22" @click="$emit('edit-task', index)" />
            <Icon icon="octicon:trash-16" color="red" width="22" @click="$emit('deleteTask', todo.id)"  />
        </div>
       
    </div>
</template>


<style scoped>

.done{
    text-decoration: line-through;
}

</style>
