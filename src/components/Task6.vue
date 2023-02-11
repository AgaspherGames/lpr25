<template>
  <div>
    <h2>{{Object.values(obj).reduce((a,b)=>a+b)}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {x: 1, y: 2, z: 3},
    };
  }
};
</script>
