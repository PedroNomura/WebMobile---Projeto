// ARQUIVO: app/page.js

import MainImage from "@/components/MainImage";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Newsletter from "@/components/Newsletter";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <MainImage />
      <Categories />
      <ProductList />
      <Newsletter />
      <About />
    </>
  );
}