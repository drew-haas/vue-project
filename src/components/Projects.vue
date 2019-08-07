<template>
  <div class="projects container">
    <h1 v-if="page.fields.title">{{page.fields.title}}</h1>
    <h1 v-else>Projects</h1>

    <div class="card-container">
      <div v-for="item in page.fields.projects" :key="item.id" class="card">
        <router-link :to="'/projects/' + item.slug">
          <div class="card-image" v-bind:style="{ 'background-image': 'url(' + item.image + ')' }"></div>
          <div class="card-copy-container">
            <div class="date">{{ item.date | moment('MMMM Do YYYY')}}</div>
            <div class="card-title">{{ item.title | capitalize}}</div>
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
  name: "Projects",
  data: function() {
    return {
      page: {
				fields: {}
			}
    }
  },
  created: function() {
		this.getPage();
  },
  methods: {
    getPage() {
      butter.page.list('*/projects')
      .then((res) => {
          this.page = res.data.data;
          console.log(this.page);
          // set theme
          document.body.className = this.page.fields.color_scheme;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0;
}
</style>
