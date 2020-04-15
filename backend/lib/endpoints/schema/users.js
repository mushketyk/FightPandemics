const S = require("fluent-schema");

const getUserByIdSchema = {
  params: S.object().prop("userId", S.string().required()),
};

const createProfileSchema = {
  body: S.object()
    .prop("firstName", S.string().required())
    .prop("lastName", S.string().required())
    .prop("email", S.string().required())
    .prop("name", S.string().required())
    .prop("country", S.string().required())
    .prop("neighborhood", S.string().required()),
};


module.exports = {
  getUserByIdSchema,
  createProfileSchema,
};
