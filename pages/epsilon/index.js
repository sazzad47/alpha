import Epsilon from "../../components/epsilon/Home";
import { StoreProvider } from "../../components/epsilon/utils/ContextApi";


const Page = () => {

  return (
    <StoreProvider>
      <Epsilon />
    </StoreProvider>
  );
};

export default Page;
