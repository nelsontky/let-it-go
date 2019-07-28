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

### Milestone 1 + 2

Just like anyone who is exploring new technology that he/she has never used before, we definitely ran into many problems when starting out with GatsbyJS, Firebase, Git, and React Native.

1. GatsbyJS
    * It was diffcult to get Javascript libraries (such as the Google Maps api) to work with ReactJS (and consequently GatsbyJS)
    * I've been told that there are many npm modules made as replacements/wrappers for Javascript libraries. (There are like 10 million npm modules that implement the Google Maps api. Some examples can be found: [here](https://www.npmjs.com/package/google-map-react), [here](https://www.npmjs.com/package/react-google-maps), and [here](https://www.npmjs.com/package/@react-google-maps/api))
    * However, such unofficial modules do not have the best documentation and are plagued with multiple issues and unanswered stackoverflow threads.
    * Thus, so as to enjoy the extensive documentation that comes with official apis, we decided to employ hacky means to make Javascript libraries work in ReactJS. There were much problems and performance issues initially but thank god, there were more answered stackoverflow threads on how to integrate Javascript apis into ReactJS than those on the unofficial ReactJS wrapper modules.
    * We eventually managed to fix every memory leak and rogue re-render brought by our sloppy implementations of Javascript apis and such a task gave us more understanding of React lifecycles.
    * Other than that, GatsbyJS was a pleasure to work with and the Firebase integration with GraphQL was intuitive and simple. :blush:
1. Firebase
    * We used a firebase database to store information about the toilets in NUS. (Subsequently, we added user reviews and user submissions to the database too!)
        * Firebase seemed flashy enough to get our project certified for 🚀🚀🚀 Apollo 11 🚀🚀🚀 and that's why we went for it!
        * And of course not forgetting its nifty integration with multiple login providers, thus allowing us an easy way to implement user authentication!
    * When asked if we wated to use the older [Realtime Database](https://firebase.google.com/docs/database) or the bleeding edge [Cloud Firestore](https://firebase.google.com/docs/firestore), out inner vampire appeared and we went for bleeding edge.
        * Regretted our decision in the beginning. Documentation (and stackoverflow threads) for the newer storage model was sparse and simple functions such as backup and restore of databases required us to jump through so many hoops. :sob:
        * We could not understand the [revolutionary data model](https://firebase.google.com/docs/firestore/data-model) of collections and documents. It was totally different from the ```{ key: value }``` JSON models that we were used to
1. FEMALE TOILETS :raising_hand_woman::raising_hand_woman::raising_hand_woman:
    * There was no way an orbital group composed of 2 guys could enter female toilets to find out which facilities they had. And there is only so many times we can ask a female for help.
    * So we decided to create a [submissions portal](https://nelsontky.github.io/let-it-go-submission/) to excuse our inability to document female toilets.
        * Eventually used the submissions portal as an excuse to not document all the toilets in NUS too :new_moon_with_face: and decided to spend more time on the submissions portal to make it more polished.
        * Learnt a lot from the submissions portal too. A similar section as this can be found in the submission portal's [README](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).

### Milestone 3
Milestone 3 was one hell of a ride. The move fast and breaks things mindset we had in the earlier milestones came back to bite us hard as some deep rooted issues that we waved away back then surfaced. :grin:
1. Keys and security
