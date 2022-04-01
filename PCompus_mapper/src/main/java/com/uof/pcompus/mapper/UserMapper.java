package com.uof.pcompus.mapper;

import com.uof.pcompus.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.type.JdbcType;

/**
 * @Description: 用户Mapper层
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.mapper
 * @Author: Happ
 * @CreateTime: 2022-03-31 19:19
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public interface UserMapper {


    @Results(id = "user", value = {
            @Result(column = "user_id", property = "userId", jdbcType = JdbcType.BIGINT, id = true),
            @Result(column = "user_name", property = "userName", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_password", property = "userPassword", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_phoneNumber", property = "userPhoneNumber", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_email", property = "userEmail", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_image", property = "userImage", jdbcType = JdbcType.BLOB),
            @Result(column = "register_time", property = "registerTime", jdbcType = JdbcType.DATE),
            @Result(column = "login_time", property = "loginTime", jdbcType = JdbcType.DATE),
            @Result(column = "authority", property = "authority", jdbcType = JdbcType.VARCHAR),
    })

    //通过邮箱查询用户数量
    public int queryUserCountByEmail();

    //    通过用户手机号查询用户数量
    public int queryUserCountByPhone();

    //    通过用户名查询用户数量
    public int queryUserCountByUserName();

    @Insert("INSERT INTO `pcompus`.`user`(`user_id`, `user_name`, `user_password`, `user_phoneNumber`, `user_email`, `authority`) VALUES (#{userId}, #{userName}, #{userPassword}, #{userPhoneNumber},#{userEmail}, #{authority});")
    @ResultMap("user")
    public int insertUser(User user);

}
