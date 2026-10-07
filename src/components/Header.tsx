
import Image from 'next/image';

import Navlinks from './Navlinks';
import Inupbtn from './Inupbtn';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle:"full"
    })

// const {data:session,isPending} = useSession()
// if(isPending){
//     return <span className="loading loading-spinner text-success"></span>

// }
    // const authLinks = <>
    //  {
    //     session?.user?<>
    //     <span>Welcome {session?.user?.name}</span>
    //     </>:<><Link href='/sign-up'><button className='btn'>সাইন  আপ</button></Link>
    //     <Link href='/sign-in'><button className='btn'>সাইন ইন</button></Link></>
    //  }
    // </>

    return (
       <div>
        <div className='flex justify-between'>
<div>

</div>

<div className='max-w-7xl mx-auto'>
         <div className='flex gap-4'>
            <div>
                <Image src={"/logo.webp"} className='w-10 h-10' height={50} width={50} alt='bbc bangla' ></Image>
           
           
            </div>
            <div>

            <div>
                <h1>Bangla News 24</h1>
            </div>
            <div>{date}</div>
           </div>
        </div>
       </div>

<div className='flex items-center justify-center gap-4'>
   <Inupbtn></Inupbtn>

</div>
       </div>



       {/* navlinks */}
       <Navlinks></Navlinks>
       </div>
    );
};

export default Header;