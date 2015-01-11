import Ember from 'ember';

export default Ember.Component.extend({
    size: 200,
    email: '',
    gravatarUrl: function()
    {
      var email = this.get('email');
      var size = this.get('size');
      return 'http://www.gravatar.com/avatar/' + window.md5(email) + "?s=" + size;
    }.property("size", "email"),
    tagName: "span"
});
