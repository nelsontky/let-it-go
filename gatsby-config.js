/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = ***REMOVED***
  pathPrefix: "/let-it-go",
  plugins: [
    ***REMOVED***
      resolve: `gatsby-plugin-typography`,
      options: ***REMOVED***
        pathToConfigModule: `src/utils/typography`,
      ***REMOVED***,
    ***REMOVED***,
    ***REMOVED***
      resolve: "gatsby-source-firestore",
      options: ***REMOVED***
        credential: require("./firebase.json"),
        types: [
          ***REMOVED***
            type: "Toilets",
            collection: "toilets",
            map: doc => ***REMOVED***
              return ***REMOVED***
                name: doc.name,
                lat: doc.lat,
                lon: doc.lon,
                paranomaUrl: doc.paranomaUrl,
                startingYaw: doc.startingYaw,
                maleYaw: doc.maleYaw,
                femaleYaw: doc.femaleYaw,
                handicappedYaw: doc.handicappedYaw
              ***REMOVED***
            ***REMOVED***,
          ***REMOVED***
        ],
      ***REMOVED***,
    ***REMOVED***,
    `gatsby-plugin-react-helmet`
  ],
***REMOVED***
