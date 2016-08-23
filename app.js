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
var app = new Vue({
  el: "#app",
  data: {
    items: [],
    parent: parent 
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
  },
  methods: {
    addItem: function(){
      this.items.push({
        style: {
          flex: 1
        }
      })
    },
    delItem: function(item){
      this.items.$remove(item);
    },
    update: function(key, value){
      this.parent[key].value = value;
    }
  }
});

