'use client'

import { ArrowRight } from "@phosphor-icons/react";

import { motion, AnimatePresence } from 'framer-motion'

import { useState, useEffect } from 'react'

import Xiaoyuzhou from './Xiaoyuzhou'
import Apple from './Apple'
import Spotify from './Spotify'
import Wechat from './Wechat'

export default function platform() {

    const [hoveredText, setHoveredText] = useState({ text: '各种平台', colorClass: 'text-white' });
    const textClass = `inline-flex mx-1 ${hoveredText.colorClass}`;

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setHoveredText({ text: '各种平台', colorClass: 'text-white' });
          } else {
          }
        };
    
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
    
        // 初始检查
        handleResize();
    
        // 清除监听器
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='w-full h-fit grid grid-cols-4 md:grid-cols-6 items-center shrink-0 border-b border-[#303030]'>
                    <div className='col-span-4 md:col-span-2 h-full border-r border-b border-[#303030] p-10 md:p-6 lg:p-8 xl:p-12'>
                        <div className='flex flex-row md:flex-col text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold gap-0 md:gap-3 items-center'>
                            <motion.p 
                                className='w-fit md:w-full text-left'
                            >
                                在
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        className={textClass}
                                        key={hoveredText.text}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 6 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {hoveredText.text}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.p>
                            <p className='inline-flex w-fit md:w-full text-left'>找到我们</p>
                        </div>
                    </div>
                    <div className='aspect-square border-r border-b border-[#303030]'>
                        <div 
                            className='w-full h-full blur-sm hover:blur-none duration-700 scale-75'
                            onMouseEnter={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '小宇宙', colorClass: 'bg-gradient-to-r bg-clip-text text-transparent from-[#32B3DE] to-[#6BBED3]' });
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '各种平台', colorClass: 'text-white' });
                                }
                            }}
                        >
                            <Xiaoyuzhou />
                        </div>
                    </div>
                    <div className='aspect-square border-r border-b border-[#303030]'>
                        <div 
                            className='w-full h-full blur-sm hover:blur-none duration-700 scale-75'
                            onMouseEnter={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: 'Apple Podcast', colorClass: 'bg-gradient-to-r bg-clip-text text-transparent from-[#F452FF] to-[#832BC1]' });
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '各种平台', colorClass: 'text-white' });
                                }
                            }}
                        >
                            <Apple />
                        </div>
                    </div>
                    <div className='aspect-square border-r border-b border-[#303030]'>
                        <div 
                            className='w-full h-full blur-sm hover:blur-none duration-700 scale-75'
                            onMouseEnter={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: 'Spotify', colorClass: 'text-[#9691F9]' });
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '各种平台', colorClass: 'text-white' });
                                }
                            }}
                        >
                            <Spotify />
                        </div>
                    </div>
                    <div className='aspect-square border-b border-[#303030]'>
                        <div 
                            className='w-full h-full blur-sm hover:blur-none duration-700 scale-75'
                            onMouseEnter={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '微信', colorClass: 'text-[#00C70A]' });
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth >= 768) {
                                    setHoveredText({ text: '各种平台', colorClass: 'text-white' });
                                }
                            }}
                        >
                            <Wechat />
                        </div>
                    </div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square bottom-0 md:border-r border-[#303030] hidden md:inline-block'></div>
                    <div className='aspect-square bottom-0 md:border-r border-[#303030] hidden md:inline-block'></div>
                    <div className='border-[#303030'>
                        <div className='w-10 h-10 md:w-[70px] md:h-[70px] mx-auto rounded-full border border-[#303030] hover:bg-gray-600/20'>
                            <ArrowRight className='text-white mx-auto mt-[10px] sm:mt-[12px] md:mt-[18px] w-5 h-5 sm:w-8 sm:h-8 md:w-8 md:h-8' />
                        </div>
                    </div>
                </div>
    )
}