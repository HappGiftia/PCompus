package com.uof.pcompus.service.impl;

import com.uof.pcompus.mapper.TabsMapper;
import com.uof.pcompus.pojo.Tab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * @Description: 标签服务层接口实现
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service.impl
 * @Author: Happ
 * @CreateTime: 2022-03-15 11:04
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Service("tabsService")
public class TabsServiceImpl {
    @Autowired
    private TabsMapper tabsMapper;

    //    获得所有实体tab
    public ArrayList<Tab> getAllTabs() {
        return tabsMapper.getAllTabs();

    }


    //    通过名称查询单个实体tab
    public Tab getTabByName() {
        return tabsMapper.getTabByName();
    }

    ;

    //  通过作者查询单个实体tab
    public Tab getTabByAuthor() {
        return tabsMapper.getTabByAuthor();
    }

    ;
}
