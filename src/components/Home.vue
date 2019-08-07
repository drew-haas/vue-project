<template>
  <div class="home">
    <div class="section hero container">
			<h1>{{ page.fields.headline }}</h1>
			<p class="subtitle">{{ page.fields.description }}</p>
      <div class="hero-image">
        <img :src="page.fields.hero_image" alt="Critical Mass Hero Image">
      </div>
		</div>

    <div class="section projects container">
      <h2>Featured Projects</h2>
      <div class="card-container">
        <div v-for="item in page.fields.featured_projects" :key="item.id" class="card">
          <router-link :to="'/projects/' + item.slug">
            <div class="card-image" v-bind:style="{ 'background-image': 'url(' + item.image + ')' }"></div>
            <div class="card-copy-container">
              <div class="card-title">{{ item.title }}</div>
              <div class="date">{{ item.date | moment('MMMM Do YYYY')}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="section locations container">
      <h2>Locations</h2>
      <Locations></Locations>
    </div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6');
import Locations from "./Locations.vue";

export default {
  name: "Home",
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
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    getPage() {
			butter.page.list('*/home')
			.then((res) => {
          this.page = res.data.data;
          console.log(this.page);
					// set theme
					document.body.className = this.page.fields.color_scheme;
			});
		},
  },
  components: {
    Locations
  }
};
</script>

<style lang="scss" scoped>
.hero {
	display: block;
	margin: 4em auto;
  text-align: left;

  h1 {
    margin: 0;
  }

	p {
    max-width: 700px;
    margin-left: 10vw;
    margin-top: 20px;

    @media screen and (max-width: $small) {
      margin-left: 0;
    }
  }

  &-image {
    width: 50%;
    margin-top: -212px;
    z-index: -1;
    position: relative;
    opacity: .9;
    float: right;

    @media screen and (max-width: $medium) {
      float: none;
      margin-top: 0;
      width: 100%;
    }

    img {
      width: 100%;
      transform: scaleX(-1);
    }
  }
}

.project-row {
  width: 100%;
  display: flex;

  &:nth-child(even) {
    justify-content: flex-end;
  }

  .row-item {
    position: relative;
  }

  .project-image {
    max-width: 700px;
    width: 70%;
  }

  .title {
    position: absolute;
    transform: rotate(90deg);
    transform-origin: 0 100%;
    left: -37px;
    width: 300px;
    top: -20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    opacity: 0.5;
  }

  .date {
    font-weight: bold;
    color: lightgray;
    font-size: 7em;
    margin-top: -56px;
    margin-left: -10px;
    z-index: -1;
    position: relative;
  }
}
</style>


