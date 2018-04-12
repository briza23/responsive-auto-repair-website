import { push } from 'react-router-redux';
// function changeActivePage(data){
//     return {
//         type: "CHANGE_ACTIVE_PAGE",
//         data
//     }
// }

export function changePage(page) {
    return(dispatch) => {
       dispatch(push(page.link));
    //    dispatch(changeActivePage(page));
    };       
}
