# P8-Feed-Reader-Testing
## FEND Course Project
- The Main intent of this project is to learn how to use the `jasmine.js` library to do TEST DRIVEN CODE DEVELOPMENT

![JasmneLibrary Logo](https://github.com/Geosynchronous/P8-Feed-Reader-Testing/blob/master/DocImages/Screen%20Shot%202016-11-23%20at%203.32.27%20PM.png)

- A basic working FEED READER App is provided to be tested
- The only file that I need to modify and embellish is the `feedreader.js file`, which will contain all the Test Spec Suites
- The `feedreader.js` file is the last line of `<script>` in the index.html file

## Where to find the project files
- The Udacity FEND Course and project files were downloaded from: https://github.com/udacity/frontend-nanodegree-feedreader

![Udacity Logo](https://github.com/Geosynchronous/P8-Feed-Reader-Testing/blob/master/DocImages/udacity_share-46db4b8faf075a5af5a1070a7fa0ad3639783609ff45f447e4ea467fe3aa9d32.png)

- My edited versions showing my work, reside in this repository in this folder: `frontend-nanodegree-feedreader-master`
- The README.md in the above folder basically details how this project is to be completed

## How to Run the Completed Project
- Download or clone https://github.com/Geosynchronous/P8-Feed-Reader-Testing.git to your local disk
- Then Navigate to this folder `frontend-nanodegree-feedreader-master`
- Then in the open folder click on index.html to invoke the code in your browser

## What you will see
- You will see the Feed Reader Code first load into the browser, window
![Feedreader Screenshot](https://github.com/Geosynchronous/P8-Feed-Reader-Testing/blob/master/DocImages/Screen%20Shot%202016-11-23%20at%203.13.03%20PM.png)

- And then at the bottom of the window you will see the visual to the test code messages
![Jasmine Test Suite Screenshot](https://github.com/Geosynchronous/P8-Feed-Reader-Testing/blob/master/DocImages/Screen%20Shot%202016-11-23%20at%203.13.42%20PM.png)

- If everything works, the messages will indicate that in Green and Black text
- If one of the test specifications is not met, you will see some Red message text, and details about the error

## How to fail a Specification Test
- By changing parts of, like the spelling of an object in the `app.js` related to any of the tests in the `feedreader.js` file is one way to do it
- you can also add or remove the prefix `.not` from the `.toBe()` ot `toBeDefined()` matchers in the `feedreader.js` file
- just save your changes and reload the index.html file in your browser to see the results
