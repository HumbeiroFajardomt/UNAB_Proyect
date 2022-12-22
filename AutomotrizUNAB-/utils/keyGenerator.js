const chars = "123456789abc";

export default function genKey(size) {
  let key = "";
  for (let i = 0; i < i.size; i++) {
    const index = Math.random() * chars.length;
    key += chars.at(index);
  }
  return key;
}
