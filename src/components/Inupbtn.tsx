'use client'
import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Inupbtn = () => {

    const {data:session,isPending} = useSession()
    if(isPending){
        return <span className="loading loading-spinner text-success"></span>
    
    }

    const authLinks = <>
        {
           session?.user?<>
           <div className='flex gap-4 justify-center items-center'>
            <span>Welcome {session?.user?.name}</span>
           <button  className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium 
             hover:bg-red-700 transition duration-200 
             shadow-sm hover:shadow-md" onClick={() =>signOut()}>Signout</button>
           </div>
           </>:<><Link href='/sign-up'><button className='btn'>সাইন  আপ</button></Link>
           <Link href='/sign-in'><button className='btn'>সাইন ইন</button></Link></>
        }
       </>
    return (
        <div>
            {authLinks}
        </div>
    );
};

export default Inupbtn;