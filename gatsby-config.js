/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/let-it-go",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Toilets",
            collection: "toilets",
            map: doc => {
              return {
                name: doc.name,
                lat: doc.lat,
                lon: doc.lon,
                facilities: {
                  hose: doc.facilities.hose,
                  showerHeads: doc.facilities.showerHeads,
                  handicapped: doc.facilities.handicapped,
                  male: doc.facilities.male,
                  female: doc.facilities.female,
                  separateHandicapped: doc.facilities.separateHandicapped,
                  waterCooler: doc.facilities.waterCooler
                },
                paranomaUrl: doc.paranomaUrl
              }
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
