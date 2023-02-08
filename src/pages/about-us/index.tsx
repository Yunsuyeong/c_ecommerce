import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function AboutUs({ data }: PageProps<Queries.IntroducesQuery>) {
  console.log(data);
  return (
    <Layout title="About us">
      <section className="grid">
        {data.allMdx.nodes.map((write, index) => (
          <article key={index}>
            <Link to={`/about-us/${write.frontmatter?.slug}`}>
              <h3>{write.frontmatter?.author}</h3>
              <h5>{write.frontmatter?.date}</h5>
              <p>{write.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Introduces {
    allMdx(filter: { frontmatter: { author: { eq: "S.Y" } } }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY.MM.DD")
          author
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`;

export const Head = () => <Seo title="About Us" />;
