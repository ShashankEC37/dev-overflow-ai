"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const button_1 = require("../ui/button");
const image_1 = __importDefault(require("next/image"));
const github_svg_1 = __importDefault(require("@/public/icons/github.svg"));
const google_svg_1 = __importDefault(require("@/public/icons/google.svg"));
const SocialAuthForm = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12  flex-1 rounded-2 px-4 py-3.5';
    return (<div className="mt-10 flex flex-wrap gap-2.5">
      <button_1.Button className={buttonClass}>
        <image_1.default src={github_svg_1.default} alt="Github Logo" width={20} height={20} className="invert-colors mr-2.5 object-contain"/>
        <span className="">Login With Github</span>
      </button_1.Button>
      <button_1.Button className={buttonClass}>
        <image_1.default src={google_svg_1.default} alt="Google Logo" width={20} height={20} className=" mr-2.5 object-contain"/>
        <span className="">Login With Google</span>
      </button_1.Button>
    </div>);
};
exports.default = SocialAuthForm;
