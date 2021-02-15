<template>
  <div class="bg-image">
    <transition
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutRight"
      appear
      :duration="700"
    >
      <q-page class="bg-transparent">
        <div class="row full-height justify-center">
          <div
            class="text-h7 text-primary"
            style="font-weight: bold; margin-top: 50px;"
          >
            APLIKASI PEMESANAN BAJU
          </div>
          <q-img
            style="width:80px; 
            position: absolute; 
            bottom: 340px;"
            src="~assets/logo.jpg"
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
            style="width:90%; position: absolute; bottom: 90px;"
            size="15px"
            @click="$router.push('/kustombaju')"
            outline
            rounded
            color="primary"
            label="Kustom produk"
          />
          <q-btn
            @click="$router.push('/tentang')"
            style="width:90%; position: absolute; bottom: 60px;"
            flat
            size="10px"
            color="primary"
            label="Tentang kami"
          />
        </div>
      </q-page>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: "style",
      drawer: false,
      lorem: "INI GAMBAR BAJU YANG ADA"
    };
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
