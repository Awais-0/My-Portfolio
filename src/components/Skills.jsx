import { DiReact, DiGithubBadge, DiJavascript1, DiHtml5, DiCss3, DiPython, DiDjango, DiCode, DiNodejs } from "react-icons/di";
import { SiRedux, SiCplusplus, SiTailwindcss } from "react-icons/si";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Building interactive UIs and SPAs</>,
  },
  {
    slug: "node",
    Component: DiNodejs,
    title: "Node",
    Description: () => <>Building secure and fast backends and APIs</>,
  },
  {
    slug: "tailwindcss",
    Component: SiTailwindcss,
    title: "Tailwindcs",
    Description: () => <>Utilizing best and effective styling with engaging UIs</>,
  },
  {
    slug: "github",
    Component: DiGithubBadge,
    title: "GitHub",
    Description: () => <>Version control and open source collaboration</>,
  },
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>Core web language for dynamic functionality</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Structuring web content</>,
  },
  {
    slug: "css",
    Component: DiCss3,
    title: "CSS",
    Description: () => <>Styling responsive, modern UIs</>,
  },
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Backend scripts, automations, and apps</>,
  },
  {
    slug: "django",
    Component: DiDjango,
    title: "Django",
    Description: () => <>Backend web apps with Python and Django</>,
  },
  {
    slug: "react-redux",
    Component: SiRedux,
    title: "React Redux",
    Description: () => <>State management for complex UIs</>,
  },
  {
    slug: "cplusplus",
    Component: SiCplusplus,
    title: "C++",
    Description: () => <>Performance-critical apps and algorithms</>,
  },
  {
    slug: "graphic-designing",
    Component: DiCode,
    title: "Graphic Designing",
    Description: () => <>Creating UI/UX assets and visuals</>,
  },
];
