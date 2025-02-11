'use client';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { AppProvider, useAppContext } from "@/app/utils/AppContext";
import { Db, Server } from '@/app/utils/db'
import { useState } from 'react';

const SSOLogin = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSSOLogin = async (provider: string) => {
    setIsSpinning(true);
    const redirectUri = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    window.location.href = `https://metaloot-cloud-d4ec.shuttle.app/v1/api/player/oauth/${provider}?redirect_uri=${redirectUri}/signup/oauth/callback`;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src="/signup.mp4" type="video/mp4" />
      </video>

      <div className="text-center space-y-8 relative z-10">
        {/* Logo Circle with Glow Effect */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-black border border-white/10 rounded-full 
                        flex items-center justify-center relative z-10">
            <img 
              src="/appleTransparent.png" 
              alt="MetaLoot Logo" 
              className={`w-20 h-20 ${isSpinning ? 'animate-spin' : ''}`} 
            />
          </div>
          {/* Glowing effect behind the circle */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0CC0DF]/20 to-[#14F195]/20 
                        blur-xl rounded-full transform scale-150 -z-0"></div>
        </div>

        <div className="space-y-2">
          <h2 className="text-white/60 text-sm tracking-wider">Join the waitlist</h2>
          <h1 className="text-white text-5xl font-light tracking-wider">Player 1</h1>
          <p className="text-white/40 text-xl">Secure Authentication</p>
        </div>

        <div className="space-y-4 w-80">
          <button
            onClick={() => handleSSOLogin('google')}
            className="w-full px-6 py-3 bg-black/50 border border-white/10 rounded-lg
                     text-white/60 hover:text-white hover:border-white/30 
                     transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          <button
            onClick={() => handleSSOLogin('apple')}
            className="w-full px-6 py-3 bg-black/50 border border-white/10 rounded-lg
                     text-white/60 hover:text-white hover:border-white/30 
                     transition-all duration-300 flex items-center justify-center gap-3"
          >
            <BsApple className="text-xl" />
            <span>Continue with Apple</span>
          </button>
        </div>

        <div className="text-sm text-white/40 mt-8">
          By proceeding, you agree to our{' '}
          <span className="text-white/60 hover:text-white cursor-pointer transition-colors">Terms</span>{' '}
          &{' '}
          <span className="text-white/60 hover:text-white cursor-pointer transition-colors">Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default SSOLogin;
