import styles from './page.module.css'

import data from '@/data/products'

import Product from '@/components/Product'

import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Home() {
	return (
		<>
			<ViewTransition name={'home-headline'}>
				<div className={styles.headline}>
					<h1>Astro shop</h1>
					<p className={styles.headlineMuted}>Take a look in our products, feel free to buy some</p>
				</div>
			</ViewTransition>
			<div className={styles.products}>
				{data.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</>
	)
}

export const dynamic = 'force-static'
