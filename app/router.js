import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("user", function() {});
  this.resource("map", function() {});
  this.resource("maps", function() {});
  this.resource("users", function() {});
});

export default Router;
