import React from 'react';
import Image from 'next/image'
import {Button} from "@/components/ui/button";

function Header() {
    return (
        <div>
            <div className='flex items-center justify-between p-5 shadow-md'>
                <Image src='/logo.png' width={100} height={100} alt='logo' className='w-[150px] md:w-[200px]'/>

                <div className='flex gap-5'>
                    <Button variant='ghost'>Login</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;