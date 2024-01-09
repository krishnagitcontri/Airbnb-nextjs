import { format } from "date-fns";
import { useRouter } from "next/router";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapGL from "../components/MapGL";
import Head from "next/head";

function Search({ searchResults }) {
  const router = useRouter();
  // console.log(searchResults);
  // ES 6 Destructuring
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  // console.log(range);

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
      <main className="flex mt-24">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col ">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                lat,
              }) => (
                <InfoCard
                  key={lat}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden lg:inline-flex min-w-[600px]">
          <MapGL searchResults={searchResults} />
        </section>
      </main>
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://api.npoint.io/d486a4c2fdb9b8f59c7e").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
