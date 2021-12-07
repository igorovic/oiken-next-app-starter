import { Counter } from "components/Counter";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quickstart</title>
      </Head>

      <main className="container">
        <h1>Start writing your app</h1>
        <h2>This is a quickstart template</h2>
        <p>This body should have euclid font</p>
        <Counter />
      </main>
    </div>
  );
};

export default Home;
