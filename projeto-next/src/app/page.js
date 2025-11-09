// ARQUIVO: app/page.js

import MainImage from "@/components/MainImage/MainImage";
import Categories from "@/components/Categories/Categories";
import ProductList from "@/components/ProductList/ProductList";
import Newsletter from "@/components/Newsletter/Newsletter";
import About from "@/components/about/About";
import { getAllProducts } from "@/lib/data";

export default async function Home() {
  const produtos = await getAllProducts();
  const mainImages = produtos.map(produto => produto.imagem);
  return (
    <>
      <MainImage images={mainImages}/>
      <Categories />
      <ProductList produtos={produtos} />
      <Newsletter />
      <About />
    </>
  );
}