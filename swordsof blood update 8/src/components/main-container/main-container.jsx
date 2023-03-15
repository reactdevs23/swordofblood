import React, { useState } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import styles from './main-container.module.css';

export default function MainContainer({ children }) {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		if(showSidebar) setShowSidebar(false);
		else setShowSidebar(true);
	}

	return (
		<div className={styles.container}>
			<Header toggleSidebar={toggleSidebar}/>
			<Sidebar showSidebar={showSidebar}/>
			<div className={styles.rightside}>
				{children}
				<Footer/>
			</div>
		</div>
	)
}