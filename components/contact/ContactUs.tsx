import { PrimaryButton } from "components/Button";
import React from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

function ContactUs() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "20593606",
    formId: "ef086a2b-b7ad-4af4-95f4-e5b446b06c28",
    target: "#hubspot_contact_form",
  });
  return (
    <section className="md:pt-12 pt-10">
      <div className="desktop_container">

        <ContactDiv className="contact_wrapper">
          {/* <InputFields /> */}
          <div id="hubspot_contact_form"></div>
          {/* <div className="w-full">
            <h2 className="h2 text-lightBlack mt-4">How can we add value?</h2>
            <textarea className="textarea" />
          </div> */}
          {/* <PrimaryButton text="Submit" fontSize="text-2xl" /> */}
        </ContactDiv>
        {/* <div className="md:mb-28 mb-0 md:mt-10 flex justify-center">
          <PrimaryButton text={<span>Submit</span>} fontSize="text-2xl" />
        </div> */}
      </div>
    </section>
  );
}

export default ContactUs;

const ContactDiv = styled.div`
  max-width: 80%;
  #hubspot_contact_form {
    background-color: #f5f8fa;
    padding: 2rem;
    margin: 3rem 0 5rem;
    width: 94%;
    border-radius: 5px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    #hubspot_contact_form {
      width: 100%;
      margin: 1rem 0 4rem;
    }
  }
  @media screen and (max-width: 767px) {
    #hubspot_contact_form {
      margin: 0rem 0 1rem;
    }
  }
`;
