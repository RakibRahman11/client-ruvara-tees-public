import React from 'react';
import DashboardHome from './DashboardHome/DashboardHome';
import DashboardNav from './DashboardNav/DashboardNav';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <DashboardHome></DashboardHome>
        </div>
    );
};

export default Dashboard;