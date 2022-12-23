import { NextPage } from "next";
import Delta from "../../components/delta/Home";
import { StoreProvider } from "../../components/delta/context/store";


const Page: NextPage = () => {
  return (
    <StoreProvider>
      <Delta />
    </StoreProvider>
  );
};

export default Page;
