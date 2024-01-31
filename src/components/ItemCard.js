import axios from "../config/axios"

export default async function ItemCard(item) {
  const seller = await axios.get(`/api/users/${item.sellerId}`)

  return (
		<div>
			<span>Seller : {seller.name}</span>
			<span>Item : {item.name}</span>
		  <img src={item.image} alt={item.name} />
		</div>
  )
}
