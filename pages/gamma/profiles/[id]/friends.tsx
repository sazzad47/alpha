import { NextPage } from "next";
import Layout from "../../../../components/gamma/Layout";
import Friends from "../../../../components/gamma/profile/Friends";


const Page: NextPage = () => {
  return (
    <Layout>
       <Friends/>
    </Layout>
  );
};

export default Page;
