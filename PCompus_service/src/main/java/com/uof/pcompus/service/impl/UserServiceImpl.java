package com.uof.pcompus.service.impl;

import com.uof.pcompus.mapper.UserMapper;
import com.uof.pcompus.pojo.User;
import com.uof.pcompus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Description: 用户数据服务接口实现层
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.service.impl
 * @Author: Happ
 * @CreateTime: 2022-03-31 20:01
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int queryUserCountByEmail() {
        return 0;
    }

    @Override
    public int queryUserCountByPhone() {
        return 0;
    }

    @Override
    public int queryUserCountByUserName(String userName) {
        return 0;
    }

    @Override
    public int insertUser(User user) {
        System.out.println(user);
        return userMapper.insertUser(user);
    }
}
