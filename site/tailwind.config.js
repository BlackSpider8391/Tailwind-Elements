module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.html", "./static/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("./static/js/plugin")],
  darkMode: "class",
  // for dynamic content
  safelist: [
    "bg-primary-100",
    "bg-success-100",
    "bg-warning-100",
    "border-primary-500",
    "border-success-500",
    "border-warning-500",
    "text-primary-700",
    "text-success-700",
    "text-warning-700",
    "hover:bg-primary-100",
    "hover:bg-success-100",
    "hover:bg-warning-100",
    "hover:bg-neutral-700",
    "hover:opacity-75",
    "dark:text-primary-200",
    "dark:text-success-200",
    "dark:text-warning-200",
    "dark:bg-primary-100/20",
    "dark:bg-success-100/20",
    "dark:bg-warning-100/20",
  ],
};
