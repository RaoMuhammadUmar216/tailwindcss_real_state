import React from 'react';

const Stats = () => {
    return (

        <div className='bg_stats px-5 py-8 text-white md:hid'>
            <div className='md:w-[720px] md:ml-[15rem]  md:flex md:flex-col md:justify-center'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <h1 className='text-4xl font-bold'>25 </h1>
                        <h2 className='text-xl font-normal mt-3'>years</h2>
                    </div>
                    <div>Logo</div>
                </div>
                <div className='text-3xl font-semibold'>Operated</div>
                <p className='mt-4 font-thin leading-5'>
                    As a trusted general project that has been operating for 25 years, our commitement is always to prioritize our client satisfaction
                </p>
                <div className='flex justify-between mt-7'>
                    <div>
                        <h1 className='font-bold text-3xl'>300+</h1>
                        <h4>Happy</h4>
                        <h4>Client</h4>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>900+</h1>
                        <h4>Amazing</h4>
                        <h4>Projects</h4>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>20+</h1>
                        <h4>Awards</h4>
                        <h4>Winings</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats