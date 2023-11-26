import { motion } from 'framer-motion'
import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import { BlogReactions } from '../components/Reactions';
import { Container } from 'postcss';

export default function Index() {
    return (
        <main className='w-full h-full bg-black flex justify-center'>
            <div className='container bg-black flex flex-col justify-center'>
                <div className='border-b border-[#303030] w-full h-[400px] md:h-[600px] pt-28'>
                    <Title /> 
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <AddContactButton />
                    <BlogReactions />
                </div>
            </div>
        </main>
    );
}