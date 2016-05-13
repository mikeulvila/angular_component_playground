angular
  .module('Todo', [])
  .controller('CountCtrl', function CountCtrl() {
    this.count = 4;
  })
  .component('counter', {

    bindings: {
      count: '='
    },
    controller: function () {
      function increment() {
        this.count++;
      }
      function decrement() {
        this.count--;
      }
      this.increment = increment;
      this.decrement = decrement;
    },
    template: [
      '<div class="todo">',
        '<input type="text" ng-model="$ctrl.count">',
        '<button type="button" ng-click="$ctrl.decrement();">-</button>',
        '<button type="button" ng-click="$ctrl.increment();">+</button>',
      '</div>'
    ].join('')

    // The template property can be defined as a function that is now injected with
    // $element and $attrs locals. If the template property is a function then it
    // needs to return an String representing the HTML to compile:

      // template: function ($element, $attrs) {
      //   // access to $element and $attrs
      //   return [
      //     '<div class="todo">',
      //       '<input type="text" ng-model="$ctrl.count">',
      //       '<button type="button" ng-click="$ctrl.decrement();">-</button>',
      //       '<button type="button" ng-click="$ctrl.increment();">+</button>',
      //     '</div>'
      //   ].join('')
      // }
  });
