/**
 * Created by suchmaske on 06.04.17.
 */

require("bulma");
require("./main.scss");
require("./fonts/coranica_1145.eot");
require("./fonts/coranica_1145.ttf");
require("./fonts/coranica_1145.woff");
require("./fonts/coranica_1145.woff2");

import Vue from 'vue';
import App from './App.vue';

new Vue({

    el : "#vue-root",
    render : h => h(App)
});
