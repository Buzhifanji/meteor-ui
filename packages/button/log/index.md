# one-button 开发记录

## inline-block/inline-flex 出现的问题

参考：[去除inline-block元素间间距](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%e5%8e%bb%e9%99%a4%e9%97%b4%e8%b7%9d/)

### 水平间隙问题

默认情况下因为有空格或换行而出现水平间隙

解决办法：父级设置font-size：0，子级恢复字体1rem

### 垂直间隙问题

由于inline-block默认对齐是baseline,即x所在的子模格子

默认 vertical-align: baseline

解决办法：vertical-align:middle 或者 bottom

**注意：这种表现是符合规范的应该有的表现**