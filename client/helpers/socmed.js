export const socmedIconHelper = (socmedName) => {
  switch (socmedName) {
    case 'website':
      return require('./../assets/logo-socmed/web.png')
      break;
    case 'facebook':
      return require('./../assets/logo-socmed/facebook.png')
      break;
    case 'twitch':
      return require('./../assets/logo-socmed/twitch.png')
      break;
    case 'twitter':
      return require('./../assets/logo-socmed/twitter.png')
      break;
    case 'youtube':
      return require('./../assets/logo-socmed/youtube.png')
      break;
    case 'instagram':
      return require('./../assets/logo-socmed/instagram.png')
      break;
    case 'liquidpedia':
      return require('./../assets/logo-socmed/liquidpedia.png')
      break;
    case 'vk':
      return require('./../assets/logo-socmed/vk.png')
      break;
    case 'datdota':
      return require('./../assets/logo-socmed/datdota.jpg')
      break;
    case 'dotabuff':
      return require('./../assets/logo-socmed/dotabuff.png')
      break;
    case 'weibo':
      return require('./../assets/logo-socmed/weibo.png')
      break;
    default:
      return require('./../assets/logo-socmed/youtube.png')
  }
}
