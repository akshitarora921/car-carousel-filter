/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useState } from "react";

import Card from "../components/Card";
import Filter from "../components/Filter";
import data from "../data/data.json";
import CardContainer from "../components/CardsContainer";

export const getServerSideProps = async () => {
  const data = await fetch("https://assessment-edvora.herokuapp.com/").then(
    (res) => res.json()
  );
  return {
    props: { data: data },
  };
};

export default function Home({ data }) {
  const [filters, setFilters] = useState({
    productName: "",
    city: "",
    state: "",
  });

  function filteringData(data) {
    let filterData = [...data];
    if (!!filters.productName) {
      filterData = filterData.filter(
        (product) => product.product_name === filters.productName
      );
    }
    if (!!filters.city) {
      filterData = filterData.filter(
        (product) => product.address.city === filters.city
      );
    }
    if (!!filters.state) {
      filterData = filterData.filter(
        (product) => product.address.state === filters.state
      );
    }
    return filterData;
  }
  const filteredData = filteringData(data);
  return (
    <div>
      <Head>
        <title>Card, Carousel and Filter</title>
        <meta name='description' content='Card Carousel and Filter' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='flex flex-col lg:flex-row bg-[#292929] min-h-screen p-2 lg:p-8'>
          <h1 className='text-3xl text-gray-300 block text-center p-2 lg:hidden'>
            Edvora
          </h1>

          <div className='flex items-center flex-col bg-[#131313] m-2 rounded-xl p-4 h-min'>
            <h4 className='text-2xl font-thin text-gray-300 p-2'>Filter</h4>
            <hr />
            <Filter
              data={filteredData}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div className='flex flex-1 flex-col lg:px-10 overflow-hidden'>
            <h1 className='text-3xl text-gray-300 hidden lg:block'>Edvora</h1>
            <h3 className='text-2xl text-gray-500'>Products</h3>
            {filteredData
              .reduce(
                (acc, cur) =>
                  acc.includes(cur.product_name)
                    ? acc
                    : [...acc, cur.product_name],
                []
              )
              .map((name) => (
                <div className='py-4' key={1}>
                  <h4 className='text-2xl text-gray-300 p-2'>{name}</h4>
                  <hr />
                  <CardContainer>
                    {filteredData.map((card, cardIdx) => (
                      <Card cardData={card} key={cardIdx} />
                    ))}
                  </CardContainer>
                </div>
              ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
