
//Components
import Button from '../../components/Button/Button';
import Slider from "react-slick";

//Styles
import './landing.scss';
import '@mantine/carousel/styles.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons
import { FaPlus } from "react-icons/fa6";
import { Accordion } from '@mantine/core';
import { FaArrowRight } from "react-icons/fa6";

import brand from '../../assets/brand.svg';
import copyright from '../../assets/icons/copyright.svg';
import rocket from '../../assets/icons/rocket.svg';
import hero from '../../assets/hero.svg';
import arrow1 from '../../assets/arrow.png';
import sparkle from '../../assets/icons/sparkle.png';


function Navbar() {

    return (
        <>
            <div className='navbar-container py-6 px-1' >
                <nav className='navbar h-[auto] flex justify-between border border-[##EAEAEA] rounded-[100px] p-4' >
                    <div className="brand block my-auto ms-10">
                        <img src={brand} className='' alt="Brand" />
                    </div>

                    <div className="nav-items flex gap-4 ">
                        <Button component="a" href='/register' label='Get Projects' variantType={'secondary'} className={` w-[190px] h-[77px] text-[18px] `} />
                        <Button label='Onboard Talent' variantType={'primary'} className={` w-[220px] h-[77px] text-[18px] `} />
                    </div>
                </nav>
            </div>
        </>
    )

}

function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        showArrows: false,

    };

    return (
        <>
            <div className='hero-container container mt-10' >
                <div className='head text-center' >
                    <span className='cursive text-[#2DA950] text-[36px]'>
                        success stories
                    </span>

                    <h3 className='manrope text-[#1C1C1C] text-[56px] font-semibold leading-tight'>
                        Every success journey <br /> we&#39;ve encountered.
                    </h3>
                </div>

                <div className='w-full flex flex-row mt-24 '>

                    <div className='w-[50%] relative' >
                        <img className='rounded-[50px] ms-auto' src={hero} alt="" />

                        <div className='w-[268px] h-[240px] absolute top-[125px] left-[-10px] bg-white rounded-[27px] p-7 shadow-lg'>
                            <div className='header flex ' >
                                <div className='spark' >
                                    <img className='w-[100px] h-auto absolute top-[-20px] left-[-10px] ' src={sparkle} alt="" />
                                </div>
                                <h3 className='switzer font-semibold text-[64px] text-[#1C1C1C]'>40%</h3>
                            </div>

                            <p className='description manrope font-medium text-[18px] text-[#828282] leading-[23px]'>
                                Achieved reduction in project execution time by optimising team availability
                            </p>
                        </div>

                        <div className='w-[245px] h-[88px] absolute bottom-[35px] left-[50px] bg-white rounded-[111px] shadow-lg flex p-3'>
                            <div className='icons w-[auto] h-auto my-auto ms-1' >
                                <span className=' flex bg-[rgba(221,239,224,0.3)] w-[50px] h-[50px] rounded-full my-auto '>
                                    <img className='  mx-auto my-auto' src={rocket} alt="" />
                                </span>
                            </div>
                            <div className='header w-[60%] flex flex-col justify-end ms-4' >
                                <h3 className='switzer font-bold text-[24px] text-[#1C1C1C] pb-0'>10 DAYS</h3>
                                <p className='description manrope font-medium text-[16px] text-[#828282] '>
                                    Staff Deployment
                                </p>
                            </div>
                        </div>

                        <div className='w-[290px] h-[240px] absolute bottom-[-50px] right-[-80px] bg-[#002E18] rounded-[27px] p-8 shadow-lg'>
                            <div className='header flex ' >
                                <h3 className='switzer font-semibold text-[64px] text-[#FFFFFF] '>$0.5</h3>
                                <span className=' switzer text-[22px] text-[#A6A3A0] mt-auto mb-4 ms-2'>MILLION</span>
                            </div>

                            <p className='description manrope font-normal text-[18px] text-[rgb(204,204,204,0.9)] leading-[23px]'>
                                Reduced client expenses by saving on hiring and employee costs.
                            </p>
                        </div>
                    </div>

                    <div className='w-[50%] flex flex-col justify-start ps-[14%] relative ' >
                        <div className='square-bg' >

                        </div>
                        <Slider {...settings} >
                            <div>
                                <h3 className='manrope text-[40px] font-semibold text-[#1C1C1C] w-[400px] leading-[48px] '>Enhance fortune 50 company's insights teams research capabilities</h3>
                            </div>
                            <div>
                                <h3 className='manrope text-[40px] font-semibold text-[#1C1C1C] w-[400px] leading-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt </h3>
                            </div>
                            <div>
                                <h3 className='manrope text-[40px] font-semibold text-[#1C1C1C] w-[400px] leading-[48px]'> Sed do eiusmod tempor incididunt  </h3>
                            </div>
                        </Slider>

                        <Button label='Explore More' rightSection={<FaArrowRight />} variantType={'primary'} className={` w-[245px] h-[88px] text-[20px] mt-auto `} />
                    </div>
                </div>
            </div>
        </>
    )

}

function Faq() {

    const faq = [
        {
            value: 'Do you offer freelancers?',
            description: '',
        },
        {
            value: 'What\'s the guarantee that I will be satisfied with the hired talent?',
            description: '',
        },
        {
            value: 'Can I hire multiple talents at once?',
            description: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
        },
        {
            value: 'Why should I not go to an agency directly?',
            description: '',
        },
        {
            value: 'Who can help me pick a right skillset and duration for me?',
            description: '',
        },
    ]

    const items = faq.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control className='manrope' >
                {item.value}
            </Accordion.Control>
            <Accordion.Panel className='manrope text-[15px] text-[#617275]'>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            <div className='container mt-[15%] h-auto' >
                <div className='h-[700px] w-[100%] bg-[#E8EEE7] py-16 px-20 rounded-[40px] relative flex justify-between '>

                    <img className={` opacity-50 absolute bottom-0 left-[-40px] w-[580px] h-[470px] gradient-mask  `} src={arrow1} alt="" />

                    <div className='w-[40%]'>
                        <span className='cursive text-[#9E9D9D] text-[32px]'>
                            What&#39;s on your mind
                        </span>

                        <h3 className='manrope text-[#1C1C1C] text-[56px] font-semibold leading-tight'>
                            Ask Questions
                        </h3>
                    </div>

                    <div className='w-[48%] mt-[44px]' >
                        <Accordion
                            disableChevronRotation
                            defaultValue=""
                            classNames={{}}
                            chevron={<FaPlus />}
                        >
                            {items}
                        </Accordion>
                    </div>
                </div>

            </div>
        </>
    )
}

function Footer() {

    return (
        <>
            <div className='container mt-[3%] pb-[3%]' >
                <footer className='footer h-[144px] bg-[#F5F5F5] flex justify-between rounded-[40px] p-5' >
                    <div className="manrope block my-auto ms-10 ">
                        <img className='inline mt-[-4px]' src={copyright} alt="&copy;" />
                        <span className=' text-[18px] font-medium ms-2' >
                            Talup 2023. All rights reserved
                        </span>
                    </div>

                    <div className="manrope w-auto flex gap-14 my-auto me-8  text-[18px]">
                        <a href='/' className='underline' >Terms & Conditions</a>
                        <a href='/' className='underline'>Privacy Policy</a>
                    </div>
                </footer>
            </div>
        </>
    )

}

function Landing() {

    return (
        <div className='container'>
            <Navbar />

            <Hero />

            <Faq />

            <Footer />
        </div>
    )
}

export default Landing;