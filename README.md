# FriendFinder

### About

* This application is a compatibility-based "Friend Finder" website--basically, a dating app  
* This full-stack site will take in results from the users' surveys, then compare their answers with those from other users 
* The app will then display the name and picture of the user with the best overall match

### Overview of Functionality
* The application starts with an array of 5 friends to start with, each with their own scores from the survey
* Once the user takes the survey and submits their scores, the code in routing/apiRoutes.js will compare the user's scores to each friend in the friend arrays' scores and calculate the total difference that the user has to each friend
* The friend that has the lowest difference will then be the user's best match, and the best match's picture will be rendered onto a modal on the screen
* This application utilizes Express to communicate with the Friends List API

### How to Use
* Simply start the survey, answer the questions, and find your best match!

### Link to the Application
https://radiant-falls-10820.herokuapp.com/

### Screenshot

![FriendFinder](/public/assets/images/screenshot/screenshot.png?raw=true "Friend Finder")