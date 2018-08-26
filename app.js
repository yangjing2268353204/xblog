//引入express框架
const express=require('express');
//引用模板引擎
const exphbs=require('express-handlebars');

const path=require('path');
//创建web服务器
const app=express();
//开放静态资源目录,对静态资源请求拦截,看用户请求路径是否在这个目录中
app.use(express.static(path.join(__dirname,'public')));
//告诉项目使用的模板引擎是哪个 并配置
app.engine('handlebars',exphbs({
    //配置公共文件的目录在partials目录中,前后台不同的文件夹中
    
}));
// 指定模板目录
app.set('views',path.join(__dirname,'views'));
//指定模板后缀
app.set('view engine','handlebars')
//搭建路由 当客户端以get方式请求的时候
app.get('/',(req,res)=>{
    // res.send('hello blog')
    res.render('home/index')
});

app.get('/about',(req,res)=>{
    // res.send('hello blog')
    res.render('home/about')
})
app.listen(3000,err=>{
    if(err==null){
        console.log('服务器启动成功,');
    }
});