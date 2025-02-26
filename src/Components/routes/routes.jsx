import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import InPlay from '../InPlay/InPlay';
import MainLayout from '../MainLayout/MainLayout';
import MultiMarkets from '../MultiMarkets/MultiMarkets';
import Cricket from '../Cricket/Cricket';
import Soccer from '../Soccer/Soccer';
import Tennis from '../Tennis/Tennis';
import Sports from '../Sports/Sports';
import WommenLeague from '../WomenLeague/WommenLeague';
import MyAccount from '../MyAccount/MyAccount';
import MyAccountPhoneDevice from '../MyAccountPhoneDevice/MyAccountPhoneDevice';
import Result from '../Result/Result';
import BalanceTransfer from '../BalanceTransfer/BalanceTransfer';


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
    element:<Login></Login>
  }

 
]);

export default router;
