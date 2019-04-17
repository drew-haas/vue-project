<template>
  <div class="navigation">
    <div class="container">
      <div class="logo">
        <img src="../assets/logo.png" alt="Vue Logo" />
      </div>
      <ul class="navigation-list">
        <li
          v-for="item in navItems"
          v-bind:key="item.id"
          class="navigation-list-item"
        >
          <a :href="item.path" class="navigation-list-link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      navItems: [
        { id: 0, text: "About", path: "/about" },
        { id: 1, text: "Projects", path: "/projects" },
        { id: 2, text: "Contact", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss">
/* eslint-disable */
.navigation {
  margin: 24px auto 0;

  .container {
    display: flex;
    justify-content: space-between;
  }
}

.logo img {
  max-width: 40px;
}

.navigation-list {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;

  &-item {
    margin-right: 1em;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &-link {
    padding: 5px;
    display: block;
    text-decoration: none;
  }
}
</style>
