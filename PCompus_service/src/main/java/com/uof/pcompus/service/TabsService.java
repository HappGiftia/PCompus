package com.uof.pcompus.service;

import com.uof.pcompus.pojo.Tab;

import java.util.ArrayList;

/**
 * @Description: 标签服务层
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service
 * @Author: Happ
 * @CreateTime: 2022-03-15 11:02
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public interface TabsService {
    //    获得所有实体tab
    public ArrayList<Tab> getAllTabs();

    //    通过名称查询单个实体tab
    public Tab getTabByName();

    //  通过作者查询单个实体tab
    public Tab getTabByAuthor();
}
