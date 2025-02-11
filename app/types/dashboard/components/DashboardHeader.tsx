'use client'

import { useState } from 'react'
import { IoLogOutOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { GameData } from "@/app/utils/AppContext"
import { useAppContext } from '@/app/utils/AppContext'
import { useRouter } from 'next/navigation'

export default function DashboardHeader() {
    const router = useRouter();

    let loginResponse = {
        first_name: "John",
        last_name: "Doe",
        access_token: "1234567890"
    };

    let integrationPartner = {
        integration_partner: "emis"
    };

    let setIntegrationPartner = (integration_partner: string) => { }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 w-full z-50 bg-black/10 backdrop-blur-sm border-b border-white/10"
        >
            <div className="max-w-full mx-auto px-8">
                <div className="flex justify-center items-center h-16">

                    <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 relative">
                        <div className="absolute inset-0 bg-white/10 rounded-lg"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
                        </div>

                        <button
                            className="relative px-4 py-2 text-white/60 hover:text-white transition-colors duration-300 border-r border-white/20"
                            onClick={() => router.push('/about')}
                        >
                            Learn More
                        </button>

                        <button
                            onClick={() => router.push('/dashboard/login')}
                            className="relative flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors duration-300"
                            title="Sign Out"
                        >
                            <span className="text-sm font-medium">
                                Waitlist
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </motion.nav>
    )
}
