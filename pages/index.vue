<template lang="pug">
  div
    section.hero
      img.bg-hero(src="/bg-home.png" alt="bg home")
      .container
        .row
          .col-12
            div.hello.animate-text.mb-3 Hello, I'm
            h1.fullname.mb-4.mt-0
              span.d-block.animate-text Mauricio H.
              span.d-block.animate-text Cabrera
            p.about-me.animate-text
              | Front-end Developer

      .container-animation
        img(width="147" height="34" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Group-26.png" class="attachment-full size-full" alt="")

      .container-animation-2
        img(width="21" height="21" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Rectangle-7.png" class="attachment-full size-full" alt="")

      .container-animation-3
        img(width="14" height="14" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Rectangle-8.png" class="attachment-full size-full" alt="")

      .container-animation-4
        img(width="41" height="41" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Path-25.png" class="attachment-full size-full" alt="")

      .container-animation-5
        img(width="98" height="91" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Group-31.png" class="attachment-full size-full" alt="")

      .container-animation-6
        img(width="98" height="91" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Group-31.png" class="attachment-full size-full" alt="")

      .container-animation-7
        img(width="147" height="34" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Group-26.png" class="attachment-full size-full" alt="")

      .container-animation-8
        img(width="29" height="29" src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/Rectangle-9.png" class="attachment-full size-full" alt="")

    section.portfolio
      .container
        .row.header
          .col-12.px-3.px-sm-0
            h3.animate-text.m-0.mb-1 MY WORK
            p.animate-text.m-0.mb-5 Projects

      .portfolio-list
        .row
          article(v-for="item in portfolio" :key="item.name" class="portfolio-item col-12 col-sm-6 col-md-4 p-0")
            .embed-responsive.embed-responsive-4by3
              img.embed-responsive-item(:src="item.image.url" :alt="item.image.alt")
            a(:href="item.link" target="_blank").hover

</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        {
          name: "Fast Init",
          image: {
            url: "/portfolio/fast-init.png",
            alt: "Imagen de Fast Init"
          },
          link: "https://mauriciohernancabrera.github.io/fast-init"
        },

        {
          name: "geco",
          image: {
            url: "/portfolio/geco.png",
            alt: "Imagen de geco"
          },
          link: "https://mauriciohernancabrera.github.io/hela2"
        },

        {
          name: "hela2",
          image: {
            url: "/portfolio/hela2.png",
            alt: "Imagen de hela2"
          },
          link: "https://mauriciohernancabrera.github.io/hela2"
        },

        {
          name: "levelforward",
          image: {
            url: "/portfolio/levelforward.png",
            alt: "Imagen de Level Forward"
          },
          link: "http://levelforward.ml/"
        },

        {
          name: "Livet",
          image: {
            url: "/portfolio/livet.png",
            alt: "Imagen de livet"
          },
          link: "https://livet.app/"
        },

        {
          name: "Opendoor",
          image: {
            url: "/portfolio/opendoor-2.png",
            alt: "Imagen de opendoor"
          },
          link: "https://opendoor.devlights.com/"
        },

        {
          name: "Devlights Jobs",
          image: {
            url: "/portfolio/jobs-devlights.png",
            alt: "Imagen de devlights jobs"
          },
          link: "https://jobs.devlights.com/"
        },

        {
          name: "Devlights Works",
          image: {
            url: "/portfolio/works-devlights.png",
            alt: "Imagen de devlights works"
          },
          link: "https://work.devlights.com/"
        },

        {
          name: "Bard Time",
          image: {
            url: "/portfolio/bardtime.png",
            alt: "Imagen de Bard Time en React"
          },
          link: "https://bard-timereact-yxzmoiqyfb.now.sh/"
        },

        {
          name: "Multimer",
          image: {
            url: "/portfolio/multimer.png",
            alt: "Imagen de multimer"
          },
          link: "https://mauriciohernancabrera.github.io/multimer"
        },

        {
          name: "TimeToTime",
          image: {
            url: "/portfolio/timetotime.png",
            alt: "Imagen de TimeToTime"
          },
          link: "https://time-to-time-vatapqbcbm.now.sh/temporizador"
        },

        {
          name: "¿Cuándo rindo?",
          image: {
            url: "/portfolio/cuandorindo.png",
            alt: "Imagen de ¿Cuándo rindo?"
          },
          link: "https://cuandorindo.com"
        },

        {
          name: "Platzi - Podcasts",
          image: {
            url: "/portfolio/platzi_podcasts.png",
            alt: "Imagen de Platzi - Podcasts"
          },
          link: "https://podcasts-elkzwdnhrh.now.sh/"
        },

        {
          name: "Platzi - Video",
          image: {
            url: "/portfolio/platzi_video.png",
            alt: "Imagen de Platzi - Video"
          },
          link: "https://mauriciohernancabrera.github.io/platzi-video/"
        },

        {
          name: "Reiki en Corrientes",
          image: {
            url: "/portfolio/reikiencorrientes.png",
            alt: "Imagen de Reiki en Corrientes"
          },
          link: "https://reikiencorrientes.github.io/"
        },

        {
          name: "LoL Spells",
          image: {
            url: "/portfolio/lolspells.png",
            alt: "Imagen de LoL Spells"
          },
          link: "https://lol-spells-kjeluwybxk.now.sh/"
        },

        {
          name: "Piedra papel o tijera online",
          image: {
            url: "/portfolio/ppt.png",
            alt: "Imagen de Piedra papel o tijera online"
          },
          link:
            "https://piedra-papel-o-tijera-online-vxvrzvlmum.now.sh/partida/-LWvxouUa-FyxTzkO0i9"
        },

        {
          name: "Klou",
          image: {
            url: "/portfolio/klou.png",
            alt: "Imagen de Klou"
          },
          link: "https://mauriciohernancabrera.github.io/klou/"
        },

        {
          name: "Codypetts",
          image: {
            url: "/portfolio/codypetts.png",
            alt: "Imagen de Codypetts"
          },
          link: "https://mauriciohernancabrera.github.io/codypetts/"
        },

        {
          name: "Ixtendo",
          image: {
            url: "/portfolio/ixtendo.png",
            alt: "Imagen de Ixtendo"
          },
          link: "https://mauriciohernancabrera.github.io/Ixtendo/"
        },

        {
          name: "TaTeTi de Google",
          image: {
            url: "/portfolio/tateti_google.png",
            alt: "Imagen de TaTeTi de Google"
          },
          link: "https://mauriciohernancabrera.github.io/tateti-google/"
        }
      ]
    };
  },

  mounted() {
    this.$scrollReveal.reveal(".portfolio-list .row .portfolio-item", {
      beforeReveal: el => {
        el.classList.add("animated");
        el.classList.add("zoomInUp");
      },
      interval: 150
    });

    this.$scrollReveal.reveal(".animate-text", {
      beforeReveal: el => {
        el.classList.add("animated");
        el.classList.add("fadeInLeft");
      },
      interval: 350
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";
.animate-text {
  z-index: 5;
}
.hero {
  position: relative;
  .bg-hero {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  /* background-color: map-get($colors, section);
  background-image: url(/bg-home.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: auto; */
  margin-top: 0px;
  margin-bottom: 0px;
  height: 100vh;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(252, 252, 252, 0.25);
  position: relative;

  .hello {
    font-family: $font2;
    font-weight: 500;
    color: map-get($colors, primary);
    font-size: 40px;
    line-height: 27px;
    letter-spacing: 0.1px;
  }

  .fullname {
    font-family: $font1;
    font-weight: 600;
    color: map-get($colors, light);
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 1px;

    @include media-query(md) {
      font-size: 100px;
      line-height: 100px;
    }
  }

  .about-me {
    font-family: $font2;
    font-weight: 500;
    font-size: 30px;
    color: map-get($colors, light);
    line-height: 27px;
    letter-spacing: 0.1px;
  }
}

.portfolio {
  padding: 120px 0 0 0;
  background-color: map-get($colors, section-invert);

  .header {
    h3 {
      font-family: $font2;
      font-weight: 500;
      font-size: 14px;
      color: map-get($colors, primary);
      letter-spacing: 0.1px;
    }

    p {
      font-family: $font1;
      font-weight: 700;
      font-size: 40px;
      color: map-get($colors, light);
      letter-spacing: 1px;
    }
  }

  .portfolio-list {
    .portfolio-item {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      /* background: white; */
      /* transform: scale(1.01); */

      &:hover {
        .hover {
          opacity: 1;
        }

        img {
          transform: scale(1.1);
        }
      }

      .hover {
        transition: 0.3s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: flex-end;

        /* h3 {
          font-family: $font2;
          font-weight: 500;
          font-size: 32px;
          line-height: 24px;
          color: map-get($colors, light);
          letter-spacing: 0.1px;
          display: inline-block;

          &:after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 4px;
            background-color: map-get($colors, light);
          }
        } */
      }

      img {
        object-fit: cover;
        width: 100%;
        vertical-align: top;
        transition: 0.3s;
      }
    }
  }
}

.container-animation {
  z-index: -1;
  width: 200px;
  position: absolute;
  left: calc(90% - 100px);
  top: 50%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: lg-x-move 35s alternate infinite linear;
}

.container-animation-2 {
  z-index: -1;
  width: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: sm-yx-move 5s alternate infinite linear;
}

.container-animation-3 {
  z-index: -1;
  width: 150px;
  position: absolute;
  left: 54%;
  top: 44%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: circle-large 35s normal infinite linear;
}

.container-animation-4 {
  z-index: -1;
  width: 100px;
  position: absolute;
  left: calc(90% - 50px);
  top: 10%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: rotate-x 15s normal infinite linear;
}

.container-animation-5 {
  z-index: 100;
  width: 115px;
  position: absolute;
  left: 5%;
  top: 5%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: rotate-x 15s normal infinite linear;
}

.container-animation-6 {
  z-index: -1;
  width: 200px;
  position: absolute;
  left: calc(92% - 100px);
  top: 70%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: lg-y-move 35s alternate infinite linear;
}

.container-animation-7 {
  z-index: -1;
  width: 200px;
  position: absolute;
  left: calc(35% - 100px);
  top: 50%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: lg-x-move 35s alternate infinite linear;
}

.container-animation-8 {
  z-index: -1;
  width: 200px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: rotateZ(0deg);
  text-align: center;
  display: block;
  animation: lg-xy-move 15s alternate infinite linear;
}

@keyframes circle-small {
  0% {
    -webkit-transform: rotate(0deg) translate(-25px) rotate(0deg);
    transform: rotate(0deg) translate(-25px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-25px) rotate(-360deg);
    transform: rotate(360deg) translate(-25px) rotate(-360deg);
  }
}

@keyframes circle-medium {
  0% {
    -webkit-transform: rotate(0deg) translate(-100px) rotate(0deg);
    transform: rotate(0deg) translate(-100px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-100px) rotate(-360deg);
    transform: rotate(360deg) translate(-100px) rotate(-360deg);
  }
}

@keyframes circle-large {
  0% {
    -webkit-transform: rotate(0deg) translate(-150px) rotate(0deg);
    transform: rotate(0deg) translate(-150px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-150px) rotate(-360deg);
    transform: rotate(360deg) translate(-150px) rotate(-360deg);
  }
}

@keyframes sm-y-move {
  0% {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  100% {
    -webkit-transform: translate(0, 50%);
    transform: translate(0, 50%);
  }
}

@keyframes md-y-move {
  0% {
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
  }
  100% {
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
  }
}

@keyframes lg-y-move {
  0% {
    -webkit-transform: translate(0, -150%);
    transform: translate(0, -150%);
  }
  100% {
    -webkit-transform: translate(0, 150%);
    transform: translate(0, 150%);
  }
}

@keyframes sm-x-move {
  0% {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  100% {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
}

@keyframes md-x-move {
  0% {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  100% {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
}

@keyframes lg-x-move {
  0% {
    -webkit-transform: translate(-150%, 0);
    transform: translate(-150%, 0);
  }
  100% {
    -webkit-transform: translate(150%, 0);
    transform: translate(150%, 0);
  }
}

@keyframes sm-xy-move {
  0% {
    -webkit-transform: translate(-10%, -10%);
    transform: translate(-10%, -10%);
  }
  100% {
    -webkit-transform: translate(10%, 10%);
    transform: translate(10%, 10%);
  }
}

@keyframes md-xy-move {
  0% {
    -webkit-transform: translate(-25%, -25%);
    transform: translate(-25%, -25%);
  }
  100% {
    -webkit-transform: translate(25%, 25%);
    transform: translate(25%, 25%);
  }
}

@keyframes lg-xy-move {
  0% {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  100% {
    -webkit-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }
}

@keyframes sm-yx-move {
  0% {
    -webkit-transform: translate(10%, -10%);
    transform: translate(10%, -10%);
  }
  100% {
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}

@keyframes md-yx-move {
  0% {
    -webkit-transform: translate(25%, -25%);
    transform: translate(25%, -25%);
  }
  100% {
    -webkit-transform: translate(-25%, 25%);
    transform: translate(-25%, 25%);
  }
}

@keyframes lg-yx-move {
  0% {
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
  }
  100% {
    -webkit-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
  }
}

@keyframes rotate-x {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate-y {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes fade-in-out {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
