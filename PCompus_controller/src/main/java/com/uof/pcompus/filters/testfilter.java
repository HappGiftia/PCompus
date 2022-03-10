package com.uof.pcompus.filters;

import javax.servlet.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebFilter(filterName = "Filter", urlPatterns = "/testfilter")
public class testfilter implements Filter {
    public void init(FilterConfig config) throws ServletException {

    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
//        chain.doFilter(request, response);
//        PrintWriter printWriter = response.getWriter();
//        printWriter.write("this is filter");
        System.out.println("this is filter");
    }
}
