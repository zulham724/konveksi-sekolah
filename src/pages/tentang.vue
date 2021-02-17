<template>
  <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutLeft"
    appear
    :duration="700"
  >
    <q-page class>
      <q-header class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              v-go-back="'/'"
              unelevated
              rounded
              color="primary"
              class="bg-transparent"
            >
              <div class="row items-center">
                <span
                  class="material-icons"
                  style="color:white; font-size:30px;"
                >
                  arrow_back
                </span>
              </div>
            </q-btn>
            Tentang kami
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-card
          class="my-card full-height"
          style="height: 100%; margin-top: 10px; margin-buttom:10px; margin-left:10px; margin-right:10px; border-radius:20px; "
          shadow-box
        >
          <div
            v-for="infotentang in infotentang.data"
            v-bind:key="infotentang.id"
          >
            <div v-if="infotentang.key === 'site.imgtentang'">
              <img
                :src="
                  'http://phpstack-537239-1742382.cloudwaysapps.com/storage/' +
                    infotentang.value
                "
                style="width:100%; height:100%; border-top-left-radius:20px; border-top-right-radius:20px;"
              />
            </div>
          </div>
          <q-card-section>
            <div
              v-for="infotentang in infotentang.data"
              v-bind:key="infotentang.id"
            >
              <div v-if="infotentang.key === 'site.titletentang'">
                <div class="text-h5">
                  {{ infotentang.value }}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div
              v-for="infotentang in infotentang.data"
              v-bind:key="infotentang.id"
            >
              <div v-if="infotentang.key === 'site.konten_tentang'">
                {{ infotentang.value }}<br />
              </div>
            </div>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              rounded
              color="primary"
              label="Hubungi kami "
              @click="icon = true"
              size="15px;"
              style="margin:10px; border-radius : 20px; margin-left:10px; margin-rigth:10px; width: 93%;"
            />
            <q-btn
              outline
              rounded
              color="primary"
              label="Panduan "
              @click="$router.push('/panduan')"
              size="15px;"
              style="margin:10px; border-radius : 20px; margin-left:10px; margin-rigth:10px; width: 93%;"
            />
          </div>
        </q-card>
      </q-page-container>
      <q-dialog v-model="icon">
        <q-card style="width:95%;">
          <q-card-section
            class="row items-center q-pb-none"
            style="width:100%;"
          >
            <div class="text-h6">Kontak</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <div class="kontak">
              <q-icon left size="2em" name="email" aria-label="asdas" />
              info@smkn1sragen.sch.id<br />
              <q-icon left size="2em" name="phone" />
              (0271) 891163<br />
              <q-icon left size="2em" name="web" />
              <q-btn
                @click="redirect('https://smkn1sragen.sch.id/')"
                flat
                size="12px"
                color="primary"
                label="smkn1sragen.sch.id"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="fixed">
        <q-card> </q-card>
      </q-dialog>
    </q-page>
  </transition>
</template>
<script>
import axios from "Axios";
export default {
  data() {
    return {
      icon: false,
      fixed: false,
      infotentang: {}
    };
  },
  mounted() {
    axios
      .get("http://phpstack-537239-1742382.cloudwaysapps.com/api/setting")
      .then(response => (this.infotentang = response));
  },
  methods: {
    redirect(url) {
      window.location = url;
    }
  }
};
</script>
