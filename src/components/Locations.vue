<template>
  <div id="locationWrapper">
    <div class="hero">
      <h1>The Cities of Critical Mass</h1>
      <p>Personal experiment testing out Vue</p>
    </div>
    <div class="location-wrapper container">
      <div
        v-for="(location, index) in locations"
        :key="location.id"
        :class="'location location-' + (index + 1)"
        v-on:click="expand(index, $event)"
      >
        <div
          class="location-image"
          v-bind:style="{ 'background-image': 'url(' + location.image + ')' }"
        ></div>
        <div class="location-copy-container">
          <div class="location-title">{{ location.title }}</div>
          <div class="location-subtitle">{{ location.subtitle }}</div>
        </div>
        <div class="location-inner-items container">
          <h2 class="location-inner-title inner-item">{{ location.title }}</h2>
          <p class="location-inner-subtitle inner-item">{{ location.subtitle }}</p>
          <div class="location-items">
            <div
              class="location-item inner-item"
              v-for="item in location.items"
              :key="item.id"
            >
              <div class="location-item-title">
                <b>{{ item.title }}</b>
              </div>
              <div class="location-item-info">{{ item.information }}</div>
            </div>
          </div>
        </div>
        <div class="location-close"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite, Power4 } from "gsap";

// make these vars global to use throughout component
var clone,
  el,
  opening = true;

export default {
  name: "Locations",
  data: function() {
    return {
      thumbnail: {
        title: 'This is my Thumbnail Title',
      },
      locations: [
        {
          id: 1,
          image: require("../assets/img/location-calgary.jpg"),
          title: "Calgary",
          subtitle: "Stampede City",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 4,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 2,
          image: require("../assets/img/location-chicago.jpg"),
          title: "Chicago",
          subtitle: "City of Big Shoulders",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 3,
          image: require("../assets/img/location-cupertino.jpg"),
          title: "Cupertino",
          subtitle: "Arroyo San José de Cupertino",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 4,
          image: require("../assets/img/location-hong-kong.jpg"),
          title: "Hong Kong",
          subtitle: "Fragrant Harbour",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 5,
          image: require("../assets/img/location-london.jpg"),
          title: "London",
          subtitle: "The Old Smoke",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 6,
          image: require("../assets/img/location-los-angeles.jpg"),
          title: "Los Angeles",
          subtitle: "City of Angels",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 7,
          image: require("../assets/img/location-nashville.jpg"),
          title: "Nashville",
          subtitle: "Music City",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 8,
          image: require("../assets/img/location-new-york.jpg"),
          title: "New York City",
          subtitle: "The Big Apple",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 9,
          image: require("../assets/img/location-san-jose.jpg"),
          title: "San José",
          subtitle: "Chepe",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 10,
          image: require("../assets/img/location-sao-paulo.jpg"),
          title: "São Paulo",
          subtitle: "Terra da Garoa",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        },
        {
          id: 11,
          image: require("../assets/img/location-toronto.jpg"),
          title: "Toronto",
          subtitle: "The Queen City",
          items: [
            {
              id: 1,
              title: "Phone",
              information: "+1 403 262 3006"
            },
            {
              id: 2,
              title: "Address",
              information:
                "1011 9TH AVENUE SE SUITE 300 CALGARY ALBERTA CANADA T2G OH7"
            },
            {
              id: 3,
              title: "Description",
              information:
                "Lorem ipsum dolor amet typewriter waistcoat etsy, pitchfork sustainable prism kombucha. Deep v twee fanny pack enamel pin cliche pabst. Prism tousled banh mi, iceland gastropub try-hard cardigan street art vaporware. Succulents raw denim kale chips kitsch pug drinking vinegar, literally crucifix photo booth raclette put a bird on it."
            }
          ]
        }
      ]
    };
  },

  methods: {
    expand: function(index, event) {
      opening = true; // toggle opening variable
      el = event.target; // element to expand
      clone = el.cloneNode(true); // clone element to not mess with grid --> new element to expand
      clone.classList.add("location-clone");
      const elRect = el.getBoundingClientRect();
      const tl = new TimelineLite({ onComplete: this.setInnerItems }); // animation timeline

      // disable scroll
      document.body.classList.add("disable-scroll");

      // make fixed in same position as grid item, then append
      clone.setAttribute(
        "style",
        "\
      position: fixed;\
      top: " +
          elRect.y +
          "px;\
      left: " +
          elRect.x +
          "px;\
      height: " +
          el.clientHeight +
          "px;\
      width: " +
          el.clientWidth +
          "px;\
      box-shadow: 0px 0px 33px -25px rgba(0, 0, 0, 0.5);\
      z-index: 1"
      );
      document.getElementById("app").appendChild(clone);

      // hide old grid item
      el.style.opacity = 0;

      clone.querySelector(".location-inner-items").style.display = "block";
      TweenMax.set(clone.querySelectorAll(".inner-item"), { y: "14px" });

      // animate old content out and new content in
      tl.to(clone.querySelector(".location-subtitle"), 0.3, {
        opacity: 0,
        y: "10px",
        ease: Power4.easeOut
      })
        .to(
          clone.querySelector(".location-title"),
          0.3,
          { opacity: 0, y: "10px", ease: Power4.easeOut },
          "-=0.2"
        )
        .to(
          clone,
          1,
          {
            height: window.innerHeight,
            width: window.innerWidth,
            x: -elRect.x,
            y: -elRect.y,
            borderRadius: "0px",
            ease: Power4.easeInOut
          },
          "-=0.1"
        )
        .to(
          clone.querySelector(".location-image"),
          0.5,
          { height: "300px", ease: Power4.easeInOut },
          "-=0.75"
        )
        .staggerTo(
          clone.querySelectorAll(".inner-item"),
          0.3,
          { y: 0, opacity: 1 },
          0.1,
          "-=0.3"
        );
    },

    close: function() {
      opening = false; // toggle opening variable
      var elRect = el.getBoundingClientRect();
      var tl = new TimelineLite({
        onComplete: () => {
          // remove clone and show the original grid item
          clone.remove();
          el.style.opacity = 1;

          // enable scrolling again
          document.body.classList.remove("disable-scroll");
        }
      });

      this.setInnerItems();

      // animate back to grid item
      tl.staggerTo(
        clone.querySelectorAll(".inner-item"),
        0.3,
        { y: "14px", opacity: 0, ease: Power4.easeOut },
        0.1
      )
        .to(clone.querySelector(".location-image"), 0.5, {
          height: "200px",
          ease: Power4.easeInOut
        })
        .to(
          clone,
          0.8,
          {
            width: elRect.width,
            height: elRect.height,
            x: 0,
            y: 0,
            borderRadius: "4px",
            ease: Power4.easeInOut
          },
          "-=0.5"
        )
        .to(
          clone.querySelector(".location-title"),
          0.3,
          { opacity: 1, y: 0, ease: Power4.easeOut },
          "-=0.2"
        )
        .to(
          clone.querySelector(".location-subtitle"),
          0.3,
          { opacity: 1, y: 0, ease: Power4.easeOut },
          "-=0.2"
        );
    },

    setInnerItems: function() {
      var close = clone.querySelector(".location-close");

      if (opening) {
        close.classList.add("visible"); // show close button
        close.addEventListener("click", () => {
          this.close();
        }); // add event listener to close item -- see if this can be done in vue
      } else if (!opening) {
        close.classList.remove("visible"); // hide close button
      }
    }
  }
};
</script>

<style lang="scss">
/* eslint-disable */
.hero {
  display: block;
  margin-bottom: 4em;
}
.location-wrapper.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  padding-bottom: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.location {
  min-height: 270px;
  text-align: left;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 33px -25px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  cursor: pointer;

  &-title,
  &-image,
  &-subtitle,
  &-copy-container {
    pointer-events: none;
  }

  &-title {
    font-weight: bold;
  }

  &-image {
    height: 200px;
    background-color: gainsboro;
    background-size: cover;
    background-position: center;
  }

  &-copy-container {
    padding: 10px;
  }

  &-item {
    max-width: 300px;
    margin-bottom: 20px;
  }

  &-inner-items {
    display: none;

    h2.location-inner-title {
      margin: 0 0 10px 0;
      font-size: 50px;
    }

    .location-inner-subtitle {
      margin: 0 0 40px 0;
      font-size: 24px;
    }
  }

  &-close {
    display: none;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    left: 40px;
    top: 40px;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    cursor: pointer;

    &.visible {
      display: block;
      position: absolute;
    }

    &:hover {
      color: $green-light;
      transform: scale(1.1);
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &:before {
      content: "";
      display: block;
      width: 1px;
      height: 20px;
      transform: rotate(45deg);
      background-color: $green-light;
      left: 20px;
      position: absolute;
      top: 11px;
    }

    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 20px;
      transform: rotate(-45deg);
      background-color: $green-light;
      left: 20px;
      position: absolute;
      top: 11px;
    }
  }
}

.inner-item {
  opacity: 0;
}

.location-clone {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
