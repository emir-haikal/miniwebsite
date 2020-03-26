import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { FaAdobe } from 'react-icons/fa';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

export default () => (
	<Layout>
		<SimpleHero>
			<Banner
				title="Emir Projects"
				info="
			scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in
			pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante"
			>
				<Link to="/tours" className="btn-white">
					Explore Tour
				</Link>
			</Banner>
		</SimpleHero>
		<About />
		<Services />
	</Layout>
);
