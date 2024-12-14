import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Install Next.js",
    href: "/install-nextjs",
    heading: "Getting started",
  },
  {
    title: "Install Tailwind",
    href: "/install-tailwind",
  },
  {
    spacer: true,
  },
  {
    title: "Scrolling Social Proof",
    href: "/scrolling-social-proof",
    heading: "Components",
  },
  {
    title: "Animated Gradient Button",
    href: "/animated-gradient-button",
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Other",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deeper",
        href: "/deeper",
        items : [
          {
            title: "Even deeper",
            href: "/even-deeper",
          },
        ]
      },
    ],
  },
  {
    title: "Markup",
    href: "/markup",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];