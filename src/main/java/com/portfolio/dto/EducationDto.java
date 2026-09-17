package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class EducationDto {

    @NotBlank(message = "Degree is required")
    private String degree;

    @NotBlank(message = "University is required")
    private String university;

    @NotBlank(message = "Year is required")
    private String year;

    @NotBlank(message = "Grade is required")
    private String grade;

    public EducationDto() {
    }

    public EducationDto(
            String degree,
            String university,
            String year,
            String grade) {

        this.degree = degree;
        this.university = university;
        this.year = year;
        this.grade = grade;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}