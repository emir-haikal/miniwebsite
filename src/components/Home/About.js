import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
// import img from '../../images/defaultBcg.jpeg';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getAbout = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const About = () => {
	const { aboutImage } = useStaticQuery(getAbout);
	return (
		<section className={styles.about}>
			<Title title="About" subtitle="Us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						{/* <img src={img} /> */}
						<Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape" />
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
