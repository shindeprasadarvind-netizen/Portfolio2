package com.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI portfolioOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("Personal Portfolio API")
                        .version("1.0")
                        .description(
                                "REST API for managing my personal portfolio, "
                                + "including skills, experience, education, "
                                + "projects and portfolio profile."
                        ));
    }
}