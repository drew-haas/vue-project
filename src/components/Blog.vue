<template>
  <div class="blog container">
		<div class="hero">
			<h1>Blog</h1>
		</div>
		<div class="card-container">
			<div v-for="item in posts" :key="item.id" class="card">
        <router-link :to="'/blog/' + item.slug">
          <div class="card-image" v-bind:style="{ 'background-image': 'url(' + item.featured_image + ')' }"></div>
          <div class="card-copy-container">
            <div class="date">{{ item.created | moment('MMMM Do YYYY')}}</div>
            <div class="card-title">{{ item.title | capitalize}}</div>
            <div class="summary">{{ item.summary }}</div>
          </div>
        </router-link>
			</div>
		</div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6');

export default {
	name: "Blog",
	data() {
		return {
			page_title: 'Blog',
			posts: []
		}
	},
	methods: {
		getPosts() {
			butter.post.list({
				page: 1,
				page_size: 10
			}).then((res) => {
				console.log(res.data.data);
				this.posts = res.data.data;
			})
		}
	},
	created() {
		this.getPosts();
	}
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0;
}
</style>

