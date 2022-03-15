package com.uof.pcompus.mapper;

import com.uof.pcompus.pojo.Tab;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;

import java.util.ArrayList;

/**
 * @Description: 标签mapper
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.mapper
 * @Author: Happ
 * @CreateTime: 2022-03-15 10:36
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Mapper
public interface TabsMapper {
    //    获得所有实体tab
    @Select("Select * from tabs")
    @Results(id = "tab", value = {
            @Result(column = "tab_name", property = "tabName", jdbcType = JdbcType.VARCHAR, id = true),
            @Result(column = "tab_author", property = "tabAuthor", jdbcType = JdbcType.BIGINT),
            @Result(column = "tab_create_time", property = "tabCreateTime", jdbcType = JdbcType.DATE)
    })
    public ArrayList<Tab> getAllTabs();

    //    通过名称查询单个实体tab
    public Tab getTabByName();

    //  通过作者查询单个实体tab
    public Tab getTabByAuthor();
}
