interface AppConfig {
  address: string;
  port: number;
}
const config: AppConfig = {
  address: "0.0.0.0",
  port: 3000,
};

export default config;
