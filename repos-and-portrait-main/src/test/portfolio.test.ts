import { describe, expect, it } from "vitest";

import {
  experience,
  filterProjects,
  patentPublications,
  projects,
  researchWorks,
} from "@/data/portfolio";

describe("portfolio project filters", () => {
  it("shows all 15 public repositories in the complete view", () => {
    expect(filterProjects("All work")).toHaveLength(15);
  });

  it("filters the four computer-vision repositories", () => {
    expect(filterProjects("Computer Vision")).toHaveLength(4);
  });

  it("links every displayed repository to GitHub", () => {
    expect(
      projects.every((project) => project.href.startsWith("https://github.com/NowrinbegumR/")),
    ).toBe(true);
  });

  it("includes both supplied work-history sets with the updated XOBO dates", () => {
    expect(experience.map(({ company, date }) => [company, date])).toEqual([
      ["IQmath Technologies", "June 2026 — July 2026"],
      ["Bluestock FinTech", "July 2025 — August 2025"],
      ["XOBO Technologies Pvt. Ltd.", "September 2025 — October 2025"],
    ]);
  });

  it("never links a research paper or patent to an unverified URL", () => {
    const links = [...researchWorks, ...patentPublications]
      .map((item) => item.href)
      .filter(Boolean) as string[];
    expect(links.every((href) => href.startsWith("https://"))).toBe(true);
    expect(links.every((href) => !/google\.com\/search|github\.com/.test(href))).toBe(true);
    expect(new Set(links).size).toBe(links.length);
  });

  it("keeps research work separate from the two published patent records", () => {
    expect(researchWorks.map(({ title }) => title)).toHaveLength(3);
    expect(
      patentPublications
        .filter((p) => p.applicationNumber)
        .map(({ applicationNumber, published }) => [applicationNumber, published]),
    ).toEqual([
      ["202541094931", "October 2025"],
      ["202541076252", "September 2025"],
    ]);
  });
});
