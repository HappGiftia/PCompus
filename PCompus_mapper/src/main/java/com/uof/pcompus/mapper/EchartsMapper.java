package com.uof.pcompus.mapper;

import com.uof.pcompus.pojo.Echarts;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

/**
 * @Description: echarts映射层实现
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.mapper
 * @Author: Happ
 * @CreateTime: 2021-11-26 20:13
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Mapper
public interface EchartsMapper {
    @Select("SELECT * FROM echarts WHERE column_id =#{column_id}")
    @Results(id = "echarts", value = {
            @Result(column = "column_id", property = "columnId", jdbcType = JdbcType.VARCHAR, id = true),
            @Result(column = "title", property = "title", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_label", property = "echartsLabel", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_x", property = "echartsX", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_name", property = "echartsSeriesName", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_type", property = "echartsSeriesType", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_stack", property = "echartsSeriesStack", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_data", property = "echartsSeriesData", jdbcType = JdbcType.VARCHAR),
            @Result(column = "update_echarts_time", property = "updateEchartsTime", jdbcType = JdbcType.DATE)
    })
    public Echarts queryAutoColumns(int column_id);

    @Select("SELECT * FROM echarts")
    @ResultMap("echarts")
    public List<Echarts> queryAllEcharts();

    @Select("SELECT * FROM echarts WHERE column_id =#{column_id}")
    public String queryUserColumns();

    @Delete("<script>" +
            "DELETE FROM echarts WHERE column_id in " +
            "<foreach collection='array' open='(' item='column_id' separator=',' close=')'> #{column_id}" +
            "</foreach>" +
            "</script>")
    public int deleteColumns(String[] column_ids);

    @Update("UPDATE echarts SET title=#{title}, echarts_label = #{echartsLabel}, echarts_x=#{echartsX}, echarts_series_name=#{echartsSeriesName}, echarts_series_type=#{echartsSeriesType} , echarts_series_stack=#{echartsSeriesStack}, echarts_series_data=#{echartsSeriesData}, update_echarts_time =#{updateEchartsTime}  WHERE column_id = #{columnId};")
    public int updateEcharts(Echarts echarts);

    @Insert("INSERT INTO `pcompus`.`echarts` (`column_id`, `title`, `echarts_label`, `echarts_x`, `echarts_series_name`, `echarts_series_type`, `echarts_series_stack`, `echarts_series_data`, `update_echarts_time`) VALUES (#{columnId}, #{title}, #{echartsLabel}, #{echartsX}, #{echartsSeriesName}, #{echartsSeriesType}, #{echartsSeriesStack}, #{echartsSeriesData}, #{updateEchartsTime})")
    public int createEcharts(Echarts echarts);
}
