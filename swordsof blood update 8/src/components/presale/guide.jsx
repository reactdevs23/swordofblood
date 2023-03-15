import React, { useContext } from 'react';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './guide.module.css';

export default function Guide() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	return (
		<div className={styles.howTobuyWrapper}>
			<h4 className={[styles.heading, 'heading'].join(' ')}>{strings.presTtl}</h4>
			<div className={styles.howToBuy}>
				<img src={images['presale/Bg.png']} alt="#" className={[styles.image, 'image'].join(' ')}/>
				<div className={styles.textContainer}>
					<div className={styles.presaleHeader}>
						<img src={images['home/presale.png']} alt="#" className={styles.presaleIcon}/>
						<p className="title">{strings.presStep1}</p>
					</div>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.presStep1Desc}}/>
				</div>
			</div>
			<div className={styles.howToBuy}>
				<img src={images['presale/Bg-1.png']} alt="#" className={[styles.image, 'image'].join(' ')}/>
				<div className={styles.textContainer}>
					<div className={styles.presaleHeader}>
						<img src={images['home/presale.png']} alt="#" className={styles.presaleIcon}/>
						<p className="title">{strings.presStep2}</p>
					</div>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.presStep2Desc}}/>
				</div>
			</div>   
			<div className={styles.howToBuy}>
				<img src={images['presale/Bg-2.png']} alt="#" className={[styles.image, 'image'].join(' ')}/>
				<div className={styles.textContainer}>
					<div className={styles.presaleHeader}>
						<img src={images['home/presale.png']} alt="#" className={styles.presaleIcon}/>
						<p className="title">{strings.presStep3}</p>
					</div>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.presStep3Desc}}/>
				</div>
			</div>
		</div>	
	)
}