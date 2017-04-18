const baseURL = 'http://cmsinfo.com.cn:8080/rest/v1/strategies';

export let findAll = () => fetch(baseURL, {
    method: "GET",
    headers: {
        'X-Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE0OTI1MDgwNzI0ODksImV4cCI6MTUwMTE0ODA3Mn0.mN2b2kAWCQXHQDnDYaoaOxTuQA4KgzfsehrbUsAENV4jUK-qPuLrQWsZ881bxRHEqaNJaFO0W8U3SBzsz5wvHQ'
    }
}).then((response) => response.json());