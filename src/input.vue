<!--NOTE: Elke component heeft een template en een template mag maar 1 root element bevatten!!!
Dit kan elke element zijn  -->
<template>
  <div class="userInput">
    <select v-model="gewicht1" @change="onchange(gewicht1)" v-on:change="test">
      <option :value="huishouden.waarde" v-for="huishouden in typeHuisHouden" >{{huishouden.huishouden}}</option>
    </select>

    <select v-model="gewicht2" @change="onchange(gewicht2)"
    v-on:change="test">
      <option :value="diploma.waarde" v-for="diploma in actueleDiploma" >{{diploma.diploma}}</option>
    </select>

    <select v-model="gewicht3" @change="onchange(gewicht3)" v-on:change="test">
      <option :value="diploma.waarde" v-for="diploma in diplomaVader" >{{diploma.diploma}}</option>
    </select>

    <select v-model="gewicht4" @change="onchange(gewicht4)" v-on:change="test">
      <option :value="diploma.waarde" v-for="diploma in diplomaMoeder" >{{diploma.diploma}}</option>
    </select>
    {{gewicht1}}
    {{gewicht2}}
    {{gewicht3}}
    {{gewicht4}}
    {{risico}}
    {{testen}}

    <button type="button" name="button">Press to change title(TestElement)</button>
  </div>
</template>
<script>
const random = Math.random()*2;

export default {
  data () {
    return {
      testen: "hallo",
      risico: 0,
      gewicht1:"",
      gewicht2: "",
      gewicht3: "",
      gewicht4: "",
      changet: "test",
      typeHuisHouden: [
      {huishouden: "Onbekend", waarde: 2},
      {huishouden: "Eenouderhuishouden", waarde: 3},
      {huishouden: "Eenpersoonshuishouden", waarde: 4},
      {huishouden: "Gehuwd zonder kinderen", waarde: 5},
      {huishouden: "Institutioneel huidhouden", waarde: 6},
      {huishouden: "Niet-gehuwd paar met kinderen", waarde: 4},
      {huishouden: "Niet-gehuwd paar zonder kinderen", waarde: 5},
      {huishouden: "Overig huishouden", waarde: 7}
    ],
    actueleDiploma:[
      {diploma: "Acutuele onderwijs niveau Basisonderwijs", waarde: -2},
      {diploma: "Acutuele onderwijs geen data bekend", waarde: -2},
      {diploma: "Acutuele onderwijs niveau Vmbo-b/k, mbo 1 en mbo2", waarde: -2},
      {diploma: "Acutuele onderwijs niveau Basisonderwijs", waarde: -2},
    ],
    diplomaVader: [
      {diploma: "Hoogste behaalde diploma Geen onderwijsdata bekend", waarde:2},
      {diploma: "Hoogste behaalde diploma Vmbo-b/k, mbo 1 en mbo2", waarde:2},
      {diploma: "Hoogste behaalde diploma Vmbo-g/t, mbo 3 en mbo 4", waarde:2},
      {diploma: "Hoogste behaalde diploma Vwo en Wo-bachelor en Wo-master", waarde:2},
    ],
    diplomaMoeder: [
      {diploma: "Hoogste behaalde diploma Geen onderwijsdata bekend", waarde:2},
      {diploma: "Hoogste behaalde diploma Vmbo-b/k, mbo 1 en mbo2", waarde:2},
      {diploma: "Hoogste behaalde diploma Vmbo-g/t, mbo 3 en mbo 4", waarde:2},
      {diploma: "Hoogste behaalde diploma Vwo en Wo-bachelor en Wo-master", waarde:2},
    ]
    }
  },
  methods:{
    onchange(gewicht){
      this.risico = this.risico + gewicht;
      // const array  = [this.gewicht1, this.gewicht2, this.gewicht3, this.gewicht4];
      // for (var i = 0; i < array.length; i++) {
      //   this.risico= this.risico+array[i]
      // }
      console.log(array);
      // this.risico = this.gewicht1 + this.gewicht2 + this.gewicht3 + this.gewicht4;
      console.log(this.risico)
    },
    test: function(){
      // Hier word een event ge-emit
      // De eerste parameter is hoe je de event noemt
      // Tweede parameter is de data dat je wil meegeven
      this.$emit("changeOk", this.risico)
    }
  }
}
</script>
