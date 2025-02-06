export function Card() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-start justify-center p-10">
        <div className="flex items-center">
        <h2 className="text-white text-3xl font-poppins mb-6 ml-96 flex items-center gap-2 self-start">
          Some Featured projects 
        </h2>
        </div>
        <div className="bg-[#111] p-10 rounded-2xl relative flex w-full max-w-5xl min-h-[600px] ml-96 mt-16">
          <div className="w-128 h-128 bg-gradient-to-br from-blue-500 to-orange-300 rounded-xl"></div>
          <div className="absolute right-36 top-1/2 transform -translate-y-1/2 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <h3 className="text-xl font-poppins font-bold mt-5">Project Name</h3>
          </div>
        </div>

        <div className="bg-[#111] p-10 rounded-2xl relative flex w-full max-w-5xl min-h-[600px] ml-96 mt-16">
          <div className="w-128 h-128 bg-gradient-to-br from-blue-500 to-orange-300 rounded-xl"></div>
          <div className="absolute right-36 top-1/2 transform -translate-y-1/2 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <h3 className="text-xl font-poppins font-bold mt-5">Project Name</h3>
          </div>
        </div>

        <div className="bg-[#111] p-10 rounded-2xl relative flex w-full max-w-5xl min-h-[600px] ml-96 mt-16">
          <div className="w-128 h-128 bg-gradient-to-br from-blue-500 to-orange-300 rounded-xl"></div>
  
          <div className="absolute right-36 top-1/2 transform -translate-y-1/2 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <h3 className="text-xl font-poppins font-bold mt-5">Project Name</h3>
          </div>
        </div>
      </div>
    );
}