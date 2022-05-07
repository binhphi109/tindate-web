import packageJson from "../package.json";

declare global {
  interface Window {
    env: {
      API_URL: string;
    };
  }
}

const Config = {
  App: {
    title: packageJson.name ?? "Tinder App",
    version: packageJson.version,
  },
  ApiUrl: window.env.API_URL,
};

export default Config;
