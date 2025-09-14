import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Aksii from "./components/Aksii/Aksii";
import Hot from "./components/Hot/Hot";
import Cold from "./components/Vipech/Vipech";
import Ocomp from "./components/Ocomp/Ocomp";
import Deserts from "./components/Deserts/Deserts";
import Otzuv from "./components/Otzuv/Otzuv";
import Gorbluda from "./components/Gorachee/Gorbluda";
import Supi from "./components/Gorachee/Supi";
import Hinkali from "./components/Gorachee/Hinkali";
import Salati from "./components/Coldblu/Salati";
import Zakuski from "./components/Coldblu/Zakuski";
import Buter from "./components/Coldblu/Buter";
import Contact from "./components/Contact/Contact";
import Vipech from "./components/Vipech/Vipech";
import Napitki from "./components/Napitki/Napitki";


export const mypoland = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'Aksii',
                element: <Aksii />
            },
            {
                path: 'Hot',
                element: <Hot />
            },
            
            {
                path:'Cold',
                element:<Cold/>
            },
            
            {
                path:'Vipechka',
                element:<Ocomp/>
             },
             
            {
                path:'Deserts',
                element:<Deserts/>
            },
            {
                path:'Otzyv',
                element:<Otzuv/>
            },
             {
                path:'Gorbluda',
                element:<Gorbluda/>
            },
             {
                path:'Supi',
                element:<Supi/>
            },
             {
                path:'Hinkali',
                element:<Hinkali/>
            },
            {
                path:'Salati',
                element:<Salati/>
            },
             {
                path:'Zakuski',
                element:<Zakuski/>
            },
             {
                path:'Buter',
                element:<Buter/>
            },
            {
                path:'Contact',
                element:<Contact/>
            },
             {
                path:'Vipech',
                element:<Vipech/>
            },
            
             {
                path:'Napitki',
                element:<Napitki/>
            },

            
            

            
            


            {
                path: 'cardPage',
                element: <Cart />
            }

        ]
    }
])