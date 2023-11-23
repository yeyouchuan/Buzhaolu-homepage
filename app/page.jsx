import { motion } from 'framer-motion'
import Title from '../components/HeroText'

export default function Index() {
    return (
        <main className='w-screen h-screen bg-black flex flex-col'>
            <div className='mx-auto h-96 w-full max-w-[1120px] flex flex-col place-items-center'>
                <Title />
            </div>
        </main>
    );
}