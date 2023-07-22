const apiUrl = "https://apis.map.qq.com/ws";
const key = "your-key"; //

export default async function geocoder(latitude, longitude) {
  // Translate coordinate first
  const { data: translation } = await uni.request({
    url: `${apiUrl}/coord/v1/translate?key=${key}&locations=${latitude},${longitude}&type=1`,
  });
  console.log("translation", translation);
  if (translation.status === 0) {
    // Translate OK
    const { lat, lng } = translation.locations[0];
    const { data: geocoderBean } = await uni.request({
      url: `${apiUrl}/geocoder/v1/?key=${key}&location=${lat},${lng}`,
    });
    if (geocoderBean.status === 0) {
      return geocoderBean.result;
    } else {
      throw new Error(`Geocoder error: ${geocoderBean.message}`);
    }
  } else {
    throw new Error(`Translate error: ${translation.message}`);
  }
}
