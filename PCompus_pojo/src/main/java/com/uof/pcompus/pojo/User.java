package com.uof.pcompus.pojo;

import java.util.Date;

/**
 * @Description: user实体
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pojo
 * @Author: Happ
 * @CreateTime: 2021-11-26 19:53
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public class User {
    private Long userId;
    private String userName;
    private String userPassword;
    private String userPhoneNumber;
    private String userEmail;
    private String userImage;
    private Date registerTime;
    private Date loginTime;
    private String authority;

    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return this.userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserPhoneNumber() {
        return this.userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserEmail() {
        return this.userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserImage() {
        return this.userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public Date getRegisterTime() {
        return this.registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }

    public Date getLoginTime() {
        return this.loginTime;
    }

    public void setLoginTime(Date loginTime) {
        this.loginTime = loginTime;
    }

    public String getAuthority() {
        return this.authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userPhoneNumber='" + userPhoneNumber + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userImage='" + userImage + '\'' +
                ", registerTime=" + registerTime +
                ", loginTime=" + loginTime +
                ", authority='" + authority + '\'' +
                '}';
    }
}