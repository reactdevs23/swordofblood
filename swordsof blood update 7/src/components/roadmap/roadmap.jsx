import React, { useContext } from 'react';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './roadmap.module.css';

export default function Roadmap() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	return (
		<>
		<h4 className={['heading', styles.roadMapHeading].join(' ')}>{strings.rmTtl}</h4>
        <img src={images['roadmap-en.png']} alt="#" className="image" />
		</>
	)
}