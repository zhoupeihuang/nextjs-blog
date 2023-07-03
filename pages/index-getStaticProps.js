// fs是一个 Node.js 模块，可让您从文件系统读取文件。
// path是一个 Node.js 模块，可让您操作文件路径。
// matter是一个库，可让您解析每个 Markdown 文件中的元数据。
// 在 Next.js 中，lib文件夹没有像pages文件夹那样指定名称，因此您可以将其命名为任何名称。通常约定使用libor utils。
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/post';


export default function Home({allPostsData}) {
  console.log(allPostsData)
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    {/* Add this <section> tag below the existing <section> tag */}
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>{siteTitle}</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </ul>
     

  </section>
    </Layout>
  );
}
/***
 * 
 * 获取静态属性
 * 
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      // allPostsData,
      allPostsData
    },
  };
}