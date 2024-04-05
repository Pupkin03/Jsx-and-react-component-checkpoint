import productData from "../Product"


const Image = () => {
  return (
    <img src={productData.image} alt={productData.name} />
  )
}

export default Image