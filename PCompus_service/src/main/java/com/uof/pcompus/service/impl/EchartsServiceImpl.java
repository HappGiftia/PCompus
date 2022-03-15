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
        return echartsMapper.queryAllEcharts();
    }

    @Override
    public Echarts queryAutoColumns(int column_id) {
        return echartsMapper.queryAutoColumns(column_id);

    }


    @Override
    public Echarts queryUserColumns(int column_id) {
        return null;
    }

    @Override
    public int deleteColumns(Long[] columnIds) {
        return echartsMapper.deleteColumns(columnIds);
    }

    @Override
    public int updateEcharts(Echarts echarts) {
        return echartsMapper.updateEcharts(echarts);
    }

    @Override
    public int createEcharts(Echarts echarts) {
        return echartsMapper.createEcharts(echarts);
    }

}
