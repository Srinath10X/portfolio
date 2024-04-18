export const metadata = {
	title: "Srinath10X - Portfolio",
	description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
