import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import ContactUs from './routes/ContactUs';
import Blog from './routes/Blog';
import Catalog from './routes/Catalog';
import ProductDetails from './routes/ProductDetails';
import Cart from './routes/Cart';
import Favorite from './routes/Favorite';
import MyAccount from './routes/MyAccount';
import CheckoutFirstStep from './routes/CheckoutFirstStep';
import CheckoutSecondStep from './routes/CheckoutSecondStep';
import CheckoutThirdStep from './routes/CheckoutThirdStep';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

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

      <Footer />
    </BrowserRouter>
  );
};

export default App;
