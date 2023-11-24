import { motion } from 'framer-motion'
import Title from '../components/HeroText'
import AddContactButton from '../components/AddContactButton';

export default function Index() {
    return (
        <main className='w-screen h-screen bg-black flex flex-col'>
            <div className='mx-auto h-96 w-full max-w-[1120px] flex flex-col place-items-center my-40'>
                <Title /> 
            </div>
            <div className='mx-auto h-96 w-fit max-w-[500px] flex flex-col place-items-center'>
                <AddContactButton />
            </div>
        </main>
    );
}