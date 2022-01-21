package com.vt.manage.advice;

import com.vt.aop.asp.MultipleSiteAsp;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Component
public class MultipleSiteAspImpl extends MultipleSiteAsp {

    public  String tableBase(){
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request.getServerName();
    }

}
