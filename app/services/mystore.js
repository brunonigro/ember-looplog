import Ember from 'ember';
import Production from 'looplog/models/production';

export default Ember.Service.extend({
    production(start, end) {
        let data = Ember.$.getJSON(`/data/production.json?starts_at=${start}&end_at${end}`);
        return data.then((json) => {
            let records = [];
            json.forEach(function(item) {
                records.push( Production.create(item) );
            });
            this.set('data', records);
            return records;
        });
    },

    dimension(dimension_id) {
        return this.get('data').findBy('DimensionID', parseInt(dimension_id));
    }
});
