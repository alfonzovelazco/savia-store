const c = require("ansi-colors");

const requiredEnvs = [
  {
    key: "NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY",
    description:
      "Learn how to create a publishable key: https://docs.medusajs.com/v2/resources/storefront-development/publishable-api-keys",
  },
];

function checkEnvVariables() {
  const missingEnvs = requiredEnvs.filter(function (env) {
    return !process.env[env.key];
  });

  if (missingEnvs.length > 0) {
    console.warn(
      c.yellow.bold("\n⚠️  Warning: Missing environment variables (will be injected at runtime)\n")
    );
    missingEnvs.forEach(function (env) {
      console.warn(c.yellow(`  ${c.bold(env.key)}`));
    });
    console.warn("");
    // Do not exit — variables are provided at runtime via Docker ENV
  }
}

module.exports = checkEnvVariables;
