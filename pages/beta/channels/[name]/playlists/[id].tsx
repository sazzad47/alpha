import { NextPage } from "next";
import Playlist from "../../../../../components/beta/playlists/Layout";
import Layout from "../../../../../components/beta/Layout";


const Page: NextPage = () => {
  return (
    <Layout>
        <Playlist />
    </Layout>
  );
};

export default Page;
