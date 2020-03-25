import Head from "next/head";
import { ParcelStatus } from "../components/ParcelStatus";

const Home = () => (
  <div className="container">
    <Head>
      <title>Is Parcel 2 Out Yet?</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Is Parcel 2 Out Yet?</h1>

      <p className="answer">
        <ParcelStatus />
      </p>
    </main>

    <footer>
      Made with &lt;3 by&nbsp;
      <a href="https://wes.dev/" target="_blank">
        Wes
      </a>
      , powered by
      <a href="https://wes.dev/" target="_blank">
        <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 60px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 3rem;
        font-weight: normal;
      }

      .title,
      .answer {
        text-align: center;
      }

      .answer {
        line-height: 1.5;
        font-size: 5rem;
        font-weight: bold;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
