"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Theme_1 = __importDefault(require("./Theme"));
const Navbar = () => {
    return (<nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <link_1.default href="/" className="flex items-center gap-1">
        <image_1.default src="/images/site-logo.svg" width={23} height={23} alt="DevFlow Logo"/>

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </link_1.default>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme_1.default />
      </div>
    </nav>);
};
exports.default = Navbar;
