import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../../components/Header';
import Header from '../../components/Header';

function Index() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Index;
