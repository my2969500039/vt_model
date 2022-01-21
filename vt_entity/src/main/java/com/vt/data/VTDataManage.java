package com.vt.data;

import com.vt.common.BaseEntity;
import com.vt.section.VTSection;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

/**
 * @Author vien
 * @Description //TODO
 * @Date 17:50 2021/4/19
 **/

@EqualsAndHashCode(callSuper = true)
@Data
@Entity(name = "vt_data")
@Table(name = "vt_data")
public class VTDataManage extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "sectionId",columnDefinition = "bigint(20) comment '所属栏目' ",nullable = false,insertable = false,updatable = false)
    private VTSection VTSection;

    @Column(columnDefinition = "mediumtext")
    private String content;

    private String author;

    private String type;

    @Column(columnDefinition = "varchar(255) comment '视频地址' ")
    protected String videoUrl;

    @Column(columnDefinition = "varchar(100) comment '图片地址'")
    private String image;

    @Column(columnDefinition = "varchar(255) comment 'seo标题' ")
    protected String seoTitle;

    private String description;

    private String keyword;

    private String seoUrl;

    @Column(columnDefinition = "mediumtext")
    private String remark;




}
