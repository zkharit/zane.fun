import Date from '@/components/date';
import { getPostData, getPostPaths } from '@/lib/post';
import Head from 'next/head';

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
    <>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </>
  )
}