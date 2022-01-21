package com.vt.data;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "VTDataListManage")
@Table(name = "vt_data")
public class VTDataListManage {

    @Id
    @GeneratedValue(generator = "snowFlakeId")
    @GenericGenerator(name = "snowFlakeId", strategy = "com.vt.common.SnowflakeId")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;

    @Column(name = "`available`", columnDefinition = "tinyint(1)")
    private Boolean available=Boolean.TRUE;

    private String author;

    private String type;

    private String title;

    @Column(columnDefinition = "varchar(255) comment '视频地址' ")
    protected String videoUrl;

    @Column(columnDefinition = "varchar(100) comment '图片地址'")
    private String image;

    @Column(columnDefinition = "mediumtext")
    private String remark;

    private Boolean isIndex;

}
