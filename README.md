# Let It Go
## Proposed level of achievement
🚀🚀🚀 Apollo 11 🚀🚀🚀

## Motivation
Let It Go is a web app that allows you to locate toilets in NUS nearest to you in a jiffy. Apart from this, this app aims to provide a comprehensive set of information on each toilet to ensure the user's demands are well taken care of. With a Google Reviews style, users can also submit reviews regarding each toilet and give it a rating.

Never fear again when you are in a foreign part of NUS, for now you can finally release your faeces in peace!

## Screenshots
![Main Screen](https://i.imgur.com/U9En22F.png)
![Toilets Page](https://i.imgur.com/KROzJDB.png)

## Features
#### Implemented
* Documented all the toilets in School of Computing.
* Map showing location of toilet.
* 180 degree photos of the vicinity of each toilet to facilitate recognition and navigation to a toilet.
* Detailed information about each toilet such as the availability of facilities like wheelchair accessible cubicles or presense of shower heads.
* Ability to filter/sort toilets by features such as proximity (duh!) and gender.
* Rudimentary review system that is linked to Google account. Review deletion/editing is still not possible and current review system is just a VERY basic comment system.
* A native iOS application

#### To be implemented
* Document **ALL** toilets in NUS.
* Paginate main list of toilets.
* Persistance of options chosen (such as filters and sorting) upon navigation back to main page.
* Refine review system:
  * Paginate reviews, lazily load each page of reviews.
  * Implement star ratings.
  * Add ability to delete reviews.
  * Add captcha protection to submission of reviews.
* Creation of a seperate portal that allows users to submit toilets. Toilets will be added into main database upon review.

## Target audience
* Basically anyone in NUS. Even students/professors who already know where the nearest toilets are can still benefit.
* Cleaners in NUS. With our review system in place, resources for cleaners can be activated more efficiently.

## Built with
* [GatsbyJS](https://www.gatsbyjs.org/)
* [Firebase](https://firebase.google.com/)
* [React Native](https://facebook.github.io/react-native/)
* And lots and lots of love 💕💕💕
