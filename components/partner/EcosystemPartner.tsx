import styled from "styled-components";

const EcosystemPartner = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          <h1 className="h1 text-left">Join our Ecosystem of Partners</h1>
          <p className="p1 p1_width md:pb-14 pb-5">
          Innovation doesn’t happen in isolation. Breakthroughs reach the market faster—and more effectively—when technologists, capital providers, and commercialization experts work in concert. We actively partner with accelerators, venture firms, economic development organizations, research institutions, and enterprise innovation teams to support the translation of science into scalable, investable ventures.
          </p>
          <p className="p1 p1_width md:pb-14 pb-5">
          We bring decades of experience navigating the early commercialization landscape and offer deep value to partners looking to support high-potential technologies. Whether you're building an ecosystem, scouting for investable deals, or looking to augment your support programs, we provide a layer of commercialization expertise that elevates outcomes.
          </p>
         
        </div>
      </Root>
    </>
  );
};

export default EcosystemPartner;

const Root = styled.section`
  .h1 {
    font-weight: 800;
    margin: 2.5rem 0;
  }

  .p1 {
    color: var(--lightBlack);
    font-weight: 600;
  }

  .p1_width {
    width: 75%;
    margin: auto;
  }
  .help_section_wrapper {
    margin-top: 3rem;
  }

  @media screen and (max-width: 1024px) {
    .p1_width {
      width: 100%;
    }
  }
`;
