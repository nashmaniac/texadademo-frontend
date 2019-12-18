import Vue from 'vue'
const notificationUtils = {
    showToast: function (message) {
        return Vue.toasted.show(message)
    }
}
export default notificationUtils;
