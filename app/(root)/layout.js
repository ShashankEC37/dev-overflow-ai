"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navbar_1 = __importDefault(require("@/components/navigation/navbar"));
const RootLayout = ({ children }) => {
    return (<main>
      <navbar_1.default />
      {children}
    </main>);
};
exports.default = RootLayout;
