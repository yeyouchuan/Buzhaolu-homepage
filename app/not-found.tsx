'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from "react";

export default function NotFoundPage() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <main className="h-screen">
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center">
                <motion.div
                    className="font-brand text-center text-7xl md:text-[160px] flex flex-col relative select-none w-[148px] md:w-[330px] h-48 md:h-96"
                    onClick={toggleVisibility}
                    key={isVisible ? "visible" : "hidden"}
                >
                    <motion.div
                        className="text-[#00030a] welcome-5 absolute top-20 md:top-40"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                    <motion.div
                        className="text-[#00030a] welcome-4 absolute top-16 md:top-32"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                    <motion.div
                        className="text-[#00030a] welcome-3 absolute top-12 md:top-24"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                    <motion.div
                        className="text-[#00030a] welcome-2 absolute top-8 md:top-16"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.6,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                    <motion.div
                        className="text-[#00030a] welcome-1 absolute top-4 md:top-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.7,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                    <motion.div
                        className="welcome absolute top-0"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 0.5,
                                    damping: 100,
                                    
                                }
                            }
                        }}
                    >
                        404
                    </motion.div>
                </motion.div>
                <Link
                href="/"
                className="pointer-events-auto select-none text-xl font-bold text-white mix-blend-difference hover:underline"
                >
                返回主页
                </Link>
            </div>
        </main>
    )
}