import {  Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import ProductRegister from "./pages/productRegister";
import ProductListToCategory from "./pages/productListToCategory.tsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/productRegister" element={<ProductRegister />} />
                <Route path="/productListToCategory/:categoryName" element={<ProductListToCategory />} />

                {/* 라우터 페이지 이곳에 계속 추가 */}
            </Routes>
    );
}

export default App;