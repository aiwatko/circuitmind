import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import Header from './header'
import GlobalStyles from '../materials/globalStyles'

const Wrapper = styled.div`
  background: rgba(5, 29, 53, 0.85);
  min-height: 100vh;
  color: rgb(203, 203, 203);
`;

const Container = styled.div`
	display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 780px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
	<React.Fragment>
		<GlobalStyles />
		<Helmet>
			<html lang="en-GB" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* <script>
				window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
				ga('create', 'UA-132393507-1', 'auto');
				ga('send', 'pageview');
			</script> */}
			<script async src='https://www.google-analytics.com/analytics.js'></script>
			<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,900" rel="stylesheet" />
			<meta charset="utf-8" />
			<title>Circuit mind</title>
			<meta name="description" content="Circuit Mind completely automates the design of electronic circuits. Its compiler takes in the requirements for a circuit board and outputs the circuit board final design ready for manufacture. This means better circuits designed orders of magnitude faster at a fraction of the cost." />
		</Helmet>
		<Wrapper>
			<Container>
				<Header />
				{children}
			</Container>
		</Wrapper>
	</React.Fragment>
)

export default Layout;
