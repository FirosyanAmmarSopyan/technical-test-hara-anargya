export default{
        baseUrl : 'https://api.slingacademy.com/v1/sample-data/users',
        formatDate : (date) => {
            return dayjs(date).format('DD/MM/YYYY');
        }
}