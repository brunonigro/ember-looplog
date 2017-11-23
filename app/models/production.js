import Ember from 'ember';

export default Ember.Object.extend({
    boards: Ember.computed('BoardsSum', function() {
        return this.get('BoardsSum');
    }),
    boardfeet: Ember.computed.alias('BoardFeetSum'),
    volume: Ember.computed('NominalLength', 'NominalWidth', 'NominalThickness', function() {
        return this.get('NominalLength') * 12 * this.get('NominalWidth') * this.get('NominalThickness');
    })
});