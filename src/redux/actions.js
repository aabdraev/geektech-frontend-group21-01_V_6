import { types } from "./types";

function userInfo(user) {
    return {
        type: types.USERS_INFO,
        payload: user
    }
}

function finished() {
    return {
        type: types.FINISHED
    }
}

function notFinished() {
    return {
        type: types.NOT_FINISHED
    }
}

export function postUsersAction(user) {
    return async function (dispatch) {

        const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: user.name,
                username: user.username,
                email: user.email,
                website: user.website,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const response = await request.json()
        dispatch(userInfo(response))
        dispatch(finished())
        setTimeout(() => {
            dispatch(notFinished())
        }, 5000);
    }
}
