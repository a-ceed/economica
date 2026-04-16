import matter from "gray-matter";
import md from 'markdown-it';
import Link from "next/link";
import Image from "next/image";


// The page for each post
export default function PostCard({frontmatter, content}) {

    const {title, author, annotation, category, date, bannerImage, tags} = frontmatter
    const featImg = bannerImage;
    const nextImages = bannerImage;
    const featureImages = bannerImage;
    const url = "temniyecolog.ru";


    return (

    <article className="post-card">
        {featImg && (
            <Link href={url}>
                <a className="post-card-image-link" aria-label={title}>
                    {nextImages ? (
                        <div className="post-card-image">
                            <Image
                                src={url}
                                alt={title}
                                sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                                layout="fill"
                                objectFit="cover"
                                quality="1"
                            />
                        </div>
                    ) : (
                        feature_image && <img className="post-card-image" src={feature_image} alt={title} />
                    )}
                </a>
            </Link>
        )}

        <div className="post-card-content">
            <Link href={url}>
                <a className="post-card-content-link">
                    <header className="post-card-header">
                        {tags && <div className="post-card-primary-tag">{tags}</div>}
                        <h2 className="post-card-title">{title}</h2>
                    </header>
                    <section className="post-card-excerpt">
                        {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
                        <p>{content}</p>
                    </section>
                </a>
            </Link>


        </div>
    </article>
    )
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
//    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const fileName = fs.readFileSync(`posts/mypost.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}
