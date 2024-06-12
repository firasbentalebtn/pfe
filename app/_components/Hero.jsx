import React from 'react';
import {Button} from "@/components/ui/button";
import  Link from 'next/link'
import Image from "next/image";
function Hero() {
    return (
        <div className='flex flex-col justify-center items-center my-20'>
        <div className='text-center max-w-3xl'>
            <h2 className='font-bold text-[60px] text-slate-600'>Schedual your meetings with ease </h2>
            <h2 className='text-xl mt-5 text-slate-600'>
                Calendly is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.


            </h2>
            <div className='flex gap-4 flex-col mt-5'>
                <h3 className='text-sm'>                Sign up free with Google or Microsoft.
                </h3>
                <div className='flex justify-center gap-8'>
                    <Button className='p-6 flex gap-4'>
                        <Image src='/google.png' alt='google' width={20} height={20}/>

                        Sign Up with Google
                    </Button>
                    <Button className='p-6 flex gap-4'>
                        <Image src='/microsoft.png' alt='microsoft' width={20} height={20}/>
                        Sign Up with Microsoft
                    </Button>
                </div>
                <hr></hr>
                <h2> <Link href='' className='text-primary'>Sign up Free With Email</Link> </h2>

            </div>
        </div>
        </div>
    );
}

export default Hero;