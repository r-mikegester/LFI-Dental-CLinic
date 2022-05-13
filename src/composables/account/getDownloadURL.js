import { getDownloadURL, getStorage, ref } from "@firebase/storage";

const storage = getStorage();
export default async (filePath) => {
  const pathRef = ref(storage, filePath);
  return await getDownloadURL(pathRef);
};
