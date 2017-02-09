import {PropTypes as p} from 'react';

const options = {
    animatedZooms: {type: p.boolean},
    annotationClickHandler: {type: p.func, rename: 'onAnnotationClick'},
    annotationDblClickHandler: {type: p.func, rename: 'onAnnotationDblClick'},
    annotationMouseOutHandler: {type: p.func, rename: 'onAnnotationMouseOut'},
    annotationMouseOverHandler: {type: p.func, rename: 'onAnnotationMouseOver'},
    axes: true,
    axis: {type: p.string},
    axisLabelColor: true,
    axisLabelFontSize: {type: p.number},
    axisLabelFormatter: true,
    axisLabelWidth: {type: p.number},
    axisLineColor: true,
    axisLineWidth: {type: p.number},
    axisTickSize: {type: p.number},
    clickCallback: {type: p.func, rename: 'onClick'},
    color: true,
    colorSaturation: {type: p.number},
    colorValue: {type: p.number},
    colors: true,
    connectSeparatedPoints: {type: p.boolean},
    customBars: {type: p.boolean},
    dataHandler: true,
    dateWindow: true,
    delimiter: {type: p.string},
    digitsAfterDecimal: {type: p.number},
    displayAnnotations: {type: p.boolean},
    drawAxesAtZero: {type: p.boolean},
    drawAxis: {type: p.boolean},
    drawCallback: {type: p.func},
    drawGapEdgePoints: {type: p.boolean},
    drawGrid: {type: p.boolean},
    drawHighlightPointCallback: {type: p.func},
    drawPointCallback: {type: p.func},
    drawPoints: {type: p.boolean},
    errorBars: {type: p.boolean},
    file: {
        type: p.oneOfType([
            p.string /* CSV or URL */ ,
            p.arrayOf(p.arrayOf(p.oneOfType([
                p.instanceOf(Date),
                p.number
            ]))),
            p.func
        ]).isRequired,
        rename: 'data',
        hideOnInit: true
    },
    fillAlpha: {type: p.number},
    fillGraph: {type: p.boolean},
    fractions: {type: p.boolean},
    gridLineColor: true,
    gridLinePattern: {type: p.arrayOf(p.number)},
    gridLineWidth: {type: p.number},
    height: {type: p.number},
    hideOverlayOnMouseOut: {type: p.boolean},
    highlightCallback: {type: p.func, rename: 'onHighlight'},
    highlightCircleSize: true,
    highlightSeriesBackgroundAlpha: true,
    highlightSeriesOpts: true,
    includeZero: {type: p.boolean},
    independentTicks: {type: p.boolean},
    interactionModel: true,
    isZoomedIgnoreProgrammaticZoom: true,
    labels: {type: p.arrayOf(p.string)},
    labelsDiv: true,
    labelsDivStyles: true,
    labelsDivWidth: {type: p.number},
    labelsKMB: {type: p.boolean},
    labelsKMG2: {type: p.boolean},
    labelsSeparateLines: {type: p.boolean},
    labelsShowZeroValues: {type: p.boolean},
    labelsUTC: {type: p.boolean},
    legend: p.oneOf(['onmouseover', 'always', 'follow']),
    logscale: {type: p.boolean},
    maxNumberWidth: {type: p.number},
    panEdgeFraction: {type: p.number},
    pixelsPerLabel: {type: p.number},
    plotter: {type: p.oneOfType([p.func, p.arrayOf(p.func)])},
    plugins: true,
    pointClickCallback: {type: p.func, rename: 'onPointClick'},
    pointSize: {type: p.number},
    rangeSelectorHeight: {type: p.number},
    rangeSelectorPlotFillColor: true,
    rangeSelectorPlotStrokeColor: true,
    rightGap: {type: p.number},
    rollPeriod: {type: p.number},
    series: true,
    showInRangeSelector: {type: p.boolean},
    showLabelsOnHighlight: {type: p.boolean},
    showRangeSelector: {type: p.boolean},
    showRoller: {type: p.boolean},
    sigFigs: {type: p.number},
    sigma: {type: p.number},
    stackedGraph: {type: p.boolean},
    stackedGraphNaNFill: true,
    stepPlot: {type: p.boolean},
    strokeBorderColor: true,
    strokeBorderWidth: {type: p.number},
    strokePattern: true,
    strokeWidth: {type: p.number},
    ticker: true,
    timingName: true,
    title: true,
    titleHeight: {type: p.number},
    underlayCallback: {type: p.func},
    unhighlightCallback: {type: p.func, rename: 'onUnhighlight'},
    valueFormatter: true,
    valueRange: true,
    visibility: {type: p.arrayOf(p.boolean)},
    width: {type: p.number},
    wilsonInterval: true,
    xAxisHeight: {type: p.number},
    xLabelHeight: {type: p.number},
    xRangePad: {type: p.number},
    xValueParser: true,
    xlabel: true,
    y2label: true,
    yLabelWidth: {type: p.number},
    yRangePad: {type: p.number},
    ylabel: true,
    zoomCallback: {type: p.func, rename: 'onZoom'},
};

type PropConfig = boolean | {
    type ? : Function, private ? : boolean, rename ? : string
};

function getPropType(optionPropConfig: PropConfig) {
    if (!optionPropConfig)
        return undefined;
    if (optionPropConfig === true)
        return p.any;
    if (optionPropConfig.private)
        return undefined;
    if (!optionPropConfig.type)
        return p.any;
    return optionPropConfig.type;
}

function getPropName(optionPropConfig: PropConfig, optionName?: string) {
    if (!optionPropConfig || optionPropConfig === true)
        return optionName;
    if (typeof optionPropConfig.rename === 'string')
        return optionPropConfig.rename;
    return optionName;
}

function optionIsPrivate(optionPropConfig: PropConfig)
{
    if (optionPropConfig === false)
        return true;
    if (!optionPropConfig)
        return undefined;
    if (optionPropConfig === true)
        return false;
    return optionPropConfig.private;
}

function optionHideOnInit(optionPropConfig: PropConfig)
{
    if (optionPropConfig === false)
        return false;
    if (!optionPropConfig)
        return false;
    if (optionPropConfig === true)
        return false;
    return optionPropConfig.hideOnInit;
}

function getReactPropTypes(options) {
    const props = {};
    for (const optionName in options) {
        const option = options[optionName];
        if (option && !optionIsPrivate(option)) {
            const propName = getPropName(option, optionName);
            props[propName] = getPropType(option);
        }
    }
    return props;
}


function getPropMap(options) {
    const propMap = {};
    for (const optionName in options) {
        const option = options[optionName];
        if (option) {
            const propName = getPropName(option, optionName);
            propMap[propName] = optionName;
        }
    }
    return propMap;
}

const propMap = getPropMap(options);

function spreadProps(props, isInit) {
    const known = {}, rest = {};
    for (const propName in props) {
        const isDygraphsProp = !!propMap[propName];
        if (isDygraphsProp) {
            if (isInit && optionHideOnInit(options[propMap[propName]]))
                continue;
            if (optionIsPrivate(options[propMap[propName]]))
                continue;
        }
        let target = isDygraphsProp ? known : rest;
        const nameOut = isDygraphsProp ? propMap[propName] : propName;
        target[nameOut] = props[propName];
    }
    return {known, rest};
}

const propTypes = getReactPropTypes(options);

export default options;
export {
    options, propTypes, propMap, spreadProps
};
