import BannerDevices from '../components/BannerDevices';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import HomeProducts from '../components/HomeProducts';

function Home() {
  return (
    <main>
      <HomeHero />
      <BannerDevices />
      <Categories />
      <HomeProducts />
    </main>
  );
}

export default Home;
