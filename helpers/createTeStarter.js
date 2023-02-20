var zip = require("bestzip");

zip({
  source: `*`,
  destination: "../site/te-starter.zip",
  cwd: "dist/",
})
  .then(() => {
    console.log("Successfully zipped");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
