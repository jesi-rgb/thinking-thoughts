import Link from "next/link";
import fs from "fs";
import Layout from "../components/Layout";
import BlogIndexBody from "./blog-index-body";

export default function Blog({ slugs }) {
  return (
    <Layout>
      <BlogIndexBody>
        <div className="link-list">
          {slugs.map((slug) => {
            return (
              <div key={slug} className="link">
                <Link href="/blog/[slug]" as={"/blog/" + slug}>
                  <a>{slug.replace(/-/g, " ").toUpperCase()}</a>
                </Link>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .container {
            min-height: 25vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            margin-bottom: 1em;
            background-color: black;
            color: white;
            width: 100%;
            text-align: center;
            border-radius: 20px;
          }
          .link {
            padding: 1em;
            margin: 1em;
            background-color: #8d86c9;
            color: white;
            text-align: center;
            align-items: center;
            font-size: 30px;
            border-radius: 20px;
          }
          .link:hover {
            background-color: #725ac1;
            transition: 400ms;
            transition-timing-function: ease;
          }
        `}</style>
      </BlogIndexBody>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};