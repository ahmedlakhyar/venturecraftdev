import "../styles/globals.css";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
// import Head from "next/head";
// import PageLogoLoader from "components/PageLogoLoader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 500,
  //     delay: 150,
  //     once: true,
  //     // disable: true,
  //   });
  // }, []);

  return (
    <HubspotProvider>
      <Head>
        <title>Pitch Deck & Commercialization Experts | VentureCraft</title>
        <meta name="title" content="Pitch Deck & Commercialization Experts | VentureCraft" />
        <meta name="description" content="We transform your passion and vision into a viable, fundable business through proven commercialization strategies and captivating investor presentations." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://venturecraft.io/" />
        <meta property="og:title" content="Pitch Deck & Commercialization Experts | VentureCraft" />
        <meta property="og:description" content="We transform your passion and vision into a viable, fundable business through proven commercialization strategies and captivating investor presentations." />
        <meta property="og:image" content="https://venturecraft.io/images/new-venturecraft-social.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://venturecraft.io/" />
        <meta property="twitter:title" content="Pitch Deck & Commercialization Experts | VentureCraft" />
        <meta property="twitter:description" content="We transform your passion and vision into a viable, fundable business through proven commercialization strategies and captivating investor presentations." />
        <meta property="twitter:image" content="https://venturecraft.io/images/new-venturecraft-social.png" />
      </Head>
      <div>
        {/* <PageLogoLoader onFinish={() => setShow(true)} />/
      {show && <Component {...pageProps} />} */}
        <Component {...pageProps} />
      </div>
    </HubspotProvider>
  );
}

export default MyApp;
