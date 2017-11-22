import Ember from 'ember';
import Route from '@ember/routing/route';
const Promise = Ember.RSVP.Promise;


export default Route.extend({
    model(params) {
        //return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
        return new Promise(function(resolve) {
            setTimeout(function() {
                let data = Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
                resolve(data);
            }, 3000);
        });
    }
});
