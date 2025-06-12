import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import DownloadBanner from "components/home/DownloadBanner";
import LearnMoreBanner from "components/home/LearnMoreBanner";
import ContactDescription from "components/contact/ContactDescription";
import Image from "next/image";
import HeaderBanner from "components/HeaderBanner";
import ContactUs from "components/contact/ContactUs";
import SocialIcons from "components/contact/SocialIcons";


const contact = () => {
  return (
    <>
      <Layout>
      <HeaderBanner heading="Connect" />
      <ContactDescription />
      <SocialIcons />
      <ContactUs/>
        <LearnMoreBanner />
        <DownloadBanner
          bannerText={
            <>
              <span className="lg:pr-12 md:pr-8 pr-10 galaxy_pr">
                Get our <span className="text-yellowBase ">FREE</span> Pitch
                Deck Guide
              </span>
              <span className="img_div aspect-square ml-1 lg:w-20 w-16 inline-block absolute right-0 md:top-0 -top-2 galaxy_hide">
                <Image src="/images/fire-3.gif" layout="fill" />
              </span>
            </>
          }
        />
        <Footer />
      </Layout>
    </>
  );
};

export default contact;
