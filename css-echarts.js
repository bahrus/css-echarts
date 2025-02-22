// @ts-check
import {CSSCharts} from 'css-charts/css-charts.js';

/** @import {AllProps, Actions, PAP, DataItem} from  './ts-refs/css-echarts/types' */
/** @import {MntCfg, MountProps, MountActions, ITransformer} from './ts-refs/trans-render/types' */

class CSSECharts extends CSSCharts{
    /**
     * @type {MntCfg<AllProps  & MountProps, Actions & MountActions>}
     */
    static config = config;
}

await CSSECharts.bootUp();

export {CSSECharts};