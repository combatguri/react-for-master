import { useOutletContext } from "react-router-dom";

interface HomeOutletContext {
  authName: string;
}

function Home() {
  const ctx = useOutletContext<HomeOutletContext>();
  console.log("ctx in Home", ctx);

  return <div>Home</div>;
}

export default Home;
