import React, { useContext } from 'react';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './partners.module.css';

export default function Partners() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	const backers = [
		{
			img: images['home/partner/backers/forbes.png'],
			link: 'http://www.asteroidlabs.io/'
		},
		{
			img: images['home/partner/backers/forbes-5.png'],
			link: 'https://masterventures.com/'
		},
		{
			img: images['home/partner/backers/forbes-2.png'],
			link: 'https://www.shugo.ventures/'
		},
		{
			img: images['home/partner/backers/forbes-4.png'],
			link: 'https://magnuscapital.com/'
		},
		{
			img: images['home/partner/backers/forbes-9.png'],
			link: 'https://www.gate.io/'
		},
		{
			img: images['home/partner/backers/forbes-1.png'],
			link: 'https://metavest.capital'
		},
		{
			img: images['home/partner/backers/forbes-6.png'],
			link: 'https://kangaroocapital.io/'
		},
		{
			img: images['home/partner/backers/forbes-3.png'],
			link: 'https://cth.group/what_we_do/fundamental_labs/'
		},
		{
			img: images['home/partner/backers/forbes-8.png'],
			link: 'https://krypital.com/en'
		},
	]

	const launchPartners = [
		{
			img: images['home/partner/launchpartner/forbes.png'],
			link: 'https://enjinstarter.com/'
		},
		{
			img: images['home/partner/launchpartner/forbes-4.png'],
			link: 'https://vispx.io/'
		},
		{
			img: images['home/partner/launchpartner/forbes-2.png'],
			link: 'https://nftb.io/launch/'
		},
		{
			img: images['home/partner/launchpartner/forbes-5.png'],
			link: 'https://gamestarter.com/'
		},
		{
			img: images['home/partner/launchpartner/forbes-3.png'],
			link: 'https://babylons.io/'
		},
		{
			img: images['home/partner/launchpartner/forbes-6.png'],
			link: 'https://idexo.com/'
		},
		{
			img: images['home/partner/launchpartner/forbes-1.png'],
			link: 'https://www.spores.app/'
		},
	]

	const techPartners = [
		{
			img: images['home/partner/technologypartner/forbes.png'],
			link: 'https://hitbox-games.com/'
		},
		{
			img: images['home/partner/technologypartner/forbes-3.png'],
			link: 'https://www.flamestore.xyz/'
		},
		{
			img: images['home/partner/technologypartner/forbes-1.png'],
			link: 'https://gdexmetaverse.com/'
		},
		{
			img: images['home/partner/technologypartner/forbes-4.png'],
			link: 'https://acknoledger.com/'
		},
		{
			img: images['home/partner/technologypartner/forbes-2.png'],
			link: 'https://sphereone.xyz/'
		},
	]

	const comPartners = [
		{
			img: images['home/partner/communitypartner/forbes.png'],
			link: 'https://alphaguilty.io/'
		},
		{
			img: images['home/partner/communitypartner/forbes-2.png'],
			link: 'https://www.abga.asia/'
		},
		{
			img: images['home/partner/communitypartner/forbes-1.png'],
			link: 'https://chainplay.gg/'
		},
	]

	return (
		<div className={styles.ourParners}>
			<h4 className={[styles.heading, 'heading'].join(' ')}>{strings.partnersTtl}</h4>
			<div className={styles.partnerWrapper}>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')}>{strings.backersTtl}</p>
				</div>
				<div className={styles.partners}>
				{
					backers.map((p,i)=>{
						return (
							<a key={i} href={p.link} target="_blank" rel="noreferrer" className={styles.partnerImageContainer}>
								<img src={p.img} alt="#" className={styles.partnerImage}/>
							</a>
						)
					})
				}
				</div>
			</div>
			<div className={styles.partnerWrapper}>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')}>{strings.launchPartnTtl}</p>
				</div>
				<div className={styles.partners}>
				{
					launchPartners.map((p,i)=>{
						return (
							<a key={i} href={p.link} target="_blank" rel="noreferrer" className={styles.partnerImageContainer}>
								<img src={p.img} alt="#" className={styles.partnerImage}/>
							</a>
						)
					})
				}
				</div>
			</div>
			<div className={styles.partnerWrapper}>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')}>{strings.techPartnTtl}</p>
				</div>
				<div className={styles.partners}>
				{
					techPartners.map((p,i)=>{
						return (
							<a key={i} href={p.link} target="_blank" rel="noreferrer" className={styles.partnerImageContainer}>
								<img src={p.img} alt="#" className={styles.partnerImage}/>
							</a>
						)
					})
				}
				</div>
			</div>
			<div className={styles.partnerWrapper}>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')}>{strings.comPartnTtl}</p>
				</div>
				<div className={styles.partners}>
				{
					comPartners.map((p,i)=>{
						return (
							<a key={i} href={p.link} target="_blank" rel="noreferrer" className={styles.partnerImageContainer}>
								<img src={p.img} alt="#" className={styles.partnerImage}/>
							</a>
						)
					})
				}
				</div>
			</div>
		</div>
	)
}