package com.vt.response;

import com.alibaba.fastjson.JSONObject;
import com.vt.enums.HttpError;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Objects;

@Slf4j
@Data
public class HttpSendResponse {

    private final Integer code;

    private final  String message;

    private final  Object data;

    private final  Date time;

    public String toString(){
        return  JSONObject.toJSONString(this);
    }

    private HttpSendResponse(Builder builder){
        this.code=builder.code.getErrorCode();
        this.message= builder.message;
        this.time=new Date();
        this.data=builder.data;
        HttpServletResponse httpServletResponse = ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getResponse();
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setStatus(this.code);
        httpServletResponse.setContentType("application/json; charset=utf-8");
        try (PrintWriter out = httpServletResponse.getWriter()) {
            out.write(this.toString());
            log.warn(this.toString());
        } catch (IOException e) {
        }
    }



    private HttpSendResponse(HttpError error, String message)  {
        this.code=error.getErrorCode();
        this.message= message;
        this.time=new Date();
        this.data=null;
        HttpServletRequest httpServletRequest = ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
        HttpServletResponse httpServletResponse = ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getResponse();
        httpServletRequest.setAttribute("msg",this);
        switch (error){
            case FORBIDDEN:
                log.info(message);
            case BADREQUEST:
                log.warn(message);
            case SUCCESS:
                log.info(message);
            case SERVERERROR:
                log.error(message);
        }
        try{
            httpServletRequest.getRequestDispatcher("/error/"+this.code+".html").forward(httpServletRequest,httpServletResponse);
        }
        catch (Exception e){
        }
    }


    public static Builder builder() {
        return new Builder();
    }


    public static class Builder{

        private HttpError code;

        private String message;

        private Object data;


        public Builder code(HttpError httpError){
            this.code=httpError;
            return this;
        }


        public Builder data(Object data){
            this.data=data;
            return this;
        }

        public Builder message(String message){
            this.message=message;
            return this;
        }

        public HttpSendResponse send(){
            return new HttpSendResponse(this);
        }

        public HttpSendResponse sendRedirect(){
            return new HttpSendResponse(this.code,this.message);
        }


    }








}

