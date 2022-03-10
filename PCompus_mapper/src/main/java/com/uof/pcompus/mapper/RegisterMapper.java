package com.uof.pcompus.mapper;

import com.uof.pcompus.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface RegisterMapper {
    @Insert("insert into register VALUES(#{username},#{password})")
    public void registerAccount(User user);

    @Select("SELECT * from register WHERE username = #{username}")
    public List<User> queryUsername(String username);
}
