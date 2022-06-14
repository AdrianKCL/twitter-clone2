import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
