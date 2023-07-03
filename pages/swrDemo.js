// fs是一个 Node.js 模块，可让您从文件系统读取文件。
// path是一个 Node.js 模块，可让您操作文件路径。
// matter是一个库，可让您解析每个 Markdown 文件中的元数据。
// 在 Next.js 中，lib文件夹没有像pages文件夹那样指定名称，因此您可以将其命名为任何名称。通常约定使用libor utils。
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import useSWR from 'swr';
// import { fetcher } from "../lib/Api";
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function proFile(){
    const {data,error} = useSWR("http://127.0.0.1:4523/m1/2880094-0-default/getPropsData",fetcher)
    console.log(data)
    // const data = res
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    // 渲染数据
      return (
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          {/* Add this <section> tag below the existing <section> tag */}
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>{siteTitle}</h2>
            <ul className={utilStyles.list}>
            {data.data.map(({ id, name, age }) => (
                <li className={utilStyles.listItem} key={id}>
                  <span>{id}</span>--<strong>{name}</strong>--<span>{age}</span>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      );
}
// {data.map(({ id, name, age }) => (
//     <li className={utilStyles.listItem} key={id}>
//       <span>{id}</span>--<strong>{name}</strong>--<span>{age}</span>
//     </li>
//   ))}