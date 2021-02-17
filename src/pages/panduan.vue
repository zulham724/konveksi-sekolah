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
            Panduan
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-card-section>
          <q-card
            class="my-card full-height"
            style="width: 95%; height: 100%; margin-top: 10px; margin-buttom:10px; margin-left:10px; margin-right:10px; border-radius:20px; "
            shadow-box
          >
            <q-list bordered class="rounded-borders" style="width:100%;">
              <div v-for="infotentang in infotentang.data" :key="infotentang">
                <div v-if="infotentang.id >= 41">
                  <q-expansion-item
                    style="font-weight:bold;"
                    expand-separator
                    :label="infotentang.display_name"
                  >
                    <q-card>
                      <q-card-section
                        style="font-weight:normal;"
                        v-html="infotentang.value"
                      />
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </q-list>
          </q-card>
        </q-card-section>
      </q-page-container>
    </q-page>
  </transition>
</template>
<script>
import axios from "axios";
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
