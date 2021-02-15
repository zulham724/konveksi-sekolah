<template>
  <q-page>
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn v-go-back="'/'" unelevated rounded color="primary">
            <div class="row items-center">
              <span class="material-icons" style="font-size:30px;">
                arrow_back
              </span>
            </div>
          </q-btn>
          Kustom Produk
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
            style=" background-size: cover; width:100%; height:100%; border-radius:20px;"
          />
        </q-carousel-slide>
      </q-carousel>
    </q-page-container>

    <transition enter-active-class="animated fadeInDown" appear :duration="700">
      <div class="row justify-center">
        <div style=" width:95%; height: autos; margin-top:5px;">
          <div v-for="fotomenu in fotomenu.data" v-bind:key="fotomenu.id">
            <div v-if="fotomenu.key === 'site.imgjahitkustom'">
              <q-img
                :src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    fotomenu.value
                "
                style="border-top-left-radius:30px; border-top-right-radius:30px; height:150px; "
              >
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white"></div>
                </template>
                <q-btn
                  flat
                  style="width: 100%; height:100%;"
                  @click="$router.push('/kustombaju/kustomjahit')"
                >
                  <div class="descjahit">
                    JAHIT KUSTOM
                  </div>
                </q-btn>
              </q-img>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="row justify-center"
      style="  height:auto; width: 100%; margin-top:10px; "
    >
      <transition
        enter-active-class="animated fadeInLeft"
        appear
        :duration="700"
      >
        <div class="col-4" style="margin-right: 5px; ">
          <div v-for="fotomenu in fotomenu.data" v-bind:key="fotomenu.id">
            <div v-if="fotomenu.key === 'site.imgbordirkustom'">
              <q-img
                :src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    fotomenu.value
                "
                style=" background-size : cover; width: 100%; height:150px; border-bottom-left-radius:30px "
              >
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white"></div>
                </template>
                <q-btn
                  flat
                  style=" width: 100%; height:100%;"
                  @click="open('bottom')"
                >
                  <div class="descbordir">
                    BORDIR KUSTOM
                  </div>
                </q-btn>
              </q-img>
            </div>
          </div>
        </div>
      </transition>
      <q-dialog v-model="dialog" :position="position" width="100%;">
        <q-card
          style="width: 100%; height:90%; border-radius:30px 30px 0px 0px"
        >
          <div class="kartu" style="width:100%;">
            <div class="text-h6" style="margin:10px; font-weight: bold;">
              Masukan data pemesanan
            </div>
            <q-input
              dense
              rounded
              outlined
              v-model="namapemesan"
              label="Nama lengkap"
              style="margin:10px;"
            />
            <q-input
              dense
              rounded
              outlined
              v-model="jumlahpemesanan"
              label="Jumlah pemesanan"
              style="margin:10px;"
            />
            <q-select
              dense
              rounded
              outlined
              v-model="jenisbordir"
              :options="options"
              label="Jenis bordir"
              style="margin:10px;"
            />
            <q-input
              dense
              rounded
              outlined
              type="textarea"
              v-model="alamatpemesanan"
              label="Alamat"
              style="margin:10px; height:80px;"
            />
            <q-input
              dense
              rounded
              outlined
              type="textarea"
              v-model="keteranganpemesanan"
              label="Keterangan"
              style="margin:10px; height:80px;"
            />
            <div v-for="fotomenu in fotomenu.data" v-bind:key="fotomenu.id">
              <div v-if="fotomenu.key === 'site.number_wa'">
                <q-btn
                  flat
                  size="15px;"
                  style=" border-radius : 20px; background-color: #34495e; color:#ffff; margin:10px; width: 93%;"
                  @click="
                    redirect(
                      'https://wa.me/62' +
                        fotomenu.value +
                        '?text=PEMESANAN%20%20BORDIR%20' +
                        jenisbordir +
                        '%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0ANAMA%20PEMESAN%20%20%3A%20%20' +
                        namapemesan +
                        '%20%0D%0AJUMLAH%20PEMESANAN%20%20%3A%20%20' +
                        jumlahpemesanan +
                        '%0D%0AJENIS%20BORDIR%20%20%3A%20%20' +
                        jenisbordir +
                        '%0D%0AALAMAT%20%20%3A%20%20' +
                        alamatpemesanan +
                        '%0D%0AKETERANGAN%20%20%3A%20%20' +
                        keteranganpemesanan +
                        '%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0A%0D%0A'
                    )
                  "
                  >Pesan</q-btn
                >
              </div>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <transition
        enter-active-class="animated fadeInRight"
        appear
        :duration="700"
      >
        <div class="col-7" style=" height:auto; margin-left: 5px;">
          <div v-for="fotomenu in fotomenu.data" v-bind:key="fotomenu.id">
            <div v-if="fotomenu.key === 'site.imgsablonkustom'">
              <q-img
                :src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    fotomenu.value
                "
                style="border-bottom-right-radius:30px; width: 100%; height:150px; "
              >
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white"></div>
                </template>
                <q-btn
                  style="width: 100%; height:100%;"
                  @click="opensablon('bottom')"
                >
                  <div class="descsablon">
                    SABLON KUSTOM
                  </div>
                </q-btn>
              </q-img>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <q-dialog v-model="dialogsablon" :position="position" width="100%;">
      <q-card style="width: 100%; height:90%; border-radius:30px 30px 0px 0px">
        <div class="kartu" style="width:100%;">
          <div class="text-h6" style="margin:10px; font-weight: bold;">
            Masukan data pemesanan
          </div>
          <q-input
            dense
            rounded
            outlined
            v-model="namapemesan"
            label="Nama lengkap"
            :max-height="10"
            :min-height="7"
            style="margin:10px;"
          />
          <q-input
            dense
            rounded
            outlined
            type="number"
            v-model="jumlahpemesanan"
            label="Jumlah pemesanan"
            style="margin:10px;"
          />
          <q-select
            dense
            rounded
            outlined
            v-model="ukuransablon"
            :options="pilihsablon"
            label="Ukuran sablon"
            style="margin:10px;"
          />
          <q-select
            dense
            rounded
            outlined
            v-model="ukuranbaju"
            :options="optionbaju"
            label="Ukuran baju"
            style="margin:10px;"
          />
          <q-input
            dense
            rounded
            outlined
            type="textarea"
            v-model="alamatpemesanan"
            label="Alamat"
            style="margin:10px; height:80px;"
          />
          <q-input
            dense
            rounded
            outlined
            type="textarea"
            v-model="keteranganpemesanan"
            label="Keterangan"
            style="margin:10px; height:80px;"
          />
          <div v-for="fotomenu in fotomenu.data" v-bind:key="fotomenu.id">
            <div v-if="fotomenu.key === 'site.number_wa'">
              <q-btn
                flat
                size="15px;"
                style=" border-radius : 20px; background-color: #34495e; color:#ffff; margin:10px; width: 93%;"
                @click="
                  redirect(
                    'https://wa.me/62' +
                      fotomenu.value +
                      '?text=PEMESANAN%20SABLON%20%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20%0D%0ANAMA%20PEMESAN%20%20%3A%20%20' +
                      namapemesan +
                      '%20%0D%0AJUMLAH%20PEMESANAN%20%20%3A%20%20' +
                      jumlahpemesanan +
                      '%0D%0AUKURAN%20SABLON%20%20%3A%20%20' +
                      ukuransablon +
                      '%20%0D%0AUKURAN%20BAJU%20%20%3A%20%20' +
                      ukuranbaju +
                      '%20%0D%0AALAMAT%20%20%3A%20%20' +
                      alamatpemesanan +
                      '%20%0D%0AKETERANGAN%20%20%3A%20%20' +
                      keteranganpemesanan +
                      '%20%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20%0D%0A%0D%0A'
                  )
                "
                >Pesan</q-btn
              >
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import axios from "Axios";
export default {
  data() {
    return {
      fotomenu: {},
      imgslider: {},
      ukuranbaju: null,
      ukuransablon: null,
      namapemesan: null,
      jumlahpemesanan: null,
      jenisbordir: null,
      alamatpemesanan: null,
      keteranganpemesanan: null,
      dialogsablon: false,
      dialog: false,
      position: top,
      slide: 1,
      lorem: "INI GAMBAR BAJU YANG ADA",
      right: false,
      options: ["Nama", "Logo"],
      pilihsablon: ["A3", "A4", "A5"],
      optionbaju: ["S", "M", "L", "XL", "XXL"]
    };
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/slider")
      .then(response => (this.imgslider = response));
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.fotomenu = response));
  },
  methods: {
    open(position) {
      this.position = position;
      this.dialog = true;
    },
    opensablon(position) {
      this.position = position;
      this.dialogsablon = true;
    },
    redirect(url) {
      window.location = url;
    }
  }
};
</script>
<style>
/* .bg-jahit {
  background-image: url("~assets/jahit.jpg");
} */
/* .bg-sablon {
  background-image: url("~assets/sablon.jpg");
} */
/* .bg-bordir {
  background-image: url("~assets/bordir.jpg");
} */
div.descjahit {
  height: 20%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #000;
  color: #fff;
  opacity: 0.7;
  filter: alpha(opacity=10);
}
div.descsablon {
  height: 20%;
  text-align: center;
  border-bottom-right-radius: 30px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #000;
  color: #fff;
  opacity: 0.7;
  filter: alpha(opacity=10);
}
div.descbordir {
  height: 20%;
  text-align: center;
  border-bottom-left-radius: 30px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #000;
  color: #fff;
  opacity: 0.7;
  filter: alpha(opacity=10);
}
</style>
