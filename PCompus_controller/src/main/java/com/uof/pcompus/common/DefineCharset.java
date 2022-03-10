package com.uof.pcompus.common;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.http.MediaType;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.lang.Nullable;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * @Description: 自定义类去实现接口BeanPostProcessor，并重写接口方法
 * postProcessBeforeInitialization、postProcessAfterInitialization；
 * 然后将自定义类通过bean标签装配到IOC容器中
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.common
 * @Author: Happ
 * @CreateTime: 2021-11-27 09:27
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public class DefineCharset implements BeanPostProcessor {
    //实例化之前调用
    @Nullable
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    //实例化之后调用
    @Nullable
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof StringHttpMessageConverter) {
            MediaType mediaType = new MediaType("text", "html", Charset.forName("UTF-8"));
            List<MediaType> types = new ArrayList<MediaType>();
            types.add(mediaType);
            ((StringHttpMessageConverter) bean).setSupportedMediaTypes(types);
        }
        return bean;
    }
}
