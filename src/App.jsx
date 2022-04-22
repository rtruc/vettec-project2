import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Completed, Todo, All } from './pages';
import { createContext, useState } from 'react';
import { juhTheme } from './util/themes';
import ThemeContext, {themes} from './util/themes';

// CONTEXT
// export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState(themes.juh);

    // CONTEXT
    // console.log("Context: ", ThemeContext.Provider);
    // console.log("Context: ", ThemeContext.Consumer.value);

    return (
        <>
            <BrowserRouter>

                {/* CONTEXT */}
                <ThemeContext.Provider value={theme}>
                    <NavBar />

                    <Routes>
                        <Route path="/"          element={<Todo      />} />
                        <Route path="/completed" element={<Completed />} />
                        <Route path="/all"       element={<All       />} />
                        <Route path="*"          element={<Navigate  to="/" replace />} />
                    </Routes>

                    <Footer />
                </ThemeContext.Provider>

            </BrowserRouter>
        </>
    );
}

export default App;
