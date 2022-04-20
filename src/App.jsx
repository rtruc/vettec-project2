import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Completed, NotFound, Todo, All } from './pages';

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                
                <Routes>
                    <Route path="/"          element={<Todo      />} />
                    <Route path="/completed" element={<Completed />} />
                    <Route path="/all"       element={<All />} />
                    <Route path="*"          element={<NotFound  />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
