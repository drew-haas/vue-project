<template>
  <div class="navigation">
    <div class="container">
      <!-- <div class="logo">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/img/logo.png" alt="Critical Mass Logo" />
        </router-link>
      </div> -->
      <ul class="navigation-list">
        <li
          v-for="item in navItems"
          v-bind:key="item.id"
          class="navigation-list-item"
        >
          <router-link :to="{ name: item.name }" class="navigation-list-link">{{
            item.name
          }}</router-link>
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
        { id: 0, name: "Home" },
        { id: 1, name: "Blog" },
        { id: 2, name: "Projects" }
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
  width: 100%;

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
    color: $default--accent;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $default--accent;
      transition: width 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      &:after {
        width: 100%;
        transition: width 0.3s cubic-bezier(0.86, 0, 0.07, 1);
      }
    }
  }
}

.router-link-exact-active {
  color: $default--type-primary;
}
</style>
