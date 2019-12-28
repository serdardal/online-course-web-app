export const courseActionNames = {
    SEARCH : "SEARCH"
}

export function search(text){
    return {
        type:courseActionNames.SEARCH,
        payload:{
            text: text
        }
    }
}