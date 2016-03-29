// Account settings
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

// On the Client
Comments.ui.config({
    limit: 5,
    loadMoreCount: 10,
    template: 'bootstrap' // or ionic, semantic-ui
});

/////
// template helpers
/////

Template.nav.helpers({
    inputAttributes: function () {
        return { 'class': 'form-control', 'placeholder': 'Start searching...', 'name':"searchBox", 'id': "js-searchBox" };
    }
});

Template.sites_listing.helpers({
    websites: function () {

        if (Session.get("userFilter")) {// they set a filter!
            // return Websites.find({createdBy: Session.get("userFilter")}, {sort: {createdOn: -1, rating: -1}});
        }
        else {
            return Websites.find({}, {sort: {'votes.Up': -1}});
        }

    }
});

Template.sites_detailed.helpers({});

Template.search_results.helpers({});

Template.website_item.helpers({});

/////
// template events
/////

Template.nav.events({
    'click .js-show-website-form': function (event) {
        $('#website_form').modal('show');
    },
    'submit .navbar-form': function (event) {
        event.preventDefault();
        var query = $(event.target).find('[name=searchBox]').val();

        console.log(query);

        var searchQuery = cleanSearchString(query);

        console.log(searchQuery);

        // Session.set('searchQuery', searchQuery);
        if(searchQuery!=''){
            FlowRouter.go('/results/'+searchQuery);
        }

        return false;

    }
});

Template.website_item.events({
    "click .js-upvote": function (event) {
        var website_id = this._id;
        var keywords = this.keywords;
        console.log("Up voting website with id " + website_id);

        Websites.update({_id: website_id},
            {$inc: {'votes.Up': 1}});

        console.log(keywords);

        websiteIndex = WebsitesIndex.getComponentMethods().search(keywords, { limit: 1 });

        console.log(websiteIndex);

        $('#website_recommend').modal('show');

        // TODO: pass the search results to the recommend template
        // TODO: implements this method with detailed view
        // TODO: implements this methos with send commend button

        return false;
    },
    "click .js-downvote": function (event) {
        var website_id = this._id;
        console.log("Down voting website with id " + website_id);

        Websites.update({_id: website_id},
            {$inc: {'votes.Down': 1}});

        return false;
    }

    // TODO: make an animation for change the website position when his votes are greater than others
});

Template.add_form.events({
    "submit .js-save-website-form": function (event) {
        var title, description;

        var url = event.target.url.value;

        console.log("The url they entered is: " + url);

        extractMeta(url, function (err, res) {
            console.log(res);
            console.log(res.title);
            console.log(res.description);

            // TODO: Auto populate fields with the url extracted information

            if (event.target.title.value) {
                title = event.target.title.value;
            } else {
                title = res.title;
            }

            if (event.target.description.value) {
                description = event.target.description.value;
            } else {
                console.log('res.description: ', res.description);
                var textArea = document.createElement('textarea');
                textArea.innerHTML = res.description;
                description = textArea.value;
                console.log('Description: ', description);
            }

            var cleanKeywords = cleanString(title, description);
            var keywords = createKeywords(cleanKeywords);

            // If user logged in, insert website
            // put your website saving code in here!
            if (Meteor.user()) {
                Websites.insert({
                    title: title,
                    url: url,
                    description: description,
                    keywords: keywords,
                    votes:{
                        Up: 0,
                        Down: 0
                    },
                    createdOn: new Date(),
                    createdBy: Meteor.user()._id
                });
            }
        });

        $('#website_form').modal('hide');
        return false;

    }
});

Template.sites_detailed.events({
    "click .js-upvote": function (event) {
        var website_id = this._id;
        console.log("Up voting website with id " + website_id);

        Websites.update({_id: website_id},
            {$inc: {'votes.Up': 1}});


        return false;
    },
    "click .js-downvote": function (event) {
        var website_id = this._id;
        console.log("Down voting website with id " + website_id);

        Websites.update({_id: website_id},
            {$inc: {'votes.Down': 1}});

        return false;
    }
    // TODO: Vote don't change the votes numbers
});
