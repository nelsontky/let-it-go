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
    * When asked if we wanted to use the older [Realtime Database](https://firebase.google.com/docs/database) or the bleeding edge [Cloud Firestore](https://firebase.google.com/docs/firestore), our inner vampire appeared and we went for bleeding edge.
        * Regretted our decision in the beginning. Documentation (and stackoverflow threads) for the newer storage model was sparse and simple functions such as backup and restore of databases required us to jump through so many hoops. :sob:
        * We could not understand the [revolutionary data model](https://firebase.google.com/docs/firestore/data-model) of collections and documents. It was totally different from the ```{ key: value }``` JSON models that we were used to.
        * Slowly but surely, we came to appreciate Cloud Firestore's data model, and now, there are no more hard feelings. :blush:
        * It's still inconvenient to create backups and thus we wrote a bunch of scripts that could work well with our database structure so as to export our database as a JSON. :new_moon_with_face: Not the best way but we work with what we have.
    * Authentication with Firebase was easy to work with. In fact, it was so easy that we felt dirty and doubted if such an implemetation could bring us 🚀🚀🚀 Apollo 11 🚀🚀🚀 glory.
      * Only problem was that the [firebase-auth-ui react wrapper](https://github.com/firebase/firebaseui-web-react) did not play nice with GatsbyJS.
      * In the end we decided to use hacky methods to implement the [Javascript api](https://firebase.google.com/docs/auth/web/firebaseui) into GatsbyJS, which worked pleasantly.
          * This was really hacky, [we did dirty things with constructors and class instances](https://github.com/nelsontky/let-it-go/blob/master/src/utils/firebase.js). 🙈🙈🙈
    * All in all, Firebase was nice to work with and the lessons learnt from building something with Firebase can be employed to build scalable apps that do not require us to bother ourselves too much with creating a database/backend from scratch.
1. Git
    * We were using Git (and Github) for the sake of attaining Apollo 11 certification back then and thus did not really appreciate its usefulness.
    * As I am typing this one day before milestone 3 submission deadline, 🙈🙈🙈 I realised how important each commit message was and most of the things typed above came from memories triggered by our old commit messages.
    * One thing that led to us not appreciating Git was that we did not use it to collaborate much. (as you can see - all commits, except 1 - in this repo was made by Nelson :new_moon_with_face:)
        * We started trying to collaborate with Git while writing our submissions portal. We experimented with all that flashy branching and merging thingies and of course, we ran into the issue of merge conflicts, which will be described in the submission portal's [README](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).
    * Git was also useful when we wanted to roll back to old versions of code but once I rolled back to the wrong commit and chaos ensued :(
        * From that unfortunate incident, we learnt to commit more frequently and commit individual files as much as possible. Before this, we were committing huge chunks of code and multiple files only at the end of a hearty day of coding. :sweat_smile::sweat_smile::sweat_smile:
    * Usage of Github gave us trouble when I accidentally pushed private api keys into this very public repo. :sweat_smile: It was almost impossible to rewrite history in git and it is also discouraged to do so. More of this issue will be elaborated in the milestone 3 section.
    * Git is a very useful tool for managing large codebases and we definitely will be using it in any other projects we are involved in. We will just try not to do stupid things. :sweat_smile:
1. :raising_hand_woman::raising_hand_woman::raising_hand_woman: **FEMALE TOILETS** :raising_hand_woman::raising_hand_woman::raising_hand_woman:
    * There was no way an orbital group composed of 2 guys could enter female toilets to find out which facilities they had. And there is only so many times we can ask a female for help.
    * So we decided to create a [submissions portal](https://nelsontky.github.io/let-it-go-submission/) to excuse our inability to document female toilets.
        * We eventually used the submissions portal as an excuse to not document all the toilets in NUS too :new_moon_with_face: and decided to spend more time on the submissions portal to make it more polished.
        * Learnt a lot from the submissions portal too. A similar section as this can be found in the submission portal's [README](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).

All in all, milestone 1 + 2 was exciting as we were just blind kids experimenting with new technologies and blundering around copying stackoverflow answers with little to no understanding. Slowly yet surely, we came to understand what we were actually doing and actually came up with something stable by milestone 2. The best way to learn is to fail, and what better way is there to learn other than by reading countless pages of documentation and stackoverflow pages till our app started working? Moving fast and breaking things definitely gave us a better appreciation of the technologies we employed and by the end of milestone 2, we were even good enough to help other orbital mates fix some of the bugs in their code! :sunglasses::sunglasses::sunglasses:

### Milestone 3
Milestone 3 was one hell of a ride. The move fast and break things mindset we had in the earlier milestones came back to bite us hard as some deep rooted issues that we waved away back then surfaced. :grin: Here are some issues that actually came back and bit us hard.
1. Keys and security
    * Api key management and database security was always this niggling thought in our minds.
        * However, we dispelled all such thoughts in the earlier milestones as we were adopting a move fast and break things stance and why let boring concepts like key security and database rules slow us down?
    * After milestone 2 was submitted, we went for a drink and then subsequently started work on implementing api key security.
        * On the way home from our little drinking session, I started reading an article describing the purpose of development and production keys. (Which I obviously did not understand duhhh)
    * For some reason, a few days later, I decided to rename our Firebase Admin SDK private key. This led to me accidentally pushing our private keys to this very public repo (I did not update the ```.gitignore``` file), which led to this very scary email from Google:
    <br />
    <img src="https://i.imgur.com/UrD5YVz.png" alt="Scary email" width= "1000" />
    * In this day and age, no one actually checks their emails and thus I did not identify any problems and in less than 2 hours, I received this scarier email: (I mean IT'S IN RED)
    <br />
    <img src="https://i.imgur.com/oACVJEo.png" alt="Scary email" width= "1000" />
    * The problem was only identified when reviews suddenly would not work and I started checking my emails and then :man_facepalming::man_facepalming::man_facepalming:.
        * Apparently, bots crawl public Github repos for Google api keys and then use them to mine cryptocurrency with a Google Cloud Compute instance using the scraped api key.
    * First we submitted appeals to Google to get our database back. Subsequently, we tried to rewrite git history by [deleting all sensitive information](https://help.github.com/en/articles/removing-sensitive-data-from-a-repository).
    * The next day, our appeal was still not processed and with us raring and ready to code, we decided to create a new firebase project and restore one of our nifty JSON backups to the new project.
        * Such a decision was actually a master stroke as it allowed us to delete the old project, along with all the other compromised api keys.
        * We no longer had to rewrite git history. :grin:
    * With a fresh start, we decided not to mess it up again and started reading up about [environment variables](https://www.gatsbyjs.org/docs/environment-variables/) and learning how to secure and lock down production keys while still allowing development keys full access.
    <br />
    <img src="https://i.imgur.com/437i5ZA.png" alt="Scary email" width= "1000" />
    * No more fear when we received an email like this, for we've locked down our production key to only be able to be used from a single domain.
        * We could've made the keys more secure and harder to be scrapped by employing [Base64 encoding](https://en.wikipedia.org/wiki/Base64) but we do not think that it is very neccessary.
    * As can be seen from the numerous commits where we thought that things were fixed, this issue of key security was quite a ride.	:stuck_out_tongue_closed_eyes:
    <br/>
    <img src="https://i.imgur.com/ZuYYH1Q.png" alt="Key commits" width= "700" />
    * We are glad that we learnt about key security while doing a small scale project like Orbital. Think of the consequences if we do accidentally push private keys during our internship/work. :shudders:
1. Database security
    * With Cloud Firestore's revolutionary data model (as alluded to in the previous segment), the way we [organise data must be carefully considered](https://firebase.google.com/docs/rules/get-started#define_your_data_and_rules_structures) so as to allow for easier integration of database security rules.
    * Our move fast and break things approach did us no favors here and we had to restructure the ```reviews``` collection so as to ensure that logged in users could only edit and delete their own reviews.
    * After much restructuring, our ```reviews``` collections looks like this:

    (:scroll: represents a collection while :page_facing_up: represents a document)
    <ul style="list-style:none">
      <li>:scroll: <code>reviews</code></li>
      <ul style="list-style:none">
        <li>:page_facing_up: <code>COM1 Level 1 Main Entrance</code></li>
        <ul style="list-style:none">
          <li>:scroll: <code>users</code></li>
          <ul style="list-style:none">
            <li>:page_facing_up: <em><code>userId</code></em> (a random unique id that is generated for every user who has logged in before)</li>
            <li><code>review :</code></li>
            <ul style="list-style:none">
              <li><code>date :</code></li>
              <li><code>name :</code></li>
              <li><code>photoURL :</code></li>
              <li><code>review :</code></li>
              <li><code>score :</code></li>
              <li><code>uid :</code></li>
            </ul>
            <li>:page_facing_up: <em><code>Another userId</code></em></li>
            <li><code>...</code></li>
          </ul>
        </ul>
        <li>:page_facing_up: <em><code>Other toilets</code></em></li>
        <li><code>...</code></li>
      </ul>
    </ul>

    * In the ```reviews``` collection, each toilet has their own specific document (named after the toilet name). Inside each toilet document, there is a collection of ```users``` who've posted reviews.
    * Such a structure then allows us to lock down the database such that only authors of a review can delete/edit their review. Code that secures the ```reviews``` collection as such is shown below:
    ```javascript
    match /reviews/{toilet}/users/{userId} {
    	allow read: if true;
        // Only allow users to write to what they created
        allow write: if request.auth.uid == userId;
    }
    ```
    * From this, we learnt that we should always start structuring data with security in mind, thus reducing the amount of data we have to restructure once we begin locking down the database. :smile:

TODO: bugs squashed

All in all, in milestone 3, we did not work much on the main app. Not much new features were developed and we spent more time on our submissions portal. However, the lessons learnt from the short time working on the main app was definitely valuable and these lessons made writing the submissions portal easier!
