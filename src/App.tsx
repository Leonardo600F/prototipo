import './App-style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContainer } from './App-style';
import Home from './pages/home/home';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MainContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </MainContainer>
            </div>
        </BrowserRouter>
    );
}