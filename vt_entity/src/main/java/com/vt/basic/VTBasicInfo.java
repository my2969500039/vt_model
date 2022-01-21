package com.vt.basic;

import com.vt.common.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Table;

import javax.persistence.Column;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity(name = "vt_basic_info")
@Table(appliesTo = "vt_basic_info",comment = "应用中心-基本信息表")
public class VTBasicInfo extends BaseEntity {

    @Column(columnDefinition="VARCHAR(100) comment '网站名称' ")
    private String name;

    @Column(columnDefinition="VARCHAR(100) comment '网站模板' ")
    private String template;

    @Column(columnDefinition="VARCHAR(250) comment '网址' ")
    private String url;

    @Column(columnDefinition="VARCHAR(250) comment 'favicon' ")
    private String faviconLogo;

    @Column(columnDefinition="VARCHAR(250) comment '关键词' ")
    private String keywords;

    @Column(columnDefinition="VARCHAR(250) comment '描述' ")
    private String description;

    @Column(columnDefinition="VARCHAR(250) comment '版权所有' ")
    private String copyright;

    @Column(columnDefinition="VARCHAR(250) comment '其他信息' ")
    private String otherInfo;

    @Column(columnDefinition="VARCHAR(250) comment '备案号' ")
    private String icp;

}
