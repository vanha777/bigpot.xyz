'use client'

import DashboardHeader from '@/components/DashboardHeader'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <>
      <DashboardHeader/>

      <section className="relative overflow-hidden min-h-screen">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#030712]">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF1493] rounded-full filter blur-[150px] opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF0000] rounded-full filter blur-[150px] opacity-20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF1493] rounded-full filter blur-[180px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-[#030712]/90 to-[#0f172a]/85" />
        </div>

        <motion.div
          className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold my-32 mb-8">
              <span className="text-gray-200">The</span>{' '}
              <span className="bg-gradient-to-r from-[#FF1493] to-[#FF0000] bg-clip-text text-transparent">
                Rules
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="my-48"></div>

            {/* STEP 1 */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center my-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF1493] to-[#FF0000] bg-clip-text text-transparent">
                  Step 1: Stake
                </h2>
                <p className="text-gray-400">
                  Each player stakes an entry fee to join the pot. Once you're in, the anticipation begins—will you outlast the competition?
                </p>
              </div>
              <div className="w-full md:w-1/2 relative aspect-[16/12]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/step1.png"
                    alt="step 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="my-48"></div>

            {/* STEP 2 */}
            <div className="flex flex-col md:flex-row gap-16 items-center my-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF1493] to-[#FF0000] bg-clip-text text-transparent">
                  Step 2: Lock the Pot
                </h2>
                <p className="text-gray-400">
                  When the pot is locked, BigPot announces the AR/VR games for each round—nobody knows what lies ahead until this moment.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative aspect-[16/12]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/step2.jpg"
                    alt="EthGlobal Hackathon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="my-48"></div>

            {/* STEP 3 */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center my-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF1493] to-[#FF0000] bg-clip-text text-transparent">
                  Step 3: Compete & Elimination
                </h2>
                <p className="text-gray-400">
                  Each match unfolds across 3–4 elimination rounds. First, the lowest-scoring 25% of players are cut. With each new round, challenges intensify, trimming the field until only the best remain.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative aspect-[16/12]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/step3.png"
                    alt="Our Solution"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="my-48"></div>

            {/* STEP 4 */}
            <div className="flex flex-col md:flex-row gap-16 items-center my-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF1493] to-[#FF0000] bg-clip-text text-transparent">
                  Step 4: The Final Survivor
                </h2>
                <p className="text-gray-400">
                  In the last round, a single survivor rises above all others—claiming the entire pot and the ultimate bragging rights at BigPot.xyz.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative aspect-[16/12]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/step4.jpg"
                    alt="Team Working"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
