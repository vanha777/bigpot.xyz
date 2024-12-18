'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaDesktop, FaMobile, FaGamepad, FaGlobe } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Details from './details'
import { transferSplToken } from "../../app/utilities/transfer";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
interface Game {
    id: string
    title: string
    image: string
    platform: 'desktop' | 'mobile' | 'console'
    description: string
    link: string
    developer?: string
    publisher?: string
    releaseDate?: string
    genre?: string
    intro?: string
    trailer?: string
    gameplay?: string
    models?: {
        playToEarn?: {
            enabled: boolean
            price?: string
        }
        stakeToEarn?: {
            enabled: boolean
            price?: string
        }
    }
}

const platformIcons = {
    all: <FaGlobe size={64} />,
    desktop: <FaDesktop size={64} />,
    mobile: <FaMobile size={64} />,
    console: <FaGamepad size={64} />
}

export default function GamesDashboard({ games }: { games: Game[] }) {
    const TOKEN_MINT_ADDRESS = "813b3AwivU6uxBicnXdZsCNrfzJy4U3Cr4ejwvH4V1Fz";
    const { publicKey, connected, signMessage, sendTransaction } = useWallet();
    const [selectedPlatform, setSelectedPlatform] = useState<'desktop' | 'mobile' | 'console' | 'all'>('all')
    const [focusedGame, setFocusedGame] = useState<Game | null>(null)
    const [filteredGames, setFilteredGames] = useState<Game[]>(games)

    useEffect(() => {
        if (selectedPlatform === 'all') {
            setFilteredGames(games)
        } else {
            setFilteredGames(games.filter(game => game.platform === selectedPlatform))
        }
        setFocusedGame(null)
    }, [selectedPlatform, games])

    const onGameFocus = (game: Game) => {
        setFocusedGame(focusedGame?.id === game.id ? null : game)
    }

    const transferMTL = async () => {
        if (!publicKey) {
            console.error("Wallet not connected");
            return;
        }

        try {
            // Connection to Solana testnet
            const senderKeypair = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.NEXT_PUBLIC_METALOOT_KEY!)));
            console.log("Sender Keypair:", senderKeypair.publicKey.toBase58());

            // Convert amount to smallest units
            // Phase 1 rewarding 10,000 MTL
            const amount = Math.round(1000 * 10 ** 9);

            // Transfer SPL Token (MTL)
            const splSignature = await transferSplToken(
                senderKeypair,
                publicKey.toBase58(),
                TOKEN_MINT_ADDRESS, // Using the MTL token mint address
                amount
            );
            console.log("MTL Token Transaction Signature:", splSignature);

        } catch (error) {
            console.error("Transfer Error:", error);
        }
    }

    const onGameLaunch = (link: string) => {
        window.open(link, '_blank')
        transferMTL();
    }

    return (
        <>
            {/* Platform Filter */}
            <div className="flex gap-24 mb-26 p-24">
                {Object.entries(platformIcons).map(([platform, icon]) => (
                    <motion.button
                        key={platform}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedPlatform(platform as 'desktop' | 'mobile' | 'console' | 'all')}
                        className={`px-24 py-16 rounded-[3rem] backdrop-blur-sm relative
              ${selectedPlatform === platform
                                ? 'border-4 border-[#0CC0DF] text-[#0CC0DF] shadow-lg shadow-[#0CC0DF]/30'
                                : 'border-2 border-white/30 text-white'} 
              before:content-[""] before:absolute before:inset-0 before:rounded-[3rem] 
              before:bg-gradient-to-r before:from-gray-900 before:to-gray-800 before:z-[-1]
              hover:border-[#0CC0DF]/60 transition-colors duration-300`}
                    >
                        {icon}
                    </motion.button>
                ))}
            </div>

            {/* Horizontal Game Carousel */}
            <div className="relative">
                <motion.div
                    className="flex space-x-6 px-4 overflow-x-auto pb-8"
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                >
                    {filteredGames.map((game) => (
                        <motion.div
                            key={game.id}
                            className={`relative flex-shrink-0 cursor-pointer transition-all duration-300
                         ${focusedGame?.id === game.id ? 'w-[500px] h-[700px]' : 'w-[300px] h-[450px]'}`}
                            onClick={() => onGameFocus(game)}
                            layout
                        >
                            <div className="relative h-full rounded-2xl overflow-hidden 
                             bg-gradient-to-b from-[#0CC0DF]/10 to-transparent backdrop-blur-sm
                             border border-[#0CC0DF]/20">
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 w-full p-8">
                                    {focusedGame?.id === game.id && (
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => onGameLaunch(game.link)}
                                            className="w-full bg-[#0CC0DF] hover:bg-[#0AA0BF] text-white 
                               font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3
                               shadow-lg shadow-[#0CC0DF]/30 text-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Launch Game
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Game Details Section */}
            {focusedGame && (
                <Details focusedGame={focusedGame} />
            )}
        </>
    )
}
