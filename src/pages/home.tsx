import Layout from "../components/Layout";
import Header from "../components/Home/Header";
import Welcome from "../components/Home/Welcome";
import Steps from "../components/Home/Steps";

import { useAppDispatch } from "../app/redux/hooks";
import { closeModal } from "../app/redux/slices/modal";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <main className="text-gray-200 mb-8 max-w-7xl mx-auto w-full pt-[136px] lg:pt-24 px-3 xl:px-0">
        <Header />
        <button onClick={() => dispatch(closeModal())}>disapth</button>
        <Steps />
        <Welcome />
      </main>
    </Layout>
  );
};

export default Home;
