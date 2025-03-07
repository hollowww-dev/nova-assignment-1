export type Product = {
	id: number
	name: string
	description: string
	image: string
	price: number
}

const products: Product[] = [
	{
		id: 1,
		name: 'Product 1',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,',
		image: 'https://picsum.photos/800',
		price: 155,
	},
	{
		id: 2,
		name: 'Product 2',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,',
		image: 'https://picsum.photos/800',
		price: 135,
	},
	{
		id: 3,
		name: 'Product 3',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,',
		image: 'https://picsum.photos/800',
		price: 175,
	},
	{
		id: 4,
		name: 'Product 4',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,',
		image: 'https://picsum.photos/800',
		price: 165,
	},
]

export default products
