package com.uof.pcompus.service.impl;


import com.uof.pcompus.mapper.RegisterMapper;
import com.uof.pcompus.service.RegisterService;
import com.uof.pcompus.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;


@Service("registerService")
public class RegisterServiceImpl implements RegisterService {
    @Override
    public void registerAccount(User user) {
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            RegisterMapper mapper = sqlSession.getMapper(RegisterMapper.class);
            mapper.registerAccount(user);
            sqlSession.commit();
            sqlSession.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<User> queryUsernameCount(String username) {
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            RegisterMapper mapper = sqlSession.getMapper(RegisterMapper.class);
            List<User> queryUsers = mapper.queryUsername(username);
            System.out.println("获得的User:" + queryUsers);
            sqlSession.commit();
            sqlSession.close();
            return queryUsers;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
