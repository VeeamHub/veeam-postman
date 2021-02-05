//status code
tests["Status code is 200"] = responseCode.code === 200;
//access token
pm.test("Access Token is present", function () {
    pm.expect(pm.response.text()).to.include("access_token");
});
//updating global variable with token
pm.test("Global Variable has been updated", function () {
    var jsonData = pm.response.json();
    pm.globals.set("vbo_access_token", jsonData.access_token);
});
//updating global variable with refresh token
pm.test("Global Variable has been updated", function () {
    var jsonData = pm.response.json();
    pm.globals.set("vbo_refresh_token", jsonData.refresh_token);
});