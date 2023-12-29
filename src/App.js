import BasicCard from "./components/BasicCard/BasicCard";
import BlogSection from "./components/Blogs/BlogSection";
import BrowseByCategory from "./components/BrowseByCategory/BrowseByCategory";
// import DiscoverClasses from "./components/DiscoverByClass/DiscoverClasses";
import GoToTopButton from "./components/FloatingComponent/GoToTopButton";
import MessageBox from "./components/FloatingComponent/MessageBox";
import Hero from "./components/Hero/Hero";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <MessageBox/>
      <BasicCard />
      {/* <DiscoverClasses /> */}
      <BrowseByCategory />
      <BlogSection/>
      <NewsLetter />
      <GoToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
