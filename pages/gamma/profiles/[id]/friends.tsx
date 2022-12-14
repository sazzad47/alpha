import { NextPage } from "next";
import Layout from "../../../../components/gamma/Layout";
import Friends from "../../../../components/gamma/profile/members";


const Page: NextPage = () => {
  return (
    <Layout>
       <Friends/>
    </Layout>
  );
};

export default Page;
