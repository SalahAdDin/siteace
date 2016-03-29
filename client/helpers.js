/**
 * Created by salahaddin on 29/03/16.
 */

Template.registerHelper('momentFormat', function (time) {
    if ((moment().unix() - moment(time).unix()) < 3600) {
        return moment(time).fromNow();
    } else {
        return moment(time).format("DD MMMM YYYY");
    }
});

Template.registerHelper('websiteIndex', () => WebsitesIndex);
// if (typeof WebsitesIndex !== 'undefined' && WebsitesIndex != null) return WebsitesIndex;
