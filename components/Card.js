/* eslint-disable @next/next/no-img-element */
function Card({ cardData }) {
  return (
    <div className='bg-gray-600 font-semibold rounded-2xl shadow-lg p-4 min-w-fit overflow-hidden duration-500 z-10 md:hover:scale-110'>
      <div className='flex justify-between'>
        <img
          className='w-24 h-24 rounded-3xl shadow-lg'
          src={cardData.image}
          alt={cardData.description}
        />
        <div className='flex-1 ml-5'>
          <h1 className='text-lg text-gray-200'>{cardData.prduct_name}</h1>
          <h3 className='text-sm text-gray-400 '>{cardData.brand_name}</h3>
          <p className='text-xs text-gray-400 mt-4'>$ {cardData.price}9</p>
        </div>
      </div>
      <div className='flex justify-around items-center mt-3 gap-3'>
        <h1 className='text-md text-gray-500'>{cardData.address.city}</h1>
        <h3 className='text-sm text-gray-400'>
          Date: {new Date(cardData.data).toString()}
        </h3>
      </div>
      <p className='text-xs text-gray-400 mt-4'>{cardData.discription}</p>
    </div>
  );
}
export default Card;
