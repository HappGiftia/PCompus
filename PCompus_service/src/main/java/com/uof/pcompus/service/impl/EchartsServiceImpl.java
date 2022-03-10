package com.uof.pcompus.service.impl;

import com.uof.pcompus.mapper.EchartsMapper;
import com.uof.pcompus.service.EchartsService;
import com.uof.pcompus.pojo.Echarts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Description: echarts图表服务层接口实现
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service.impl
 * @Author: Happ
 * @CreateTime: 2021-11-26 20:11
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Service("echartsService")
public class EchartsServiceImpl implements EchartsService {

    @Autowired
    private EchartsMapper echartsMapper;

    @Override
    public List<Echarts> queryAllEcharts() {
        List<Echarts> echartsList = echartsMapper.queryAllEcharts();
        System.out.println("管理员找到的图表数：" + echartsList.size());
        return echartsList;
    }

    @Override
    public Echarts queryAutoColumns(int column_id) {
        Echarts echarts = echartsMapper.queryAutoColumns(column_id);
        return echarts;

    }


    @Override
    public Echarts queryUserColumns(int column_id) {
        return null;
    }

    @Override
    public int deleteColumns(String column_ids[]) {
        int deleteCount = echartsMapper.deleteColumns(column_ids);
        return deleteCount;
    }

    @Override
    public int updateEcharts(Echarts echarts) {
        int updateCount = echartsMapper.updateEcharts(echarts);
        return updateCount;
    }

    @Override
    public int createEcharts(Echarts echarts) {
        int createCount = echartsMapper.createEcharts(echarts);
        return createCount;
    }

}
