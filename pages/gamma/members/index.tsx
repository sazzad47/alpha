import { NextPage } from "next";
import Friends from "../../../components/gamma/members";
import Layout from "../../../components/gamma/Layout";


const Page: NextPage = () => {
  return (
    <Layout>
        <Friends />
    </Layout>
  );
};

export default Page;
