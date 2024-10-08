/*
 *
 *
脚本功能：测试
[rewrite_local]

# > 全本小说&淘小说 解锁vip，
^https:\/\/loc.map.baidu.com\/sdk.php url script-response-body https://raw.githubusercontent.com/paungmiao/loon/refs/heads/main/js/baidu-loc.js
[mitm]
hostname = *.yinhaiyun.com,*.baidu.com
*
*
*/
let body = JSON.parse($response.body);
const demoResult = {
    "content": {
        "addr": {
            "adcode": "510104",
            "city": "成都市",
            "city_code": "75",
            "country": "中国",
            "country_code": "0",
            "district": "锦江区",
            "province": "四川省",
            "street": "五冶路",
            "street_number": "9号",
            "town_code": "510104036"
        },
        "bldg": "",
        "floor": "",
        "navi": ",,,",
        "net_loc_save": 1,
        "point": {"x": "104.080671", "y": "30.592094"},
        "radius": "60.000000",
        "sema": {
            "aptag": "在银海芯座附近",
            "aptagd": {
                "pois": [{
                    "pid": "8595564073644709853",
                    "pname": "银海芯座",
                    "pr": 0.99000000
                }, {"pid": "17660241240035164159", "pname": "五冶大厦", "pr": 0.99000000}, {
                    "pid": "16438318204265002202",
                    "pname": "银海芯座-B座",
                    "pr": 0.99000000
                }, {
                    "pid": "9444618670681934433",
                    "pname": "艺尚锦江文创中心",
                    "pr": 0.99000000
                }, {"pid": "17843721309795477712", "pname": "火炬动力港", "pr": 0.99000000}]
            }
        }
    }, "result": {"error": "161", "time": "2024-10-08 15:42:41"}
}
body.content.sema = demoResult.content.sema
body.content.addr = demoResult.content.addr
body.content.radius = demoResult.content.radius
// 获取原始值
let x = body.content.point.x; // 例如 3.141592
let y = body.content.point.y; // 例如 30.592055
console.log('x=', x)
console.log('y=', y)

// 随机增加小数的最后一位
function randomizeLastDecimal(value) {
    const valueStr = value.toString(); // 转为字符串
    const decimalIndex = valueStr.indexOf('.'); // 查找小数点位置

    // 如果没有小数点，返回原值
    if (decimalIndex === -1) return value;

    // 获取整数部分和小数部分
    const integerPart = valueStr.slice(0, decimalIndex + 1); // 包含小数点
    const decimalPart = valueStr.slice(decimalIndex + 1); // 小数部分

    // 随机生成 0 到 9 之间的整数
    const randomInt = Math.floor(Math.random() * 10);

    // 对最后一位小数进行增加
    const lastDigit = parseInt(decimalPart[decimalPart.length - 1]);
    const newLastDigit = (lastDigit + randomInt) % 10; // 确保结果在 0 到 9 之间
    const newDecimalPart = decimalPart.slice(0, -1) + newLastDigit; // 替换最后一位小数

    // 返回新的值
    return parseFloat(integerPart + newDecimalPart);
}

// 更新 x 和 y
body.content.point.x = randomizeLastDecimal(x);
body.content.point.y = randomizeLastDecimal(y);
body.success = true;
// 返回更新后的 body
$done({body: JSON.stringify(body)});
