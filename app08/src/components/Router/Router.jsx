import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage, ErrorPage, DetailsPage} from '../../Pages';

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/details/:id" element={<DetailsPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

