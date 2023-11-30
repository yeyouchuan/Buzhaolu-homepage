import Circle from '../../components/Circle';

export default function dev() {
    return (
        <main className='w-full h-full bg-black flex justify-center'>
            <div className='container bg-black flex flex-col justify-center'>
                <div className='border-b border-[#303030] w-full'>
                    <Circle />
                </div>
            </div>
        </main>
    )
}