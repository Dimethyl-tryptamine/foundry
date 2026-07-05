import Link from "next/link";

export const Nav = () => {


    return ( 
    
       <ol className="m-3 flex gap-5 justify-center">
            <li className="underline text-gray-700 hover:decoration-red-500 hover:text-purple-500"><Link href="/">Home</Link></li>
            <li className="underline text-gray-700 hover:decoration-red-500 hover:text-purple-500"><Link href="/components/pages/weather">Weather API</Link></li>
        </ol>
        
    );
}

export default Nav