package com.vt.thymeleaf;


import com.vt.response.HttpSendResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequestMapping("/error")
@RestController("/error")
public class ErrorPageThymeleaf implements ErrorController {

    @Autowired
    private SpringTemplateEngine templateEngine;

    @GetMapping("/{code}.html")
    public String handleError(Model model, @PathVariable("code")String code, HttpServletRequest httpServletRequest,HttpServletResponse httpServletResponse){
        Object o=httpServletRequest.getAttribute("msg");
        if (o!=null){
            HttpSendResponse httpSendResponse= (HttpSendResponse)o;
            model.addAttribute("message",httpSendResponse.getMessage());
        }
        return templateEngine.process(code, new WebContext(httpServletRequest, httpServletResponse, httpServletRequest.getServletContext(),
                httpServletRequest.getLocale(), model.asMap()));
    }


    @Override
    public String getErrorPath() {
        return "/error";
    }

}
