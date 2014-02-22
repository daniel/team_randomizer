Persons = new Meteor.Collection("persons");
Teams = new Meteor.Collection("teams");

if (Meteor.isClient) {
  Template.persons.persons = function () {
    return Persons.find({});
  };

  Template.results.teams = function () {
    return Teams.find({});
  };

  Template.main.events({
    'click #add_name' : function () {
      name = $('#name').val();
      console.log(name);
      Persons.insert({name: name});
    },

    'click #randomize' : function () {
      var person1 = Persons.findOne();
      Persons.remove({_id: person1._id});

      var count = Persons.find().count();
      random_number = Math.floor((Math.random()*count+1))-1;
      var person2 = Persons.find().fetch()[random_number];
      Persons.remove({_id: person2._id});

      Teams.insert({name1: person1.name, name2: person2.name});
    }

  });
}