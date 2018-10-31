<!--NOTE: Elke component heeft een template en een template mag maar 1 root element bevatten!!!
Dit kan elke element zijn  -->
<template>
<div class="main">
  <div class="navigation">

    <li :class="{activeTab : categorie == openTab}" v-for="categorie in categorien" v-on:click="sendColor" @click="colorChanging(categorie.color), testingIteration(categorie)" :style="{background: categorie.color}"> {{categorie.label}} </li>



  </div>
  <div class="userInput" :style="{border: currentBorder}">

    <select :style="{background: currentColor}" v-model="gewicht" @change="onchange(gewicht)" v-on:change="test">
      <option value="" disabled selected>Geslacht</option>
      <option :value="geslacht.waarde" v-for="geslacht in geslacht">{{geslacht.geslacht}}</option>
    </select>

    <select :style="{background: currentColor}" v-model="gewicht1" @change="onchange(gewicht1)" v-on:change="test">
      <option value="" disabled selected>Type huishouden</option>
      <!-- ## de de v-for word er geloopt door de array typehuishouden en word er een huishouden
      variabele aangemaakt zodat we dat kunnne gebruiken als een index cijfer(deze index cijfer
      kunnen we ook gaan laten weergeven) je kan de huishouden variabelen als de i variabelen
      zien in een for loop for(let i=0; i<10; i++)-->
      <!-- ## door de dubbele punt te gebruiken voor value word de letterlijke waarde van
      huishouden gebruikt-->
      <option :value="huishouden.waarde" v-for="huishouden in typeHuisHouden">{{huishouden.huishouden}}</option>
    </select>


    <select :style="{background: currentColor}" v-model="gewicht2" @change="onchange(gewicht2)" v-on:change="test">
      <option value="" disabled selected>Actuele diploma</option>
      <option :value="diploma.waarde" v-for="diploma in actueleDiploma">{{diploma.diploma}}</option>
    </select>

    <select :style="{background: currentColor}" v-model="gewicht3" @change="onchange(gewicht3)" v-on:change="test">
      <option value="" disabled selected>Dilpma van vader</option>
      <option :value="diploma.waarde" v-for="diploma in diplomaVader">{{diploma.diploma}}</option>
    </select>

    <select :style="{background: currentColor}" v-model="gewicht4" @change="onchange(gewicht4)" v-on:change="test">
      <option value="" disabled selected>Diploma van moeder</option>
      <option :value="diploma.waarde" v-for="diploma in diplomaMoeder">{{diploma.diploma}}</option>
    </select>

    <select :style="{background: currentColor}" v-model="gewicht4" @change="onchange(gewicht4)" v-on:change="test">
      <option :value="diploma.waarde" v-for="diploma in diplomaMoeder">{{diploma.diploma}}</option>
    </select>

    <select :style="{background: currentColor}" v-model="gewicht4" @change="onchange(gewicht4)" v-on:change="test">
      <option :value="diploma.waarde" v-for="diploma in diplomaMoeder">{{diploma.diploma}}</option>
    </select>


    <!-- {{gewicht1}}
    {{gewicht2}}
    {{gewicht3}}
    {{gewicht4}}
    {{risico}}
    {{testen}}

    <button type="button" name="button">Press to change title(TestElement)</button> -->
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      categorien: [{
        label: "Persoon",
        link: "test0",
        color: "#ff691f"
      },
      {
        label: "Onderwijs",
        link: "test1",
        color: "#E72A75"
      },
      {
        label: "Ouders",
        link: "test2",
        color: "#A6C71F"
      },
      {
        label: "Categorie",
        link: "test3",
        color: "#32BBE8"
      },
      {
        label: "Categorie",
        link: "test4",
        color: "#F8AB0C"
      }
    ],
    testen: "hallo",
    openTab: this.categorien,
    currentColor: "",
    currentBorder: "",
    risico: "",
    gewicht:"",
    gewicht1: "",
    gewicht2: "",
    gewicht3: "",
    gewicht4: "",
    changet: "test",
    geslacht: [{
      geslacht: "man",
      waarde: 0
    },
    {
      geslacht: "vrouw",
      waarde: -7.36863
    },
  ],
  typeHuisHouden: [{
    huishouden: "Onbekend",
    waarde: 0.80564
  },
  {
    huishouden: "Eenouderhuishouden",
    waarde: 0.49608
  },
  {
    huishouden: "Eenpersoonshuishouden",
    waarde: 0.49608
  },
  {
    huishouden: "Gehuwd zonder kinderen",
    waarde: 1.06108
  },
  {
    huishouden: "Institutioneel huidhouden",
    waarde: 1.92321
  },
  {
    huishouden: "Niet-gehuwd paar met kinderen",
    waarde: 0.32694
  },
  {
    huishouden: "Niet-gehuwd paar zonder kinderen",
    waarde: -14.15530
  },
  {
    huishouden: "Overig huishouden",
    waarde: 0.91365
  }
  ],
  actueleDiploma: [{
    diploma: "Acutuele onderwijs niveau Basisonderwijs",
    waarde: -2
  },
  {
    diploma: "Acutuele onderwijs geen data bekend",
    waarde: -2
  },
  {
    diploma: "Acutuele onderwijs niveau Vmbo-b/k, mbo 1 en mbo2",
    waarde: -2
  },
  {
    diploma: "Acutuele onderwijs niveau Basisonderwijs",
    waarde: -2
  },
  ],
  diplomaVader: [{
    diploma: "Hoogste behaalde diploma Geen onderwijsdata bekend",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vmbo-b/k, mbo 1 en mbo2",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vmbo-g/t, mbo 3 en mbo 4",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vwo en Wo-bachelor en Wo-master",
    waarde: 2
  },
  ],
  diplomaMoeder: [{
    diploma: "Hoogste behaalde diploma Geen onderwijsdata bekend",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vmbo-b/k, mbo 1 en mbo2",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vmbo-g/t, mbo 3 en mbo 4",
    waarde: 2
  },
  {
    diploma: "Hoogste behaalde diploma Vwo en Wo-bachelor en Wo-master",
    waarde: 2
  },
  ]
}
},
methods: {
  onchange(gewicht) {
    // console.log(this.openTab)
    const array = [this.gewicht, this.gewicht1, this.gewicht2, this.gewicht3, this.gewicht4];

    // reduce moet altijd een function gekoppeld hebben.
    // reduce telt alle waardes in een array bij elkaar op
    var sum = array.reduce(function(total, weight) {
      return total + Number(weight)
    }, 0)
    var calc = Number((1 / (1 + Math.exp(-1 * (-8.572219 + sum))) * 100).toFixed(2))
    this.risico = calc;
    localStorage.setItem("indicator", JSON.stringify(this.risico));
  },
  test: function() {
    // Hier word een event ge-emit
    // De eerste parameter is hoe je de event noemt
    // Tweede parameter is de data dat je wil meegeven
    this.$emit("changeOk", this.risico)
  },
  colorChanging: function(color) {
    this.currentColor = color;
    this.currentBorder = "5px solid " + color;
  },
  testingIteration(test) {
    // console.log(data());
    this.openTab = test;
  },
  sendColor: function() {
    this.$emit("sendingColor", this.currentColor)
  }
},
computed:{
  starting: function(){
    return this.categorien[0];
  }
}
}
</script>
<style media="screen">
div.navigation {
  height: 40px;
  display: flex;
}

li {
  transition: .2s all;
  border-radius: 10px 100px 0 0;
  width: 22%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -15px;
  color: white;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
}

li:first-child {
  margin-left: 0;
}

.activeTab {
  z-index: 2;
  width: 30%;
}

div.main {
  max-width: 700px;
  height: 700px;
  margin: 80px auto;
}

div.userInput {
  box-shadow: 10px 10px 24px -3px rgba(0, 0, 0, 0.32);
  border: #E72A75 5px solid;
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 90%;
  font-size: 18px;
  background: white;
}

div.userInput>div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.userInput>div>p {
  width: 20%;
  text-align: right;
  padding: 10px;
}

select {
  width: 80%;
  padding: 10px 7px;
  background: #E72A75;
  color: white;
}
</style>
