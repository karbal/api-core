import Handlebars from "handlebars";

export default {
  template: (str, data = {}) => Handlebars.compile(str)(data),
};
