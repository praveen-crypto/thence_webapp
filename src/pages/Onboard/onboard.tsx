import { ReactElement } from "react";

//Components
import Button from "../../components/Button/Button";

//Icons
import { RxCross1 } from "react-icons/rx";
import brand from '../../assets/brand.svg';


function Navbar({ showCloseIcon }: { showCloseIcon: boolean }): ReactElement {

    return (
        <>
            <nav className='navbar h-[88px] flex justify-between pt-6' >
                <div className="brand block my-auto ms-10">
                    <img src={brand} className='' alt="Brand" />
                </div>

                {
                    showCloseIcon &&
                    <div className="nav-items flex gap-4 ">
                        <Button component="a" href='/' label={<RxCross1 />} variant="outline" variantType={''} className={` w-[64px] h-[64px] text-[28px] border-[#CACACA] rounded-full text-[#0C1319] hover:bg-transparent hover:text-[#0C1319] `} />
                    </div>
                }
            </nav>
        </>
    )

}

function Onboard(): ReactElement {

    return (
        <div className="container mx-auto h-[100vh] overflow-hidden" >
            <Navbar showCloseIcon={true} />

            <div className="h-[80%] flex justify-center items-center">
                <div className='head text-center' >
                    <span className='cursive text-[#2DA950] text-[36px]'>
                        Talent onboard
                    </span>

                    <h3 className='manrope text-[#1C1C1C] text-[56px] font-semibold leading-tight'>
                        Start your success<br />Journey here!
                    </h3>
                </div>
            </div>

        </div>
    )
}

export default Onboard;