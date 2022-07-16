import {Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {DefaultLayout} from "./layouts/DefaultLayout";
import {About} from "./pages/About";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    )
}