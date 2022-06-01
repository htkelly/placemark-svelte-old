import axios from "axios";
import {decodeToken} from "../utils/jwt-utils.js";
import {user} from "../stores.js"

export class PlacemarkService {
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        const placemarkCredentials = localStorage.placemark
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials)
            user.set({
                email: savedUser.email,
                userId: decodeToken(savedUser.token).userId,
                token: savedUser.token,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    userId: decodeToken(response.data.token).userId,
                    token: response.data.token,
                });
                localStorage.placemark = JSON.stringify({email:email, token:response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark")
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getAllCategories() {
        const response = await axios.get(`${this.baseUrl}/api/categories`);
        return response.data;
    }

    async addCategory(category) {
        const response = await axios.post(`${this.baseUrl}/api/categories`, category);
        return response.data;
    }

    async deleteCategory(id) {
        const response = await axios.delete(`${this.baseUrl}/api/categories/${id}`);
        return response.data;
    }

    async getAllPlaces() {
        const response = await axios.get(`${this.baseUrl}/api/places`);
        return response.data;
    }

    async addPlace(category, place) {
        const response = await axios.post(`${this.baseUrl}/api/categories/${category}/places`, place);
        return response.data;
    }

}