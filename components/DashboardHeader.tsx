'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GameData } from "@/app/utils/AppContext"
import { useAppContext } from '@/app/utils/AppContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DashboardHeader() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => router.push('/')}
                    >
                        <Image 
                            src="/transLogo.png" 
                            alt="Game Platform Logo" 
                            width={40} 
                            height={40} 
                            className="mr-2"
                        />
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            METALOOT
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                            onClick={() => router.push('/about')}
                        >
                            About
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                        >
                            Games
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                        >
                            Market
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                            onClick={() => router.push('/contact')}
                        >
                            Contact
                        </motion.button>
                        
                        <div className="bg-white/5 h-8 w-px"></div>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium shadow-lg shadow-primary/20"
                            onClick={() => router.push('/signup')}
                        >
                            Join Waitlist
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            className="text-white p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-base-300/90 backdrop-blur-lg border-t border-white/5"
                >
                    <div className="px-4 py-5 space-y-4">
                        <button
                            className="block w-full text-left px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                            onClick={() => {
                                router.push('/about');
                                setMenuOpen(false);
                            }}
                        >
                            About
                        </button>
                        
                        <button
                            className="block w-full text-left px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Games
                        </button>
                        
                        <button
                            className="block w-full text-left px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Market
                        </button>
                        
                        <button
                            className="block w-full text-left px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                            onClick={() => {
                                router.push('/contact');
                                setMenuOpen(false);
                            }}
                        >
                            Contact
                        </button>
                        
                        <button
                            className="block w-full px-3 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium"
                            onClick={() => {
                                router.push('/signup');
                                setMenuOpen(false);
                            }}
                        >
                            Join Waitlist
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
