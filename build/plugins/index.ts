import WindiCSS from 'vite-plugin-windicss';
import vue from './vue';
import ScriptSetup from './setup';
import html from './html';
import iconify from './iconify';
import visualizer from './visualizer';

const plugins = [vue, ScriptSetup, ...html, ...iconify, WindiCSS(), visualizer];

export default plugins;
