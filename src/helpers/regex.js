export const regex = {
  validateEmail: function(val) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val,
    );
  },
  validateMobile: function(text) {
    return /^(?:[0-9] ?){6,14}[0-9]$/.test(text);
  },
  validatePassword: function(val) {
    return /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(val);
  },
};
