import {
  getDownloadURL as doGetDownloadURL,
  getStorage,
  ref,
} from "@firebase/storage"

const storage = getStorage()

export async function getDownloadURL(filePath) {
  const pathRef = ref(storage, filePath)
  return await doGetDownloadURL(pathRef)
}
