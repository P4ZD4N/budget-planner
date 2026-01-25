package com.p4zd4n.budgets.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/budgets")
@CrossOrigin(origins = "http://localhost:4200")
public class BudgetsController {

  @GetMapping("/test")
  public String testEndpoint() {
    return "Siema2";
  }
}
