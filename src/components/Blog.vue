<template>
  <div class="blog">
		<div class="hero container">
			<h1>Blog</h1>
		</div>
		<div class="blog-container container">
			<div v-for="item in posts" :key="item.id" class="blog-item">
        <router-link :to="'/blog/' + item.slug">
          <div class="date">{{ item.created | moment('MMMM Do YYYY')}}</div>
          <div class="title">{{ item.title | capitalize}}</div>
          <div class="summary">{{ item.summary }}</div>
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
		this.getPosts()
	}
};
</script>

<style lang="scss">
.blog-item {
	text-align: left;
	margin: 0 auto 60px;
}
</style>

