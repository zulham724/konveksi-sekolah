<template>
  <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutLeft"
    appear
    :duration="700"
  >
    <q-page>
      <q-header class="bg-transparent text-black">
        <q-toolbar>
          <q-btn
            style="width:10%; margin-right:5px;"
            v-go-back="'/kustombaju/kustomjahit'"
            flat
            icon="arrow_back"
            color="black"
            class="bg-transparent"
            size="30px;"
          />
          <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
            <div v-if="nomor.key === 'site.titlemancustom'">
              <q-toolbar-title class="text-h6"
                >{{ nomor.value }}
              </q-toolbar-title>
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-card
          class="my-card full-height"
          style="height: 100%; margin-top: 10px; margin-buttom:10px; margin-left:10px; margin-right:10px; border-radius:20px; "
          shadow-box
        >
          <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
            <div v-if="nomor.key === 'site.bajukustomman'">
              <img
                :src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    nomor.value
                "
                style="width:100%; border-top-left-radius:20px; border-top-right-radius:20px;"
              />
            </div>
          </div>
          <q-card-section>
            <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
              <div v-if="nomor.key === 'site.titlemancustom'">
                <div class="text-h6" style="margin-buttom: 5px;">
                  {{ nomor.value }}
                </div>
              </div>
              <div v-if="nomor.key === 'site.contentmancustom'">
                <q-input
                  input-style="margin-top:0px;"
                  :value="nomor.value"
                  filled
                  readonly
                  autogrow
                  type="textarea"
                  bg-color="white"
                />
              </div>
            </div>
          </q-card-section>

          <div class="row justify-center">
            <q-btn
              class="bg-primary"
              flat
              size="15px;"
              style="margin:10px; border-radius : 20px; background-color: #2ecc71; color:#ffff; margin-left:10px; margin-rigth:10px; width: 93%;"
              @click="open('bottom')"
              >Pesan</q-btn
            >
          </div>
        </q-card>
      </q-page-container>

      <q-dialog v-model="dialog" :position="position" width="100%;">
        <q-stepper
          v-model="step"
          vertical
          color="primary"
          animated
          style="border-top-left-radius: 30px; border-top-right-radius: 30px;"
        >
          <div class="text-h7" style="margin:10px; font-weight: bold;">
            Masukan data pemesanan
          </div>
          <q-step
            :name="1"
            title="Pilih pemesanan"
            icon="settings"
            :done="step > 1"
          >
            <q-input
              dense
              rounded
              outlined
              type="number"
              v-model="jumlahpemesanan"
              label="Jumlah pemesanan"
              style="margin-top:10px; width:100%;"
            />
            <q-select
              dense
              rounded
              outlined
              v-model="jenisbahan"
              :options="optionjenis"
              label="Jenis bahan"
              style="margin-top:10px; width:100%;"
            />
            <q-select
              dense
              rounded
              outlined
              v-model="jenismodel"
              :options="optionmodel"
              label="Jenis model"
              style="margin-top:10px; width:100%;"
            />
            <q-select
              dense
              rounded
              outlined
              v-model="jenisbaju"
              :options="optionjenisbaju"
              label="Seragam"
              style="margin-top:10px; width:100%;"
            />
            <q-input
              dense
              rounded
              outlined
              type="textarea"
              v-model="keteranganpemesanan"
              label="Keterangan pemesanan"
              style="margin-top:10px; height:80px; width:100%;"
            />
            <q-stepper-navigation>
              <q-btn rounded @click="step = 2" color="primary" label="Lanjut" />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Identitas pemesan"
            icon="edit"
            :done="step > 2"
          >
            <q-input
              dense
              rounded
              outlined
              v-model="namapemesan"
              label="Nama lengkap"
              style="margin-top:10px; width:100%;"
            />
            <q-select
              dense
              rounded
              outlined
              v-model="jurusan"
              :options="optionjurusan"
              label="Jurusan"
              style="margin-top:10px; width:100%;"
            />
            <q-input
              dense
              rounded
              outlined
              type="textarea"
              v-model="alamatpemesanan"
              label="Alamat"
              style="margin-top:10px; height:80px;"
            />
            <q-stepper-navigation>
              <div v-for="nomor in nomor.data" v-bind:key="nomor.id">
                <div v-if="nomor.key === 'site.number_wa'">
                  <q-btn
                    rounded
                    @click="
                      redirect(
                        'https://wa.me/62' +
                          nomor.value +
                          '?text=PEMESANAN%20BAJU%20LAKI-LAKI%20KUSTOM%20%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20%0D%0ANAMA%20PEMESAN%20%20%3A%20%20' +
                          namapemesan +
                          '%20%0D%0AJUMLAH%20PEMESANAN%20%20%3A%20%20' +
                          jumlahpemesanan +
                          '%20%0D%0AJENIS%20BAHAN%20%20%3A%20%20' +
                          jenisbahan +
                          '%20%0D%0AJENIS%20MODEL%20%20%3A%20%20' +
                          jenismodel +
                          '%20%0D%0ASERAGAM%20%20%3A%20%20' +
                          jenisbaju +
                          '%20%0D%0AJURUSAN%20%20%3A%20%20' +
                          jurusan +
                          '%20%0D%0AALAMAT%20%20%3A%20%20' +
                          alamatpemesanan +
                          '%20%0D%0AKETERANGAN%20%20%3A%20%20' +
                          keteranganpemesanan +
                          '%20%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D'
                      )
                    "
                    color="primary"
                    label="Selesai"
                  />
                  <q-btn
                    rounded
                    flat
                    @click="step = 1"
                    color="primary"
                    label="Kembali"
                    class="q-ml-sm"
                  />
                </div>
              </div>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </q-dialog>
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
  data() {
    return {
      step: 1,
      nomor: {},
      namapemesan: null,
      jenisbahan: null,
      jumlahpemesanan: null,
      jurusan: null,
      jenismodel: null,
      jenisbaju: null,
      keteranganpemesanan: null,
      alamatpemesanan: null,
      dialog: false,
      position: top,
      right: false,
      optionjenis: ["Katun", "Oxford", "teteron cotton"],
      optionmodel: ["Kemeja lengan pendek", "Kemeja lengan panjang "],
      optionjenisbaju: ["Osis", "Batik", "Pramuka", "Wearpack"],
      optionjurusan: ["TKJ", "TB", "OTKP", "AKL", "BDP", "MM"]
    };
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.nomor = response));
  },
  methods: {
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
