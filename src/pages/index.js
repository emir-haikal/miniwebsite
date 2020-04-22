import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import FeaturedTours from '../components/Home/FeaturedTours';
import SEO from '../components/SEO';

export default ({ data }) => (
	<Layout>
		<SEO title="Home" description="this is desc" />
		<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
			<Banner
				title="Emir Projects"
				info="
			scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in
			pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante"
			>
				<AniLink fade to="/tours" className="btn-white">
					Explore Tour
				</AniLink>
			</Banner>
		</StyledHero>
		<About />
		<Services />
		<FeaturedTours />
	</Layout>
);

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
