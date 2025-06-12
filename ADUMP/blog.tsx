import HeaderBanner from "components/HeaderBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import Blogs from "container/Blog/blog";
import React from "react";
import styled from "styled-components";
function index() {
  return (
    <Layout>
      {/* <HeaderBanner heading="" /> */}
      <BlogHeader></BlogHeader>
      <Blogs />
      <Footer />
    </Layout>
  );
}

export default index;

const BlogHeader = styled.div`
  height: 9rem;
  background: linear-gradient(118deg, #00d4f5 12.27%, #00bff0 57.45%);
  @media screen and (min-width: 2000px) {
    height: 12rem;
  }
  @media screen and (min-width: 3000px) {
    height: 15rem;
  }
  @media screen and (max-width: 1024px) {
    height: 7rem;
  }
  @media screen and (max-width: 767px) {
    height: 5.5rem;
  }
`;
