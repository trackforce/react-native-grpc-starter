
func base64ToBinary(data: String) -> Data {
  return Data(base64Encoded: data, options: Data.Base64DecodingOptions(rawValue: 0))!
}

func binaryToBase64(data: Data) -> String {
  return data.base64EncodedString(options: Data.Base64EncodingOptions(rawValue: 0))
}
