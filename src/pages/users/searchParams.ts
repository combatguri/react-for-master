import { useEffect } from 'react';
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';

export default function () {
    const params = useParams();
    const ctx = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log('searchParams', searchParams);
        console.log(searchParams.toString());
        console.log('searchParams.get(key)', searchParams.get('username'));
        console.log('searchParams.getAll(key)', searchParams.getAll('skill'));
        console.log('searchParams.has(key)', searchParams.has('username'));
        console.log('searchParams.delete(key)', searchParams.delete('age'));
        console.log('searchParams.set(key, value)', searchParams.set('email', 'combatguri'));
        console.log('searchParams.toString()', searchParams.toString());
        console.log(searchParams);

        setSearchParams(searchParams);
    }, []);

    return searchParams;
}
