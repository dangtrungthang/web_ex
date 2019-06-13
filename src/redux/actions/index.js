export const GET_POST_ID='GET_POST_ID';

export function get_post_id(id){
    return{
        type:GET_POST_ID,
        payload:id
    }
}