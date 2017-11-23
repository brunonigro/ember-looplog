import Ember from 'ember';
import Route from '@ember/routing/route';
import Production from 'looplog/models/production';
import moment from 'moment';

const Promise = Ember.RSVP.Promise;

export default Route.extend({
    model(params) {
        // return {
        //   "ProductName": "Ponderosa",
        //   "DimensionName": "1\" X 4\" X 14'",
        //   "BoardsSum": 20,
        //   "BoardFeetSum": 10000
        // }
        // return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
        this.set('params', params);
        return new Promise(function(resolve) {
          setTimeout(function() {
            let data = Ember.$.getJSON(`/data/production.json?starts_at=${params.start}&ends_at=${params.end}`);
            data.then(function(data) {
              let records = [];
              data.forEach(function(item) {
                records.push( Production.create(item) );
              });
              resolve(records);
            })
          }, 400);
        });
    },
    setupController(controller, model) {
        this._super(controller, model);
        let params = this.get('params');
        controller.set('start', params.start);
        controller.set('end', params.end);
        controller.set('start_date', moment(new Date(params.start)).format('MM/DD/YYYY'));
        controller.set('end_date', moment(new Date(params.end)).format('MM/DD/YYYY'));
        controller.set('start_time', moment(new Date(params.start)).format('HH:mm'));
        controller.set('end_time', moment(new Date(params.end)).format('HH:mm'));
    },
    actions: {
        loadData(url) {
            this.transitionTo(url);
        }
    }
});
