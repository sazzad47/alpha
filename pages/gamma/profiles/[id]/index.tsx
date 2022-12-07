import { NextPage } from 'next';
import Posts from '../../../../components/gamma/profile/Posts'
import Layout from "../../../../components/gamma/Layout";


const Page: NextPage = () => {
  return (
    <Layout>
        <Posts />
    </Layout>
  );
};

export default Page;
