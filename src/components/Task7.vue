<template>
  <div>
    <a @click="getDate">date</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    };
  },
  methods: {
    getDate(){
      alert(new Date()) 
    }
  },
};
</script>
