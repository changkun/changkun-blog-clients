// export let CKBLOG_API   = 'https://changkun.us/api/';

class API {
}

API.CKBLOG_API = '../../assets/api/'
API.CKBLOG_SITE  = CKBLOG_API + 'site.json';
API.CKBLOG_POSTS = CKBLOG_API + 'posts.json';
API.CKBLOG_TAGS  = CKBLOG_API + 'tags.json';
API.CKBLOG_API_BY_PATH = (path) => {
	return CKBLOG_API + path;
}
API.CKBLOG_POSTS_BY_PAGE = (page) => {
	return CKBLOG_API + 'posts/' + page + '.json'
}
API.CKBLOG_POSTS_BY_TAG = (tag) => {
	return CKBLOG_API + 'tags/' + tag + '.json'
}
API.CKBLOG_POSTS_BY_SLUG = (slug) => {
	return CKBLOG_API + 'articles/' + slug + '.json'
}

module.exports = API