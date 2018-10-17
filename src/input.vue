<!--NOTE: Elke component heeft een template en een template mag maar 1 root element bevatten!!!
Dit kan elke element zijn  -->
<template>
  <div class="userInput">
    <select v-model="gewicht1" @change="onchange">
      <option :value="huishouden.waarde" v-for="huishouden in typeHuisHouden" >{{huishouden.huishouden}}</option>
    </select>

    <select v-model="gewicht2" @change="onchange">
      <option :value="diploma.waarde" v-for="diploma in actueleDiploma" >{{diploma.diploma}}</option>
    </select>

    <select v-model="gewicht3" @change="onchange">
      <option :value="diploma.waarde" v-for="diploma in diplomaVader" >{{diploma.diploma}}</option>
    </select>

    <select v-model="gewicht4" @change="onchange">
      <option :value="diploma.waarde" v-for="diploma in diplomaMoeder" >{{diploma.diploma}}</option>
    </select>
    {{gewicht1}}
    {{gewicht2}}
    {{gewicht3}}
    {{gewicht4}}
    {{risico}}
    {{testen}}

    <h1 @click="testChange">{{testen}}</h1>
  </div>
</template>
<script>
export default {

  data () {
    return {
      testen: "hallo",
      risico: "",
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
    onchange(){
      this.risico = this.gewicht1 + this.gewicht2 + this.gewicht3 + this.gewicht4;
    },
    testChange(){
      this.$emit('changing', 'test')
    }
  }
}
</script>
