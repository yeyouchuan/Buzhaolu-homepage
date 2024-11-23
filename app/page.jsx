'use client'

import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import BackToFuture from '../components/BackToFuture';
import Cross from '../components/Cross';
import HomepageDivider from '../components/HomepageDivider';
import Platform from '../components/platform/platform';

import Image from 'next/image';

export default function Index() {

    return (
        <main className='w-full h-full bg-black flex justify-center selection:bg-gray-50 selection:text-black'>
            <div className='container bg-black flex flex-col justify-center w-full relative'>
                <div className='topCrosscontainer'>
                    <Cross />
                </div>
                <div className='border-b border-[#303030] w-full h-[400px] md:h-[600px] pt-28 relative'>
                    <Title />
                    <Image src="/images/DISC1.png" alt="disc1" width={512} height={512} className='absolute top-16 left-1/4 w-32 h-32 -rotate-6' />
                    <Image src="/images/DISC2.png" alt="disc2" width={512} height={512} className='absolute bottom-20 left-[63%] w-32 h-32 rotate-6' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center shrink-0 border-b border-[#303030] '>
                    <div 
                        className='h-fit w-full border-r border-[#303030] p-10 md:p-12'
                    >
                        <div className='text-[#A1A1A1] text-base md:text-xl tracking-widest leading-loose'>
                            <span className='inline-flex font-brand text-red-brand text-[20px]'>
                                不着陆
                            </span>
                            是一个多媒介、泛领域的杂谈媒体。我们希望邀请优秀的
                            <span className='text-orange-brand font-medium mx-1 items-baseline'>
                                设计师
                            </span>
                            和
                            <span className='font-pixel-zh ml-1 text-green-brand items-baseline'>
                                开发者
                            </span>
                            来分享他们宝贵的创作经验。
                        </div>
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
                <AddContactButton />
            </div>
        </main>
    );
}