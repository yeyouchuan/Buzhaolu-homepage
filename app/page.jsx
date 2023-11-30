import { motion } from 'framer-motion'
import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import { BlogReactions } from '../components/Reactions';
import BackToFuture from '../components/BackToFuture';
import Cross from '../components/Cross';
import HomepageDivider from '../components/HomepageDivider';

export default function Index() {
    return (
        <main className='w-full h-full bg-black flex justify-center'>
            <div className='container bg-black flex flex-col justify-center w-[90%] relative'>
                <div className='topCrosscontainer'>
                    <Cross />
                </div>
                <div className='border-b border-[#303030] w-full h-[400px] md:h-[600px] pt-28'>
                    <Title /> 
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center shrink-0 border-b border-[#303030] '>
                    <div className='h-60 w-full border-r border-[#303030]'></div>
                    <div className='h-60 w-full relative'>
                        <div className='bottomCrosscontainer'>
                            <Cross />
                        </div>
                    </div>
                </div>
                <HomepageDivider />
                <div className='w-full h-96 items-center shrink-0 border-b border-[#303030]'></div>
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
                <div className='flex flex-col md:flex-row justify-between items-center shrink-0'>
                    <AddContactButton />
                    <BlogReactions />
                </div>
            </div>
        </main>
    );
}