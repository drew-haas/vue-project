<template>
  <div id="app">
    <Navigation></Navigation>
    <HelloWorld msg="The Cities of Critical Mass" />
    <Projects></Projects>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Navigation,
    Projects
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

body.disable-scroll {
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1400px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
