if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllTeams: function() {
        return Teams.remove({});
      }
    });
  });
}