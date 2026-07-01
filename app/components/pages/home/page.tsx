
import Link from "next/link";
import { Nav } from "../../layout/nav/page";



export  const HomePage = () => {
  return (
    <div className="flex  text-center flex-col flex-1 items-center bg-black min-h-screen ">
      Welcome to my application! <br/>This is the HomePage component.<br/> It connects all other features of the site.<br/> You can navigate through the APIs <br/>using the navigation above
    </div>
  );
}

export default HomePage;

