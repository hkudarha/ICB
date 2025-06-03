import "./card.css";
import img from "../assets/LeandingPage/icb-nft-mhLzBqd-.png";

const cardsData = [
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
  {
    title: "ICB Network",
    description:
      "A POS-based Layer-1 blockchain offering robust, efficient, and scalable solutions, poised to transform multiple industries.",
    image: img,
  },
];

function Card() {
  return (

    <>

     <div className="text-center ">
          
          <div className="text-xs text-purple-400 tracking-widest mb-4 uppercase">OUR ECOSYSTEM</div>
          <h3 className="text-[2rem] font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-fade-in">
           ICB Labs Ecosystem
          </h3>
          
          <p className="text-[1rem] text-gray-300 max-w-4xl mx-auto leading-relaxed">
           Our ecosystem of  blockchain products  powers seamless interactions,  secure transactions,  and  decentralized solutions, transforming industries and paving the way for a smarter, more connected future

          </p>
        </div>
    
    <div className="grid sm:grid-cols-3 grid-cols-1  gap-[3rem]  px-[2rem]  mx-auto overflow-hidden ">
      {cardsData.map((card, index) => (
        <div key={index} className="card my-[2rem]">
          <div className="corner">
            <i data-corner="tl"></i>
            <i data-corner="br"></i>
            <div data-action="more" className="action">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 7l-11 11" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </div>
          </div>

          <img src={card.image} alt={card.title} className="w-full h-[10rem]" />
          <h3 className="font-bold text-[1.5rem]">{card.title}</h3>
          <p className="mb-[4rem]">{card.description}</p>
        </div>
      ))}
    </div>

    </>
  );
}

export default Card;
