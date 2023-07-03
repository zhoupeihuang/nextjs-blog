import Layout from '../../components/layout';
import { getAllPostIds,getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date' 
import utilStyles from '../../styles/utils.module.css';


export default function Post({ postData }) {
  return (
    <Layout>
    <Head>
      <title>
      {postData.title}
      </title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
     </article>
  </Layout>
    )  
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback:false
  }
}
export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData =await getPostData(params.id)
    return {
      props: {
        postData
      },
    }
}


/***
 * 如何静态生成页面与动态路由如果你想静态地在路径/posts/<id>中生成一个页面，
 * 其中<id>可以是动态的，那么…在/pages/posts/[id].js
 * 创建一个页面页面文件必须包含:
 * 1. 一个React组件来呈现这个页面
 * 2. getStaticPaths返回id的可能值的数组
 * 3. getStaticProps获取具有id的帖子所需的数据
 *  
 */