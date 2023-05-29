import { createApp } from './main';
import { renderToString } from '@vue/server-renderer';

export const render = async url => {
  console.log('url', url);

  const { app } = createApp();
  // 注入vue ssr中的上下文对象
  const renderCtx = {};
  const renderedHtml = await renderToString(app, renderCtx);

  return renderedHtml;
};
