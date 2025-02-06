import Est from "../assets/Estrela.svg"
export function Testimonials() {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className=" flex max-w-3xl mx-auto ml-122">
        <h2 className="text-3xl font-poppins">Client testimonials</h2>
        <img src={Est} className="w-6 h-10 ml-4" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mt-10 max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl shadow-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full" />
            <div>
              <h3 className="text-lg font-poppins">Client Name</h3>
              <p className="text-sm text-gray-400 font-poppins">Product designer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300 font-poppins text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
          
        </div>

        <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl shadow-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full" />
            <div>
              <h3 className="text-lg font-poppins">Client Name</h3>
              <p className="text-sm text-gray-400 font-poppins">Product designer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300 font-poppins text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
        </div>

        <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl shadow-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full" />
            <div>
              <h3 className="text-lg font-poppins">Client Name</h3>
              <p className="text-sm text-gray-400 font-poppins">Product designer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300 font-poppins text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
        </div>

        <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl shadow-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full" />
            <div>
              <h3 className="text-lg font-poppins">Client Name</h3>
              <p className="text-sm text-gray-400 font-poppins">Product designer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300 font-poppins text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
        </div>
      </div>
    </section>
  );
}
