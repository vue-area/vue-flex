var app = new Vue({
  el: "#app",
  data: {
    items: 2,
    parent: {
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
    }
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
  methods: {
    update: function(key, value){
      this.parent[key].value = value;
    }
  }
});

