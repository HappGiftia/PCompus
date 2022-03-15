package com.uof.pcompus.pojo;

import java.sql.Date;

/**
 * @Description: 标签实体类
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.pojo
 * @Author: Happ
 * @CreateTime: 2022-03-15 10:37
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public class Tab {
    String tabName;
    long tabAuthor;
    Date tabCreateTime;

    public String getTabName() {
        return this.tabName;
    }

    public void setTabName(String tabName) {
        this.tabName = tabName;
    }

    public long getTabAuthor() {
        return this.tabAuthor;
    }

    public void setTabAuthor(long tabAuthor) {
        this.tabAuthor = tabAuthor;
    }

    public Date getTabCreateTime() {
        return this.tabCreateTime;
    }

    public void setTabCreateTime(Date tabCreateTime) {
        this.tabCreateTime = tabCreateTime;
    }

    @Override
    public String toString() {
        return "Tab{" +
                "tabName='" + tabName + '\'' +
                ", tabAuthor=" + tabAuthor +
                ", tabCreateTime=" + tabCreateTime +
                '}';
    }
}

