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
           <span>Welcome {session?.user?.name}</span>
           <button onClick={() =>signOut()}>Signout</button>
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