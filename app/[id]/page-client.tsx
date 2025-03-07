'use client'

import styles from './page.module.css'

import { unstable_ViewTransition as ViewTransition } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import data from '@/data/products'

import backIcon from '@/assets/back-icon.svg'
import Product from '@/components/Product'

export default function ProductPage() {
	const { id } = useParams()

	const product = data.find(product => product.id === Number(id))

	if (!product) {
		return (
			<h2>
				Product not found. <Link href='/'>Go back</Link>
			</h2>
		)
	}

	return (
		<section className={styles.container}>
			<Link href='/' className={styles.back}>
				<Image src={backIcon} alt='Go back' width={25} height={25} />
			</Link>
			<p className={styles.breadcrumbs}>Home / Products / {product.name}</p>
			<div className={styles.productDetails}>
				<ViewTransition name={`product-image-${product.id}`}>
					<div className={styles.image}>
						<Image loading='eager' decoding='sync' src={product.image} alt={product.name} fill />
					</div>
				</ViewTransition>
				<div className={styles.info}>
					<div className={styles.headline}>
						<ViewTransition name={`product-title-${product.id}`}>
							<h1>{product.name}</h1>
						</ViewTransition>
						<ViewTransition name={`product-description-${product.id}`}>
							<p>{product.description}</p>
						</ViewTransition>
					</div>
					<div className={styles.price}>
						<ViewTransition name={`product-price-${product.id}`}>
							<span className={styles.priceNumber}>${product.price}</span>
						</ViewTransition>
						<span className={styles.priceInfo}>* This is a fictional price</span>
						<button className={styles.addToCart}>Add to cart</button>
					</div>
				</div>
			</div>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus diam, vulputate vel elementum a, condimentum a ligula. Quisque accumsan nec
				diam sit amet scelerisque. Cras erat eros, ullamcorper a porttitor ut, commodo at libero. Fusce consequat ut nisl vel molestie. Aenean interdum
				facilisis pharetra.
			</p>
			<div className={styles.products}>
				{data
					.filter(item => item.id !== Number(id))
					.map(product => (
						<Product key={product.id} product={product} />
					))}
			</div>
		</section>
	)
}
