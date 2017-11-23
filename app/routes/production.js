import Ember from 'ember';
import Route from '@ember/routing/route';
import Production from 'looplog/models/production';
const Promise = Ember.RSVP.Promise;


export default Route.extend({
    model(params) {
        //return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
        return new Promise(function(resolve) {
            setTimeout(function() {
                let data = Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
                data.then(function(data) {
                    let records = [];
                    data.forEach(function(item) {
                        records.push( Production.create(item) );
                    });
                    resolve(records);
                })
            }, 400);
        });
    }
});
