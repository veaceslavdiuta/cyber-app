import BannerDevices from '../components/BannerDevices';
import Categories from '../components/Categories';
import DiscountProducts from '../components/DiscountProducts';
import HomeHero from '../components/HomeHero';
import HomeProducts from '../components/HomeProducts';
import PopularProducts from '../components/PopularProducts';

function Home() {
  return (
    <main>
      <HomeHero />
      <BannerDevices />
      <Categories />
      <HomeProducts />
      <PopularProducts />
      <DiscountProducts />
    </main>
  );
}

export default Home;
