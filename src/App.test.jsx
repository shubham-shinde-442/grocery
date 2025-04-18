import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store';
import App from './App';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Category from './components/Category';
import ProductCard from './components/ProductCard';

describe('App Component', () => {
  test('renders FreshMart homepage', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const heroText = screen.getByText(/Fresh Groceries Delivered to Your Door/i);
    expect(heroText).toBeInTheDocument();
  });
});

describe('Hero Component', () => {
  test('renders the main heading', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const heading = screen.getByText((content, element) => {
      return element?.textContent === 'Fresh Groceries Delivered to Your Door';
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the "Shop Now" button', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const shopNowButton = screen.getByRole('button', { name: /Shop Now/i });
    expect(shopNowButton).toBeInTheDocument();
  });

  test('renders the "Learn More" button', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const learnMoreButton = screen.getByRole('button', { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
  });
});

describe('Footer Component', () => {
  test('renders the company name', () => {
    render(<Footer />);
    const companyNames = screen.getAllByText(/FreshMart/i);
    expect(companyNames[0]).toBeInTheDocument();
  });


  test('renders the contact email', () => {
    render(<Footer />);
    const email = screen.getByText(/info@freshmart.com/i);
    expect(email).toBeInTheDocument();
  });

  test('renders the copyright text with the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} FreshMart. All rights reserved`, 'i')
    );
    expect(copyrightText).toBeInTheDocument();
  });
});

describe('Navbar Component', () => {
  test('renders the logo', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const logo = screen.getByAltText('FreshMart Logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders the cart icon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const cartIcon = screen.getByText(/0/i);
    expect(cartIcon).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const homeLink = screen.getByText(/Home/i);
    const shopLink = screen.getByText(/Shop/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});

describe('Category Component', () => {
  test('renders the heading', () => {
    render(<Category />);
    const heading = screen.getByText(/Shop by Category/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all category cards', () => {
    render(<Category />);
    const categories = screen.getAllByRole('heading', { level: 3 });
    expect(categories.length).toBe(6); // Assuming there are 6 categories
  });
});

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    category: 'Test Category',
    price: 100,
    image: 'test-image.jpg',
    quantity: '1kg',
    unit: 1,
  };

  test('renders product name', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );
    const productName = screen.getByText(/Test Product/i);
    expect(productName).toBeInTheDocument();
  });

  test('renders product price', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );
    const productPrice = screen.getByText(/₹100/i);
    expect(productPrice).toBeInTheDocument();
  });

  test('renders "Add to Cart" button', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );
    const addToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
    expect(addToCartButton).toBeInTheDocument();
  });
});