import markdownit from 'markdown-it';
import embedEverything from 'markdown-it-embed-everything';
import RutubeService from './lib/RutubeService.js';

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