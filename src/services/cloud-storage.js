export const getFileUrl = (key) => {
  if (!key) {
    return '';
  }
  if (key.includes(global.qiniuUrl)) {
    return `${key}?imageView2/3/w/800/h/400/q/75`;
  }
  return `${global.qiniuUrl}/${key}?imageView2/3/w/800/h/400/q/75`;
}
