<template>
  <q-page>
    <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
      <div v-if="nomor.key === 'site.number_wa'">
        <q-header class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title>
              <q-btn v-go-back="'/'" unelevated rounded color="primary">
                <span class="material-icons" style="font-size:30px;">
                  arrow_back
                </span>
              </q-btn>
              Beli produk
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-carousel
            animated
            v-model="slide"
            arrows
            infinite
            style="height:200px; width:100%;"
          >
            <q-carousel-slide
              v-for="imgslider in imgslider.data"
              v-bind:key="imgslider.id"
              :name="imgslider.id"
            >
              <img
                v-bind:src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    imgslider.image
                "
                style="width:100%; height:100%; border-radius:20px;"
              />
            </q-carousel-slide>
          </q-carousel>
        </q-page-container>
        <div class="row" style="margin-top:10px; margin-button:10px;">
          <div
            full-height
            class="col-6"
            v-for="info in info.data"
            v-bind:key="info.id"
          >
            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              :duration="700"
            >
              <q-card
                class="my-card "
                style="margin: 10px; border-radius:10px;"
              >
                <img
                  :src="
                    'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                      info.image
                  "
                  style="height:100px;"
                />
                <q-card-section>
                  <div
                    class="text-h7"
                    style="font-weight:bold; color: #01a3a4;"
                  >
                    Rp. {{ formatPrice(info.price) }}
                  </div>
                  <div class="text-subtitle3">{{ info.name }}</div>
                </q-card-section>
                <div class="row justify-center">
                  <q-btn
                    flat
                    @click="$router.push('/produkbaju/details/' + info.id)"
                    size="10px"
                    style="border-radius : 50px; background-color: #2980b9; color:#ffff; margin:10px; width: 90%;"
                    >Details</q-btn
                  >
                </div>
              </q-card>
            </transition>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn
            fab
            icon="phone"
            color="primary"
            @click="redirect('https://wa.me/62' + nomor.value + '?text=Hai')"
          />
        </q-page-sticky>
      </div>
    </div>
  </q-page>
</template>
<script>
import axios from "Axios";
export default {
  props: ["id"],
  data() {
    return {
      slide: 1,
      lorem: "POTO PRODUK",
      nomor: {},
      info: {},
      imgslider: {}
    };
  },
  methods: {
    redirect(url) {
      window.location = url;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/product")
      .then(response => (this.info = response));
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.nomor = response));
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/slider")
      .then(response => (this.imgslider = response));
  }
};
</script>
