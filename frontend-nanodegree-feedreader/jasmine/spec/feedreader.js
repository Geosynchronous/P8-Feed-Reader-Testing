// By George Fischer
// Udacity FEND Nanodegree Student
// Fall 2016

 // feedreader.js
 //
 // This is the spec file that Jasmine will read and contains
 // all of the tests that will be run against your application.


 // We're placing all of our tests within the $() function,
 // since some of these tests may require DOM elements. We want
 // to ensure they don't run until the DOM is ready.


$(function() {
     // This is our first test suite - a test suite just contains
     // a related set of tests. This suite is all about the RSS
     // feeds definitions, the allFeeds variable in our application.

    describe('RSS Feeds', function() {

         // This is our first test - it tests to make sure that the
         // allFeeds variable has been defined and that it is not
         // empty. Experiment with this before you get started on
         // the rest of this project. What happens when you change
         // allFeeds in app.js to be an empty array and refresh the
         // page?

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // A test that loops through each feed
         // in the allFeeds object and ensures it has a URL defined
         // and that the URL is not empty.

        it('has defined URL for each selectable feed category', function() {
            allFeeds.forEach(function(allFeed, index) {
                expect(allFeed.url).toBeDefined();
            });
        });

        it('has at least one RSS feed item URL in each selectable feed category', function() {
            allFeeds.forEach(function(allFeed, index) {
                expect(allFeed.url.length).not.toBe(0);
            });
        });

         // A test that loops through each feed
         // in the allFeeds object and ensures it has a name defined
         // and that the name is not empty.


        it('has defined name for each selectable feed category', function() {
            allFeeds.forEach(function(allFeed, index) {
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
            });
        });
    });

     // A new test suite named "The menu"
    describe('The Menu', function() {

         // A test that ensures the menu element is
         // hidden by default. You'll have to analyze the HTML and
         // the CSS to determine how we're performing the
         // hiding/showing of the menu element.


        it('is hidden on default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         // A test that ensures the menu changes
         // visibility when the menu icon is clicked. This test
         // should have two expectations: does the menu display when
         // clicked and does it hide when clicked again.


        it('when hidden, becomes visible when menu-icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').css('transform')).not.toBeDefined();
        });

        it('when visible, becomes hidden when menu-icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').css('transform')).toBeDefined();
        });
    });


     // A new test suite named "Initial Entries"
    describe('Async Initial Entries', function() {

         // A test that ensures when the loadFeed
         // function is called and completes its work, there is at least
         // a single .entry element within the .feed container.
         // Remember, loadFeed() is asynchronous so this test will require
         // the use of Jasmine's beforeEach and asynchronous done() function.


        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry visible', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

     // A new test suite named "New Feed Selection"

    describe('New Feed Selection', function() {

         // A test that ensures when a new feed is loaded
         // by the loadFeed function that the content actually changes.
         // Remember, loadFeed() is asynchronous.


        var initialEntry,
            updatedEntry;

        // Loads an Initial Feed and saves Entry to var
        // The Asynchronous loadFeed Function needs to be done
        // before the next block of code can be invoked
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialEntry = $('.feed .entry').html();
                done();
            });
        });

        // Loads a new Next Feed and saves that Entry to var
        // The Asynchronous loadFeed Function is invoked after the above block is done
        // And then needs to be done itself before the next block of code can execute
        beforeEach(function(done) {
            loadFeed(1, function() {
                nextEntry = $('.feed .entry').html();
                done();
            });
        });

        // Makes sure Initial & Next Entries are different
        // Waits for the above block of code to be done before invoking
        it('should have new changed entry', function() {
            expect(nextEntry).not.toEqual(initialEntry);
        });
    });
}());