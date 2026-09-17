package com.portfolio.model;

public class PortfolioResponse {

    private String name;
    private String role;
    private String introduction;

    public PortfolioResponse() {
    }

    public PortfolioResponse(String name, String role, String introduction) {
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