'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import { BlogReactions } from '../components/Reactions';

import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import BackToFuture from '../components/BackToFuture';
import Cross from '../components/Cross';
import HomepageDivider from '../components/HomepageDivider';
import Xiaoyuzhou from '../components/logo/Xiaoyuzhou';
import Apple from '../components/logo/Apple';
import Spotify from '../components/logo/Spotify';

export default function Index() {

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
        <main className='w-full h-full bg-black flex justify-center selection:bg-gray-50 selection:text-black'>
            <div className='container bg-black flex flex-col justify-center w-full relative'>
                <div className='topCrosscontainer'>
                    <Cross />
                </div>
                <div className='border-b border-[#303030] w-full h-[400px] md:h-[600px] pt-28'>
                    <Title /> 
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center shrink-0 border-b border-[#303030] '>
                    <div 
                        className='h-fit w-full border-r border-[#303030] p-10 md:p-12'
                    >
                        <p className='text-[#A1A1A1] text-base md:text-xl tracking-widest leading-loose'><p className='text-gray-200 inline-flex'>不着陆</p>是一个多媒介、泛领域的杂谈媒体。我们关注<p className='text-gray-200 inline-flex'>商业</p>和<p className='text-gray-200 inline-flex'>科技</p>的历史和现状，也希望邀请优秀的<p className='text-gray-200 inline-flex'>设计师</p>和<p className='text-gray-200 inline-flex'>开发者</p>来分享他们宝贵的创作经验。</p>
                    </div>
                    <div className='h-full w-full relative'>
                        <div className='bottomCrosscontainer'>
                            <Cross />
                        </div>
                    </div>
                </div>
                <HomepageDivider />
                <div className='w-full h-fit grid grid-cols-4 md:grid-cols-6 items-center shrink-0 border-b border-[#303030]'>
                    <div className='col-span-4 md:col-span-2 h-full border-r border-b border-[#303030] p-10 md:p-12'>
                        <div className='flex flex-row md:flex-col text-xl md:text-3xl font-bold gap-0 md:gap-3 justify-center'>
                            <motion.p 
                                className='w-fit'
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
                            <p className='inline-flex'>找到我们</p>
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
                    <div className='aspect-square border-b border-[#303030]'></div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square border-r border-[#303030]'></div>
                    <div className='aspect-square bottom-0 md:border-r border-[#303030]'></div>
                    <div className='aspect-square bottom-0 md:border-r border-[#303030] md:w-full md:h-full w-0 h-0'></div>
                    <div className='border-[#303030]'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center shrink-0 border-b border-[#303030]'>
                    <div className='h-full w-full border-r border-[#303030]'></div>
                    <div className='h-full w-full border-r border-[#303030]'></div>
                    <div className='w-full py-6 pl-6 relative'>
                        <BackToFuture />
                        <div className='topCrosscontainer'>
                            <Cross />
                        </div>
                        <div className='bottomCrosscontainer'>
                            <Cross />
                        </div>
                    </div>
                </div>
                <HomepageDivider />
                <div className='flex flex-col md:flex-row justify-between items-center shrink-0'>
                    <AddContactButton />
                    <BlogReactions />
                </div>
            </div>
        </main>
    );
}