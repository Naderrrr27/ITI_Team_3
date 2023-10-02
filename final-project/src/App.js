import styles from './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Content from './components/Content';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Intro from './components/Intro'
import Services from './components/Services'
import Bptton from './components/Bptton'
import Try from './components/Try'
import Sale from './components/Sale'
import Pricing from './components/Pricing'
import Pricingsec1 from './components/Pricingsec1'
import Last from './components/Last'
import Footer from './components/Footer';
import Socials from './components/Socials';
import Images from './components/Images';
import Effect from './components/Effect';
import Arrow from './components/Arrow';


function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Content />
      <Header />
      <VideoSection videoUrl="https://www.youtube.com/embed/CdADH6xSTRs?si=G2xQhEyl4N8UBXeC" />
      <VideoSection videoUrl="https://www.youtube.com/embed/8UAUWhGxC1s?si=KfM3wxGXryGhT7Bf" />
      <Intro />
      <Services />
      <Bptton />
      <Try />
      <Sale />
      <Pricing />
      <Pricingsec1 />
      <Last />
      <Effect />
      <Footer />
      <Socials />
      <Images />
      <Effect />
      <Arrow />
    </div>
  );
}

export default App;
