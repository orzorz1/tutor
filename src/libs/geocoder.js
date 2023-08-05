const apiUrl = "https://apis.map.qq.com/ws";
const key = "EKNBZ-BHE3A-4XJK6-CHO5N-YZQOK-FXFVT"; //

export default async function geocoder(latitude, longitude) {
  // Translate coordinate first
  const res = await uni.request({
    url: `${apiUrl}/coord/v1/translate?key=${key}&locations=${latitude},${longitude}&type=1`,
  });
  let translation = res[1].data
  // console.log("translation", translation);
  if (translation.status === 0) {
    // Translate OK
    const { lat, lng } = translation.locations[0];
    const res2 = await uni.request({
      url: `${apiUrl}/geocoder/v1/?key=${key}&location=${lat},${lng}`,
    });
    let geocoderBean = res2[1].data
    // console.log("geocoderBean", geocoderBean);
    if (geocoderBean.status === 0) {
      return geocoderBean.result;
    } else {
      throw new Error(`Geocoder error: ${geocoderBean.message}`);
    }
  } else {
    throw new Error(`Translate error: ${translation.message}`);
  }
}
