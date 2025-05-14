import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const ContactUs = lazy(() => import('./routes/ContactUs'));
const Blog = lazy(() => import('./routes/Blog'));
const Catalog = lazy(() => import('./routes/Catalog'));
const ProductDetails = lazy(() => import('./routes/ProductDetails'));
const Cart = lazy(() => import('./routes/Cart'));
const Favorite = lazy(() => import('./routes/Favorite'));
const MyAccount = lazy(() => import('./routes/MyAccount'));
const CheckoutFirstStep = lazy(() => import('./routes/CheckoutFirstStep'));
const CheckoutSecondStep = lazy(() => import('./routes/CheckoutSecondStep'));
const CheckoutThirdStep = lazy(() => import('./routes/CheckoutThirdStep'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<p className="p-10 text-center">Loading...</p>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact-us" Component={ContactUs} />
          <Route path="/blog" Component={Blog} />
          <Route path="/:category" Component={Catalog} />
          <Route path="/:category/:name" Component={ProductDetails} />
          <Route path="/favorite" Component={Favorite} />
          <Route path="/cart" Component={Cart} />
          <Route path="/my-account" Component={MyAccount} />
          <Route path="/checkout/step-1" Component={CheckoutFirstStep} />
          <Route path="/checkout/step-2" Component={CheckoutSecondStep} />
          <Route path="/checkout/step-3" Component={CheckoutThirdStep} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
