'use client'

import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { motion, AnimatePresence, VariantLabels, TargetAndTransition, AnimationControls } from 'framer-motion'
import DashboardHeader from '../components/DashboardHeader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const GAME_DATA = [
  {
    id: '1',
    title: 'Cosmic Conquest',
    genre: 'Strategy',
    description: 'Command galactic fleets in an epic space battle for universal domination.',
    image: '/step1.png',
    platforms: ['Web', 'Mobile', 'Desktop'],
    playerCount: '100K+',
    releaseDate: 'Coming Soon'
  },
  {
    id: '2',
    title: 'Neon Warriors',
    genre: 'Action RPG',
    description: 'Battle in a cyberpunk world where your NFTs determine your characters abilities.',
    image: '/step2.jpg',
    platforms: ['Web', 'Desktop'],
    playerCount: '50K+',
    releaseDate: 'Live Beta'
  },
  {
    id: '3',
    title: 'Mystic Realms',
    genre: 'MMORPG',
    description: 'Explore vast fantasy worlds and earn real rewards through epic quests.',
    image: '/step3.png',
    platforms: ['Web', 'Mobile'],
    playerCount: '75K+',
    releaseDate: 'Q3 2023'
  }
]

export default function GameLandingPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeGame, setActiveGame] = useState(0)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const gamesRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const scrollToSection = (ref: MutableRefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" 
    }
  }

  return (
    <main className="bg-base-100 min-h-screen relative overflow-hidden">
      <DashboardHeader />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10"></div>
          <video
            key={isMobile ? "mobile" : "desktop"}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={isMobile ? "/mobileHero.mp4" : "/hero.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        {/* <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1]"
            >
              PLAY. EARN. CONQUER.
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              The next generation of blockchain gaming is here. Own your assets, compete globally, and earn real rewards.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection(gamesRef as unknown as MutableRefObject<HTMLElement>)}
              >
                Explore Games
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-white/30 btn-lg backdrop-blur-sm"
                onClick={() => router.push('/signup')}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          </motion.div>
        </div> */}

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(statsRef as unknown as MutableRefObject<HTMLElement>)}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-base-300/50 to-base-300/20 backdrop-blur-sm border border-white/5">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">$1.2M+</h3>
              <p className="text-white/70">Total Rewards Distributed</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-base-300/50 to-base-300/20 backdrop-blur-sm border border-white/5">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">250K+</h3>
              <p className="text-white/70">Active Players</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-base-300/50 to-base-300/20 backdrop-blur-sm border border-white/5">
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</h3>
              <p className="text-white/70">Game Titles</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-base-100 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Gaming Experience</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">Combining cutting-edge blockchain technology with immersive gameplay to create experiences that reward players like never before.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              className="p-6 rounded-xl bg-base-200/50 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V21M12 21H7M12 21H17M17 6H17.01M12.5 3.5L12 3L11.5 3.5L12 4L12.5 3.5ZM4 6C4 7.79131 4.26925 9.42855 5.58469 10.7439C6.79675 11.956 8.69071 13.0049 12.0001 16.0098C15.3094 13.0049 17.2034 11.956 18.4154 10.7439C19.7308 9.42855 20 7.79131 20 6C20 3.79086 18.2091 2 16 2C14.9303 2 13.9493 2.40182 13.1679 3.05177C12.8754 3.26663 12.6961 3.47085 12.5 3.73496C12.3039 3.47084 12.1246 3.26663 11.8321 3.05176C11.0507 2.40182 10.0697 2 9 2C6.79086 2 5 3.79086 5 6L4 6Z" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">True Ownership</h3>
              <p className="text-white/70">Own your in-game assets as NFTs and trade them freely on the marketplace.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="p-6 rounded-xl bg-base-200/50 backdrop-blur-sm border border-white/5 hover:border-secondary/20 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9999 8L11.9999 12.5L14.4999 15" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Play-to-Earn</h3>
              <p className="text-white/70">Compete in tournaments and daily challenges to earn cryptocurrency rewards.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="p-6 rounded-xl bg-base-200/50 backdrop-blur-sm border border-white/5 hover:border-accent/20 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5M13 5V3.6C13 3.26863 12.7314 3 12.4 3H8.6C8.26863 3 8 3.26863 8 3.6V8.4C8 8.73137 8.26863 9 8.6 9H9M15 9H10.4C10.0686 9 9.8 9.26863 9.8 9.6V14.4C9.8 14.7314 10.0686 15 10.4 15H15.6C15.9314 15 16.2 14.7314 16.2 14.4V9.6C16.2 9.26863 15.9314 9 15.6 9H15ZM14 21V16.2C14 15.8686 13.7314 15.6 13.4 15.6H9.6C9.26863 15.6 9 15.8686 9 16.2V20.4C9 20.7314 9.26863 21 9.6 21H14Z" stroke="#45B7D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Game Assets</h3>
              <p className="text-white/70">Use your NFTs and tokens across multiple games in our ecosystem.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Game Showcase Section */}
      <section ref={gamesRef} className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">Dive into our expanding universe of blockchain-powered games.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {GAME_DATA.map((game, index) => (
              <motion.button
                key={game.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${activeGame === index ? 'bg-primary text-white' : 'bg-base-300/50 text-white/70'}`}
                onClick={() => setActiveGame(index)}
              >
                {game.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGame}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Game Image */}
              <motion.div 
                animate={pulseAnimation as unknown as boolean | VariantLabels | TargetAndTransition | AnimationControls | undefined}
                className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <Image
                  src={GAME_DATA[activeGame].image}
                  alt={GAME_DATA[activeGame].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="px-4 py-1 rounded-full bg-primary/80 text-xs font-medium text-white backdrop-blur-sm">
                    {GAME_DATA[activeGame].genre}
                  </span>
                </div>
              </motion.div>

              {/* Game Info */}
              <div className="p-6 rounded-2xl bg-base-300/30 backdrop-blur-sm border border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{GAME_DATA[activeGame].title}</h3>
                <p className="text-white/80 mb-6">{GAME_DATA[activeGame].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-white/50 text-sm mb-1">Platforms</p>
                    <p className="font-medium">{GAME_DATA[activeGame].platforms.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Players</p>
                    <p className="font-medium">{GAME_DATA[activeGame].playerCount}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Release Date</p>
                    <p className="font-medium">{GAME_DATA[activeGame].releaseDate}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    Learn More
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline border-white/30 backdrop-blur-sm"
                    onClick={() => router.push('/signup')}
                  >
                    Join Waitlist
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20 relative">
        <div className="absolute inset-0 bg-base-100 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-lg text-white/80 mb-8">
              Be among the first to experience the future of gaming. Sign up for early access and exclusive rewards.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-lg btn-primary px-8"
              onClick={() => router.push('/signup')}
            >
              Join Waitlist Now
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Solana Stamp */}
      {/* <div className="fixed left-4 bottom-4 bg-gradient-to-r from-[#0CC0DF] to-[#14F195] p-[1px] rounded-lg rotate-[-4deg] shadow-lg hover:rotate-0 transition-all duration-300 z-50">
        <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2">
            <svg width="20" height="16" viewBox="0 0 508.07 398.17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="solana-gradient" x1="463" y1="205.16" x2="182.39" y2="742.62" gradientTransform="translate(0 -198)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#00ffa3" />
                  <stop offset="1" stopColor="#dc1fff" />
                </linearGradient>
              </defs>
              <path d="M82.55 303.89A16.63 16.63 0 0194.3 299h405.45a8.3 8.3 0 015.87 14.18l-80.09 80.09a16.61 16.61 0 01-11.75 4.86H8.33a8.31 8.31 0 01-5.88-14.18l80.1-80.06z" fill="url(#solana-gradient)" />
              <path d="M82.55 4.85A17.08 17.08 0 0194.3 0h405.45a8.3 8.3 0 015.87 14.18l-80.09 80.09a16.61 16.61 0 01-11.75 4.86H8.33a8.31 8.31 0 01-5.88-14.18l80.1-80.1z" fill="url(#solana-gradient)" />
              <path d="M425.53 153.42a16.61 16.61 0 00-11.75-4.86H8.33a8.31 8.31 0 00-5.88 14.18l80.1 80.09a16.6 16.6 0 0011.75 4.86h405.45a8.3 8.3 0 005.87-14.18l-80.09-80.09z" fill="url(#solana-gradient)" />
            </svg>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CC0DF] to-[#14F195] font-bold">
              Powered By Solana
            </span>
          </div>
        </div>
      </div> */}
    </main>
  )
}