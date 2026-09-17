package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class SkillDto {

    @NotBlank(message = "Category is required")
    private String category;

    @NotBlank(message = "Skill name is required")
    private String name;

    public SkillDto() {
    }

    public SkillDto(String category, String name) {
        this.category = category;
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}