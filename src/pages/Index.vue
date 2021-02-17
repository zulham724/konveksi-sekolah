<template>
  <div class="bg-image">
    <transition
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutRight"
      appear
      :duration="700"
    >
      <q-page class="bg-transparent">
        <center>
          <div class="row full-height justify-center">
            <div
              class="text-h5 text-primary"
              style="font-weight: bold; top: 130px; position:absolute; "
            >
              SIMVON1
            </div>
            <div
              class="text-h7 text-primary"
              style="font-weight: bold; top: 170px; position:absolute;"
            >
              Sistem Konveksi Online SMK Negeri 1 Sragen
            </div>
            <q-img
              style="width:80px; position: absolute; top: 210px;"
              src="~assets/logosmk.png"
              sizes="30px"
            />
            <q-img
              style="width:90%; 
            position: absolute; 
            bottom: 190px;"
              src="~assets/sewing.png"
              sizes="30px"
            />
            <q-btn
              style="width:90%; position: absolute; bottom: 140px;"
              size="15px"
              @click="$router.push('/produkbaju')"
              unelevated
              rounded
              color="primary"
              label="Beli produk"
            />
            <q-btn
              style="width:90%; background-color:#7f8fa6; position: absolute; bottom: 90px;"
              size="15px"
              @click="$router.push('/kustombaju')"
              rounded
              text-color="white"
              label="Kustom produk"
            />
            <q-btn
              border="2"
              style=" width:90%; position: absolute; bottom:40px; "
              size="15px"
              @click="redirect('http://bit.ly/simvon1sragen')"
              outline
              rounded
              text-color="primary"
              label="Beli lewat web "
            />

            <q-btn
              @click="$router.push('/tentang')"
              style="width:90%; position: absolute; bottom: 10px;"
              flat
              size="10px"
              color="primary"
              label="Tentang kami"
            />
          </div>
        </center>
      </q-page>
    </transition>
  </div>
</template>

<script>
import axios from "Axios";
export default {
  data() {
    return {
      judul: {},
      slide: "style",
      drawer: false,
      lorem: "INI GAMBAR BAJU YANG ADA"
    };
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.judul = response));
  },
  methods: {
    redirect(url) {
      window.location = url;
    }
  }
};
</script>
<style>
.bg-image {
  background-image: url("~assets/bgbatik.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
