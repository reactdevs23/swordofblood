import React, { useContext } from 'react';
import Localization from "../../context/localization";
import { config } from "../../functions/config";
import { importAllImages } from "../../functions/common";
import styles from './about.module.css';

export default function About() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	return (
		<div className={styles.about}>
			<h4 className={[styles.heading, 'heading'].join(' ')}>{config.appName}</h4>
			<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.aboutDesc1}}/>
			<div className={styles.information}>
				<img src={images['home/presale.png']} alt="#" className={styles.smallPresale} />
				<div className={[styles.textContainer, styles.noBorder].join(' ')}>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.aboutDesc2}}/>
				</div>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.aboutDesc3}}/>
				</div>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.aboutDesc4}}/>
				</div>
				<div className={styles.textContainer}>
					<p className={[styles.text, 'text'].join(' ')} dangerouslySetInnerHTML={{__html: strings.aboutDesc5}}/>
				</div>
			</div>
		</div>
	)
}