// @ts-check
import {CSSCharts} from 'css-charts/css-charts.js';
import {config} from './config.js';

/** @import {AllProps, Actions, PAP, DataItem} from  './ts-refs/css-echarts/types' */
/** @import {MntCfg, MountProps, MountActions, ITransformer} from './ts-refs/trans-render/types' */

/**
 * @implements {Actions}
 */
class CSSECharts extends CSSCharts {


    /**
     * @type {MntCfg<AllProps & MountProps, Actions & MountActions>}
     */
    static config = config;

    /**
     * 
     * @param {AllProps} self 
     */
    async hydrateECharts(self) {
        setTimeout(async () => {
        console.log('hydrating');
        const {options} = self;
        const echarts = await import('echarts/dist/echarts.esm.js');
        const sr = this.shadowRoot;
        if(sr === null) throw 500;
        /**
         * @type {HTMLDivElement | null}
         */
        const tableTarget = sr.querySelector('#table-target');
        if(tableTarget === null) throw 500;
        tableTarget.style.width = '500px';
        tableTarget.style.height = '500px';
        echarts.init(tableTarget, null, null).setOption(options);

        }, 2000);
        
    }
}

await CSSECharts.bootUp();

export {CSSECharts};