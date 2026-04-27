import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const markdownFiles = [];
const excludedFiles = new Set([
  "README.md",
]);
const markerStart = "<!-- note-nav:start -->";
const markerEnd = "<!-- note-nav:end -->";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "assets") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(repoRoot, fullPath).replaceAll(path.sep, "/");

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md") && !excludedFiles.has(relativePath)) {
      markdownFiles.push(relativePath);
    }
  }
}

function toPosixPath(value) {
  return value.replaceAll(path.sep, "/");
}

function relativeLink(fromFile, toFile) {
  const fromDir = path.dirname(fromFile);
  let target = toPosixPath(path.relative(fromDir, toFile));
  if (!target || target === "") {
    target = path.basename(toFile);
  }
  return target.startsWith(".") ? target : `./${target}`;
}

function findNearestReadme(filePath) {
  let currentDir = path.dirname(path.join(repoRoot, filePath));
  while (currentDir.startsWith(repoRoot)) {
    const candidate = path.join(currentDir, "README.md");
    const relativeCandidate = toPosixPath(path.relative(repoRoot, candidate));
    if (fs.existsSync(candidate) && relativeCandidate !== filePath) {
      return relativeCandidate;
    }
    if (currentDir === repoRoot) {
      break;
    }
    currentDir = path.dirname(currentDir);
  }
  return null;
}

function findParentReadme(filePath, nearestReadme) {
  if (!nearestReadme) {
    return null;
  }

  let currentDir = path.dirname(path.join(repoRoot, nearestReadme));
  while (currentDir.startsWith(repoRoot)) {
    const candidate = path.join(path.dirname(currentDir), "README.md");
    const relativeCandidate = toPosixPath(path.relative(repoRoot, candidate));
    if (
      currentDir !== repoRoot &&
      fs.existsSync(candidate) &&
      relativeCandidate !== nearestReadme &&
      relativeCandidate !== filePath
    ) {
      return relativeCandidate;
    }

    if (currentDir === repoRoot) {
      break;
    }
    currentDir = path.dirname(currentDir);
  }

  return null;
}

function buildNavigationBlock(filePath) {
  const lines = [markerStart, "## 导航"];
  const rootReadme = "README.md";
  const nearestReadme = findNearestReadme(filePath);
  const parentReadme = findParentReadme(filePath, nearestReadme);
  const isReadme = path.basename(filePath) === "README.md";
  const links = [];

  if (filePath !== rootReadme) {
    links.push(["返回仓库首页", relativeLink(filePath, rootReadme)]);
  }

  if (nearestReadme && nearestReadme !== rootReadme) {
    links.push([isReadme ? "返回上一级导航" : "返回当前专题导航", relativeLink(filePath, nearestReadme)]);
  }

  if (parentReadme && parentReadme !== rootReadme && parentReadme !== nearestReadme) {
    links.push(["返回上一级主题", relativeLink(filePath, parentReadme)]);
  }

  const deduped = new Set();
  for (const [label, target] of links) {
    const key = target;
    if (deduped.has(key)) {
      continue;
    }
    deduped.add(key);
    lines.push(`- [${label}](${target})`);
  }

  lines.push(markerEnd);
  return `${lines.join("\n")}\n`;
}

function upsertNavigation(content, navBlock) {
  const markerPattern = new RegExp(
    `${markerStart}[\\s\\S]*?${markerEnd}\\n*`,
    "m",
  );

  if (markerPattern.test(content)) {
    return content.replace(markerPattern, navBlock);
  }

  const trimmed = content.replace(/\s+$/, "");
  return `${trimmed}\n\n---\n\n${navBlock}`;
}

walk(repoRoot);

let updatedCount = 0;

for (const filePath of markdownFiles) {
  const absolutePath = path.join(repoRoot, filePath);
  const original = fs.readFileSync(absolutePath, "utf8");
  const next = upsertNavigation(original, buildNavigationBlock(filePath));

  if (next !== original) {
    fs.writeFileSync(absolutePath, next);
    updatedCount += 1;
  }
}

console.log(`Updated ${updatedCount} markdown files.`);
