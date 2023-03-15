import React, { useContext } from 'react';
import Localization from "../../context/localization";
import { importAllImages } from "../../functions/common";
import styles from './allocation.module.css';

export default function Allocation() {
	const { strings } = useContext(Localization);
	const images = importAllImages();

	return (
		<>
		<h4 className={['heading', styles.tokenAllocationHeading].join(' ')}>{strings.allocTtl}</h4>
		<img src={images['TokenAllocation-en.png']} alt="#" className="image" />
		</>
	)
}