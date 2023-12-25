const get = async (key) => {
  const stringData = localStorage.getItem(key);
  return JSON.parse(stringData);
};

const set = async (key, value) => {
  const stringData = JSON.stringify(value);
  localStorage.setItem(key, stringData);
};

const remove = async (key) => {
  localStorage.removeItem(key);
};

export default { get, set, remove };
