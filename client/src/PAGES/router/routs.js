import Headquarters from "../Headquarters";
import PsychoHelp from "../PsychoHelp";
import PravoHelp from "../PravoHelp";
import Document from "../Document";
import Partners from "../Partners";
import Register from "../Register";
import People from "../People";
import Routes from "../Routes";
import Login from "../Login";
import Main from "../Main";
import Help from "../Help";
import Join from "../Join";
import FAQ from "../FAQ";

export const publicRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '/document', element: <Document />, exact: true},
    {path: '/faq', element: <FAQ />, exact: true},
    {path: '/shtabi', element: <Headquarters /> , exact: true},
    {path: '/dopomoga', element: <Help /> , exact: true},
    {path: '/doluchitis', element: <Join /> , exact: true},
    {path: '/partner', element: <Partners /> , exact: true},
    {path: '/people', element: <People /> , exact: true},
    {path: '/pravova-dopomoga', element: <PravoHelp /> , exact: true},
    {path: '/psycholog-dopomoga', element: <PsychoHelp /> , exact: true},
    {path: '/registration', element: <Register /> , exact: true},
    {path: '/:login', element: <Login /> , exact: true},
    {path: '/shliahi-evakuaciy', element: <Routes /> , exact: true}
]