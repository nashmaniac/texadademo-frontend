import * as moment from 'moment-timezone';
const TimeUtils = {
    formatString: function(value, args) {
        if (!value || value === 'None') {
            return null
        }
        return moment(value).format(args)
    },
    convertToSpecificTimezone: function (value, zone) {
        if (!value || value === 'None') {
            return null
        }
        return moment.tz(value, zone);
    }
};
export default TimeUtils;