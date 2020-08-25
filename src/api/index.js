const fetchDeal = async () => {
  const response = await fetch(
    'https://s3-us-west-1.amazonaws.com/incomehoncho.data/2020/07/2020-07-20.json'
  );
  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchDeal };
