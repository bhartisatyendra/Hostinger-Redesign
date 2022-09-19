import Head from "next/head";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Choose Hostinger and Host Your Site for Only ₹129.00/mo</title>
        <meta
          name="description"
          content="Go online with Hostinger, make your perfect website today. Check our plans and their features. We have all you need for online success."
        />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
