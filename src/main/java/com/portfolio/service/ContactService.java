package com.portfolio.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portfolio.dto.ContactRequest;

@Service
public class ContactService {

    private final JavaMailSender mailSender;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("shindeprasadarvind@gmail.com");

        message.setReplyTo(request.getEmail());

        message.setSubject("Portfolio Contact: " + request.getSubject());

        message.setText(
                "You received a new message from your portfolio.\n\n"
                + "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n"
                + "Subject: " + request.getSubject() + "\n\n"
                + "Message:\n"
                + request.getMessage()
        );

        mailSender.send(message);
    }
}