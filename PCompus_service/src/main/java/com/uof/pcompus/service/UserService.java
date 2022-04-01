package com.uof.pcompus.service;

import com.uof.pcompus.pojo.User;

/**
 * @Description: 用户数据服务层
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service
 * @Author: Happ
 * @CreateTime: 2022-03-31 19:36
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public interface UserService {
    //通过邮箱查询用户数量
    public int queryUserCountByEmail();

    //    通过用户手机号查询用户数量
    public int queryUserCountByPhone();

    //    通过用户名查询用户数量
    public int queryUserCountByUserName(String userName);

    //添加用户
    public int insertUser(User user);

}
