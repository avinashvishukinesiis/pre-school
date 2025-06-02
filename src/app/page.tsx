import ActivityShowcase from "@/components/ActivityShowcase/ActivityShowcase";
import CompanySection from "@/components/CompanySection/CompanySection";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQs from "@/components/FAQSection/FAQs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import IncludedExcludedFeatures from "@/components/IncludedExcludedFeatures/IncludedExcludedFeatures";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import Layout from "@/components/Layout/Layout";
import ParentsTestimonial from "@/components/ParentsTestimonial/ParentsTestimonial";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/Section3/Section3";


export default function Home() {
  return (
    <div className="flex flex-col gap-[20px] ">
      <Header />
      <Layout>
        <Hero />
        <Section2 />
      </Layout>
      <Section3/>
      <CompanySection/>
      <ActivityShowcase/>
      <IncludedExcludedFeatures/>
      <InstagramGallery/>
      <ParentsTestimonial/>
      <ContactUs/>
      <FAQs/>
      <Footer/>
      
    </div>
  );
}
