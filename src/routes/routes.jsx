import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import InPlay from '../Pages/InPlay/InPlay';
import MultiMarkets from '../Pages/MultiMarket/MultiMarkets';
import Cricket from '../Pages/Cricket/Cricket';
import Soccer from '../Pages/Soccer/Soccer';
import Tennis from '../Pages/Tennis/Tennis';
import Sports from '../Pages/Sports/Sports';
import WommenLeague from '../Pages/WomenLeague/WomenLeague';
import MyAccount from '../Pages/My Acoount/My Account';
import MyAccountPhoneDevice from '../Pages/MyAccountPhoneDevice/MyAccountPhoneDevice';
import Result from '../Pages/Resukt/Result';
import BalanceTransfer from '../Pages/BalanceTransfer/BalanceTransfer';
import MainLayout from '../Layout/MainLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      
      
      { path: '/', element: <Home /> },
      { path: '/inplay', element: <InPlay /> },
      { path: '/multimarket', element: <MultiMarkets /> },
      { path: '/cricket', element: <Cricket /> },
      { path: '/soccer', element: <Soccer /> },
      { path: '/tennis', element: <Tennis /> },
      { path: '/sports', element: <Sports /> },
      { path: '/womenleague', element: <WommenLeague /> },
      { path: '/myaccount', element: <MyAccount /> },
      { path: '/myaccountphone', element: <MyAccountPhoneDevice /> },
      { path: '/result', element: <Result /> },
      { path: '/balancetransfer', element: <BalanceTransfer /> },

      
     
      


    ],
  },
  {
    path:'/login',
    element:<Login/>
  }

 
]);

export default router;
