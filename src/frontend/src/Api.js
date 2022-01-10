import fetch from 'unfetch';


export default class Data {
    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url ="/api/v1"+path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        if (requiresAuth) {
            const encodedCredentials = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
        return fetch(url, options);
    }

    async getCourses() {
        const response = await this.api(`/courses`, 'GET');
        if (response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 401) {
            return null;
        } else {

            throw new Error();
        }


    }

    async createCourse(course, username, password) {


        const response = await this.api("/users/create-course", "POST", course, true, {username, password});


        if (response.status == 200) {
            return [];

        } else if (response.status == 400) {
            return response.json().then(data => {
                return data.errors;
            });


        } else {

            throw new Error();
        }


    }

    async fetchCourse(courseId) {
        const response = await this.api(`/courses/${courseId}`, "GET");
        if (response.status == 200) {
            let obj = await response.json().then(data => data);
            return obj;
        } else if (response.status == 400) {
            return null;
        } else {
            throw new Error();
        }

    }

    async updateCourse(course,id) {
        const response = await this.api(`/courses/${id}`, 'PUT', course);



        if (response.status === 200) {
            console.log("ceva");
            return [];
        }
        else if (response.status ==404) {
            return response.json().then(data => {
                return data.message;
            });
        }
        else {
            throw new Error();
        }
    }

    async deleteCourse(courseId,username, password) {


        const response = await this.api(`/users/${courseId}`, "DELETE",true,{username,password});

        console.log(response);
        if (response.status === 200) {
            console.log("ceva");
            return [];
        }
        else if (response.status ==404) {
            return response.json().then(data => {
                return data.message;
            });
        }
        else {
            throw new Error();
        }
    }

    async getUser(username, password) {
        const response = await this.api(`/users/signin`, 'GET', null, true, {username, password});
        if (response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

    async createUser(user) {
        const response = await this.api('/users/signup', 'POST', user);
        if (response.status === 200) {
            return [];
        }
        else if (response.status ==400) {
            return response.json().then(data => {
                return data.message;
            });
        }
        else {
            throw new Error();
        }
    }
}

