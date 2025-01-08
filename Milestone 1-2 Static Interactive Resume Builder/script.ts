// Toggle Education Section
const toggleEducationButton = document.getElementById("toggle-education-btn");
const educationSection = document.getElementById("education");

toggleEducationButton?.addEventListener("click", () => {
  if (educationSection) {
    educationSection.style.display = educationSection.style.display === "none" ? "block" : "none";
  }
});

// Toggle Skills Section
const toggleSkillsButton = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills");

toggleSkillsButton?.addEventListener("click", () => {
  if (skillsSection) {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
  }
});
