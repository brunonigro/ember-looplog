import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table'],
  sort_by: "default",
  sorted_model: Ember.computed('model', 'sort_by', function() {
    switch(this.get('sort_by')) {
      case "boards":
        return this.get('model').sortBy('boards', 'DimensionName').reverse();
      case "boardfeet":
        return this.get('model').sortBy('boardfeet', 'DimensionName').reverse();
      default:
        return this.get('model');
    }
  }),
  boards: Ember.computed.mapBy('model', 'boards'),
  total_boards: Ember.computed.sum('boards'),
  max_boards: Ember.computed.max('boards'),
  boardfeets: Ember.computed.mapBy('model', 'boardfeet'),
  total_boardfeet: Ember.computed.sum('boardfeets'),
  max_boardfeet: Ember.computed.max('boardfeets'),
  actions: {
    sort_data(column) {
      this.set('sort_by', column);
    }
  }
});
