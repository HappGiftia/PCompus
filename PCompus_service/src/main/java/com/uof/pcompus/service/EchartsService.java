package com.uof.pcompus.service;

import com.uof.pcompus.pojo.Echarts;

import java.util.List;

/**
 * @Description: 用于echarts图表服务层接口
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service
 * @Author: Happ
 * @CreateTime: 2021-11-26 19:52
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public interface EchartsService {
    //    查询全部的Echarts实体
    public List<Echarts> queryAllEcharts();

    //    查询全部的由管理员生成的图表
    public Echarts queryAutoColumns(int column_id);

    //    查询全部的有用户生成的图表
    public Echarts queryUserColumns(int column_id);

    //    删除指定id号的图表
    public int deleteColumns(Long[] columnIds);

    //修改前端传来的图表
    public int updateEcharts(Echarts echarts);

    public int createEcharts(Echarts echarts);
}
