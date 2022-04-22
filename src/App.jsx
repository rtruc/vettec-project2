import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Completed, Todo, All } from './pages';


function App() {

    return (
        <>
            <BrowserRouter>

                    <NavBar />

                    <Routes>
                        <Route path="/vettec-project2/"          element={<Todo      />} />
                        <Route path="/vettec-project2/completed" element={<Completed />} />
                        <Route path="/vettec-project2/all"       element={<All       />} />
                        <Route path="*"          element={<Navigate  to="/" replace />} />
                    </Routes>

                    <Footer />

            </BrowserRouter>
        </>
    );
}

export default App;
