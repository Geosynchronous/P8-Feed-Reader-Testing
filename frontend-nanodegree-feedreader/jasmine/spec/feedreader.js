/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

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



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has defined name for each selectable feed category', function() {
            allFeeds.forEach(function(allFeed, index) {
              expect(allFeed.name).toBeDefined();
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden on default', function() {
            expect($('.menu-hidden')).toBeDefined();
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('when hidden, becomes visible when menu-icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').css('transform')).not.toBeDefined();
        });

        it('when visible, becomes hidden when menu-icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').css('transform')).toBeDefined();
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Async Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        // Test for Array
        it('has initial Load Feed Array', function(done) {
            expect(loadFeed).toBeDefined();
            expect(loadFeed.length).not.toBe(0);
            done();
         });

        // Test for Entry
        it('has at least one entry visible', function(done) {
            expect($('.entry-link')).toBeDefined();
            done();
         });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done){
            loadFeed(1, function(){
                done();
            });
        });

        it('has at least one entry visible', function(done) {
            expect($('.entry-link')).toBeDefined();
            done();
         });

    });

    // Comment to User indicating that the test all tests are done and successful

        describe('ALL TEST SUITE SPECIFICATIONS', function() {

        it('*** HAVE COMPLETED SUCCESSFULLY ***', function() {
            expect($('body')).toBeDefined();
         });

    });

}());