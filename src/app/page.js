"use client";

import { Box, Container, Paper, Typography } from "@mui/material";
import { amber, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PageContainer } from "@toolpad/core/PageContainer";
import "./globals.css";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: amber,
		secondary: yellow,
	},
	typography: {
		fontFamily: "Atkinson Hyperlegible",
		fontSize: 16,
	},
});

const year = new Date().getFullYear();

function PageToolbar() {
	return <Typography variant="h5">Beep Beep</Typography>;
}

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Paper
				sx={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
			>
				<PageContainer
					title="Chase Tramel"
					maxWidth={false}
					sx={{ backgroundColor: theme.palette.primary.main }}
					slots={{ toolbar: PageToolbar }}
				></PageContainer>
				<Container component="main" sx={{ padding: 3 }}>
					<Paper elevation={1} sx={{ padding: 3 }}>
						<Typography variant="h4" gutterBottom>
							Hello world.
						</Typography>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Duis aliquet a orci non tincidunt. Donec
							hendrerit, mauris nec varius sagittis, eros nisi
							varius mi, nec maximus velit risus a quam. Duis
							varius, velit nec facilisis ullamcorper, mauris
							neque facilisis turpis, vel sollicitudin nulla
							tellus fringilla nibh. Phasellus egestas, nisl ut
							vestibulum viverra, felis leo ultrices ex, eu
							vestibulum ligula justo at dolor. Integer cursus
							ipsum nec justo laoreet, euismod iaculis lectus
							blandit. Nam mollis tristique arcu, eu facilisis dui
							vehicula nec. Nullam a orci nec mauris suscipit
							consectetur. Maecenas fermentum imperdiet libero sed
							sodales. Nam dictum placerat lorem vel blandit.
							Vivamus turpis libero, pretium a mauris ac, tempor
							rutrum erat. Suspendisse viverra blandit libero
							faucibus bibendum. Suspendisse potenti.
						</Typography>
					</Paper>
				</Container>
			</Paper>
			<Box
				component="footer"
				sx={{
					py: 3,
					mt: "auto",
					backgroundColor: "#f5f5f5",
					textAlign: "center",
					position: "sticky",
					bottom: 0,
					width: "100%",
				}}
			>
				<Typography variant="body2" color="text.secondary">
					© {year} Chase Tramel. All rights reserved.
				</Typography>
			</Box>
		</ThemeProvider>
	);
}
