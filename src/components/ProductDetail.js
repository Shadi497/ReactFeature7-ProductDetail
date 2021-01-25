import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;

  return (
    <DetailWrapper>
      <img alt={product.name} src={product.image} />
      <h1>{product.name}</h1>

      <p>{product.description}</p>
      <p className="product-price">{product.price} KD</p>
      <button onClick={() => props.setProduct(null)}>Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
