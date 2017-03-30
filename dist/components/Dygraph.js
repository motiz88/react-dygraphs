'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dygraphsCommonjs = require('dygraphs-commonjs');

var _dygraphsCommonjs2 = _interopRequireDefault(_dygraphsCommonjs);

var _options = require('./Dygraph/options');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InteractionModelProxy = function InteractionModelProxy() {
    var _this = this;

    _classCallCheck(this, InteractionModelProxy);

    this._target = _dygraphsCommonjs2.default.Interaction.defaultModel;
    var _arr = ['mousedown', 'touchstart', 'touchmove', 'touchend', 'dblclick'];

    var _loop = function _loop() {
        var method = _arr[_i];
        var thisProxy = _this;
        _this[method] = function () {
            var _thisProxy$_target$me;

            var calledContext = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return (_thisProxy$_target$me = thisProxy._target[method]).call.apply(_thisProxy$_target$me, [calledContext].concat(args));
        };
    };

    for (var _i = 0; _i < _arr.length; _i++) {
        _loop();
    }
    ['willDestroyContextMyself'].forEach(function (prop) {
        Object.defineProperty(_this, prop, {
            configurable: false,
            enumerable: true,
            get: function get() {
                return _this._target[prop];
            },
            set: function set(value) {
                return _this._target[prop] = value;
            }
        });
    });
};

var Dygraph = function (_React$Component) {
    _inherits(Dygraph, _React$Component);

    function Dygraph(props) {
        _classCallCheck(this, Dygraph);

        var _this2 = _possibleConstructorReturn(this, (Dygraph.__proto__ || Object.getPrototypeOf(Dygraph)).call(this, props));

        _this2.displayName = 'Dygraph';
        _this2._interactionProxy = new InteractionModelProxy();
        return _this2;
    }

    _createClass(Dygraph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _spreadKnownProps = (0, _options.spreadProps)(this.props, true),
                initAttrs = _spreadKnownProps.known;

            this._interactionProxy._target = initAttrs.interactionModel || _dygraphsCommonjs2.default.Interaction.defaultModel;
            initAttrs.interactionModel = this._interactionProxy;
            this._dygraph = new _dygraphsCommonjs2.default(this.refs.root, this.props.data, initAttrs);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps /*, nextState*/) {
            if (this._dygraph) {
                var _spreadKnownProps2 = (0, _options.spreadProps)(nextProps, false),
                    updateAttrs = _spreadKnownProps2.known;

                this._interactionProxy._target = updateAttrs.interactionModel || _dygraphsCommonjs2.default.Interaction.defaultModel;
                updateAttrs.interactionModel = this._interactionProxy;
                this._dygraph.updateOptions(updateAttrs);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._dygraph) {
                this._dygraph.destroy();
                this._dygraph = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                ref: 'root',
                style: this.props.style
            });
        }
    }]);

    return Dygraph;
}(_react2.default.Component);

Dygraph.propTypes = _extends({ style: _react2.default.PropTypes.object }, _options.propTypes);
exports.default = Dygraph;