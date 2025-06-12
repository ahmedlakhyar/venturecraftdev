import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import HeaderBanner from "components/HeaderBanner";
import EcosystemPartner from "components/partner/EcosystemPartner";
import WhoWePartnerWith from "components/partner/WhoWePartnerWith";
import InputFields from "components/contact/InputFields";
import { PrimaryButton } from "components/Button";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import styled from "styled-components";
import Head from "next/head";

const partner = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "20593606",
    formId: "23ed76d5-e6bf-46b8-94c3-c52447c203b4",
    target: "#hubspot_partner_form",
  });
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Join Our Ecosystem</title> */}
        <title>Join Our Ecosystem | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="Partner" />
        <EcosystemPartner />
        <WhoWePartnerWith/>
        <div className="desktop_container">
          <ContactDiv className="mt-12 contact_wrapper">
            <div id="hubspot_partner_form"></div>
            {/* <InputFields /> */}
          </ContactDiv>
          {/* <div className="xl:mb-28 md:mb-14 mb-0 md:mt-10 flex justify-center">
              <PrimaryButton text={<span>Submit</span>} fontSize="text-2xl" />
            </div> */}
        </div>
        
        <Footer />
      </Layout>
    </>
  );
};

export default partner;

const ContactDiv = styled.div`
  max-width: 80%;
  #hubspot_partner_form {
    background-color: #f5f8fa;
    padding: 2rem;
    margin: 3rem 0 5rem;
    width: 94%;
    border-radius: 5px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    #hubspot_partner_form {
      width: 100%;
      margin: 1rem 0 4rem;
    }
  }
  @media screen and (max-width: 767px) {
    #hubspot_partner_form {
      margin: 0rem 0 3rem;
    }
  }
`;
