const KEY = '1458bcbaeb3740f7823152423232203';

const fetchData = async (city) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

  const fetchReponse = await fetch(URL)
  const data = await fetchReponse.json()
  return data  
}

export default fetchData;