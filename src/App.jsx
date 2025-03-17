import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import ContactUs from './routes/ContactUs';
import Blog from './routes/Blog';
import Catalog from './routes/Catalog';
import ProductCard from './components/ProductCard';
import Category from './components/Category';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact-us" Component={ContactUs} />
        <Route path="/blog" Component={Blog} />
        <Route path="/catalog" Component={Catalog}>
          <Route path="/catalog/:category" Component={Category} />
          <Route path="/catalog/:category/:product" Component={ProductCard} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
