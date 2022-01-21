package com.vt.common;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

/**
 * @author cnyuchu@gmail.com
 * @date 2018/11/8 9:27
 */
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Result<T> implements Serializable {

    private static final long serialVersionUID= 79811242304078637L;

    private final String result;

    private final Integer code;

    private final String message;

    private final T data;

    private Result(Builder<T> builder) {
        this.result = builder.result;
        this.code = builder.code;
        this.message = builder.message;
        this.data = builder.data;
    }

    public static<T> Builder<T> builder() {
        return new Builder<>();
    }

    public static class Builder<T> {
        private String result;

        private Integer code;

        private String message;

        private T data;

        public Builder<T> code(Integer code) {
            this.code = code;
            return this;
        }

        public Builder<T>  message(String message) {
            this.message = message;
            return this;
        }

        public Builder<T>  result(String result) {
            this.result = result;
            return this;
        }

        public Builder<T>  success() {
            this.result = "SUCCESS";
            this.code = 200;
            return this;
        }

        public Builder<T>  fail() {
            this.result = "FAILURE";
            this.code = 500;
            return this;
        }

        public Builder<T>  data(T data) {
            this.data = data;
            return this;
        }

        public Result<T> build() {
            return new Result<>(this);
        }
    }

    @JsonIgnore
    public Boolean isFailed(){
        return this.code==500;
    }
}
