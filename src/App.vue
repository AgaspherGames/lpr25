<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './views/HomeView.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/1">Task 1</RouterLink>
        <RouterLink to="/2">Task 2</RouterLink>
        <RouterLink to="/3">Task 3</RouterLink>
        <RouterLink to="/4">Task 4</RouterLink>
        <RouterLink to="/5">Task 5</RouterLink>
        <RouterLink to="/6">Task 6</RouterLink>
        <RouterLink to="/7">Task 7</RouterLink>
        <RouterLink to="/8">Task 8</RouterLink>
        <RouterLink to="/9">Task 9</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main{
  margin-top: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
