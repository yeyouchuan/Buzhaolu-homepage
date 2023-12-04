'use client'

import { BlogReactions } from '../components/Reactions';

import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import BackToFuture from '../components/BackToFuture';
import Cross from '../components/Cross';
import HomepageDivider from '../components/HomepageDivider';
import Platform from '../components/Platform/platform';

export default function Index() {

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
                <Platform />
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