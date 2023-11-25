import { motion } from 'framer-motion'
import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';
import { Container } from 'postcss';

export default function Index() {
    return (
        <main className='w-full h-full bg-black flex justify-center'>
            <div className='container bg-black flex flex-col justify-center'>
                <div className='border-b border-[#303030] w-full h-[400px] md:h-[600px] pt-28'>
                    <Title /> 
                </div>
                <AddContactButton />
            </div>
        </main>
    );
}