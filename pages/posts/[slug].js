import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Layout from "../../components/Layout";

import avatar from "../../public/dark8.png";
import tel from "../../public/telegram.png";
import mainLogo from "../../public/dark8.png";


// The page for each post
export default function Post({frontmatter, content, slug}) {
    const {title, author, annotation, category, date, bannerImage, tags} = frontmatter
    const urlfilename = slug;


    return <main id="site-main" className="site-main outer">
        <Head>
            <title>{title}</title>
            <meta name="description" content={annotation} />

            {/*OpenGraph*/}
            <meta property="og:locale" content="ru_RU"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={annotation}/>
            <meta property="og:image" content={"https://temniyecolog.ru/"+bannerImage}/>
            <meta property="og:image:width" content="512"/>
            <meta property="og:image:height" content="320"/>
            <meta property="og:url" content={"https://temniyecolog.ru/posts/"+urlfilename}/>
            <meta property="og:site_name" content="<Блог Тёмного Эколога>"/>

        </Head>
        <div  className="inner" >
        <article className="post-full post tag-getting-started featured">
            <header className="post-full-header">
                <section className="post-full-tags">
                    <Link href="/tag/getting-started">
                        <a>{tags}</a>
                    </Link>
                </section>

                <h1 className="post-full-title">{title}</h1>
                <p className="post-full-custom-excerpt">{annotation}</p>
                <div className="post-full-byline">
                    <section className="post-full-byline-content">
                        <ul className="author-list">
                            <li className="author-list-item">
                                <a className="author-avatar">
                                    <Image src={"https://temniyecolog.ru/_next/static/media/dark8.5416d8b1.png"} alt="Экология Тёмного эколога" layout="responsive" quality="25" width="36" height="36" />
                                </a>
                            </li>
                        </ul>
                        <section className="post-full-byline-meta">
                            <h4 className="author-name">{author}</h4>
                            <div className="byline-meta-content">
                                <time className="byline-meta-date">{date}</time>
                            </div>
                        </section>
                    </section>
                </div>

            </header>
        </article>

            <div className="imgcontainer"><img src={"https://temniyecolog.ru/"+bannerImage}/></div>

            <section className="post-full-content">
                <div className="post-content load-external-scripts" dangerouslySetInnerHTML={{ __html: md().render(content) }} />

                {/*Ссылки телеграм*/}
                <div className="wrapper-telegram" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="wrapper-align-telegram" style={{ display: 'flex' }}>
                        <div className="block-telegram" style={{ marginRight: '15px', marginBottom: '15px', maxHeight: '81px', maxWidth: '251px' }}>
                            <a className="author-telegram" href="https://t.me/darkecologist" target="_blank" rel="noopener noreferrer">
                                <img alt="Экологический блог в телеграме Тёмного эколога"
                                     src="/ecologic-blog.png"
                                     decoding="async"
                                     data-nimg="intrinsic"
                                     width={251}
                                     height={81}>
                                </img>
                            </a>
                        </div>
                        <div style={{ maxHeight: '81px', maxWidth: '316px' }}>
                            <a className="author-telegram" href="https://t.me/+cW-J3353tF03YzEy" target="_blank" rel="noopener noreferrer">
                                <img alt="Экологический чат в телеграме Тёмного эколога"
                                     src="/ecologic-blog-podpole.png"
                                     decoding="async"
                                     data-nimg="intrinsic"
                                     width={316}
                                     height={81}>
                                </img>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </main>
}

// Generating the paths for each post
export async function getStaticPaths() {

  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
          slug,
      },
    };
  }
