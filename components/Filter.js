function Filter({ data }) {
  return (
    <>
      <div className='relative inline-flex self-center py-2'>
        <select className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-14 w-60 pl-5 pr-10 bg-gray-700 hover:border-gray-400 appearance-none'>
          <option value='' disabled selected>
            Product
          </option>
          {data
            .reduce(
              (acc, red) =>
                acc.includes(red.product_name)
                  ? acc
                  : [...acc, red.product_name],
              []
            )
            .sort()
            .map((title) => (
              <option key={title}>{title}</option>
            ))}
        </select>
      </div>
      <div className='relative inline-flex self-center py-2'>
        <select className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-14 w-60 pl-5 pr-10 bg-gray-700 hover:border-gray-400 appearance-none'>
          <option value='' disabled selected>
            State
          </option>
          {data
            .reduce(
              (acc, red) =>
                acc.includes(red.address.state)
                  ? acc
                  : [...acc, red.address.state],
              []
            )
            .sort()
            .map((title) => (
              <option key={title}>{title}</option>
            ))}
        </select>
      </div>
      <div className='relative inline-flex self-center py-2'>
        <select className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-14 w-60 pl-5 pr-10 bg-gray-700 hover:border-gray-400 appearance-none'>
          <option value='' disabled selected>
            City
          </option>
          {data
            .reduce(
              (acc, red) =>
                acc.includes(red.address.city)
                  ? acc
                  : [...acc, red.address.city],
              []
            )
            .sort()
            .map((title) => (
              <option key={title}>{title}</option>
            ))}
        </select>
      </div>
    </>
  );
}
export default Filter;
