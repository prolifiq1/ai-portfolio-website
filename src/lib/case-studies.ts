import fs from "fs";
import path from "path";

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");

export function getCaseStudyContent(slug: string): string | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

export function getAllCaseStudySlugs(): string[] {
  try {
    return fs
      .readdirSync(CASE_STUDIES_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(".md", ""));
  } catch {
    return [];
  }
}

export function parseMarkdown(content: string): {
  title: string;
  sections: { heading: string; content: string }[];
} {
  const lines = content.split("\n");
  let title = "";
  const sections: { heading: string; content: string }[] = [];
  let currentHeading = "";
  let currentContent: string[] = [];

  for (const line of lines) {
    if (line.startsWith("# ") && !title) {
      title = line.replace("# ", "");
    } else if (line.startsWith("## ")) {
      if (currentHeading || currentContent.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentContent.join("\n").trim(),
        });
      }
      currentHeading = line.replace("## ", "");
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  if (currentHeading || currentContent.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentContent.join("\n").trim(),
    });
  }

  return { title, sections };
}
