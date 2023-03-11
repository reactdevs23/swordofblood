import React, { useContext, useEffect } from 'react';
import Swiper, { Autoplay } from 'swiper';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './what-you-get.module.css';

export default function WhatYouGet() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	const slides = [
		{
			title: strings.wygTitle1,
			img: images['home/ICO_Dark_Axe31_E05_2.png']
		},
		{
			title: strings.wygTitle2,
			img: images['home/ICO_Dark_Axe31_E05_3.png']
		},
		{
			title: strings.wygTitle3,
			img: images['home/ICO_Dark_Axe31_E05_1.png']
		},
	]

	useEffect(()=>{
		const swiper = new Swiper('.whatYouGet', {
			modules: [Autoplay],
			direction: "horizontal",
			loop: true,
			slidesPerView: 3,
			spaceBetween: 25,
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				1380: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 2.3,
					spaceBetween: 25,
				},
				1000: {
					slidesPerView: 2.1,
					spaceBetween: 25,
				},
				767: {
					slidesPerView: 1.5,
				},
				520: {
					slidesPerView: 1.3,
				},
				400: {
					slidesPerView: 1.2,
				},
				320: {
					slidesPerView: 1.1,
				},
			}
		});

		return () => {
			swiper.destroy();
		}
	},[])

	return (
		<div className={['whatYouGet', styles.whatYouGet].join(' ')}>
			<div className="swiper-wrapper">
			{
				slides.map((p,i)=>{
					return (
						<div key={i} className={[styles.imageAndtext, 'swiper-slide'].join(' ')}>
							<img src={p.img} alt="#"/>
							<p className="title">{p.title}</p>
						</div>
					)
				})
			}
			</div>
		</div>
	)
}