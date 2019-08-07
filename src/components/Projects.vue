<template>
  <div class="projects container">
    <h1>Projects</h1>
    <div class="project-container">
      <div class="project">
        <div class="title"></div>
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
