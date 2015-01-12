import Ember from 'ember';

function failure(reason)
{
    console.error(reason);
}

export default Ember.Controller.extend({
  actions : {
      save : function(id, text)
      {
          console.log("[",id,"]:", text);
          var mapPromise = this.store.find("map",id);
          mapPromise.then(
              function(map)
              {
                  console.log(map.get("name"));
                  map.set("name", text);
                  map.save();
              }
          ).catch(failure);
      }
  }
});
