'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ThankYou = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [username, setUsername] = useState('1');

    useEffect(() => {
        const userId = searchParams.get('user_id');
        setUsername(userId || '1');
        // if (!userId) {
        //     router.push('/');
        // }
        // You can add additional logic here to fetch user data using the user_id if needed
    }, [searchParams, router]);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/signup.mp4" type="video/mp4" />
            </video>

            <div className="text-center space-y-8 relative z-10">
                {/* Logo Circle with Glow Effect */}
                <div className="relative">
                    <div className="w-32 h-32 mx-auto bg-black border border-white/10 rounded-full 
                        flex items-center justify-center relative z-10">
                        <img
                            src="/transLogo.png"
                            alt="MetaLoot Logo"
                            className="w-20 h-20"
                        />
                    </div>
                    {/* Glowing effect behind the circle */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0CC0DF]/20 to-[#14F195]/20 
                        blur-xl rounded-full transform scale-150 -z-0"></div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-white/60 text-sm tracking-wider">Welcome to MetaLoot</h2>
                    <h1 className="text-white text-5xl font-light tracking-wider">Player {username}</h1>
                    <p className="text-white/40 text-xl">Your account has been created successfully</p>
                    <p className="text-white/40 text-sm">
                        Beta version is available soon. We will notify you when it's ready.
                    </p>
                </div>

                <div className="mt-8">
                    <button
                        onClick={() => router.push('/')}
                        className="w-80 px-6 py-3 bg-black/50 border border-white/10 rounded-lg
                            text-white/60 hover:text-white hover:border-white/30 
                            transition-all duration-300"
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
