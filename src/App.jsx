import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Completed, Todo, All } from './pages';

import Theme from './util/theme';
// import styled from 'styled-components';


function App() {

    return (
        <>
            <BrowserRouter>

                {/* <Theme> */}
                    <NavBar />

                    <Routes>
                        <Route path="/"          element={<Todo      />} />
                        <Route path="/completed" element={<Completed />} />
                        <Route path="/all"       element={<All       />} />
                        <Route path="*"          element={<Navigate  to="/" replace />} />
                    </Routes>

                    <Footer />

                {/* </Theme> */}

            </BrowserRouter>
        </>
    );
}

export default App;
