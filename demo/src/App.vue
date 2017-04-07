<template>
    <div class="columns">

        <!-- Arabic Input -->
        <div class="column">

            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Arabic Input
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <p class="control">
                                <input class="input arab" type="text" dir="rtl" v-model="arabicText">
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Rasm -->
        <div class="column">

            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Rasm
                    </p>
                </header>
                <div class="card-content">
                    <div class="content arab" dir="rtl">
                        {{ rasmText }}
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

    let rasmify = require('rasmify.js');
    export default {
        name: 'app',
        data () {
            return {
                arabicText : "الفَاتِحَة"
            }
        },
        computed : {
            rasmText() {

                if (!this.arabicText) {
                    return "Type something on the left"
                }

                return rasmify(this.arabicText);
            }
        }
    }
</script>
