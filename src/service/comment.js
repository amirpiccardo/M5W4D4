
const BASE_URL = 'https://striveschool-api.herokuapp.com/api/';

const BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzAwMWQwZTgzNTBkNjAwMTVmMGNkZDMiLCJpYXQiOjE3MjgwNjA2ODYsImV4cCI6MTcyOTI3MDI4Nn0.gSMZQ3JF8ft2Uvsmp0IGqb2DPpOfH7z4fI5Sq_XeHTU"

const AUTH_HEADER = {
    "Content-Type": "application/json",
    "Authorization": BEARER_TOKEN
};

export const get_comments_by_books_id = async (id) => {
    try {
        const api_call = await fetch(`${BASE_URL}books/${id}/comments`, {
            method:'GET',
            headers: AUTH_HEADER,
        });

        if(!api_call.ok)
            return null;
        const data = await api_call.json()
        return data;
    } catch (error) {
        return null;
    }
};


export const delete_comment_by_id = async (id) => {
    try {
        const api_call = await fetch(`${BASE_URL}comments/${id}`, {
            method:'DELETE',
            headers: AUTH_HEADER,
        });

        if(!api_call.ok)
            return null;
        const data = await api_call.json();
        return data;
    } catch (error) {
        return null;
    }
}


export const create_comment = async (comment) => {
    try {
        const api_call = await fetch(`${BASE_URL}comments`, {
            method:'POST',
            headers: AUTH_HEADER,
            body: JSON.stringify(comment)
        });

        if(!api_call.ok)
            return null;

        const data = await api_call.json();
        return data;
    } catch (error) {
        return null;
    }
}


export const edit_comment_by_id = async (comment, id) => {
    try {
        const api_call = await fetch(`${BASE_URL}comments/${id}`, {
            method:'PUT',
            headers: AUTH_HEADER,
            body: JSON.stringify(comment)
        });

        if(!api_call.ok)
            return null;

        const data = await api_call.json();
        return data;
    } catch (error) {
        return null;
    }
}


