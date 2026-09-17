package com.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.dto.EducationDto;
import com.portfolio.dto.ExperienceDto;
import com.portfolio.dto.PortfolioDto;
import com.portfolio.dto.ProjectDto;
import com.portfolio.dto.SkillDto;
import com.portfolio.entity.Education;
import com.portfolio.entity.Experience;
import com.portfolio.entity.Portfolio;
import com.portfolio.entity.Project;
import com.portfolio.entity.Skill;
import com.portfolio.repository.EducationRepository;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.repository.PortfolioRepository;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.repository.SkillRepository;
import com.portfolio.exception.ResourceNotFoundException;

@Service
public class PortfolioService {

    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final ProjectRepository projectRepository;
    private final PortfolioRepository portfolioRepository;

    public PortfolioService(
            SkillRepository skillRepository,
            ExperienceRepository experienceRepository,
            EducationRepository educationRepository,
            ProjectRepository projectRepository,
            PortfolioRepository portfolioRepository) {

        this.skillRepository = skillRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.projectRepository = projectRepository;
        this.portfolioRepository = portfolioRepository;
    }

    public String getWelcomeMessage() {
        return "Welcome to my Java Backend Developer Portfolio!";
    }

    public PortfolioDto getPortfolioDetails() {

        Portfolio portfolio = portfolioRepository.findFirstByOrderByIdAsc()
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Portfolio profile not found"
                ));

        return new PortfolioDto(
                portfolio.getName(),
                portfolio.getRole(),
                portfolio.getIntroduction()
        );
    }

    public PortfolioDto createPortfolio(PortfolioDto portfolioDto) {

        if (portfolioRepository.count() > 0) {
            throw new IllegalStateException(
                    "Portfolio profile already exists"
            );
        }

        Portfolio portfolio = new Portfolio(
                portfolioDto.getName(),
                portfolioDto.getRole(),
                portfolioDto.getIntroduction()
        );

        Portfolio savedPortfolio = portfolioRepository.save(portfolio);

        return new PortfolioDto(
                savedPortfolio.getName(),
                savedPortfolio.getRole(),
                savedPortfolio.getIntroduction()
        );
    }

    public PortfolioDto updatePortfolio(PortfolioDto portfolioDto) {

        Portfolio portfolio = portfolioRepository.findFirstByOrderByIdAsc()
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Portfolio profile not found"
                ));

        portfolio.setName(portfolioDto.getName());
        portfolio.setRole(portfolioDto.getRole());
        portfolio.setIntroduction(portfolioDto.getIntroduction());

        Portfolio updatedPortfolio = portfolioRepository.save(portfolio);

        return new PortfolioDto(
                updatedPortfolio.getName(),
                updatedPortfolio.getRole(),
                updatedPortfolio.getIntroduction()
        );
    }

    public void deletePortfolio() {

        Portfolio portfolio = portfolioRepository.findFirstByOrderByIdAsc()
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Portfolio profile not found"
                ));

        portfolioRepository.delete(portfolio);
    }



    public List<SkillDto> getSkills() {

        List<Skill> skills = skillRepository.findAll();

        return skills.stream()
                .map(skill -> new SkillDto(
                        skill.getCategory(),
                        skill.getName()
                ))
                .toList();
    }

    public List<ExperienceDto> getExperience() {

        List<Experience> experiences = experienceRepository.findAll();

        return experiences.stream()
                .map(experience -> new ExperienceDto(
                        experience.getCompany(),
                        experience.getRole(),
                        experience.getDuration(),
                        experience.getDescription()
                ))
                .toList();
    }

    public List<EducationDto> getEducation() {

        List<Education> educationList = educationRepository.findAll();

        return educationList.stream()
                .map(education -> new EducationDto(
                        education.getDegree(),
                        education.getUniversity(),
                        education.getYear(),
                        education.getGrade()
                ))
                .toList();
    }

    public List<ProjectDto> getProjects() {

        List<Project> projects = projectRepository.findAll();

        return projects.stream()
                .map(project -> new ProjectDto(
                        project.getName(),
                        project.getDescription(),
                        project.getTechnologies(),
                        project.getGithubUrl()
                ))
                .toList();
    }

    public SkillDto addSkill(SkillDto skillDto) {

        Skill skill = new Skill(
                skillDto.getCategory(),
                skillDto.getName()
        );

        Skill savedSkill = skillRepository.save(skill);

        return new SkillDto(
                savedSkill.getCategory(),
                savedSkill.getName()
        );
    }

    public SkillDto getSkillById(Long id) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Skill not found with id: " + id
                ));

        return new SkillDto(
                skill.getCategory(),
                skill.getName()
        );
    }

    public SkillDto updateSkill(Long id, SkillDto skillDto) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Skill not found with id: " + id
                ));

        skill.setCategory(skillDto.getCategory());
        skill.setName(skillDto.getName());

        Skill updatedSkill = skillRepository.save(skill);

        return new SkillDto(
                updatedSkill.getCategory(),
                updatedSkill.getName()
        );
    }

    public void deleteSkill(Long id) {
        if (!skillRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Skill not found with id: " + id
            );
        }

        skillRepository.deleteById(id);
    }

    public ExperienceDto addExperience(ExperienceDto experienceDto) {

        Experience experience = new Experience(
                experienceDto.getCompany(),
                experienceDto.getRole(),
                experienceDto.getDuration(),
                experienceDto.getDescription()
        );

        Experience savedExperience = experienceRepository.save(experience);

        return new ExperienceDto(
                savedExperience.getCompany(),
                savedExperience.getRole(),
                savedExperience.getDuration(),
                savedExperience.getDescription()
        );
    }

    public ExperienceDto getExperienceById(Long id) {

        Experience experience = experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Experience not found with id: " + id
                ));

        return new ExperienceDto(
                experience.getCompany(),
                experience.getRole(),
                experience.getDuration(),
                experience.getDescription()
        );
    }
    public ExperienceDto updateExperience(
            Long id,
            ExperienceDto experienceDto) {

        Experience experience = experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Experience not found with id: " + id
                ));

        experience.setCompany(experienceDto.getCompany());
        experience.setRole(experienceDto.getRole());
        experience.setDuration(experienceDto.getDuration());
        experience.setDescription(experienceDto.getDescription());

        Experience updatedExperience = experienceRepository.save(experience);

        return new ExperienceDto(
                updatedExperience.getCompany(),
                updatedExperience.getRole(),
                updatedExperience.getDuration(),
                updatedExperience.getDescription()
        );
    }

    public void deleteExperience(Long id) {

        if (!experienceRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Experience not found with id: " + id
            );
        }

        experienceRepository.deleteById(id);
    }

    public EducationDto addEducation(EducationDto educationDto) {

        Education education = new Education(
                educationDto.getDegree(),
                educationDto.getUniversity(),
                educationDto.getYear(),
                educationDto.getGrade()
        );

        Education savedEducation = educationRepository.save(education);

        return new EducationDto(
                savedEducation.getDegree(),
                savedEducation.getUniversity(),
                savedEducation.getYear(),
                savedEducation.getGrade()
        );
    }


    public EducationDto getEducationById(Long id) {

        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Education not found with id: " + id
                ));

        return new EducationDto(
                education.getDegree(),
                education.getUniversity(),
                education.getYear(),
                education.getGrade()
        );
    }


    public EducationDto updateEducation(
            Long id,
            EducationDto educationDto) {

        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Education not found with id: " + id
                ));

        education.setDegree(educationDto.getDegree());
        education.setUniversity(educationDto.getUniversity());
        education.setYear(educationDto.getYear());
        education.setGrade(educationDto.getGrade());

        Education updatedEducation = educationRepository.save(education);

        return new EducationDto(
                updatedEducation.getDegree(),
                updatedEducation.getUniversity(),
                updatedEducation.getYear(),
                updatedEducation.getGrade()
        );
    }


    public void deleteEducation(Long id) {

        if (!educationRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Education not found with id: " + id
            );
        }

        educationRepository.deleteById(id);
    }

    public ProjectDto addProject(ProjectDto projectDto) {

        Project project = new Project(
                projectDto.getName(),
                projectDto.getDescription(),
                projectDto.getTechnologies(),
                projectDto.getGithubUrl()
        );

        Project savedProject = projectRepository.save(project);

        return new ProjectDto(
                savedProject.getName(),
                savedProject.getDescription(),
                savedProject.getTechnologies(),
                savedProject.getGithubUrl()
        );
    }


    public ProjectDto getProjectById(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Project not found with id: " + id
                ));

        return new ProjectDto(
                project.getName(),
                project.getDescription(),
                project.getTechnologies(),
                project.getGithubUrl()
        );
    }


    public ProjectDto updateProject(
            Long id,
            ProjectDto projectDto) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Project not found with id: " + id
                ));

        project.setName(projectDto.getName());
        project.setDescription(projectDto.getDescription());
        project.setTechnologies(projectDto.getTechnologies());
        project.setGithubUrl(projectDto.getGithubUrl());

        Project updatedProject = projectRepository.save(project);

        return new ProjectDto(
                updatedProject.getName(),
                updatedProject.getDescription(),
                updatedProject.getTechnologies(),
                updatedProject.getGithubUrl()
        );
    }


    public void deleteProject(Long id) {

        if (!projectRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Project not found with id: " + id
            );
        }

        projectRepository.deleteById(id);
    }
}