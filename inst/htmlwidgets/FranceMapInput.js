jQuery(function($) {
  var FranceMapInputBinding = new Shiny.InputBinding();
  $.extend(FranceMapInputBinding, {
    find: function(scope) {
      return $(scope).find('#FranceMapformcontrol1234567');
    },
    getId: function(el) {
      return Shiny.InputBinding.prototype.getId.call(this, el) || el.name;
    },
    getValue: function(el) {
      return el.value;
    },
    setValue: function(el, value) {
      el.value = value;
    },
    subscribe: function(el, callback) {

      $(el).on('change.FranceMapInputBinding', function(event) {
        callback();
      });
    },
    unsubscribe: function(el) {
      $(el).off('#FranceMapformcontrol1234567');
    },
    getRatePolicy: function() {
      return {
        policy: 'debounce',
        delay: 250
      };
    }
  });
  Shiny.inputBindings.register(FranceMapInputBinding, 'shiny.FranceMapInput');
})