"use client"

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Card from '../shared/Card';

// 定义飘落动画的CSS
const fallAnimation = `
@keyframes fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) translateX(100px) rotate(90deg);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 8s linear infinite;
}
`;

const FallingRibbon = ({ delay, color, index }) => {
    const [position, setPosition] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // 随机生成初始位置
        setPosition(Math.random() * 100);
        // 延迟显示彩带
        const timer = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div
            className="absolute h-10 w-2 opacity-0 animate-fall"
            style={{
                backgroundColor: color,
                left: `${position}%`, // 改用left而不是right以获得更好的分布
                top: "-10px",
                animationDelay: `${delay}s`,
            }}
        />
    );
};

const HomeSection = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const [showRibbons, setShowRibbons] = useState(false);
    const ribbonColors = ['#FF69B4', '#87CEEB', '#DDA0DD', '#98FB98', '#FFB6C1'];

    useEffect(() => {
        // 按顺序显示各个元素
        const ribbonsTimer = setTimeout(() => setShowRibbons(true), 500);
        const messageTimer = setTimeout(() => setShowMessage(true), 1000);
        const heartsTimer = setTimeout(() => setShowHearts(true), 2000);

        return () => {
            clearTimeout(ribbonsTimer);
            clearTimeout(messageTimer);
            clearTimeout(heartsTimer);
        };
    }, []);

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* 注入动画CSS */}
            <style>{fallAnimation}</style>

            {/* Falling Ribbons */}
            {showRibbons && (
                <div className="fixed inset-0 pointer-events-none">
                    {[...Array(100)].map((_, i) => (
                        <FallingRibbon
                            key={i}
                            index={i}
                            delay={i * 0.3}
                            color={ribbonColors[i % ribbonColors.length]}
                        />
                    ))}
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <Card className="transform hover:scale-105 transition-all duration-500 bg-opacity-90">
                    <div
                        className={`text-center transition-opacity duration-1000 ${
                            showMessage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <h1 className="text-4xl font-bold text-purple-800 mb-6">
                            Happy 20th Birthday! 🎂
                        </h1>
                        <p className="text-xl text-purple-600 mb-8">
                            祝yzl20岁生日快乐捏~(￣▽￣)~*
                        </p>
                    </div>

                    <div
                        className={`flex justify-center gap-4 transition-all duration-1000 ${
                            showHearts ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                    >
                        {[...Array(3)].map((_, i) => (
                            <Heart
                                key={i}
                                className={`text-pink-500 w-8 h-8 animate-bounce`}
                                style={{
                                    animationDelay: `${i * 200}ms`,
                                    animationDuration: '2s'
                                }}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default HomeSection;