import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
	return (
		<section className={styles.about}>
			<Title title="About" subtitle="Us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<img src={img} />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut</p>
					<p>malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat</p>
					<button type="button" className="btn-primary">
						read more
					</button>
				</article>
			</div>
		</section>
	);
};

export default About;
