const BASE_URl = "https://api.coingecko.com/api/v3";

export const fetchData = async (url) => {
  try {
    const response = await fetch(`${BASE_URl}/${url} `, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-vRfq5mpd1y6QeN13E132Hghf",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
