import { useRef } from "react";
import { usePosition } from "../hooks/usePosition";

function CardContainer({ children }) {
  const ref = useRef();
  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);
  return (
    <div className='relative'>
      <button
        aria-label='move right'
        className={`btn btn-accent rounded-sm btn-size absolute right-0 top-1/2 z-20 -translate-y-1/2 ${
          !hasItemsOnRight && "hidden"
        }`}
        // todo: -translate-y-1/2 this also we need to add to make it vertically center
        onClick={scrollRight}
        type='button'
      >
        <svg
          width='12'
          height='35'
          viewBox='0 0 12 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 1L11 17.5L1 34'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <button
        aria-label='move left'
        className={`btn btn-accent rounded-sm btn-size absolute left-0 top-1/2 z-20 -translate-y-1/2 rotate-180 ${
          !hasItemsOnLeft && "hidden"
        }`}
        onClick={scrollLeft}
        type='button'
      >
        <svg
          width='12'
          height='35'
          viewBox='0 0 12 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 1L11 17.5L1 34'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div
        className='flex bg-[#131313] p-4 rounded-3xl my-3 lg:mx-6 overflow-x-scroll gap-6 no-scrollbar'
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}
export default CardContainer;
