import {apiDomain} from "@/utils/constants";

async function fetchProperties(){
    try {
        if (!apiDomain) {
            return []
        }
        const res = await fetch(`${apiDomain}/properties`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json()
    } catch(error) {
        console.error(error);
    }
}

async function fetchProperty(id) {
    try {
        if (!apiDomain) {
            return {}
        }
        const res = await fetch(`${apiDomain}/properties/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json()
    } catch(error) {
        console.error(error);
    }
}

export {
    fetchProperties,
    fetchProperty
}
