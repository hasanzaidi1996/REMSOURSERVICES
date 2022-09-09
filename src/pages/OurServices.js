import React from "react";
import Banner from "../components/Banner";
import MainCover from "../assets/images/main-cover.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import RowLayout from "../components/RowLayout";
import ServiceImage1 from "../assets/images/service-image-1.jpg";
import ServiceImage2 from "../assets/images/service-image-2.jpg";



const data = [
  {
    
  }
]

export default function OurServices() {
  return (
    <>
      <Header />
      <Banner backgroundImage={MainCover}>Website Development</Banner>
      <div className="offers my-[70px] flex flex-col gap-[40px] px-[30px] sm:my-[80px] sm:gap-[45px] sm:px-[50px] md:my-[100px] md:gap-[55x] md:px-[80px] lg:my-[115px] lg:gap-[70px] lg:px-[100px] xl:my-[130px] xl:gap-[85px] xl:px-[120px] 2xl:my-[150px] 2xl:gap-[100px] 2xl:px-[146px] ">
        <RowLayout border heading="Website Development" image={ServiceImage1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled it to make a tysape specimen book. It has survived
          not only a five centuries, but also the leap into electronic
          typesetting, Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled
        </RowLayout>

        <RowLayout
          border
          heading="CRM Based Solutions"
          image={ServiceImage2}
          reverse
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled it to make a tysape specimen book. It has survived
          not only a five centuries, but also the leap into electronic
          typesetting, Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled
        </RowLayout>

        <RowLayout
          border
          heading="Health Based Solutions"
          image={ServiceImage1}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled it to make a tysape specimen book. It has survived
          not only a five centuries, but also the leap into electronic
          typesetting, Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled
        </RowLayout>

        <RowLayout
          heading="E-commerce Based Solutions"
          image={ServiceImage2}
          reverse
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled it to make a tysape specimen book. It has survived
          not only a five centuries, but also the leap into electronic
          typesetting, Lorem Ipsum has jwfghi been the industry's standard dummy
          text ever since the 1500s, when an unknown printerca took a galley of
          type and scrambled
        </RowLayout>
      </div>
      <Footer />
    </>
  );
}
