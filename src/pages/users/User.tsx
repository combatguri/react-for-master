import React, { useEffect } from 'react';
import { Outlet, useOutletContext, useParams, useSearchParams } from 'react-router-dom';

function User() {
    const params = useParams();
    console.log('params in Users', params);

    const ctx = useOutletContext();
    console.log('ctx in Users', ctx);

    // ?username=chad&age=20&gender=male&skill=js&skill=react
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

    return (
        <div>
            <div>User</div>
            <Outlet />
        </div>
    );
}

export default User;
