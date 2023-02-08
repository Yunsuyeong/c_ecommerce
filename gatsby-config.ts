require("dotenv").config();
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cecommerce`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Buy the best stickers`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cr0r1uz35nrp`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `blogpages`,
        // Path to the directory
        path: `${__dirname}/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `intropages`,
        // Path to the directory
        path: `${__dirname}/introduces`,
      },
    },
  ],
};

export default config;
