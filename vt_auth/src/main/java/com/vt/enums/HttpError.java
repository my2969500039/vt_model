package com.vt.enums;

public enum HttpError {

    NOTFOUND(404),
    UNAUTHORIZED(401),
    FORBIDDEN(403),
    SERVERERROR(500),
    SUCCESS(200),
    ACCEPTED(202),
    BADREQUEST(400);

    private final Integer errorCode;


    HttpError(Integer error_code){
        this.errorCode=error_code;
    };


    public Integer getErrorCode(){
        return this.errorCode;
    }

}
