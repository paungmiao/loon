var obj = JSON.parse($response.body);
obj.data.isVip = true
obj.data.isAdvisorTeacher = true
obj.data.isApplyStudent = false
$done({ body: JSON.stringify(obj) });
