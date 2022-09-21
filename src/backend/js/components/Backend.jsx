export const ajaxurl = awesomecoder.ajaxurl;
export const post_types = awesomecoder.post_types;
export const posts = awesomecoder.posts;
export const headers = {
  headers: {
      'X-Requested-With': 'XMLHttpRequest',
      "Content-type": "multipart/form-data",
  }
};

export default {
    awesomecoder,
    ajaxurl,
    post_types,
    posts,
}