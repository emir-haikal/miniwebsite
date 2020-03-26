import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import { Links, Link } from 'gatsby';
import Banner from '../components/Banner';

export default function error() {
	return (
		<Layout>
			<header className={styles.error}>
				<Banner title="THERE IS NO PAGEE, PLEASE PAY MORE ATTENTION TO URL!">
					<Link to="/" className="btn-white">
						Back To Home Page
					</Link>
				</Banner>
			</header>
		</Layout>
	);
}
