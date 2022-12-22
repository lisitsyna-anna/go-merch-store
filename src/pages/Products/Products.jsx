import { useSearchParams } from 'react-router-dom';
import { ProductList } from 'components/ProductsList/ProductsList';
import SearchBox from 'components/SearchBox/SearchBox';
import { getProducts } from 'fakeAPI';

// Хук useSearchParams, который представляет собой небольшую обертку
// над встроенным в браузер классом URLSearchParams.

//Он возвращает массив из двух значений:
// - объект параметров строки запроса (экземпляр URLSearchParams) для текущего URL
// - функцию обновления строки запроса.

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().trim().includes(productName.toLowerCase().trim())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
