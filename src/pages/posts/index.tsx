import Head from "next/head";

import styles from "../../styles/posts.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>asdasdasd</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              ad?
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>asdasdasd</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              ad?
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>asdasdasd</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              ad?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
