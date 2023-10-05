import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I have over 6 years of experience in software development. I have a
          strong knowledge of various programming languages and technologies.
          Most of my expertise is in the front-end development of JavaScript
          applications using React and Redux, issue detection, and resolving.
          Besides that, I got the AWS Solutions Architect – Associate
          certification and polished my cloud knowledge by working as a
          full-stack developer for a few years on the last high- loaded project.
          I was implementing the Domain Driven Design architecture. I have a
          strong understanding of object-oriented concepts, design patterns, and
          different SDLC processes. I was involved in several long-term
          projects, which gave me strong experience in various software design
          and development areas. I am keen on functional programming concepts
          and mathematics and had a chance to practice that on a real project on
          Typescript. I am always open to new challenges with interest and
          enthusiasm. I am an open-minded and goal-oriented person. I have an
          active teamwork attitude and quick learning ability. I like the
          concept of how life imitates chess. I polish problem-solving on
          LeetCode along with data structures and algorithms understanding.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
