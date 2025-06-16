import background from '/src/assets/images/backgrounds.svg'
import Navbar from '../components/navbar/Navbar'


const Homepage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
        
        {/* Background Image (flipped vertically & pinned to bottom) */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-cover bg-no-repeat scale-y-[-1] z-0"
          style={{ backgroundImage: `url(${background})` }}>
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
            <Navbar />

            {/* Landingpage content */}
            <div className="w-full h-screen flex items-end">
        
                {/* centered container with bottom margin and padding */}
                <div className="container mx-auto mb-30 px-4">

                    {/* main headline */}
                    <h1 className=" uppercase text-2xl md:text-3xl lg:text-4xl font-bold">
                        Empowering Your Health Journey
                    <br />
                        With Smart Medical Solutions
                    </h1>

                    <p className=" w-full max-w-2xl my-8 text-base md:text-lg">
                        We provide innovative, technology-driven solutions to simplify your access to healthcare. 
                        From booking medical appointments and managing pharmacy resources to handling health insurance and delivering medications — we make healthcare easier, smarter, and more accessible for everyone.
                    </p>

                    {/* button with animated hover effect */}
                    <a 
                    href="#_" 
                    className="relative inline-block group">
                        <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-1 border-gray-900 rounded-md group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-1 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Meet Our Team</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"></span>
                    </a>

                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Homepage
