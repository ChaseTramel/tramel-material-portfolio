import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppProvider } from "@toolpad/core";

const NAVIGATION = [
	{ segment: "", title: "Home" },
	{ segment: "about", title: "About" },
];

const BRANDING = {
	title: "Chase Tramel",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>{BRANDING.title}</title>
			</head>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<AppProvider navigation={NAVIGATION} branding={BRANDING}>
						{children}
					</AppProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
