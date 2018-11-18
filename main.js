new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">GOOGLE</a>',
    counter: 0
  },

  methods: {
    sayHello: function () {
      this.title = 'Hola!';
      return this.title;
    }
  }
});

// Input field 
new Vue({
  el: '#field',
  data: {
    input: 'Type me'
  },

  methods: {
    changeInput: function(e) {
      this.input = e.target.value;
    }
  }
})

// Counter 
new Vue({
  el: '#counter',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },

  methods: {
    increase: function(double, event) {
      this.counter += double;
    },
    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function() {
      alert('Alert!');
    }
  }
})
