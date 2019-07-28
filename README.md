# Let It Go
## Proposed level of achievement
🚀🚀🚀 Apollo 11 🚀🚀🚀

## Motivation
Let It Go is a web app that allows you to locate toilets in NUS nearest to you in a jiffy. Apart from this, this app aims to provide a comprehensive set of information on each toilet to ensure the user's demands are well taken care of. With a Google Reviews style, users can also submit reviews regarding each toilet and give it a rating.

Never fear again when you are in a foreign part of NUS, for now you can finally release your faeces in peace!

[And yes, you can submit your own toilets too!](https://nelsontky.github.io/let-it-go-submission/)
([Learn more](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md))

## Demo
Webapp: https://nelsontky.github.io/let-it-go/

Submissions portal ([?](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md)): https://nelsontky.github.io/let-it-go-submission/


Demo video: https://www.youtube.com/watch?v=4WnngILnw18

### Screenshots
#### Webapp
<br />
<img src="https://i.imgur.com/tYTp85P.png" width="300" alt="Main Screen" />
<img src="https://i.imgur.com/BaGjpQX.png" width="300" alt="Toilets Page" />
#### iOS app:
<br />
<img src="https://i.imgur.com/LNhE71g.png" width="300" alt="Main Screen" />
<img src="https://i.imgur.com/Y03w8jW.png" width="300" alt="Toilets Page" />
<img src="https://i.imgur.com/eKbgXLH.png" width="300" alt="Toilets Page" />
<img src="https://i.imgur.com/rcBy2c4.png" width="300" alt="Submit Review" />

## Features
* Map showing location of toilet.
* 360 degree photos of the vicinity of each toilet to facilitate recognition and navigation to a toilet.
* Detailed information about each toilet such as the availability of facilities like wheelchair accessible cubicles or presense of shower heads.
* Ability to filter/sort toilets by features such as proximity (duh!) and gender.
* Rudimentary review system that is linked to Google account.
    * Each Google account can only submit 1 review, with the ability to edit or delete the review.
    * Ability to rate toilets with stars, average stars are shown at the top.
    * Reviews are paginated, preventing reviews from taking too much page space.
* A native iOS application.
* Separate portal that allows users to submit toilets. Toilets will be added into main database upon review.
    * Implemented as a separate webapp, more information about the submissions portal can be found [here](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).

## Target audience
* Basically anyone in NUS. Even students/professors who already know where the nearest toilets are can still benefit.
* Cleaners in NUS. With our review system in place, resources for cleaners can be activated more efficiently.

## Built with
* [GatsbyJS](https://www.gatsbyjs.org/)
* [Firebase](https://firebase.google.com/)
* [React Native](https://facebook.github.io/react-native/)
* And lots and lots of love 💕💕💕

## Bugs, problems encountered, and lessons learnt :(
Milestone 3 was one hell of a ride. The move fast and breaks things mindset we had in the earlier milestones came back to bite us hard as some deep rooted issues that we waved away back then surfaced. :grin: 
1. Keys and security
