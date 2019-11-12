import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#619952',
        secondary: '#D7BC2F',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
});
