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
    @Select("SELECT * FROM echarts WHERE echarts_id =#{echarts_id}")
    @Results(id = "echarts", value = {
            @Result(column = "echarts_id", property = "echartsId", jdbcType = JdbcType.BIGINT, id = true),
            @Result(column = "title", property = "title", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_create_time", property = "echartsCreateTime"),
            @Result(column = "echarts_author", property = "echartsAuthor", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_tabs", property = "echartsTabs", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_label", property = "echartsLabel", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_x", property = "echartsX", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_name", property = "echartsSeriesName", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_type", property = "echartsSeriesType", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_stack", property = "echartsSeriesStack", jdbcType = JdbcType.VARCHAR),
            @Result(column = "echarts_series_data", property = "echartsSeriesData", jdbcType = JdbcType.VARCHAR),
            @Result(column = "update_echarts_time", property = "updateEchartsTime")
    })
    public Echarts queryAutoColumns(long echarts_id);

    @Select("SELECT * FROM echarts")
    @ResultMap("echarts")
    public List<Echarts> queryAllEcharts();

    @Select("SELECT * FROM echarts WHERE echarts_id =#{echarts_id}")
    public String queryUserColumns();

    @Delete("<script>" +
            "DELETE FROM echarts WHERE echarts_id in " +
            "<foreach collection='array' open='(' item='echarts_id' index='index' separator=',' close=')'> #{echarts_id}" +
            "</foreach>" +
            "</script>")
    public int deleteColumns(Long[] echartsIds);

    @Update("UPDATE echarts SET title=#{title}, echarts_label = #{echartsLabel}, echarts_x=#{echartsX}, echarts_series_name=#{echartsSeriesName}, echarts_series_type=#{echartsSeriesType} , echarts_series_stack=#{echartsSeriesStack}, echarts_series_data=#{echartsSeriesData}  WHERE echarts_id = #{echartsId};")
    public int updateEcharts(Echarts echarts);

    @Insert("INSERT INTO `pcompus`.`echarts`(`echarts_id`, `title`, `echarts_author`, `echarts_tabs`, `echarts_label`, `echarts_x`, `echarts_series_name`, `echarts_series_type`, `echarts_series_stack`, `echarts_series_data`) VALUES (#{echartsId}, #{title},#{echartsAuthor}, #{echartsTabs},#{echartsLabel}, #{echartsX}, #{echartsSeriesName}, #{echartsSeriesType}, #{echartsSeriesStack}, #{echartsSeriesData});")
    public int createEcharts(Echarts echarts);
}
