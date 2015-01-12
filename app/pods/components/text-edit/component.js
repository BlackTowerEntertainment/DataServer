import Ember from 'ember';

export default Ember.Component.extend({
    actions :
    {
        edit : function()
        {
            this.set("editing", true);
        },

        save : function()
        {
            this.set("editing", false);
            this.sendAction("action", this.get("id"), this.get("text"));
        }
    }
});
