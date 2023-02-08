import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IInterfaceProps {
  data: Queries.IntroduceQuery;
  children: any;
}

export default function Introduce({ data, children }: IInterfaceProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query Introduce($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IInterfaceProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
