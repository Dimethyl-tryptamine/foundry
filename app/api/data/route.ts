import { NextResponse} from "next/server";

export async function GET(request: Request) { // GET request handler for the weather page
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search');
    const apiKey = process.env.MY_API_KEY;
    
 
        
try {
        if (!query){
            return NextResponse.json({error: "No query provided"}, {status: 400})
        } 
        
        if (!apiKey) {
            return NextResponse.json({ error: "Server misconfigured: missing API key" }, { status: 500 });
        }
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${apiKey}`);
        const data = await res.json();
        const { lat, lon } = data[0] || {};

        if (data.length === 0) {
            return NextResponse.json({ error: "No results found for the provided query" }, { status: 404 });
        } 

        return NextResponse.json({ results: data, lat, lon }, { status: 200 });
        
    } catch (err) {
        console.error("Error fetching data from OpenWeatherMap API:", err);
        return NextResponse.json({ error: "Failed to fetch data from OpenWeatherMap API" }, { status: 500 });
    }
  
    


      
   

}
    




