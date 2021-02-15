<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
    appear
    :duration="700"
  >
    <q-page>
      <q-header class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn v-go-back="'/kustombaju'" unelevated rounded color="primary">
              <div class="row items-center">
                <span class="material-icons" style="font-size:30px;">
                  arrow_back
                </span>
              </div>
            </q-btn>
            Kustom jahit
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <div class="column around-center" style="height:80%;">
          <!-- <transition
            enter-active-class="animated fadeInDown"
            appear
            :duration="700"
          > -->
          <div class="row justify-center">
            <div
              style="margin: 10px; width: 100%; height:auto; border-radius:20px;"
            >
              <div v-for="imgmenu in imgmenu.data" v-bind:key="imgmenu.id">
                <div v-if="imgmenu.key === 'site.bajukustomgirl'">
                  <q-img
                    :src="
                      'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                        imgmenu.value
                    "
                    style="width: 100%; height:150px; border-radius:20px;"
                  >
                    <template v-slot:loading>
                      <div class="text-subtitle1 text-white"></div>
                    </template>
                    <q-btn
                      @click="
                        $router.push('/kustombaju/kustomjahit/bajuwanitadetail')
                      "
                      flat
                      style="width:100%; height:100%;"
                    >
                      <div class="desc">
                        SERAGAM PEREMPUAN
                      </div>
                    </q-btn>
                  </q-img>
                </div>
              </div>
            </div>
          </div>
          <!-- </transition> -->
        </div>
        <div class="row justify-center" style="margin-top:10px;">
          <div class="col-6" style="height:150px; ">
            <!-- <transition
              enter-active-class="animated fadeInLeft"
              appear
              :duration="700"
            > -->
            <div
              style="width: 100%; height:auto; border-radius:20px; margin-right:5px;"
            >
              <div v-for="imgmenu in imgmenu.data" v-bind:key="imgmenu.id">
                <div v-if="imgmenu.key === 'site.celanakustom'">
                  <q-img
                    :src="
                      'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                        imgmenu.value
                    "
                    style="width: 100%; height:150px; border-radius:20px;"
                  >
                    <template v-slot:loading>
                      <div class="text-subtitle1 text-white"></div>
                    </template>
                    <q-btn
                      @click="
                        $router.push('/kustombaju/kustomjahit/celanadetail')
                      "
                      flat
                      style="width: 100%; height:100%;"
                    >
                      <div class="desc">
                        <p class="desc_content">
                          CELANA
                        </p>
                      </div>
                    </q-btn>
                  </q-img>
                </div>
              </div>
            </div>
            <!-- </transition> -->
          </div>
          <div class="col-5 " style="height:150px;">
            <!-- <transition
              enter-active-class="animated fadeInRight"
              appear
              :duration="700"
            > -->
            <div
              style=" margin-left: 5px; width: 100%; height:auto; border-radius:20px;"
            >
              <div v-for="imgmenu in imgmenu.data" v-bind:key="imgmenu.id">
                <div v-if="imgmenu.key === 'site.rokkustom'">
                  <q-img
                    :src="
                      'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                        imgmenu.value
                    "
                    style="width: 100%; height:150px; border-radius:20px;"
                  >
                    <template v-slot:loading>
                      <div class="text-subtitle1 text-white"></div>
                    </template>
                    <q-btn
                      flat
                      @click="$router.push('/kustombaju/kustomjahit/rokdetail')"
                      style="width: 100%; height:100%;"
                    >
                      <div class="desc">
                        <p class="desc_content">
                          ROK
                        </p>
                      </div>
                    </q-btn>
                  </q-img>
                </div>
              </div>
            </div>
            <!-- </transition> -->
          </div>
        </div>
        <!-- <transition
          enter-active-class="animated fadeInUp"
          appear
          :duration="700"
        > -->
        <div class="row justify-center" style="margin-top:10px;">
          <div
            style=" margin: 10px; width: 100%; height:auto; border-radius:20px;"
          >
            <div v-for="imgmenu in imgmenu.data" v-bind:key="imgmenu.id">
              <div v-if="imgmenu.key === 'site.bajukustomman'">
                <q-img
                  :src="
                    'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                      imgmenu.value
                  "
                  style="width: 100%; height:150px; border-radius:20px;"
                >
                  <template v-slot:loading>
                    <div class="text-subtitle1 text-white"></div>
                  </template>
                  <q-btn
                    @click="
                      $router.push('/kustombaju/kustomjahit/bajupriadetail')
                    "
                    style="width: 100%; height:100%; "
                  >
                    <div class="desc">
                      SERAGAM LAKI-LAKI
                    </div>
                  </q-btn>
                </q-img>
              </div>
            </div>
          </div>
        </div>
        <!-- </transition> -->
      </q-page-container>
    </q-page>
  </transition>
</template>

<script>
import axios from "Axios";
export default {
  data() {
    return {
      slide: 0,
      imgmenu: {}
    };
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.imgmenu = response));
  }
};
</script>
<style>
div.desc {
  height: 20%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #000;
  color: #fff;
  opacity: 0.7;
  filter: alpha(opacity=10);
}
</style>
