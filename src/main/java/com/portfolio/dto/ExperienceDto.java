package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class ExperienceDto {

    @NotBlank(message = "Company is required")
    private String company;

    @NotBlank(message = "Role is required")
    private String role;

    @NotBlank(message = "Duration is required")
    private String duration;

    @NotBlank(message = "Description is required")
    private String description;

    public ExperienceDto() {
    }

    public ExperienceDto(
            String company,
            String role,
            String duration,
            String description) {

        this.company = company;
        this.role = role;
        this.duration = duration;
        this.description = description;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}