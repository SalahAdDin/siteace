/**
 * Created by salahaddin on 25/03/16.
 */

Websites = new Mongo.Collection("websites");


Websites.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Meteor.users.deny({
    update: function() {
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