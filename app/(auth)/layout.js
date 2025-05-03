"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const SocialAuthForm_1 = __importDefault(require("@/components/forms/SocialAuthForm"));
const AuthLayout = ({ children }) => {
    return (<main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full 
                          rounded-[10px] border px-4 py-10  shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To Get your questions answered
            </p>
          </div>
          <image_1.default src="images/site-logo.svg" alt="DevFlow Logo" width={50} height={50} className="object-contain"/>
        </div>

        {children}
        <SocialAuthForm_1.default />
      </section>
    </main>);
};
exports.default = AuthLayout;
