package com.touwin10.chapproom.zuulgatewayservice.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
public class SecurityTokenConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtConfig jwtConfig;
    @Autowired
    private ApiConfig apiConfig;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
                .and()
                .addFilterAfter(new JwtTokenAuthenticationFilter(jwtConfig), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll()
                .antMatchers(HttpMethod.POST, jwtConfig.getUri(), apiConfig.getRegisterUserUri())
                .permitAll()
                .antMatchers(HttpMethod.OPTIONS, jwtConfig.getUri(), apiConfig.getRegisterUserUri())
                .permitAll()
                .anyRequest()
                .authenticated();
    }

    @Bean
    public JwtConfig jwtConfig(){
        return new JwtConfig();
    }

    @Bean
    public ApiConfig apiConfig(){return new ApiConfig();}
}
