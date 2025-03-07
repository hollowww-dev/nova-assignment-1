'use client'

import styles from './Product.module.css'

import { Product as ProductType } from '../data/products'

import Image from 'next/image'
import Link from 'next/link'

import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Product({ product }: { product: ProductType }) {
	return (
		<Link href={`/${product.id}`}>
			<div className={styles.product}>
				<ViewTransition name={`product-image-${product.id}`}>
					<div className={styles.thumbnail}>
						<Image src={product.image} alt={product.name} fill />
					</div>
				</ViewTransition>
				<div className={styles.info}>
					<ViewTransition name={`product-title-${product.id}`}>
						<h4>{product.name}</h4>
					</ViewTransition>
					<ViewTransition name={`product-description-${product.id}`}>
						<p>{product.description}</p>
					</ViewTransition>
				</div>
				<ViewTransition name={`product-price-${product.id}`}>
					<span className={styles.price}>${product.price}</span>
				</ViewTransition>
			</div>
		</Link>
	)
}
