<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 2
    }
  },
  methods: {
    start(){
      alert(this.num1+this.num2)
    }
  },
  created: function(){
    this.start()
  }
};
</script>
