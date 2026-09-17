package com.portfolio.controller;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.dto.EducationDto;
import com.portfolio.dto.ExperienceDto;
import com.portfolio.dto.PortfolioDto;
import com.portfolio.dto.ProjectDto;
import com.portfolio.dto.SkillDto;
import com.portfolio.service.PortfolioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/")
    public String home() {
        return "Portfolio Backend is running successfully!";
    }

    @GetMapping("/hello")
    public String hello() {
        return portfolioService.getWelcomeMessage();
    }

    @GetMapping("/portfolio")
    public PortfolioDto getPortfolio() {
        return portfolioService.getPortfolioDetails();
    }

    @PostMapping("/portfolio")
    public PortfolioDto createPortfolio(
            @Valid @RequestBody PortfolioDto portfolioDto) {

        return portfolioService.createPortfolio(portfolioDto);
    }

    @PutMapping("/portfolio")
    public PortfolioDto updatePortfolio(
            @Valid @RequestBody PortfolioDto portfolioDto) {

        return portfolioService.updatePortfolio(portfolioDto);
    }

    @DeleteMapping("/portfolio")
    public String deletePortfolio() {

        portfolioService.deletePortfolio();

        return "Portfolio profile deleted successfully";
    }

    @GetMapping("/skills")
    public List<SkillDto> getSkills() {
        return portfolioService.getSkills();
    }

    @GetMapping("/experience")
    public List<ExperienceDto> getExperience() {
        return portfolioService.getExperience();
    }

    @GetMapping("/education")
    public List<EducationDto> getEducation() {
        return portfolioService.getEducation();
    }

    @GetMapping("/projects")
    public List<ProjectDto> getProjects() {
        return portfolioService.getProjects();
    }

    @PostMapping("/skills")
    public SkillDto addSkill(
            @Valid @RequestBody SkillDto skillDto) {

        return portfolioService.addSkill(skillDto);
    }

    @GetMapping("/skills/{id}")
    public SkillDto getSkillById(@PathVariable Long id) {
        return portfolioService.getSkillById(id);
    }

    @PutMapping("/skills/{id}")
    public SkillDto updateSkill(
            @PathVariable Long id,
            @RequestBody SkillDto skillDto) {

        return portfolioService.updateSkill(id, skillDto);
    }

    @DeleteMapping("/skills/{id}")
    public String deleteSkill(@PathVariable Long id) {

        portfolioService.deleteSkill(id);

        return "Skill deleted successfully";
    }

    @PostMapping("/experience")
    public ExperienceDto addExperience(
            @Valid @RequestBody ExperienceDto experienceDto) {

        return portfolioService.addExperience(experienceDto);
    }

    @GetMapping("/experience/{id}")
    public ExperienceDto getExperienceById(@PathVariable Long id) {

        return portfolioService.getExperienceById(id);
    }

    @PutMapping("/experience/{id}")
    public ExperienceDto updateExperience(
            @PathVariable Long id,
            @Valid @RequestBody ExperienceDto experienceDto) {

        return portfolioService.updateExperience(id, experienceDto);
    }

    @DeleteMapping("/experience/{id}")
    public String deleteExperience(@PathVariable Long id) {

        portfolioService.deleteExperience(id);

        return "Experience deleted successfully";
    }

    @PostMapping("/education")
    public EducationDto addEducation(
            @Valid @RequestBody EducationDto educationDto) {

        return portfolioService.addEducation(educationDto);
    }


    @GetMapping("/education/{id}")
    public EducationDto getEducationById(@PathVariable Long id) {

        return portfolioService.getEducationById(id);
    }


    @PutMapping("/education/{id}")
    public EducationDto updateEducation(
            @PathVariable Long id,
            @Valid @RequestBody EducationDto educationDto) {

        return portfolioService.updateEducation(id, educationDto);
    }


    @DeleteMapping("/education/{id}")
    public String deleteEducation(@PathVariable Long id) {

        portfolioService.deleteEducation(id);

        return "Education deleted successfully";
    }

    @PostMapping("/projects")
    public ProjectDto addProject(
            @Valid @RequestBody ProjectDto projectDto) {

        return portfolioService.addProject(projectDto);
    }


    @GetMapping("/projects/{id}")
    public ProjectDto getProjectById(@PathVariable Long id) {

        return portfolioService.getProjectById(id);
    }


    @PutMapping("/projects/{id}")
    public ProjectDto updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectDto projectDto) {

        return portfolioService.updateProject(id, projectDto);
    }


    @DeleteMapping("/projects/{id}")
    public String deleteProject(@PathVariable Long id) {

        portfolioService.deleteProject(id);

        return "Project deleted successfully";
    }
}