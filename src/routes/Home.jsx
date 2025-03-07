import BannerDevices from '../components/BannerDevices';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';

function Home() {
  return (
    <main>
      <HomeHero />
      <BannerDevices />
      <Categories />
    </main>
  );
}

export default Home;
