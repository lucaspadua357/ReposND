import Est from "../assets/Estrela.svg"
export function Idea() {
    return (
        <section className="bg-black text-white py-16 px-6 flex items-center justify-between">
            <div className="max-w-lg ml-48">
                <div className="flex">
                    <h2 className="text-4xl font-poppins flex items-center gap-2">
                        Have idea about project?
                    </h2>
                    <img src={Est} className="w-6 h-10 ml-4" />
                </div>
                <p className="mt-16 text-gray-400 font-poppins text-sm max-w-[380px]">
                    Write anything here something about yourself to showcase what actually you doing or targeting etc.
                </p>
                <button className="mt-10 mb-32 px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-yellow-200 text-black font-poppins shadow-lg">
                    Send us a message
                </button>
            </div>

        </section>
    );
}
