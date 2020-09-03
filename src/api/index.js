import axios from 'axios';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl =
    'https://s3-us-west-1.amazonaws.com/incomehoncho.data/2020/07/2020-07-20.json';

const fetchDeals = async () => {
  const response = await axios.get(proxyUrl + targetUrl);

  const data = await response.data;

  const deal = data.offers;

  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return deal;
};

export { fetchDeals };
