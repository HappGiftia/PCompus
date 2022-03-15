package com.uof.pcompus.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.sql.Date;

/**
 * @Description: 一个echarts图表实体
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pojo
 * @Author: Happ
 * @CreateTime: 2021-11-26 19:53
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@JsonIgnoreProperties(value = {"handler"})
public class Echarts {
    private long echartsId;
    private String title;
    private Date echartsCreateTime;
    private String echartsAuthor;
    private String echartsTabs;
    private String echartsLabel;
    private String echartsX;
    private String echartsSeriesName;
    private String echartsSeriesType;
    private String echartsSeriesStack;
    private String echartsSeriesData;
    private Date updateEchartsTime;


    public Date getEchartsCreateTime() {
        return this.echartsCreateTime;
    }

    public void setEchartsCreateTime(Date echartsCreateTime) {
        this.echartsCreateTime = echartsCreateTime;
    }

    public String getEchartsAuthor() {
        return this.echartsAuthor;
    }

    public void setEchartsAuthor(String echartsAuthor) {
        this.echartsAuthor = echartsAuthor;
    }

    public String getEchartsTabs() {
        return this.echartsTabs;
    }

    public void setEchartsTabs(String echartsTabs) {
        this.echartsTabs = echartsTabs;
    }


    public Echarts() {

    }

    public long getEchartsId() {
        return this.echartsId;
    }

    public void setEchartsId(long echartsId) {
        this.echartsId = echartsId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEchartsLabel() {
        return echartsLabel;
    }

    public void setEchartsLabel(String echartsLabel) {
        this.echartsLabel = echartsLabel;
    }

    public String getEchartsX() {
        return echartsX;
    }

    public void setEchartsX(String echartsX) {
        this.echartsX = echartsX;
    }

    public String getEchartsSeriesName() {
        return echartsSeriesName;
    }

    public void setEchartsSeriesName(String echartsSeriesName) {
        this.echartsSeriesName = echartsSeriesName;
    }

    public String getEchartsSeriesType() {
        return echartsSeriesType;
    }

    public void setEchartsSeriesType(String echartsSeriesType) {
        this.echartsSeriesType = echartsSeriesType;
    }

    public String getEchartsSeriesStack() {
        return echartsSeriesStack;
    }

    public void setEchartsSeriesStack(String echartsSeriesStack) {
        this.echartsSeriesStack = echartsSeriesStack;
    }

    public String getEchartsSeriesData() {
        return echartsSeriesData;
    }

    public void setEchartsSeriesData(String echartsSeriesData) {
        this.echartsSeriesData = echartsSeriesData;
    }


    public Date getUpdateEchartsTime() {
        return this.updateEchartsTime;
    }

    public void setUpdateEchartsTime(Date updateEchartsTime) {
        this.updateEchartsTime = updateEchartsTime;
    }

    @Override
    public String toString() {
        return "Echarts{" +
                "echartsId='" + echartsId + '\'' +
                ", title='" + title + '\'' +
                ", echartsLabel='" + echartsLabel + '\'' +
                ", echartsX='" + echartsX + '\'' +
                ", echartsSeriesName='" + echartsSeriesName + '\'' +
                ", echartsSeriesType='" + echartsSeriesType + '\'' +
                ", echartsSeriesStack='" + echartsSeriesStack + '\'' +
                ", echartsSeriesData='" + echartsSeriesData + '\'' +
                ", updateEchartsTime=" + updateEchartsTime +
                '}';
    }
}
