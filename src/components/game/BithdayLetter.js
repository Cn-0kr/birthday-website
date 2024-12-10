"use client"

const BirthdayLetter = ({ score, onClose }) => {
    const wish = {
        title: "恭喜口牙！",
        content: `哈哈哈哈哈，不知道设计的是不是难了一点，
    要接${score}个蛋糕呢！这么无聊的小游戏还能打出彩蛋，你是这个👍（
    好啦，其实我也不知道要说些什么...也许这里应该煽煽情的，但是我实在不太会写🥲。仅仅祝生日快乐又太笼统，天天进步那些词的话又太空洞...思绪流转，我就决定从最近的事开始说起吧：
    祝你接下来不会再当出气筒，少听人抱怨（什；
    祝你阿语越学越好，以后直接去给主席当翻译；
    祝你接下来，呃，少带眼镜不再近视！
    总而言之，生日快乐！`,
        from: "0kr"
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-lg bg-[#FFF8F0] p-6 rounded-xl shadow-xl transform transition-all">
                {/* 装饰元素 */}
                <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#FF9B50] rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#FF9B50] rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#FF9B50] rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#FF9B50] rounded-br-lg" />

                <div className="relative z-10 px-6">
                    {/* 标题 */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-medium text-[#FF9B50] mb-1">
                            {wish.title}
                        </h2>
                    </div>

                    {/* 分隔线 */}
                    <div className="flex items-center justify-center my-4">
                        <div className="h-px bg-[#FFB072] w-16" />
                        <span className="mx-3 text-[#FF9B50]">✦</span>
                        <div className="h-px bg-[#FFB072] w-16" />
                    </div>

                    {/* 祝福内容 */}
                    <div className="bg-white/50 backdrop-blur-sm p-5 rounded-lg shadow-sm">
                        <p className="text-[#E25E3E] whitespace-pre-line leading-relaxed">
                            {wish.content}
                        </p>
                        <p className="text-right text-[#FF9B50] font-medium mt-4">
                            —— {wish.from}
                        </p>
                    </div>

                    {/* 关闭按钮 */}
                    <div className="text-center mt-6">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-[#FF9B50] text-white rounded-full hover:bg-[#E25E3E] transition-colors duration-300"
                        >
                            收下祝福
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BirthdayLetter;