package com.vt.db;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DBRequest {

    @ApiModelProperty("账号")
    private String username;

    @ApiModelProperty("密码")
    private String password;

    @ApiModelProperty("ip")
    private String ip;

    @ApiModelProperty("端口")
    private Integer port;

    @ApiModelProperty("库名")
    private String dbName;

    private String template;

}
