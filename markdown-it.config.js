import markdownit from 'markdown-it';
import embedEverything from 'markdown-it-embed-everything';
import VideoServiceBase from 'markdown-it-embed-everything/lib/services/VideoServiceBase.js';

class RutubeService extends VideoServiceBase {
  getDefaultOptions() {
    return { width: 720, height: 405 };
  }

  extractVideoID(reference) {
    const match = reference.match(/rutube\.ru\/video\/(?:private\/)?([a-f0-9]{32})/i);
    return match ? match[1] : reference;
  }

  getVideoUrl(videoID) {
    const escapedID = this.env.md.utils.escapeHtml(videoID);
    return `https://rutube.ru/play/embed/${escapedID}`;
  }
}

const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
});

md.use(embedEverything, {
    services: {
        rutube: RutubeService,
    }
});

export { md };
