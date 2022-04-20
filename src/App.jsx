import './css/App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Completed, NotFound, Todo } from './pages';
import { useSelector } from 'react-redux';
import { getTasks } from './components/Task/data';
// import { ReduxPage } from './pages/ReduxPage';



function App() {

    // let tasks = useSelector(state => state.tasks);
    // console.log("Tasks: ", tasks);
    // tasks = getTasks();
    // console.log("Tasks: ", tasks);

    // console.log(window.location.pathname);
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Todo />} title="Todo" />
                    <Route path="/completed" element={<Completed />} />
                    <Route path="*" element={<NotFound />} />

                    {/* <Route path="/redux" element={<ReduxPage />} /> */}
                </Routes>

                {/* <Route path="/" element{<Compl} */}
                <Footer />

            </BrowserRouter>

        </>
    );
}

export default App;
