import {Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {DefaultLayout} from "./layouts/DefaultLayout";
import {About} from "./pages/About";
import {Studies} from "./pages/Studies";
import {IsSEOImportant} from "./pages/IsSEOImportant";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/studies" element={<Studies/>}/>
                <Route path='/studies/is-seo-important' element={<IsSEOImportant/>}/>
            </Route>
        </Routes>
    )
}