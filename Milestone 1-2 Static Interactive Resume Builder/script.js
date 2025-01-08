// Toggle Skills Section
var toggleSkillsButton = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills");
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    }
});
// Toggle Education Section
var toggleEducationButton = document.getElementById("toggle-education-btn");
var educationSection = document.getElementById("education");
toggleEducationButton === null || toggleEducationButton === void 0 ? void 0 : toggleEducationButton.addEventListener("click", function () {
    if (educationSection) {
        educationSection.style.display = educationSection.style.display === "none" ? "block" : "none";
    }
});
