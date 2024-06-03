import AboutUsPoints from "../Components/AboutUsPoints"


const AboutUs = () => {
  return (
    <div className="h-screen w-full bg1">
      <div className="flex contain w-full h-full items-center">
      <div className="basis-1/2">
      <p className='px-10  rounded-2xl inline-block text-purple text-[1.3rem] font-semibold bg-purple/30 text-left'>About Us</p>
      <h1 className="text-[1.8rem] leading-tight font-bold mt-2">Keep track of all your company assets with ease. From laptops to paper, streamline management and enhance productivity.</h1>
      <div className="space-y-5 mt-10">
      <AboutUsPoints tag={"Streamlined Asset Tracking"} tittle={"Effortlessly monitor and manage both returnable and non-returnable assets, ensuring optimal utilization."} bg={"grad1"}/>
      <AboutUsPoints tag={"Enhanced Accountability"} tittle={"Empower HR managers to track asset usage, fostering a culture of responsibility and transparency within your organization."} bg={"grad2"}/>
      <AboutUsPoints tag={"Customized Solutions"} tittle={"Tailored to fit your specific needs, our system provides personalized asset management strategies for seamless integration into your workflow."} bg={"grad3"}/>
      </div>
      </div>
      <div className="basis-1/2 relative">
        <img src="/src/assets/vector1.png" alt=""  className="absolute -top-14 moving-div z-10"/>
        <img src="/src/assets/pic5.jpg" alt=""  className="rounded-2xl relative mx-auto z-50"/>
        <img src="/src/assets/vector2.png" alt=""  className="absolute right-6 -bottom-16 moving-div2 z-10"/>
      </div>
      </div>
    </div>
  )
}

export default AboutUs
