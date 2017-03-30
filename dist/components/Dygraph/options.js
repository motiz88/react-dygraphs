'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spreadProps = exports.propMap = exports.propTypes = exports.options = undefined;

var _react = require('react');

var options = {
    animatedZooms: { type: _react.PropTypes.boolean },
    annotationClickHandler: { type: _react.PropTypes.func, rename: 'onAnnotationClick' },
    annotationDblClickHandler: { type: _react.PropTypes.func, rename: 'onAnnotationDblClick' },
    annotationMouseOutHandler: { type: _react.PropTypes.func, rename: 'onAnnotationMouseOut' },
    annotationMouseOverHandler: { type: _react.PropTypes.func, rename: 'onAnnotationMouseOver' },
    axes: true,
    axis: { type: _react.PropTypes.string },
    axisLabelColor: true,
    axisLabelFontSize: { type: _react.PropTypes.number },
    axisLabelFormatter: true,
    axisLabelWidth: { type: _react.PropTypes.number },
    axisLineColor: true,
    axisLineWidth: { type: _react.PropTypes.number },
    axisTickSize: { type: _react.PropTypes.number },
    clickCallback: { type: _react.PropTypes.func, rename: 'onClick' },
    color: true,
    colorSaturation: { type: _react.PropTypes.number },
    colorValue: { type: _react.PropTypes.number },
    colors: true,
    connectSeparatedPoints: { type: _react.PropTypes.boolean },
    customBars: { type: _react.PropTypes.boolean },
    dataHandler: true,
    dateWindow: true,
    delimiter: { type: _react.PropTypes.string },
    digitsAfterDecimal: { type: _react.PropTypes.number },
    displayAnnotations: { type: _react.PropTypes.boolean },
    drawAxesAtZero: { type: _react.PropTypes.boolean },
    drawAxis: { type: _react.PropTypes.boolean },
    drawCallback: { type: _react.PropTypes.func },
    drawGapEdgePoints: { type: _react.PropTypes.boolean },
    drawGrid: { type: _react.PropTypes.boolean },
    drawHighlightPointCallback: { type: _react.PropTypes.func },
    drawPointCallback: { type: _react.PropTypes.func },
    drawPoints: { type: _react.PropTypes.boolean },
    errorBars: { type: _react.PropTypes.boolean },
    file: {
        type: _react.PropTypes.oneOfType([_react.PropTypes.string /* CSV or URL */
        , _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.instanceOf(Date), _react.PropTypes.number]))), _react.PropTypes.func]).isRequired,
        rename: 'data',
        hideOnInit: true
    },
    fillAlpha: { type: _react.PropTypes.number },
    fillGraph: { type: _react.PropTypes.boolean },
    fractions: { type: _react.PropTypes.boolean },
    gridLineColor: true,
    gridLinePattern: { type: _react.PropTypes.arrayOf(_react.PropTypes.number) },
    gridLineWidth: { type: _react.PropTypes.number },
    height: { type: _react.PropTypes.number },
    hideOverlayOnMouseOut: { type: _react.PropTypes.boolean },
    highlightCallback: { type: _react.PropTypes.func, rename: 'onHighlight' },
    highlightCircleSize: true,
    highlightSeriesBackgroundAlpha: true,
    highlightSeriesOpts: true,
    includeZero: { type: _react.PropTypes.boolean },
    independentTicks: { type: _react.PropTypes.boolean },
    interactionModel: true,
    isZoomedIgnoreProgrammaticZoom: true,
    labels: { type: _react.PropTypes.arrayOf(_react.PropTypes.string) },
    labelsDiv: true,
    labelsDivStyles: true,
    labelsDivWidth: { type: _react.PropTypes.number },
    labelsKMB: { type: _react.PropTypes.boolean },
    labelsKMG2: { type: _react.PropTypes.boolean },
    labelsSeparateLines: { type: _react.PropTypes.boolean },
    labelsShowZeroValues: { type: _react.PropTypes.boolean },
    labelsUTC: { type: _react.PropTypes.boolean },
    legend: _react.PropTypes.oneOf(['onmouseover', 'always', 'follow']),
    logscale: { type: _react.PropTypes.boolean },
    maxNumberWidth: { type: _react.PropTypes.number },
    panEdgeFraction: { type: _react.PropTypes.number },
    pixelsPerLabel: { type: _react.PropTypes.number },
    plotter: { type: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]) },
    plugins: true,
    pointClickCallback: { type: _react.PropTypes.func, rename: 'onPointClick' },
    pointSize: { type: _react.PropTypes.number },
    rangeSelectorHeight: { type: _react.PropTypes.number },
    rangeSelectorPlotFillColor: true,
    rangeSelectorPlotStrokeColor: true,
    rightGap: { type: _react.PropTypes.number },
    rollPeriod: { type: _react.PropTypes.number },
    series: true,
    showInRangeSelector: { type: _react.PropTypes.boolean },
    showLabelsOnHighlight: { type: _react.PropTypes.boolean },
    showRangeSelector: { type: _react.PropTypes.boolean },
    showRoller: { type: _react.PropTypes.boolean },
    sigFigs: { type: _react.PropTypes.number },
    sigma: { type: _react.PropTypes.number },
    stackedGraph: { type: _react.PropTypes.boolean },
    stackedGraphNaNFill: true,
    stepPlot: { type: _react.PropTypes.boolean },
    strokeBorderColor: true,
    strokeBorderWidth: { type: _react.PropTypes.number },
    strokePattern: true,
    strokeWidth: { type: _react.PropTypes.number },
    ticker: true,
    timingName: true,
    title: true,
    titleHeight: { type: _react.PropTypes.number },
    underlayCallback: { type: _react.PropTypes.func },
    unhighlightCallback: { type: _react.PropTypes.func, rename: 'onUnhighlight' },
    valueFormatter: true,
    valueRange: true,
    visibility: { type: _react.PropTypes.arrayOf(_react.PropTypes.boolean) },
    width: { type: _react.PropTypes.number },
    wilsonInterval: true,
    xAxisHeight: { type: _react.PropTypes.number },
    xLabelHeight: { type: _react.PropTypes.number },
    xRangePad: { type: _react.PropTypes.number },
    xValueParser: true,
    xlabel: true,
    y2label: true,
    yLabelWidth: { type: _react.PropTypes.number },
    yRangePad: { type: _react.PropTypes.number },
    ylabel: true,
    zoomCallback: { type: _react.PropTypes.func, rename: 'onZoom' }
};

function getPropType(optionPropConfig) {
    if (!optionPropConfig) return undefined;
    if (optionPropConfig === true) return _react.PropTypes.any;
    if (optionPropConfig.private) return undefined;
    if (!optionPropConfig.type) return _react.PropTypes.any;
    return optionPropConfig.type;
}

function getPropName(optionPropConfig, optionName) {
    if (!optionPropConfig || optionPropConfig === true) return optionName;
    if (typeof optionPropConfig.rename === 'string') return optionPropConfig.rename;
    return optionName;
}

function optionIsPrivate(optionPropConfig) {
    if (optionPropConfig === false) return true;
    if (!optionPropConfig) return undefined;
    if (optionPropConfig === true) return false;
    return optionPropConfig.private;
}

function optionHideOnInit(optionPropConfig) {
    if (optionPropConfig === false) return false;
    if (!optionPropConfig) return false;
    if (optionPropConfig === true) return false;
    return optionPropConfig.hideOnInit;
}

function getReactPropTypes(options) {
    var props = {};
    for (var optionName in options) {
        var option = options[optionName];
        if (option && !optionIsPrivate(option)) {
            var propName = getPropName(option, optionName);
            props[propName] = getPropType(option);
        }
    }
    return props;
}

function getPropMap(options) {
    var propMap = {};
    for (var optionName in options) {
        var option = options[optionName];
        if (option) {
            var propName = getPropName(option, optionName);
            propMap[propName] = optionName;
        }
    }
    return propMap;
}

var propMap = getPropMap(options);

function spreadProps(props, isInit) {
    var known = {},
        rest = {};
    for (var propName in props) {
        var isDygraphsProp = !!propMap[propName];
        if (isDygraphsProp) {
            if (isInit && optionHideOnInit(options[propMap[propName]])) continue;
            if (optionIsPrivate(options[propMap[propName]])) continue;
        }
        var target = isDygraphsProp ? known : rest;
        var nameOut = isDygraphsProp ? propMap[propName] : propName;
        target[nameOut] = props[propName];
    }
    return { known: known, rest: rest };
}

var propTypes = getReactPropTypes(options);

exports.default = options;
exports.options = options;
exports.propTypes = propTypes;
exports.propMap = propMap;
exports.spreadProps = spreadProps;