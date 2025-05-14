import { lazy, Suspense } from 'react';
import HomeHero from '../components/HomeHero';

const BannerDevices = lazy(() => import('../components/BannerDevices'));
const Categories = lazy(() => import('../components/Categories'));
const DiscountProducts = lazy(() => import('../components/DiscountProducts'));
const HomeProducts = lazy(() => import('../components/HomeProducts'));
const PopularProducts = lazy(() => import('../components/PopularProducts'));

function Home() {
  return (
    <main>
      <HomeHero />

      <Suspense fallback={<div>Loading banner...</div>}>
        <BannerDevices />
      </Suspense>

      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories />
      </Suspense>

      <Suspense fallback={<div>Loading products...</div>}>
        <HomeProducts />
      </Suspense>

      <Suspense fallback={<div>Loading popular products...</div>}>
        <PopularProducts />
      </Suspense>

      <Suspense fallback={<div>Loading discounts...</div>}>
        <DiscountProducts />
      </Suspense>
    </main>
  );
}

export default Home;
