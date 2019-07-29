# Let It Go

## Proposed level of achievement

🚀🚀🚀 Apollo 11 🚀🚀🚀

## Motivation
Let It Go is an app that allows you to locate toilets in NUS nearest to you in a jiffy. Apart from this, this app aims to provide a comprehensive set of information on each toilet to ensure the user's demands are well taken care of. With a Google Reviews style, users can also submit reviews regarding each toilet and give it a rating.

We come in both a Web App and an iOS App. With the iOS being a watered down and minimalist version of its web counterpart.

Never fear again when you are in a foreign part of NUS, for now you can finally release your faeces in peace!

[And yes, you can submit your own toilets too!](https://nelsontky.github.io/let-it-go-submission/)
([Learn more](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md))

## Demo

Web App: https://nelsontky.github.io/let-it-go/

Submissions portal ([?](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md)): https://nelsontky.github.io/let-it-go-submission/

Demo video: https://www.youtube.com/watch?v=4WnngILnw18

### Screenshots

#### Web App

<br />
<p float = "left">
  <img src="https://i.imgur.com/tYTp85P.png" width="300" alt="Main Screen" />
  <img src="https://i.imgur.com/BaGjpQX.png" width="300" alt="Toilets Page" />
</p>

#### iOS app:
<br />
<p float = "left">
  <img src="https://i.imgur.com/LNhE71g.png" width="300" alt="Main Screen" />
  <img src="https://i.imgur.com/Y03w8jW.png" width="300" alt="Toilets Page" />
  <img src="https://i.imgur.com/eKbgXLH.png" width="300" alt="Toilets Page" />
  <img src="https://i.imgur.com/rcBy2c4.png" width="300" alt="Submit Review" />
</p>


## Features
* Map showing the location of toilet.
* 360 degree photos of the vicinity of each toilet to facilitate recognition and navigation to a toilet.
* Detailed information about each toilet, such as the availability of facilities like wheelchair accessible cubicles or presence of shower heads.
* Ability to filter/sort toilets by features such as proximity (duh!) and gender.
* Share toilets to social media!
* Review system that is linked to Google account.
    * Each Google account can only submit 1 review, with the ability to edit or delete the review.
    * Ability to rate toilets with stars, average stars are shown at the top.
    * Reviews are paginated, preventing reviews from taking too much page space.
* Separate Web Portal that allows users to submit toilets, along with functionalities of editing and deleting Toilets will be added into main database upon review.
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
   - It was difficult to get Javascript libraries (such as the Google Maps api) to work with ReactJS (and consequently GatsbyJS)
   - I've been told that there are many npm modules made as replacements/wrappers for Javascript libraries. (There are like 10 million npm modules that implement the Google Maps api. Some examples can be found: [here](https://www.npmjs.com/package/google-map-react), [here](https://www.npmjs.com/package/react-google-maps), and [here](https://www.npmjs.com/package/@react-google-maps/api))
   - However, such unofficial modules do not have the best documentation and are plagued with multiple issues and unanswered stackoverflow threads.
   - Thus, so as to enjoy the extensive documentation that comes with official apis, we decided to employ hacky means to make Javascript libraries work in ReactJS. There were many problems and performance issues initially but thank god, there were more answered stackoverflow threads on how to integrate Javascript apis into ReactJS than those on the unofficial ReactJS wrapper modules.
   - We eventually managed to fix every memory leak and rogue re-render brought by our sloppy implementations of Javascript apis and such a task gave us more understanding of React lifecycles.
   - Other than that, GatsbyJS was a pleasure to work with and the Firebase integration with GraphQL was intuitive and simple. :blush:
1. Firebase
   - We used a firebase database to store information about the toilets in NUS. (Subsequently, we added user reviews and user submissions to the database too!)
     - Firebase seemed flashy enough to get our project certified for 🚀🚀🚀 Apollo 11 🚀🚀🚀 and that's why we went for it!
     - And of course not forgetting its nifty integration with multiple login providers, thus allowing us an easy way to implement user authentication!
   - When asked if we wanted to use the older [Realtime Database](https://firebase.google.com/docs/database) or the bleeding edge [Cloud Firestore](https://firebase.google.com/docs/firestore), our inner vampire appeared and we went for bleeding edge.
     - Regretted our decision in the beginning. Documentation (and stackoverflow threads) for the newer storage model was sparse and simple functions such as backup and restore of databases required us to jump through so many hoops. :sob:
     - We could not understand the [revolutionary data model](https://firebase.google.com/docs/firestore/data-model) of collections and documents. It was totally different from the `{ key: value }` JSON models that we were used to.
     - Slowly but surely, we came to appreciate Cloud Firestore's data model, and now, there are no more hard feelings. :blush:
     - It's still inconvenient to create backups and thus we wrote a bunch of scripts that could work well with our database structure so as to export our database as a JSON. :new_moon_with_face: Not the best way but we work with what we have.
   - Authentication with Firebase was easy to work with. In fact, it was so easy that we felt dirty and doubted if such an implementation could bring us 🚀🚀🚀 Apollo 11 🚀🚀🚀 glory.
     - Only problem was that the [firebase-auth-ui react wrapper](https://github.com/firebase/firebaseui-web-react) did not play nice with GatsbyJS.
     - In the end we decided to use hacky methods to implement the [Javascript api](https://firebase.google.com/docs/auth/web/firebaseui) into GatsbyJS, which worked pleasantly.
       - This was really hacky, [we did dirty things with constructors and class instances](https://github.com/nelsontky/let-it-go/blob/master/src/utils/firebase.js). 🙈🙈🙈
   - All in all, Firebase was nice to work with and the lessons learnt from building something with Firebase can be employed to build scalable apps that do not require us to bother ourselves too much with creating a database/backend from scratch.
1. Git
   - We were using Git (and Github) for the sake of attaining Apollo 11 certification back then and thus did not really appreciate its usefulness.
   - As I am typing this one day before milestone 3 submission deadline, 🙈🙈🙈 I realised how important each commit message was and most of the things typed above came from memories triggered by our old commit messages.
   - One thing that led to us not appreciating Git was that we did not use it to collaborate. (as you can see - all commits, except 1 - in this repo was made by Nelson :new_moon_with_face:)
     - We started trying to collaborate with Git while writing our submissions portal. We experimented with all that flashy branching and merging thingies and of course, we ran into the issue of merge conflicts, which will be described in the submission portal's [README](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).
   - Git was also useful when we wanted to roll back to old versions of code but once I rolled back to the wrong commit and chaos ensued :(
     - From that unfortunate incident, we learnt to commit more frequently and commit individual files as much as possible. Before this, we were committing huge chunks of code and multiple files only at the end of a hearty day of coding. :sweat_smile::sweat_smile::sweat_smile:
   - Usage of Github gave us trouble when I accidentally pushed private api keys into this very public repo. :sweat_smile: It was almost impossible to rewrite history in git and it is also discouraged to do so. More of this issue will be elaborated in the milestone 3 section.
   - Git is a very useful tool for managing large codebases and we definitely will be using it in any other projects we are involved in. We will just try not to do stupid things. :sweat_smile:
1. :raising_hand_woman::raising_hand_woman::raising_hand_woman: **FEMALE TOILETS** :raising_hand_woman::raising_hand_woman::raising_hand_woman:
   - There was no way an orbital group composed of 2 guys could enter female toilets to find out which facilities they had. And there is only so many times we can ask a female for help.
   - So we decided to create a [submissions portal](https://nelsontky.github.io/let-it-go-submission/) to excuse our inability to document female toilets.
     - We eventually used the submissions portal as an excuse to not document all the toilets in NUS too :new_moon_with_face: and decided to spend more time on the submissions portal to make it more polished.
     - We learnt a lot from the submissions portal too. A similar section as this can be found in the submission portal's [README](https://github.com/nelsontky/let-it-go-submission/blob/master/README.md).

All in all, milestone 1 + 2 was exciting as we were just blind kids experimenting with new technologies and blundering around copying stackoverflow answers with little to no understanding. Slowly yet surely, we came to understand what we were actually doing and actually came up with something stable by milestone 2. The best way to learn is to fail, and what better way is there to learn other than by reading countless pages of documentation and stackoverflow pages till our app started working? Moving fast and breaking things definitely gave us a better appreciation of the technologies we employed and by the end of milestone 2, we were even good enough to help other Orbital mates fix some of the bugs in their code! :sunglasses::sunglasses::sunglasses:

### Milestone 3

Milestone 3 was one hell of a ride. The move fast and break things mindset we had in the earlier milestones came back to bite us hard as some deep rooted issues that we waved away back then surfaced. :grin: Here are some issues that actually came back and bit us.

1. Keys and security
   * Api key management and database security was always this nagging thought in our minds.
     * However, we dispelled all such thoughts in the earlier milestones as we were adopting a move fast and break things stance and why let boring concepts like key security and database rules slow us down?
   * For some reason, a few days after milestone 2, I decided to rename our Firebase Admin SDK private key. This led to me accidentally pushing our private keys to this very public repo (I did not update the `.gitignore` file, nor did I check the committed files before pushing :new_moon_with_face:), which led to this very scary email from Google:
     <br />
     <img src="https://i.imgur.com/UrD5YVz.png" alt="Scary email" width= "1000" />
       <ul><li>In this day and age, no one actually checks their emails and thus I did not identify any problems and in less than 2 hours, I received this scarier email: (I mean IT'S IN RED)</li></ul>
       <br />
       <img src="https://i.imgur.com/oACVJEo.png" alt="Scary email" width= "1000" />
       <ul>
        <li>
          The problem was only identified when reviews suddenly would not work and I started checking my emails and then :man_facepalming::man_facepalming::man_facepalming:.
        </li>
        <ul>
          <li>
          Apparently, bots crawl public Github repos for Google api keys and then use them to mine cryptocurrency with a Google Cloud Compute instance using the scraped api key.
          </li>
        </ul>
        <li>
          First we submitted appeals to Google to get our database back. Subsequently, we tried to rewrite git history by <a href="https://help.github.com/en/articles/removing-sensitive-data-from-a-repository">deleting all sensitive information</a>.
        </li>
        <li>
          The next day, our appeal was still not processed and with us raring and ready to code, we decided to create a new firebase project and restore one of our nifty JSON backups to the new project.
        </li>
        <ul>
          <li>Such a decision was actually a master stroke as it allowed us to delete the old project, along with all the other compromised api keys.
          </li>
          <li>We no longer had to rewrite git history. :grin:</li></ul>
     <li>With a fresh start, we decided not to mess it up again and started reading up about <a href="https://www.gatsbyjs.org/docs/environment-variables/">environment variables</a> and learning how to secure and lock down production keys while still allowing development keys full access.</li></ul>
       <br />
       <img src="https://i.imgur.com/437i5ZA.png" alt="Scary email" width= "1000" />
       <ul>
     <li>No more fear when we received an email like this, for we've locked down our production key to only be able to be used from a single domain.</li>
       <ul><li>We could've made the keys more secure and harder to be scrapped by employing <a href="https://en.wikipedia.org/wiki/Base64">Base64 encoding</a> but we do not think that it is very necessary.</li></ul>
     <li>As can be seen from the numerous commits where we thought that things were fixed, this issue of key security was quite a ride. :stuck_out_tongue_closed_eyes:</li>
       <br/>
       <img src="https://i.imgur.com/ZuYYH1Q.png" alt="Key commits" width= "700" />
     <li>We are glad that we learnt about key security while doing a small scale project like Orbital. Locking down production keys is paramount to security and we've learnt that we should always check committed files before pushing them to Github. Think of the consequences if we do accidentally push private keys during our internship/work. :shudders:</li></ul>

1. Database security

   * With Cloud Firestore's revolutionary data model (as alluded to in the previous segment), the way we [organise data must be carefully considered](https://firebase.google.com/docs/rules/get-started#define_your_data_and_rules_structures) so as to allow for easier integration of database security rules.
   * Our move fast and break things approach did us no favors here and we had to restructure the `reviews` collection so as to ensure that logged in users could only edit and delete their own reviews.
   * After much restructuring, our `reviews` collections looks like this:

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

  * In the `reviews` collection, each toilet has their own specific document (named after the toilet name). Inside each toilet document, there is a collection of `users` who've posted reviews.
  * Such a structure then allows us to lock down the database such that only authors of a review can delete/edit their review. Code that secures the `reviews` collection as such is shown below:

   ```javascript
   match /reviews/{toilet}/users/{userId} {
    allow read: if true;
    // Only allow users to write to what they created
    allow write: if request.auth.uid == userId;
   }
   ```

   * From this, we learnt that we should always start structuring data with security in mind, thus reducing the amount of data we have to restructure once we begin locking down the database. :smile:

#### Bugs and user testing
Bug hunting and user testing was also something we waited till milestone 3 to start seriously doing. We gave up our daily dose of [Hacker News](https://news.ycombinator.com/) on our commutes and started vigorously testing the application in our free time.
1. Location services related testing
    * We spent a lot of time obsessing about what would happen when users do funny things with their GPS settings. What would happen if a user turns off their GPS after navigating to a new page in the webapp? What will happen if the only enable GPS after navigating to a new page?
        * For this, we came up with a tooltip that would show when a user's location was not detected. Subsequently, we tried all the weird combinations of enabling/disabling location services that are possible and settled on a reliable algorithm which allowed the tooltip to be shown whenever it should appear.

        ![Location not available message](https://i.imgur.com/UdxtVvt.png)

        ![Help message](https://i.imgur.com/8U5Q0MF.png)

        Tooltip only shows when location cannot be detected by the browser. A helpful message is also shown upon clicking on the question mark icon to aid users in enabling location services.

        ([040c6ba](https://github.com/nelsontky/let-it-go/commit/040c6ba34da1bb3b506b266228a498371f760371) and [83c51f1](https://github.com/nelsontky/let-it-go/commit/83c51f1feb69db38db8a99a9793523d4a3801bf4) were 2 commits that made the tooltip more reliable after much testing)
    * On our commutes, we also tested the location services to check if our location marker would update while we were moving. Preliminary testing showed that the location updates were too choppy and unreliable.
        * Back then, we were using an algorithm that would grab a user's location via [```Geolocation.getCurrentPosition()```](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) every second and then update it on the map.
        * After the testing yielded less than satisfactory results, we went back to the old trusty Google and realised that there exists a [command that updates the user location whenever position of the device changes](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).
        * Changing to using [```Geolocation.watchPosition()```](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition) in commit [b20af76](https://github.com/nelsontky/let-it-go/commit/b20af761ab8bb25f27e4e11c417a41d9ff7e3429) made location polling waaaaaaaayyyy smoother.
        * Plus, performance improved by a lot as the per second polling employed back then lead to memory leaks, slowing an eighth gen Intel Core i5 laptop to a crawl. :sweat_smile:
1. Panorama performance issues
    * As stated above, some of our implementations of Javascript apis in ReactJS left much to be desired. Our implementation of the [Pannellum library](https://pannellum.org/) was creating multiple viewers without destruction, thus causing performance issues. This was fixed in [79dcd8e](https://github.com/nelsontky/let-it-go/commit/79dcd8e836f1711ced94908e94df8f107327f2d2), after reading more on the Pannellum docs and after gaining more understanding of React lifecycle methods.
1. Spelling woes (Not really a bug but yes, a bug in our brains LOL)
    * One fine day as we let one of our friends try the webapp, this sharp boy majoring in English saw that all instances of "separate" was spelt wrongly as "seperate".
    * First there was denial. "IT'S JUST THE BRITISH SPELLING!", I argued with blind fervour.
    * However, a quick Google search led to the conclusion that my 22 years on this Earth was a lie and that most people start spelling "separate" correctly when they are 6.
    * This led to us renaming all instances of "seperate" in the Cloud Firestore database and the source code.
        * As stated above, the bleeding edge Cloud Firestore database was a b***h to work with and this applies to renaming a single field in 20+ toilets.
        * Took some time writing and testing our renaming script to ensure that it does not nuke those 20+ carefully recorded toilets into oblivion.
    * The source code was more straightforward. It just involved a simple replace through multiple files but we had to be sure we didn't miss any instance of the childish typo and thus this took some time too.
        * Thus the existence of this shameful commit [0b890ab](https://github.com/nelsontky/let-it-go/commit/0b890ab1d90628b961263885f7aaf6c6b41351d0).
    * As we were working on the submission portal, we realised that "panorama" was spelt (quite terribly wrongly) as "paranoma". I blame this on excessive amount of Paranormal Activity I binged on just as summer started.
        * How shameful - an entire file name was spelt wrongly: [```/src/components/paranoma.js```](https://github.com/nelsontky/let-it-go/blob/master/src/components/paranoma.js)
        * For this typo, we were already too jaded by the earlier replacement of the word "separate" and thus we decided to let it be in the source code and database of the webapp.
        * The submissions portal was way messier, with half of the references being the correct "panorama", while the other half being the erroneous "paranoma".
    * Lessons learnt: encapsulate all hard to spell words into a single function in the future, so spelling errors are easier to fix.
        * Nah just joking, [we'll just invest half a semester worth of school fees to get a full collection of The Oxford English Dictonary](https://global.oup.com/academic/product/the-oxford-english-dictionary-9780198611868?cc=gb&lang=en&).
1. Other user testing
    * As alluded above, we did let some of our friends try the app so as to hunt for bugs and get feedback.
    * In hindsight, we should have tracked all issues with Github issues, but we were young and didn't really git gud with Github back then and thus all we did was haphazardly document issues all around the place.

    ![No issues](https://i.imgur.com/yEFkRbu.png)

    #fakeNews, we did have many issues with our apps, just that it wasn't documented. :sweat_smile:

    <img src="https://i.imgur.com/b0WSszQ.jpg" width="300" />
    <img src="https://i.imgur.com/irEPbzF.jpg" width="300" />
    <img src="https://i.imgur.com/atiCrrR.jpg" width="300" />
    <img src="https://i.imgur.com/bIEqBOW.jpg" width="300" />

    * Just some of the numerous suggestions and ideas we received from our testers/our own testing, all randomly scribbled around my Google Keep. :new_moon_with_face:

    <img src="https://i.imgur.com/Wv3L3Sw.png" width="300" />

    * Another half of the suggestions/issues (not showing all of course) were on [Trello](https://trello.com), thus making all this issue tracking thingy very messy.
    * Since then, we've appreciated the use of Github issues and have started using them in our submissions portal.

All in all, in milestone 3, we did not work much on the main app. Not much new features were developed and we spent more time on our submissions portal. However, the lessons learnt from the short time working on the main app was definitely valuable and these lessons made writing the submissions portal easier!
