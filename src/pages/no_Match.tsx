
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            
            <h3 className='manrope text-[#1C1C1C] text-[56px] font-bold leading-tight mt-0'>
                Nothing to see here!
            </h3>
            <p className="manrope text-[20px] text-[#727272] text-center mt-8">
            Go to the  <Link  to="/" className="text-[#1C1C1C] font-bold">home page</Link>
            </p>
        </div>
    );
}

export default NoMatch;
