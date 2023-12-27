import Date from '@/components/date';
import Layout from '@/components/layout';
import { getPostData, getPostPaths } from '@/lib/post';
import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';

export async function getStaticPaths() {
  const paths = await getPostPaths();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // get data for a post here
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2 className={utilStyles.authorText}>{postData.author}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.editedDate &&
          (
            <div className={utilStyles.lightText}>
              Edited: <Date dateString={postData.editedDate} />
            </div>
          )}
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  )
}