// release.js
const prompts = require("prompts");
const { execSync } = require("child_process");

(async () => {
  console.log("\n🛠️  Building your design system...\n");
  execSync("npm run build", { stdio: "inherit" });

  const { message } = await prompts({
    type: "text",
    name: "message",
    message: "📝 Commit message:",
  });

  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });

  const { versionType } = await prompts({
    type: "select",
    name: "versionType",
    message: "📦 Choose version bump:",
    choices: [
      { title: "Patch", value: "patch" },
      { title: "Minor", value: "minor" },
      { title: "Major", value: "major" },
    ],
  });

  execSync(`npm version ${versionType}`, { stdio: "inherit" });

  console.log("\n🚀 Pushing to GitHub...\n");
  execSync("git push", { stdio: "inherit" });
  execSync("git push --tags", { stdio: "inherit" });

  console.log("\n📤 Publishing to npm...\n");
  execSync("npm publish", { stdio: "inherit" });

  console.log("\n✅ Release complete!\n");
})();
