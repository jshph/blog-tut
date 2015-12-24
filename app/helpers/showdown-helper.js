import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  var SD = new showdown.Converter();
  return new Ember.Handlebars.SafeString(SD.makeHtml(markdown));
});
