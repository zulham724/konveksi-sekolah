<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
    appear
    :duration="700"
  >
    <q-page>
      <q-header class="bg-transparent text-black">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              v-go-back="'/produkbaju'"
              unelevated
              rounded
              class="bg-transparent"
            >
              <div class="row items-center">
                <span
                  class="material-icons"
                  style="font-size:30px; margin-right:0px;"
                >
                  arrow_back
                </span>
              </div>
            </q-btn>
            Detail produk baju
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-card
          class="my-card"
          style="height: 100%; margin-top: 10px; margin-buttom:10px; margin-left:10px; margin-right:10px; border-radius:20px; "
          shadow-box
        >
          <img
            :src="
              'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                info.image
            "
          />
          <q-card-section>
            <div class="text-h6" style="color: #01a3a4;">
              Rp. {{ formatPrice(info.price) }}
            </div>
            <div class="text-subtitle2" style="font-weight:bold;">
              {{ info.name }}
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ info.category.name }}
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ info.description }}
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              flat
              class="bg-primary"
              size="15px;"
              style="margin:10px; border-radius : 20px; color:#ffff; margin-left:10px; margin-rigth:10px; width: 93%;"
              @click="open('bottom')"
              >Pesan</q-btn
            >
          </div>
        </q-card>
      </q-page-container>
      <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
        <div v-if="nomor.key === 'site.number_wa'">
          <q-dialog
            v-model="dialog"
            :position="position"
            width="100%"
            full-height
          >
            <q-card
              style="width: 100%; height:90%; border-top-left-radius: 30px; border-top-right-radius: 30px;"
            >
              <div>
                <div class="kartu">
                  <div
                    class="text-subtitle1"
                    style="margin-top:20px; margin:10px; font-weight: bold;"
                  >
                    Masukan Data pemesanan
                  </div>
                  <q-input
                    dense
                    rounded
                    outlined
                    v-model="nameorder"
                    type="text"
                    label="Nama Lengkap"
                    style="margin:10px;"
                    required
                  />
                  <q-input
                    type="number"
                    dense
                    rounded
                    outlined
                    v-model="qtyorder"
                    label="Jumlah pemesanan"
                    style="margin:10px;"
                    required
                  />
                  <q-select
                    dense
                    rounded
                    outlined
                    v-model="sizeorder"
                    :options="options"
                    label="Ukuran baju"
                    style="margin:10px;"
                    required
                  />
                  <q-input
                    dense
                    rounded
                    outlined
                    type="textarea"
                    v-model="addressorder"
                    label="Alamat"
                    style="margin:10px;"
                    required
                  />
                  <q-btn
                    flat
                    size="15px;"
                    class="bg-primary"
                    style="margin-buttom: 10px; border-radius : 20px; color:#ffff; margin:10px; width: 93%;"
                    @click="
                      redirect(
                        'https://wa.me/62' +
                          nomor.value +
                          '?text=PEMESANAN%20' +
                          info.name +
                          '%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0ANAMA%20PEMESAN%20%3A%20%20' +
                          nameorder +
                          '%0D%0AJUMLAH%20PEMESANAN%20%3A%20%20' +
                          qtyorder +
                          '%0D%0AUKURAN%20%3A%20%20' +
                          sizeorder +
                          '%20%0D%0AALAMAT%20%3A%20%20' +
                          addressorder +
                          '%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0A%0D%0A'
                      )
                    "
                    >pesan</q-btn
                  >
                </div>
              </div>
            </q-card>
          </q-dialog>
        </div>
      </div>
      <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
        <div v-if="nomor.key === 'site.number_wa'">
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
  </transition>
</template>

<script>
import axios from "Axios";
export default {
  props: ["id"],
  data() {
    return {
      nomor: null,
      nameorder: null,
      qtyorder: null,
      sizeorder: null,
      addressorder: null,
      nomorhp: null,
      info: {},
      dialog: false,
      position: "top",
      slide: "style",
      options: ["S", "M", "L", "XL", "XXL"],
      lorem: "NAMA PRODUK BAJU",
      right: false
    };
  },
  mounted() {
    axios
      .get(
        "http://phpstack-537239-1742382.cloudwaysapps.com/api/product/" +
          this.id
      )
      .then(response => {
        this.info = response.data;
        console.log(response);
      });
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting/")
      .then(response => (this.nomorhp = response));
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.nomor = response));
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    open(position) {
      this.position = position;
      this.dialog = true;
    },
    redirect(url) {
      window.location = url;
    }
  }
};
</script>
