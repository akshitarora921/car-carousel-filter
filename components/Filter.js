function Filter({ data, filters, setFilters }) {
  return (
    <>
      <div className='relative inline-flex self-center py-2'>
        <select
          value={filters.productName}
          className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-12 w-60 pl-5 pr-10 bg-[#232323] hover:border-gray-400 appearance-none'
          onChange={(e) =>
            setFilters((preVal) => {
              return { ...preVal, productName: e.target.value };
            })
          }
        >
          <option className='font-light' disabled value='' selected>
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
              <option className='font-light' key={title} value={title}>
                {title}
              </option>
            ))}
        </select>
      </div>
      <div className='relative inline-flex self-center py-2'>
        <select
          className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-12 w-60 pl-5 pr-10 bg-[#232323] hover:border-gray-400 appearance-none'
          value={filters.state}
          onChange={(e) =>
            setFilters((preVal) => {
              return { ...preVal, state: e.target.value };
            })
          }
        >
          <option className='font-light' value='' disabled selected>
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
              <option className='font-light' key={title} value={title}>
                {title}
              </option>
            ))}
        </select>
      </div>
      <div className='relative inline-flex self-center py-2'>
        <select
          className='text-2xl font-thin rounded border-2 border-black text-gray-200 h-12 w-60 pl-5 pr-10 bg-[#232323] hover:border-gray-400 appearance-none'
          value={filters.city}
          onChange={(e) =>
            setFilters((preVal) => {
              return { ...preVal, city: e.target.value };
            })
          }
        >
          <option className='font-light' disabled value='' selected>
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
              <option className='font-light' key={title} value={title}>
                {title}
              </option>
            ))}
        </select>
      </div>
      <button
        className='bg-transparent hover:bg-red-500 duration-300 w-1/2 mt-2 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
        onClick={() => setFilters({ productName: "", city: "", state: "" })}
      >
        Reset
      </button>
    </>
  );
}
export default Filter;
