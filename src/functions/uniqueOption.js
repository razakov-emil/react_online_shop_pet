export default function uniqueOption(data, parameter) {
  const options = new Set(data.map((item) => item[parameter]));
  return Array.from(options).filter((item) => item !== undefined);
}
