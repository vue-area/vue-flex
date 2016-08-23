var parent = {
  flexDirection: {
    value: "row",
    properties : ["row", "row-reverse", "column", "column-reverse"]
  },
  flexWrap: {
    value: "nowrap",
    properties: ["nowrap", "wrap", "wrap-reverse"]
  },
  justifyContent: {
    value: "flex-start",
    properties: ["flex-start", "flex-end", "center", "space-between", "space-around"]
  },
  alignItems: {
    value: "stretch",
    properties: ["stretch", "flex-start", "flex-end", "center", "baseline"]
  },
  alignContent: {
    value: "stretch",
    properties: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around"]
  }
};
var son = {
  "width": {
    value: 'auto',
    properties: ['auto', '50px', '100px', '150px']
  },
  'flex-grow': {
    value: 0,
    properties : [0, 1, 2, 3]
  },
  'flex-shrink': {
    value: 0,
    properties : [0, 1, 2, 3]
  },
  'flex-basis': {
    value: "auto",
    properties: ["auto", "100px", "200px", "300px", "400px"]
  },
  'align-self': {
    value: "auto",
    properties: ["auto", "stretch", "flex-start", "flex-end", "center", "baseline"]
  }
};
Vue.config.debug = true;
var app = new Vue({
  el: "#app",
  data: {
    items: [],
    parent: parent,
    son: son
  },
  computed: {
    containerStyle: function (params) {
      return {
        flexDirection: this.parent.flexDirection.value,
        flexWrap: this.parent.flexWrap.value,
        justifyContent: this.parent.justifyContent.value,
        alignItems: this.parent.alignItems.value,
        alignContent: this.parent.alignContent.value
      }
    }
  },
  created: function(){
    this.addItem();
    this.addItem();
    this.addItem();
  },
  methods: {
    addItem: function(){
      this.items.push({
        style: {
          'order': 0,
          'flex-grow': 0,
          'flex-shrink': 1,
          'flex-basis': 'auto',
          'align-self':'auto',
          'height': 'auto',
          'width': 'auto'
        }
      })
    },
    delItem: function(item){
      this.items.$remove(item);
    },
    update: function(key, value){
      this.parent[key].value = value;
    },
    updateSon: function(key, value){
      debugger;
      this.items = this.items.map(function(item){
        item.style[key] = value;
        return item;
      });
      debugger;
    }
  }
});

