import { formatDate } from "../utils/formatDate";

/* eslint-disable @next/next/no-img-element */
function Card({ cardData }) {
  console.log(cardData);
  return (
    <div className='bg-[#232323] font-semibold rounded-2xl shadow-lg p-4 pb-0 min-w-[260px] overflow-hidden duration-500 z-10 md:hover:scale-105'>
      <div className='flex justify-between'>
        <img
          className='w-24 h-24 rounded-3xl shadow-lg'
          src={cardData.image}
          alt={cardData.description}
        />
        <div className='flex-1 ml-5'>
          <h1 className='text-[15px] text-gray-200'>{cardData.product_name}</h1>
          <h3 className='text-[13px] text-gray-50/60 '>
            {cardData.brand_name}
          </h3>
          <p className='text-[13px] text-gray-50 mt-2'>$ {cardData.price}9</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <h1 className='text-[13px] text-gray-500'>{cardData.address.city}</h1>
        <h3 className='text-[13px] font-semibold text-gray-400'>
          Date: {formatDate(cardData.date)}
        </h3>
      </div>
      <p className='text-[11px] text-gray-400 mt-2'>{cardData.discription}</p>
    </div>
  );
}
export default Card;
