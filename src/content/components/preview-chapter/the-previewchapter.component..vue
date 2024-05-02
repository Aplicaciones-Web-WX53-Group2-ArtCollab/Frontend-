<script>
export default {
  name: 'the-previewchapter',

  data() {
    return {
      currentPosition: 0,
      currentMargin: 0,
      slidesPerPage: 0,
      slidesCount: 0,
      containerWidth: 0,
      slides: 0,
      container: null,
      slider: null,
      buttons: null,
      comments: [
        {
          author: 'Michi53',
          date: '2022-01-01',
          text: 'Buen capítulo',
          likes: 300,
          dislikes: 0
        },
      ]
    }
  },
  methods:{
    checkWidth() {
      this.containerWidth = this.container.offsetWidth;
      this.setParams(this.containerWidth);
    },
    setParams(w) {
      if (w < 551) {
        this.slidesPerPage = 1;
      } else {
        if (w < 901) {
          this.slidesPerPage = 2;
        } else {
          if (w < 1101) {
            this.slidesPerPage = 3;
          } else {
            this.slidesPerPage = 4;
          }
        }
      }
      this.slidesCount = this.slides - this.slidesPerPage;
      if (this.currentPosition > this.slidesCount) {
        this.currentPosition -= this.slidesPerPage;
      };
      this.currentMargin = - this.currentPosition * (100 / this.slidesPerPage);
      this.slider.style.marginLeft = this.currentMargin + '%';
      if (this.currentPosition > 0) {
        this.buttons[0].classList.remove('inactive');
      }
      if (this.currentPosition < this.slidesCount) {
        this.buttons[1].classList.remove('inactive');
      }
      if (this.currentPosition >= this.slidesCount) {
        this.buttons[1].classList.add('inactive');
      }
    },
    slideRight() {
      if (this.currentPosition != 0) {
        this.slider.style.marginLeft = this.currentMargin + (100 / this.slidesPerPage) + '%';;
        this.currentMargin += (100 / this.slidesPerPage);
        this.currentPosition--;
      };
      if (this.currentPosition === 0) {
        this.buttons[0].classList.add('inactive');
      }
      if (this.currentPosition < this.slidesCount) {
        this.buttons[1].classList.remove('inactive');
      }
    },
    slideLeft() {
      if (this.currentPosition != this.slidesCount) {
        this.slider.style.marginLeft = this.currentMargin - (100 / this.slidesPerPage) + '%';
        this.currentMargin -= (100 / this.slidesPerPage);
        this.currentPosition++;
      };
      if (this.currentPosition == this.slidesCount) {
        this.buttons[1].classList.add('inactive');
      }
      if (this.currentPosition > 0) {
        this.buttons[0].classList.remove('inactive');
      }
    },
  },
  mounted(){
    this.container = document.getElementById('container');
    this.slider = document.getElementById('slider');
    this.slides = document.getElementsByClassName('slide').length;
    this.buttons = document.getElementsByClassName('btn');

    window.addEventListener("resize", this.checkWidth);

    this.setParams();
  }
}
</script>

<template>
  <div class="bg-white" aria-label="Main content area">
  <div class="bg-dark-blue" aria-label="Header section">
    <pv-toolbar class="flex border-noround text-white-alpha-90 bg-indigo-900	">
      <template #start class="flex justify-content-start">
        <div class="flex justify-content-start">
      <img src="/src/assets/logo.png" alt="ArtCollab Logo" width="50" height="50" />
      <h1>Boulevard</h1>
          <pv-button icon="pi pi-chevron-right" class="text-white border-none bg-transparent"></pv-button>
          <h1 class="lg:text-4xl">{{ $t('chapter') }}</h1>
        </div>
      </template>
      <template #center class="flex justify-content-center">
      <div class="flex">
        <pv-button icon="pi pi-chevron-left" class="p-button border-none text-white bg-blue-800" @click="nextPage"></pv-button>
        <p class="lg:text-2xl">#2</p>
        <pv-button icon="pi pi-chevron-right" class="p-button border-none text-white bg-blue-800" @click="nextPage"></pv-button>
      </div>
      </template>
      <template #end class="flex justify-content-end">
        <div class="flex">
          <pv-button class="p-button border-none text-white bg-transparent">{{ $t('view') }}</pv-button>
          <pv-button class="p-button-rounded border-none text-white colorgreen mr-2">{{ $t('post') }}</pv-button>
          <pv-button class="p-button-rounded border-none text-black-alpha-90 colorblue">{{ $t('back') }}</pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
  <div class="flex justify-content-center" aria-label="Comic content section">
  <div class="flex-column flex justify-content-center">
    <p class ="text-center lg:text-2xl text-black-alpha-90">{{ $t('caps') }}</p>
    <img class="responsive-image" src="/src/assets/images/comic-text.png" alt="ArtCollab Logo" width="800" height="1000" />
    <img class="responsive-image" src="/src/assets/images/comic-image.png" alt="ArtCollab Logo" width="800" height="1000" />
  </div>
  </div>
  <div class="flex justify-content-center text-black-alpha-90 mt-4" aria-label="Share section">
    <div class="flex-column">
    <p class="font-bold">{{ $t('share') }}</p>
      <div class="flex">
        <pv-button class="p-button-rounded border-none text-black-alpha-90 bg-blue-400 mr-2">
          <i class="pi pi-heart"></i> {{ $t('like') }}
        </pv-button>
        <pv-button class="p-button-rounded border-none text-black-alpha-90 bg-blue-400 mr-6">
          <i class="pi pi-plus"></i> {{ $t('follow') }}
        </pv-button>
        <pv-button icon="pi pi-facebook" class="p-button-rounded border-none text-white bg-blue-600 mr-1"></pv-button>
        <pv-button icon="pi pi-twitter" class="p-button-rounded border-none text-white bg-black-alpha-90 mr-1"></pv-button>
        <pv-button icon="pi pi-copy" class="p-button-rounded border-none text-white bg-blue-400"></pv-button>
       </div>
    </div>
  </div>
    <div id="cont" aria-label="Chapter navigation section">
      <div id="slider-cont">
        <span @click="slideRight" class="btn"></span>
        <div id="slider">
          <div class="slide"><h1>Cap 2</h1></div>
          <div class="slide"><h1>Cap 3</h1></div>
          <div class="slide"><h1>Cap 4</h1></div>
          <div class="slide"><h1>Cap 5</h1></div>
          <div class="slide"><h1>Cap 6</h1></div>
          <div class="slide"><h1>Cap 7</h1></div>
          <div class="slide"><h1>Cap 8</h1></div>
          <div class="slide"><h1>Cap 9</h1></div>
          <div class="slide"><h1>Cap 10</h1></div>
        </div>
        <span @click="slideLeft" class="btn"></span>
      </div>
    </div>
    <div class="flex justify-content-start text-black-alpha-90 mt-4" aria-label="Author and artist information section">
      <div class="lg:ml-8 "><p class="text-600	">{{ $t('author') }}</p> <br/> <p class="text-lg font-bold">Maria M. Salvador</p></div>
      <div class="lg:ml-8 "><p class="text-600	">{{ $t('artist') }}</p> <br/> <p class="text-lg font-bold ml-2">MMIvens</p></div>
    </div>
    <div class="flex justify-content-start text-black-alpha-90 mt-4" aria-label="Comments section">
      <p class="text-lg text-black-alpha-90 font-bold">{{ $t('coments') }}</p>
    </div>
    <div>
      <div class="comment-section">
        <pv-textarea class="comment-input" :placeholder="$t('logincoment')"></pv-textarea>
        <div class="send">
          <pv-button class="p-button-rounded border-none text-white bg-blue-400 ">
            <i class="pi pi-telegram"></i>
          </pv-button>
        </div>
      </div>
      <div  aria-label="Comment input section">
        <div class="comments-section">
          <div class="flex justify-content-start">
            <pv-tabview class="full-width">
              <pv-tabpanel :header="$t('principal')">
                <div class="comments">
                  <div v-for="(comment, index) in comments" :key="index">
                    <div class="flex-column">
                      <p class="text-black-alpha-90">{{ comment.author }}</p>
                      <p class="text-gray-400">{{ comment.date }}</p>
                      <div class="flex">
                        <pv-button class="p-button border-none bg-gray-200 text-black-alpha-90 mr-3">TOP</pv-button>
                        <p class="text-black-alpha-90">{{ comment.text }}</p>
                      </div>
                    </div>
                    <div class="flex justify-content-end">
                      <pv-button icon="pi pi-thumbs-up" class="p-button-rounded border-none text-black-alpha-90 bg-transparent"></pv-button>
                      <p class="text-black-alpha-90 text-lg">{{ comment.likes }}</p>
                      <pv-button icon="pi pi-thumbs-down" class="p-button-rounded border-none text-black-alpha-90 bg-transparent"></pv-button>
                      <p class="text-black-alpha-90 text-lg">{{ comment.dislikes }}</p>
                    </div>
                    <hr/>
                  </div>
                </div>
              </pv-tabpanel>
              <pv-tabpanel :header="$t('recent')">
                <p>{{ $t('nocoment') }}</p>
              </pv-tabpanel>
            </pv-tabview>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.comment-section {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.comment-input {
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 100%; /* Asegura que el textarea no sobrepase el ancho del contenedor padre */
}
.send {
  display: flex;
  justify-content: flex-end; /* Alinea el botón de envío a la derecha */
}
.comments-section {
  width: 100%;
}
.responsive-image {
  width: 100%;
  height: auto;
}

@media (min-width: 1000px) {
  .responsive-image {
    width: 800px;
    height: 1000px;
  }
}
.full-width{
  width: 100%;
}
#cont{
  height: 30vh;
  display: grid;
  place-items: center;
}
#slider-cont {
  height: 200px;
  width: 40vw;
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  padding: 20px;
}
#slider-cont .btn {
  position: absolute;
  top: calc(50% - 30px);
  width: 15px;
  height: 15px;
  border-left: 8px solid #696969;
  border-top: 8px solid #696969;
  cursor: pointer;
}
#slider-cont .btn:hover{
  transform: scale(1.2);
}
#slider-cont .btn.inactive {
  border-color: #282828;
}
#slider-cont .btn:first-of-type{
  transform: rotate(-45deg);
}
#slider-cont .btn:last-of-type{
  transform: rotate(135deg);
  right: 10px;
}
#slider-cont #slider{
  display: flex;
  width: 1000%;
  height: 100%;
  transition: all 0.5s;
}
#slider-cont #slider .slide{
  height: 90%;
  margin: auto 10px;
  background-color: #b5b5b5;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px white, -2px 2px  4px 2px white;
  display: grid;
  place-items: center;
}
#slider-cont #slider .slide span{
  color: white;
  font-size: 60px;
}

@media only screen and (min-width: 1100px){
  #slider-cont #slider .slide{
    width: calc(2.5% - 20px);
  }
}

@media only screen and (max-width: 1100px){
  #slider-cont #slider .slide{
    width: calc(3.3333333% - 20px);
  }
}

@media only screen and (max-width: 800px){
  #slider-cont #slider .slide{
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 550px){
  #slider-cont #slider .slide{
    width: calc(10% - 20px);
  }
}
.colorgreen{
  background-color: #097682;
}
.colorblue{
  background-color: #7AC8D0;
}
</style>




