package com.portfolio.model;

public class Education {

    private String degree;
    private String university;
    private String year;
    private String grade;

    public Education() {
    }

    public Education(String degree, String university, String year, String grade) {
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