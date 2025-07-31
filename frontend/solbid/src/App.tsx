import {  Routes, Route } from 'react-router-dom';
import Index from './pages';
import ProductRegister from "./pages/productRegister";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/productRegister" element={<ProductRegister />} />
                {/* 라우터 페이지 이곳에 계속 추가 */}
            </Routes>
    );
}

export default App;