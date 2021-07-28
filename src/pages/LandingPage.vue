<template>
  <q-page>
    <div class="__header">
      <!-- cover photo -->
      <div class="__cover" :style="`height: ${screenHeight}px`">
        <div class="__content row">
          <div class="col-6 q-pl-xl flex flex-center text-h2 text-white">
            <div>
              <transition appear enter-active-class="animated fadeInUp">
                <div>Hire A Vetted Team To Help You With Your Needs</div>
              </transition>
              <transition appear enter-active-class="animated fadeInLeft">
                <div class="q-pt-md">
                  <q-btn
                    class="text-weight-regular text-left"
                    push
                    rounded
                    color="white"
                    text-color="primary"
                    label="Learn More!"
                    size="lg"
                    to="/signup"
                    style="width: 250px"
                  />
                </div>
              </transition>
            </div>
          </div>
          <div class="col-6">
            <transition appear enter-active-class="animated fadeInRight">
              <div>
                <q-img class="__photo1" src="~assets/photos/photo1.svg" />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="__content q-pb-xl">
      <div class="text-center text-pink-3 q-pt-xl q-px-xl">
        <div class="text-h4 q-pb-md">Work with a Team</div>
        <div class="text-h3 text-blue-3">
          Why Should You Hire A Team At E-SUGO?
        </div>
      </div>
      <div class="row items-center q-pa-md">
        <div class="col-6 q-pa-xl q-mt-xl text-grey-9">
          <div
            data-aos="slide-right"
            data-aos-offset="100"
            ata-aos-anchor-placement="top-bottom"
            data-aos-duration="700"
            data-aos-delay="100"
            class="text-h3 text-weight-bolder"
          >
            Vetted Teams Teams
          </div>
          <q-separator color="pink-3" size="5px" spaced />
          <div
            data-aos="fade-up"
            ata-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-duration="800"
            data-aos-delay="100"
            class="text-h5"
            style="width: 50%"
          >
            at E-SUGO are required to submit Philippine government-issued
            documents to establish their legitimacy
          </div>
        </div>
        <div class="col-6 text-center">
          <div>
            <q-img
              class="__photo2"
              src="~assets/photos/photo2.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
        <div class="col-6">
          <div>
            <q-img
              class="__photo2 q-ml-xl"
              src="~assets/photos/photo3.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="col-6 q-pa-xl q-mt-xl text-grey-9">
            <div
              data-aos="slide-left"
              data-aos-offset="100"
              data-aos-duration="700"
              ata-aos-anchor-placement="top-bottom"
              data-aos-delay="100"
              class="text-h3 text-weight-bolder"
            >
              Time Tracking
            </div>
            <q-separator color="blue-3" size="5px" spaced />
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              ata-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              class="text-h5"
              style="width: 50%"
            >
              E-SUGO’s time tracking app helps you monitor your remote team’s
              worked hours.
            </div>
          </div>
        </div>
        <div class="col-6 q-pa-xl q-mt-xl text-grey-9">
          <div
            data-aos="slide-right"
            data-aos-duration="700"
            data-aos-offset="100"
            data-aos-delay="100"
            ata-aos-anchor-placement="top-bottom"
            class="text-h3 text-weight-bolder"
          >
            Cost-efficient
          </div>
          <q-separator color="pink-3" size="5px" spaced />
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            ata-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            class="text-h5"
            style="width: 50%"
          >
            Hiring a team at E-SUGO cuts your business operating cost to up to
            50%.
          </div>
        </div>
        <div class="col-6 text-center">
          <div>
            <q-img
              class="__photo2"
              src="~assets/photos/photo4.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="__content2">
      <div class="text-center q-pt-xl q-px-xl">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="700"
          ata-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          class="text-h4 q-pb-md text-white"
        >
          Join Us Now!
        </div>
        <div
          data-aos="fade-left"
          ata-aos-anchor-placement="bottom-bottom"
          data-aos-offset="100"
          data-aos-duration="500"
          class="text-h3 text-pink-1"
        >
          Why Should You Create A Team At E-SUGO?
        </div>
      </div>
      <div class="row items-center q-pa-md">
        <div class="col-6 q-pa-xl q-mt-xl text-pink-1">
          <div
            data-aos="slide-right"
            data-aos-offset="100"
            ata-aos-anchor-placement="top-bottom"
            data-aos-duration="700"
            data-aos-delay="100"
            class="text-h3 text-weight-bolder"
          >
            Vetted Teams ONLY!
          </div>
          <q-separator color="white" size="5px" spaced />
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            ata-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100"
            class="text-h5 text-pink-1"
            style="width: 50%"
          >
            At E-SUGO, you do not have to worry about competing against
            freelancers. It’s teams against teams.
          </div>
        </div>
        <div class="col-6 text-center">
          <div>
            <q-img
              class="__photo2"
              src="~assets/photos/photo5.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
        <div class="col-6">
          <div>
            <q-img
              class="__photo2 q-ml-xl"
              src="~assets/photos/photo6.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="col-6 q-pa-xl q-mt-xl">
            <div
              data-aos="slide-left"
              data-aos-offset="100"
              data-aos-duration="700"
              ata-aos-anchor-placement="top-bottom"
              data-aos-delay="100"
              class="text-h3 text-weight-bolder text-grey-8"
            >
              Worldwide Market
            </div>
            <q-separator color="white" size="5px" spaced />
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              ata-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="100"
              class="text-h5 text-grey-8"
              style="width: 50%"
            >
              E-SUGO let’s you showcase your talents and expertise to businesses
              worldwide.
            </div>
          </div>
        </div>
        <div class="col-6 q-pa-xl q-mt-xl">
          <div
            data-aos="slide-right"
            ata-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-duration="700"
            data-aos-delay="100"
            class="text-h3 text-weight-bolder"
          >
            Absolutely FREE!
          </div>
          <q-separator color="pink-3" size="5px" spaced />
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            ata-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100"
            class="text-h5"
            style="width: 50%"
          >
            Using E-SUGO is free… that’s it. It’s free.
          </div>
        </div>
        <div class="col-6 text-center">
          <div>
            <q-img
              class="__photo2"
              src="~assets/photos/photo7.svg"
              height="500px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center q-pa-md q-pt-xl q-col-gutter-lg">
      <!-- <div class="col-4">
        <q-card class="__card1 q-pa-lg">
          <div class="row items-center justify-evenly text-white">
            <div class="col-7">
              <div class="text-h4 5text-weight-bolder">
                Start as a Team Owner
              </div>
              <div class="text-h6">
                Apply to job postings that fit your team
              </div>
              <q-btn
                class="q-mt-sm"
                color="white"
                text-color="pink-3"
                label="Join Now"
                to="/signup"
                rounded
              />
            </div>
            <div class="col q-mb-xl">
              <div>
                <q-img
                  class="__photo2"
                  src="~assets/photos/photo8.svg"
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
          </div>
        </q-card>
      </div> -->
      <!-- <div class="col-4">
        <q-card class="__card2 q-pa-lg">
          <div class="row items-center justify-evenly text-white">
            <div class="col-7">
              <div class="text-h4 5text-weight-bolder">Start as a Client</div>
              <div class="text-h6">Hire vetted talents for a lower cost</div>
              <q-btn
                class="q-mt-sm"
                color="white"
                text-color="pink-3"
                label="Join Now"
                to="/signup"
                rounded
              />
            </div>
            <div class="col q-mb-xl">
              <div>
                <q-img
                  class="__photo2"
                  src="~assets/photos/photo9.svg"
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
          </div>
        </q-card>
      </div> -->
      <div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          ata-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="100"
          class="box-container q-gutter-lg"
        >
          <div class="box-item q-pa-lg">
            <div class="flip-box">
              <div class="flip-box-front text-center svg">
                <div class="inner color-white">
                  <h3 class="flip-box-header">Start as a Team Owner</h3>
                  <p>Apply to job postings that fit your team.</p>
                  <img
                    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                    alt=""
                    class="flip-box-img"
                  />
                </div>
              </div>
              <div class="flip-box-back text-center svg1">
                <div class="inner color-white">
                  <h3 class="flip-box-header">Start as a Team Owner</h3>
                  <p>A short sentence describing this callout is.</p>
                  <q-btn
                    class="q-mt-sm flip-box-button"
                    text-color="pink-3"
                    label="Join Now"
                    to="/signup"
                  >
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="box-item q-pa-lg">
            <div class="flip-box">
              <div class="flip-box-front text-center svg2">
                <div class="inner color-white">
                  <h3 class="flip-box-header">Start as a Client</h3>
                  <p>Hire vetted talents for a lower cost.</p>
                  <img
                    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                    alt=""
                    class="flip-box-img"
                  />
                </div>
              </div>
              <div class="flip-box-back text-center svg3">
                <div class="inner color-white">
                  <h3 class="flip-box-header">Start as a Client</h3>
                  <p>Hire vetted talents for a lower cost.</p>
                  <q-btn
                    class="q-mt-sm flip-box-button"
                    text-color="pink-3"
                    label="Join Now"
                    to="/signup"
                  >
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="text-center text-pink-3 q-pt-xl q-px-xl">
        <div class="text-h5 q-pb-md">Our Services</div>
        <div class="text-h4 text-blue-3">Services Available On Our Site</div>
        <q-separator color="pink-3" size="5px" spaced />
      </div>
    </div>
    <div class="col-12">
      <div class="q-gutter-x-md text-center q-pb-xl">
        <q-btn round icon="fab fa-facebook" color="blue" size="xl" /><q-btn
          round
          icon="fab fa-facebook"
          color="blue"
          size="xl"
        /><q-btn round icon="fab fa-facebook" color="blue" size="xl" /><q-btn
          round
          icon="fab fa-facebook"
          color="blue"
          size="xl"
        /><q-btn round icon="fab fa-facebook" color="blue" size="xl" />
      </div>
    </div>
    <div class="__footer">
      <div class="row">
        <div class="col-12 __content text-center">
          <div class="q-py-lg q-gutter-x-md">
            <q-btn round icon="fab fa-facebook" color="blue" size="md" />
            <q-btn round icon="fab fa-twitter" color="blue-10" size="md" />
            <q-btn round icon="fab fa-instagram" color="red-5" size="md" />
            <q-btn round icon="fab fa-linkedin" color="indigo-10" size="md" />
          </div>
        </div>
        <div class="col-12">
          <div class="row q-pa-xl">
            <div class="col-6">
              <div class="text-h4 text-blue-3">Gallery</div>
              <div class="text-h2 text-red-3">Videos You Want to Watch</div>
            </div>
            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  img-src="~assets/ITspecialist.jpg"
                />
                <q-carousel-slide :name="2" img-src="~assets/carpentry.jpg" />
                <q-carousel-slide :name="3" img-src="~assets/plumber.jpeg" />
                <q-carousel-slide
                  :name="4"
                  img-src="~assets/machine-operator.jpg"
                />
              </q-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center q-pb-sm text-pink-3 text-weight-bold">
      © 2021 E-SUGO. All rights reserved.
    </div>
    <q-banner class="bg-blue-3 text-white text-center">
      <span class="text-overline" style="font-size: 10px">
        <q-icon name="code" size="20px" />
        Developed by: Pandi And Yassier
      </span>
    </q-banner>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class LandingPage extends Vue {
  screenHeight = 0;
  slide = 1;

  created() {
    this.screenHeight = window.screen.height - 107;
    console.log(this.screenHeight);
  }
}
</script>

<style scoped>
.svg {
  background-image: url('~assets/photos/Owner.jpg');
}
.svg1 {
  background-image: url('~assets/photos/Owner2.jpg');
}
.svg2 {
  background-image: url('~assets/photos/Client.jpg');
}
.svg3 {
  background-image: url('~assets/photos/Client2.jpg');
}
.__cover {
  background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);
  padding: 0px 100px 0px 100px;
}

.__cover .__content {
  height: 100%;
}

.__content {
}

.__photo1 {
  margin-top: 100px;
}

.__photo2 {
  margin-top: 100px;
}

.__content2 {
  background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%);
}

.__card1 {
  background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);
}

.__card2 {
  background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%);
}

.__footer .__content {
  background-image: url('../assets/simple.jpg');
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.text-center {
  text-align: center;
}

.color-white {
  color: #fff;
}

.box-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 15px;
  width: 100%;
}

@media screen and (min-width: 1380px) {
  .box-container {
    flex-direction: row;
  }
}

.box-item {
  position: relative;
  -webkit-backface-visibility: hidden;
  width: 415px;
  margin-bottom: 35px;
  max-width: 100%;
}

.flip-box {
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.flip-box-front,
.flip-box-back {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  min-height: 475px;
  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box .inner {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 60px;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;

  transform: translateY(-50%) translateZ(60px) scale(0.94);
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  -ms-transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
}

.flip-box-header {
  font-size: 34px;
}

.flip-box p {
  font-size: 20px;
  line-height: 1.5em;
}

.flip-box-img {
  margin-top: 25px;
}

.flip-box-button {
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  padding: 15px 20px;
  text-transform: uppercase;
}
</style>
