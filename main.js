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
    changeInput: function (e) {
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
    increase: function (double, event) {
      this.counter += double;
    },
    updateCoordinates: function (e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function () {
      alert('Alert!');
    }
  }
})

// Two-way binding

new Vue({
  el: '#app2',
  data: {
    name: 'Peter'
  }
});

// Reacting to changes with computed propertes

new Vue({
  el: '#app3',
  data: {
    counter: 0,
    secondCounter: 0
  },

  computed: {
    output: function () {
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  },

  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
        },  2000);
    }
  },

  methods: {
    result: function () {
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
});

// Shortcuts

new Vue ({
  el: 'app4',
  data: {
    link: 'http://google.com'
  },

  methods: {
    changeLink: function() {
      this.link = 'http://apple.com'
    }
  }

});