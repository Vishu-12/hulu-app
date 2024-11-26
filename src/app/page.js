import Image from "next/image";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
import requests from "../../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;
//   try {
//     const request = await fetch(
//       `https://api.themoviedb.org/3${
//         requests[genre]?.url || requests?.fetchTrending?.url
//       } `
//     ).then((res) => res.json());
//   } catch (err) {
//     throw new Error(`API request failed with status ${err}`);
//   }
//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }
