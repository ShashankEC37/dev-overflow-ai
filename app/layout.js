"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const local_1 = __importDefault(require("next/font/local"));
const react_1 = __importDefault(require("react"));
require("./globals.css");
const Theme_1 = __importDefault(require("../context/Theme"));
const inter = (0, local_1.default)({
    src: './fonts/InterVF.ttf',
    variable: '--font-inter',
    weight: '100 200 300 400 500 700 800 900',
});
const spaceGrotesk = (0, local_1.default)({
    src: './fonts/SpaceGroteskVF.ttf',
    variable: '--font-space-grotesk',
    weight: '300 400 500 700',
});
exports.metadata = {
    title: 'DevFlow',
    description: 'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
    icons: {
        icon: '/images/site-logo.svg',
    },
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
        <Theme_1.default attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </Theme_1.default>
      </body>
    </html>);
}
