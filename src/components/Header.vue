<script setup>
import brand from '../assets/justTask.png'
import { RouterLink } from 'vue-router';


</script>


<template>
    <header class="md:w-10/12 sm:w-11/12 mx-auto">
       <nav class="w-full flex justify-between py-3">
            <div class="flex items-center">
                <img class="w-[3vw]" :src="brand" alt="">
                <p class="font-bold text-lg text-[#5373fc]">Just Task</p>
            </div>


            <ul class="flex space-x-7">
                <RouterLink class="pointer" to='/'>Todo</RouterLink>
                <RouterLink class="pointer" to='/about'>About</RouterLink>
            </ul>
       </nav>
    </header>
</template>



<style  scoped>

</style>