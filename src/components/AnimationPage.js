'use client';

import BirthdayAnimation from '@/components/BirthdayAnimation';

export default function AnimationPage() {
    return (
        <div className="min-h-screen">
            <BirthdayAnimation onComplete={() => console.log('Animation completed')} />
        </div>
    );
}