const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 5000,
    },
    POSTGRE_URI: {
      type: "string",
    },
  },
};

export const options = {
  confKey: "config",
  schema: schema,
};

const { properties } = schema;

export const envs = {
  PORT: properties.PORT.default,
};
