var obj = JSON.parse($response.body);
obj.data.vipFlag = 1
obj.data.isVip = true
obj.data.isQaTeacher = true
obj.data.isAdvisorTeacher = true
$done({ body: JSON.stringify(obj) });
