package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class PortfolioDto {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Role is required")
    private String role;

    @NotBlank(message = "Introduction is required")
    private String introduction;

    public PortfolioDto() {
    }

    public PortfolioDto(
            String name,
            String role,
            String introduction) {

        this.name = name;
        this.role = role;
        this.introduction = introduction;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
}