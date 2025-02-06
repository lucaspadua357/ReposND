import Flor from "../assets/detalhe.svg"

export function Hero2() {
  return (
    <div className="grid grid-cols-6 grid-rows-7 p-18 h-[800px] bg-black">
      {Array.from({ length: 42 }).map((_, index) => {
        const isBigCard =
          [7, 8, 9, 10, 13, 14, 15, 16, 19, 20, 21, 22].includes(index);


        if (index === 8) {
          return (
            <div key={index} className="flex-col text-center col-span-4 row-span-3 bg-black flex items-center justify-center rounded-lg text-white text-xl font-bold shadow-lg ">
              <h1 className="text-4xl font-poppins font-light">I design and build clean websites</h1>
              <p className="text-xl font-poppins font-light max-w-[520px] ...">Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
              <button className="bg-gradient-to-r from-violet-500 to-yellow-200 text-black font-semibold px-4 py-2 mt-4 rounded-full">Hire me</button>
            </div>
          );
        }

        if (isBigCard) return null;

        return (
          <div key={index} className="bg-black flex items-center justify-center border border-gray-700 text-white shadow-md p-4">
          </div>
        );
      })}
      <div className="flex items-center gap-40 mt-8 ml-32 text-gray-300 text-2xl">
        <a>Framer</a>
        <img src={Flor}/>
        <a>Webflow</a>
        <img src={Flor}/>
        <a>Figma</a>
        <img src={Flor}/>
        <a>Notion</a>
        <img src={Flor}/>
      </div>
    </div>
  );
}


