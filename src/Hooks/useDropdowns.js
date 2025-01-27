import { useQuery } from "react-query";
import { getRequest } from "../services/axios-api-request/axios_api_Request";
import { apiurl } from "../constants/apiURLsConstants";

// ************* stream dropdown ***********
const fetchCategoryList = () => {
    return getRequest(apiurl?.GET_ADMIN_CATEGORIES_URL);
}
export const useCategoryList = () => {
    return useQuery(
        'category-list',
        fetchCategoryList,
        {
            refetchOnWindowFocus: false,
        }
    )
}