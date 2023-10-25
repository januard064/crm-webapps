import moment from "moment";

export const getDateFormat = (date) => {

    return moment(date).format('L')
}