//1、定义常量Province，值为“Hunan”，输出该常量的值。
$Province="Hunan";
echo $Province;
//2、定义变量a=1、b=2、c=3，输出a+b*c的值。
$a=1;
$b=2;
$c=3;
echo $a+$b*$c;
//3、长方形的长为10，宽为5，求长方形的周长和面积。
$long=10;
$wide=5;
echo "长方形的周长为".($long+$wide)."<br>";
echo "长方形的面积为".($long*$wide)."<br>";
//4、定义变量x=10，y=15，比较它们的值大小，输出值大的变量。
$x=10;
$y=15;
if($x>$y){
    echo "x的值较大";
}else{
    echo "y的值较大";
}
