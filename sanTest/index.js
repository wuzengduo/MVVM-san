import san, {DataTypes} from 'san';
var MyApp = san.defineComponent({
    template: '<div class=\"main\" id=\"my-label\"><!-- 输入 --><div class=\"input\"><label for=\"name\"></label><input type=\"text\" name=\"name\" id=\"name\" value=\"{= name =}\" placeholder=\"姓名(string)\" maxlength=\"10\"><label for=\"age\"></label><input type=\"text\" name=\"\age\" id=\"age\" value=\"{= age =}\" placeholder=\"年龄(numeber)\" maxlength=\"10\"><label for=\"des\"></label><input type=\"text\" name=\"des\" id=\"des\" value=\"{= des =}\" placeholder=\"简介(string)\" maxlength=\"30"\></div><!-- 移除功能 --><div class=\"remove\"><span>信息：</span><button type=\"button\" id=\"removeMessage\" on-click=\"removeItem\">移除信息</button></div><!-- 展示 --><div class=\"view\"><div id=\"viewName\"><h1>姓名：</h1><p>{{name}}</p></div><div id=\"viewAge\"><h1>年龄：</h1><p>{{age}}</p></div><div id=\"viewDes\"><h1>简介：</h1><p>{{des}}</p></div></div></div>',
 	removeItem() {
        this.data.set('name','');
        this.data.set('age','');
        this.data.set('des','');
    },
    dataTypes: {
        name: DataTypes.string,
        age: DataTypes.number,
        des: DataTypes.string
    }

});


var myApp = new MyApp();
myApp.attach(document.body);