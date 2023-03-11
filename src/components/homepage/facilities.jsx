import React, { useContext, useEffect } from 'react';
import Swiper, { Autoplay } from 'swiper';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './facilities.module.css';

export default function WhatYouGet() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	const slides = [
		{
			title: strings.facTtl1,
			img: images['home/ICO_Dark_Axe31_E05_4.png']
		},
		{
			title: strings.facTtl2,
			img: images['home/ICO_Dark_Axe31_E05_5.png']
		},
		{
			title: strings.facTtl3,
			img: images['home/ICO_Dark_Axe31_E05_6.png']
		},
		{
			title: strings.facTtl4,
			img: images['home/ICO_Dark_Axe31_E05_7.png']
		},
		{
			title: strings.facTtl5,
			img: images['home/ICO_Dark_Axe31_E05_8.png']
		},
		{
			title: strings.facTtl6,
			img: images['home/ICO_Dark_Axe31_E05_9.png']
		},
	]

	useEffect(()=>{
		let swiper = null;

		if(window.matchMedia("(max-width: 1199px)").matches) {
			swiper = new Swiper('.facilities', {
				modules: [Autoplay],
				direction: "horizontal",
				loop: true,
				slidesPerView: 3,
				spaceBetween: 15,
				autoplay: {
					delay: 2000,
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 25,
					},
					991: {
						slidesPerView: 2.5,
						spaceBetween: 25,
					},
					767: {
						slidesPerView: 3,
					},
					400: {
						slidesPerView: 1.5,
					},
					320: {
						slidesPerView: 1.3,
					},
				},
			});
		}

		return () => {
			if(swiper) swiper.destroy();
		}
	},[])

	return (
		<div className={styles.ourfacilites}>
			<img src={images['home/HalvdansQuestArt.png']} alt="#" className={['image', styles.halvdansQuestArt].join(' ')}/>
			<div className="swiper facilities">
				<div className={[styles.facilities, "swiper-wrapper"].join(' ')}>
				{
					slides.map((p,i)=>{
						return (
							<div key={i} className={[styles.imageAndtext, 'swiper-slide'].join(' ')}>
								<img src={p.img} alt="#"/>
								<p className={[styles.title, 'title'].join(' ')}>{p.title}</p>
							</div>
						)
					})
				}
				</div>
			</div>
		</div>
	)
}