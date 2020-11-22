export const getGlobalData = async () => {
  const data = await fetch("../src/data.json").then((res) => res.json());

  return data.GlobalData.reverse();
};

export const prepare = (data) => {
  return data.map((item) => {
    return {
      ...item,
      Date: new Date(item.Date)
    };
  });
};
