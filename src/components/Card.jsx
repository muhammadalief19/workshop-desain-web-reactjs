import img1 from '../img/img-1.png';
import { useState } from 'react';
export default function Card() {
  const [prize, setPrize] = useState('-');
  function k207() {
    setPrize('207.000');
  }
  function k357() {
    setPrize('314.000');
  }
  function k472() {
    setPrize('379.000');
  }
  function k321r() {
    setPrize('694.000');
  }
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="container grid grid-cols-2">
        <div className="w-full">
          <img src={img1} alt="" className="" />
        </div>
        <div className="w-full py-5 px-10 flex flex-col justify-around">
          <p className="text-5xl  font-bold">The best SetUp Gaming</p>
          <p className="text-3xl font-semibold ">December Relaease</p>
          <p className="text-xl  font-medium">
            Id: <span className="text-sky-600 cursor-pointer">Gaming Santuy</span>
          </p>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi soluta ullam perferendis id dignissimos voluptas, obcaecati provident reiciendis, ad excepturi assumenda numquam. Officiis quia, fugit obcaecati consequuntur quam
            harum voluptates, voluptatibus similique nam consequatur error expedita architecto eos natus totam temporibus aspernatur minima deleniti quaerat cum doloribus pariatur quod nostrum quae. Iusto, odit aspernatur delectus quam
            expedita cumque aliquid facere?
          </p>
          <p className=" text-lg font-medium">Type :</p>
          <div className="w-[55%] grid grid-cols-4 gap-4 ">
            <div className="w-full bg-cyan-700 hover:bg-cyan-900 duration-200 transition-all ease-in-out flex justify-center items-center aspect-square font-medium text-white rounded cursor-pointer" onClick={k207}>
              K-207
            </div>
            <div className="w-full bg-cyan-700 hover:bg-cyan-900 duration-200 transition-all ease-in-out flex justify-center items-center aspect-square font-medium text-white rounded cursor-pointer" onClick={k357}>
              K-357L
            </div>
            <div className="w-full bg-cyan-700 hover:bg-cyan-900 duration-200 transition-all ease-in-out flex justify-center items-center aspect-square font-medium text-white rounded cursor-pointer" onClick={k472}>
              K-472
            </div>
            <div className="w-full bg-cyan-700 hover:bg-cyan-900 duration-200 transition-all ease-in-out flex justify-center items-center aspect-square font-medium text-white rounded cursor-pointer" onClick={k321r}>
              K-321R
            </div>
          </div>
          <div className="">
            <p className="text-xl font-extrabold">IDR {prize}</p>
          </div>
          <div className="">
            <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-700 duration-200 transition-all font-semibold text-white rounded-md">Buy Now</button>
            <button className="px-5 py-3 bg-teal-700 hover:bg-emerald-900 duration-200 transition-all  ml-7 font-semibold text-white rounded-md">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
