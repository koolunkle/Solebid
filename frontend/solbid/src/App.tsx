import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Test" element={<Test />} />
                {/* 라우터 페이지 이곳에 계속 추가 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;