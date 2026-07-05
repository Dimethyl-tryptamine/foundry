"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import SearchBar from "../../ui/SearchBar/SearchBar";



export const WeatherPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const search = searchParams.get('search');
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const params = new URLSearchParams(searchParams.toString()); // creates a new instance of URLSearchParams to manipulate the query parameters


   


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    

    useEffect(() => { // runs when user types in the search bar and updates the route with the new search value
        if (searchValue) {
            params.set('search', searchValue);
            router.push(`${pathname}?${params.toString()}`);
            
        }
        setLoading(true);
        fetch(`/api/data?search=${encodeURIComponent(searchValue)}`) // fetches data from the api route
        .then(res => res.json())
        .then(result => {
            setData(result);
            setLoading(false);
        });


    },[searchValue]);

    



   
   



 
    return (

        <div className="flex text-white justify-center h-screen">
            <SearchBar 
            value={searchValue} 
            onChange={handleSearchChange} />
        </div>


    );
}

export default WeatherPage