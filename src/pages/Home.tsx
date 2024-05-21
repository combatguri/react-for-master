import { useOutletContext } from 'react-router-dom';

interface HomeOutletContext {
    authName: string;
}

function Home() {
    const ctx = useOutletContext<HomeOutletContext>();
    console.log('ctx in Home', ctx);

    return <div>Home 1</div>;
}

export default Home;
