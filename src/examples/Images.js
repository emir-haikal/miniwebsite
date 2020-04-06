import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/connectBcg.jpeg';
import ImgGatsby from 'gatsby-image';

const getImage = graphql`
	{
		fixed: file(relativePath: { eq: "blogBcg.jpeg" }) {
			childImageSharp {
				fixed(width: 150, height: 150, grayscale: true) {
					...GatsbyImageSharpFixed
				}
			}
		}
		fluid: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Images = () => {
	const data = useStaticQuery(getImage);
	return (
		<Wrapper>
			<article>
				<h3>Basic image</h3>
				<img src={img} className="basic" />
			</article>
			<article>
				<h3>Fixed image</h3>
				<ImgGatsby fixed={data.fixed.childImageSharp.fixed} />
			</article>
			<article>
				<h3>Fluid image</h3>
				<ImgGatsby fluid={data.fluid.childImageSharp.fluid} />
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	text-align: center;
	text-transfrom: capitalize;
	width: 80vw;
	margin: 0 auto 10rem auto;
	.basic {
		width: 100%;
	}
	article {
		border: 3px solid red;
		padding: 1rem 0;
	}
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 1rem;
	}
`;

export default Images;
