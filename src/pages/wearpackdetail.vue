<template>
<transition
  enter-active-class="animated fadeInUp"
  leave-active-class="animated fadeOutLeft"
  appear
  :duration="700"
>
  <q-page>
    <q-header  class="bg-transparent text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn v-go-back="'/kustombaju/kustomjahit'" unelevated rounded color="primary" class="bg-transparent">
            <div class="row items-center">
              <span class="material-icons" style="color:black; width:auto; font-size:30px; margin-left:10px;" >
              arrow_back
              </span>
            </div>
          </q-btn>
          Wearpack Kustom 
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <q-card
        class="my-card full-height"
        style="height: 100%; margin-top: 10px; margin-buttom:10px; margin-left:10px; margin-right:10px; border-radius:20px; "
        shadow-box   
      >
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-section>
          <div class="text-h4">
            Wearpack kustom
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Kami siap memberikan Wearpack dengan bahan:<br>
          > kain Drill<br>
          > kain Twill<br>
          > kain Taipan Tropical<br>
          > kain Kanvas<br>
          > kain Raphael<br>
        </q-card-section>
        <q-card-section class="q-pt-none">
          *Pembayaran tergantung model dan bahan 
        </q-card-section>
        <div class="row justify-center">
          <q-btn
            flat
            size="15px;"
            style="margin:10px; border-radius : 20px; background-color: #2ecc71; color:#ffff; margin-left:10px; margin-rigth:10px; width: 93%;"
          
            >Pesan</q-btn
          >
        </div>
      </q-card>
    </q-page-container>
  </q-page>
</transition>
</template>

<script>
export default {
data() {
    return {
      nameorder:null,
      qtyorder:null,
      sizeorder: null,
      addressorder:null, 
      info: {},
      dialog: false,
      position: "top",
      slide: "style",
      options: ["S", "M", "L", "XL", "XXL"],
      lorem: "NAMA PRODUK BAJU",
      right: false
    };
}
}
</script>
