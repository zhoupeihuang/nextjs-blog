// fs是一个 Node.js 模块，可让您从文件系统读取文件。
// path是一个 Node.js 模块，可让您操作文件路径。
// matter是一个库，可让您解析每个 Markdown 文件中的元数据。
// 在 Next.js 中，lib文件夹没有像pages文件夹那样指定名称，因此您可以将其命名为任何名称。通常约定使用libor utils。
import Head from "next/head"; 
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from '../components/date'

export default function Home({ allPostsData }) {
  console.log(allPostsData);
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
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
        </ul>
        <Link href="/swrDemo" className={utilStyles.colorInherit}>SwrDemo</Link>
      </section>
    </Layout>
  );
}
import { fetcher } from "../lib/Api";
import { getSortedPostsData } from '../lib/posts'
// 获取静态属性 基于服务端
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
/***
 * 
 * 获取服务器端属性
 * 
 */
// export  const  getServerSideProps = async ()=>{
//   let param = {
//     reqName: "Home",
//   };
//   const headers = { "Access-Control-Allow-Origin": "*" };
//   const { data, notFound } = await fetcher("http://127.0.0.1:4523/m1/2880094-0-default/getPropsData", headers);
//       console.log(data)
//       // 页面请求数据成功之后 加载这个html
//       // {data.map(({ id, name, age }) => (
//       //   <li>
//       //    <span>{id}</span>--<strong>{name}</strong>--<span>{age}</span>
//       //   </li>
//       // ))}
//     if (notFound) {
//       return {
//         notFound: true,
//       };
//     }
//   console.log(data)
//   return {  props: {  data:data  }  };
 
// }

