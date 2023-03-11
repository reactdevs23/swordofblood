import React from 'react';
import styles from './video.module.css';

export default function Video() {
	return (
		<div className={styles.videoContainer}>
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TazaDM80Tb8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
		</div>
	)
}


