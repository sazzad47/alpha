import { NextPage } from "next";
import Home from "../../../components/delta/rooms/home";
import Layout from "../../../components/delta/Layout";

const Page: NextPage = () => {
  return (
      <Layout>
        <Home />
      </Layout>
  );
};

export default Page;
