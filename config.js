import {config as baseConfig} from 'css-charts/config.js';
/** @import {AllProps, Actions} from  './ts-refs/css-echarts/types' */
/** @import {MntCfg, MountProps, MountActions} from './ts-refs/trans-render/types' */

/**
 * @type {MntCfg<AllProps & MountProps, Actions & MountActions>}
 */
export const config = {
    ...baseConfig,
    propInfo: {
        ...baseConfig.propInfo,
        options: {
            type: 'Object',
            attrName: 'options',
            parse: true,
        }
    },
    actions: {
        ...baseConfig.actions,
        hydrateECharts: {
            ifAllOf: ['options', 'data'],
        }
    }
}