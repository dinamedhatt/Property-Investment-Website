import axios from "axios";
const baseURL = 'http://localhost:3100';

export async function getfaq() {
    let payload = null
    try {
        let response = await fetch(`${baseURL}/faq`)
        payload = await response.json()

    } catch (error) {
        console.log(error)
    }
    return {
        type: "FAQ_LIST",
        payload
    }
}