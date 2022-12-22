import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, CardWrapper, ProductName } from './ProductsList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <Container>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
