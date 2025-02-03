
import HeroSection from "./components/hero-section/hero-section";
import FeatureProduct from "./components/feature-product/feature-product";
import TopCategories from "./components/top-categories/top-categories";
import ExploreNewPopular from "./components/explore-new-popular/explore-new-popular";
import OurProduct from "./components/our-product/our-product";

export default function Home(){
  return(
    <div>
    
      <HeroSection/>
      <FeatureProduct />
      <TopCategories />
    <ExploreNewPopular/>
    <OurProduct/>

      

      </div>





  )
}