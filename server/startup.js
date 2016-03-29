/**
 * Created by salahaddin on 25/03/16.
 */

Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
        console.log("No websites yet. Creating starter data.");
        Websites.insert({
            title:"Goldsmiths Computing Department",
            url:"http://www.gold.ac.uk/computing/",
            description:"This is where this course was developed.",
            keywords: ['goldsmiths', 'computing', 'department', 'course', 'developed'],
            votes:{
                Up: 0,
                Down: 0
            },
            createdOn:new Date()
        });
        Websites.insert({
            title:"University of London",
            url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
            description:"University of London International Programme.",
            keywords: ['university', 'london', 'International', 'Programme'],
            votes:{
                Up: 0,
                Down: 0
            },
            createdOn:new Date()
        });
        Websites.insert({
            title:"Coursera",
            url:"http://www.coursera.org",
            description:"Universal access to the world’s best education.",
            keywords: ['coursera', 'Universal', 'access', 'world', 'best', 'education'],
            votes:{
                Up: 0,
                Down: 0
            },
            createdOn:new Date()
        });
        Websites.insert({
            title:"Google",
            url:"http://www.google.com",
            description:"Popular search engine.",
            keywords: ['google', 'popular', 'search', 'engine'],
            votes:{
                Up: 0,
                Down: 0
            },
            createdOn:new Date()
        });
    }
});