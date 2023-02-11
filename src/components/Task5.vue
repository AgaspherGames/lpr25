<template>
  <div>
    <h2>{{arr.reduce((a,b)=>a+b)}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3]
    };
  }
};
</script>
