/**
 * Created by yyg on 2017/7/6.
 */
new Vue({
    el: '#app',
    data: {
       msg:'欢迎使用'
    },
    created:function(){
        this.initData();
    },
    methods: {
        initData:function(){
            var _this = this;
            axios({
                method: 'post',
                url: 'http://ip:port/register/loginUser',
                data:{}
            }).then(function(res){

            }).catch(function(error){

            });
        }
    }
});