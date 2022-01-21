package com.vt.manage.db;


import com.alibaba.fastjson.JSONArray;
import com.vt.common.Result;
import com.vt.config.SpringContextUtils;
import com.vt.entity.DataSourceConfiguration;
import com.vt.db.DBRequest;
import com.vt.service.DataSourceRegistrationComponent;
import com.zaxxer.hikari.HikariDataSource;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.ResourceUtils;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController("/db")
@RequestMapping("/db")
@Api(value = "/db",tags = {"数据源"})
public class DataSourceController {

    @Autowired
    private DataSourceRegistrationComponent dataSourceRegistrationComponent;
    @Autowired
    private SpringContextUtils springContextUtils;

    @Value("${spring.datasource.username}")
    private String username;
    @Value("${spring.datasource.password}")
    private String password;



    @PostMapping("/{domain}/{template}")
    @ApiOperation("添加数据源")
    public Result<String>add(@PathVariable("domain") String domain, @PathVariable String template){

        dataSourceRegistrationComponent.initDBData((HikariDataSource) springContextUtils.getBean("siteMaster"), Collections.singletonList(String.format(" CREATE DATABASE %s", domain)));

        String jdbcUrl="jdbc:mysql://127.0.0.1:3306/"+domain+"?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&failOverReadOnly=false&zeroDateTimeBehavior=convertToNull&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true";
        DataSourceConfiguration dataSourceConfiguration=new DataSourceConfiguration();
        dataSourceConfiguration.setUsername(username);
        dataSourceConfiguration.setPassword(password);
        dataSourceConfiguration.setJdbcUrl(jdbcUrl);
        dataSourceConfiguration.setKey(domain+".verloren.cn");
        DataSource dataSource=dataSourceRegistrationComponent.registerDataSource(dataSourceConfiguration);
        dataSourceRegistrationComponent.initDBData(dataSource,readJsonFile(String.format("/mnt/vt-user/db/%s.json", template)));
        return Result.<String>builder().message("添加成功").build();
    }


    public static List<String> readJsonFile(String fileName) {
        String jsonStr = "";
        try {
            File jsonFile = ResourceUtils.getFile(fileName);
            FileReader fileReader = new FileReader(jsonFile);
            Reader reader = new InputStreamReader(new FileInputStream(jsonFile), StandardCharsets.UTF_8);
            int ch = 0;
            StringBuffer sb = new StringBuffer();
            while ((ch = reader.read()) != -1) {
                sb.append((char) ch);
            }
            fileReader.close();
            reader.close();
            jsonStr = sb.toString();
            return JSONArray.parseArray(jsonStr,String.class);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }


}
