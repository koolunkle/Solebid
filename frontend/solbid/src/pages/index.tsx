import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Index() {

    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState("trending");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [userProfile] = useState({
        name: "김민준",
        email: "minjun.kim@email.com",
        joinDate: "2024-12-15",
        bidCount: 45,
        successfulBids: 12,
    });

    const [test, setTest] = useState<number>(0);

    React.useEffect(() => {
        fetch("/api/test")
            .then((res) => res.json())
            .then((data) => {
                setTest(data.number);
            })
            .catch((err) => {
                console.error("에러:", err);
            });
    }, []);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const profileMenu = document.getElementById("profile-menu");
            const profileButton = document.getElementById("profile-button");
            if (
                profileMenu &&
                profileButton &&
                !profileMenu.contains(event.target as Node) &&
                !profileButton.contains(event.target as Node)
            ) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const userBids = [
        {
            image:
                "https://readdy.ai/api/search-image?query=premium%20limited%20edition%20basketball%20shoes%20on%20minimal%20light%20background%20with%20professional%20lighting%2C%20high-end%20product%20photography&width=300&height=300&seq=6&orientation=squarish",
            name: "Nike Air Jordan 1",
            status: "입찰중",
            currentBid: "320,000",
            endTime: "2025-07-26",
            isHighestBidder: true,
        },
        {
            image:
                "https://readdy.ai/api/search-image?query=exclusive%20designer%20running%20shoes%20on%20minimal%20light%20background%20with%20soft%20shadows%2C%20luxury%20product%20photography&width=300&height=300&seq=7&orientation=squarish",
            name: "Adidas Yeezy 350",
            status: "낙찰 성공",
            finalPrice: "450,000",
            endTime: "2025-07-24",
            isHighestBidder: true,
        },
        {
            image:
                "https://readdy.ai/api/search-image?query=classic%20vintage%20sneakers%20on%20minimal%20light%20background%20with%20artistic%20composition%2C%20professional%20studio%20photography&width=300&height=300&seq=8&orientation=squarish",
            name: "New Balance 993",
            status: "낙찰 실패",
            finalPrice: "280,000",
            endTime: "2025-07-23",
            isHighestBidder: false,
        },
    ];
    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login attempted:", loginForm);
    };
    const heroImage =
        "https://readdy.ai/api/search-image?query=modern%20elegant%20luxury%20sneakers%20artistically%20arranged%20in%20minimal%20studio%20setting%20with%20soft%20gradient%20background%2C%20professional%20product%20photography%20with%20dramatic%20lighting%20and%20shadows&width=800&height=600&seq=1&orientation=landscape";
    const categories = [
        { name: "스니커즈", icon: "fa-shoe-prints", count: "2,431" },
        { name: "러닝화", icon: "fa-running", count: "1,523" },
        { name: "농구화", icon: "fa-basketball", count: "842" },
        { name: "캔버스화", icon: "fa-socks", count: "976" },
    ];
    const trendingProducts = [
        {
            image:
                "https://readdy.ai/api/search-image?query=premium%20white%20and%20blue%20athletic%20sneakers%20on%20minimal%20light%20background%20with%20subtle%20reflection%2C%20professional%20product%20photography&width=300&height=300&seq=2&orientation=squarish",
            name: "Nike Air Max 2025",
            price: "289,000",
            bidCount: 32,
            timeLeft: "2:14:53",
        },
        {
            image:
                "https://readdy.ai/api/search-image?query=luxury%20black%20and%20red%20sports%20sneakers%20on%20minimal%20light%20background%20with%20soft%20shadows%2C%20high-end%20product%20shot&width=300&height=300&seq=3&orientation=squarish",
            name: "Adidas Ultra Boost",
            price: "259,000",
            bidCount: 28,
            timeLeft: "1:45:21",
        },
        {
            image:
                "https://readdy.ai/api/search-image?query=premium%20gray%20and%20white%20running%20shoes%20on%20minimal%20light%20background%20with%20clean%20composition%2C%20professional%20studio%20photography&width=300&height=300&seq=4&orientation=squarish",
            name: "New Balance 990v6",
            price: "249,000",
            bidCount: 25,
            timeLeft: "3:22:15",
        },
        {
            image:
                "https://readdy.ai/api/search-image?query=trendy%20beige%20and%20white%20lifestyle%20sneakers%20on%20minimal%20light%20background%20with%20artistic%20shadows%2C%20commercial%20product%20photography&width=300&height=300&seq=5&orientation=squarish",
            name: "Converse Chuck 70",
            price: "129,000",
            bidCount: 18,
            timeLeft: "4:55:32",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-2xl font-bold text-blue-600"> {test}</h1>
                        <div className="hidden md:flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                            >
                                경매
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                            >
                                브랜드
                            </a>
                            <a
                                href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/759dac3c-1bd5-47a2-9167-c064f701c951"
                                data-readdy="true"
                                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                            >
                                랭킹
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="상품 검색"
                                    className="w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                            </div>
                            <a
                                href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/acde7361-4e73-4d38-8346-19089e428fe7"
                                data-readdy="true"
                            >
                                <button className="px-4 py-2 bg-blue-500 text-white !rounded-r-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap">
                                    검색
                                </button>
                            </a>
                        </div>

                            <button className="px-4 py-2 bg-blue-500 text-white !rounded-button hover:bg-blue-600 cursor-pointer whitespace-nowrap"
                                    onClick={() => navigate("/productRegister")}
                            >
                                경매 등록
                            </button>
                        {isLoggedIn ? (
                            <div className="relative">
                                <button
                                    id="profile-button"
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 !rounded-button hover:bg-gray-50"
                                >
                                    <i className="fas fa-user-circle text-lg"></i>
                                    <span>{userProfile.name}</span>
                                </button>
                                <div
                                    id="profile-menu"
                                    className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 z-50 ${
                                        showProfileMenu
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                    }`}
                                >
                                    <a
                                        href="#profile"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                                    >
                                        <i className="fas fa-user mr-2"></i>마이페이지
                                    </a>
                                    <a
                                        href="#settings"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                                    >
                                        <i className="fas fa-cog mr-2"></i>설정
                                    </a>
                                    <button
                                        onClick={() => setIsLoggedIn(false)}
                                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>로그아웃
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowLoginModal(true)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 !rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                            >
                                로그인
                            </button>
                        )}
                        {/* Login Modal */}
                        {showLoginModal && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                                    <button
                                        onClick={() => setShowLoginModal(false)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                        로그인
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-6">
                                        로그인하시면 경매 서비스를 이용하실 수 있습니다.
                                    </p>
                                    <form
                                        id="loginForm"
                                        onSubmit={handleLoginSubmit}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                이메일/아이디
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={loginForm.email}
                                                onChange={(e) =>
                                                    setLoginForm({ ...loginForm, email: e.target.value })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                비밀번호
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={loginForm.password}
                                                onChange={(e) =>
                                                    setLoginForm({
                                                        ...loginForm,
                                                        password: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="text-right">
                                            <a
                                                href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/58cc06ea-1143-4fbd-ad90-02b47096c84b"
                                                data-readdy="true"
                                                className="text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                비밀번호를 잊으셨나요?
                                            </a>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-blue-500 text-white !rounded-button hover:bg-blue-600 cursor-pointer whitespace-nowrap"
                                        >
                                            로그인
                                        </button>
                                        <div className="relative my-6">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          또는
                        </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-full py-3 bg-[#FEE500] text-gray-900 !rounded-button hover:bg-[#FDD800] cursor-pointer whitespace-nowrap flex items-center justify-center"
                                        >
                                            <i className="fas fa-comment mr-2"></i>
                                            카카오로 시작하기
                                        </button>
                                        <div className="text-center mt-6">
                      <span className="text-gray-600">
                        아직 회원이 아니신가요?
                      </span>
                                            <a
                                                href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/9906825a-8abd-4aef-9f47-86e5a53a5e7d"
                                                data-readdy="true"
                                                className="ml-2 text-blue-600 hover:text-blue-800"
                                            >
                                                회원가입
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        <a
                            href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/2c62d2ae-05f6-4f99-b107-a0540f815118"
                            data-readdy="true"
                        >
                            <button className="px-4 py-2 bg-gray-900 text-white !rounded-button hover:bg-gray-800 cursor-pointer whitespace-nowrap">
                                회원가입
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-gray-50 to-transparent overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">
                                신발의 가치를 <br />
                                새롭게 발견하세요
                            </h2>
                            <p className="text-lg text-gray-600">
                                한정판 스니커즈부터 클래식 모델까지,
                                <br />
                                투명한 경매를 통해 원하는 신발을 만나보세요.
                            </p>
                            <button
                                onClick={() => setShowLoginModal(true)}
                                className="px-6 py-3 bg-blue-500 text-white !rounded-button hover:bg-blue-600 cursor-pointer whitespace-nowrap"
                            >
                                지금 시작하기
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src={heroImage}
                                alt="Hero"
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">카테고리</h3>
                <div className="grid grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            onClick={() => navigate(`/productListToCategory/${category.name}`)}
                        >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900">
                                            {category.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {category.count}개의 상품
                                        </p>
                                    </div>
                                    <i
                                        className={`fas ${category.icon} text-2xl text-blue-500`}
                                    ></i>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* MyPage Section */}
            {isLoggedIn && (
                <div className="max-w-[1440px] mx-auto px-6 py-12">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-user-circle text-5xl text-blue-500"></i>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {userProfile.name}
                                        </h2>
                                        <p className="text-gray-600">{userProfile.email}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            가입일: {userProfile.joinDate}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-12">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-gray-900">
                                            {userProfile.bidCount}
                                        </p>
                                        <p className="text-sm text-gray-600">총 입찰</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-green-600">
                                            {userProfile.successfulBids}
                                        </p>
                                        <p className="text-sm text-gray-600">낙찰 성공</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-8 mb-8">
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">진행중인 입찰</p>
                                            <p className="text-2xl font-bold text-blue-600">3</p>
                                        </div>
                                        <i className="fas fa-gavel text-2xl text-blue-500"></i>
                                    </div>
                                </div>
                                <div className="bg-green-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">낙찰 완료</p>
                                            <p className="text-2xl font-bold text-green-600">12</p>
                                        </div>
                                        <i className="fas fa-check-circle text-2xl text-green-500"></i>
                                    </div>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">관심 상품</p>
                                            <p className="text-2xl font-bold text-purple-600">8</p>
                                        </div>
                                        <i className="fas fa-heart text-2xl text-purple-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        내 입찰 내역
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm bg-blue-500 text-white !rounded-button hover:bg-blue-600 whitespace-nowrap">
                                            전체보기
                                        </button>
                                        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 !rounded-button hover:bg-gray-50 whitespace-nowrap">
                                            필터
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    {userBids.map((bid, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                                        >
                                            <img
                                                src={bid.image}
                                                alt={bid.name}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-4">
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    {bid.name}
                                                </h4>
                                                <div className="mt-3 space-y-3">
                                                    <div className="flex justify-between items-center">
                            <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                    bid.status === "입찰중"
                                        ? "bg-blue-100 text-blue-600"
                                        : bid.status === "낙찰 성공"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                }`}
                            >
                              {bid.status}
                            </span>
                                                        {bid.isHighestBidder && bid.status === "입찰중" && (
                                                            <span className="text-sm text-green-600">
                                <i className="fas fa-crown mr-1"></i>최고 입찰
                              </span>
                                                        )}
                                                    </div>
                                                    <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {bid.status === "입찰중"
                                  ? "현재 입찰가"
                                  : "최종 낙찰가"}
                            </span>
                                                        <span className="font-semibold text-gray-900">
                              ₩{bid.currentBid || bid.finalPrice}
                            </span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                                        <span>마감일</span>
                                                        <span>{bid.endTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Products */}
            <div className="max-w-[1440px] mx-auto px-6 pb-12">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                        실시간 인기 경매
                    </h3>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setCurrentTab("trending")}
                            className={`px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap ${
                                currentTab === "trending"
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-gray-600"
                            }`}
                        >
                            인기순
                        </button>
                        <button
                            onClick={() => setCurrentTab("ending")}
                            className={`px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap ${
                                currentTab === "ending"
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-gray-600"
                            }`}
                        >
                            마감임박
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {trendingProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
                        >
                            <a
                                href="https://readdy.ai/home/8c14b666-4886-429c-ad07-c16c2cd22c03/ad0cf9eb-0d08-4f31-aba6-a87043edcd2e"
                                data-readdy="true"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                            </a>
                            <div className="p-4">
                                <h4 className="text-lg font-medium text-gray-900">
                                    {product.name}
                                </h4>
                                <div className="mt-2 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">현재가</p>
                                        <p className="text-lg font-semibold text-blue-600">
                                            ₩{product.price}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">
                                            {product.bidCount}명 참여
                                        </p>
                                        <p className="text-sm font-medium text-red-500">
                                            {product.timeLeft} 남음
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* User Profile Section */}
                <div className="max-w-[1440px] mx-auto px-6 py-12">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-user-circle text-4xl text-blue-500"></i>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {userProfile.name}
                                    </h2>
                                    <p className="text-gray-600">{userProfile.email}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        가입일: {userProfile.joinDate}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-8">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">
                                        {userProfile.bidCount}
                                    </p>
                                    <p className="text-sm text-gray-600">총 입찰</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">
                                        {userProfile.successfulBids}
                                    </p>
                                    <p className="text-sm text-gray-600">낙찰 성공</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t pt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                내 입찰 내역
                            </h3>
                            <div className="grid grid-cols-3 gap-6">
                                {userBids.map((bid, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border rounded-lg overflow-hidden"
                                    >
                                        <img
                                            src={bid.image}
                                            alt={bid.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="text-lg font-medium text-gray-900">
                                                {bid.name}
                                            </h4>
                                            <div className="mt-2 space-y-2">
                                                <div className="flex justify-between items-center">
                          <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                  bid.status === "입찰중"
                                      ? "bg-blue-100 text-blue-600"
                                      : bid.status === "낙찰 성공"
                                          ? "bg-green-100 text-green-600"
                                          : "bg-red-100 text-red-600"
                              }`}
                          >
                            {bid.status}
                          </span>
                                                    <span className="text-sm text-gray-500">
                            {bid.endTime}
                          </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {bid.status === "입찰중"
                                ? "현재 입찰가"
                                : "최종 낙찰가"}
                          </span>
                                                    <span className="font-semibold text-gray-900">
                            ₩{bid.currentBid || bid.finalPrice}
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index