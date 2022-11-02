import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Img2 from '../img/img-2.jpg';
function Card2() {
  let [btn1, setBtn1] = useState(false);
  let [btn2, setBtn2] = useState(false);
  let [btn3, setBtn3] = useState(false);
  let [sz1, setSz1] = useState(false);
  let [sz2, setSz2] = useState(false);
  let [sz3, setSz3] = useState(false);
  let [sz4, setSz4] = useState(false);
  let [prize, setPrize] = useState(0);
  function size1() {
    setPrize(230000);
    setSz1((sz1 = !sz1));
    setSz2(false);
    setSz3(false);
    setSz4(false);
  }
  function size2() {
    setPrize(295000);
    setSz1(false);
    setSz2((sz2 = !sz2));
    setSz3(false);
    setSz4(false);
  }
  function size3() {
    setPrize(327000);
    setSz1(false);
    setSz2(false);
    setSz3((sz3 = !sz3));
    setSz4(false);
  }
  function size4() {
    setPrize(379000);
    setSz1(false);
    setSz2(false);
    setSz3(false);
    setSz4((sz4 = !sz4));
  }
  function color1() {
    setBtn1((btn1 = !btn1));
    setBtn2(false);
    setBtn3(false);
  }

  function color2() {
    setBtn1(false);
    setBtn2((btn2 = !btn2));
    setBtn3(false);
  }

  function color3() {
    setBtn2(false);
    setBtn1(false);
    setBtn3((btn3 = !btn3));
  }

  const addToCard = () => {
    alert('Produk Telah Di tambahkan ke keranjang');
    setPrize(0);
  };
  return (
    <div className="w-full grid grid-flow-row gap-y-10 justify-center items-center">
      {/* title */}
      <div className="container h-10 box-border ">
        <p className="text-2xl text-center font-extrabold">LATIHAN</p>
      </div>
      {/* title */}

      {/* card-2 */}
      <div className="container grid grid-cols-2">
        <div className="">
          <img src={Img2} alt="" className="" />
        </div>
        <div className="w-full px-10 flex flex-col justify-evenly">
          <p className="font-medium text-blue-500">Keyboard</p>
          <p className="font-medium text-4xl">Keyboard Mechanic KNL-12</p>
          <p className="font-bold text-2xl">
            For <span className="text-amber-400 hover:text-amber-500 duration-300 transition-all ease-in-out cursor-pointer">Sale 20%</span>
          </p>
          <p className="mb-3 ml-7 indent-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eos eaque! Eum minus quae dolores temporibus praesentium dolorum! Voluptatibus omnis minus itaque illo voluptates, ipsam saepe similique vitae aliquam reiciendis
            vero laborum ad consequatur, neque tenetur earum ullam praesentium ipsa magni! Temporibus alias ipsa repellendus accusamus fugit saepe inventore eum!
          </p>
          <div className="w-full">
            <p className="font-semibold mb-4">Size</p>
            <div className="w-1/2 flex justify-between">
              <div className={`w-[23%] aspect-video flex justify-center items-center border border-slate-800 cursor-pointer  ${sz1 ? 'active' : ''}`} onClick={size1}>
                40%
              </div>
              <div className={`w-[23%] aspect-video flex justify-center items-center border border-slate-800 cursor-pointer  ${sz2 ? 'active' : ''}`} onClick={size2}>
                60%
              </div>
              <div className={`w-[23%] aspect-video flex justify-center items-center border border-slate-800 cursor-pointer  ${sz3 ? 'active' : ''}`} onClick={size3}>
                65%
              </div>
              <div className={`w-[23%] aspect-video flex justify-center items-center border border-slate-800 cursor-pointer  ${sz4 ? 'active' : ''}`} onClick={size4}>
                75%
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="font-semibold mb-4">Colors</p>
            <div className="w-1/2 flex justify-around">
              <div className="w-[30%] aspect-video border border-slate-800 grid grid-cols-2 relative cursor-pointer rounded" onClick={color1}>
                <div className={`absolute w-full h-full bg-slate-600 bg-opacity-75 justify-center items-center text-white ${btn1 ? 'flex' : 'hidden'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full h-full bg-sky-600 aspect-video"></div>
                <div className="w-full h-full aspect-video"></div>
              </div>

              <div className="w-[30%] aspect-video flex justify-center items-center border border-slate-800 relative cursor-pointer rounded" onClick={color2}>
                <div id="btn2" className={`absolute w-full h-full bg-slate-600 bg-opacity-75 justify-center items-center text-white ${btn2 ? 'flex' : 'hidden'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="w-[30%] aspect-video border border-slate-800 relative grid grid-cols-2 cursor-pointer rounded" onClick={color3}>
                <div id="btn3" className={`absolute w-full h-full bg-slate-600 bg-opacity-75 justify-center items-center text-white ${btn3 ? 'flex' : 'hidden'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full h-full bg-red-600 aspect-video"></div>
                <div className="w-full h-full aspect-video"></div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="w-full">
            <p className="text-xl font-semibold mb-5">Prize</p>
            <p className="text-3xl font-bold">IDR {prize},-</p>
          </div>
          <div className="w-3/4">
            <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-700 duration-200 transition-all font-semibold text-white rounded-md">Buy Now</button>
            <button className="px-5 py-3 bg-teal-700 hover:bg-emerald-900 duration-200 transition-all  ml-7 font-semibold text-white rounded-md" onClick={addToCard}>
              Add to cart
            </button>
            <Link to="/" className="px-5 py-3 bg-lime-700 hover:bg-lime-900 duration-200 transition-all  ml-7 font-semibold text-white rounded-md ">
              Go to Tugas
            </Link>
          </div>
        </div>
      </div>
      {/* card-2 */}
    </div>
  );
}

export default Card2;
