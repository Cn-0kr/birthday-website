'use client';
import { useEffect } from 'react';
import styles from './BirthdayAnimation.module.css';
import gsap from 'gsap';

const BirthdayAnimation = ({ onComplete }) => {
    useEffect(() => {
        // 处理键盘事件 - 按空格直接结束动画
        const handleKeyPress = (e) => {
            if (e.code === 'Space' && onComplete) {
                onComplete();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        // 初始化动画
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        console.log('Animation timeline created');

        // 确保元素存在
        const container = document.querySelector(`.${styles.container}`);
        if (!container) {
            console.error('Container not found');
            return;
        }

        // 立即设置容器可见
        gsap.set(container, { visibility: 'visible' });

        // 文本分割
        const textBoxChars = document.getElementsByClassName(styles.textBox)[0];
        const hbd = document.getElementsByClassName(styles.wishHbd)[0];

        if (textBoxChars && hbd) {
            textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
                .split("")
                .join("</span><span>")}</span>`;

            hbd.innerHTML = `<span>${hbd.innerHTML
                .split("")
                .join("</span><span>")}</span>`;
        }

        // 定义动画参数
        const ideaTextTrans = {
            opacity: 0,
            y: -20,
            rotationX: 5,
            skewX: "15deg"
        };

        const ideaTextTransLeave = {
            opacity: 0,
            y: 20,
            rotationY: 5,
            skewX: "-15deg"
        };

        // 动画序列
        tl
            .to(`.${styles.container}`, 0.1, {
                visibility: "visible"
            })
            .from(`.${styles.one}`, 0.7, {
                opacity: 0,
                y: 10
            })
            // ... 其余动画序列保持不变 ...
            .from(`.${styles.hat}`, 0.5, {
                x: -100,
                y: 350,
                rotation: -180,
                opacity: 0
            });

        // 清理函数
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (tl) tl.kill();
        };
    }, [onComplete]); // 添加onComplete作为依赖项

    return (
        <div className={styles.container}>
            {/* JSX内容保持不变 */}
        </div>
    );
};

export default BirthdayAnimation;