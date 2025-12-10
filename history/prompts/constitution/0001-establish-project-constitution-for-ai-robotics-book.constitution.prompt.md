---
id: 0001
title: Establish Project Constitution for AI & Robotics Book
stage: constitution
date: 2025-12-05
surface: agent
model: Gemini
feature: none
branch: master
user: Mehwish Sheikh
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

Project: AI & Humanoid Robotics – Physical AI Book and RAG Chatbot

Core principles:
- Accuracy through primary source verification: All technical claims, robotics principles, AI methods, and code must be traceable to authoritative sources including ROS 2 docs, NVIDIA Isaac SDK, peer-reviewed papers, and AI references.
- Clarity for technical audience: Content must be understandable to advanced high school and college students in AI, robotics, or related fields. Technical terms must be explained with examples.
- Reproducibility: All robot simulations, code snippets, AI integrations, and RAG chatbot setup must include step-by-step instructions to replicate results.
- Rigor: Prefer peer-reviewed articles, official documentation, and industry whitepapers. AI-generated content (Spec-Kit Plus, Claude Code) must be verified for correctness.
- Safety & ethics: Physical AI experiments must prioritize simulation before real-world deployment. Emphasize safe human-robot interaction and ethical AI principles.

Key standards:
- All factual claims and technical instructions must be cited in APA format.
- Minimum 50% of sources must be peer-reviewed robotics, AI, or engineering publications.
- RAG chatbot integration instructions must be precise and reproducible.
- AI-generated content must be validated before inclusion.
- Include diagrams, ROS 2 node schematics, and VLA (Vision-Language-Action) workflows.

Constraints:
- Book word count: 20,000–25,000 words including explanations, diagrams, and code snippets.
- Book format: Docusaurus deployed to GitHub Pages, fully navigable.
- Embedded RAG chatbot must answer questions based on book content, support text-selection-based retrieval, and use OpenAI Agents/ChatKit SDKs, FastAPI, Neon Postgres, and Qdrant Cloud Free Tier.
- Minimum of 20 technical references, at least 10 peer-reviewed.
- Plagiarism tolerance: 0%.
- Include diagrams, ROS 2 nodes schematics, and Vision-Language-Action workflows.

Success criteria:
- All technical claims verified and reproducible.
- ROS 2 packages, Gazebo simulations, and Isaac AI pipelines are fully documented.
- Docusaurus book deployed and navigable on GitHub Pages.
- RAG chatbot embedded and answering content-specific queries accurately.
- Passes fact-checking review.
- Writing clarity meets Flesch-Kincaid grade 10–12.
- Ethical and safe AI principles explicitly addressed.

## Response snapshot

I have updated the project constitution at `.specify/memory/constitution.md` based on your input. The new version is 1.0.0. I have also checked all the relevant files for consistency and no changes were needed.

## Outcome

- ✅ Impact: The project constitution was updated to reflect the new principles and standards for the "AI & Humanoid Robotics – Physical AI Book and RAG Chatbot" project.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: none
- 🧠 Reflection: The user provided a very detailed and well-structured input, which made it easy to update the constitution.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none