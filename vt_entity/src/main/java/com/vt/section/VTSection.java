package com.vt.section;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vt.common.BaseEntity;
import com.vt.common.Converters;
import com.vt.data.VTDataListManage;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;


@EqualsAndHashCode(callSuper = false,exclude = {"parent","children"})
@Getter
@Setter
@Entity(name = "VTSection")
@Table(name = "vt_section")
@Where(clause = "available = 1 ")
public class VTSection extends BaseEntity {

  @Column(columnDefinition="tinyint(1) comment '是否新窗口'")
  private Boolean blank;

  @Column(columnDefinition = "mediumtext")
  private String remark;

  private String ico;

  private String image;

  private String name;

  @Column(columnDefinition="varchar(255) comment '网站标题'")
  private String title;

  @Column(columnDefinition="varchar(20) comment '导航位置 1--顶部，2--中部，3--底部'")
  @Convert(converter = Converters.class)
  private List<String> navPosition=new LinkedList<>();

  @Column(columnDefinition="varchar(255) comment '跳转链接'")
  private String url;

  @Column(columnDefinition="varchar(255) comment '跳转链接'")
  private String videoUrl;

  @Column(columnDefinition="varchar(255) comment '跳转链接'")
  private String background;

  private String template;

  private String description;

  private String keyword;

  private String shortTitle;

  @OneToMany(mappedBy = "parent",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JSONField(serialize = false)
  @OrderBy(value = "comparable asc ")
  @JsonIgnore
  @Where(clause = "available = 1")
  private Set<VTSection> children;

  @ManyToOne
  @JsonIgnore
  @JSONField(serialize = false)
  private VTSection parent;

  @OneToMany(fetch = FetchType.LAZY)
  @JoinColumn(name = "sectionId")
  @Where(clause = "is_index = 1 ")
  private List<VTDataListManage> dataManages;



}
