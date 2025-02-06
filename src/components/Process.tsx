import Pac from "../assets/Pac1.svg"
import Pac2 from "../assets/Pac2.svg"
import Pac3 from "../assets/Pac3.svg"
import Est from "../assets/Estrela.svg"

export function Process() {
    return (
        <section className="bg-black text-white py-12 flex justify-start pl-40">
            <div className="max-w-3xl pl-10"> 
                <div className="flex items-center">
                    <h2 className="text-4xl font-poppins ">
                        My process to design
                    </h2>
                    <img src={Est} className="w-6 h-20 ml-4" />
                </div>

                <div className="relative mt-24">
                    <div className="absolute left-5 top-0 w-[2px] h-full bg-gray-700"></div>


                    <div className="relative flex items-start space-x-6 mb-10">
                        <div className="w-10 h-10 flex items-center justify-center bg-black border border-white text-white rounded-full text-lg font-semibold relative z-10">
                            1
                        </div>
                        <div className="flex-1">
                            <img src={Pac} />
                            <h3 className="text-xl font-poppins mt-4">Step 1: Product design Research</h3>
                            <p className="text-gray-400 text-sm font-poppins">
                                This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.
                            </p>
                            <button className="mt-3 px-4 py-2 border border-s-yellow-200 border-r-violet-500 border-b-amber-200 border-t-violet-500 rounded-full text-sm bg-black hover:bg-gray-800 transition">
                                See Examples
                            </button>
                        </div>
                    </div>

                    <div className="relative flex items-start space-x-6 mb-10">
                        <div className="w-10 h-10 flex items-center justify-center bg-black border border-white text-white rounded-full text-lg font-semibold relative z-10">
                            2
                        </div>
                        <div className="flex-1">
                            <img src={Pac2} />
                            <h3 className="text-xl font-poppins mt-4">Step 2: UI design in Figma</h3>
                            <p className="text-gray-400 font-poppins text-sm">
                                This step focuses on creating user-friendly interfaces using Figma, ensuring an intuitive and visually appealing design.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-start space-x-6">
                        <div className="w-10 h-10 flex items-center justify-center bg-black border border-white text-white rounded-full text-lg font-semibold relative z-10">
                            3
                        </div>
                        <div className="flex-1">
                            <img src={Pac3} />
                            <h3 className="text-xl font-poppins font-semibold mt-4">Step 3: No-code develop in Webflow</h3>
                            <p className="text-gray-400 font-poppins text-sm">
                                In this stage, we bring the design to life using Webflow, ensuring a functional and responsive implementation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
