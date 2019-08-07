<template>
  <div class="project container">
    <router-link to="/projects">all projects</router-link>
    <h1 v-if="page.fields.title">{{ page.fields.title }}</h1>
    <div class="subtitle">{{ page.fields.description }}</div>
    <div class="image-container">
      <img :src="page.fields.feature_image" alt="">
    </div>

    <div class="date">{{ page.fields.date | moment('MMMM Do YYYY')}}</div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6');

export default {
    name: 'project',
    data: function() {
      return {
        page: {
          fields: {}
        }
      }
    },
    methods: {
      getPage() {
        butter.page.list('*/' + this.$route.params.slug)
          .then((res) => {
            console.log(res.data.data);
            this.page = res.data.data;
          }).catch((res) => {
            console.log(res);
          })
      }
    },
    created() {
      this.getPage();
    }
}
</script>

<style lang="scss">
.image-container {
  margin: 40px 0;
  max-width: 60%;

  img {
    width: 100%;
  }
}
</style>

