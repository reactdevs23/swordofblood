import React from 'react';
import Banner from './banner';
import WhatYouGet from './what-you-get';
import About from './about';
import ContactUs from './contactus';
import AsSeenOn from './as-seen-on';
import Video from './video';
import Facilities from './facilities';
import Team from './team';
import Partners from './partners';

export default function Homepage() {
	return (
		<>
		<Banner/>
		<WhatYouGet/>
		<About/>
		<ContactUs/>
		<AsSeenOn/>
		<Video/>
		<Facilities/>
		<Team/>
		<Partners/>
		</>
	)
}