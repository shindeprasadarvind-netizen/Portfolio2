package com.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portfolio.entity.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {

}