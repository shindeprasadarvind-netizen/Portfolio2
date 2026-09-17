package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class ProjectDto {

    @NotBlank(message = "Project name is required")
    private String name;

    @NotBlank(message = "Project description is required")
    private String description;

    @NotBlank(message = "Technologies are required")
    private String technologies;

    @NotBlank(message = "GitHub URL is required")
    private String githubUrl;

    public ProjectDto() {
    }

    public ProjectDto(
            String name,
            String description,
            String technologies,
            String githubUrl) {

        this.name = name;
        this.description = description;
        this.technologies = technologies;
        this.githubUrl = githubUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }
}