<template>
  <div>
    <a :href="href">{{text}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "page",
      href: "page.html"
    };
  }
};
</script>
