import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ShowProvider } from '../context/ShowContext';

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<ShowProvider>
					<Component {...pageProps} />
				</ShowProvider>
			</ThemeProvider>
		);
	}
}
