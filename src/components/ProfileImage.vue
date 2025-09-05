<template>
  <img :src="imageLink"
   class="w-8 h-8 rounded-3xl object-contain" alt="User profile image"></img>
</template>


<script>
export default {
  name: "ProfileImage",
  data(){
    return {
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUBzC-v66B_YI30OMI1r7paQVsIIDW4exdQ&s"
    }
  }
}
</script>
