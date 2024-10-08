/*
 *
 *
脚本功能：测试
[rewrite_local]
^https:\/\/loc.map.baidu.com\/sdk.php url script-response-body https://raw.githubusercontent.com/paungmiao/loon/refs/heads/main/js/baidu-loc.js
[mitm]
hostname = *.yinhaiyun.com,*.baidu.com
*
*
*/
let body = JSON.parse(JSON.stringify($response.body));

// 检查 body.content 是否存在，如果不存在则创建
if (!body.content) {
    body.content = {};
}

// 检查 body.content.sema 是否存在，如果不存在则创建
if (!body.content.sema) {
    body.content.sema = {};
}

const demoResult = JSON.parse(JSON.stringify({
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
}));
console.log(body)
console.log(demoResult)
// 更新内容
body.content.sema = demoResult.content.sema;
body.content.addr = demoResult.content.addr;
body.content.radius = demoResult.content.radius;

// 获取原始值
let x = body.content.point.x; // 例如 3.141592
let y = body.content.point.y; // 例如 30.592055

// 随机增加小数的最后一位
function randomizeLastDecimal(value) {
    const valueStr = value.toString();
    const decimalIndex = valueStr.indexOf('.');

    if (decimalIndex === -1) return value;

    const integerPart = valueStr.slice(0, decimalIndex + 1);
    const decimalPart = valueStr.slice(decimalIndex + 1);

    const randomInt = Math.floor(Math.random() * 10);
    const lastDigit = parseInt(decimalPart[decimalPart.length - 1]);
    const newLastDigit = (lastDigit + randomInt) % 10;
    const newDecimalPart = decimalPart.slice(0, -1) + newLastDigit;

    return parseFloat(integerPart + newDecimalPart);
}

// 更新 x 和 y
body.content.point.x = randomizeLastDecimal(x);
body.content.point.y = randomizeLastDecimal(y);
body.修改标识 = true;
body = JSON.stringify(body)
$done({body});