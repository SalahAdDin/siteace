/**
 * Created by salahaddin on 25/03/16.
 */

Websites = new Mongo.Collection("websites");


Websites.allow({
    insert: function (userId, doc) {
        console.log("Testing security  insert");
        return (Meteor.user())
    },
    update: function (userId, doc) {
        console.log("Testing security update");
        return (Meteor.user());
    },
    remove: function (userId, doc) {
        console.log("Testing security remove");
        return (Meteor.user());
    }
});

Meteor.users.deny({
    update: function () {
        return true;
    }
});

WebsitesIndex = new EasySearch.Index({
    collection: Websites,
    fields: ['title', 'description', 'createdBy', 'keywords'],
    engine: new EasySearch.Minimongo({
        sort: () => {
            return {'votes.Up': -1}
        }
    })
});
