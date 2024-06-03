import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="home h-[92vh] w-full ">
      {/* <div className="contain flex h-full items-center">
        <div className="basis-1/2">

        </div>
        <div className="basis-1/2">
          <img src="/src/assets/pic1.png" alt="" className="w-full"/>
        </div>
      </div> */}
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper home">
        <SwiperSlide><div className="contain flex h-full items-center justify-between gap-10">
        <div className="basis-1/2 flex flex-col items-start">
            <p className='px-6 rounded-2xl inline-block text-purple font-semibold bg-purple/10 text-left'>Effortless Asset Management for Your Business</p>
            <h1 className='text-[3.5rem] font-sans text-left leading-[4.2rem] font-bold mt-2'>Streamline tracking and <span className='text-purple'>management</span> of company assets with our <span className='text-purple'>web app</span>.</h1>
            <div className='grid grid-cols-3 mt-6 text-left gap-10'>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text1'>200+</h1>
                  <h3 className='font-semibold -mt-1'>Company Jonied</h3>
              </div>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text2'>90%</h1>
                  <h3 className='font-semibold -mt-1'>Customer Satisfaction</h3>
              </div>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text3 '>50%</h1>
                  <h3 className='font-semibold -mt-1'>Boost in Productivity</h3>
              </div>
            </div>
            <Link to={'/joinasemployee'} className='px-10 py-2 bg-purple/80 text-white rounded-3xl mt-8 font-semibold'><button>Join as HR Manager</button></Link>
        </div>
        <div className="basis-1/2">
          <img src="/src/assets/pic1.png" alt="" className="w-full"/>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="contain flex h-full items-center justify-between gap-10">
        <div className="basis-1/2 flex flex-col items-start">
            <p className='px-6 rounded-2xl inline-block text-purple font-semibold bg-purple/10 text-left'>Effortless Asset Management for Your Business</p>
            <h1 className='text-[3.8rem] text-left leading-[4.2rem] font-semibold mt-2'>Track, <span className='text-purple'>manage</span>, and optimize your <span className='text-purple'>company</span> assets with ease.</h1>
            <div className='grid grid-cols-3 mt-6 text-left gap-10'>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text1'>200+</h1>
                  <h3 className='font-semibold -mt-1'>Company Jonied</h3>
              </div>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text2'>90%</h1>
                  <h3 className='font-semibold -mt-1'>Customer Satisfaction</h3>
              </div>
              <div>
                  <h1 className='text-[2.8rem] font-extrabold gradient-text3 '>50%</h1>
                  <h3 className='font-semibold -mt-1'>Boost in Productivity</h3>
              </div>
            </div>
            <Link to={'/joinasadmin'} className='px-10 py-2 bg-purple/80 text-white rounded-3xl mt-8 font-semibold'><button>Join as Employee</button></Link>
        </div>
        <div className="basis-1/2">
          <img src="/src/assets/pic6.png" alt="" className="w-full"/>
        </div>
      </div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroSection
