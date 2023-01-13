import { NextPage } from "next";
import Delta from "../../components/delta/home";
import Layout from "../../components/delta/Layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <Delta />
    </Layout>
  );
};

export default Page;
