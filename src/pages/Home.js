import React, { useState } from 'react';
import Header from '../component/Header';
import Traveller from "../assets/Traveller.png"
import Plane from '../assets/plane.png';
import Play from '../assets/Play.png'
import Banner from '../assets/banner.png'; // Importing image
import hinh1 from "../assets/hinh1.png"
import hinh2 from "../assets/hinh2.png"
import hinh3 from "../assets/hinh3.png"
import hinh4 from "../assets/hinh4.png"
import Rectangle1 from '../assets/Rectangle1.png'
import Rectangle2 from '../assets/Rectangle2.png'
import Rectangle3 from '../assets/Rectangle3.png'
import Group1 from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'
import Group3 from '../assets/Group3.png'
import image from "../assets/Image.png"
import { MailTwoTone, BgColorsOutlined,CustomerServiceOutlined,SettingTwoTone } from '@ant-design/icons';
import { FloatButton, Button, Input } from 'antd';
import Meta from 'antd/es/card/Meta';
import Footter from '../component/Footter';

function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`w-full h-full justify-center items-center ${darkMode ? 'dark' : ''}`}>

            <Header darkMode={darkMode} />
            {/* <button onClick={toggleDarkMode} className="mt-4 bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-4 rounded">
                    Toggle Dark Mode
            </button> */}

            {/* <section className='flex '>
            
                <div
                    className="w-full h-[620px]  md:mx-5 bg-no-repeat bg-cover relative h-custom"
                     style={{ backgroundImage: `url(${Banner})` }} 
                    
                >
                 
                    <div
                        className="
                        absolute
                        top-1/2
                        left-1/2
                        transform
                        -translate-x-1/2 -translate-y-1/2
                        z-10
                        text-white text-center
                    "
                    >
                        <p className="text-xl mb-5">Food app</p>

                        <h1
                            className="
                        text-4xl
                        mb-5
                        font-bold
                        max-w-2xl
                        md:leading-relaxed md:text-5xl
                        "
                        >
                            Why stay hungry when you can order from Bella Onojie
                        </h1>

                        <p className="text-xl mb-5 font-light">
                            Download the Bella Onojie’s food app now on
                        </p>

                        <div className="flex justify-center">
                            <button
                                className="
                            mx-4
                            border border-transparent
                            bg-red-500
                            px-10
                            py-3
                            rounded-full
                            hover:bg-transparent hover:border-white
                            transition-all
                        "
                            >
                                Playstore
                            </button>
                            <button
                                className="
                                mx-4
                                border border-white
                                bg-transparent
                                px-10
                                py-3
                                rounded-full
                                hover:bg-red-500 hover:border-transparent
                                transition-all
                            "
                            >
                                Appstore
                            </button>
                        </div>
                    </div>


                </div>
           
            </section> */}
            <section>

                <div className='flex flex-col md:flex-row md:mx-16 md:my-10 mx-5 mt-3  '>
                    <div className='flex flex-col w-full md:ml-44 mt-12 space-y-3'>
                        <p className='text-red-700 text-base font-bold uppercase'>Best Destinations around the world</p>
                        {/* <img src={Plane} className='w-1/5'/> */}
                        <h1 className='md:text-7xl text-5xl   text-black font-black font-mono animate-pulse '>Travel, enjoy<br />
                            and live a new<br />
                            and full life
                        </h1>
                        <p className='font-thin'>Built Wicket longer admire do barton vanity itself do in it.<br />
                            Preferred to sportsmen it engrossed listening.
                            <br /> Park gate sell they west hard for the.</p>
                        <div className='flex flex-row'>
                            <button className='hover:bg-red-500 hover:border-transparent h-16
                            bg-[#F1A501] text-base text-white font-semibold border-2 rounded-2xl px-5 py-2'>Find out more</button>
                            <div className='flex flex-row justify-center items-center'>
                                <img src={Play} className='flex h-16 mt-4 ml-3' />
                                <a >
                                    Play Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        {/* <img src={Plane} className='top-[233.43px] w-[137.29px] h-[95.23px] ' /> */}
                        <img src={Traveller} className=' w-[765px] h-[664px] ' />

                        {/* <img src={Plane} className='top-[280.43px] w-[137.29px] h-[95.23px] left-[1182px]'/> */}



                    </div>


                </div>

            </section>

            <section >
                <div className='flex flex-col justify-center items-center  '>
                    <div className='justify-center items-center flex flex-col'>
                        <p className='uppercase font-semibold text-base text-[#5E6282] text-center '>CATEGORY</p>
                        <h1 className='font-mono font-bold text-4xl text-center'>We Offer Best Services</h1>

                    </div>
                    <div className='flex flex-col md:flex-row   md:my-48 my-10'>
                        <div className='w-[302px] h-[350px] flex flex-col justify-center items-center text-center hover:border-4 hover:border-white hover:bg-blue-400 hover:text-red-600 rounded-3xl  '>
                            <img src={hinh1} />
                            <p>Calculated Weather</p>
                            <p>Built Wicket longer<br />
                                admire do barton vanity<br />
                                itself do in it.</p>
                        </div>
                        <div className='w-[302px] h-[350px]  flex flex-col justify-center items-center text-center hover:border-4 hover:border-white hover:bg-blue-400 hover:text-red-600 rounded-3xl  '>
                            <img src={hinh2} />
                            <p>Best Flights</p>
                            <p>Engrossed listening.<br />
                                Park gate sell they <br />
                                west hard for the.</p>
                        </div>
                        <div className='w-[302px] h-[350px] flex flex-col justify-center items-center text-center hover:border-4 hover:border-white hover:bg-blue-400 hover:text-red-600  rounded-3xl '>
                            <img src={hinh3} />
                            <p>Local Events</p>
                            <p>Barton vanity itself <br />
                                do in it. Preferd to<br />
                                men it engrossed listening.</p>
                        </div>
                        <div className='w-[302px] h-[350px] flex flex-col justify-center items-center text-center hover:border-4 hover:border-white hover:bg-blue-400 hover:text-red-600 rounded-3xl  '>
                            <img src={hinh4} />
                            <p>Customization</p>
                            <p>We deliver outsourced <br />
                                aviation services for <br />
                                military customers</p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-col justify-center items-center mb-10 '>
                    <div className='justify-center items-center flex flex-col'>
                        <p className='uppercase font-semibold text-base text-[#5E6282] text-center '>Top Selling</p>
                        <h1 className='font-mono font-bold text-4xl text-center'>Top Destinations</h1>

                    </div>

                    <div className='flex flex-col md:flex-row md:space-x-20 h-auto '>

                        <div
                            className='border-white border-2 rounded-3xl  shadow-lg rounded-t-3xl w-[315px] h-[auto] mt-10'>
                            <img className='w-[315px]  rounded-3xl h-[315px]' src={Rectangle1} />
                            <div className='flex flex-col '>
                                <div className='flex flex-row '>
                                    <h3 className='text-left ml-4'> Rome, Italty</h3>
                                    <h3 className='ml-36'>$5,42k</h3>
                                </div>
                                <div className='mt-2 ml-4 flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mt-1">
                                        <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                                    </svg>
                                    <h3 className='ml-2'>10 Days Trip</h3>
                                </div>
                            </div>

                        </div>


                        <div

                            className=' border-white border-2 rounded-3xl shadow-lg rounded-t-3xl w-[315px] h-[auto] mt-10'>


                            <img className='w-[315px] rounded-3xl h-[315px]' src={Rectangle2} />
                            <div className='flex flex-col'>
                                <div className='flex flex-row '>
                                    <h3 className='text-left ml-4'> London, UK</h3>
                                    <h3 className='ml-36'>$4.2k</h3>
                                </div>
                                <div className='ml-4 mt-2 flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mt-1">
                                        <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                                    </svg>
                                    <h3 className='ml-2'>12 Days Trip</h3>
                                </div>
                            </div>

                        </div>


                        <div

                            className='border-white border-2 rounded-3xl shadow-lg rounded-t-3xl w-[315px] h-[auto] mt-10'>


                            <img className='w-[315px] rounded-3xl h-[315px]' src={Rectangle3} />
                            <div className='flex flex-col'>
                                <div className='flex flex-row '>
                                    <h3 className='text-left ml-4'> Full Europe</h3>
                                    <h3 className='ml-36'>$15k</h3>
                                </div>
                                <div className='mt-2 flex flex-row ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mt-1">
                                        <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                                    </svg>
                                    <h3 className='ml-2'>28 Days Trip</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section>
                <div className='flex flex-col md:flex-row justify-center items-center md:ml-36'>
                    <div className='flex flex-col '>
                        <div className='flex flex-col'>
                            <p className='text-[#5E6282] font-semibold'>Easy and Fast</p>
                            <h1 className='font-mono text-4xl font-bold'>Book your next trip<br />
                                in 3 easy steps</h1>
                        </div>
                        <div className='flex flex-col space-y-8 mt-5'>
                            <div className='flex flex-row   '> <img className='my-2 mx-2' src={Group1}></img>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[#5E6282]'>Choose Destination</p>
                                    <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur <br />
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className='flex flex-row   '> <img className='my-2 mx-2' src={Group2}></img>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[#5E6282]'>Make Payment</p>
                                    <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur <br />
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className='flex flex-row   '> <img className='my-2 mx-2' src={Group3}></img>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[#5E6282]'>Reach Airport on Selected Date</p>
                                    <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur <br />
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex md:ml-44'>
                        <img src={image} className='ml-6' />
                    </div>
                </div>
            </section>
            <section>
                <div className=' flex flex-col justify-center items-center my-2 ' >
                    <div className='md:h-52 flex flex-col border-4 md:w-3/5 rounded-tl-3xl m-5'>
                        <h2 className='text-[#5E6282] text-center text-2xl font-semibold mt-9 '>
                            Subscribe to get information, latest news and other<br />
                            interesting offers about Jadoo</h2>
                        <div className='flex my-7 flex-row justify-center items-center '>
                            <Input
                                className='w-auto mx-4 '
                                prefix={<MailTwoTone className="site-form-item-icon " />}
                                type="email"
                                placeholder="Your email"
                            />

                            {/* <button> Subscribe</button> */}
                            <div className="w-auto flex  items-start justify-start max-w-full ">
                                <Button type='default' className='bg-red-500 text-white'>
                                    Subscribe

                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            
           
            <FloatButton.Group
                trigger="click"
                type="primary"
                style={{
                    right: 30,
                }}
                icon={<SettingTwoTone />}
            >
                <FloatButton tooltip={<div>Dask mode</div>}  onClick={toggleDarkMode} icon={<BgColorsOutlined />} />

                <FloatButton.BackTop tooltip={<div>Back Top</div>}
                />
            </FloatButton.Group>


            <Footter />
        </div>

    );
}

export default Home;
