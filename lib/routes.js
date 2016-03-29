/**
 * Created by salahaddin on 26/03/16.
 */

FlowRouter.route('/', {
    name: "home",
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            add_form: "add_form",
            recommend_site: 'recommend_site',
            main: "sites_listing",
            nav: "nav"
        });
    }
});

FlowRouter.route('/site/:_id', {
    name: "site detailed",
    // triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            add_form: "add_form",
            recommend_site: 'recommend_site',
            main: "sites_detailed",
            nav: "nav",
            site: Websites.findOne({_id:params._id})
        });
    }
});

FlowRouter.route('/results/:query', {
    name: 'search result',
    action: function(params, queryParams){
        BlazeLayout.render('masterLayout', {
            add_form: "add_form",
            recommend_site: 'recommend_site',
            main: 'search_results',
            nav: "nav"
        });
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('masterLayout', {
            add_form: "add_form",
            recommend_site: 'recommend_site',
            main: "pageNotFound",
            nav: "nav"
        });
    }
};