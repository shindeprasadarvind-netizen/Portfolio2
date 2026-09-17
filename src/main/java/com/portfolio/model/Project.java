package com.portfolio.model;

public class Project {

    private String name;
    private String description;
    private String technologies;
    private String githubUrl;

    public Project() {
    }

    public Project(String name, String description, String technologies, String githubUrl) {
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