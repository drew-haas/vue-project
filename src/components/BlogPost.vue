<template>
  <div class="blog-post container">
    <router-link to="/blog">back to blog</router-link>
    <h1 v-if="post.data.title">{{ post.data.title }}</h1>
    <div class="body-container" v-html="post.data.body"></div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6');

export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            console.log(res.data)
            this.post = res.data;
          }).catch((res) => {
            console.log(res);
          })
      }
    },
    created() {
      this.getPost()
    }
}
</script>

<style lang="scss">
.body-container {
  max-width: 800px;

  figure.image {
    width: 100%;
    margin: 40px 0;
  }

  img {
    width: 100%;
  }
}
</style>
