import Button from "../components/Button";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="text-gray-200 px-16 grid grid-col-1 md:grid-col-2 ">
        <section className="">
          <div>
            <h1>Discover and connect with</h1>
            <h1>fellow pet lovers here at</h1>
            <h1>Animal.Is</h1>
          </div>
          <Button>register</Button>
        </section>
        <div></div>
      </main>
    </Layout>
  );
};

export default Home;
