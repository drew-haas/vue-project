<template>
  <div class="blog-post container">
    <router-link to="/blog">back to blog</router-link>
    <h1>{{ post.data.title }}</h1>
    <div class="body-container" v-html="post.data.body"></div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6');

export default {
    name: 'blog-post',
    data: function() {
      return {
        post: {
          data: {}
			  }
      }
    },
    created() {
      this.getPost()
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
}
</script>

<style lang="scss">
.body-container {
  max-width: 800px;

  .image {
    width: 100%;
    margin: 40px 0;
  }

  img {
    width: 100%;
  }
}
</style>
