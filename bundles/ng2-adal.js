"bundle";
System.registerDynamic("ng2-adal/services.js", ["./services/adal.service", "./services/authHttp.service"], true, function ($__require, exports, module) {
  /**
   * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
   * @version v1.0.1
   * @link https://github.com/sureshchahal/angular2-adal#readme
   * @license MIT
   */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var adal_service_1 = $__require("./services/adal.service");
  exports.AdalService = adal_service_1.AdalService;
  var authHttp_service_1 = $__require("./services/authHttp.service");
  exports.AuthHttp = authHttp_service_1.AuthHttp;

  

  return module.exports;
});
System.registerDynamic("ng2-adal/modules/adal.module.js", ["@angular/core", "./../services/adal.service"], true, function ($__require, exports, module) {
    /**
     * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
     * @version v1.0.1
     * @link https://github.com/sureshchahal/angular2-adal#readme
     * @license MIT
     */
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var adal_service_1 = $__require("./../services/adal.service");
    var AdalModule = function () {
        function AdalModule() {}
        return AdalModule;
    }();
    AdalModule = __decorate([core_1.NgModule({
        imports: [],
        exports: [],
        declarations: [],
        providers: [adal_service_1.AdalService]
    }), __metadata("design:paramtypes", [])], AdalModule);
    exports.AdalModule = AdalModule;

    

    return module.exports;
});
(function() {
var define = System.amdDefine;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) : typeof define === 'function' && define.amd ? define("@angular/common/bundles/common.umd.js", ["exports", "@angular/core"], factory) : (factory((global.ng = global.ng || {}, global.ng.common = global.ng.common || {}), global.ng.core));
}(this, function(exports, _angular_core) {
  'use strict';
  var PlatformLocation = (function() {
    function PlatformLocation() {}
    PlatformLocation.prototype.getBaseHrefFromDOM = function() {};
    PlatformLocation.prototype.onPopState = function(fn) {};
    PlatformLocation.prototype.onHashChange = function(fn) {};
    Object.defineProperty(PlatformLocation.prototype, "pathname", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PlatformLocation.prototype, "search", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PlatformLocation.prototype, "hash", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    PlatformLocation.prototype.replaceState = function(state, title, url) {};
    PlatformLocation.prototype.pushState = function(state, title, url) {};
    PlatformLocation.prototype.forward = function() {};
    PlatformLocation.prototype.back = function() {};
    return PlatformLocation;
  }());
  var LocationStrategy = (function() {
    function LocationStrategy() {}
    LocationStrategy.prototype.path = function(includeHash) {};
    LocationStrategy.prototype.prepareExternalUrl = function(internal) {};
    LocationStrategy.prototype.pushState = function(state, title, url, queryParams) {};
    LocationStrategy.prototype.replaceState = function(state, title, url, queryParams) {};
    LocationStrategy.prototype.forward = function() {};
    LocationStrategy.prototype.back = function() {};
    LocationStrategy.prototype.onPopState = function(fn) {};
    LocationStrategy.prototype.getBaseHref = function() {};
    return LocationStrategy;
  }());
  var APP_BASE_HREF = new _angular_core.OpaqueToken('appBaseHref');
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = (self);
    } else {
      globalScope = (global);
    }
  } else {
    globalScope = (window);
  }
  var _global = globalScope;
  function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
  }
  _global.assert = function assert(condition) {};
  function isPresent(obj) {
    return obj != null;
  }
  function isBlank(obj) {
    return obj == null;
  }
  function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
  }
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token == null) {
      return '' + token;
    }
    if (token.overriddenName) {
      return "" + token.overriddenName;
    }
    if (token.name) {
      return "" + token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
  }
  var NumberWrapper = (function() {
    function NumberWrapper() {}
    NumberWrapper.parseIntAutoRadix = function(text) {
      var result = parseInt(text);
      if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
      }
      return result;
    };
    NumberWrapper.isNumeric = function(value) {
      return !isNaN(value - parseFloat(value));
    };
    return NumberWrapper;
  }());
  function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
  }
  var _symbolIterator = null;
  function getSymbolIterator() {
    if (!_symbolIterator) {
      if (((globalScope)).Symbol && Symbol.iterator) {
        _symbolIterator = Symbol.iterator;
      } else {
        var keys = Object.getOwnPropertyNames(Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && ((Map)).prototype[key] === Map.prototype['entries']) {
            _symbolIterator = key;
          }
        }
      }
    }
    return _symbolIterator;
  }
  var Location = (function() {
    function Location(platformStrategy) {
      var _this = this;
      this._subject = new _angular_core.EventEmitter();
      this._platformStrategy = platformStrategy;
      var browserBaseHref = this._platformStrategy.getBaseHref();
      this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
      this._platformStrategy.onPopState(function(ev) {
        _this._subject.emit({
          'url': _this.path(true),
          'pop': true,
          'type': ev.type
        });
      });
    }
    Location.prototype.path = function(includeHash) {
      if (includeHash === void 0) {
        includeHash = false;
      }
      return this.normalize(this._platformStrategy.path(includeHash));
    };
    Location.prototype.isCurrentPathEqualTo = function(path, query) {
      if (query === void 0) {
        query = '';
      }
      return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
    };
    Location.prototype.normalize = function(url) {
      return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    };
    Location.prototype.prepareExternalUrl = function(url) {
      if (url && url[0] !== '/') {
        url = '/' + url;
      }
      return this._platformStrategy.prepareExternalUrl(url);
    };
    Location.prototype.go = function(path, query) {
      if (query === void 0) {
        query = '';
      }
      this._platformStrategy.pushState(null, '', path, query);
    };
    Location.prototype.replaceState = function(path, query) {
      if (query === void 0) {
        query = '';
      }
      this._platformStrategy.replaceState(null, '', path, query);
    };
    Location.prototype.forward = function() {
      this._platformStrategy.forward();
    };
    Location.prototype.back = function() {
      this._platformStrategy.back();
    };
    Location.prototype.subscribe = function(onNext, onThrow, onReturn) {
      if (onThrow === void 0) {
        onThrow = null;
      }
      if (onReturn === void 0) {
        onReturn = null;
      }
      return this._subject.subscribe({
        next: onNext,
        error: onThrow,
        complete: onReturn
      });
    };
    Location.normalizeQueryParams = function(params) {
      return params && params[0] !== '?' ? '?' + params : params;
    };
    Location.joinWithSlash = function(start, end) {
      if (start.length == 0) {
        return end;
      }
      if (end.length == 0) {
        return start;
      }
      var slashes = 0;
      if (start.endsWith('/')) {
        slashes++;
      }
      if (end.startsWith('/')) {
        slashes++;
      }
      if (slashes == 2) {
        return start + end.substring(1);
      }
      if (slashes == 1) {
        return start + end;
      }
      return start + '/' + end;
    };
    Location.stripTrailingSlash = function(url) {
      return url.replace(/\/$/, '');
    };
    Location.decorators = [{type: _angular_core.Injectable}];
    Location.ctorParameters = function() {
      return [{type: LocationStrategy}];
    };
    return Location;
  }());
  function _stripBaseHref(baseHref, url) {
    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
  }
  function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
  }
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var HashLocationStrategy = (function(_super) {
    __extends(HashLocationStrategy, _super);
    function HashLocationStrategy(_platformLocation, _baseHref) {
      _super.call(this);
      this._platformLocation = _platformLocation;
      this._baseHref = '';
      if (isPresent(_baseHref)) {
        this._baseHref = _baseHref;
      }
    }
    HashLocationStrategy.prototype.onPopState = function(fn) {
      this._platformLocation.onPopState(fn);
      this._platformLocation.onHashChange(fn);
    };
    HashLocationStrategy.prototype.getBaseHref = function() {
      return this._baseHref;
    };
    HashLocationStrategy.prototype.path = function(includeHash) {
      if (includeHash === void 0) {
        includeHash = false;
      }
      var path = this._platformLocation.hash;
      if (!isPresent(path))
        path = '#';
      return path.length > 0 ? path.substring(1) : path;
    };
    HashLocationStrategy.prototype.prepareExternalUrl = function(internal) {
      var url = Location.joinWithSlash(this._baseHref, internal);
      return url.length > 0 ? ('#' + url) : url;
    };
    HashLocationStrategy.prototype.pushState = function(state, title, path, queryParams) {
      var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
      if (url.length == 0) {
        url = this._platformLocation.pathname;
      }
      this._platformLocation.pushState(state, title, url);
    };
    HashLocationStrategy.prototype.replaceState = function(state, title, path, queryParams) {
      var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
      if (url.length == 0) {
        url = this._platformLocation.pathname;
      }
      this._platformLocation.replaceState(state, title, url);
    };
    HashLocationStrategy.prototype.forward = function() {
      this._platformLocation.forward();
    };
    HashLocationStrategy.prototype.back = function() {
      this._platformLocation.back();
    };
    HashLocationStrategy.decorators = [{type: _angular_core.Injectable}];
    HashLocationStrategy.ctorParameters = function() {
      return [{type: PlatformLocation}, {
        type: undefined,
        decorators: [{type: _angular_core.Optional}, {
          type: _angular_core.Inject,
          args: [APP_BASE_HREF]
        }]
      }];
    };
    return HashLocationStrategy;
  }(LocationStrategy));
  var __extends$1 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var PathLocationStrategy = (function(_super) {
    __extends$1(PathLocationStrategy, _super);
    function PathLocationStrategy(_platformLocation, href) {
      _super.call(this);
      this._platformLocation = _platformLocation;
      if (isBlank(href)) {
        href = this._platformLocation.getBaseHrefFromDOM();
      }
      if (isBlank(href)) {
        throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
      }
      this._baseHref = href;
    }
    PathLocationStrategy.prototype.onPopState = function(fn) {
      this._platformLocation.onPopState(fn);
      this._platformLocation.onHashChange(fn);
    };
    PathLocationStrategy.prototype.getBaseHref = function() {
      return this._baseHref;
    };
    PathLocationStrategy.prototype.prepareExternalUrl = function(internal) {
      return Location.joinWithSlash(this._baseHref, internal);
    };
    PathLocationStrategy.prototype.path = function(includeHash) {
      if (includeHash === void 0) {
        includeHash = false;
      }
      var pathname = this._platformLocation.pathname + Location.normalizeQueryParams(this._platformLocation.search);
      var hash = this._platformLocation.hash;
      return hash && includeHash ? "" + pathname + hash : pathname;
    };
    PathLocationStrategy.prototype.pushState = function(state, title, url, queryParams) {
      var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
      this._platformLocation.pushState(state, title, externalUrl);
    };
    PathLocationStrategy.prototype.replaceState = function(state, title, url, queryParams) {
      var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
      this._platformLocation.replaceState(state, title, externalUrl);
    };
    PathLocationStrategy.prototype.forward = function() {
      this._platformLocation.forward();
    };
    PathLocationStrategy.prototype.back = function() {
      this._platformLocation.back();
    };
    PathLocationStrategy.decorators = [{type: _angular_core.Injectable}];
    PathLocationStrategy.ctorParameters = function() {
      return [{type: PlatformLocation}, {
        type: undefined,
        decorators: [{type: _angular_core.Optional}, {
          type: _angular_core.Inject,
          args: [APP_BASE_HREF]
        }]
      }];
    };
    return PathLocationStrategy;
  }(LocationStrategy));
  var __extends$2 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NgLocalization = (function() {
    function NgLocalization() {}
    NgLocalization.prototype.getPluralCategory = function(value) {};
    return NgLocalization;
  }());
  function getPluralCategory(value, cases, ngLocalization) {
    var key = "=" + value;
    if (cases.indexOf(key) > -1) {
      return key;
    }
    key = ngLocalization.getPluralCategory(value);
    if (cases.indexOf(key) > -1) {
      return key;
    }
    if (cases.indexOf('other') > -1) {
      return 'other';
    }
    throw new Error("No plural message found for value \"" + value + "\"");
  }
  var NgLocaleLocalization = (function(_super) {
    __extends$2(NgLocaleLocalization, _super);
    function NgLocaleLocalization(_locale) {
      _super.call(this);
      this._locale = _locale;
    }
    NgLocaleLocalization.prototype.getPluralCategory = function(value) {
      var plural = getPluralCase(this._locale, value);
      switch (plural) {
        case Plural.Zero:
          return 'zero';
        case Plural.One:
          return 'one';
        case Plural.Two:
          return 'two';
        case Plural.Few:
          return 'few';
        case Plural.Many:
          return 'many';
        default:
          return 'other';
      }
    };
    NgLocaleLocalization.decorators = [{type: _angular_core.Injectable}];
    NgLocaleLocalization.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Inject,
          args: [_angular_core.LOCALE_ID]
        }]
      }];
    };
    return NgLocaleLocalization;
  }(NgLocalization));
  var Plural = {};
  Plural.Zero = 0;
  Plural.One = 1;
  Plural.Two = 2;
  Plural.Few = 3;
  Plural.Many = 4;
  Plural.Other = 5;
  Plural[Plural.Zero] = "Zero";
  Plural[Plural.One] = "One";
  Plural[Plural.Two] = "Two";
  Plural[Plural.Few] = "Few";
  Plural[Plural.Many] = "Many";
  Plural[Plural.Other] = "Other";
  function getPluralCase(locale, nLike) {
    if (typeof nLike === 'string') {
      nLike = parseInt((nLike), 10);
    }
    var n = (nLike);
    var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
    var i = Math.floor(Math.abs(n));
    var v = nDecimal.length;
    var f = parseInt(nDecimal, 10);
    var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    var lang = locale.split('-')[0].toLowerCase();
    switch (lang) {
      case 'af':
      case 'asa':
      case 'az':
      case 'bem':
      case 'bez':
      case 'bg':
      case 'brx':
      case 'ce':
      case 'cgg':
      case 'chr':
      case 'ckb':
      case 'ee':
      case 'el':
      case 'eo':
      case 'es':
      case 'eu':
      case 'fo':
      case 'fur':
      case 'gsw':
      case 'ha':
      case 'haw':
      case 'hu':
      case 'jgo':
      case 'jmc':
      case 'ka':
      case 'kk':
      case 'kkj':
      case 'kl':
      case 'ks':
      case 'ksb':
      case 'ky':
      case 'lb':
      case 'lg':
      case 'mas':
      case 'mgo':
      case 'ml':
      case 'mn':
      case 'nb':
      case 'nd':
      case 'ne':
      case 'nn':
      case 'nnh':
      case 'nyn':
      case 'om':
      case 'or':
      case 'os':
      case 'ps':
      case 'rm':
      case 'rof':
      case 'rwk':
      case 'saq':
      case 'seh':
      case 'sn':
      case 'so':
      case 'sq':
      case 'ta':
      case 'te':
      case 'teo':
      case 'tk':
      case 'tr':
      case 'ug':
      case 'uz':
      case 'vo':
      case 'vun':
      case 'wae':
      case 'xog':
        if (n === 1)
          return Plural.One;
        return Plural.Other;
      case 'agq':
      case 'bas':
      case 'cu':
      case 'dav':
      case 'dje':
      case 'dua':
      case 'dyo':
      case 'ebu':
      case 'ewo':
      case 'guz':
      case 'kam':
      case 'khq':
      case 'ki':
      case 'kln':
      case 'kok':
      case 'ksf':
      case 'lrc':
      case 'lu':
      case 'luo':
      case 'luy':
      case 'mer':
      case 'mfe':
      case 'mgh':
      case 'mua':
      case 'mzn':
      case 'nmg':
      case 'nus':
      case 'qu':
      case 'rn':
      case 'rw':
      case 'sbp':
      case 'twq':
      case 'vai':
      case 'yav':
      case 'yue':
      case 'zgh':
      case 'ak':
      case 'ln':
      case 'mg':
      case 'pa':
      case 'ti':
        if (n === Math.floor(n) && n >= 0 && n <= 1)
          return Plural.One;
        return Plural.Other;
      case 'am':
      case 'as':
      case 'bn':
      case 'fa':
      case 'gu':
      case 'hi':
      case 'kn':
      case 'mr':
      case 'zu':
        if (i === 0 || n === 1)
          return Plural.One;
        return Plural.Other;
      case 'ar':
        if (n === 0)
          return Plural.Zero;
        if (n === 1)
          return Plural.One;
        if (n === 2)
          return Plural.Two;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
          return Plural.Few;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
          return Plural.Many;
        return Plural.Other;
      case 'ast':
      case 'ca':
      case 'de':
      case 'en':
      case 'et':
      case 'fi':
      case 'fy':
      case 'gl':
      case 'it':
      case 'nl':
      case 'sv':
      case 'sw':
      case 'ur':
      case 'yi':
        if (i === 1 && v === 0)
          return Plural.One;
        return Plural.Other;
      case 'be':
        if (n % 10 === 1 && !(n % 100 === 11))
          return Plural.One;
        if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14))
          return Plural.Few;
        if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
          return Plural.Many;
        return Plural.Other;
      case 'br':
        if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
          return Plural.One;
        if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
          return Plural.Two;
        if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) && !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 || n % 100 >= 90 && n % 100 <= 99))
          return Plural.Few;
        if (!(n === 0) && n % 1e6 === 0)
          return Plural.Many;
        return Plural.Other;
      case 'bs':
      case 'hr':
      case 'sr':
        if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
          return Plural.One;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14) || f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14))
          return Plural.Few;
        return Plural.Other;
      case 'cs':
      case 'sk':
        if (i === 1 && v === 0)
          return Plural.One;
        if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
          return Plural.Few;
        if (!(v === 0))
          return Plural.Many;
        return Plural.Other;
      case 'cy':
        if (n === 0)
          return Plural.Zero;
        if (n === 1)
          return Plural.One;
        if (n === 2)
          return Plural.Two;
        if (n === 3)
          return Plural.Few;
        if (n === 6)
          return Plural.Many;
        return Plural.Other;
      case 'da':
        if (n === 1 || !(t === 0) && (i === 0 || i === 1))
          return Plural.One;
        return Plural.Other;
      case 'dsb':
      case 'hsb':
        if (v === 0 && i % 100 === 1 || f % 100 === 1)
          return Plural.One;
        if (v === 0 && i % 100 === 2 || f % 100 === 2)
          return Plural.Two;
        if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
          return Plural.Few;
        return Plural.Other;
      case 'ff':
      case 'fr':
      case 'hy':
      case 'kab':
        if (i === 0 || i === 1)
          return Plural.One;
        return Plural.Other;
      case 'fil':
        if (v === 0 && (i === 1 || i === 2 || i === 3) || v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) || !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
          return Plural.One;
        return Plural.Other;
      case 'ga':
        if (n === 1)
          return Plural.One;
        if (n === 2)
          return Plural.Two;
        if (n === Math.floor(n) && n >= 3 && n <= 6)
          return Plural.Few;
        if (n === Math.floor(n) && n >= 7 && n <= 10)
          return Plural.Many;
        return Plural.Other;
      case 'gd':
        if (n === 1 || n === 11)
          return Plural.One;
        if (n === 2 || n === 12)
          return Plural.Two;
        if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
          return Plural.Few;
        return Plural.Other;
      case 'gv':
        if (v === 0 && i % 10 === 1)
          return Plural.One;
        if (v === 0 && i % 10 === 2)
          return Plural.Two;
        if (v === 0 && (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
          return Plural.Few;
        if (!(v === 0))
          return Plural.Many;
        return Plural.Other;
      case 'he':
        if (i === 1 && v === 0)
          return Plural.One;
        if (i === 2 && v === 0)
          return Plural.Two;
        if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
          return Plural.Many;
        return Plural.Other;
      case 'is':
        if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
          return Plural.One;
        return Plural.Other;
      case 'ksh':
        if (n === 0)
          return Plural.Zero;
        if (n === 1)
          return Plural.One;
        return Plural.Other;
      case 'kw':
      case 'naq':
      case 'se':
      case 'smn':
        if (n === 1)
          return Plural.One;
        if (n === 2)
          return Plural.Two;
        return Plural.Other;
      case 'lag':
        if (n === 0)
          return Plural.Zero;
        if ((i === 0 || i === 1) && !(n === 0))
          return Plural.One;
        return Plural.Other;
      case 'lt':
        if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
          return Plural.One;
        if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19))
          return Plural.Few;
        if (!(f === 0))
          return Plural.Many;
        return Plural.Other;
      case 'lv':
      case 'prg':
        if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 || v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
          return Plural.Zero;
        if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) || !(v === 2) && f % 10 === 1)
          return Plural.One;
        return Plural.Other;
      case 'mk':
        if (v === 0 && i % 10 === 1 || f % 10 === 1)
          return Plural.One;
        return Plural.Other;
      case 'mt':
        if (n === 1)
          return Plural.One;
        if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
          return Plural.Few;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
          return Plural.Many;
        return Plural.Other;
      case 'pl':
        if (i === 1 && v === 0)
          return Plural.One;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14))
          return Plural.Few;
        if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 || v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
          return Plural.Many;
        return Plural.Other;
      case 'pt':
        if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
          return Plural.One;
        return Plural.Other;
      case 'ro':
        if (i === 1 && v === 0)
          return Plural.One;
        if (!(v === 0) || n === 0 || !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
          return Plural.Few;
        return Plural.Other;
      case 'ru':
      case 'uk':
        if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
          return Plural.One;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14))
          return Plural.Few;
        if (v === 0 && i % 10 === 0 || v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
          return Plural.Many;
        return Plural.Other;
      case 'shi':
        if (i === 0 || n === 1)
          return Plural.One;
        if (n === Math.floor(n) && n >= 2 && n <= 10)
          return Plural.Few;
        return Plural.Other;
      case 'si':
        if (n === 0 || n === 1 || i === 0 && f === 1)
          return Plural.One;
        return Plural.Other;
      case 'sl':
        if (v === 0 && i % 100 === 1)
          return Plural.One;
        if (v === 0 && i % 100 === 2)
          return Plural.Two;
        if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
          return Plural.Few;
        return Plural.Other;
      case 'tzm':
        if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
          return Plural.One;
        return Plural.Other;
      default:
        return Plural.Other;
    }
  }
  function isListLikeIterable(obj) {
    if (!isJsObject(obj))
      return false;
    return Array.isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj);
  }
  var NgClass = (function() {
    function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
      this._iterableDiffers = _iterableDiffers;
      this._keyValueDiffers = _keyValueDiffers;
      this._ngEl = _ngEl;
      this._renderer = _renderer;
      this._initialClasses = [];
    }
    Object.defineProperty(NgClass.prototype, "klass", {
      set: function(v) {
        this._applyInitialClasses(true);
        this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
        this._applyInitialClasses(false);
        this._applyClasses(this._rawClass, false);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgClass.prototype, "ngClass", {
      set: function(v) {
        this._cleanupClasses(this._rawClass);
        this._iterableDiffer = null;
        this._keyValueDiffer = null;
        this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
        if (this._rawClass) {
          if (isListLikeIterable(this._rawClass)) {
            this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create(null);
          } else {
            this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create(null);
          }
        }
      },
      enumerable: true,
      configurable: true
    });
    NgClass.prototype.ngDoCheck = function() {
      if (this._iterableDiffer) {
        var changes = this._iterableDiffer.diff(this._rawClass);
        if (changes) {
          this._applyIterableChanges(changes);
        }
      } else if (this._keyValueDiffer) {
        var changes = this._keyValueDiffer.diff(this._rawClass);
        if (changes) {
          this._applyKeyValueChanges(changes);
        }
      }
    };
    NgClass.prototype._cleanupClasses = function(rawClassVal) {
      this._applyClasses(rawClassVal, true);
      this._applyInitialClasses(false);
    };
    NgClass.prototype._applyKeyValueChanges = function(changes) {
      var _this = this;
      changes.forEachAddedItem(function(record) {
        return _this._toggleClass(record.key, record.currentValue);
      });
      changes.forEachChangedItem(function(record) {
        return _this._toggleClass(record.key, record.currentValue);
      });
      changes.forEachRemovedItem(function(record) {
        if (record.previousValue) {
          _this._toggleClass(record.key, false);
        }
      });
    };
    NgClass.prototype._applyIterableChanges = function(changes) {
      var _this = this;
      changes.forEachAddedItem(function(record) {
        if (typeof record.item === 'string') {
          _this._toggleClass(record.item, true);
        } else {
          throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + stringify(record.item));
        }
      });
      changes.forEachRemovedItem(function(record) {
        return _this._toggleClass(record.item, false);
      });
    };
    NgClass.prototype._applyInitialClasses = function(isCleanup) {
      var _this = this;
      this._initialClasses.forEach(function(klass) {
        return _this._toggleClass(klass, !isCleanup);
      });
    };
    NgClass.prototype._applyClasses = function(rawClassVal, isCleanup) {
      var _this = this;
      if (rawClassVal) {
        if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
          ((rawClassVal)).forEach(function(klass) {
            return _this._toggleClass(klass, !isCleanup);
          });
        } else {
          Object.keys(rawClassVal).forEach(function(klass) {
            if (isPresent(rawClassVal[klass]))
              _this._toggleClass(klass, !isCleanup);
          });
        }
      }
    };
    NgClass.prototype._toggleClass = function(klass, enabled) {
      var _this = this;
      klass = klass.trim();
      if (klass) {
        klass.split(/\s+/g).forEach(function(klass) {
          _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, enabled);
        });
      }
    };
    NgClass.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngClass]'}]
    }];
    NgClass.ctorParameters = function() {
      return [{type: _angular_core.IterableDiffers}, {type: _angular_core.KeyValueDiffers}, {type: _angular_core.ElementRef}, {type: _angular_core.Renderer}];
    };
    NgClass.propDecorators = {
      'klass': [{
        type: _angular_core.Input,
        args: ['class']
      }],
      'ngClass': [{type: _angular_core.Input}]
    };
    return NgClass;
  }());
  var NgForRow = (function() {
    function NgForRow($implicit, index, count) {
      this.$implicit = $implicit;
      this.index = index;
      this.count = count;
    }
    Object.defineProperty(NgForRow.prototype, "first", {
      get: function() {
        return this.index === 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "last", {
      get: function() {
        return this.index === this.count - 1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "even", {
      get: function() {
        return this.index % 2 === 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "odd", {
      get: function() {
        return !this.even;
      },
      enumerable: true,
      configurable: true
    });
    return NgForRow;
  }());
  var NgFor = (function() {
    function NgFor(_viewContainer, _template, _differs, _cdr) {
      this._viewContainer = _viewContainer;
      this._template = _template;
      this._differs = _differs;
      this._cdr = _cdr;
      this._differ = null;
    }
    Object.defineProperty(NgFor.prototype, "ngForTrackBy", {
      get: function() {
        return this._trackByFn;
      },
      set: function(fn) {
        if (typeof fn !== 'function') {
          throw new Error("trackBy must be a function, but received " + JSON.stringify(fn));
        }
        this._trackByFn = fn;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgFor.prototype, "ngForTemplate", {
      set: function(value) {
        if (value) {
          this._template = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    NgFor.prototype.ngOnChanges = function(changes) {
      if ('ngForOf' in changes) {
        var value = changes['ngForOf'].currentValue;
        if (!this._differ && value) {
          try {
            this._differ = this._differs.find(value).create(this._cdr, this.ngForTrackBy);
          } catch (e) {
            throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
          }
        }
      }
    };
    NgFor.prototype.ngDoCheck = function() {
      if (this._differ) {
        var changes = this._differ.diff(this.ngForOf);
        if (changes)
          this._applyChanges(changes);
      }
    };
    NgFor.prototype._applyChanges = function(changes) {
      var _this = this;
      var insertTuples = [];
      changes.forEachOperation(function(item, adjustedPreviousIndex, currentIndex) {
        if (item.previousIndex == null) {
          var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForRow(null, null, null), currentIndex);
          var tuple = new RecordViewTuple(item, view);
          insertTuples.push(tuple);
        } else if (currentIndex == null) {
          _this._viewContainer.remove(adjustedPreviousIndex);
        } else {
          var view = _this._viewContainer.get(adjustedPreviousIndex);
          _this._viewContainer.move(view, currentIndex);
          var tuple = new RecordViewTuple(item, (view));
          insertTuples.push(tuple);
        }
      });
      for (var i = 0; i < insertTuples.length; i++) {
        this._perViewChange(insertTuples[i].view, insertTuples[i].record);
      }
      for (var i = 0,
          ilen = this._viewContainer.length; i < ilen; i++) {
        var viewRef = (this._viewContainer.get(i));
        viewRef.context.index = i;
        viewRef.context.count = ilen;
      }
      changes.forEachIdentityChange(function(record) {
        var viewRef = (_this._viewContainer.get(record.currentIndex));
        viewRef.context.$implicit = record.item;
      });
    };
    NgFor.prototype._perViewChange = function(view, record) {
      view.context.$implicit = record.item;
    };
    NgFor.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngFor][ngForOf]'}]
    }];
    NgFor.ctorParameters = function() {
      return [{type: _angular_core.ViewContainerRef}, {type: _angular_core.TemplateRef}, {type: _angular_core.IterableDiffers}, {type: _angular_core.ChangeDetectorRef}];
    };
    NgFor.propDecorators = {
      'ngForOf': [{type: _angular_core.Input}],
      'ngForTrackBy': [{type: _angular_core.Input}],
      'ngForTemplate': [{type: _angular_core.Input}]
    };
    return NgFor;
  }());
  var RecordViewTuple = (function() {
    function RecordViewTuple(record, view) {
      this.record = record;
      this.view = view;
    }
    return RecordViewTuple;
  }());
  var NgIf = (function() {
    function NgIf(_viewContainer, _template) {
      this._viewContainer = _viewContainer;
      this._template = _template;
      this._hasView = false;
    }
    Object.defineProperty(NgIf.prototype, "ngIf", {
      set: function(condition) {
        if (condition && !this._hasView) {
          this._hasView = true;
          this._viewContainer.createEmbeddedView(this._template);
        } else if (!condition && this._hasView) {
          this._hasView = false;
          this._viewContainer.clear();
        }
      },
      enumerable: true,
      configurable: true
    });
    NgIf.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngIf]'}]
    }];
    NgIf.ctorParameters = function() {
      return [{type: _angular_core.ViewContainerRef}, {type: _angular_core.TemplateRef}];
    };
    NgIf.propDecorators = {'ngIf': [{type: _angular_core.Input}]};
    return NgIf;
  }());
  var SwitchView = (function() {
    function SwitchView(_viewContainerRef, _templateRef) {
      this._viewContainerRef = _viewContainerRef;
      this._templateRef = _templateRef;
      this._created = false;
    }
    SwitchView.prototype.create = function() {
      this._created = true;
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    SwitchView.prototype.destroy = function() {
      this._created = false;
      this._viewContainerRef.clear();
    };
    SwitchView.prototype.enforceState = function(created) {
      if (created && !this._created) {
        this.create();
      } else if (!created && this._created) {
        this.destroy();
      }
    };
    return SwitchView;
  }());
  var NgSwitch = (function() {
    function NgSwitch() {
      this._defaultUsed = false;
      this._caseCount = 0;
      this._lastCaseCheckIndex = 0;
      this._lastCasesMatched = false;
    }
    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
      set: function(newValue) {
        this._ngSwitch = newValue;
        if (this._caseCount === 0) {
          this._updateDefaultCases(true);
        }
      },
      enumerable: true,
      configurable: true
    });
    NgSwitch.prototype._addCase = function() {
      return this._caseCount++;
    };
    NgSwitch.prototype._addDefault = function(view) {
      if (!this._defaultViews) {
        this._defaultViews = [];
      }
      this._defaultViews.push(view);
    };
    NgSwitch.prototype._matchCase = function(value) {
      var matched = value == this._ngSwitch;
      this._lastCasesMatched = this._lastCasesMatched || matched;
      this._lastCaseCheckIndex++;
      if (this._lastCaseCheckIndex === this._caseCount) {
        this._updateDefaultCases(!this._lastCasesMatched);
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
      }
      return matched;
    };
    NgSwitch.prototype._updateDefaultCases = function(useDefault) {
      if (this._defaultViews && useDefault !== this._defaultUsed) {
        this._defaultUsed = useDefault;
        for (var i = 0; i < this._defaultViews.length; i++) {
          var defaultView = this._defaultViews[i];
          defaultView.enforceState(useDefault);
        }
      }
    };
    NgSwitch.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngSwitch]'}]
    }];
    NgSwitch.ctorParameters = function() {
      return [];
    };
    NgSwitch.propDecorators = {'ngSwitch': [{type: _angular_core.Input}]};
    return NgSwitch;
  }());
  var NgSwitchCase = (function() {
    function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
      this.ngSwitch = ngSwitch;
      ngSwitch._addCase();
      this._view = new SwitchView(viewContainer, templateRef);
    }
    NgSwitchCase.prototype.ngDoCheck = function() {
      this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
    };
    NgSwitchCase.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngSwitchCase]'}]
    }];
    NgSwitchCase.ctorParameters = function() {
      return [{type: _angular_core.ViewContainerRef}, {type: _angular_core.TemplateRef}, {
        type: NgSwitch,
        decorators: [{type: _angular_core.Host}]
      }];
    };
    NgSwitchCase.propDecorators = {'ngSwitchCase': [{type: _angular_core.Input}]};
    return NgSwitchCase;
  }());
  var NgSwitchDefault = (function() {
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
      ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    NgSwitchDefault.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngSwitchDefault]'}]
    }];
    NgSwitchDefault.ctorParameters = function() {
      return [{type: _angular_core.ViewContainerRef}, {type: _angular_core.TemplateRef}, {
        type: NgSwitch,
        decorators: [{type: _angular_core.Host}]
      }];
    };
    return NgSwitchDefault;
  }());
  var NgPlural = (function() {
    function NgPlural(_localization) {
      this._localization = _localization;
      this._caseViews = {};
    }
    Object.defineProperty(NgPlural.prototype, "ngPlural", {
      set: function(value) {
        this._switchValue = value;
        this._updateView();
      },
      enumerable: true,
      configurable: true
    });
    NgPlural.prototype.addCase = function(value, switchView) {
      this._caseViews[value] = switchView;
    };
    NgPlural.prototype._updateView = function() {
      this._clearViews();
      var cases = Object.keys(this._caseViews);
      var key = getPluralCategory(this._switchValue, cases, this._localization);
      this._activateView(this._caseViews[key]);
    };
    NgPlural.prototype._clearViews = function() {
      if (this._activeView)
        this._activeView.destroy();
    };
    NgPlural.prototype._activateView = function(view) {
      if (view) {
        this._activeView = view;
        this._activeView.create();
      }
    };
    NgPlural.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngPlural]'}]
    }];
    NgPlural.ctorParameters = function() {
      return [{type: NgLocalization}];
    };
    NgPlural.propDecorators = {'ngPlural': [{type: _angular_core.Input}]};
    return NgPlural;
  }());
  var NgPluralCase = (function() {
    function NgPluralCase(value, template, viewContainer, ngPlural) {
      this.value = value;
      ngPlural.addCase(value, new SwitchView(viewContainer, template));
    }
    NgPluralCase.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngPluralCase]'}]
    }];
    NgPluralCase.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Attribute,
          args: ['ngPluralCase']
        }]
      }, {type: _angular_core.TemplateRef}, {type: _angular_core.ViewContainerRef}, {
        type: NgPlural,
        decorators: [{type: _angular_core.Host}]
      }];
    };
    return NgPluralCase;
  }());
  var NgStyle = (function() {
    function NgStyle(_differs, _ngEl, _renderer) {
      this._differs = _differs;
      this._ngEl = _ngEl;
      this._renderer = _renderer;
    }
    Object.defineProperty(NgStyle.prototype, "ngStyle", {
      set: function(v) {
        this._ngStyle = v;
        if (!this._differ && v) {
          this._differ = this._differs.find(v).create(null);
        }
      },
      enumerable: true,
      configurable: true
    });
    NgStyle.prototype.ngDoCheck = function() {
      if (this._differ) {
        var changes = this._differ.diff(this._ngStyle);
        if (changes) {
          this._applyChanges(changes);
        }
      }
    };
    NgStyle.prototype._applyChanges = function(changes) {
      var _this = this;
      changes.forEachRemovedItem(function(record) {
        return _this._setStyle(record.key, null);
      });
      changes.forEachAddedItem(function(record) {
        return _this._setStyle(record.key, record.currentValue);
      });
      changes.forEachChangedItem(function(record) {
        return _this._setStyle(record.key, record.currentValue);
      });
    };
    NgStyle.prototype._setStyle = function(nameAndUnit, value) {
      var _a = nameAndUnit.split('.'),
          name = _a[0],
          unit = _a[1];
      value = value && unit ? "" + value + unit : value;
      this._renderer.setElementStyle(this._ngEl.nativeElement, name, value);
    };
    NgStyle.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngStyle]'}]
    }];
    NgStyle.ctorParameters = function() {
      return [{type: _angular_core.KeyValueDiffers}, {type: _angular_core.ElementRef}, {type: _angular_core.Renderer}];
    };
    NgStyle.propDecorators = {'ngStyle': [{type: _angular_core.Input}]};
    return NgStyle;
  }());
  var NgTemplateOutlet = (function() {
    function NgTemplateOutlet(_viewContainerRef) {
      this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
      set: function(context) {
        this._context = context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
      set: function(templateRef) {
        this._templateRef = templateRef;
      },
      enumerable: true,
      configurable: true
    });
    NgTemplateOutlet.prototype.ngOnChanges = function(changes) {
      if (this._viewRef) {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
      }
      if (this._templateRef) {
        this._viewRef = this._viewContainerRef.createEmbeddedView(this._templateRef, this._context);
      }
    };
    NgTemplateOutlet.decorators = [{
      type: _angular_core.Directive,
      args: [{selector: '[ngTemplateOutlet]'}]
    }];
    NgTemplateOutlet.ctorParameters = function() {
      return [{type: _angular_core.ViewContainerRef}];
    };
    NgTemplateOutlet.propDecorators = {
      'ngOutletContext': [{type: _angular_core.Input}],
      'ngTemplateOutlet': [{type: _angular_core.Input}]
    };
    return NgTemplateOutlet;
  }());
  var COMMON_DIRECTIVES = [NgClass, NgFor, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase];
  var isPromise = _angular_core.__core_private__.isPromise;
  var __extends$4 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var BaseError = (function(_super) {
    __extends$4(BaseError, _super);
    function BaseError(message) {
      _super.call(this, message);
      var nativeError = new Error(message);
      this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
      get: function() {
        return this._nativeError.message;
      },
      set: function(message) {
        this._nativeError.message = message;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
      get: function() {
        return this._nativeError.name;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
      get: function() {
        return ((this._nativeError)).stack;
      },
      set: function(value) {
        ((this._nativeError)).stack = value;
      },
      enumerable: true,
      configurable: true
    });
    BaseError.prototype.toString = function() {
      return this._nativeError.toString();
    };
    return BaseError;
  }(Error));
  var WrappedError = (function(_super) {
    __extends$4(WrappedError, _super);
    function WrappedError(message, error) {
      _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
      this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
      get: function() {
        return (((this.originalError instanceof Error ? this.originalError : this._nativeError))).stack;
      },
      enumerable: true,
      configurable: true
    });
    return WrappedError;
  }(BaseError));
  var __extends$3 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var InvalidPipeArgumentError = (function(_super) {
    __extends$3(InvalidPipeArgumentError, _super);
    function InvalidPipeArgumentError(type, value) {
      _super.call(this, "Invalid argument '" + value + "' for pipe '" + stringify(type) + "'");
    }
    return InvalidPipeArgumentError;
  }(BaseError));
  var ObservableStrategy = (function() {
    function ObservableStrategy() {}
    ObservableStrategy.prototype.createSubscription = function(async, updateLatestValue) {
      return async.subscribe({
        next: updateLatestValue,
        error: function(e) {
          throw e;
        }
      });
    };
    ObservableStrategy.prototype.dispose = function(subscription) {
      subscription.unsubscribe();
    };
    ObservableStrategy.prototype.onDestroy = function(subscription) {
      subscription.unsubscribe();
    };
    return ObservableStrategy;
  }());
  var PromiseStrategy = (function() {
    function PromiseStrategy() {}
    PromiseStrategy.prototype.createSubscription = function(async, updateLatestValue) {
      return async.then(updateLatestValue, function(e) {
        throw e;
      });
    };
    PromiseStrategy.prototype.dispose = function(subscription) {};
    PromiseStrategy.prototype.onDestroy = function(subscription) {};
    return PromiseStrategy;
  }());
  var _promiseStrategy = new PromiseStrategy();
  var _observableStrategy = new ObservableStrategy();
  var AsyncPipe = (function() {
    function AsyncPipe(_ref) {
      this._ref = _ref;
      this._latestValue = null;
      this._latestReturnedValue = null;
      this._subscription = null;
      this._obj = null;
      this._strategy = null;
    }
    AsyncPipe.prototype.ngOnDestroy = function() {
      if (this._subscription) {
        this._dispose();
      }
    };
    AsyncPipe.prototype.transform = function(obj) {
      if (!this._obj) {
        if (obj) {
          this._subscribe(obj);
        }
        this._latestReturnedValue = this._latestValue;
        return this._latestValue;
      }
      if (obj !== this._obj) {
        this._dispose();
        return this.transform(obj);
      }
      if (this._latestValue === this._latestReturnedValue) {
        return this._latestReturnedValue;
      }
      this._latestReturnedValue = this._latestValue;
      return _angular_core.WrappedValue.wrap(this._latestValue);
    };
    AsyncPipe.prototype._subscribe = function(obj) {
      var _this = this;
      this._obj = obj;
      this._strategy = this._selectStrategy(obj);
      this._subscription = this._strategy.createSubscription(obj, function(value) {
        return _this._updateLatestValue(obj, value);
      });
    };
    AsyncPipe.prototype._selectStrategy = function(obj) {
      if (isPromise(obj)) {
        return _promiseStrategy;
      }
      if (((obj)).subscribe) {
        return _observableStrategy;
      }
      throw new InvalidPipeArgumentError(AsyncPipe, obj);
    };
    AsyncPipe.prototype._dispose = function() {
      this._strategy.dispose(this._subscription);
      this._latestValue = null;
      this._latestReturnedValue = null;
      this._subscription = null;
      this._obj = null;
    };
    AsyncPipe.prototype._updateLatestValue = function(async, value) {
      if (async === this._obj) {
        this._latestValue = value;
        this._ref.markForCheck();
      }
    };
    AsyncPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'async',
        pure: false
      }]
    }];
    AsyncPipe.ctorParameters = function() {
      return [{type: _angular_core.ChangeDetectorRef}];
    };
    return AsyncPipe;
  }());
  var NumberFormatStyle = {};
  NumberFormatStyle.Decimal = 0;
  NumberFormatStyle.Percent = 1;
  NumberFormatStyle.Currency = 2;
  NumberFormatStyle[NumberFormatStyle.Decimal] = "Decimal";
  NumberFormatStyle[NumberFormatStyle.Percent] = "Percent";
  NumberFormatStyle[NumberFormatStyle.Currency] = "Currency";
  var NumberFormatter = (function() {
    function NumberFormatter() {}
    NumberFormatter.format = function(num, locale, style, _a) {
      var _b = _a === void 0 ? {} : _a,
          minimumIntegerDigits = _b.minimumIntegerDigits,
          minimumFractionDigits = _b.minimumFractionDigits,
          maximumFractionDigits = _b.maximumFractionDigits,
          currency = _b.currency,
          _c = _b.currencyAsSymbol,
          currencyAsSymbol = _c === void 0 ? false : _c;
      var options = {
        minimumIntegerDigits: minimumIntegerDigits,
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
        style: NumberFormatStyle[style].toLowerCase()
      };
      if (style == NumberFormatStyle.Currency) {
        options.currency = currency;
        options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
      }
      return new Intl.NumberFormat(locale, options).format(num);
    };
    return NumberFormatter;
  }());
  var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
  var PATTERN_ALIASES = {
    'yMMMdjms': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1), digitCondition('hour', 1), digitCondition('minute', 1), digitCondition('second', 1)])),
    'yMdjm': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1), digitCondition('hour', 1), digitCondition('minute', 1)])),
    'yMMMMEEEEd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4), digitCondition('day', 1)])),
    'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
    'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
    'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
    'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
    'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
  };
  var DATE_FORMATS = {
    'yyyy': datePartGetterFactory(digitCondition('year', 4)),
    'yy': datePartGetterFactory(digitCondition('year', 2)),
    'y': datePartGetterFactory(digitCondition('year', 1)),
    'MMMM': datePartGetterFactory(nameCondition('month', 4)),
    'MMM': datePartGetterFactory(nameCondition('month', 3)),
    'MM': datePartGetterFactory(digitCondition('month', 2)),
    'M': datePartGetterFactory(digitCondition('month', 1)),
    'LLLL': datePartGetterFactory(nameCondition('month', 4)),
    'L': datePartGetterFactory(nameCondition('month', 1)),
    'dd': datePartGetterFactory(digitCondition('day', 2)),
    'd': datePartGetterFactory(digitCondition('day', 1)),
    'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
    'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
    'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
    'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'jj': datePartGetterFactory(digitCondition('hour', 2)),
    'j': datePartGetterFactory(digitCondition('hour', 1)),
    'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
    'm': datePartGetterFactory(digitCondition('minute', 1)),
    'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
    's': datePartGetterFactory(digitCondition('second', 1)),
    'sss': datePartGetterFactory(digitCondition('second', 3)),
    'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
    'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
    'EE': datePartGetterFactory(nameCondition('weekday', 2)),
    'E': datePartGetterFactory(nameCondition('weekday', 1)),
    'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'Z': timeZoneGetter('short'),
    'z': timeZoneGetter('long'),
    'ww': datePartGetterFactory({}),
    'w': datePartGetterFactory({}),
    'G': datePartGetterFactory(nameCondition('era', 1)),
    'GG': datePartGetterFactory(nameCondition('era', 2)),
    'GGG': datePartGetterFactory(nameCondition('era', 3)),
    'GGGG': datePartGetterFactory(nameCondition('era', 4))
  };
  function digitModifier(inner) {
    return function(date, locale) {
      var result = inner(date, locale);
      return result.length == 1 ? '0' + result : result;
    };
  }
  function hourClockExtractor(inner) {
    return function(date, locale) {
      return inner(date, locale).split(' ')[1];
    };
  }
  function hourExtractor(inner) {
    return function(date, locale) {
      return inner(date, locale).split(' ')[0];
    };
  }
  function intlDateFormat(date, locale, options) {
    return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
  }
  function timeZoneGetter(timezone) {
    var options = {
      hour: '2-digit',
      hour12: false,
      timeZoneName: timezone
    };
    return function(date, locale) {
      var result = intlDateFormat(date, locale, options);
      return result ? result.substring(3) : '';
    };
  }
  function hour12Modify(options, value) {
    options.hour12 = value;
    return options;
  }
  function digitCondition(prop, len) {
    var result = {};
    result[prop] = len === 2 ? '2-digit' : 'numeric';
    return result;
  }
  function nameCondition(prop, len) {
    var result = {};
    if (len < 4) {
      result[prop] = len > 1 ? 'short' : 'narrow';
    } else {
      result[prop] = 'long';
    }
    return result;
  }
  function combine(options) {
    return (_a = ((Object))).assign.apply(_a, [{}].concat(options));
    var _a;
  }
  function datePartGetterFactory(ret) {
    return function(date, locale) {
      return intlDateFormat(date, locale, ret);
    };
  }
  var DATE_FORMATTER_CACHE = new Map();
  function dateFormatter(format, date, locale) {
    var fn = PATTERN_ALIASES[format];
    if (fn)
      return fn(date, locale);
    var cacheKey = format;
    var parts = DATE_FORMATTER_CACHE.get(cacheKey);
    if (!parts) {
      parts = [];
      var match = void 0;
      DATE_FORMATS_SPLIT.exec(format);
      while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
          parts = parts.concat(match.slice(1));
          format = parts.pop();
        } else {
          parts.push(format);
          format = null;
        }
      }
      DATE_FORMATTER_CACHE.set(cacheKey, parts);
    }
    return parts.reduce(function(text, part) {
      var fn = DATE_FORMATS[part];
      return text + (fn ? fn(date, locale) : partToTime(part));
    }, '');
  }
  function partToTime(part) {
    return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
  }
  var DateFormatter = (function() {
    function DateFormatter() {}
    DateFormatter.format = function(date, locale, pattern) {
      return dateFormatter(pattern, date, locale);
    };
    return DateFormatter;
  }());
  var DatePipe = (function() {
    function DatePipe(_locale) {
      this._locale = _locale;
    }
    DatePipe.prototype.transform = function(value, pattern) {
      if (pattern === void 0) {
        pattern = 'mediumDate';
      }
      var date;
      if (isBlank$1(value))
        return null;
      if (typeof value === 'string') {
        value = value.trim();
      }
      if (isDate(value)) {
        date = value;
      } else if (NumberWrapper.isNumeric(value)) {
        date = new Date(parseFloat(value));
      } else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
        var _a = value.split('-').map(function(val) {
          return parseInt(val, 10);
        }),
            y = _a[0],
            m = _a[1],
            d = _a[2];
        date = new Date(y, m - 1, d);
      } else {
        date = new Date(value);
      }
      if (!isDate(date)) {
        throw new InvalidPipeArgumentError(DatePipe, value);
      }
      return DateFormatter.format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
    };
    DatePipe._ALIASES = {
      'medium': 'yMMMdjms',
      'short': 'yMdjm',
      'fullDate': 'yMMMMEEEEd',
      'longDate': 'yMMMMd',
      'mediumDate': 'yMMMd',
      'shortDate': 'yMd',
      'mediumTime': 'jms',
      'shortTime': 'jm'
    };
    DatePipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'date',
        pure: true
      }]
    }];
    DatePipe.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Inject,
          args: [_angular_core.LOCALE_ID]
        }]
      }];
    };
    return DatePipe;
  }());
  function isBlank$1(obj) {
    return obj == null || obj === '';
  }
  var _INTERPOLATION_REGEXP = /#/g;
  var I18nPluralPipe = (function() {
    function I18nPluralPipe(_localization) {
      this._localization = _localization;
    }
    I18nPluralPipe.prototype.transform = function(value, pluralMap) {
      if (isBlank(value))
        return '';
      if (typeof pluralMap !== 'object' || pluralMap === null) {
        throw new InvalidPipeArgumentError(I18nPluralPipe, pluralMap);
      }
      var key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
      return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    };
    I18nPluralPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'i18nPlural',
        pure: true
      }]
    }];
    I18nPluralPipe.ctorParameters = function() {
      return [{type: NgLocalization}];
    };
    return I18nPluralPipe;
  }());
  var I18nSelectPipe = (function() {
    function I18nSelectPipe() {}
    I18nSelectPipe.prototype.transform = function(value, mapping) {
      if (value == null)
        return '';
      if (typeof mapping !== 'object' || typeof value !== 'string') {
        throw new InvalidPipeArgumentError(I18nSelectPipe, mapping);
      }
      if (mapping.hasOwnProperty(value)) {
        return mapping[value];
      }
      if (mapping.hasOwnProperty('other')) {
        return mapping['other'];
      }
      return '';
    };
    I18nSelectPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'i18nSelect',
        pure: true
      }]
    }];
    I18nSelectPipe.ctorParameters = function() {
      return [];
    };
    return I18nSelectPipe;
  }());
  var JsonPipe = (function() {
    function JsonPipe() {}
    JsonPipe.prototype.transform = function(value) {
      return JSON.stringify(value, null, 2);
    };
    JsonPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'json',
        pure: false
      }]
    }];
    JsonPipe.ctorParameters = function() {
      return [];
    };
    return JsonPipe;
  }());
  var LowerCasePipe = (function() {
    function LowerCasePipe() {}
    LowerCasePipe.prototype.transform = function(value) {
      if (isBlank(value))
        return value;
      if (typeof value !== 'string') {
        throw new InvalidPipeArgumentError(LowerCasePipe, value);
      }
      return value.toLowerCase();
    };
    LowerCasePipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{name: 'lowercase'}]
    }];
    LowerCasePipe.ctorParameters = function() {
      return [];
    };
    return LowerCasePipe;
  }());
  var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
  function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
    if (currency === void 0) {
      currency = null;
    }
    if (currencyAsSymbol === void 0) {
      currencyAsSymbol = false;
    }
    if (isBlank(value))
      return null;
    value = typeof value === 'string' && NumberWrapper.isNumeric(value) ? +value : value;
    if (typeof value !== 'number') {
      throw new InvalidPipeArgumentError(pipe, value);
    }
    var minInt;
    var minFraction;
    var maxFraction;
    if (style !== NumberFormatStyle.Currency) {
      minInt = 1;
      minFraction = 0;
      maxFraction = 3;
    }
    if (digits) {
      var parts = digits.match(_NUMBER_FORMAT_REGEXP);
      if (parts === null) {
        throw new Error(digits + " is not a valid digit info for number pipes");
      }
      if (isPresent(parts[1])) {
        minInt = NumberWrapper.parseIntAutoRadix(parts[1]);
      }
      if (isPresent(parts[3])) {
        minFraction = NumberWrapper.parseIntAutoRadix(parts[3]);
      }
      if (isPresent(parts[5])) {
        maxFraction = NumberWrapper.parseIntAutoRadix(parts[5]);
      }
    }
    return NumberFormatter.format((value), locale, style, {
      minimumIntegerDigits: minInt,
      minimumFractionDigits: minFraction,
      maximumFractionDigits: maxFraction,
      currency: currency,
      currencyAsSymbol: currencyAsSymbol
    });
  }
  var DecimalPipe = (function() {
    function DecimalPipe(_locale) {
      this._locale = _locale;
    }
    DecimalPipe.prototype.transform = function(value, digits) {
      if (digits === void 0) {
        digits = null;
      }
      return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
    };
    DecimalPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{name: 'number'}]
    }];
    DecimalPipe.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Inject,
          args: [_angular_core.LOCALE_ID]
        }]
      }];
    };
    return DecimalPipe;
  }());
  var PercentPipe = (function() {
    function PercentPipe(_locale) {
      this._locale = _locale;
    }
    PercentPipe.prototype.transform = function(value, digits) {
      if (digits === void 0) {
        digits = null;
      }
      return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
    };
    PercentPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{name: 'percent'}]
    }];
    PercentPipe.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Inject,
          args: [_angular_core.LOCALE_ID]
        }]
      }];
    };
    return PercentPipe;
  }());
  var CurrencyPipe = (function() {
    function CurrencyPipe(_locale) {
      this._locale = _locale;
    }
    CurrencyPipe.prototype.transform = function(value, currencyCode, symbolDisplay, digits) {
      if (currencyCode === void 0) {
        currencyCode = 'USD';
      }
      if (symbolDisplay === void 0) {
        symbolDisplay = false;
      }
      if (digits === void 0) {
        digits = null;
      }
      return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    };
    CurrencyPipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{name: 'currency'}]
    }];
    CurrencyPipe.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core.Inject,
          args: [_angular_core.LOCALE_ID]
        }]
      }];
    };
    return CurrencyPipe;
  }());
  var SlicePipe = (function() {
    function SlicePipe() {}
    SlicePipe.prototype.transform = function(value, start, end) {
      if (isBlank(value))
        return value;
      if (!this.supports(value)) {
        throw new InvalidPipeArgumentError(SlicePipe, value);
      }
      return value.slice(start, end);
    };
    SlicePipe.prototype.supports = function(obj) {
      return typeof obj === 'string' || Array.isArray(obj);
    };
    SlicePipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{
        name: 'slice',
        pure: false
      }]
    }];
    SlicePipe.ctorParameters = function() {
      return [];
    };
    return SlicePipe;
  }());
  var UpperCasePipe = (function() {
    function UpperCasePipe() {}
    UpperCasePipe.prototype.transform = function(value) {
      if (isBlank(value))
        return value;
      if (typeof value !== 'string') {
        throw new InvalidPipeArgumentError(UpperCasePipe, value);
      }
      return value.toUpperCase();
    };
    UpperCasePipe.decorators = [{
      type: _angular_core.Pipe,
      args: [{name: 'uppercase'}]
    }];
    UpperCasePipe.ctorParameters = function() {
      return [];
    };
    return UpperCasePipe;
  }());
  var COMMON_PIPES = [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe];
  var CommonModule = (function() {
    function CommonModule() {}
    CommonModule.decorators = [{
      type: _angular_core.NgModule,
      args: [{
        declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
        exports: [COMMON_DIRECTIVES, COMMON_PIPES],
        providers: [{
          provide: NgLocalization,
          useClass: NgLocaleLocalization
        }]
      }]
    }];
    CommonModule.ctorParameters = function() {
      return [];
    };
    return CommonModule;
  }());
  var VERSION = new _angular_core.Version('2.4.1');
  exports.NgLocalization = NgLocalization;
  exports.CommonModule = CommonModule;
  exports.NgClass = NgClass;
  exports.NgFor = NgFor;
  exports.NgIf = NgIf;
  exports.NgPlural = NgPlural;
  exports.NgPluralCase = NgPluralCase;
  exports.NgStyle = NgStyle;
  exports.NgSwitch = NgSwitch;
  exports.NgSwitchCase = NgSwitchCase;
  exports.NgSwitchDefault = NgSwitchDefault;
  exports.NgTemplateOutlet = NgTemplateOutlet;
  exports.AsyncPipe = AsyncPipe;
  exports.DatePipe = DatePipe;
  exports.I18nPluralPipe = I18nPluralPipe;
  exports.I18nSelectPipe = I18nSelectPipe;
  exports.JsonPipe = JsonPipe;
  exports.LowerCasePipe = LowerCasePipe;
  exports.CurrencyPipe = CurrencyPipe;
  exports.DecimalPipe = DecimalPipe;
  exports.PercentPipe = PercentPipe;
  exports.SlicePipe = SlicePipe;
  exports.UpperCasePipe = UpperCasePipe;
  exports.VERSION = VERSION;
  exports.Version = _angular_core.Version;
  exports.PlatformLocation = PlatformLocation;
  exports.LocationStrategy = LocationStrategy;
  exports.APP_BASE_HREF = APP_BASE_HREF;
  exports.HashLocationStrategy = HashLocationStrategy;
  exports.PathLocationStrategy = PathLocationStrategy;
  exports.Location = Location;
}));

})();
(function() {
var define = System.amdDefine;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) : typeof define === 'function' && define.amd ? define("@angular/platform-browser/bundles/platform-browser.umd.js", ["exports", "@angular/common", "@angular/core"], factory) : (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}), global.ng.common, global.ng.core));
}(this, function(exports, _angular_common, core) {
  'use strict';
  var DebugDomRootRenderer = core.__core_private__.DebugDomRootRenderer;
  var NoOpAnimationPlayer = core.__core_private__.NoOpAnimationPlayer;
  var NoOpAnimationDriver = (function() {
    function NoOpAnimationDriver() {}
    NoOpAnimationDriver.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
      if (previousPlayers === void 0) {
        previousPlayers = [];
      }
      return new NoOpAnimationPlayer();
    };
    return NoOpAnimationDriver;
  }());
  var AnimationDriver = (function() {
    function AnimationDriver() {}
    AnimationDriver.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {};
    AnimationDriver.NOOP = new NoOpAnimationDriver();
    return AnimationDriver;
  }());
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = (self);
    } else {
      globalScope = (global);
    }
  } else {
    globalScope = (window);
  }
  var global$1 = globalScope;
  global$1.assert = function assert(condition) {};
  function isPresent(obj) {
    return obj != null;
  }
  function isBlank(obj) {
    return obj == null;
  }
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token == null) {
      return '' + token;
    }
    if (token.overriddenName) {
      return "" + token.overriddenName;
    }
    if (token.name) {
      return "" + token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
  }
  function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
      var name_1 = parts.shift();
      if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
        obj = obj[name_1];
      } else {
        obj = obj[name_1] = {};
      }
    }
    if (obj === undefined || obj === null) {
      obj = {};
    }
    obj[parts.shift()] = value;
  }
  var _DOM = null;
  function getDOM() {
    return _DOM;
  }
  function setRootDomAdapter(adapter) {
    if (!_DOM) {
      _DOM = adapter;
    }
  }
  var DomAdapter = (function() {
    function DomAdapter() {
      this.resourceLoaderType = null;
    }
    DomAdapter.prototype.hasProperty = function(element, name) {};
    DomAdapter.prototype.setProperty = function(el, name, value) {};
    DomAdapter.prototype.getProperty = function(el, name) {};
    DomAdapter.prototype.invoke = function(el, methodName, args) {};
    DomAdapter.prototype.logError = function(error) {};
    DomAdapter.prototype.log = function(error) {};
    DomAdapter.prototype.logGroup = function(error) {};
    DomAdapter.prototype.logGroupEnd = function() {};
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
      get: function() {
        return this._attrToPropMap;
      },
      set: function(value) {
        this._attrToPropMap = value;
      },
      enumerable: true,
      configurable: true
    });
    ;
    ;
    DomAdapter.prototype.parse = function(templateHtml) {};
    DomAdapter.prototype.query = function(selector) {};
    DomAdapter.prototype.querySelector = function(el, selector) {};
    DomAdapter.prototype.querySelectorAll = function(el, selector) {};
    DomAdapter.prototype.on = function(el, evt, listener) {};
    DomAdapter.prototype.onAndCancel = function(el, evt, listener) {};
    DomAdapter.prototype.dispatchEvent = function(el, evt) {};
    DomAdapter.prototype.createMouseEvent = function(eventType) {};
    DomAdapter.prototype.createEvent = function(eventType) {};
    DomAdapter.prototype.preventDefault = function(evt) {};
    DomAdapter.prototype.isPrevented = function(evt) {};
    DomAdapter.prototype.getInnerHTML = function(el) {};
    DomAdapter.prototype.getTemplateContent = function(el) {};
    DomAdapter.prototype.getOuterHTML = function(el) {};
    DomAdapter.prototype.nodeName = function(node) {};
    DomAdapter.prototype.nodeValue = function(node) {};
    DomAdapter.prototype.type = function(node) {};
    DomAdapter.prototype.content = function(node) {};
    DomAdapter.prototype.firstChild = function(el) {};
    DomAdapter.prototype.nextSibling = function(el) {};
    DomAdapter.prototype.parentElement = function(el) {};
    DomAdapter.prototype.childNodes = function(el) {};
    DomAdapter.prototype.childNodesAsList = function(el) {};
    DomAdapter.prototype.clearNodes = function(el) {};
    DomAdapter.prototype.appendChild = function(el, node) {};
    DomAdapter.prototype.removeChild = function(el, node) {};
    DomAdapter.prototype.replaceChild = function(el, newNode, oldNode) {};
    DomAdapter.prototype.remove = function(el) {};
    DomAdapter.prototype.insertBefore = function(el, node) {};
    DomAdapter.prototype.insertAllBefore = function(el, nodes) {};
    DomAdapter.prototype.insertAfter = function(el, node) {};
    DomAdapter.prototype.setInnerHTML = function(el, value) {};
    DomAdapter.prototype.getText = function(el) {};
    DomAdapter.prototype.setText = function(el, value) {};
    DomAdapter.prototype.getValue = function(el) {};
    DomAdapter.prototype.setValue = function(el, value) {};
    DomAdapter.prototype.getChecked = function(el) {};
    DomAdapter.prototype.setChecked = function(el, value) {};
    DomAdapter.prototype.createComment = function(text) {};
    DomAdapter.prototype.createTemplate = function(html) {};
    DomAdapter.prototype.createElement = function(tagName, doc) {};
    DomAdapter.prototype.createElementNS = function(ns, tagName, doc) {};
    DomAdapter.prototype.createTextNode = function(text, doc) {};
    DomAdapter.prototype.createScriptTag = function(attrName, attrValue, doc) {};
    DomAdapter.prototype.createStyleElement = function(css, doc) {};
    DomAdapter.prototype.createShadowRoot = function(el) {};
    DomAdapter.prototype.getShadowRoot = function(el) {};
    DomAdapter.prototype.getHost = function(el) {};
    DomAdapter.prototype.getDistributedNodes = function(el) {};
    DomAdapter.prototype.clone = function(node) {};
    DomAdapter.prototype.getElementsByClassName = function(element, name) {};
    DomAdapter.prototype.getElementsByTagName = function(element, name) {};
    DomAdapter.prototype.classList = function(element) {};
    DomAdapter.prototype.addClass = function(element, className) {};
    DomAdapter.prototype.removeClass = function(element, className) {};
    DomAdapter.prototype.hasClass = function(element, className) {};
    DomAdapter.prototype.setStyle = function(element, styleName, styleValue) {};
    DomAdapter.prototype.removeStyle = function(element, styleName) {};
    DomAdapter.prototype.getStyle = function(element, styleName) {};
    DomAdapter.prototype.hasStyle = function(element, styleName, styleValue) {};
    DomAdapter.prototype.tagName = function(element) {};
    DomAdapter.prototype.attributeMap = function(element) {};
    DomAdapter.prototype.hasAttribute = function(element, attribute) {};
    DomAdapter.prototype.hasAttributeNS = function(element, ns, attribute) {};
    DomAdapter.prototype.getAttribute = function(element, attribute) {};
    DomAdapter.prototype.getAttributeNS = function(element, ns, attribute) {};
    DomAdapter.prototype.setAttribute = function(element, name, value) {};
    DomAdapter.prototype.setAttributeNS = function(element, ns, name, value) {};
    DomAdapter.prototype.removeAttribute = function(element, attribute) {};
    DomAdapter.prototype.removeAttributeNS = function(element, ns, attribute) {};
    DomAdapter.prototype.templateAwareRoot = function(el) {};
    DomAdapter.prototype.createHtmlDocument = function() {};
    DomAdapter.prototype.defaultDoc = function() {};
    DomAdapter.prototype.getBoundingClientRect = function(el) {};
    DomAdapter.prototype.getTitle = function() {};
    DomAdapter.prototype.setTitle = function(newTitle) {};
    DomAdapter.prototype.elementMatches = function(n, selector) {};
    DomAdapter.prototype.isTemplateElement = function(el) {};
    DomAdapter.prototype.isTextNode = function(node) {};
    DomAdapter.prototype.isCommentNode = function(node) {};
    DomAdapter.prototype.isElementNode = function(node) {};
    DomAdapter.prototype.hasShadowRoot = function(node) {};
    DomAdapter.prototype.isShadowRoot = function(node) {};
    DomAdapter.prototype.importIntoDoc = function(node) {};
    DomAdapter.prototype.adoptNode = function(node) {};
    DomAdapter.prototype.getHref = function(element) {};
    DomAdapter.prototype.getEventKey = function(event) {};
    DomAdapter.prototype.resolveAndSetHref = function(element, baseUrl, href) {};
    DomAdapter.prototype.supportsDOMEvents = function() {};
    DomAdapter.prototype.supportsNativeShadowDOM = function() {};
    DomAdapter.prototype.getGlobalEventTarget = function(target) {};
    DomAdapter.prototype.getHistory = function() {};
    DomAdapter.prototype.getLocation = function() {};
    DomAdapter.prototype.getBaseHref = function() {};
    DomAdapter.prototype.resetBaseElement = function() {};
    DomAdapter.prototype.getUserAgent = function() {};
    DomAdapter.prototype.setData = function(element, name, value) {};
    DomAdapter.prototype.getComputedStyle = function(element) {};
    DomAdapter.prototype.getData = function(element, name) {};
    DomAdapter.prototype.setGlobalVar = function(name, value) {};
    DomAdapter.prototype.supportsWebAnimation = function() {};
    DomAdapter.prototype.performanceNow = function() {};
    DomAdapter.prototype.getAnimationPrefix = function() {};
    DomAdapter.prototype.getTransitionEnd = function() {};
    DomAdapter.prototype.supportsAnimation = function() {};
    DomAdapter.prototype.supportsCookies = function() {};
    DomAdapter.prototype.getCookie = function(name) {};
    DomAdapter.prototype.setCookie = function(name, value) {};
    return DomAdapter;
  }());
  var WebAnimationsPlayer = (function() {
    function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
      var _this = this;
      if (previousPlayers === void 0) {
        previousPlayers = [];
      }
      this.element = element;
      this.keyframes = keyframes;
      this.options = options;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._initialized = false;
      this._finished = false;
      this._started = false;
      this._destroyed = false;
      this.parentPlayer = null;
      this._duration = options['duration'];
      this.previousStyles = {};
      previousPlayers.forEach(function(player) {
        var styles = player._captureStyles();
        Object.keys(styles).forEach(function(prop) {
          return _this.previousStyles[prop] = styles[prop];
        });
      });
    }
    WebAnimationsPlayer.prototype._onFinish = function() {
      if (!this._finished) {
        this._finished = true;
        this._onDoneFns.forEach(function(fn) {
          return fn();
        });
        this._onDoneFns = [];
      }
    };
    WebAnimationsPlayer.prototype.init = function() {
      var _this = this;
      if (this._initialized)
        return;
      this._initialized = true;
      var keyframes = this.keyframes.map(function(styles) {
        var formattedKeyframe = {};
        Object.keys(styles).forEach(function(prop, index) {
          var value = styles[prop];
          if (value == core.AUTO_STYLE) {
            value = _computeStyle(_this.element, prop);
          }
          if (value != undefined) {
            formattedKeyframe[prop] = value;
          }
        });
        return formattedKeyframe;
      });
      var previousStyleProps = Object.keys(this.previousStyles);
      if (previousStyleProps.length) {
        var startingKeyframe_1 = findStartingKeyframe(keyframes);
        previousStyleProps.forEach(function(prop) {
          if (isPresent(startingKeyframe_1[prop])) {
            startingKeyframe_1[prop] = _this.previousStyles[prop];
          }
        });
      }
      this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
      this._finalKeyframe = _copyKeyframeStyles(keyframes[keyframes.length - 1]);
      this._resetDomPlayerState();
      this._player.addEventListener('finish', function() {
        return _this._onFinish();
      });
    };
    WebAnimationsPlayer.prototype._triggerWebAnimation = function(element, keyframes, options) {
      return (element.animate(keyframes, options));
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
      get: function() {
        return this._player;
      },
      enumerable: true,
      configurable: true
    });
    WebAnimationsPlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    WebAnimationsPlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    WebAnimationsPlayer.prototype.play = function() {
      this.init();
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
        this._started = true;
      }
      this._player.play();
    };
    WebAnimationsPlayer.prototype.pause = function() {
      this.init();
      this._player.pause();
    };
    WebAnimationsPlayer.prototype.finish = function() {
      this.init();
      this._onFinish();
      this._player.finish();
    };
    WebAnimationsPlayer.prototype.reset = function() {
      this._resetDomPlayerState();
      this._destroyed = false;
      this._finished = false;
      this._started = false;
    };
    WebAnimationsPlayer.prototype._resetDomPlayerState = function() {
      if (this._player) {
        this._player.cancel();
      }
    };
    WebAnimationsPlayer.prototype.restart = function() {
      this.reset();
      this.play();
    };
    WebAnimationsPlayer.prototype.hasStarted = function() {
      return this._started;
    };
    WebAnimationsPlayer.prototype.destroy = function() {
      if (!this._destroyed) {
        this._resetDomPlayerState();
        this._onFinish();
        this._destroyed = true;
      }
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
      get: function() {
        return this._duration;
      },
      enumerable: true,
      configurable: true
    });
    WebAnimationsPlayer.prototype.setPosition = function(p) {
      this._player.currentTime = p * this.totalTime;
    };
    WebAnimationsPlayer.prototype.getPosition = function() {
      return this._player.currentTime / this.totalTime;
    };
    WebAnimationsPlayer.prototype._captureStyles = function() {
      var _this = this;
      var styles = {};
      if (this.hasStarted()) {
        Object.keys(this._finalKeyframe).forEach(function(prop) {
          if (prop != 'offset') {
            styles[prop] = _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
          }
        });
      }
      return styles;
    };
    return WebAnimationsPlayer;
  }());
  function _computeStyle(element, prop) {
    return getDOM().getComputedStyle(element)[prop];
  }
  function _copyKeyframeStyles(styles) {
    var newStyles = {};
    Object.keys(styles).forEach(function(prop) {
      if (prop != 'offset') {
        newStyles[prop] = styles[prop];
      }
    });
    return newStyles;
  }
  function findStartingKeyframe(keyframes) {
    var startingKeyframe = keyframes[0];
    for (var i = 1; i < keyframes.length; i++) {
      var kf = keyframes[i];
      var offset = kf['offset'];
      if (offset !== 0)
        break;
      startingKeyframe = kf;
    }
    return startingKeyframe;
  }
  var WebAnimationsDriver = (function() {
    function WebAnimationsDriver() {}
    WebAnimationsDriver.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
      if (previousPlayers === void 0) {
        previousPlayers = [];
      }
      var formattedSteps = [];
      var startingStyleLookup = {};
      if (isPresent(startingStyles) && startingStyles.styles.length > 0) {
        startingStyleLookup = _populateStyles(startingStyles, {});
        startingStyleLookup['offset'] = 0;
        formattedSteps.push(startingStyleLookup);
      }
      keyframes.forEach(function(keyframe) {
        var data = _populateStyles(keyframe.styles, startingStyleLookup);
        data['offset'] = Math.max(0, Math.min(1, keyframe.offset));
        formattedSteps.push(data);
      });
      if (formattedSteps.length == 1) {
        var start = formattedSteps[0];
        start['offset'] = null;
        formattedSteps = [start, start];
      }
      var playerOptions = {
        'duration': duration,
        'delay': delay,
        'fill': 'both'
      };
      if (easing) {
        playerOptions['easing'] = easing;
      }
      previousPlayers = previousPlayers.filter(filterWebAnimationPlayerFn);
      return new WebAnimationsPlayer(element, formattedSteps, playerOptions, (previousPlayers));
    };
    return WebAnimationsDriver;
  }());
  function _populateStyles(styles, defaultStyles) {
    var data = {};
    styles.styles.forEach(function(entry) {
      Object.keys(entry).forEach(function(prop) {
        data[prop] = entry[prop];
      });
    });
    Object.keys(defaultStyles).forEach(function(prop) {
      if (!isPresent(data[prop])) {
        data[prop] = defaultStyles[prop];
      }
    });
    return data;
  }
  function filterWebAnimationPlayerFn(player) {
    return player instanceof WebAnimationsPlayer;
  }
  var __extends$1 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var GenericBrowserDomAdapter = (function(_super) {
    __extends$1(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
      var _this = this;
      _super.call(this);
      this._animationPrefix = null;
      this._transitionEnd = null;
      try {
        var element_1 = this.createElement('div', this.defaultDoc());
        if (isPresent(this.getStyle(element_1, 'animationName'))) {
          this._animationPrefix = '';
        } else {
          var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
          for (var i = 0; i < domPrefixes.length; i++) {
            if (isPresent(this.getStyle(element_1, domPrefixes[i] + 'AnimationName'))) {
              this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
              break;
            }
          }
        }
        var transEndEventNames_1 = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend'
        };
        Object.keys(transEndEventNames_1).forEach(function(key) {
          if (isPresent(_this.getStyle(element_1, key))) {
            _this._transitionEnd = transEndEventNames_1[key];
          }
        });
      } catch (e) {
        this._animationPrefix = null;
        this._transitionEnd = null;
      }
    }
    GenericBrowserDomAdapter.prototype.getDistributedNodes = function(el) {
      return ((el)).getDistributedNodes();
    };
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function(el, baseUrl, href) {
      el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function() {
      return true;
    };
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function() {
      return typeof((this.defaultDoc().body)).createShadowRoot === 'function';
    };
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function() {
      return this._animationPrefix ? this._animationPrefix : '';
    };
    GenericBrowserDomAdapter.prototype.getTransitionEnd = function() {
      return this._transitionEnd ? this._transitionEnd : '';
    };
    GenericBrowserDomAdapter.prototype.supportsAnimation = function() {
      return isPresent(this._animationPrefix) && isPresent(this._transitionEnd);
    };
    return GenericBrowserDomAdapter;
  }(DomAdapter));
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex'
  };
  var DOM_KEY_LOCATION_NUMPAD = 3;
  var _keyMap = {
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
  };
  var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
  };
  var BrowserDomAdapter = (function(_super) {
    __extends(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
      _super.apply(this, arguments);
    }
    BrowserDomAdapter.prototype.parse = function(templateHtml) {
      throw new Error('parse not implemented');
    };
    BrowserDomAdapter.makeCurrent = function() {
      setRootDomAdapter(new BrowserDomAdapter());
    };
    BrowserDomAdapter.prototype.hasProperty = function(element, name) {
      return name in element;
    };
    BrowserDomAdapter.prototype.setProperty = function(el, name, value) {
      ((el))[name] = value;
    };
    BrowserDomAdapter.prototype.getProperty = function(el, name) {
      return ((el))[name];
    };
    BrowserDomAdapter.prototype.invoke = function(el, methodName, args) {
      (_a = ((el)))[methodName].apply(_a, args);
      var _a;
    };
    BrowserDomAdapter.prototype.logError = function(error) {
      if (window.console) {
        if (console.error) {
          console.error(error);
        } else {
          console.log(error);
        }
      }
    };
    BrowserDomAdapter.prototype.log = function(error) {
      if (window.console) {
        window.console.log && window.console.log(error);
      }
    };
    BrowserDomAdapter.prototype.logGroup = function(error) {
      if (window.console) {
        window.console.group && window.console.group(error);
      }
    };
    BrowserDomAdapter.prototype.logGroupEnd = function() {
      if (window.console) {
        window.console.groupEnd && window.console.groupEnd();
      }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
      get: function() {
        return _attrToPropMap;
      },
      enumerable: true,
      configurable: true
    });
    BrowserDomAdapter.prototype.query = function(selector) {
      return document.querySelector(selector);
    };
    BrowserDomAdapter.prototype.querySelector = function(el, selector) {
      return (el.querySelector(selector));
    };
    BrowserDomAdapter.prototype.querySelectorAll = function(el, selector) {
      return el.querySelectorAll(selector);
    };
    BrowserDomAdapter.prototype.on = function(el, evt, listener) {
      el.addEventListener(evt, listener, false);
    };
    BrowserDomAdapter.prototype.onAndCancel = function(el, evt, listener) {
      el.addEventListener(evt, listener, false);
      return function() {
        el.removeEventListener(evt, listener, false);
      };
    };
    BrowserDomAdapter.prototype.dispatchEvent = function(el, evt) {
      el.dispatchEvent(evt);
    };
    BrowserDomAdapter.prototype.createMouseEvent = function(eventType) {
      var evt = document.createEvent('MouseEvent');
      evt.initEvent(eventType, true, true);
      return evt;
    };
    BrowserDomAdapter.prototype.createEvent = function(eventType) {
      var evt = document.createEvent('Event');
      evt.initEvent(eventType, true, true);
      return evt;
    };
    BrowserDomAdapter.prototype.preventDefault = function(evt) {
      evt.preventDefault();
      evt.returnValue = false;
    };
    BrowserDomAdapter.prototype.isPrevented = function(evt) {
      return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
    };
    BrowserDomAdapter.prototype.getInnerHTML = function(el) {
      return el.innerHTML;
    };
    BrowserDomAdapter.prototype.getTemplateContent = function(el) {
      return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
    };
    BrowserDomAdapter.prototype.getOuterHTML = function(el) {
      return el.outerHTML;
    };
    BrowserDomAdapter.prototype.nodeName = function(node) {
      return node.nodeName;
    };
    BrowserDomAdapter.prototype.nodeValue = function(node) {
      return node.nodeValue;
    };
    BrowserDomAdapter.prototype.type = function(node) {
      return node.type;
    };
    BrowserDomAdapter.prototype.content = function(node) {
      if (this.hasProperty(node, 'content')) {
        return ((node)).content;
      } else {
        return node;
      }
    };
    BrowserDomAdapter.prototype.firstChild = function(el) {
      return el.firstChild;
    };
    BrowserDomAdapter.prototype.nextSibling = function(el) {
      return el.nextSibling;
    };
    BrowserDomAdapter.prototype.parentElement = function(el) {
      return el.parentNode;
    };
    BrowserDomAdapter.prototype.childNodes = function(el) {
      return el.childNodes;
    };
    BrowserDomAdapter.prototype.childNodesAsList = function(el) {
      var childNodes = el.childNodes;
      var res = new Array(childNodes.length);
      for (var i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
      }
      return res;
    };
    BrowserDomAdapter.prototype.clearNodes = function(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    };
    BrowserDomAdapter.prototype.appendChild = function(el, node) {
      el.appendChild(node);
    };
    BrowserDomAdapter.prototype.removeChild = function(el, node) {
      el.removeChild(node);
    };
    BrowserDomAdapter.prototype.replaceChild = function(el, newChild, oldChild) {
      el.replaceChild(newChild, oldChild);
    };
    BrowserDomAdapter.prototype.remove = function(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
      return node;
    };
    BrowserDomAdapter.prototype.insertBefore = function(el, node) {
      el.parentNode.insertBefore(node, el);
    };
    BrowserDomAdapter.prototype.insertAllBefore = function(el, nodes) {
      nodes.forEach(function(n) {
        return el.parentNode.insertBefore(n, el);
      });
    };
    BrowserDomAdapter.prototype.insertAfter = function(el, node) {
      el.parentNode.insertBefore(node, el.nextSibling);
    };
    BrowserDomAdapter.prototype.setInnerHTML = function(el, value) {
      el.innerHTML = value;
    };
    BrowserDomAdapter.prototype.getText = function(el) {
      return el.textContent;
    };
    BrowserDomAdapter.prototype.setText = function(el, value) {
      el.textContent = value;
    };
    BrowserDomAdapter.prototype.getValue = function(el) {
      return el.value;
    };
    BrowserDomAdapter.prototype.setValue = function(el, value) {
      el.value = value;
    };
    BrowserDomAdapter.prototype.getChecked = function(el) {
      return el.checked;
    };
    BrowserDomAdapter.prototype.setChecked = function(el, value) {
      el.checked = value;
    };
    BrowserDomAdapter.prototype.createComment = function(text) {
      return document.createComment(text);
    };
    BrowserDomAdapter.prototype.createTemplate = function(html) {
      var t = document.createElement('template');
      t.innerHTML = html;
      return t;
    };
    BrowserDomAdapter.prototype.createElement = function(tagName, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createElement(tagName);
    };
    BrowserDomAdapter.prototype.createElementNS = function(ns, tagName, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createElementNS(ns, tagName);
    };
    BrowserDomAdapter.prototype.createTextNode = function(text, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createTextNode(text);
    };
    BrowserDomAdapter.prototype.createScriptTag = function(attrName, attrValue, doc) {
      if (doc === void 0) {
        doc = document;
      }
      var el = (doc.createElement('SCRIPT'));
      el.setAttribute(attrName, attrValue);
      return el;
    };
    BrowserDomAdapter.prototype.createStyleElement = function(css, doc) {
      if (doc === void 0) {
        doc = document;
      }
      var style = (doc.createElement('style'));
      this.appendChild(style, this.createTextNode(css));
      return style;
    };
    BrowserDomAdapter.prototype.createShadowRoot = function(el) {
      return ((el)).createShadowRoot();
    };
    BrowserDomAdapter.prototype.getShadowRoot = function(el) {
      return ((el)).shadowRoot;
    };
    BrowserDomAdapter.prototype.getHost = function(el) {
      return ((el)).host;
    };
    BrowserDomAdapter.prototype.clone = function(node) {
      return node.cloneNode(true);
    };
    BrowserDomAdapter.prototype.getElementsByClassName = function(element, name) {
      return element.getElementsByClassName(name);
    };
    BrowserDomAdapter.prototype.getElementsByTagName = function(element, name) {
      return element.getElementsByTagName(name);
    };
    BrowserDomAdapter.prototype.classList = function(element) {
      return Array.prototype.slice.call(element.classList, 0);
    };
    BrowserDomAdapter.prototype.addClass = function(element, className) {
      element.classList.add(className);
    };
    BrowserDomAdapter.prototype.removeClass = function(element, className) {
      element.classList.remove(className);
    };
    BrowserDomAdapter.prototype.hasClass = function(element, className) {
      return element.classList.contains(className);
    };
    BrowserDomAdapter.prototype.setStyle = function(element, styleName, styleValue) {
      element.style[styleName] = styleValue;
    };
    BrowserDomAdapter.prototype.removeStyle = function(element, stylename) {
      element.style[stylename] = '';
    };
    BrowserDomAdapter.prototype.getStyle = function(element, stylename) {
      return element.style[stylename];
    };
    BrowserDomAdapter.prototype.hasStyle = function(element, styleName, styleValue) {
      if (styleValue === void 0) {
        styleValue = null;
      }
      var value = this.getStyle(element, styleName) || '';
      return styleValue ? value == styleValue : value.length > 0;
    };
    BrowserDomAdapter.prototype.tagName = function(element) {
      return element.tagName;
    };
    BrowserDomAdapter.prototype.attributeMap = function(element) {
      var res = new Map();
      var elAttrs = element.attributes;
      for (var i = 0; i < elAttrs.length; i++) {
        var attrib = elAttrs[i];
        res.set(attrib.name, attrib.value);
      }
      return res;
    };
    BrowserDomAdapter.prototype.hasAttribute = function(element, attribute) {
      return element.hasAttribute(attribute);
    };
    BrowserDomAdapter.prototype.hasAttributeNS = function(element, ns, attribute) {
      return element.hasAttributeNS(ns, attribute);
    };
    BrowserDomAdapter.prototype.getAttribute = function(element, attribute) {
      return element.getAttribute(attribute);
    };
    BrowserDomAdapter.prototype.getAttributeNS = function(element, ns, name) {
      return element.getAttributeNS(ns, name);
    };
    BrowserDomAdapter.prototype.setAttribute = function(element, name, value) {
      element.setAttribute(name, value);
    };
    BrowserDomAdapter.prototype.setAttributeNS = function(element, ns, name, value) {
      element.setAttributeNS(ns, name, value);
    };
    BrowserDomAdapter.prototype.removeAttribute = function(element, attribute) {
      element.removeAttribute(attribute);
    };
    BrowserDomAdapter.prototype.removeAttributeNS = function(element, ns, name) {
      element.removeAttributeNS(ns, name);
    };
    BrowserDomAdapter.prototype.templateAwareRoot = function(el) {
      return this.isTemplateElement(el) ? this.content(el) : el;
    };
    BrowserDomAdapter.prototype.createHtmlDocument = function() {
      return document.implementation.createHTMLDocument('fakeTitle');
    };
    BrowserDomAdapter.prototype.defaultDoc = function() {
      return document;
    };
    BrowserDomAdapter.prototype.getBoundingClientRect = function(el) {
      try {
        return el.getBoundingClientRect();
      } catch (e) {
        return {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }
    };
    BrowserDomAdapter.prototype.getTitle = function() {
      return document.title;
    };
    BrowserDomAdapter.prototype.setTitle = function(newTitle) {
      document.title = newTitle || '';
    };
    BrowserDomAdapter.prototype.elementMatches = function(n, selector) {
      if (n instanceof HTMLElement) {
        return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
      }
      return false;
    };
    BrowserDomAdapter.prototype.isTemplateElement = function(el) {
      return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
    };
    BrowserDomAdapter.prototype.isTextNode = function(node) {
      return node.nodeType === Node.TEXT_NODE;
    };
    BrowserDomAdapter.prototype.isCommentNode = function(node) {
      return node.nodeType === Node.COMMENT_NODE;
    };
    BrowserDomAdapter.prototype.isElementNode = function(node) {
      return node.nodeType === Node.ELEMENT_NODE;
    };
    BrowserDomAdapter.prototype.hasShadowRoot = function(node) {
      return isPresent(node.shadowRoot) && node instanceof HTMLElement;
    };
    BrowserDomAdapter.prototype.isShadowRoot = function(node) {
      return node instanceof DocumentFragment;
    };
    BrowserDomAdapter.prototype.importIntoDoc = function(node) {
      return document.importNode(this.templateAwareRoot(node), true);
    };
    BrowserDomAdapter.prototype.adoptNode = function(node) {
      return document.adoptNode(node);
    };
    BrowserDomAdapter.prototype.getHref = function(el) {
      return ((el)).href;
    };
    BrowserDomAdapter.prototype.getEventKey = function(event) {
      var key = event.key;
      if (isBlank(key)) {
        key = event.keyIdentifier;
        if (isBlank(key)) {
          return 'Unidentified';
        }
        if (key.startsWith('U+')) {
          key = String.fromCharCode(parseInt(key.substring(2), 16));
          if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
            key = ((_chromeNumKeyPadMap))[key];
          }
        }
      }
      return _keyMap[key] || key;
    };
    BrowserDomAdapter.prototype.getGlobalEventTarget = function(target) {
      if (target === 'window') {
        return window;
      }
      if (target === 'document') {
        return document;
      }
      if (target === 'body') {
        return document.body;
      }
    };
    BrowserDomAdapter.prototype.getHistory = function() {
      return window.history;
    };
    BrowserDomAdapter.prototype.getLocation = function() {
      return window.location;
    };
    BrowserDomAdapter.prototype.getBaseHref = function() {
      var href = getBaseElementHref();
      return isBlank(href) ? null : relativePath(href);
    };
    BrowserDomAdapter.prototype.resetBaseElement = function() {
      baseElement = null;
    };
    BrowserDomAdapter.prototype.getUserAgent = function() {
      return window.navigator.userAgent;
    };
    BrowserDomAdapter.prototype.setData = function(element, name, value) {
      this.setAttribute(element, 'data-' + name, value);
    };
    BrowserDomAdapter.prototype.getData = function(element, name) {
      return this.getAttribute(element, 'data-' + name);
    };
    BrowserDomAdapter.prototype.getComputedStyle = function(element) {
      return getComputedStyle(element);
    };
    BrowserDomAdapter.prototype.setGlobalVar = function(path, value) {
      setValueOnPath(global$1, path, value);
    };
    BrowserDomAdapter.prototype.supportsWebAnimation = function() {
      return typeof((Element)).prototype['animate'] === 'function';
    };
    BrowserDomAdapter.prototype.performanceNow = function() {
      return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    };
    BrowserDomAdapter.prototype.supportsCookies = function() {
      return true;
    };
    BrowserDomAdapter.prototype.getCookie = function(name) {
      return parseCookieValue(document.cookie, name);
    };
    BrowserDomAdapter.prototype.setCookie = function(name, value) {
      document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    };
    return BrowserDomAdapter;
  }(GenericBrowserDomAdapter));
  var baseElement = null;
  function getBaseElementHref() {
    if (!baseElement) {
      baseElement = document.querySelector('base');
      if (!baseElement) {
        return null;
      }
    }
    return baseElement.getAttribute('href');
  }
  var urlParsingNode;
  function relativePath(url) {
    if (!urlParsingNode) {
      urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname;
  }
  function parseCookieValue(cookieStr, name) {
    name = encodeURIComponent(name);
    for (var _i = 0,
        _a = cookieStr.split(';'); _i < _a.length; _i++) {
      var cookie = _a[_i];
      var eqIndex = cookie.indexOf('=');
      var _b = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)],
          cookieName = _b[0],
          cookieValue = _b[1];
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  function supportsState() {
    return !!window.history.pushState;
  }
  var __extends$2 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var BrowserPlatformLocation = (function(_super) {
    __extends$2(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation() {
      _super.call(this);
      this._init();
    }
    BrowserPlatformLocation.prototype._init = function() {
      this._location = getDOM().getLocation();
      this._history = getDOM().getHistory();
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
      get: function() {
        return this._location;
      },
      enumerable: true,
      configurable: true
    });
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function() {
      return getDOM().getBaseHref();
    };
    BrowserPlatformLocation.prototype.onPopState = function(fn) {
      getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
    };
    BrowserPlatformLocation.prototype.onHashChange = function(fn) {
      getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
      get: function() {
        return this._location.pathname;
      },
      set: function(newPath) {
        this._location.pathname = newPath;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
      get: function() {
        return this._location.search;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
      get: function() {
        return this._location.hash;
      },
      enumerable: true,
      configurable: true
    });
    BrowserPlatformLocation.prototype.pushState = function(state, title, url) {
      if (supportsState()) {
        this._history.pushState(state, title, url);
      } else {
        this._location.hash = url;
      }
    };
    BrowserPlatformLocation.prototype.replaceState = function(state, title, url) {
      if (supportsState()) {
        this._history.replaceState(state, title, url);
      } else {
        this._location.hash = url;
      }
    };
    BrowserPlatformLocation.prototype.forward = function() {
      this._history.forward();
    };
    BrowserPlatformLocation.prototype.back = function() {
      this._history.back();
    };
    BrowserPlatformLocation.decorators = [{type: core.Injectable}];
    BrowserPlatformLocation.ctorParameters = function() {
      return [];
    };
    return BrowserPlatformLocation;
  }(_angular_common.PlatformLocation));
  var BrowserGetTestability = (function() {
    function BrowserGetTestability() {}
    BrowserGetTestability.init = function() {
      core.setTestabilityGetter(new BrowserGetTestability());
    };
    BrowserGetTestability.prototype.addToWindow = function(registry) {
      global$1.getAngularTestability = function(elem, findInAncestors) {
        if (findInAncestors === void 0) {
          findInAncestors = true;
        }
        var testability = registry.findTestabilityInTree(elem, findInAncestors);
        if (testability == null) {
          throw new Error('Could not find testability for element.');
        }
        return testability;
      };
      global$1.getAllAngularTestabilities = function() {
        return registry.getAllTestabilities();
      };
      global$1.getAllAngularRootElements = function() {
        return registry.getAllRootElements();
      };
      var whenAllStable = function(callback) {
        var testabilities = global$1.getAllAngularTestabilities();
        var count = testabilities.length;
        var didWork = false;
        var decrement = function(didWork_) {
          didWork = didWork || didWork_;
          count--;
          if (count == 0) {
            callback(didWork);
          }
        };
        testabilities.forEach(function(testability) {
          testability.whenStable(decrement);
        });
      };
      if (!global$1['frameworkStabilizers']) {
        global$1['frameworkStabilizers'] = [];
      }
      global$1['frameworkStabilizers'].push(whenAllStable);
    };
    BrowserGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      if (elem == null) {
        return null;
      }
      var t = registry.getTestability(elem);
      if (isPresent(t)) {
        return t;
      } else if (!findInAncestors) {
        return null;
      }
      if (getDOM().isShadowRoot(elem)) {
        return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
      }
      return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    };
    return BrowserGetTestability;
  }());
  var Title = (function() {
    function Title() {}
    Title.prototype.getTitle = function() {
      return getDOM().getTitle();
    };
    Title.prototype.setTitle = function(newTitle) {
      getDOM().setTitle(newTitle);
    };
    return Title;
  }());
  var StringMapWrapper = (function() {
    function StringMapWrapper() {}
    StringMapWrapper.merge = function(m1, m2) {
      var m = {};
      for (var _i = 0,
          _a = Object.keys(m1); _i < _a.length; _i++) {
        var k = _a[_i];
        m[k] = m1[k];
      }
      for (var _b = 0,
          _c = Object.keys(m2); _b < _c.length; _b++) {
        var k = _c[_b];
        m[k] = m2[k];
      }
      return m;
    };
    StringMapWrapper.equals = function(m1, m2) {
      var k1 = Object.keys(m1);
      var k2 = Object.keys(m2);
      if (k1.length != k2.length) {
        return false;
      }
      for (var i = 0; i < k1.length; i++) {
        var key = k1[i];
        if (m1[key] !== m2[key]) {
          return false;
        }
      }
      return true;
    };
    return StringMapWrapper;
  }());
  var DOCUMENT = new core.OpaqueToken('DocumentToken');
  var EVENT_MANAGER_PLUGINS = new core.OpaqueToken('EventManagerPlugins');
  var EventManager = (function() {
    function EventManager(plugins, _zone) {
      var _this = this;
      this._zone = _zone;
      this._eventNameToPlugin = new Map();
      plugins.forEach(function(p) {
        return p.manager = _this;
      });
      this._plugins = plugins.slice().reverse();
    }
    EventManager.prototype.addEventListener = function(element, eventName, handler) {
      var plugin = this._findPluginFor(eventName);
      return plugin.addEventListener(element, eventName, handler);
    };
    EventManager.prototype.addGlobalEventListener = function(target, eventName, handler) {
      var plugin = this._findPluginFor(eventName);
      return plugin.addGlobalEventListener(target, eventName, handler);
    };
    EventManager.prototype.getZone = function() {
      return this._zone;
    };
    EventManager.prototype._findPluginFor = function(eventName) {
      var plugin = this._eventNameToPlugin.get(eventName);
      if (plugin) {
        return plugin;
      }
      var plugins = this._plugins;
      for (var i = 0; i < plugins.length; i++) {
        var plugin_1 = plugins[i];
        if (plugin_1.supports(eventName)) {
          this._eventNameToPlugin.set(eventName, plugin_1);
          return plugin_1;
        }
      }
      throw new Error("No event manager plugin found for event " + eventName);
    };
    EventManager.decorators = [{type: core.Injectable}];
    EventManager.ctorParameters = function() {
      return [{
        type: Array,
        decorators: [{
          type: core.Inject,
          args: [EVENT_MANAGER_PLUGINS]
        }]
      }, {type: core.NgZone}];
    };
    return EventManager;
  }());
  var EventManagerPlugin = (function() {
    function EventManagerPlugin() {}
    EventManagerPlugin.prototype.supports = function(eventName) {};
    EventManagerPlugin.prototype.addEventListener = function(element, eventName, handler) {};
    EventManagerPlugin.prototype.addGlobalEventListener = function(element, eventName, handler) {
      var target = getDOM().getGlobalEventTarget(element);
      if (!target) {
        throw new Error("Unsupported event target " + target + " for event " + eventName);
      }
      return this.addEventListener(target, eventName, handler);
    };
    ;
    return EventManagerPlugin;
  }());
  var __extends$4 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var SharedStylesHost = (function() {
    function SharedStylesHost() {
      this._styles = [];
      this._stylesSet = new Set();
    }
    SharedStylesHost.prototype.addStyles = function(styles) {
      var _this = this;
      var additions = [];
      styles.forEach(function(style) {
        if (!_this._stylesSet.has(style)) {
          _this._stylesSet.add(style);
          _this._styles.push(style);
          additions.push(style);
        }
      });
      this.onStylesAdded(additions);
    };
    SharedStylesHost.prototype.onStylesAdded = function(additions) {};
    SharedStylesHost.prototype.getAllStyles = function() {
      return this._styles;
    };
    SharedStylesHost.decorators = [{type: core.Injectable}];
    SharedStylesHost.ctorParameters = function() {
      return [];
    };
    return SharedStylesHost;
  }());
  var DomSharedStylesHost = (function(_super) {
    __extends$4(DomSharedStylesHost, _super);
    function DomSharedStylesHost(doc) {
      _super.call(this);
      this._hostNodes = new Set();
      this._hostNodes.add(doc.head);
    }
    DomSharedStylesHost.prototype._addStylesToHost = function(styles, host) {
      for (var i = 0; i < styles.length; i++) {
        var styleEl = document.createElement('style');
        styleEl.textContent = styles[i];
        host.appendChild(styleEl);
      }
    };
    DomSharedStylesHost.prototype.addHost = function(hostNode) {
      this._addStylesToHost(this._styles, hostNode);
      this._hostNodes.add(hostNode);
    };
    DomSharedStylesHost.prototype.removeHost = function(hostNode) {
      this._hostNodes.delete(hostNode);
    };
    DomSharedStylesHost.prototype.onStylesAdded = function(additions) {
      var _this = this;
      this._hostNodes.forEach(function(hostNode) {
        _this._addStylesToHost(additions, hostNode);
      });
    };
    DomSharedStylesHost.decorators = [{type: core.Injectable}];
    DomSharedStylesHost.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: core.Inject,
          args: [DOCUMENT]
        }]
      }];
    };
    return DomSharedStylesHost;
  }(SharedStylesHost));
  var __extends$3 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NAMESPACE_URIS = {
    'xlink': 'http://www.w3.org/1999/xlink',
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml'
  };
  var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
  var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/;
  var DomRootRenderer = (function() {
    function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver, appId) {
      this.document = document;
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.animationDriver = animationDriver;
      this.appId = appId;
      this.registeredComponents = new Map();
    }
    DomRootRenderer.prototype.renderComponent = function(componentProto) {
      var renderer = this.registeredComponents.get(componentProto.id);
      if (!renderer) {
        renderer = new DomRenderer(this, componentProto, this.animationDriver, this.appId + "-" + componentProto.id);
        this.registeredComponents.set(componentProto.id, renderer);
      }
      return renderer;
    };
    return DomRootRenderer;
  }());
  var DomRootRenderer_ = (function(_super) {
    __extends$3(DomRootRenderer_, _super);
    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver, appId) {
      _super.call(this, _document, _eventManager, sharedStylesHost, animationDriver, appId);
    }
    DomRootRenderer_.decorators = [{type: core.Injectable}];
    DomRootRenderer_.ctorParameters = function() {
      return [{
        type: undefined,
        decorators: [{
          type: core.Inject,
          args: [DOCUMENT]
        }]
      }, {type: EventManager}, {type: DomSharedStylesHost}, {type: AnimationDriver}, {
        type: undefined,
        decorators: [{
          type: core.Inject,
          args: [core.APP_ID]
        }]
      }];
    };
    return DomRootRenderer_;
  }(DomRootRenderer));
  var DIRECT_DOM_RENDERER = {
    remove: function(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    },
    appendChild: function(node, parent) {
      parent.appendChild(node);
    },
    insertBefore: function(node, refNode) {
      refNode.parentNode.insertBefore(node, refNode);
    },
    nextSibling: function(node) {
      return node.nextSibling;
    },
    parentElement: function(node) {
      return (node.parentNode);
    }
  };
  var DomRenderer = (function() {
    function DomRenderer(_rootRenderer, componentProto, _animationDriver, styleShimId) {
      this._rootRenderer = _rootRenderer;
      this.componentProto = componentProto;
      this._animationDriver = _animationDriver;
      this.directRenderer = DIRECT_DOM_RENDERER;
      this._styles = flattenStyles(styleShimId, componentProto.styles, []);
      if (componentProto.encapsulation !== core.ViewEncapsulation.Native) {
        this._rootRenderer.sharedStylesHost.addStyles(this._styles);
      }
      if (this.componentProto.encapsulation === core.ViewEncapsulation.Emulated) {
        this._contentAttr = shimContentAttribute(styleShimId);
        this._hostAttr = shimHostAttribute(styleShimId);
      } else {
        this._contentAttr = null;
        this._hostAttr = null;
      }
    }
    DomRenderer.prototype.selectRootElement = function(selectorOrNode, debugInfo) {
      var el;
      if (typeof selectorOrNode === 'string') {
        el = this._rootRenderer.document.querySelector(selectorOrNode);
        if (!el) {
          throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
      } else {
        el = selectorOrNode;
      }
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      return el;
    };
    DomRenderer.prototype.createElement = function(parent, name, debugInfo) {
      var el;
      if (isNamespaced(name)) {
        var nsAndName = splitNamespace(name);
        el = document.createElementNS((NAMESPACE_URIS)[nsAndName[0]], nsAndName[1]);
      } else {
        el = document.createElement(name);
      }
      if (this._contentAttr) {
        el.setAttribute(this._contentAttr, '');
      }
      if (parent) {
        parent.appendChild(el);
      }
      return el;
    };
    DomRenderer.prototype.createViewRoot = function(hostElement) {
      var nodesParent;
      if (this.componentProto.encapsulation === core.ViewEncapsulation.Native) {
        nodesParent = ((hostElement)).createShadowRoot();
        this._rootRenderer.sharedStylesHost.addHost(nodesParent);
        for (var i = 0; i < this._styles.length; i++) {
          var styleEl = document.createElement('style');
          styleEl.textContent = this._styles[i];
          nodesParent.appendChild(styleEl);
        }
      } else {
        if (this._hostAttr) {
          hostElement.setAttribute(this._hostAttr, '');
        }
        nodesParent = hostElement;
      }
      return nodesParent;
    };
    DomRenderer.prototype.createTemplateAnchor = function(parentElement, debugInfo) {
      var comment = document.createComment(TEMPLATE_COMMENT_TEXT);
      if (parentElement) {
        parentElement.appendChild(comment);
      }
      return comment;
    };
    DomRenderer.prototype.createText = function(parentElement, value, debugInfo) {
      var node = document.createTextNode(value);
      if (parentElement) {
        parentElement.appendChild(node);
      }
      return node;
    };
    DomRenderer.prototype.projectNodes = function(parentElement, nodes) {
      if (!parentElement)
        return;
      appendNodes(parentElement, nodes);
    };
    DomRenderer.prototype.attachViewAfter = function(node, viewRootNodes) {
      moveNodesAfterSibling(node, viewRootNodes);
    };
    DomRenderer.prototype.detachView = function(viewRootNodes) {
      for (var i = 0; i < viewRootNodes.length; i++) {
        var node = viewRootNodes[i];
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    };
    DomRenderer.prototype.destroyView = function(hostElement, viewAllNodes) {
      if (this.componentProto.encapsulation === core.ViewEncapsulation.Native && hostElement) {
        this._rootRenderer.sharedStylesHost.removeHost(((hostElement)).shadowRoot);
      }
    };
    DomRenderer.prototype.listen = function(renderElement, name, callback) {
      return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
    };
    DomRenderer.prototype.listenGlobal = function(target, name, callback) {
      return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
    };
    DomRenderer.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {
      ((renderElement))[propertyName] = propertyValue;
    };
    DomRenderer.prototype.setElementAttribute = function(renderElement, attributeName, attributeValue) {
      var attrNs;
      var attrNameWithoutNs = attributeName;
      if (isNamespaced(attributeName)) {
        var nsAndName = splitNamespace(attributeName);
        attrNameWithoutNs = nsAndName[1];
        attributeName = nsAndName[0] + ':' + nsAndName[1];
        attrNs = NAMESPACE_URIS[nsAndName[0]];
      }
      if (isPresent(attributeValue)) {
        if (attrNs) {
          renderElement.setAttributeNS(attrNs, attributeName, attributeValue);
        } else {
          renderElement.setAttribute(attributeName, attributeValue);
        }
      } else {
        if (isPresent(attrNs)) {
          renderElement.removeAttributeNS(attrNs, attrNameWithoutNs);
        } else {
          renderElement.removeAttribute(attributeName);
        }
      }
    };
    DomRenderer.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {
      if (renderElement.nodeType === Node.COMMENT_NODE) {
        var existingBindings = renderElement.nodeValue.replace(/\n/g, '').match(TEMPLATE_BINDINGS_EXP);
        var parsedBindings = JSON.parse(existingBindings[1]);
        parsedBindings[propertyName] = propertyValue;
        renderElement.nodeValue = TEMPLATE_COMMENT_TEXT.replace('{}', JSON.stringify(parsedBindings, null, 2));
      } else {
        this.setElementAttribute(renderElement, propertyName, propertyValue);
      }
    };
    DomRenderer.prototype.setElementClass = function(renderElement, className, isAdd) {
      if (isAdd) {
        renderElement.classList.add(className);
      } else {
        renderElement.classList.remove(className);
      }
    };
    DomRenderer.prototype.setElementStyle = function(renderElement, styleName, styleValue) {
      if (isPresent(styleValue)) {
        ((renderElement.style))[styleName] = stringify(styleValue);
      } else {
        ((renderElement.style))[styleName] = '';
      }
    };
    DomRenderer.prototype.invokeElementMethod = function(renderElement, methodName, args) {
      ((renderElement))[methodName].apply(renderElement, args);
    };
    DomRenderer.prototype.setText = function(renderNode, text) {
      renderNode.nodeValue = text;
    };
    DomRenderer.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
      if (previousPlayers === void 0) {
        previousPlayers = [];
      }
      try {
        return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
      } catch (e) {
        return new NoOpAnimationPlayer();
      }
    };
    return DomRenderer;
  }());
  function moveNodesAfterSibling(sibling, nodes) {
    var parent = sibling.parentNode;
    if (nodes.length > 0 && parent) {
      var nextSibling = sibling.nextSibling;
      if (nextSibling) {
        for (var i = 0; i < nodes.length; i++) {
          parent.insertBefore(nodes[i], nextSibling);
        }
      } else {
        for (var i = 0; i < nodes.length; i++) {
          parent.appendChild(nodes[i]);
        }
      }
    }
  }
  function appendNodes(parent, nodes) {
    for (var i = 0; i < nodes.length; i++) {
      parent.appendChild(nodes[i]);
    }
  }
  function decoratePreventDefault(eventHandler) {
    return function(event) {
      var allowDefaultBehavior = eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
        event.returnValue = false;
      }
    };
  }
  var COMPONENT_REGEX = /%COMP%/g;
  var COMPONENT_VARIABLE = '%COMP%';
  var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
  var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
  function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
  }
  function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
  }
  function flattenStyles(compId, styles, target) {
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      if (Array.isArray(style)) {
        flattenStyles(compId, style, target);
      } else {
        style = style.replace(COMPONENT_REGEX, compId);
        target.push(style);
      }
    }
    return target;
  }
  var NS_PREFIX_RE = /^:([^:]+):(.+)$/;
  function isNamespaced(name) {
    return name[0] === ':';
  }
  function splitNamespace(name) {
    var match = name.match(NS_PREFIX_RE);
    return [match[1], match[2]];
  }
  var CORE_TOKENS = {
    'ApplicationRef': core.ApplicationRef,
    'NgZone': core.NgZone
  };
  var INSPECT_GLOBAL_NAME = 'ng.probe';
  var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
  function inspectNativeElement(element) {
    return core.getDebugNode(element);
  }
  var NgProbeToken = (function() {
    function NgProbeToken(name, token) {
      this.name = name;
      this.token = token;
    }
    return NgProbeToken;
  }());
  function _createConditionalRootRenderer(rootRenderer, extraTokens, coreTokens) {
    return core.isDevMode() ? _createRootRenderer(rootRenderer, (extraTokens || []).concat(coreTokens || [])) : rootRenderer;
  }
  function _createRootRenderer(rootRenderer, extraTokens) {
    getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, StringMapWrapper.merge(CORE_TOKENS, _ngProbeTokensToMap(extraTokens || [])));
    return new DebugDomRootRenderer(rootRenderer);
  }
  function _ngProbeTokensToMap(tokens) {
    return tokens.reduce(function(prev, t) {
      return (prev[t.name] = t.token, prev);
    }, {});
  }
  var ELEMENT_PROBE_PROVIDERS = [{
    provide: core.RootRenderer,
    useFactory: _createConditionalRootRenderer,
    deps: [DomRootRenderer, [NgProbeToken, new core.Optional()], [core.NgProbeToken, new core.Optional()]]
  }];
  var __extends$5 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var DomEventsPlugin = (function(_super) {
    __extends$5(DomEventsPlugin, _super);
    function DomEventsPlugin() {
      _super.apply(this, arguments);
    }
    DomEventsPlugin.prototype.supports = function(eventName) {
      return true;
    };
    DomEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
      element.addEventListener(eventName, (handler), false);
      return function() {
        return element.removeEventListener(eventName, (handler), false);
      };
    };
    DomEventsPlugin.decorators = [{type: core.Injectable}];
    DomEventsPlugin.ctorParameters = function() {
      return [];
    };
    return DomEventsPlugin;
  }(EventManagerPlugin));
  var __extends$6 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EVENT_NAMES = {
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    'press': true,
    'pressup': true,
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    'tap': true
  };
  var HAMMER_GESTURE_CONFIG = new core.OpaqueToken('HammerGestureConfig');
  var HammerGestureConfig = (function() {
    function HammerGestureConfig() {
      this.events = [];
      this.overrides = {};
    }
    HammerGestureConfig.prototype.buildHammer = function(element) {
      var mc = new Hammer(element);
      mc.get('pinch').set({enable: true});
      mc.get('rotate').set({enable: true});
      for (var eventName in this.overrides) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
      return mc;
    };
    HammerGestureConfig.decorators = [{type: core.Injectable}];
    HammerGestureConfig.ctorParameters = function() {
      return [];
    };
    return HammerGestureConfig;
  }());
  var HammerGesturesPlugin = (function(_super) {
    __extends$6(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(_config) {
      _super.call(this);
      this._config = _config;
    }
    HammerGesturesPlugin.prototype.supports = function(eventName) {
      if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
        return false;
      }
      if (!((window)).Hammer) {
        throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
      }
      return true;
    };
    HammerGesturesPlugin.prototype.addEventListener = function(element, eventName, handler) {
      var _this = this;
      var zone = this.manager.getZone();
      eventName = eventName.toLowerCase();
      return zone.runOutsideAngular(function() {
        var mc = _this._config.buildHammer(element);
        var callback = function(eventObj) {
          zone.runGuarded(function() {
            handler(eventObj);
          });
        };
        mc.on(eventName, callback);
        return function() {
          return mc.off(eventName, callback);
        };
      });
    };
    HammerGesturesPlugin.prototype.isCustomEvent = function(eventName) {
      return this._config.events.indexOf(eventName) > -1;
    };
    HammerGesturesPlugin.decorators = [{type: core.Injectable}];
    HammerGesturesPlugin.ctorParameters = function() {
      return [{
        type: HammerGestureConfig,
        decorators: [{
          type: core.Inject,
          args: [HAMMER_GESTURE_CONFIG]
        }]
      }];
    };
    return HammerGesturesPlugin;
  }(EventManagerPlugin));
  var __extends$7 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
  var MODIFIER_KEY_GETTERS = {
    'alt': function(event) {
      return event.altKey;
    },
    'control': function(event) {
      return event.ctrlKey;
    },
    'meta': function(event) {
      return event.metaKey;
    },
    'shift': function(event) {
      return event.shiftKey;
    }
  };
  var KeyEventsPlugin = (function(_super) {
    __extends$7(KeyEventsPlugin, _super);
    function KeyEventsPlugin() {
      _super.call(this);
    }
    KeyEventsPlugin.prototype.supports = function(eventName) {
      return KeyEventsPlugin.parseEventName(eventName) != null;
    };
    KeyEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
      var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
      var outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
      return this.manager.getZone().runOutsideAngular(function() {
        return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
      });
    };
    KeyEventsPlugin.parseEventName = function(eventName) {
      var parts = eventName.toLowerCase().split('.');
      var domEventName = parts.shift();
      if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
        return null;
      }
      var key = KeyEventsPlugin._normalizeKey(parts.pop());
      var fullKey = '';
      MODIFIER_KEYS.forEach(function(modifierName) {
        var index = parts.indexOf(modifierName);
        if (index > -1) {
          parts.splice(index, 1);
          fullKey += modifierName + '.';
        }
      });
      fullKey += key;
      if (parts.length != 0 || key.length === 0) {
        return null;
      }
      var result = {};
      result['domEventName'] = domEventName;
      result['fullKey'] = fullKey;
      return result;
    };
    KeyEventsPlugin.getEventFullKey = function(event) {
      var fullKey = '';
      var key = getDOM().getEventKey(event);
      key = key.toLowerCase();
      if (key === ' ') {
        key = 'space';
      } else if (key === '.') {
        key = 'dot';
      }
      MODIFIER_KEYS.forEach(function(modifierName) {
        if (modifierName != key) {
          var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
          if (modifierGetter(event)) {
            fullKey += modifierName + '.';
          }
        }
      });
      fullKey += key;
      return fullKey;
    };
    KeyEventsPlugin.eventCallback = function(fullKey, handler, zone) {
      return function(event) {
        if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
          zone.runGuarded(function() {
            return handler(event);
          });
        }
      };
    };
    KeyEventsPlugin._normalizeKey = function(keyName) {
      switch (keyName) {
        case 'esc':
          return 'escape';
        default:
          return keyName;
      }
    };
    KeyEventsPlugin.decorators = [{type: core.Injectable}];
    KeyEventsPlugin.ctorParameters = function() {
      return [];
    };
    return KeyEventsPlugin;
  }(EventManagerPlugin));
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
  function sanitizeUrl(url) {
    url = String(url);
    if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
      return url;
    if (core.isDevMode()) {
      getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
    }
    return 'unsafe:' + url;
  }
  function sanitizeSrcset(srcset) {
    srcset = String(srcset);
    return srcset.split(',').map(function(srcset) {
      return sanitizeUrl(srcset.trim());
    }).join(', ');
  }
  var inertElement = null;
  var DOM = null;
  function getInertElement() {
    if (inertElement)
      return inertElement;
    DOM = getDOM();
    var templateEl = DOM.createElement('template');
    if ('content' in templateEl)
      return templateEl;
    var doc = DOM.createHtmlDocument();
    inertElement = DOM.querySelector(doc, 'body');
    if (inertElement == null) {
      var html = DOM.createElement('html', doc);
      inertElement = DOM.createElement('body', doc);
      DOM.appendChild(html, inertElement);
      DOM.appendChild(doc, html);
    }
    return inertElement;
  }
  function tagSet(tags) {
    var res = {};
    for (var _i = 0,
        _a = tags.split(','); _i < _a.length; _i++) {
      var t = _a[_i];
      res[t] = true;
    }
    return res;
  }
  function merge() {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      sets[_i - 0] = arguments[_i];
    }
    var res = {};
    for (var _a = 0,
        sets_1 = sets; _a < sets_1.length; _a++) {
      var s = sets_1[_a];
      for (var v in s) {
        if (s.hasOwnProperty(v))
          res[v] = true;
      }
    }
    return res;
  }
  var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
  var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
  var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
  var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
  var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' + 'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' + 'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
  var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' + 'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' + 'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
  var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
  var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
  var SRCSET_ATTRS = tagSet('srcset');
  var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' + 'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' + 'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' + 'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' + 'valign,value,vspace,width');
  var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
  var SanitizingHtmlSerializer = (function() {
    function SanitizingHtmlSerializer() {
      this.sanitizedSomething = false;
      this.buf = [];
    }
    SanitizingHtmlSerializer.prototype.sanitizeChildren = function(el) {
      var current = el.firstChild;
      while (current) {
        if (DOM.isElementNode(current)) {
          this.startElement((current));
        } else if (DOM.isTextNode(current)) {
          this.chars(DOM.nodeValue(current));
        } else {
          this.sanitizedSomething = true;
        }
        if (DOM.firstChild(current)) {
          current = DOM.firstChild(current);
          continue;
        }
        while (current) {
          if (DOM.isElementNode(current)) {
            this.endElement((current));
          }
          if (DOM.nextSibling(current)) {
            current = DOM.nextSibling(current);
            break;
          }
          current = DOM.parentElement(current);
        }
      }
      return this.buf.join('');
    };
    SanitizingHtmlSerializer.prototype.startElement = function(element) {
      var _this = this;
      var tagName = DOM.nodeName(element).toLowerCase();
      if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
        this.sanitizedSomething = true;
        return;
      }
      this.buf.push('<');
      this.buf.push(tagName);
      DOM.attributeMap(element).forEach(function(value, attrName) {
        var lower = attrName.toLowerCase();
        if (!VALID_ATTRS.hasOwnProperty(lower)) {
          _this.sanitizedSomething = true;
          return;
        }
        if (URI_ATTRS[lower])
          value = sanitizeUrl(value);
        if (SRCSET_ATTRS[lower])
          value = sanitizeSrcset(value);
        _this.buf.push(' ');
        _this.buf.push(attrName);
        _this.buf.push('="');
        _this.buf.push(encodeEntities(value));
        _this.buf.push('"');
      });
      this.buf.push('>');
    };
    SanitizingHtmlSerializer.prototype.endElement = function(current) {
      var tagName = DOM.nodeName(current).toLowerCase();
      if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
        this.buf.push('</');
        this.buf.push(tagName);
        this.buf.push('>');
      }
    };
    SanitizingHtmlSerializer.prototype.chars = function(chars) {
      this.buf.push(encodeEntities(chars));
    };
    return SanitizingHtmlSerializer;
  }());
  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
  function encodeEntities(value) {
    return value.replace(/&/g, '&amp;').replace(SURROGATE_PAIR_REGEXP, function(match) {
      var hi = match.charCodeAt(0);
      var low = match.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).replace(NON_ALPHANUMERIC_REGEXP, function(match) {
      return '&#' + match.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function stripCustomNsAttrs(el) {
    DOM.attributeMap(el).forEach(function(_, attrName) {
      if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
        DOM.removeAttribute(el, attrName);
      }
    });
    for (var _i = 0,
        _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
      var n = _a[_i];
      if (DOM.isElementNode(n))
        stripCustomNsAttrs((n));
    }
  }
  function sanitizeHtml(unsafeHtmlInput) {
    try {
      var containerEl = getInertElement();
      var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
      var mXSSAttempts = 5;
      var parsedHtml = unsafeHtml;
      do {
        if (mXSSAttempts === 0) {
          throw new Error('Failed to sanitize html because the input is unstable');
        }
        mXSSAttempts--;
        unsafeHtml = parsedHtml;
        DOM.setInnerHTML(containerEl, unsafeHtml);
        if (((DOM.defaultDoc())).documentMode) {
          stripCustomNsAttrs(containerEl);
        }
        parsedHtml = DOM.getInnerHTML(containerEl);
      } while (unsafeHtml !== parsedHtml);
      var sanitizer = new SanitizingHtmlSerializer();
      var safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
      var parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
      for (var _i = 0,
          _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
        var child = _a[_i];
        DOM.removeChild(parent_1, child);
      }
      if (core.isDevMode() && sanitizer.sanitizedSomething) {
        DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
      }
      return safeHtml;
    } catch (e) {
      inertElement = null;
      throw e;
    }
  }
  var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
  var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
  var COLOR_FNS = '(?:rgb|hsl)a?';
  var FN_ARGS = '\\([-0-9.%, a-zA-Z]+\\)';
  var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + ")" + FN_ARGS + ")$", 'g');
  var URL_RE = /^url\(([^)]+)\)$/;
  function hasBalancedQuotes(value) {
    var outsideSingle = true;
    var outsideDouble = true;
    for (var i = 0; i < value.length; i++) {
      var c = value.charAt(i);
      if (c === '\'' && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c === '"' && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  }
  function sanitizeStyle(value) {
    value = String(value).trim();
    if (!value)
      return '';
    var urlMatch = value.match(URL_RE);
    if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) || value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
      return value;
    }
    if (core.isDevMode()) {
      getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
    }
    return 'unsafe';
  }
  var __extends$8 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var DomSanitizer = (function() {
    function DomSanitizer() {}
    DomSanitizer.prototype.sanitize = function(context, value) {};
    DomSanitizer.prototype.bypassSecurityTrustHtml = function(value) {};
    DomSanitizer.prototype.bypassSecurityTrustStyle = function(value) {};
    DomSanitizer.prototype.bypassSecurityTrustScript = function(value) {};
    DomSanitizer.prototype.bypassSecurityTrustUrl = function(value) {};
    DomSanitizer.prototype.bypassSecurityTrustResourceUrl = function(value) {};
    return DomSanitizer;
  }());
  var DomSanitizerImpl = (function(_super) {
    __extends$8(DomSanitizerImpl, _super);
    function DomSanitizerImpl() {
      _super.apply(this, arguments);
    }
    DomSanitizerImpl.prototype.sanitize = function(ctx, value) {
      if (value == null)
        return null;
      switch (ctx) {
        case core.SecurityContext.NONE:
          return value;
        case core.SecurityContext.HTML:
          if (value instanceof SafeHtmlImpl)
            return value.changingThisBreaksApplicationSecurity;
          this.checkNotSafeValue(value, 'HTML');
          return sanitizeHtml(String(value));
        case core.SecurityContext.STYLE:
          if (value instanceof SafeStyleImpl)
            return value.changingThisBreaksApplicationSecurity;
          this.checkNotSafeValue(value, 'Style');
          return sanitizeStyle(value);
        case core.SecurityContext.SCRIPT:
          if (value instanceof SafeScriptImpl)
            return value.changingThisBreaksApplicationSecurity;
          this.checkNotSafeValue(value, 'Script');
          throw new Error('unsafe value used in a script context');
        case core.SecurityContext.URL:
          if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
            return value.changingThisBreaksApplicationSecurity;
          }
          this.checkNotSafeValue(value, 'URL');
          return sanitizeUrl(String(value));
        case core.SecurityContext.RESOURCE_URL:
          if (value instanceof SafeResourceUrlImpl) {
            return value.changingThisBreaksApplicationSecurity;
          }
          this.checkNotSafeValue(value, 'ResourceURL');
          throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
        default:
          throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
      }
    };
    DomSanitizerImpl.prototype.checkNotSafeValue = function(value, expectedType) {
      if (value instanceof SafeValueImpl) {
        throw new Error(("Required a safe " + expectedType + ", got a " + value.getTypeName() + " ") + "(see http://g.co/ng/security#xss)");
      }
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function(value) {
      return new SafeHtmlImpl(value);
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function(value) {
      return new SafeStyleImpl(value);
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustScript = function(value) {
      return new SafeScriptImpl(value);
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function(value) {
      return new SafeUrlImpl(value);
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function(value) {
      return new SafeResourceUrlImpl(value);
    };
    DomSanitizerImpl.decorators = [{type: core.Injectable}];
    DomSanitizerImpl.ctorParameters = function() {
      return [];
    };
    return DomSanitizerImpl;
  }(DomSanitizer));
  var SafeValueImpl = (function() {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
      this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    SafeValueImpl.prototype.getTypeName = function() {};
    SafeValueImpl.prototype.toString = function() {
      return ("SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
  }());
  var SafeHtmlImpl = (function(_super) {
    __extends$8(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
      _super.apply(this, arguments);
    }
    SafeHtmlImpl.prototype.getTypeName = function() {
      return 'HTML';
    };
    return SafeHtmlImpl;
  }(SafeValueImpl));
  var SafeStyleImpl = (function(_super) {
    __extends$8(SafeStyleImpl, _super);
    function SafeStyleImpl() {
      _super.apply(this, arguments);
    }
    SafeStyleImpl.prototype.getTypeName = function() {
      return 'Style';
    };
    return SafeStyleImpl;
  }(SafeValueImpl));
  var SafeScriptImpl = (function(_super) {
    __extends$8(SafeScriptImpl, _super);
    function SafeScriptImpl() {
      _super.apply(this, arguments);
    }
    SafeScriptImpl.prototype.getTypeName = function() {
      return 'Script';
    };
    return SafeScriptImpl;
  }(SafeValueImpl));
  var SafeUrlImpl = (function(_super) {
    __extends$8(SafeUrlImpl, _super);
    function SafeUrlImpl() {
      _super.apply(this, arguments);
    }
    SafeUrlImpl.prototype.getTypeName = function() {
      return 'URL';
    };
    return SafeUrlImpl;
  }(SafeValueImpl));
  var SafeResourceUrlImpl = (function(_super) {
    __extends$8(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
      _super.apply(this, arguments);
    }
    SafeResourceUrlImpl.prototype.getTypeName = function() {
      return 'ResourceURL';
    };
    return SafeResourceUrlImpl;
  }(SafeValueImpl));
  var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
    provide: core.PLATFORM_INITIALIZER,
    useValue: initDomAdapter,
    multi: true
  }, {
    provide: _angular_common.PlatformLocation,
    useClass: BrowserPlatformLocation
  }];
  var BROWSER_SANITIZATION_PROVIDERS = [{
    provide: core.Sanitizer,
    useExisting: DomSanitizer
  }, {
    provide: DomSanitizer,
    useClass: DomSanitizerImpl
  }];
  var platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
  function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
    BrowserGetTestability.init();
  }
  function errorHandler() {
    return new core.ErrorHandler();
  }
  function _document() {
    return getDOM().defaultDoc();
  }
  function _resolveDefaultAnimationDriver() {
    if (getDOM().supportsWebAnimation()) {
      return new WebAnimationsDriver();
    }
    return AnimationDriver.NOOP;
  }
  var BrowserModule = (function() {
    function BrowserModule(parentModule) {
      if (parentModule) {
        throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
      }
    }
    BrowserModule.decorators = [{
      type: core.NgModule,
      args: [{
        providers: [BROWSER_SANITIZATION_PROVIDERS, {
          provide: core.ErrorHandler,
          useFactory: errorHandler,
          deps: []
        }, {
          provide: DOCUMENT,
          useFactory: _document,
          deps: []
        }, {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: DomEventsPlugin,
          multi: true
        }, {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: KeyEventsPlugin,
          multi: true
        }, {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true
        }, {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: HammerGestureConfig
        }, {
          provide: DomRootRenderer,
          useClass: DomRootRenderer_
        }, {
          provide: core.RootRenderer,
          useExisting: DomRootRenderer
        }, {
          provide: SharedStylesHost,
          useExisting: DomSharedStylesHost
        }, {
          provide: AnimationDriver,
          useFactory: _resolveDefaultAnimationDriver
        }, DomSharedStylesHost, core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Title],
        exports: [_angular_common.CommonModule, core.ApplicationModule]
      }]
    }];
    BrowserModule.ctorParameters = function() {
      return [{
        type: BrowserModule,
        decorators: [{type: core.Optional}, {type: core.SkipSelf}]
      }];
    };
    return BrowserModule;
  }());
  var win = typeof window !== 'undefined' && window || ({});
  var ChangeDetectionPerfRecord = (function() {
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
      this.msPerTick = msPerTick;
      this.numTicks = numTicks;
    }
    return ChangeDetectionPerfRecord;
  }());
  var AngularTools = (function() {
    function AngularTools(ref) {
      this.profiler = new AngularProfiler(ref);
    }
    return AngularTools;
  }());
  var AngularProfiler = (function() {
    function AngularProfiler(ref) {
      this.appRef = ref.injector.get(core.ApplicationRef);
    }
    AngularProfiler.prototype.timeChangeDetection = function(config) {
      var record = config && config['record'];
      var profileName = 'Change Detection';
      var isProfilerAvailable = isPresent(win.console.profile);
      if (record && isProfilerAvailable) {
        win.console.profile(profileName);
      }
      var start = getDOM().performanceNow();
      var numTicks = 0;
      while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
        this.appRef.tick();
        numTicks++;
      }
      var end = getDOM().performanceNow();
      if (record && isProfilerAvailable) {
        ((win.console.profileEnd))(profileName);
      }
      var msPerTick = (end - start) / numTicks;
      win.console.log("ran " + numTicks + " change detection cycles");
      win.console.log(msPerTick.toFixed(2) + " ms per check");
      return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    };
    return AngularProfiler;
  }());
  var context = (global$1);
  function enableDebugTools(ref) {
    ((Object)).assign(context.ng, new AngularTools(ref));
    return ref;
  }
  function disableDebugTools() {
    if (context.ng) {
      delete context.ng.profiler;
    }
  }
  var By = (function() {
    function By() {}
    By.all = function() {
      return function(debugElement) {
        return true;
      };
    };
    By.css = function(selector) {
      return function(debugElement) {
        return isPresent(debugElement.nativeElement) ? getDOM().elementMatches(debugElement.nativeElement, selector) : false;
      };
    };
    By.directive = function(type) {
      return function(debugElement) {
        return debugElement.providerTokens.indexOf(type) !== -1;
      };
    };
    return By;
  }());
  var __platform_browser_private__ = {
    BrowserPlatformLocation: BrowserPlatformLocation,
    DomAdapter: DomAdapter,
    BrowserDomAdapter: BrowserDomAdapter,
    BrowserGetTestability: BrowserGetTestability,
    getDOM: getDOM,
    setRootDomAdapter: setRootDomAdapter,
    DomRootRenderer_: DomRootRenderer_,
    DomRootRenderer: DomRootRenderer,
    NAMESPACE_URIS: NAMESPACE_URIS,
    shimContentAttribute: shimContentAttribute,
    shimHostAttribute: shimHostAttribute,
    flattenStyles: flattenStyles,
    splitNamespace: splitNamespace,
    isNamespaced: isNamespaced,
    DomSharedStylesHost: DomSharedStylesHost,
    SharedStylesHost: SharedStylesHost,
    ELEMENT_PROBE_PROVIDERS: ELEMENT_PROBE_PROVIDERS,
    DomEventsPlugin: DomEventsPlugin,
    KeyEventsPlugin: KeyEventsPlugin,
    HammerGesturesPlugin: HammerGesturesPlugin,
    initDomAdapter: initDomAdapter,
    INTERNAL_BROWSER_PLATFORM_PROVIDERS: INTERNAL_BROWSER_PLATFORM_PROVIDERS,
    BROWSER_SANITIZATION_PROVIDERS: BROWSER_SANITIZATION_PROVIDERS,
    WebAnimationsDriver: WebAnimationsDriver
  };
  var VERSION = new core.Version('2.4.1');
  exports.BrowserModule = BrowserModule;
  exports.platformBrowser = platformBrowser;
  exports.Title = Title;
  exports.disableDebugTools = disableDebugTools;
  exports.enableDebugTools = enableDebugTools;
  exports.AnimationDriver = AnimationDriver;
  exports.By = By;
  exports.NgProbeToken = NgProbeToken;
  exports.DOCUMENT = DOCUMENT;
  exports.EVENT_MANAGER_PLUGINS = EVENT_MANAGER_PLUGINS;
  exports.EventManager = EventManager;
  exports.HAMMER_GESTURE_CONFIG = HAMMER_GESTURE_CONFIG;
  exports.HammerGestureConfig = HammerGestureConfig;
  exports.DomSanitizer = DomSanitizer;
  exports.VERSION = VERSION;
  exports.__platform_browser_private__ = __platform_browser_private__;
}));

})();
(function() {
var define = System.amdDefine;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('@angular/platform-browser')) : typeof define === 'function' && define.amd ? define("@angular/http/bundles/http.umd.js", ["exports", "@angular/core", "rxjs/Observable", "@angular/platform-browser"], factory) : (factory((global.ng = global.ng || {}, global.ng.http = global.ng.http || {}), global.ng.core, global.Rx, global.ng.platformBrowser));
}(this, function(exports, _angular_core, rxjs_Observable, _angular_platformBrowser) {
  'use strict';
  var BrowserXhr = (function() {
    function BrowserXhr() {}
    BrowserXhr.prototype.build = function() {
      return ((new XMLHttpRequest()));
    };
    BrowserXhr.decorators = [{type: _angular_core.Injectable}];
    BrowserXhr.ctorParameters = function() {
      return [];
    };
    return BrowserXhr;
  }());
  var RequestMethod = {};
  RequestMethod.Get = 0;
  RequestMethod.Post = 1;
  RequestMethod.Put = 2;
  RequestMethod.Delete = 3;
  RequestMethod.Options = 4;
  RequestMethod.Head = 5;
  RequestMethod.Patch = 6;
  RequestMethod[RequestMethod.Get] = "Get";
  RequestMethod[RequestMethod.Post] = "Post";
  RequestMethod[RequestMethod.Put] = "Put";
  RequestMethod[RequestMethod.Delete] = "Delete";
  RequestMethod[RequestMethod.Options] = "Options";
  RequestMethod[RequestMethod.Head] = "Head";
  RequestMethod[RequestMethod.Patch] = "Patch";
  var ReadyState = {};
  ReadyState.Unsent = 0;
  ReadyState.Open = 1;
  ReadyState.HeadersReceived = 2;
  ReadyState.Loading = 3;
  ReadyState.Done = 4;
  ReadyState.Cancelled = 5;
  ReadyState[ReadyState.Unsent] = "Unsent";
  ReadyState[ReadyState.Open] = "Open";
  ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
  ReadyState[ReadyState.Loading] = "Loading";
  ReadyState[ReadyState.Done] = "Done";
  ReadyState[ReadyState.Cancelled] = "Cancelled";
  var ResponseType = {};
  ResponseType.Basic = 0;
  ResponseType.Cors = 1;
  ResponseType.Default = 2;
  ResponseType.Error = 3;
  ResponseType.Opaque = 4;
  ResponseType[ResponseType.Basic] = "Basic";
  ResponseType[ResponseType.Cors] = "Cors";
  ResponseType[ResponseType.Default] = "Default";
  ResponseType[ResponseType.Error] = "Error";
  ResponseType[ResponseType.Opaque] = "Opaque";
  var ContentType = {};
  ContentType.NONE = 0;
  ContentType.JSON = 1;
  ContentType.FORM = 2;
  ContentType.FORM_DATA = 3;
  ContentType.TEXT = 4;
  ContentType.BLOB = 5;
  ContentType.ARRAY_BUFFER = 6;
  ContentType[ContentType.NONE] = "NONE";
  ContentType[ContentType.JSON] = "JSON";
  ContentType[ContentType.FORM] = "FORM";
  ContentType[ContentType.FORM_DATA] = "FORM_DATA";
  ContentType[ContentType.TEXT] = "TEXT";
  ContentType[ContentType.BLOB] = "BLOB";
  ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
  var ResponseContentType = {};
  ResponseContentType.Text = 0;
  ResponseContentType.Json = 1;
  ResponseContentType.ArrayBuffer = 2;
  ResponseContentType.Blob = 3;
  ResponseContentType[ResponseContentType.Text] = "Text";
  ResponseContentType[ResponseContentType.Json] = "Json";
  ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
  ResponseContentType[ResponseContentType.Blob] = "Blob";
  var Headers = (function() {
    function Headers(headers) {
      var _this = this;
      this._headers = new Map();
      this._normalizedNames = new Map();
      if (!headers) {
        return;
      }
      if (headers instanceof Headers) {
        headers.forEach(function(values, name) {
          values.forEach(function(value) {
            return _this.append(name, value);
          });
        });
        return;
      }
      Object.keys(headers).forEach(function(name) {
        var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
        _this.delete(name);
        values.forEach(function(value) {
          return _this.append(name, value);
        });
      });
    }
    Headers.fromResponseHeaderString = function(headersString) {
      var headers = new Headers();
      headersString.split('\n').forEach(function(line) {
        var index = line.indexOf(':');
        if (index > 0) {
          var name_1 = line.slice(0, index);
          var value = line.slice(index + 1).trim();
          headers.set(name_1, value);
        }
      });
      return headers;
    };
    Headers.prototype.append = function(name, value) {
      var values = this.getAll(name);
      if (values === null) {
        this.set(name, value);
      } else {
        values.push(value);
      }
    };
    Headers.prototype.delete = function(name) {
      var lcName = name.toLowerCase();
      this._normalizedNames.delete(lcName);
      this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function(fn) {
      var _this = this;
      this._headers.forEach(function(values, lcName) {
        return fn(values, _this._normalizedNames.get(lcName), _this._headers);
      });
    };
    Headers.prototype.get = function(name) {
      var values = this.getAll(name);
      if (values === null) {
        return null;
      }
      return values.length > 0 ? values[0] : null;
    };
    Headers.prototype.has = function(name) {
      return this._headers.has(name.toLowerCase());
    };
    Headers.prototype.keys = function() {
      return Array.from(this._normalizedNames.values());
    };
    Headers.prototype.set = function(name, value) {
      if (Array.isArray(value)) {
        if (value.length) {
          this._headers.set(name.toLowerCase(), [value.join(',')]);
        }
      } else {
        this._headers.set(name.toLowerCase(), [value]);
      }
      this.mayBeSetNormalizedName(name);
    };
    Headers.prototype.values = function() {
      return Array.from(this._headers.values());
    };
    Headers.prototype.toJSON = function() {
      var _this = this;
      var serialized = {};
      this._headers.forEach(function(values, name) {
        var split = [];
        values.forEach(function(v) {
          return split.push.apply(split, v.split(','));
        });
        serialized[_this._normalizedNames.get(name)] = split;
      });
      return serialized;
    };
    Headers.prototype.getAll = function(name) {
      return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
    };
    Headers.prototype.entries = function() {
      throw new Error('"entries" method is not implemented on Headers class');
    };
    Headers.prototype.mayBeSetNormalizedName = function(name) {
      var lcName = name.toLowerCase();
      if (!this._normalizedNames.has(lcName)) {
        this._normalizedNames.set(lcName, name);
      }
    };
    return Headers;
  }());
  var __extends$1 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ResponseOptions = (function() {
    function ResponseOptions(_a) {
      var _b = _a === void 0 ? {} : _a,
          body = _b.body,
          status = _b.status,
          headers = _b.headers,
          statusText = _b.statusText,
          type = _b.type,
          url = _b.url;
      this.body = body != null ? body : null;
      this.status = status != null ? status : null;
      this.headers = headers != null ? headers : null;
      this.statusText = statusText != null ? statusText : null;
      this.type = type != null ? type : null;
      this.url = url != null ? url : null;
    }
    ResponseOptions.prototype.merge = function(options) {
      return new ResponseOptions({
        body: options && options.body != null ? options.body : this.body,
        status: options && options.status != null ? options.status : this.status,
        headers: options && options.headers != null ? options.headers : this.headers,
        statusText: options && options.statusText != null ? options.statusText : this.statusText,
        type: options && options.type != null ? options.type : this.type,
        url: options && options.url != null ? options.url : this.url
      });
    };
    return ResponseOptions;
  }());
  var BaseResponseOptions = (function(_super) {
    __extends$1(BaseResponseOptions, _super);
    function BaseResponseOptions() {
      _super.call(this, {
        status: 200,
        statusText: 'Ok',
        type: ResponseType.Default,
        headers: new Headers()
      });
    }
    BaseResponseOptions.decorators = [{type: _angular_core.Injectable}];
    BaseResponseOptions.ctorParameters = function() {
      return [];
    };
    return BaseResponseOptions;
  }(ResponseOptions));
  var ConnectionBackend = (function() {
    function ConnectionBackend() {}
    ConnectionBackend.prototype.createConnection = function(request) {};
    return ConnectionBackend;
  }());
  var Connection = (function() {
    function Connection() {}
    return Connection;
  }());
  var XSRFStrategy = (function() {
    function XSRFStrategy() {}
    XSRFStrategy.prototype.configureRequest = function(req) {};
    return XSRFStrategy;
  }());
  function normalizeMethodName(method) {
    if (typeof method !== 'string')
      return method;
    switch (method.toUpperCase()) {
      case 'GET':
        return RequestMethod.Get;
      case 'POST':
        return RequestMethod.Post;
      case 'PUT':
        return RequestMethod.Put;
      case 'DELETE':
        return RequestMethod.Delete;
      case 'OPTIONS':
        return RequestMethod.Options;
      case 'HEAD':
        return RequestMethod.Head;
      case 'PATCH':
        return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
  }
  var isSuccess = function(status) {
    return (status >= 200 && status < 300);
  };
  function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
      return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
      return xhr.getResponseHeader('X-Request-URL');
    }
    return;
  }
  function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0,
        strLen = input.length; i < strLen; i++) {
      view[i] = input.charCodeAt(i);
    }
    return view.buffer;
  }
  function paramParser(rawParams) {
    if (rawParams === void 0) {
      rawParams = '';
    }
    var map = new Map();
    if (rawParams.length > 0) {
      var params = rawParams.split('&');
      params.forEach(function(param) {
        var eqIdx = param.indexOf('=');
        var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)],
            key = _a[0],
            val = _a[1];
        var list = map.get(key) || [];
        list.push(val);
        map.set(key, list);
      });
    }
    return map;
  }
  var QueryEncoder = (function() {
    function QueryEncoder() {}
    QueryEncoder.prototype.encodeKey = function(k) {
      return standardEncoding(k);
    };
    QueryEncoder.prototype.encodeValue = function(v) {
      return standardEncoding(v);
    };
    return QueryEncoder;
  }());
  function standardEncoding(v) {
    return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
  }
  var URLSearchParams = (function() {
    function URLSearchParams(rawParams, queryEncoder) {
      if (rawParams === void 0) {
        rawParams = '';
      }
      if (queryEncoder === void 0) {
        queryEncoder = new QueryEncoder();
      }
      this.rawParams = rawParams;
      this.queryEncoder = queryEncoder;
      this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function() {
      var clone = new URLSearchParams('', this.queryEncoder);
      clone.appendAll(this);
      return clone;
    };
    URLSearchParams.prototype.has = function(param) {
      return this.paramsMap.has(param);
    };
    URLSearchParams.prototype.get = function(param) {
      var storedParam = this.paramsMap.get(param);
      return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function(param) {
      return this.paramsMap.get(param) || [];
    };
    URLSearchParams.prototype.set = function(param, val) {
      if (val === void 0 || val === null) {
        this.delete(param);
        return;
      }
      var list = this.paramsMap.get(param) || [];
      list.length = 0;
      list.push(val);
      this.paramsMap.set(param, list);
    };
    URLSearchParams.prototype.setAll = function(searchParams) {
      var _this = this;
      searchParams.paramsMap.forEach(function(value, param) {
        var list = _this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(value[0]);
        _this.paramsMap.set(param, list);
      });
    };
    URLSearchParams.prototype.append = function(param, val) {
      if (val === void 0 || val === null)
        return;
      var list = this.paramsMap.get(param) || [];
      list.push(val);
      this.paramsMap.set(param, list);
    };
    URLSearchParams.prototype.appendAll = function(searchParams) {
      var _this = this;
      searchParams.paramsMap.forEach(function(value, param) {
        var list = _this.paramsMap.get(param) || [];
        for (var i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }
        _this.paramsMap.set(param, list);
      });
    };
    URLSearchParams.prototype.replaceAll = function(searchParams) {
      var _this = this;
      searchParams.paramsMap.forEach(function(value, param) {
        var list = _this.paramsMap.get(param) || [];
        list.length = 0;
        for (var i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }
        _this.paramsMap.set(param, list);
      });
    };
    URLSearchParams.prototype.toString = function() {
      var _this = this;
      var paramsList = [];
      this.paramsMap.forEach(function(values, k) {
        values.forEach(function(v) {
          return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
        });
      });
      return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function(param) {
      this.paramsMap.delete(param);
    };
    return URLSearchParams;
  }());
  var Body = (function() {
    function Body() {}
    Body.prototype.json = function() {
      if (typeof this._body === 'string') {
        return JSON.parse((this._body));
      }
      if (this._body instanceof ArrayBuffer) {
        return JSON.parse(this.text());
      }
      return this._body;
    };
    Body.prototype.text = function() {
      if (this._body instanceof URLSearchParams) {
        return this._body.toString();
      }
      if (this._body instanceof ArrayBuffer) {
        return String.fromCharCode.apply(null, new Uint16Array((this._body)));
      }
      if (this._body == null) {
        return '';
      }
      if (typeof this._body === 'object') {
        return JSON.stringify(this._body, null, 2);
      }
      return this._body.toString();
    };
    Body.prototype.arrayBuffer = function() {
      if (this._body instanceof ArrayBuffer) {
        return (this._body);
      }
      return stringToArrayBuffer(this.text());
    };
    Body.prototype.blob = function() {
      if (this._body instanceof Blob) {
        return (this._body);
      }
      if (this._body instanceof ArrayBuffer) {
        return new Blob([this._body]);
      }
      throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
  }());
  var __extends$2 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Response = (function(_super) {
    __extends$2(Response, _super);
    function Response(responseOptions) {
      _super.call(this);
      this._body = responseOptions.body;
      this.status = responseOptions.status;
      this.ok = (this.status >= 200 && this.status <= 299);
      this.statusText = responseOptions.statusText;
      this.headers = responseOptions.headers;
      this.type = responseOptions.type;
      this.url = responseOptions.url;
    }
    Response.prototype.toString = function() {
      return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
  }(Body));
  var _nextRequestId = 0;
  var JSONP_HOME = '__ng_jsonp__';
  var _jsonpConnections = null;
  function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
      _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
  }
  var BrowserJsonp = (function() {
    function BrowserJsonp() {}
    BrowserJsonp.prototype.build = function(url) {
      var node = document.createElement('script');
      node.src = url;
      return node;
    };
    BrowserJsonp.prototype.nextRequestID = function() {
      return "__req" + _nextRequestId++;
    };
    BrowserJsonp.prototype.requestCallback = function(id) {
      return JSONP_HOME + "." + id + ".finished";
    };
    BrowserJsonp.prototype.exposeConnection = function(id, connection) {
      var connections = _getJsonpConnections();
      connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function(id) {
      var connections = _getJsonpConnections();
      connections[id] = null;
    };
    BrowserJsonp.prototype.send = function(node) {
      document.body.appendChild(((node)));
    };
    BrowserJsonp.prototype.cleanup = function(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(((node)));
      }
    };
    BrowserJsonp.decorators = [{type: _angular_core.Injectable}];
    BrowserJsonp.ctorParameters = function() {
      return [];
    };
    return BrowserJsonp;
  }());
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
  var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
  var JSONPConnection = (function() {
    function JSONPConnection() {}
    JSONPConnection.prototype.finished = function(data) {};
    return JSONPConnection;
  }());
  var JSONPConnection_ = (function(_super) {
    __extends(JSONPConnection_, _super);
    function JSONPConnection_(req, _dom, baseResponseOptions) {
      var _this = this;
      _super.call(this);
      this._dom = _dom;
      this.baseResponseOptions = baseResponseOptions;
      this._finished = false;
      if (req.method !== RequestMethod.Get) {
        throw new TypeError(JSONP_ERR_WRONG_METHOD);
      }
      this.request = req;
      this.response = new rxjs_Observable.Observable(function(responseObserver) {
        _this.readyState = ReadyState.Loading;
        var id = _this._id = _dom.nextRequestID();
        _dom.exposeConnection(id, _this);
        var callback = _dom.requestCallback(_this._id);
        var url = req.url;
        if (url.indexOf('=JSONP_CALLBACK&') > -1) {
          url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
        } else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
          url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
        }
        var script = _this._script = _dom.build(url);
        var onLoad = function(event) {
          if (_this.readyState === ReadyState.Cancelled)
            return;
          _this.readyState = ReadyState.Done;
          _dom.cleanup(script);
          if (!_this._finished) {
            var responseOptions_1 = new ResponseOptions({
              body: JSONP_ERR_NO_CALLBACK,
              type: ResponseType.Error,
              url: url
            });
            if (baseResponseOptions) {
              responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
            }
            responseObserver.error(new Response(responseOptions_1));
            return;
          }
          var responseOptions = new ResponseOptions({
            body: _this._responseData,
            url: url
          });
          if (_this.baseResponseOptions) {
            responseOptions = _this.baseResponseOptions.merge(responseOptions);
          }
          responseObserver.next(new Response(responseOptions));
          responseObserver.complete();
        };
        var onError = function(error) {
          if (_this.readyState === ReadyState.Cancelled)
            return;
          _this.readyState = ReadyState.Done;
          _dom.cleanup(script);
          var responseOptions = new ResponseOptions({
            body: error.message,
            type: ResponseType.Error
          });
          if (baseResponseOptions) {
            responseOptions = baseResponseOptions.merge(responseOptions);
          }
          responseObserver.error(new Response(responseOptions));
        };
        script.addEventListener('load', onLoad);
        script.addEventListener('error', onError);
        _dom.send(script);
        return function() {
          _this.readyState = ReadyState.Cancelled;
          script.removeEventListener('load', onLoad);
          script.removeEventListener('error', onError);
          _this._dom.cleanup(script);
        };
      });
    }
    JSONPConnection_.prototype.finished = function(data) {
      this._finished = true;
      this._dom.removeConnection(this._id);
      if (this.readyState === ReadyState.Cancelled)
        return;
      this._responseData = data;
    };
    return JSONPConnection_;
  }(JSONPConnection));
  var JSONPBackend = (function(_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
      _super.apply(this, arguments);
    }
    return JSONPBackend;
  }(ConnectionBackend));
  var JSONPBackend_ = (function(_super) {
    __extends(JSONPBackend_, _super);
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
      _super.call(this);
      this._browserJSONP = _browserJSONP;
      this._baseResponseOptions = _baseResponseOptions;
    }
    JSONPBackend_.prototype.createConnection = function(request) {
      return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend_.decorators = [{type: _angular_core.Injectable}];
    JSONPBackend_.ctorParameters = function() {
      return [{type: BrowserJsonp}, {type: ResponseOptions}];
    };
    return JSONPBackend_;
  }(JSONPBackend));
  var XSSI_PREFIX = /^\)\]\}',?\n/;
  var XHRConnection = (function() {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
      var _this = this;
      this.request = req;
      this.response = new rxjs_Observable.Observable(function(responseObserver) {
        var _xhr = browserXHR.build();
        _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
        if (req.withCredentials != null) {
          _xhr.withCredentials = req.withCredentials;
        }
        var onLoad = function() {
          var status = _xhr.status === 1223 ? 204 : _xhr.status;
          var body = null;
          if (status !== 204) {
            body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
            if (typeof body === 'string') {
              body = body.replace(XSSI_PREFIX, '');
            }
          }
          if (status === 0) {
            status = body ? 200 : 0;
          }
          var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
          var url = getResponseURL(_xhr) || req.url;
          var statusText = _xhr.statusText || 'OK';
          var responseOptions = new ResponseOptions({
            body: body,
            status: status,
            headers: headers,
            statusText: statusText,
            url: url
          });
          if (baseResponseOptions != null) {
            responseOptions = baseResponseOptions.merge(responseOptions);
          }
          var response = new Response(responseOptions);
          response.ok = isSuccess(status);
          if (response.ok) {
            responseObserver.next(response);
            responseObserver.complete();
            return;
          }
          responseObserver.error(response);
        };
        var onError = function(err) {
          var responseOptions = new ResponseOptions({
            body: err,
            type: ResponseType.Error,
            status: _xhr.status,
            statusText: _xhr.statusText
          });
          if (baseResponseOptions != null) {
            responseOptions = baseResponseOptions.merge(responseOptions);
          }
          responseObserver.error(new Response(responseOptions));
        };
        _this.setDetectedContentType(req, _xhr);
        if (req.headers == null) {
          req.headers = new Headers();
        }
        if (!req.headers.has('Accept')) {
          req.headers.append('Accept', 'application/json, text/plain, */*');
        }
        req.headers.forEach(function(values, name) {
          return _xhr.setRequestHeader(name, values.join(','));
        });
        if (req.responseType != null && _xhr.responseType != null) {
          switch (req.responseType) {
            case ResponseContentType.ArrayBuffer:
              _xhr.responseType = 'arraybuffer';
              break;
            case ResponseContentType.Json:
              _xhr.responseType = 'json';
              break;
            case ResponseContentType.Text:
              _xhr.responseType = 'text';
              break;
            case ResponseContentType.Blob:
              _xhr.responseType = 'blob';
              break;
            default:
              throw new Error('The selected responseType is not supported');
          }
        }
        _xhr.addEventListener('load', onLoad);
        _xhr.addEventListener('error', onError);
        _xhr.send(_this.request.getBody());
        return function() {
          _xhr.removeEventListener('load', onLoad);
          _xhr.removeEventListener('error', onError);
          _xhr.abort();
        };
      });
    }
    XHRConnection.prototype.setDetectedContentType = function(req, _xhr) {
      if (req.headers != null && req.headers.get('Content-Type') != null) {
        return;
      }
      switch (req.contentType) {
        case ContentType.NONE:
          break;
        case ContentType.JSON:
          _xhr.setRequestHeader('content-type', 'application/json');
          break;
        case ContentType.FORM:
          _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          break;
        case ContentType.TEXT:
          _xhr.setRequestHeader('content-type', 'text/plain');
          break;
        case ContentType.BLOB:
          var blob = req.blob();
          if (blob.type) {
            _xhr.setRequestHeader('content-type', blob.type);
          }
          break;
      }
    };
    return XHRConnection;
  }());
  var CookieXSRFStrategy = (function() {
    function CookieXSRFStrategy(_cookieName, _headerName) {
      if (_cookieName === void 0) {
        _cookieName = 'XSRF-TOKEN';
      }
      if (_headerName === void 0) {
        _headerName = 'X-XSRF-TOKEN';
      }
      this._cookieName = _cookieName;
      this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function(req) {
      var xsrfToken = _angular_platformBrowser.__platform_browser_private__.getDOM().getCookie(this._cookieName);
      if (xsrfToken) {
        req.headers.set(this._headerName, xsrfToken);
      }
    };
    return CookieXSRFStrategy;
  }());
  var XHRBackend = (function() {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
      this._browserXHR = _browserXHR;
      this._baseResponseOptions = _baseResponseOptions;
      this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function(request) {
      this._xsrfStrategy.configureRequest(request);
      return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [{type: _angular_core.Injectable}];
    XHRBackend.ctorParameters = function() {
      return [{type: BrowserXhr}, {type: ResponseOptions}, {type: XSRFStrategy}];
    };
    return XHRBackend;
  }());
  var __extends$3 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var RequestOptions = (function() {
    function RequestOptions(_a) {
      var _b = _a === void 0 ? {} : _a,
          method = _b.method,
          headers = _b.headers,
          body = _b.body,
          url = _b.url,
          search = _b.search,
          withCredentials = _b.withCredentials,
          responseType = _b.responseType;
      this.method = method != null ? normalizeMethodName(method) : null;
      this.headers = headers != null ? headers : null;
      this.body = body != null ? body : null;
      this.url = url != null ? url : null;
      this.search = search != null ? (typeof search === 'string' ? new URLSearchParams(search) : search) : null;
      this.withCredentials = withCredentials != null ? withCredentials : null;
      this.responseType = responseType != null ? responseType : null;
    }
    RequestOptions.prototype.merge = function(options) {
      return new RequestOptions({
        method: options && options.method != null ? options.method : this.method,
        headers: options && options.headers != null ? options.headers : new Headers(this.headers),
        body: options && options.body != null ? options.body : this.body,
        url: options && options.url != null ? options.url : this.url,
        search: options && options.search != null ? (typeof options.search === 'string' ? new URLSearchParams(options.search) : options.search.clone()) : this.search,
        withCredentials: options && options.withCredentials != null ? options.withCredentials : this.withCredentials,
        responseType: options && options.responseType != null ? options.responseType : this.responseType
      });
    };
    return RequestOptions;
  }());
  var BaseRequestOptions = (function(_super) {
    __extends$3(BaseRequestOptions, _super);
    function BaseRequestOptions() {
      _super.call(this, {
        method: RequestMethod.Get,
        headers: new Headers()
      });
    }
    BaseRequestOptions.decorators = [{type: _angular_core.Injectable}];
    BaseRequestOptions.ctorParameters = function() {
      return [];
    };
    return BaseRequestOptions;
  }(RequestOptions));
  var __extends$5 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Request = (function(_super) {
    __extends$5(Request, _super);
    function Request(requestOptions) {
      _super.call(this);
      var url = requestOptions.url;
      this.url = requestOptions.url;
      if (requestOptions.search) {
        var search = requestOptions.search.toString();
        if (search.length > 0) {
          var prefix = '?';
          if (this.url.indexOf('?') != -1) {
            prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
          }
          this.url = url + prefix + search;
        }
      }
      this._body = requestOptions.body;
      this.method = normalizeMethodName(requestOptions.method);
      this.headers = new Headers(requestOptions.headers);
      this.contentType = this.detectContentType();
      this.withCredentials = requestOptions.withCredentials;
      this.responseType = requestOptions.responseType;
    }
    Request.prototype.detectContentType = function() {
      switch (this.headers.get('content-type')) {
        case 'application/json':
          return ContentType.JSON;
        case 'application/x-www-form-urlencoded':
          return ContentType.FORM;
        case 'multipart/form-data':
          return ContentType.FORM_DATA;
        case 'text/plain':
        case 'text/html':
          return ContentType.TEXT;
        case 'application/octet-stream':
          return ContentType.BLOB;
        default:
          return this.detectContentTypeFromBody();
      }
    };
    Request.prototype.detectContentTypeFromBody = function() {
      if (this._body == null) {
        return ContentType.NONE;
      } else if (this._body instanceof URLSearchParams) {
        return ContentType.FORM;
      } else if (this._body instanceof FormData) {
        return ContentType.FORM_DATA;
      } else if (this._body instanceof Blob$1) {
        return ContentType.BLOB;
      } else if (this._body instanceof ArrayBuffer$1) {
        return ContentType.ARRAY_BUFFER;
      } else if (this._body && typeof this._body == 'object') {
        return ContentType.JSON;
      } else {
        return ContentType.TEXT;
      }
    };
    Request.prototype.getBody = function() {
      switch (this.contentType) {
        case ContentType.JSON:
          return this.text();
        case ContentType.FORM:
          return this.text();
        case ContentType.FORM_DATA:
          return this._body;
        case ContentType.TEXT:
          return this.text();
        case ContentType.BLOB:
          return this.blob();
        case ContentType.ARRAY_BUFFER:
          return this.arrayBuffer();
        default:
          return null;
      }
    };
    return Request;
  }(Body));
  var noop = function() {};
  var w = typeof window == 'object' ? window : noop;
  var FormData = ((w))['FormData'] || noop;
  var Blob$1 = ((w))['Blob'] || noop;
  var ArrayBuffer$1 = ((w))['ArrayBuffer'] || noop;
  var __extends$4 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  function httpRequest(backend, request) {
    return backend.createConnection(request).response;
  }
  function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
      return newOptions.merge(new RequestOptions({
        method: providedOpts.method || method,
        url: providedOpts.url || url,
        search: providedOpts.search,
        headers: providedOpts.headers,
        body: providedOpts.body,
        withCredentials: providedOpts.withCredentials,
        responseType: providedOpts.responseType
      }));
    }
    return newOptions.merge(new RequestOptions({
      method: method,
      url: url
    }));
  }
  var Http = (function() {
    function Http(_backend, _defaultOptions) {
      this._backend = _backend;
      this._defaultOptions = _defaultOptions;
    }
    Http.prototype.request = function(url, options) {
      var responseObservable;
      if (typeof url === 'string') {
        responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, (url))));
      } else if (url instanceof Request) {
        responseObservable = httpRequest(this._backend, url);
      } else {
        throw new Error('First argument must be a url string or Request instance.');
      }
      return responseObservable;
    };
    Http.prototype.get = function(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    Http.prototype.post = function(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body: body})), options, RequestMethod.Post, url)));
    };
    Http.prototype.put = function(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body: body})), options, RequestMethod.Put, url)));
    };
    Http.prototype.delete = function(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    Http.prototype.patch = function(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body: body})), options, RequestMethod.Patch, url)));
    };
    Http.prototype.head = function(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    Http.prototype.options = function(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [{type: _angular_core.Injectable}];
    Http.ctorParameters = function() {
      return [{type: ConnectionBackend}, {type: RequestOptions}];
    };
    return Http;
  }());
  var Jsonp = (function(_super) {
    __extends$4(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
      _super.call(this, backend, defaultOptions);
    }
    Jsonp.prototype.request = function(url, options) {
      var responseObservable;
      if (typeof url === 'string') {
        url = new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, (url)));
      }
      if (url instanceof Request) {
        if (url.method !== RequestMethod.Get) {
          throw new Error('JSONP requests must use GET request method.');
        }
        responseObservable = httpRequest(this._backend, url);
      } else {
        throw new Error('First argument must be a url string or Request instance.');
      }
      return responseObservable;
    };
    Jsonp.decorators = [{type: _angular_core.Injectable}];
    Jsonp.ctorParameters = function() {
      return [{type: ConnectionBackend}, {type: RequestOptions}];
    };
    return Jsonp;
  }(Http));
  function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
  }
  function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
  }
  function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
  }
  var HttpModule = (function() {
    function HttpModule() {}
    HttpModule.decorators = [{
      type: _angular_core.NgModule,
      args: [{providers: [{
          provide: Http,
          useFactory: httpFactory,
          deps: [XHRBackend, RequestOptions]
        }, BrowserXhr, {
          provide: RequestOptions,
          useClass: BaseRequestOptions
        }, {
          provide: ResponseOptions,
          useClass: BaseResponseOptions
        }, XHRBackend, {
          provide: XSRFStrategy,
          useFactory: _createDefaultCookieXSRFStrategy
        }]}]
    }];
    HttpModule.ctorParameters = function() {
      return [];
    };
    return HttpModule;
  }());
  var JsonpModule = (function() {
    function JsonpModule() {}
    JsonpModule.decorators = [{
      type: _angular_core.NgModule,
      args: [{providers: [{
          provide: Jsonp,
          useFactory: jsonpFactory,
          deps: [JSONPBackend, RequestOptions]
        }, BrowserJsonp, {
          provide: RequestOptions,
          useClass: BaseRequestOptions
        }, {
          provide: ResponseOptions,
          useClass: BaseResponseOptions
        }, {
          provide: JSONPBackend,
          useClass: JSONPBackend_
        }]}]
    }];
    JsonpModule.ctorParameters = function() {
      return [];
    };
    return JsonpModule;
  }());
  var VERSION = new _angular_core.Version('2.4.1');
  exports.BrowserXhr = BrowserXhr;
  exports.JSONPBackend = JSONPBackend;
  exports.JSONPConnection = JSONPConnection;
  exports.CookieXSRFStrategy = CookieXSRFStrategy;
  exports.XHRBackend = XHRBackend;
  exports.XHRConnection = XHRConnection;
  exports.BaseRequestOptions = BaseRequestOptions;
  exports.RequestOptions = RequestOptions;
  exports.BaseResponseOptions = BaseResponseOptions;
  exports.ResponseOptions = ResponseOptions;
  exports.ReadyState = ReadyState;
  exports.RequestMethod = RequestMethod;
  exports.ResponseContentType = ResponseContentType;
  exports.ResponseType = ResponseType;
  exports.Headers = Headers;
  exports.Http = Http;
  exports.Jsonp = Jsonp;
  exports.HttpModule = HttpModule;
  exports.JsonpModule = JsonpModule;
  exports.Connection = Connection;
  exports.ConnectionBackend = ConnectionBackend;
  exports.XSRFStrategy = XSRFStrategy;
  exports.Request = Request;
  exports.Response = Response;
  exports.QueryEncoder = QueryEncoder;
  exports.URLSearchParams = URLSearchParams;
  exports.VERSION = VERSION;
}));

})();
(function() {
var define = System.amdDefine;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Subject'), require('rxjs/Observable')) : typeof define === 'function' && define.amd ? define("@angular/core/bundles/core.umd.js", ["exports", "rxjs/Subject", "rxjs/Observable"], factory) : (factory((global.ng = global.ng || {}, global.ng.core = global.ng.core || {}), global.Rx, global.Rx));
}(this, function(exports, rxjs_Subject, rxjs_Observable) {
  'use strict';
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = (self);
    } else {
      globalScope = (global);
    }
  } else {
    globalScope = (window);
  }
  function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
  }
  var global$1 = globalScope;
  function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
  }
  global$1.assert = function assert(condition) {};
  function isPresent(obj) {
    return obj != null;
  }
  function isBlank(obj) {
    return obj == null;
  }
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token == null) {
      return '' + token;
    }
    if (token.overriddenName) {
      return "" + token.overriddenName;
    }
    if (token.name) {
      return "" + token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
  }
  function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
  }
  function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
  }
  function print(obj) {
    console.log(obj);
  }
  function warn(obj) {
    console.warn(obj);
  }
  var _symbolIterator = null;
  function getSymbolIterator() {
    if (!_symbolIterator) {
      if (((globalScope)).Symbol && Symbol.iterator) {
        _symbolIterator = Symbol.iterator;
      } else {
        var keys = Object.getOwnPropertyNames(Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && ((Map)).prototype[key] === Map.prototype['entries']) {
            _symbolIterator = key;
          }
        }
      }
    }
    return _symbolIterator;
  }
  function isPrimitive(obj) {
    return !isJsObject(obj);
  }
  var _nextClassId = 0;
  var Reflect = global$1.Reflect;
  function extractAnnotation(annotation) {
    if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
      annotation = annotation.annotation;
    }
    return annotation;
  }
  function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
      throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
    }
    if (typeof fnOrArray === 'function') {
      return fnOrArray;
    }
    if (Array.isArray(fnOrArray)) {
      var annotations = fnOrArray;
      var annoLength = annotations.length - 1;
      var fn = fnOrArray[annoLength];
      if (typeof fn !== 'function') {
        throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
      }
      if (annoLength != fn.length) {
        throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
      }
      var paramsAnnotations = [];
      for (var i = 0,
          ii = annotations.length - 1; i < ii; i++) {
        var paramAnnotations = [];
        paramsAnnotations.push(paramAnnotations);
        var annotation = annotations[i];
        if (Array.isArray(annotation)) {
          for (var j = 0; j < annotation.length; j++) {
            paramAnnotations.push(extractAnnotation(annotation[j]));
          }
        } else if (typeof annotation === 'function') {
          paramAnnotations.push(extractAnnotation(annotation));
        } else {
          paramAnnotations.push(annotation);
        }
      }
      Reflect.defineMetadata('parameters', paramsAnnotations, fn);
      return fn;
    }
    throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
  }
  function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
      if (typeof clsDef.extends === 'function') {
        ((constructor)).prototype = proto = Object.create(((clsDef.extends)).prototype);
      } else {
        throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
      }
    }
    for (var key in clsDef) {
      if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
        proto[key] = applyParams(clsDef[key], key);
      }
    }
    if (this && this.annotations instanceof Array) {
      Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    var constructorName = constructor['name'];
    if (!constructorName || constructorName === 'constructor') {
      ((constructor))['overriddenName'] = "class" + _nextClassId++;
    }
    return (constructor);
  }
  function makeDecorator(name, props, parentClass, chainFn) {
    if (chainFn === void 0) {
      chainFn = null;
    }
    var metaCtor = makeMetadataCtor([props]);
    function DecoratorFactory(objOrType) {
      if (!(Reflect && Reflect.getOwnMetadata)) {
        throw 'reflect-metadata shim is required when using class decorators';
      }
      if (this instanceof DecoratorFactory) {
        metaCtor.call(this, objOrType);
        return this;
      }
      var annotationInstance = new ((DecoratorFactory))(objOrType);
      var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
      chainAnnotation.push(annotationInstance);
      var TypeDecorator = (function TypeDecorator(cls) {
        var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
        annotations.push(annotationInstance);
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
      });
      TypeDecorator.annotations = chainAnnotation;
      TypeDecorator.Class = Class;
      if (chainFn)
        chainFn(TypeDecorator);
      return TypeDecorator;
    }
    if (parentClass) {
      DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    DecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    ((DecoratorFactory)).annotationCls = DecoratorFactory;
    return DecoratorFactory;
  }
  function makeMetadataCtor(props) {
    return function ctor() {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      props.forEach(function(prop, i) {
        var argVal = args[i];
        if (Array.isArray(prop)) {
          _this[prop[0]] = argVal === undefined ? prop[1] : argVal;
        } else {
          for (var propName in prop) {
            _this[propName] = argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
          }
        }
      });
    };
  }
  function makeParamDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function ParamDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      if (this instanceof ParamDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      var annotationInstance = new ((_a = ((ParamDecoratorFactory))).bind.apply(_a, [void 0].concat(args)))();
      ((ParamDecorator)).annotation = annotationInstance;
      return ParamDecorator;
      function ParamDecorator(cls, unusedKey, index) {
        var parameters = Reflect.getOwnMetadata('parameters', cls) || [];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        parameters[index] = parameters[index] || [];
        parameters[index].push(annotationInstance);
        Reflect.defineMetadata('parameters', parameters, cls);
        return cls;
      }
      var _a;
    }
    if (parentClass) {
      ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    ((ParamDecoratorFactory)).annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
  }
  function makePropDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function PropDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      if (this instanceof PropDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      var decoratorInstance = new ((_a = ((PropDecoratorFactory))).bind.apply(_a, [void 0].concat(args)))();
      return function PropDecorator(target, name) {
        var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
        meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
        meta[name].unshift(decoratorInstance);
        Reflect.defineMetadata('propMetadata', meta, target.constructor);
      };
      var _a;
    }
    if (parentClass) {
      PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    PropDecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    ((PropDecoratorFactory)).annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
  }
  var Inject = makeParamDecorator('Inject', [['token', undefined]]);
  var Optional = makeParamDecorator('Optional', []);
  var Injectable = (makeDecorator('Injectable', []));
  var Self = makeParamDecorator('Self', []);
  var SkipSelf = makeParamDecorator('SkipSelf', []);
  var Host = makeParamDecorator('Host', []);
  var OpaqueToken = (function() {
    function OpaqueToken(_desc) {
      this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function() {
      return "Token " + this._desc;
    };
    OpaqueToken.decorators = [{type: Injectable}];
    OpaqueToken.ctorParameters = function() {
      return [null];
    };
    return OpaqueToken;
  }());
  var ANALYZE_FOR_ENTRY_COMPONENTS = new OpaqueToken('AnalyzeForEntryComponents');
  var Attribute = makeParamDecorator('Attribute', [['attributeName', undefined]]);
  var Query = (function() {
    function Query() {}
    return Query;
  }());
  var ContentChildren = (makePropDecorator('ContentChildren', [['selector', undefined], {
    first: false,
    isViewQuery: false,
    descendants: false,
    read: undefined
  }], Query));
  var ContentChild = makePropDecorator('ContentChild', [['selector', undefined], {
    first: true,
    isViewQuery: false,
    descendants: true,
    read: undefined
  }], Query);
  var ViewChildren = makePropDecorator('ViewChildren', [['selector', undefined], {
    first: false,
    isViewQuery: true,
    descendants: true,
    read: undefined
  }], Query);
  var ViewChild = makePropDecorator('ViewChild', [['selector', undefined], {
    first: true,
    isViewQuery: true,
    descendants: true,
    read: undefined
  }], Query);
  var ChangeDetectionStrategy = {};
  ChangeDetectionStrategy.OnPush = 0;
  ChangeDetectionStrategy.Default = 1;
  ChangeDetectionStrategy[ChangeDetectionStrategy.OnPush] = "OnPush";
  ChangeDetectionStrategy[ChangeDetectionStrategy.Default] = "Default";
  var ChangeDetectorStatus = {};
  ChangeDetectorStatus.CheckOnce = 0;
  ChangeDetectorStatus.Checked = 1;
  ChangeDetectorStatus.CheckAlways = 2;
  ChangeDetectorStatus.Detached = 3;
  ChangeDetectorStatus.Errored = 4;
  ChangeDetectorStatus.Destroyed = 5;
  ChangeDetectorStatus[ChangeDetectorStatus.CheckOnce] = "CheckOnce";
  ChangeDetectorStatus[ChangeDetectorStatus.Checked] = "Checked";
  ChangeDetectorStatus[ChangeDetectorStatus.CheckAlways] = "CheckAlways";
  ChangeDetectorStatus[ChangeDetectorStatus.Detached] = "Detached";
  ChangeDetectorStatus[ChangeDetectorStatus.Errored] = "Errored";
  ChangeDetectorStatus[ChangeDetectorStatus.Destroyed] = "Destroyed";
  function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return isBlank(changeDetectionStrategy) || changeDetectionStrategy === ChangeDetectionStrategy.Default;
  }
  var Directive = (makeDecorator('Directive', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    providers: undefined,
    exportAs: undefined,
    queries: undefined
  }));
  var Component = (makeDecorator('Component', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    exportAs: undefined,
    moduleId: undefined,
    providers: undefined,
    viewProviders: undefined,
    changeDetection: ChangeDetectionStrategy.Default,
    queries: undefined,
    templateUrl: undefined,
    template: undefined,
    styleUrls: undefined,
    styles: undefined,
    animations: undefined,
    encapsulation: undefined,
    interpolation: undefined,
    entryComponents: undefined
  }, Directive));
  var Pipe = (makeDecorator('Pipe', {
    name: undefined,
    pure: true
  }));
  var Input = makePropDecorator('Input', [['bindingPropertyName', undefined]]);
  var Output = makePropDecorator('Output', [['bindingPropertyName', undefined]]);
  var HostBinding = makePropDecorator('HostBinding', [['hostPropertyName', undefined]]);
  var HostListener = makePropDecorator('HostListener', [['eventName', undefined], ['args', []]]);
  var LifecycleHooks = {};
  LifecycleHooks.OnInit = 0;
  LifecycleHooks.OnDestroy = 1;
  LifecycleHooks.DoCheck = 2;
  LifecycleHooks.OnChanges = 3;
  LifecycleHooks.AfterContentInit = 4;
  LifecycleHooks.AfterContentChecked = 5;
  LifecycleHooks.AfterViewInit = 6;
  LifecycleHooks.AfterViewChecked = 7;
  LifecycleHooks[LifecycleHooks.OnInit] = "OnInit";
  LifecycleHooks[LifecycleHooks.OnDestroy] = "OnDestroy";
  LifecycleHooks[LifecycleHooks.DoCheck] = "DoCheck";
  LifecycleHooks[LifecycleHooks.OnChanges] = "OnChanges";
  LifecycleHooks[LifecycleHooks.AfterContentInit] = "AfterContentInit";
  LifecycleHooks[LifecycleHooks.AfterContentChecked] = "AfterContentChecked";
  LifecycleHooks[LifecycleHooks.AfterViewInit] = "AfterViewInit";
  LifecycleHooks[LifecycleHooks.AfterViewChecked] = "AfterViewChecked";
  var LIFECYCLE_HOOKS_VALUES = [LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges, LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit, LifecycleHooks.AfterViewChecked];
  var OnChanges = (function() {
    function OnChanges() {}
    OnChanges.prototype.ngOnChanges = function(changes) {};
    return OnChanges;
  }());
  var OnInit = (function() {
    function OnInit() {}
    OnInit.prototype.ngOnInit = function() {};
    return OnInit;
  }());
  var DoCheck = (function() {
    function DoCheck() {}
    DoCheck.prototype.ngDoCheck = function() {};
    return DoCheck;
  }());
  var OnDestroy = (function() {
    function OnDestroy() {}
    OnDestroy.prototype.ngOnDestroy = function() {};
    return OnDestroy;
  }());
  var AfterContentInit = (function() {
    function AfterContentInit() {}
    AfterContentInit.prototype.ngAfterContentInit = function() {};
    return AfterContentInit;
  }());
  var AfterContentChecked = (function() {
    function AfterContentChecked() {}
    AfterContentChecked.prototype.ngAfterContentChecked = function() {};
    return AfterContentChecked;
  }());
  var AfterViewInit = (function() {
    function AfterViewInit() {}
    AfterViewInit.prototype.ngAfterViewInit = function() {};
    return AfterViewInit;
  }());
  var AfterViewChecked = (function() {
    function AfterViewChecked() {}
    AfterViewChecked.prototype.ngAfterViewChecked = function() {};
    return AfterViewChecked;
  }());
  var CUSTOM_ELEMENTS_SCHEMA = {name: 'custom-elements'};
  var NO_ERRORS_SCHEMA = {name: 'no-errors-schema'};
  var NgModule = (makeDecorator('NgModule', {
    providers: undefined,
    declarations: undefined,
    imports: undefined,
    exports: undefined,
    entryComponents: undefined,
    bootstrap: undefined,
    schemas: undefined,
    id: undefined
  }));
  var ViewEncapsulation = {};
  ViewEncapsulation.Emulated = 0;
  ViewEncapsulation.Native = 1;
  ViewEncapsulation.None = 2;
  ViewEncapsulation[ViewEncapsulation.Emulated] = "Emulated";
  ViewEncapsulation[ViewEncapsulation.Native] = "Native";
  ViewEncapsulation[ViewEncapsulation.None] = "None";
  var ViewMetadata = (function() {
    function ViewMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          templateUrl = _b.templateUrl,
          template = _b.template,
          encapsulation = _b.encapsulation,
          styles = _b.styles,
          styleUrls = _b.styleUrls,
          animations = _b.animations,
          interpolation = _b.interpolation;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.encapsulation = encapsulation;
      this.animations = animations;
      this.interpolation = interpolation;
    }
    return ViewMetadata;
  }());
  var Version = (function() {
    function Version(full) {
      this.full = full;
    }
    Object.defineProperty(Version.prototype, "major", {
      get: function() {
        return this.full.split('.')[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
      get: function() {
        return this.full.split('.')[1];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Version.prototype, "patch", {
      get: function() {
        return this.full.split('.').slice(2).join('.');
      },
      enumerable: true,
      configurable: true
    });
    return Version;
  }());
  var VERSION = new Version('2.4.1');
  function forwardRef(forwardRefFn) {
    ((forwardRefFn)).__forward_ref__ = forwardRef;
    ((forwardRefFn)).toString = function() {
      return stringify(this());
    };
    return (((forwardRefFn)));
  }
  function resolveForwardRef(type) {
    if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
      return ((type))();
    } else {
      return type;
    }
  }
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  function unimplemented() {
    throw new Error('unimplemented');
  }
  var BaseError = (function(_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
      _super.call(this, message);
      var nativeError = new Error(message);
      this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
      get: function() {
        return this._nativeError.message;
      },
      set: function(message) {
        this._nativeError.message = message;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
      get: function() {
        return this._nativeError.name;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
      get: function() {
        return ((this._nativeError)).stack;
      },
      set: function(value) {
        ((this._nativeError)).stack = value;
      },
      enumerable: true,
      configurable: true
    });
    BaseError.prototype.toString = function() {
      return this._nativeError.toString();
    };
    return BaseError;
  }(Error));
  var WrappedError = (function(_super) {
    __extends(WrappedError, _super);
    function WrappedError(message, error) {
      _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
      this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
      get: function() {
        return (((this.originalError instanceof Error ? this.originalError : this._nativeError))).stack;
      },
      enumerable: true,
      configurable: true
    });
    return WrappedError;
  }(BaseError));
  var _THROW_IF_NOT_FOUND = new Object();
  var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
  var _NullInjector = (function() {
    function _NullInjector() {}
    _NullInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = _THROW_IF_NOT_FOUND;
      }
      if (notFoundValue === _THROW_IF_NOT_FOUND) {
        throw new Error("No provider for " + stringify(token) + "!");
      }
      return notFoundValue;
    };
    return _NullInjector;
  }());
  var Injector = (function() {
    function Injector() {}
    Injector.prototype.get = function(token, notFoundValue) {
      return unimplemented();
    };
    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    Injector.NULL = new _NullInjector();
    return Injector;
  }());
  var __extends$1 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
      if (res.indexOf(keys[i]) > -1) {
        res.push(keys[i]);
        return res;
      }
      res.push(keys[i]);
    }
    return res;
  }
  function constructResolvingPath(keys) {
    if (keys.length > 1) {
      var reversed = findFirstClosedCycle(keys.slice().reverse());
      var tokenStrs = reversed.map(function(k) {
        return stringify(k.token);
      });
      return ' (' + tokenStrs.join(' -> ') + ')';
    }
    return '';
  }
  var AbstractProviderError = (function(_super) {
    __extends$1(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
      _super.call(this, 'DI Error');
      this.keys = [key];
      this.injectors = [injector];
      this.constructResolvingMessage = constructResolvingMessage;
      this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
      this.message = this.constructResolvingMessage(this.keys);
    };
    return AbstractProviderError;
  }(BaseError));
  var NoProviderError = (function(_super) {
    __extends$1(NoProviderError, _super);
    function NoProviderError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        var first = stringify(keys[0].token);
        return "No provider for " + first + "!" + constructResolvingPath(keys);
      });
    }
    return NoProviderError;
  }(AbstractProviderError));
  var CyclicDependencyError = (function(_super) {
    __extends$1(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
      });
    }
    return CyclicDependencyError;
  }(AbstractProviderError));
  var InstantiationError = (function(_super) {
    __extends$1(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
      _super.call(this, 'DI Error', originalException);
      this.keys = [key];
      this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "message", {
      get: function() {
        var first = stringify(this.keys[0].token);
        return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
      get: function() {
        return this.keys[0];
      },
      enumerable: true,
      configurable: true
    });
    return InstantiationError;
  }(WrappedError));
  var InvalidProviderError = (function(_super) {
    __extends$1(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
      _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
    }
    return InvalidProviderError;
  }(BaseError));
  var NoAnnotationError = (function(_super) {
    __extends$1(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
      _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function(typeOrFunc, params) {
      var signature = [];
      for (var i = 0,
          ii = params.length; i < ii; i++) {
        var parameter = params[i];
        if (!parameter || parameter.length == 0) {
          signature.push('?');
        } else {
          signature.push(parameter.map(stringify).join(' '));
        }
      }
      return 'Cannot resolve all parameters for \'' + stringify(typeOrFunc) + '\'(' + signature.join(', ') + '). ' + 'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' + stringify(typeOrFunc) + '\' is decorated with Injectable.';
    };
    return NoAnnotationError;
  }(BaseError));
  var OutOfBoundsError = (function(_super) {
    __extends$1(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
      _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
  }(BaseError));
  var MixingMultiProvidersWithRegularProvidersError = (function(_super) {
    __extends$1(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
      _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' + provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
  }(BaseError));
  var ReflectiveKey = (function() {
    function ReflectiveKey(token, id) {
      this.token = token;
      this.id = id;
      if (!token) {
        throw new Error('Token must be defined!');
      }
    }
    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
      get: function() {
        return stringify(this.token);
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveKey.get = function(token) {
      return _globalKeyRegistry.get(resolveForwardRef(token));
    };
    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
      get: function() {
        return _globalKeyRegistry.numberOfKeys;
      },
      enumerable: true,
      configurable: true
    });
    return ReflectiveKey;
  }());
  var KeyRegistry = (function() {
    function KeyRegistry() {
      this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function(token) {
      if (token instanceof ReflectiveKey)
        return token;
      if (this._allKeys.has(token)) {
        return this._allKeys.get(token);
      }
      var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
      this._allKeys.set(token, newKey);
      return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
      get: function() {
        return this._allKeys.size;
      },
      enumerable: true,
      configurable: true
    });
    return KeyRegistry;
  }());
  var _globalKeyRegistry = new KeyRegistry();
  var Type = Function;
  var DELEGATE_CTOR = /^function\s+\S+\(\)\s*{\s*("use strict";)?\s*(return\s+)?\S+\.apply\(this,\s*arguments\)/;
  var ReflectionCapabilities = (function() {
    function ReflectionCapabilities(reflect) {
      this._reflect = reflect || global$1.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function() {
      return true;
    };
    ReflectionCapabilities.prototype.factory = function(t) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new (t.bind.apply(t, [void 0].concat(args)))();
      };
    };
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function(paramTypes, paramAnnotations) {
      var result;
      if (typeof paramTypes === 'undefined') {
        result = new Array(paramAnnotations.length);
      } else {
        result = new Array(paramTypes.length);
      }
      for (var i = 0; i < result.length; i++) {
        if (typeof paramTypes === 'undefined') {
          result[i] = [];
        } else if (paramTypes[i] != Object) {
          result[i] = [paramTypes[i]];
        } else {
          result[i] = [];
        }
        if (paramAnnotations && isPresent(paramAnnotations[i])) {
          result[i] = result[i].concat(paramAnnotations[i]);
        }
      }
      return result;
    };
    ReflectionCapabilities.prototype._ownParameters = function(type, parentCtor) {
      if (DELEGATE_CTOR.exec(type.toString())) {
        return null;
      }
      if (((type)).parameters && ((type)).parameters !== parentCtor.parameters) {
        return ((type)).parameters;
      }
      var tsickleCtorParams = ((type)).ctorParameters;
      if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
        var ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
        var paramTypes = ctorParameters.map(function(ctorParam) {
          return ctorParam && ctorParam.type;
        });
        var paramAnnotations = ctorParameters.map(function(ctorParam) {
          return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
        });
        return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
      }
      if (isPresent(this._reflect) && isPresent(this._reflect.getOwnMetadata)) {
        var paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
        var paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
        if (paramTypes || paramAnnotations) {
          return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
      }
      return new Array(((type.length))).fill(undefined);
    };
    ReflectionCapabilities.prototype.parameters = function(type) {
      var parentCtor = Object.getPrototypeOf(type.prototype).constructor;
      var parameters = this._ownParameters(type, parentCtor);
      if (!parameters && parentCtor !== Object) {
        parameters = this.parameters(parentCtor);
      }
      return parameters || [];
    };
    ReflectionCapabilities.prototype._ownAnnotations = function(typeOrFunc, parentCtor) {
      if (((typeOrFunc)).annotations && ((typeOrFunc)).annotations !== parentCtor.annotations) {
        var annotations = ((typeOrFunc)).annotations;
        if (typeof annotations === 'function' && annotations.annotations) {
          annotations = annotations.annotations;
        }
        return annotations;
      }
      if (((typeOrFunc)).decorators && ((typeOrFunc)).decorators !== parentCtor.decorators) {
        return convertTsickleDecoratorIntoMetadata(((typeOrFunc)).decorators);
      }
      if (this._reflect && this._reflect.getOwnMetadata) {
        return this._reflect.getOwnMetadata('annotations', typeOrFunc);
      }
    };
    ReflectionCapabilities.prototype.annotations = function(typeOrFunc) {
      var parentCtor = Object.getPrototypeOf(typeOrFunc.prototype).constructor;
      var ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
      var parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
      return parentAnnotations.concat(ownAnnotations);
    };
    ReflectionCapabilities.prototype._ownPropMetadata = function(typeOrFunc, parentCtor) {
      if (((typeOrFunc)).propMetadata && ((typeOrFunc)).propMetadata !== parentCtor.propMetadata) {
        var propMetadata = ((typeOrFunc)).propMetadata;
        if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
          propMetadata = propMetadata.propMetadata;
        }
        return propMetadata;
      }
      if (((typeOrFunc)).propDecorators && ((typeOrFunc)).propDecorators !== parentCtor.propDecorators) {
        var propDecorators_1 = ((typeOrFunc)).propDecorators;
        var propMetadata_1 = ({});
        Object.keys(propDecorators_1).forEach(function(prop) {
          propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
        });
        return propMetadata_1;
      }
      if (this._reflect && this._reflect.getOwnMetadata) {
        return this._reflect.getOwnMetadata('propMetadata', typeOrFunc);
      }
    };
    ReflectionCapabilities.prototype.propMetadata = function(typeOrFunc) {
      var parentCtor = Object.getPrototypeOf(typeOrFunc.prototype).constructor;
      var propMetadata = {};
      if (parentCtor !== Object) {
        var parentPropMetadata_1 = this.propMetadata(parentCtor);
        Object.keys(parentPropMetadata_1).forEach(function(propName) {
          propMetadata[propName] = parentPropMetadata_1[propName];
        });
      }
      var ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
      if (ownPropMetadata) {
        Object.keys(ownPropMetadata).forEach(function(propName) {
          var decorators = [];
          if (propMetadata.hasOwnProperty(propName)) {
            decorators.push.apply(decorators, propMetadata[propName]);
          }
          decorators.push.apply(decorators, ownPropMetadata[propName]);
          propMetadata[propName] = decorators;
        });
      }
      return propMetadata;
    };
    ReflectionCapabilities.prototype.hasLifecycleHook = function(type, lcProperty) {
      return type instanceof Type && lcProperty in type.prototype;
    };
    ReflectionCapabilities.prototype.getter = function(name) {
      return ((new Function('o', 'return o.' + name + ';')));
    };
    ReflectionCapabilities.prototype.setter = function(name) {
      return ((new Function('o', 'v', 'return o.' + name + ' = v;')));
    };
    ReflectionCapabilities.prototype.method = function(name) {
      var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
      return ((new Function('o', 'args', functionBody)));
    };
    ReflectionCapabilities.prototype.importUri = function(type) {
      if (typeof type === 'object' && type['filePath']) {
        return type['filePath'];
      }
      return "./" + stringify(type);
    };
    ReflectionCapabilities.prototype.resolveIdentifier = function(name, moduleUrl, runtime) {
      return runtime;
    };
    ReflectionCapabilities.prototype.resolveEnum = function(enumIdentifier, name) {
      return enumIdentifier[name];
    };
    return ReflectionCapabilities;
  }());
  function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
      return [];
    }
    return decoratorInvocations.map(function(decoratorInvocation) {
      var decoratorType = decoratorInvocation.type;
      var annotationCls = decoratorType.annotationCls;
      var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
      return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
  }
  var ReflectorReader = (function() {
    function ReflectorReader() {}
    ReflectorReader.prototype.parameters = function(typeOrFunc) {};
    ReflectorReader.prototype.annotations = function(typeOrFunc) {};
    ReflectorReader.prototype.propMetadata = function(typeOrFunc) {};
    ReflectorReader.prototype.importUri = function(typeOrFunc) {};
    ReflectorReader.prototype.resolveIdentifier = function(name, moduleUrl, runtime) {};
    ReflectorReader.prototype.resolveEnum = function(identifier, name) {};
    return ReflectorReader;
  }());
  var __extends$2 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Reflector = (function(_super) {
    __extends$2(Reflector, _super);
    function Reflector(reflectionCapabilities) {
      _super.call(this);
      this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.updateCapabilities = function(caps) {
      this.reflectionCapabilities = caps;
    };
    Reflector.prototype.factory = function(type) {
      return this.reflectionCapabilities.factory(type);
    };
    Reflector.prototype.parameters = function(typeOrFunc) {
      return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    Reflector.prototype.annotations = function(typeOrFunc) {
      return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    Reflector.prototype.propMetadata = function(typeOrFunc) {
      return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    Reflector.prototype.hasLifecycleHook = function(type, lcProperty) {
      return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    };
    Reflector.prototype.getter = function(name) {
      return this.reflectionCapabilities.getter(name);
    };
    Reflector.prototype.setter = function(name) {
      return this.reflectionCapabilities.setter(name);
    };
    Reflector.prototype.method = function(name) {
      return this.reflectionCapabilities.method(name);
    };
    Reflector.prototype.importUri = function(type) {
      return this.reflectionCapabilities.importUri(type);
    };
    Reflector.prototype.resolveIdentifier = function(name, moduleUrl, runtime) {
      return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
    };
    Reflector.prototype.resolveEnum = function(identifier, name) {
      return this.reflectionCapabilities.resolveEnum(identifier, name);
    };
    return Reflector;
  }(ReflectorReader));
  var reflector = new Reflector(new ReflectionCapabilities());
  var ReflectiveDependency = (function() {
    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
      this.key = key;
      this.optional = optional;
      this.lowerBoundVisibility = lowerBoundVisibility;
      this.upperBoundVisibility = upperBoundVisibility;
      this.properties = properties;
    }
    ReflectiveDependency.fromKey = function(key) {
      return new ReflectiveDependency(key, false, null, null, []);
    };
    return ReflectiveDependency;
  }());
  var _EMPTY_LIST = [];
  var ResolvedReflectiveProvider_ = (function() {
    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
      this.key = key;
      this.resolvedFactories = resolvedFactories;
      this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
      get: function() {
        return this.resolvedFactories[0];
      },
      enumerable: true,
      configurable: true
    });
    return ResolvedReflectiveProvider_;
  }());
  var ResolvedReflectiveFactory = (function() {
    function ResolvedReflectiveFactory(factory, dependencies) {
      this.factory = factory;
      this.dependencies = dependencies;
    }
    return ResolvedReflectiveFactory;
  }());
  function resolveReflectiveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (provider.useClass) {
      var useClass = resolveForwardRef(provider.useClass);
      factoryFn = reflector.factory(useClass);
      resolvedDeps = _dependenciesFor(useClass);
    } else if (provider.useExisting) {
      factoryFn = function(aliasInstance) {
        return aliasInstance;
      };
      resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
    } else if (provider.useFactory) {
      factoryFn = provider.useFactory;
      resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
    } else {
      factoryFn = function() {
        return provider.useValue;
      };
      resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
  }
  function resolveReflectiveProvider(provider) {
    return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
  }
  function resolveReflectiveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveReflectiveProvider);
    var resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
    return Array.from(resolvedProviderMap.values());
  }
  function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
      var provider = providers[i];
      var existing = normalizedProvidersMap.get(provider.key.id);
      if (existing) {
        if (provider.multiProvider !== existing.multiProvider) {
          throw new MixingMultiProvidersWithRegularProvidersError(existing, provider);
        }
        if (provider.multiProvider) {
          for (var j = 0; j < provider.resolvedFactories.length; j++) {
            existing.resolvedFactories.push(provider.resolvedFactories[j]);
          }
        } else {
          normalizedProvidersMap.set(provider.key.id, provider);
        }
      } else {
        var resolvedProvider = void 0;
        if (provider.multiProvider) {
          resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
        } else {
          resolvedProvider = provider;
        }
        normalizedProvidersMap.set(provider.key.id, resolvedProvider);
      }
    }
    return normalizedProvidersMap;
  }
  function _normalizeProviders(providers, res) {
    providers.forEach(function(b) {
      if (b instanceof Type) {
        res.push({
          provide: b,
          useClass: b
        });
      } else if (b && typeof b == 'object' && ((b)).provide !== undefined) {
        res.push((b));
      } else if (b instanceof Array) {
        _normalizeProviders(b, res);
      } else {
        throw new InvalidProviderError(b);
      }
    });
    return res;
  }
  function constructDependencies(typeOrFunc, dependencies) {
    if (!dependencies) {
      return _dependenciesFor(typeOrFunc);
    } else {
      var params_1 = dependencies.map(function(t) {
        return [t];
      });
      return dependencies.map(function(t) {
        return _extractToken(typeOrFunc, t, params_1);
      });
    }
  }
  function _dependenciesFor(typeOrFunc) {
    var params = reflector.parameters(typeOrFunc);
    if (!params)
      return [];
    if (params.some(function(p) {
      return p == null;
    })) {
      throw new NoAnnotationError(typeOrFunc, params);
    }
    return params.map(function(p) {
      return _extractToken(typeOrFunc, p, params);
    });
  }
  function _extractToken(typeOrFunc, metadata, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!Array.isArray(metadata)) {
      if (metadata instanceof Inject) {
        return _createDependency(metadata.token, optional, null, null, depProps);
      } else {
        return _createDependency(metadata, optional, null, null, depProps);
      }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
      var paramMetadata = metadata[i];
      if (paramMetadata instanceof Type) {
        token = paramMetadata;
      } else if (paramMetadata instanceof Inject) {
        token = paramMetadata.token;
      } else if (paramMetadata instanceof Optional) {
        optional = true;
      } else if (paramMetadata instanceof Self) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof Host) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof SkipSelf) {
        lowerBoundVisibility = paramMetadata;
      }
    }
    token = resolveForwardRef(token);
    if (token != null) {
      return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    } else {
      throw new NoAnnotationError(typeOrFunc, params);
    }
  }
  function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new ReflectiveDependency(ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
  }
  var _MAX_CONSTRUCTION_COUNTER = 10;
  var UNDEFINED = new Object();
  var ReflectiveProtoInjectorInlineStrategy = (function() {
    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
      this.provider0 = null;
      this.provider1 = null;
      this.provider2 = null;
      this.provider3 = null;
      this.provider4 = null;
      this.provider5 = null;
      this.provider6 = null;
      this.provider7 = null;
      this.provider8 = null;
      this.provider9 = null;
      this.keyId0 = null;
      this.keyId1 = null;
      this.keyId2 = null;
      this.keyId3 = null;
      this.keyId4 = null;
      this.keyId5 = null;
      this.keyId6 = null;
      this.keyId7 = null;
      this.keyId8 = null;
      this.keyId9 = null;
      var length = providers.length;
      if (length > 0) {
        this.provider0 = providers[0];
        this.keyId0 = providers[0].key.id;
      }
      if (length > 1) {
        this.provider1 = providers[1];
        this.keyId1 = providers[1].key.id;
      }
      if (length > 2) {
        this.provider2 = providers[2];
        this.keyId2 = providers[2].key.id;
      }
      if (length > 3) {
        this.provider3 = providers[3];
        this.keyId3 = providers[3].key.id;
      }
      if (length > 4) {
        this.provider4 = providers[4];
        this.keyId4 = providers[4].key.id;
      }
      if (length > 5) {
        this.provider5 = providers[5];
        this.keyId5 = providers[5].key.id;
      }
      if (length > 6) {
        this.provider6 = providers[6];
        this.keyId6 = providers[6].key.id;
      }
      if (length > 7) {
        this.provider7 = providers[7];
        this.keyId7 = providers[7].key.id;
      }
      if (length > 8) {
        this.provider8 = providers[8];
        this.keyId8 = providers[8].key.id;
      }
      if (length > 9) {
        this.provider9 = providers[9];
        this.keyId9 = providers[9].key.id;
      }
    }
    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function(index) {
      if (index == 0)
        return this.provider0;
      if (index == 1)
        return this.provider1;
      if (index == 2)
        return this.provider2;
      if (index == 3)
        return this.provider3;
      if (index == 4)
        return this.provider4;
      if (index == 5)
        return this.provider5;
      if (index == 6)
        return this.provider6;
      if (index == 7)
        return this.provider7;
      if (index == 8)
        return this.provider8;
      if (index == 9)
        return this.provider9;
      throw new OutOfBoundsError(index);
    };
    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function(injector) {
      return new ReflectiveInjectorInlineStrategy(injector, this);
    };
    return ReflectiveProtoInjectorInlineStrategy;
  }());
  var ReflectiveProtoInjectorDynamicStrategy = (function() {
    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
      this.providers = providers;
      var len = providers.length;
      this.keyIds = new Array(len);
      for (var i = 0; i < len; i++) {
        this.keyIds[i] = providers[i].key.id;
      }
    }
    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function(index) {
      if (index < 0 || index >= this.providers.length) {
        throw new OutOfBoundsError(index);
      }
      return this.providers[index];
    };
    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function(ei) {
      return new ReflectiveInjectorDynamicStrategy(this, ei);
    };
    return ReflectiveProtoInjectorDynamicStrategy;
  }());
  var ReflectiveProtoInjector = (function() {
    function ReflectiveProtoInjector(providers) {
      this.numberOfProviders = providers.length;
      this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ? new ReflectiveProtoInjectorDynamicStrategy(this, providers) : new ReflectiveProtoInjectorInlineStrategy(this, providers);
    }
    ReflectiveProtoInjector.fromResolvedProviders = function(providers) {
      return new ReflectiveProtoInjector(providers);
    };
    ReflectiveProtoInjector.prototype.getProviderAtIndex = function(index) {
      return this._strategy.getProviderAtIndex(index);
    };
    return ReflectiveProtoInjector;
  }());
  var ReflectiveInjectorInlineStrategy = (function() {
    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
      this.injector = injector;
      this.protoStrategy = protoStrategy;
      this.obj0 = UNDEFINED;
      this.obj1 = UNDEFINED;
      this.obj2 = UNDEFINED;
      this.obj3 = UNDEFINED;
      this.obj4 = UNDEFINED;
      this.obj5 = UNDEFINED;
      this.obj6 = UNDEFINED;
      this.obj7 = UNDEFINED;
      this.obj8 = UNDEFINED;
      this.obj9 = UNDEFINED;
    }
    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function(provider) {
      return this.injector._new(provider);
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function(keyId) {
      var p = this.protoStrategy;
      var inj = this.injector;
      if (p.keyId0 === keyId) {
        if (this.obj0 === UNDEFINED) {
          this.obj0 = inj._new(p.provider0);
        }
        return this.obj0;
      }
      if (p.keyId1 === keyId) {
        if (this.obj1 === UNDEFINED) {
          this.obj1 = inj._new(p.provider1);
        }
        return this.obj1;
      }
      if (p.keyId2 === keyId) {
        if (this.obj2 === UNDEFINED) {
          this.obj2 = inj._new(p.provider2);
        }
        return this.obj2;
      }
      if (p.keyId3 === keyId) {
        if (this.obj3 === UNDEFINED) {
          this.obj3 = inj._new(p.provider3);
        }
        return this.obj3;
      }
      if (p.keyId4 === keyId) {
        if (this.obj4 === UNDEFINED) {
          this.obj4 = inj._new(p.provider4);
        }
        return this.obj4;
      }
      if (p.keyId5 === keyId) {
        if (this.obj5 === UNDEFINED) {
          this.obj5 = inj._new(p.provider5);
        }
        return this.obj5;
      }
      if (p.keyId6 === keyId) {
        if (this.obj6 === UNDEFINED) {
          this.obj6 = inj._new(p.provider6);
        }
        return this.obj6;
      }
      if (p.keyId7 === keyId) {
        if (this.obj7 === UNDEFINED) {
          this.obj7 = inj._new(p.provider7);
        }
        return this.obj7;
      }
      if (p.keyId8 === keyId) {
        if (this.obj8 === UNDEFINED) {
          this.obj8 = inj._new(p.provider8);
        }
        return this.obj8;
      }
      if (p.keyId9 === keyId) {
        if (this.obj9 === UNDEFINED) {
          this.obj9 = inj._new(p.provider9);
        }
        return this.obj9;
      }
      return UNDEFINED;
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function(index) {
      if (index == 0)
        return this.obj0;
      if (index == 1)
        return this.obj1;
      if (index == 2)
        return this.obj2;
      if (index == 3)
        return this.obj3;
      if (index == 4)
        return this.obj4;
      if (index == 5)
        return this.obj5;
      if (index == 6)
        return this.obj6;
      if (index == 7)
        return this.obj7;
      if (index == 8)
        return this.obj8;
      if (index == 9)
        return this.obj9;
      throw new OutOfBoundsError(index);
    };
    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function() {
      return _MAX_CONSTRUCTION_COUNTER;
    };
    return ReflectiveInjectorInlineStrategy;
  }());
  var ReflectiveInjectorDynamicStrategy = (function() {
    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
      this.protoStrategy = protoStrategy;
      this.injector = injector;
      this.objs = new Array(protoStrategy.providers.length).fill(UNDEFINED);
    }
    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function(provider) {
      return this.injector._new(provider);
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function(keyId) {
      var p = this.protoStrategy;
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.keyIds[i] === keyId) {
          if (this.objs[i] === UNDEFINED) {
            this.objs[i] = this.injector._new(p.providers[i]);
          }
          return this.objs[i];
        }
      }
      return UNDEFINED;
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function(index) {
      if (index < 0 || index >= this.objs.length) {
        throw new OutOfBoundsError(index);
      }
      return this.objs[index];
    };
    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function() {
      return this.objs.length;
    };
    return ReflectiveInjectorDynamicStrategy;
  }());
  var ReflectiveInjector = (function() {
    function ReflectiveInjector() {}
    ReflectiveInjector.resolve = function(providers) {
      return resolveReflectiveProviders(providers);
    };
    ReflectiveInjector.resolveAndCreate = function(providers, parent) {
      if (parent === void 0) {
        parent = null;
      }
      var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
      return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
    };
    ReflectiveInjector.fromResolvedProviders = function(providers, parent) {
      if (parent === void 0) {
        parent = null;
      }
      return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
    };
    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector.prototype.resolveAndCreateChild = function(providers) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.createChildFromResolved = function(providers) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.resolveAndInstantiate = function(provider) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.instantiateResolved = function(provider) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.get = function(token, notFoundValue) {};
    return ReflectiveInjector;
  }());
  var ReflectiveInjector_ = (function() {
    function ReflectiveInjector_(_proto, _parent) {
      if (_parent === void 0) {
        _parent = null;
      }
      this._constructionCounter = 0;
      this._proto = _proto;
      this._parent = _parent;
      this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    ReflectiveInjector_.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      return this._getByKey(ReflectiveKey.get(token), null, null, notFoundValue);
    };
    ReflectiveInjector_.prototype.getAt = function(index) {
      return this._strategy.getObjAtIndex(index);
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
      get: function() {
        return this._parent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
      get: function() {
        return this._strategy;
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector_.prototype.resolveAndCreateChild = function(providers) {
      var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
      return this.createChildFromResolved(ResolvedReflectiveProviders);
    };
    ReflectiveInjector_.prototype.createChildFromResolved = function(providers) {
      var proto = new ReflectiveProtoInjector(providers);
      var inj = new ReflectiveInjector_(proto);
      inj._parent = this;
      return inj;
    };
    ReflectiveInjector_.prototype.resolveAndInstantiate = function(provider) {
      return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
    };
    ReflectiveInjector_.prototype.instantiateResolved = function(provider) {
      return this._instantiateProvider(provider);
    };
    ReflectiveInjector_.prototype._new = function(provider) {
      if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
        throw new CyclicDependencyError(this, provider.key);
      }
      return this._instantiateProvider(provider);
    };
    ReflectiveInjector_.prototype._instantiateProvider = function(provider) {
      if (provider.multiProvider) {
        var res = new Array(provider.resolvedFactories.length);
        for (var i = 0; i < provider.resolvedFactories.length; ++i) {
          res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
        }
        return res;
      } else {
        return this._instantiate(provider, provider.resolvedFactories[0]);
      }
    };
    ReflectiveInjector_.prototype._instantiate = function(provider, ResolvedReflectiveFactory) {
      var factory = ResolvedReflectiveFactory.factory;
      var deps = ResolvedReflectiveFactory.dependencies;
      var length = deps.length;
      var d0;
      var d1;
      var d2;
      var d3;
      var d4;
      var d5;
      var d6;
      var d7;
      var d8;
      var d9;
      var d10;
      var d11;
      var d12;
      var d13;
      var d14;
      var d15;
      var d16;
      var d17;
      var d18;
      var d19;
      try {
        d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
        d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
        d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
        d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
        d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
        d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
        d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
        d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
        d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
        d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
        d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
        d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
        d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
        d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
        d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
        d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
        d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
        d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
        d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
        d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
      } catch (e) {
        if (e instanceof AbstractProviderError || e instanceof InstantiationError) {
          e.addKey(this, provider.key);
        }
        throw e;
      }
      var obj;
      try {
        switch (length) {
          case 0:
            obj = factory();
            break;
          case 1:
            obj = factory(d0);
            break;
          case 2:
            obj = factory(d0, d1);
            break;
          case 3:
            obj = factory(d0, d1, d2);
            break;
          case 4:
            obj = factory(d0, d1, d2, d3);
            break;
          case 5:
            obj = factory(d0, d1, d2, d3, d4);
            break;
          case 6:
            obj = factory(d0, d1, d2, d3, d4, d5);
            break;
          case 7:
            obj = factory(d0, d1, d2, d3, d4, d5, d6);
            break;
          case 8:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
            break;
          case 9:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
            break;
          case 10:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
            break;
          case 11:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
            break;
          case 12:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
            break;
          case 13:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
            break;
          case 14:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
            break;
          case 15:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
            break;
          case 16:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
            break;
          case 17:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
            break;
          case 18:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
            break;
          case 19:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
            break;
          case 20:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
            break;
          default:
            throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
        }
      } catch (e) {
        throw new InstantiationError(this, e, e.stack, provider.key);
      }
      return obj;
    };
    ReflectiveInjector_.prototype._getByReflectiveDependency = function(provider, dep) {
      return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : THROW_IF_NOT_FOUND);
    };
    ReflectiveInjector_.prototype._getByKey = function(key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
      if (key === INJECTOR_KEY) {
        return this;
      }
      if (upperBoundVisibility instanceof Self) {
        return this._getByKeySelf(key, notFoundValue);
      } else {
        return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
      }
    };
    ReflectiveInjector_.prototype._throwOrNull = function(key, notFoundValue) {
      if (notFoundValue !== THROW_IF_NOT_FOUND) {
        return notFoundValue;
      } else {
        throw new NoProviderError(this, key);
      }
    };
    ReflectiveInjector_.prototype._getByKeySelf = function(key, notFoundValue) {
      var obj = this._strategy.getObjByKeyId(key.id);
      return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
    };
    ReflectiveInjector_.prototype._getByKeyDefault = function(key, notFoundValue, lowerBoundVisibility) {
      var inj;
      if (lowerBoundVisibility instanceof SkipSelf) {
        inj = this._parent;
      } else {
        inj = this;
      }
      while (inj instanceof ReflectiveInjector_) {
        var inj_ = (inj);
        var obj = inj_._strategy.getObjByKeyId(key.id);
        if (obj !== UNDEFINED)
          return obj;
        inj = inj_._parent;
      }
      if (inj !== null) {
        return inj.get(key.token, notFoundValue);
      } else {
        return this._throwOrNull(key, notFoundValue);
      }
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
      get: function() {
        var providers = _mapProviders(this, function(b) {
          return ' "' + b.key.displayName + '" ';
        }).join(', ');
        return "ReflectiveInjector(providers: [" + providers + "])";
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector_.prototype.toString = function() {
      return this.displayName;
    };
    return ReflectiveInjector_;
  }());
  var INJECTOR_KEY = ReflectiveKey.get(Injector);
  function _mapProviders(injector, fn) {
    var res = new Array(injector._proto.numberOfProviders);
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
      res[i] = fn(injector._proto.getProviderAtIndex(i));
    }
    return res;
  }
  var ErrorHandler = (function() {
    function ErrorHandler(rethrowError) {
      if (rethrowError === void 0) {
        rethrowError = true;
      }
      this._console = console;
      this.rethrowError = rethrowError;
    }
    ErrorHandler.prototype.handleError = function(error) {
      var originalError = this._findOriginalError(error);
      var originalStack = this._findOriginalStack(error);
      var context = this._findContext(error);
      this._console.error("EXCEPTION: " + this._extractMessage(error));
      if (originalError) {
        this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
      }
      if (originalStack) {
        this._console.error('ORIGINAL STACKTRACE:');
        this._console.error(originalStack);
      }
      if (context) {
        this._console.error('ERROR CONTEXT:');
        this._console.error(context);
      }
      if (this.rethrowError)
        throw error;
    };
    ErrorHandler.prototype._extractMessage = function(error) {
      return error instanceof Error ? error.message : error.toString();
    };
    ErrorHandler.prototype._findContext = function(error) {
      if (error) {
        return error.context ? error.context : this._findContext(((error)).originalError);
      }
      return null;
    };
    ErrorHandler.prototype._findOriginalError = function(error) {
      var e = ((error)).originalError;
      while (e && ((e)).originalError) {
        e = ((e)).originalError;
      }
      return e;
    };
    ErrorHandler.prototype._findOriginalStack = function(error) {
      if (!(error instanceof Error))
        return null;
      var e = error;
      var stack = e.stack;
      while (e instanceof Error && ((e)).originalError) {
        e = ((e)).originalError;
        if (e instanceof Error && e.stack) {
          stack = e.stack;
        }
      }
      return stack;
    };
    return ErrorHandler;
  }());
  var StringMapWrapper = (function() {
    function StringMapWrapper() {}
    StringMapWrapper.merge = function(m1, m2) {
      var m = {};
      for (var _i = 0,
          _a = Object.keys(m1); _i < _a.length; _i++) {
        var k = _a[_i];
        m[k] = m1[k];
      }
      for (var _b = 0,
          _c = Object.keys(m2); _b < _c.length; _b++) {
        var k = _c[_b];
        m[k] = m2[k];
      }
      return m;
    };
    StringMapWrapper.equals = function(m1, m2) {
      var k1 = Object.keys(m1);
      var k2 = Object.keys(m2);
      if (k1.length != k2.length) {
        return false;
      }
      for (var i = 0; i < k1.length; i++) {
        var key = k1[i];
        if (m1[key] !== m2[key]) {
          return false;
        }
      }
      return true;
    };
    return StringMapWrapper;
  }());
  var ListWrapper = (function() {
    function ListWrapper() {}
    ListWrapper.findLast = function(arr, condition) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if (condition(arr[i])) {
          return arr[i];
        }
      }
      return null;
    };
    ListWrapper.removeAll = function(list, items) {
      for (var i = 0; i < items.length; ++i) {
        var index = list.indexOf(items[i]);
        if (index > -1) {
          list.splice(index, 1);
        }
      }
    };
    ListWrapper.remove = function(list, el) {
      var index = list.indexOf(el);
      if (index > -1) {
        list.splice(index, 1);
        return true;
      }
      return false;
    };
    ListWrapper.equals = function(a, b) {
      if (a.length != b.length)
        return false;
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    };
    ListWrapper.flatten = function(list) {
      return list.reduce(function(flat, item) {
        var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
        return ((flat)).concat(flatItem);
      }, []);
    };
    return ListWrapper;
  }());
  function isListLikeIterable(obj) {
    if (!isJsObject(obj))
      return false;
    return Array.isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj);
  }
  function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[getSymbolIterator()]();
    var iterator2 = b[getSymbolIterator()]();
    while (true) {
      var item1 = iterator1.next();
      var item2 = iterator2.next();
      if (item1.done && item2.done)
        return true;
      if (item1.done || item2.done)
        return false;
      if (!comparator(item1.value, item2.value))
        return false;
    }
  }
  function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        fn(obj[i]);
      }
    } else {
      var iterator = obj[getSymbolIterator()]();
      var item = void 0;
      while (!((item = iterator.next()).done)) {
        fn(item.value);
      }
    }
  }
  function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
  }
  var APP_INITIALIZER = new OpaqueToken('Application Initializer');
  var ApplicationInitStatus = (function() {
    function ApplicationInitStatus(appInits) {
      var _this = this;
      this._done = false;
      var asyncInitPromises = [];
      if (appInits) {
        for (var i = 0; i < appInits.length; i++) {
          var initResult = appInits[i]();
          if (isPromise(initResult)) {
            asyncInitPromises.push(initResult);
          }
        }
      }
      this._donePromise = Promise.all(asyncInitPromises).then(function() {
        _this._done = true;
      });
      if (asyncInitPromises.length === 0) {
        this._done = true;
      }
    }
    Object.defineProperty(ApplicationInitStatus.prototype, "done", {
      get: function() {
        return this._done;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
      get: function() {
        return this._donePromise;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationInitStatus.decorators = [{type: Injectable}];
    ApplicationInitStatus.ctorParameters = function() {
      return [{
        type: Array,
        decorators: [{
          type: Inject,
          args: [APP_INITIALIZER]
        }, {type: Optional}]
      }];
    };
    return ApplicationInitStatus;
  }());
  var APP_ID = new OpaqueToken('AppId');
  function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
  }
  var APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: ([])
  };
  function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
  }
  var PLATFORM_INITIALIZER = new OpaqueToken('Platform Initializer');
  var APP_BOOTSTRAP_LISTENER = new OpaqueToken('appBootstrapListener');
  var PACKAGE_ROOT_URL = new OpaqueToken('Application Packages Root URL');
  var Console = (function() {
    function Console() {}
    Console.prototype.log = function(message) {
      print(message);
    };
    Console.prototype.warn = function(message) {
      warn(message);
    };
    Console.decorators = [{type: Injectable}];
    Console.ctorParameters = function() {
      return [];
    };
    return Console;
  }());
  var __extends$4 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ComponentStillLoadingError = (function(_super) {
    __extends$4(ComponentStillLoadingError, _super);
    function ComponentStillLoadingError(compType) {
      _super.call(this, "Can't compile synchronously as " + stringify(compType) + " is still being loaded!");
      this.compType = compType;
    }
    return ComponentStillLoadingError;
  }(BaseError));
  var ModuleWithComponentFactories = (function() {
    function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
      this.ngModuleFactory = ngModuleFactory;
      this.componentFactories = componentFactories;
    }
    return ModuleWithComponentFactories;
  }());
  function _throwError() {
    throw new Error("Runtime compiler is not loaded");
  }
  var Compiler = (function() {
    function Compiler() {}
    Compiler.prototype.compileModuleSync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAsync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAndAllComponentsSync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAndAllComponentsAsync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.getNgContentSelectors = function(component) {
      throw _throwError();
    };
    Compiler.prototype.clearCache = function() {};
    Compiler.prototype.clearCacheFor = function(type) {};
    Compiler.decorators = [{type: Injectable}];
    Compiler.ctorParameters = function() {
      return [];
    };
    return Compiler;
  }());
  var COMPILER_OPTIONS = new OpaqueToken('compilerOptions');
  var CompilerFactory = (function() {
    function CompilerFactory() {}
    CompilerFactory.prototype.createCompiler = function(options) {};
    return CompilerFactory;
  }());
  var ElementRef = (function() {
    function ElementRef(nativeElement) {
      this.nativeElement = nativeElement;
    }
    return ElementRef;
  }());
  var __extends$6 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EventEmitter = (function(_super) {
    __extends$6(EventEmitter, _super);
    function EventEmitter(isAsync) {
      if (isAsync === void 0) {
        isAsync = false;
      }
      _super.call(this);
      this.__isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.subscribe = function(generatorOrNext, error, complete) {
      var schedulerFn;
      var errorFn = function(err) {
        return null;
      };
      var completeFn = function() {
        return null;
      };
      if (generatorOrNext && typeof generatorOrNext === 'object') {
        schedulerFn = this.__isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext.next(value);
          });
        } : function(value) {
          generatorOrNext.next(value);
        };
        if (generatorOrNext.error) {
          errorFn = this.__isAsync ? function(err) {
            setTimeout(function() {
              return generatorOrNext.error(err);
            });
          } : function(err) {
            generatorOrNext.error(err);
          };
        }
        if (generatorOrNext.complete) {
          completeFn = this.__isAsync ? function() {
            setTimeout(function() {
              return generatorOrNext.complete();
            });
          } : function() {
            generatorOrNext.complete();
          };
        }
      } else {
        schedulerFn = this.__isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext(value);
          });
        } : function(value) {
          generatorOrNext(value);
        };
        if (error) {
          errorFn = this.__isAsync ? function(err) {
            setTimeout(function() {
              return error(err);
            });
          } : function(err) {
            error(err);
          };
        }
        if (complete) {
          completeFn = this.__isAsync ? function() {
            setTimeout(function() {
              return complete();
            });
          } : function() {
            complete();
          };
        }
      }
      return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
  }(rxjs_Subject.Subject));
  var NgZone = (function() {
    function NgZone(_a) {
      var _b = _a.enableLongStackTrace,
          enableLongStackTrace = _b === void 0 ? false : _b;
      this._hasPendingMicrotasks = false;
      this._hasPendingMacrotasks = false;
      this._isStable = true;
      this._nesting = 0;
      this._onUnstable = new EventEmitter(false);
      this._onMicrotaskEmpty = new EventEmitter(false);
      this._onStable = new EventEmitter(false);
      this._onErrorEvents = new EventEmitter(false);
      if (typeof Zone == 'undefined') {
        throw new Error('Angular requires Zone.js prolyfill.');
      }
      Zone.assertZonePatched();
      this.outer = this.inner = Zone.current;
      if (Zone['wtfZoneSpec']) {
        this.inner = this.inner.fork(Zone['wtfZoneSpec']);
      }
      if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
        this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
      }
      this.forkInnerZoneWithAngularBehavior();
    }
    NgZone.isInAngularZone = function() {
      return Zone.current.get('isAngularZone') === true;
    };
    NgZone.assertInAngularZone = function() {
      if (!NgZone.isInAngularZone()) {
        throw new Error('Expected to be in Angular Zone, but it is not!');
      }
    };
    NgZone.assertNotInAngularZone = function() {
      if (NgZone.isInAngularZone()) {
        throw new Error('Expected to not be in Angular Zone, but it is!');
      }
    };
    NgZone.prototype.run = function(fn) {
      return this.inner.run(fn);
    };
    NgZone.prototype.runGuarded = function(fn) {
      return this.inner.runGuarded(fn);
    };
    NgZone.prototype.runOutsideAngular = function(fn) {
      return this.outer.run(fn);
    };
    Object.defineProperty(NgZone.prototype, "onUnstable", {
      get: function() {
        return this._onUnstable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
      get: function() {
        return this._onMicrotaskEmpty;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onStable", {
      get: function() {
        return this._onStable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onError", {
      get: function() {
        return this._onErrorEvents;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "isStable", {
      get: function() {
        return this._isStable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
      get: function() {
        return this._hasPendingMicrotasks;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
      get: function() {
        return this._hasPendingMacrotasks;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype.checkStable = function() {
      var _this = this;
      if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
        try {
          this._nesting++;
          this._onMicrotaskEmpty.emit(null);
        } finally {
          this._nesting--;
          if (!this._hasPendingMicrotasks) {
            try {
              this.runOutsideAngular(function() {
                return _this._onStable.emit(null);
              });
            } finally {
              this._isStable = true;
            }
          }
        }
      }
    };
    NgZone.prototype.forkInnerZoneWithAngularBehavior = function() {
      var _this = this;
      this.inner = this.inner.fork({
        name: 'angular',
        properties: ({'isAngularZone': true}),
        onInvokeTask: function(delegate, current, target, task, applyThis, applyArgs) {
          try {
            _this.onEnter();
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          } finally {
            _this.onLeave();
          }
        },
        onInvoke: function(delegate, current, target, callback, applyThis, applyArgs, source) {
          try {
            _this.onEnter();
            return delegate.invoke(target, callback, applyThis, applyArgs, source);
          } finally {
            _this.onLeave();
          }
        },
        onHasTask: function(delegate, current, target, hasTaskState) {
          delegate.hasTask(target, hasTaskState);
          if (current === target) {
            if (hasTaskState.change == 'microTask') {
              _this.setHasMicrotask(hasTaskState.microTask);
            } else if (hasTaskState.change == 'macroTask') {
              _this.setHasMacrotask(hasTaskState.macroTask);
            }
          }
        },
        onHandleError: function(delegate, current, target, error) {
          delegate.handleError(target, error);
          _this.triggerError(error);
          return false;
        }
      });
    };
    NgZone.prototype.onEnter = function() {
      this._nesting++;
      if (this._isStable) {
        this._isStable = false;
        this._onUnstable.emit(null);
      }
    };
    NgZone.prototype.onLeave = function() {
      this._nesting--;
      this.checkStable();
    };
    NgZone.prototype.setHasMicrotask = function(hasMicrotasks) {
      this._hasPendingMicrotasks = hasMicrotasks;
      this.checkStable();
    };
    NgZone.prototype.setHasMacrotask = function(hasMacrotasks) {
      this._hasPendingMacrotasks = hasMacrotasks;
    };
    NgZone.prototype.triggerError = function(error) {
      this._onErrorEvents.emit(error);
    };
    return NgZone;
  }());
  var AnimationQueue = (function() {
    function AnimationQueue(_zone) {
      this._zone = _zone;
      this.entries = [];
    }
    AnimationQueue.prototype.enqueue = function(player) {
      this.entries.push(player);
    };
    AnimationQueue.prototype.flush = function() {
      var _this = this;
      if (this.entries.length) {
        this._zone.runOutsideAngular(function() {
          Promise.resolve(null).then(function() {
            return _this._triggerAnimations();
          });
        });
      }
    };
    AnimationQueue.prototype._triggerAnimations = function() {
      NgZone.assertNotInAngularZone();
      while (this.entries.length) {
        var player = this.entries.shift();
        if (!player.hasStarted()) {
          player.play();
        }
      }
    };
    AnimationQueue.decorators = [{type: Injectable}];
    AnimationQueue.ctorParameters = function() {
      return [{type: NgZone}];
    };
    return AnimationQueue;
  }());
  var DefaultIterableDifferFactory = (function() {
    function DefaultIterableDifferFactory() {}
    DefaultIterableDifferFactory.prototype.supports = function(obj) {
      return isListLikeIterable(obj);
    };
    DefaultIterableDifferFactory.prototype.create = function(cdRef, trackByFn) {
      return new DefaultIterableDiffer(trackByFn);
    };
    return DefaultIterableDifferFactory;
  }());
  var trackByIdentity = function(index, item) {
    return item;
  };
  var DefaultIterableDiffer = (function() {
    function DefaultIterableDiffer(_trackByFn) {
      this._trackByFn = _trackByFn;
      this._length = null;
      this._collection = null;
      this._linkedRecords = null;
      this._unlinkedRecords = null;
      this._previousItHead = null;
      this._itHead = null;
      this._itTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._movesHead = null;
      this._movesTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
      this._identityChangesHead = null;
      this._identityChangesTail = null;
      this._trackByFn = this._trackByFn || trackByIdentity;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
      get: function() {
        return this._collection;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
      get: function() {
        return this._length;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._itHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachOperation = function(fn) {
      var nextIt = this._itHead;
      var nextRemove = this._removalsHead;
      var addRemoveOffset = 0;
      var moveOffsets = null;
      while (nextIt || nextRemove) {
        var record = !nextRemove || nextIt && nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ? nextIt : nextRemove;
        var adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
        var currentIndex = record.currentIndex;
        if (record === nextRemove) {
          addRemoveOffset--;
          nextRemove = nextRemove._nextRemoved;
        } else {
          nextIt = nextIt._next;
          if (record.previousIndex == null) {
            addRemoveOffset++;
          } else {
            if (!moveOffsets)
              moveOffsets = [];
            var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
            var localCurrentIndex = currentIndex - addRemoveOffset;
            if (localMovePreviousIndex != localCurrentIndex) {
              for (var i = 0; i < localMovePreviousIndex; i++) {
                var offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
                var index = offset + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[i] = offset + 1;
                }
              }
              var previousIndex = record.previousIndex;
              moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
            }
          }
        }
        if (adjPreviousIndex !== currentIndex) {
          fn(record, adjPreviousIndex, currentIndex);
        }
      }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function(fn) {
      var record;
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachIdentityChange = function(fn) {
      var record;
      for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.diff = function(collection) {
      if (isBlank(collection))
        collection = [];
      if (!isListLikeIterable(collection)) {
        throw new Error("Error trying to diff '" + collection + "'");
      }
      if (this.check(collection)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultIterableDiffer.prototype.onDestroy = function() {};
    DefaultIterableDiffer.prototype.check = function(collection) {
      var _this = this;
      this._reset();
      var record = this._itHead;
      var mayBeDirty = false;
      var index;
      var item;
      var itemTrackBy;
      if (Array.isArray(collection)) {
        var list = collection;
        this._length = collection.length;
        for (var index_1 = 0; index_1 < this._length; index_1++) {
          item = list[index_1];
          itemTrackBy = this._trackByFn(index_1, item);
          if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
            record = this._mismatch(record, item, itemTrackBy, index_1);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this._verifyReinsertion(record, item, itemTrackBy, index_1);
            }
            if (!looseIdentical(record.item, item))
              this._addIdentityChange(record, item);
          }
          record = record._next;
        }
      } else {
        index = 0;
        iterateListLike(collection, function(item) {
          itemTrackBy = _this._trackByFn(index, item);
          if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
            record = _this._mismatch(record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = _this._verifyReinsertion(record, item, itemTrackBy, index);
            }
            if (!looseIdentical(record.item, item))
              _this._addIdentityChange(record, item);
          }
          record = record._next;
          index++;
        });
        this._length = index;
      }
      this._truncate(record);
      this._collection = collection;
      return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record = void 0;
        var nextRecord = void 0;
        for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
          record.previousIndex = record.currentIndex;
        }
        this._additionsHead = this._additionsTail = null;
        for (record = this._movesHead; record !== null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record._nextMoved;
        }
        this._movesHead = this._movesTail = null;
        this._removalsHead = this._removalsTail = null;
        this._identityChangesHead = this._identityChangesTail = null;
      }
    };
    DefaultIterableDiffer.prototype._mismatch = function(record, item, itemTrackBy, index) {
      var previousRecord;
      if (record === null) {
        previousRecord = this._itTail;
      } else {
        previousRecord = record._prev;
        this._remove(record);
      }
      record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
      if (record !== null) {
        if (!looseIdentical(record.item, item))
          this._addIdentityChange(record, item);
        this._moveAfter(record, previousRecord, index);
      } else {
        record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
        if (record !== null) {
          if (!looseIdentical(record.item, item))
            this._addIdentityChange(record, item);
          this._reinsertAfter(record, previousRecord, index);
        } else {
          record = this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    };
    DefaultIterableDiffer.prototype._verifyReinsertion = function(record, item, itemTrackBy, index) {
      var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
      if (reinsertRecord !== null) {
        record = this._reinsertAfter(reinsertRecord, record._prev, index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this._addToMoves(record, index);
      }
      return record;
    };
    DefaultIterableDiffer.prototype._truncate = function(record) {
      while (record !== null) {
        var nextRecord = record._next;
        this._addToRemovals(this._unlink(record));
        record = nextRecord;
      }
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.clear();
      }
      if (this._additionsTail !== null) {
        this._additionsTail._nextAdded = null;
      }
      if (this._movesTail !== null) {
        this._movesTail._nextMoved = null;
      }
      if (this._itTail !== null) {
        this._itTail._next = null;
      }
      if (this._removalsTail !== null) {
        this._removalsTail._nextRemoved = null;
      }
      if (this._identityChangesTail !== null) {
        this._identityChangesTail._nextIdentityChange = null;
      }
    };
    DefaultIterableDiffer.prototype._reinsertAfter = function(record, prevRecord, index) {
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.remove(record);
      }
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._moveAfter = function(record, prevRecord, index) {
      this._unlink(record);
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._addAfter = function(record, prevRecord, index) {
      this._insertAfter(record, prevRecord, index);
      if (this._additionsTail === null) {
        this._additionsTail = this._additionsHead = record;
      } else {
        this._additionsTail = this._additionsTail._nextAdded = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._insertAfter = function(record, prevRecord, index) {
      var next = prevRecord === null ? this._itHead : prevRecord._next;
      record._next = next;
      record._prev = prevRecord;
      if (next === null) {
        this._itTail = record;
      } else {
        next._prev = record;
      }
      if (prevRecord === null) {
        this._itHead = record;
      } else {
        prevRecord._next = record;
      }
      if (this._linkedRecords === null) {
        this._linkedRecords = new _DuplicateMap();
      }
      this._linkedRecords.put(record);
      record.currentIndex = index;
      return record;
    };
    DefaultIterableDiffer.prototype._remove = function(record) {
      return this._addToRemovals(this._unlink(record));
    };
    DefaultIterableDiffer.prototype._unlink = function(record) {
      if (this._linkedRecords !== null) {
        this._linkedRecords.remove(record);
      }
      var prev = record._prev;
      var next = record._next;
      if (prev === null) {
        this._itHead = next;
      } else {
        prev._next = next;
      }
      if (next === null) {
        this._itTail = prev;
      } else {
        next._prev = prev;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToMoves = function(record, toIndex) {
      if (record.previousIndex === toIndex) {
        return record;
      }
      if (this._movesTail === null) {
        this._movesTail = this._movesHead = record;
      } else {
        this._movesTail = this._movesTail._nextMoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToRemovals = function(record) {
      if (this._unlinkedRecords === null) {
        this._unlinkedRecords = new _DuplicateMap();
      }
      this._unlinkedRecords.put(record);
      record.currentIndex = null;
      record._nextRemoved = null;
      if (this._removalsTail === null) {
        this._removalsTail = this._removalsHead = record;
        record._prevRemoved = null;
      } else {
        record._prevRemoved = this._removalsTail;
        this._removalsTail = this._removalsTail._nextRemoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addIdentityChange = function(record, item) {
      record.item = item;
      if (this._identityChangesTail === null) {
        this._identityChangesTail = this._identityChangesHead = record;
      } else {
        this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype.toString = function() {
      var list = [];
      this.forEachItem(function(record) {
        return list.push(record);
      });
      var previous = [];
      this.forEachPreviousItem(function(record) {
        return previous.push(record);
      });
      var additions = [];
      this.forEachAddedItem(function(record) {
        return additions.push(record);
      });
      var moves = [];
      this.forEachMovedItem(function(record) {
        return moves.push(record);
      });
      var removals = [];
      this.forEachRemovedItem(function(record) {
        return removals.push(record);
      });
      var identityChanges = [];
      this.forEachIdentityChange(function(record) {
        return identityChanges.push(record);
      });
      return 'collection: ' + list.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'moves: ' + moves.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n' + 'identityChanges: ' + identityChanges.join(', ') + '\n';
    };
    return DefaultIterableDiffer;
  }());
  var CollectionChangeRecord = (function() {
    function CollectionChangeRecord(item, trackById) {
      this.item = item;
      this.trackById = trackById;
      this.currentIndex = null;
      this.previousIndex = null;
      this._nextPrevious = null;
      this._prev = null;
      this._next = null;
      this._prevDup = null;
      this._nextDup = null;
      this._prevRemoved = null;
      this._nextRemoved = null;
      this._nextAdded = null;
      this._nextMoved = null;
      this._nextIdentityChange = null;
    }
    CollectionChangeRecord.prototype.toString = function() {
      return this.previousIndex === this.currentIndex ? stringify(this.item) : stringify(this.item) + '[' + stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
  }());
  var _DuplicateItemRecordList = (function() {
    function _DuplicateItemRecordList() {
      this._head = null;
      this._tail = null;
    }
    _DuplicateItemRecordList.prototype.add = function(record) {
      if (this._head === null) {
        this._head = this._tail = record;
        record._nextDup = null;
        record._prevDup = null;
      } else {
        this._tail._nextDup = record;
        record._prevDup = this._tail;
        record._nextDup = null;
        this._tail = record;
      }
    };
    _DuplicateItemRecordList.prototype.get = function(trackById, afterIndex) {
      var record;
      for (record = this._head; record !== null; record = record._nextDup) {
        if ((afterIndex === null || afterIndex < record.currentIndex) && looseIdentical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    };
    _DuplicateItemRecordList.prototype.remove = function(record) {
      var prev = record._prevDup;
      var next = record._nextDup;
      if (prev === null) {
        this._head = next;
      } else {
        prev._nextDup = next;
      }
      if (next === null) {
        this._tail = prev;
      } else {
        next._prevDup = prev;
      }
      return this._head === null;
    };
    return _DuplicateItemRecordList;
  }());
  var _DuplicateMap = (function() {
    function _DuplicateMap() {
      this.map = new Map();
    }
    _DuplicateMap.prototype.put = function(record) {
      var key = record.trackById;
      var duplicates = this.map.get(key);
      if (!duplicates) {
        duplicates = new _DuplicateItemRecordList();
        this.map.set(key, duplicates);
      }
      duplicates.add(record);
    };
    _DuplicateMap.prototype.get = function(trackById, afterIndex) {
      if (afterIndex === void 0) {
        afterIndex = null;
      }
      var key = trackById;
      var recordList = this.map.get(key);
      return recordList ? recordList.get(trackById, afterIndex) : null;
    };
    _DuplicateMap.prototype.remove = function(record) {
      var key = record.trackById;
      var recordList = this.map.get(key);
      if (recordList.remove(record)) {
        this.map.delete(key);
      }
      return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
      get: function() {
        return this.map.size === 0;
      },
      enumerable: true,
      configurable: true
    });
    _DuplicateMap.prototype.clear = function() {
      this.map.clear();
    };
    _DuplicateMap.prototype.toString = function() {
      return '_DuplicateMap(' + stringify(this.map) + ')';
    };
    return _DuplicateMap;
  }());
  function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    var previousIndex = item.previousIndex;
    if (previousIndex === null)
      return previousIndex;
    var moveOffset = 0;
    if (moveOffsets && previousIndex < moveOffsets.length) {
      moveOffset = moveOffsets[previousIndex];
    }
    return previousIndex + addRemoveOffset + moveOffset;
  }
  var DefaultKeyValueDifferFactory = (function() {
    function DefaultKeyValueDifferFactory() {}
    DefaultKeyValueDifferFactory.prototype.supports = function(obj) {
      return obj instanceof Map || isJsObject(obj);
    };
    DefaultKeyValueDifferFactory.prototype.create = function(cdRef) {
      return new DefaultKeyValueDiffer();
    };
    return DefaultKeyValueDifferFactory;
  }());
  var DefaultKeyValueDiffer = (function() {
    function DefaultKeyValueDiffer() {
      this._records = new Map();
      this._mapHead = null;
      this._previousMapHead = null;
      this._changesHead = null;
      this._changesTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function(fn) {
      var record;
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.diff = function(map) {
      if (!map) {
        map = new Map();
      } else if (!(map instanceof Map || isJsObject(map))) {
        throw new Error("Error trying to diff '" + map + "'");
      }
      return this.check(map) ? this : null;
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function() {};
    DefaultKeyValueDiffer.prototype.check = function(map) {
      var _this = this;
      this._reset();
      var records = this._records;
      var oldSeqRecord = this._mapHead;
      var lastOldSeqRecord = null;
      var lastNewSeqRecord = null;
      var seqChanged = false;
      this._forEach(map, function(value, key) {
        var newSeqRecord;
        if (oldSeqRecord && key === oldSeqRecord.key) {
          newSeqRecord = oldSeqRecord;
          _this._maybeAddToChanges(newSeqRecord, value);
        } else {
          seqChanged = true;
          if (oldSeqRecord !== null) {
            _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
            _this._addToRemovals(oldSeqRecord);
          }
          if (records.has(key)) {
            newSeqRecord = records.get(key);
            _this._maybeAddToChanges(newSeqRecord, value);
          } else {
            newSeqRecord = new KeyValueChangeRecord(key);
            records.set(key, newSeqRecord);
            newSeqRecord.currentValue = value;
            _this._addToAdditions(newSeqRecord);
          }
        }
        if (seqChanged) {
          if (_this._isInRemovals(newSeqRecord)) {
            _this._removeFromRemovals(newSeqRecord);
          }
          if (lastNewSeqRecord == null) {
            _this._mapHead = newSeqRecord;
          } else {
            lastNewSeqRecord._next = newSeqRecord;
          }
        }
        lastOldSeqRecord = oldSeqRecord;
        lastNewSeqRecord = newSeqRecord;
        oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
      });
      this._truncate(lastOldSeqRecord, oldSeqRecord);
      return this.isDirty;
    };
    DefaultKeyValueDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record = void 0;
        for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
          record.previousValue = record.currentValue;
        }
        for (record = this._additionsHead; record != null; record = record._nextAdded) {
          record.previousValue = record.currentValue;
        }
        this._changesHead = this._changesTail = null;
        this._additionsHead = this._additionsTail = null;
        this._removalsHead = this._removalsTail = null;
      }
    };
    DefaultKeyValueDiffer.prototype._truncate = function(lastRecord, record) {
      while (record !== null) {
        if (lastRecord === null) {
          this._mapHead = null;
        } else {
          lastRecord._next = null;
        }
        var nextRecord = record._next;
        this._addToRemovals(record);
        lastRecord = record;
        record = nextRecord;
      }
      for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
        rec.previousValue = rec.currentValue;
        rec.currentValue = null;
        this._records.delete(rec.key);
      }
    };
    DefaultKeyValueDiffer.prototype._maybeAddToChanges = function(record, newValue) {
      if (!looseIdentical(newValue, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = newValue;
        this._addToChanges(record);
      }
    };
    DefaultKeyValueDiffer.prototype._isInRemovals = function(record) {
      return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
    };
    DefaultKeyValueDiffer.prototype._addToRemovals = function(record) {
      if (this._removalsHead === null) {
        this._removalsHead = this._removalsTail = record;
      } else {
        this._removalsTail._nextRemoved = record;
        record._prevRemoved = this._removalsTail;
        this._removalsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromSeq = function(prev, record) {
      var next = record._next;
      if (prev === null) {
        this._mapHead = next;
      } else {
        prev._next = next;
      }
      record._next = null;
    };
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function(record) {
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      record._prevRemoved = record._nextRemoved = null;
    };
    DefaultKeyValueDiffer.prototype._addToAdditions = function(record) {
      if (this._additionsHead === null) {
        this._additionsHead = this._additionsTail = record;
      } else {
        this._additionsTail._nextAdded = record;
        this._additionsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._addToChanges = function(record) {
      if (this._changesHead === null) {
        this._changesHead = this._changesTail = record;
      } else {
        this._changesTail._nextChanged = record;
        this._changesTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype.toString = function() {
      var items = [];
      var previous = [];
      var changes = [];
      var additions = [];
      var removals = [];
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        items.push(stringify(record));
      }
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        previous.push(stringify(record));
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        changes.push(stringify(record));
      }
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        additions.push(stringify(record));
      }
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        removals.push(stringify(record));
      }
      return 'map: ' + items.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'changes: ' + changes.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n';
    };
    DefaultKeyValueDiffer.prototype._forEach = function(obj, fn) {
      if (obj instanceof Map) {
        obj.forEach(fn);
      } else {
        Object.keys(obj).forEach(function(k) {
          return fn(obj[k], k);
        });
      }
    };
    return DefaultKeyValueDiffer;
  }());
  var KeyValueChangeRecord = (function() {
    function KeyValueChangeRecord(key) {
      this.key = key;
      this.previousValue = null;
      this.currentValue = null;
      this._nextPrevious = null;
      this._next = null;
      this._nextAdded = null;
      this._nextRemoved = null;
      this._prevRemoved = null;
      this._nextChanged = null;
    }
    KeyValueChangeRecord.prototype.toString = function() {
      return looseIdentical(this.previousValue, this.currentValue) ? stringify(this.key) : (stringify(this.key) + '[' + stringify(this.previousValue) + '->' + stringify(this.currentValue) + ']');
    };
    return KeyValueChangeRecord;
  }());
  var IterableDiffers = (function() {
    function IterableDiffers(factories) {
      this.factories = factories;
    }
    IterableDiffers.create = function(factories, parent) {
      if (isPresent(parent)) {
        var copied = parent.factories.slice();
        factories = factories.concat(copied);
        return new IterableDiffers(factories);
      } else {
        return new IterableDiffers(factories);
      }
    };
    IterableDiffers.extend = function(factories) {
      return {
        provide: IterableDiffers,
        useFactory: function(parent) {
          if (!parent) {
            throw new Error('Cannot extend IterableDiffers without a parent injector');
          }
          return IterableDiffers.create(factories, parent);
        },
        deps: [[IterableDiffers, new SkipSelf(), new Optional()]]
      };
    };
    IterableDiffers.prototype.find = function(iterable) {
      var factory = this.factories.find(function(f) {
        return f.supports(iterable);
      });
      if (isPresent(factory)) {
        return factory;
      } else {
        throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + getTypeNameForDebugging(iterable) + "'");
      }
    };
    return IterableDiffers;
  }());
  var KeyValueDiffers = (function() {
    function KeyValueDiffers(factories) {
      this.factories = factories;
    }
    KeyValueDiffers.create = function(factories, parent) {
      if (isPresent(parent)) {
        var copied = parent.factories.slice();
        factories = factories.concat(copied);
        return new KeyValueDiffers(factories);
      } else {
        return new KeyValueDiffers(factories);
      }
    };
    KeyValueDiffers.extend = function(factories) {
      return {
        provide: KeyValueDiffers,
        useFactory: function(parent) {
          if (!parent) {
            throw new Error('Cannot extend KeyValueDiffers without a parent injector');
          }
          return KeyValueDiffers.create(factories, parent);
        },
        deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
      };
    };
    KeyValueDiffers.prototype.find = function(kv) {
      var factory = this.factories.find(function(f) {
        return f.supports(kv);
      });
      if (isPresent(factory)) {
        return factory;
      } else {
        throw new Error("Cannot find a differ supporting object '" + kv + "'");
      }
    };
    return KeyValueDiffers;
  }());
  var UNINITIALIZED = {toString: function() {
      return 'CD_INIT_VALUE';
    }};
  function devModeEqual(a, b) {
    if (isListLikeIterable(a) && isListLikeIterable(b)) {
      return areIterablesEqual(a, b, devModeEqual);
    } else if (!isListLikeIterable(a) && !isPrimitive(a) && !isListLikeIterable(b) && !isPrimitive(b)) {
      return true;
    } else {
      return looseIdentical(a, b);
    }
  }
  var WrappedValue = (function() {
    function WrappedValue(wrapped) {
      this.wrapped = wrapped;
    }
    WrappedValue.wrap = function(value) {
      return new WrappedValue(value);
    };
    return WrappedValue;
  }());
  var ValueUnwrapper = (function() {
    function ValueUnwrapper() {
      this.hasWrappedValue = false;
    }
    ValueUnwrapper.prototype.unwrap = function(value) {
      if (value instanceof WrappedValue) {
        this.hasWrappedValue = true;
        return value.wrapped;
      }
      return value;
    };
    ValueUnwrapper.prototype.reset = function() {
      this.hasWrappedValue = false;
    };
    return ValueUnwrapper;
  }());
  var SimpleChange = (function() {
    function SimpleChange(previousValue, currentValue) {
      this.previousValue = previousValue;
      this.currentValue = currentValue;
    }
    SimpleChange.prototype.isFirstChange = function() {
      return this.previousValue === UNINITIALIZED;
    };
    return SimpleChange;
  }());
  var ChangeDetectorRef = (function() {
    function ChangeDetectorRef() {}
    ChangeDetectorRef.prototype.markForCheck = function() {};
    ChangeDetectorRef.prototype.detach = function() {};
    ChangeDetectorRef.prototype.detectChanges = function() {};
    ChangeDetectorRef.prototype.checkNoChanges = function() {};
    ChangeDetectorRef.prototype.reattach = function() {};
    return ChangeDetectorRef;
  }());
  var keyValDiff = [new DefaultKeyValueDifferFactory()];
  var iterableDiff = [new DefaultIterableDifferFactory()];
  var defaultIterableDiffers = new IterableDiffers(iterableDiff);
  var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);
  var RenderComponentType = (function() {
    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
      this.id = id;
      this.templateUrl = templateUrl;
      this.slotCount = slotCount;
      this.encapsulation = encapsulation;
      this.styles = styles;
      this.animations = animations;
    }
    return RenderComponentType;
  }());
  var RenderDebugInfo = (function() {
    function RenderDebugInfo() {}
    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "component", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "references", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "context", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "source", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return RenderDebugInfo;
  }());
  var Renderer = (function() {
    function Renderer() {}
    Renderer.prototype.selectRootElement = function(selectorOrNode, debugInfo) {};
    Renderer.prototype.createElement = function(parentElement, name, debugInfo) {};
    Renderer.prototype.createViewRoot = function(hostElement) {};
    Renderer.prototype.createTemplateAnchor = function(parentElement, debugInfo) {};
    Renderer.prototype.createText = function(parentElement, value, debugInfo) {};
    Renderer.prototype.projectNodes = function(parentElement, nodes) {};
    Renderer.prototype.attachViewAfter = function(node, viewRootNodes) {};
    Renderer.prototype.detachView = function(viewRootNodes) {};
    Renderer.prototype.destroyView = function(hostElement, viewAllNodes) {};
    Renderer.prototype.listen = function(renderElement, name, callback) {};
    Renderer.prototype.listenGlobal = function(target, name, callback) {};
    Renderer.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {};
    Renderer.prototype.setElementAttribute = function(renderElement, attributeName, attributeValue) {};
    Renderer.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {};
    Renderer.prototype.setElementClass = function(renderElement, className, isAdd) {};
    Renderer.prototype.setElementStyle = function(renderElement, styleName, styleValue) {};
    Renderer.prototype.invokeElementMethod = function(renderElement, methodName, args) {};
    Renderer.prototype.setText = function(renderNode, text) {};
    Renderer.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {};
    return Renderer;
  }());
  var RootRenderer = (function() {
    function RootRenderer() {}
    RootRenderer.prototype.renderComponent = function(componentType) {};
    return RootRenderer;
  }());
  var SecurityContext = {};
  SecurityContext.NONE = 0;
  SecurityContext.HTML = 1;
  SecurityContext.STYLE = 2;
  SecurityContext.SCRIPT = 3;
  SecurityContext.URL = 4;
  SecurityContext.RESOURCE_URL = 5;
  SecurityContext[SecurityContext.NONE] = "NONE";
  SecurityContext[SecurityContext.HTML] = "HTML";
  SecurityContext[SecurityContext.STYLE] = "STYLE";
  SecurityContext[SecurityContext.SCRIPT] = "SCRIPT";
  SecurityContext[SecurityContext.URL] = "URL";
  SecurityContext[SecurityContext.RESOURCE_URL] = "RESOURCE_URL";
  var Sanitizer = (function() {
    function Sanitizer() {}
    Sanitizer.prototype.sanitize = function(context, value) {};
    return Sanitizer;
  }());
  var __extends$7 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ExpressionChangedAfterItHasBeenCheckedError = (function(_super) {
    __extends$7(ExpressionChangedAfterItHasBeenCheckedError, _super);
    function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
      var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
      if (oldValue === UNINITIALIZED) {
        msg += " It seems like the view has been created after its parent and its children have been dirty checked." + " Has it been created in a change detection hook ?";
      }
      _super.call(this, msg);
    }
    return ExpressionChangedAfterItHasBeenCheckedError;
  }(BaseError));
  var ViewWrappedError = (function(_super) {
    __extends$7(ViewWrappedError, _super);
    function ViewWrappedError(originalError, context) {
      _super.call(this, "Error in " + context.source, originalError);
      this.context = context;
    }
    return ViewWrappedError;
  }(WrappedError));
  var ViewDestroyedError = (function(_super) {
    __extends$7(ViewDestroyedError, _super);
    function ViewDestroyedError(details) {
      _super.call(this, "Attempt to use a destroyed view: " + details);
    }
    return ViewDestroyedError;
  }(BaseError));
  var ViewUtils = (function() {
    function ViewUtils(_renderer, sanitizer, animationQueue) {
      this._renderer = _renderer;
      this.animationQueue = animationQueue;
      this._nextCompTypeId = 0;
      this.sanitizer = sanitizer;
    }
    ViewUtils.prototype.renderComponent = function(renderComponentType) {
      return this._renderer.renderComponent(renderComponentType);
    };
    ViewUtils.decorators = [{type: Injectable}];
    ViewUtils.ctorParameters = function() {
      return [{type: RootRenderer}, {type: Sanitizer}, {type: AnimationQueue}];
    };
    return ViewUtils;
  }());
  var nextRenderComponentTypeId = 0;
  function createRenderComponentType(templateUrl, slotCount, encapsulation, styles, animations) {
    return new RenderComponentType("" + nextRenderComponentTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
  }
  function addToArray(e, array) {
    array.push(e);
  }
  function interpolate(valueCount, constAndInterp) {
    var result = '';
    for (var i = 0; i < valueCount * 2; i = i + 2) {
      result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
    }
    return result + constAndInterp[valueCount * 2];
  }
  function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
      case 1:
        return c0 + _toStringWithNull(a1) + c1;
      case 2:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
      case 3:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3;
      case 4:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4;
      case 5:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
      case 6:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
      case 7:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7;
      case 8:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
      case 9:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
      default:
        throw new Error("Does not support more than 9 expressions");
    }
  }
  function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
  }
  function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
      if (!devModeEqual(oldValue, newValue)) {
        throw new ExpressionChangedAfterItHasBeenCheckedError(oldValue, newValue);
      }
      return false;
    } else {
      return !looseIdentical(oldValue, newValue);
    }
  }
  function castByValue(input, value) {
    return (input);
  }
  var EMPTY_ARRAY = [];
  var EMPTY_MAP = {};
  function pureProxy1(fn) {
    var result;
    var v0 = UNINITIALIZED;
    return function(p0) {
      if (!looseIdentical(v0, p0)) {
        v0 = p0;
        result = fn(p0);
      }
      return result;
    };
  }
  function pureProxy2(fn) {
    var result;
    var v0 = UNINITIALIZED;
    var v1 = UNINITIALIZED;
    return function(p0, p1) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1)) {
        v0 = p0;
        v1 = p1;
        result = fn(p0, p1);
      }
      return result;
    };
  }
  function pureProxy3(fn) {
    var result;
    var v0 = UNINITIALIZED;
    var v1 = UNINITIALIZED;
    var v2 = UNINITIALIZED;
    return function(p0, p1, p2) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        result = fn(p0, p1, p2);
      }
      return result;
    };
  }
  function pureProxy4(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3;
    v0 = v1 = v2 = v3 = UNINITIALIZED;
    return function(p0, p1, p2, p3) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        result = fn(p0, p1, p2, p3);
      }
      return result;
    };
  }
  function pureProxy5(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4;
    v0 = v1 = v2 = v3 = v4 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        result = fn(p0, p1, p2, p3, p4);
      }
      return result;
    };
  }
  function pureProxy6(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5;
    v0 = v1 = v2 = v3 = v4 = v5 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        result = fn(p0, p1, p2, p3, p4, p5);
      }
      return result;
    };
  }
  function pureProxy7(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        result = fn(p0, p1, p2, p3, p4, p5, p6);
      }
      return result;
    };
  }
  function pureProxy8(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
      }
      return result;
    };
  }
  function pureProxy9(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
      }
      return result;
    };
  }
  function pureProxy10(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8,
        v9;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8) || !looseIdentical(v9, p9)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        v9 = p9;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
      }
      return result;
    };
  }
  function setBindingDebugInfoForChanges(renderer, el, changes) {
    Object.keys(changes).forEach(function(propName) {
      setBindingDebugInfo(renderer, el, propName, changes[propName].currentValue);
    });
  }
  function setBindingDebugInfo(renderer, el, propName, value) {
    try {
      renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), value ? value.toString() : null);
    } catch (e) {
      renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), '[ERROR] Exception while trying to serialize the value');
    }
  }
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, function() {
      var m = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        m[_i - 0] = arguments[_i];
      }
      return '-' + m[1].toLowerCase();
    });
  }
  function createRenderElement(renderer, parentElement, name, attrs, debugInfo) {
    var el = renderer.createElement(parentElement, name, debugInfo);
    for (var i = 0; i < attrs.length; i += 2) {
      renderer.setElementAttribute(el, attrs.get(i), attrs.get(i + 1));
    }
    return el;
  }
  function selectOrCreateRenderHostElement(renderer, elementName, attrs, rootSelectorOrNode, debugInfo) {
    var hostElement;
    if (isPresent(rootSelectorOrNode)) {
      hostElement = renderer.selectRootElement(rootSelectorOrNode, debugInfo);
      for (var i = 0; i < attrs.length; i += 2) {
        renderer.setElementAttribute(hostElement, attrs.get(i), attrs.get(i + 1));
      }
      renderer.setElementAttribute(hostElement, 'ng-version', VERSION.full);
    } else {
      hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
    }
    return hostElement;
  }
  function subscribeToRenderElement(view, element, eventNamesAndTargets, listener) {
    var disposables = createEmptyInlineArray(eventNamesAndTargets.length / 2);
    for (var i = 0; i < eventNamesAndTargets.length; i += 2) {
      var eventName = eventNamesAndTargets.get(i);
      var eventTarget = eventNamesAndTargets.get(i + 1);
      var disposable = void 0;
      if (eventTarget) {
        disposable = view.renderer.listenGlobal(eventTarget, eventName, listener.bind(view, eventTarget + ":" + eventName));
      } else {
        disposable = view.renderer.listen(element, eventName, listener.bind(view, eventName));
      }
      disposables.set(i / 2, disposable);
    }
    return disposeInlineArray.bind(null, disposables);
  }
  function disposeInlineArray(disposables) {
    for (var i = 0; i < disposables.length; i++) {
      disposables.get(i)();
    }
  }
  function noop() {}
  function createEmptyInlineArray(length) {
    var ctor;
    if (length <= 2) {
      ctor = InlineArray2;
    } else if (length <= 4) {
      ctor = InlineArray4;
    } else if (length <= 8) {
      ctor = InlineArray8;
    } else if (length <= 16) {
      ctor = InlineArray16;
    } else {
      ctor = InlineArrayDynamic;
    }
    return new ctor(length);
  }
  var InlineArray0 = (function() {
    function InlineArray0() {
      this.length = 0;
    }
    InlineArray0.prototype.get = function(index) {
      return undefined;
    };
    InlineArray0.prototype.set = function(index, value) {};
    return InlineArray0;
  }());
  var InlineArray2 = (function() {
    function InlineArray2(length, _v0, _v1) {
      this.length = length;
      this._v0 = _v0;
      this._v1 = _v1;
    }
    InlineArray2.prototype.get = function(index) {
      switch (index) {
        case 0:
          return this._v0;
        case 1:
          return this._v1;
        default:
          return undefined;
      }
    };
    InlineArray2.prototype.set = function(index, value) {
      switch (index) {
        case 0:
          this._v0 = value;
          break;
        case 1:
          this._v1 = value;
          break;
      }
    };
    return InlineArray2;
  }());
  var InlineArray4 = (function() {
    function InlineArray4(length, _v0, _v1, _v2, _v3) {
      this.length = length;
      this._v0 = _v0;
      this._v1 = _v1;
      this._v2 = _v2;
      this._v3 = _v3;
    }
    InlineArray4.prototype.get = function(index) {
      switch (index) {
        case 0:
          return this._v0;
        case 1:
          return this._v1;
        case 2:
          return this._v2;
        case 3:
          return this._v3;
        default:
          return undefined;
      }
    };
    InlineArray4.prototype.set = function(index, value) {
      switch (index) {
        case 0:
          this._v0 = value;
          break;
        case 1:
          this._v1 = value;
          break;
        case 2:
          this._v2 = value;
          break;
        case 3:
          this._v3 = value;
          break;
      }
    };
    return InlineArray4;
  }());
  var InlineArray8 = (function() {
    function InlineArray8(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      this.length = length;
      this._v0 = _v0;
      this._v1 = _v1;
      this._v2 = _v2;
      this._v3 = _v3;
      this._v4 = _v4;
      this._v5 = _v5;
      this._v6 = _v6;
      this._v7 = _v7;
    }
    InlineArray8.prototype.get = function(index) {
      switch (index) {
        case 0:
          return this._v0;
        case 1:
          return this._v1;
        case 2:
          return this._v2;
        case 3:
          return this._v3;
        case 4:
          return this._v4;
        case 5:
          return this._v5;
        case 6:
          return this._v6;
        case 7:
          return this._v7;
        default:
          return undefined;
      }
    };
    InlineArray8.prototype.set = function(index, value) {
      switch (index) {
        case 0:
          this._v0 = value;
          break;
        case 1:
          this._v1 = value;
          break;
        case 2:
          this._v2 = value;
          break;
        case 3:
          this._v3 = value;
          break;
        case 4:
          this._v4 = value;
          break;
        case 5:
          this._v5 = value;
          break;
        case 6:
          this._v6 = value;
          break;
        case 7:
          this._v7 = value;
          break;
      }
    };
    return InlineArray8;
  }());
  var InlineArray16 = (function() {
    function InlineArray16(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
      this.length = length;
      this._v0 = _v0;
      this._v1 = _v1;
      this._v2 = _v2;
      this._v3 = _v3;
      this._v4 = _v4;
      this._v5 = _v5;
      this._v6 = _v6;
      this._v7 = _v7;
      this._v8 = _v8;
      this._v9 = _v9;
      this._v10 = _v10;
      this._v11 = _v11;
      this._v12 = _v12;
      this._v13 = _v13;
      this._v14 = _v14;
      this._v15 = _v15;
    }
    InlineArray16.prototype.get = function(index) {
      switch (index) {
        case 0:
          return this._v0;
        case 1:
          return this._v1;
        case 2:
          return this._v2;
        case 3:
          return this._v3;
        case 4:
          return this._v4;
        case 5:
          return this._v5;
        case 6:
          return this._v6;
        case 7:
          return this._v7;
        case 8:
          return this._v8;
        case 9:
          return this._v9;
        case 10:
          return this._v10;
        case 11:
          return this._v11;
        case 12:
          return this._v12;
        case 13:
          return this._v13;
        case 14:
          return this._v14;
        case 15:
          return this._v15;
        default:
          return undefined;
      }
    };
    InlineArray16.prototype.set = function(index, value) {
      switch (index) {
        case 0:
          this._v0 = value;
          break;
        case 1:
          this._v1 = value;
          break;
        case 2:
          this._v2 = value;
          break;
        case 3:
          this._v3 = value;
          break;
        case 4:
          this._v4 = value;
          break;
        case 5:
          this._v5 = value;
          break;
        case 6:
          this._v6 = value;
          break;
        case 7:
          this._v7 = value;
          break;
        case 8:
          this._v8 = value;
          break;
        case 9:
          this._v9 = value;
          break;
        case 10:
          this._v10 = value;
          break;
        case 11:
          this._v11 = value;
          break;
        case 12:
          this._v12 = value;
          break;
        case 13:
          this._v13 = value;
          break;
        case 14:
          this._v14 = value;
          break;
        case 15:
          this._v15 = value;
          break;
      }
    };
    return InlineArray16;
  }());
  var InlineArrayDynamic = (function() {
    function InlineArrayDynamic(length) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      this.length = length;
      this._values = values;
    }
    InlineArrayDynamic.prototype.get = function(index) {
      return this._values[index];
    };
    InlineArrayDynamic.prototype.set = function(index, value) {
      this._values[index] = value;
    };
    return InlineArrayDynamic;
  }());
  var EMPTY_INLINE_ARRAY = new InlineArray0();
  var view_utils = Object.freeze({
    ViewUtils: ViewUtils,
    createRenderComponentType: createRenderComponentType,
    addToArray: addToArray,
    interpolate: interpolate,
    inlineInterpolate: inlineInterpolate,
    checkBinding: checkBinding,
    castByValue: castByValue,
    EMPTY_ARRAY: EMPTY_ARRAY,
    EMPTY_MAP: EMPTY_MAP,
    pureProxy1: pureProxy1,
    pureProxy2: pureProxy2,
    pureProxy3: pureProxy3,
    pureProxy4: pureProxy4,
    pureProxy5: pureProxy5,
    pureProxy6: pureProxy6,
    pureProxy7: pureProxy7,
    pureProxy8: pureProxy8,
    pureProxy9: pureProxy9,
    pureProxy10: pureProxy10,
    setBindingDebugInfoForChanges: setBindingDebugInfoForChanges,
    setBindingDebugInfo: setBindingDebugInfo,
    createRenderElement: createRenderElement,
    selectOrCreateRenderHostElement: selectOrCreateRenderHostElement,
    subscribeToRenderElement: subscribeToRenderElement,
    noop: noop,
    InlineArray2: InlineArray2,
    InlineArray4: InlineArray4,
    InlineArray8: InlineArray8,
    InlineArray16: InlineArray16,
    InlineArrayDynamic: InlineArrayDynamic,
    EMPTY_INLINE_ARRAY: EMPTY_INLINE_ARRAY
  });
  var __extends$5 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ComponentRef = (function() {
    function ComponentRef() {}
    Object.defineProperty(ComponentRef.prototype, "location", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "instance", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "hostView", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "componentType", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ComponentRef.prototype.destroy = function() {};
    ComponentRef.prototype.onDestroy = function(callback) {};
    return ComponentRef;
  }());
  var ComponentRef_ = (function(_super) {
    __extends$5(ComponentRef_, _super);
    function ComponentRef_(_index, _parentView, _nativeElement, _component) {
      _super.call(this);
      this._index = _index;
      this._parentView = _parentView;
      this._nativeElement = _nativeElement;
      this._component = _component;
    }
    Object.defineProperty(ComponentRef_.prototype, "location", {
      get: function() {
        return new ElementRef(this._nativeElement);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "injector", {
      get: function() {
        return this._parentView.injector(this._index);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "instance", {
      get: function() {
        return this._component;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "hostView", {
      get: function() {
        return this._parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
      get: function() {
        return this._parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "componentType", {
      get: function() {
        return (this._component.constructor);
      },
      enumerable: true,
      configurable: true
    });
    ComponentRef_.prototype.destroy = function() {
      this._parentView.detachAndDestroy();
    };
    ComponentRef_.prototype.onDestroy = function(callback) {
      this.hostView.onDestroy(callback);
    };
    return ComponentRef_;
  }(ComponentRef));
  var ComponentFactory = (function() {
    function ComponentFactory(selector, _viewClass, _componentType) {
      this.selector = selector;
      this._viewClass = _viewClass;
      this._componentType = _componentType;
    }
    Object.defineProperty(ComponentFactory.prototype, "componentType", {
      get: function() {
        return this._componentType;
      },
      enumerable: true,
      configurable: true
    });
    ComponentFactory.prototype.create = function(injector, projectableNodes, rootSelectorOrNode) {
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      if (rootSelectorOrNode === void 0) {
        rootSelectorOrNode = null;
      }
      var vu = injector.get(ViewUtils);
      if (!projectableNodes) {
        projectableNodes = [];
      }
      var hostView = new this._viewClass(vu, null, null, null);
      return hostView.createHostView(rootSelectorOrNode, injector, projectableNodes);
    };
    return ComponentFactory;
  }());
  var __extends$8 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NoComponentFactoryError = (function(_super) {
    __extends$8(NoComponentFactoryError, _super);
    function NoComponentFactoryError(component) {
      _super.call(this, "No component factory found for " + stringify(component) + ". Did you add it to @NgModule.entryComponents?");
      this.component = component;
    }
    return NoComponentFactoryError;
  }(BaseError));
  var _NullComponentFactoryResolver = (function() {
    function _NullComponentFactoryResolver() {}
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
      throw new NoComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
  }());
  var ComponentFactoryResolver = (function() {
    function ComponentFactoryResolver() {}
    ComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {};
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
  }());
  var CodegenComponentFactoryResolver = (function() {
    function CodegenComponentFactoryResolver(factories, _parent) {
      this._parent = _parent;
      this._factories = new Map();
      for (var i = 0; i < factories.length; i++) {
        var factory = factories[i];
        this._factories.set(factory.componentType, factory);
      }
    }
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
      var result = this._factories.get(component);
      if (!result) {
        result = this._parent.resolveComponentFactory(component);
      }
      return result;
    };
    return CodegenComponentFactoryResolver;
  }());
  var trace;
  var events;
  function detectWTF() {
    var wtf = ((global$1))['wtf'];
    if (wtf) {
      trace = wtf['trace'];
      if (trace) {
        events = trace['events'];
        return true;
      }
    }
    return false;
  }
  function createScope(signature, flags) {
    if (flags === void 0) {
      flags = null;
    }
    return events.createScope(signature, flags);
  }
  function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
  }
  function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
  }
  function endTimeRange(range) {
    trace.endTimeRange(range);
  }
  var wtfEnabled = detectWTF();
  function noopScope(arg0, arg1) {
    return null;
  }
  var wtfCreateScope = wtfEnabled ? createScope : function(signature, flags) {
    return noopScope;
  };
  var wtfLeave = wtfEnabled ? leave : function(s, r) {
    return r;
  };
  var wtfStartTimeRange = wtfEnabled ? startTimeRange : function(rangeType, action) {
    return null;
  };
  var wtfEndTimeRange = wtfEnabled ? endTimeRange : function(r) {
    return null;
  };
  var Testability = (function() {
    function Testability(_ngZone) {
      this._ngZone = _ngZone;
      this._pendingCount = 0;
      this._isZoneStable = true;
      this._didWork = false;
      this._callbacks = [];
      this._watchAngularEvents();
    }
    Testability.prototype._watchAngularEvents = function() {
      var _this = this;
      this._ngZone.onUnstable.subscribe({next: function() {
          _this._didWork = true;
          _this._isZoneStable = false;
        }});
      this._ngZone.runOutsideAngular(function() {
        _this._ngZone.onStable.subscribe({next: function() {
            NgZone.assertNotInAngularZone();
            scheduleMicroTask(function() {
              _this._isZoneStable = true;
              _this._runCallbacksIfReady();
            });
          }});
      });
    };
    Testability.prototype.increasePendingRequestCount = function() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new Error('pending async requests below zero');
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    };
    Testability.prototype.isStable = function() {
      return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
    };
    Testability.prototype._runCallbacksIfReady = function() {
      var _this = this;
      if (this.isStable()) {
        scheduleMicroTask(function() {
          while (_this._callbacks.length !== 0) {
            (_this._callbacks.pop())(_this._didWork);
          }
          _this._didWork = false;
        });
      } else {
        this._didWork = true;
      }
    };
    Testability.prototype.whenStable = function(callback) {
      this._callbacks.push(callback);
      this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function() {
      return this._pendingCount;
    };
    Testability.prototype.findBindings = function(using, provider, exactMatch) {
      return [];
    };
    Testability.prototype.findProviders = function(using, provider, exactMatch) {
      return [];
    };
    Testability.decorators = [{type: Injectable}];
    Testability.ctorParameters = function() {
      return [{type: NgZone}];
    };
    return Testability;
  }());
  var TestabilityRegistry = (function() {
    function TestabilityRegistry() {
      this._applications = new Map();
      _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function(token, testability) {
      this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function(elem) {
      return this._applications.get(elem);
    };
    TestabilityRegistry.prototype.getAllTestabilities = function() {
      return Array.from(this._applications.values());
    };
    TestabilityRegistry.prototype.getAllRootElements = function() {
      return Array.from(this._applications.keys());
    };
    TestabilityRegistry.prototype.findTestabilityInTree = function(elem, findInAncestors) {
      if (findInAncestors === void 0) {
        findInAncestors = true;
      }
      return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry.decorators = [{type: Injectable}];
    TestabilityRegistry.ctorParameters = function() {
      return [];
    };
    return TestabilityRegistry;
  }());
  var _NoopGetTestability = (function() {
    function _NoopGetTestability() {}
    _NoopGetTestability.prototype.addToWindow = function(registry) {};
    _NoopGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      return null;
    };
    return _NoopGetTestability;
  }());
  function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
  }
  var _testabilityGetter = new _NoopGetTestability();
  var __extends$3 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _devMode = true;
  var _runModeLocked = false;
  var _platform;
  function enableProdMode() {
    if (_runModeLocked) {
      throw new Error('Cannot enable prod mode after platform setup.');
    }
    _devMode = false;
  }
  function isDevMode() {
    _runModeLocked = true;
    return _devMode;
  }
  var NgProbeToken = (function() {
    function NgProbeToken(name, token) {
      this.name = name;
      this.token = token;
    }
    return NgProbeToken;
  }());
  function createPlatform(injector) {
    if (_platform && !_platform.destroyed) {
      throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
    }
    _platform = injector.get(PlatformRef);
    var inits = (injector.get(PLATFORM_INITIALIZER, null));
    if (inits)
      inits.forEach(function(init) {
        return init();
      });
    return _platform;
  }
  function createPlatformFactory(parentPlatformFactory, name, providers) {
    if (providers === void 0) {
      providers = [];
    }
    var marker = new OpaqueToken("Platform: " + name);
    return function(extraProviders) {
      if (extraProviders === void 0) {
        extraProviders = [];
      }
      if (!getPlatform()) {
        if (parentPlatformFactory) {
          parentPlatformFactory(providers.concat(extraProviders).concat({
            provide: marker,
            useValue: true
          }));
        } else {
          createPlatform(ReflectiveInjector.resolveAndCreate(providers.concat(extraProviders).concat({
            provide: marker,
            useValue: true
          })));
        }
      }
      return assertPlatform(marker);
    };
  }
  function assertPlatform(requiredToken) {
    var platform = getPlatform();
    if (!platform) {
      throw new Error('No platform exists!');
    }
    if (!platform.injector.get(requiredToken, null)) {
      throw new Error('A platform with a different configuration has been created. Please destroy it first.');
    }
    return platform;
  }
  function destroyPlatform() {
    if (_platform && !_platform.destroyed) {
      _platform.destroy();
    }
  }
  function getPlatform() {
    return _platform && !_platform.destroyed ? _platform : null;
  }
  var PlatformRef = (function() {
    function PlatformRef() {}
    PlatformRef.prototype.bootstrapModuleFactory = function(moduleFactory) {
      throw unimplemented();
    };
    PlatformRef.prototype.bootstrapModule = function(moduleType, compilerOptions) {
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      throw unimplemented();
    };
    PlatformRef.prototype.onDestroy = function(callback) {};
    Object.defineProperty(PlatformRef.prototype, "injector", {
      get: function() {
        throw unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    PlatformRef.prototype.destroy = function() {};
    Object.defineProperty(PlatformRef.prototype, "destroyed", {
      get: function() {
        throw unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return PlatformRef;
  }());
  function _callAndReportToErrorHandler(errorHandler, callback) {
    try {
      var result = callback();
      if (isPromise(result)) {
        return result.catch(function(e) {
          errorHandler.handleError(e);
          throw e;
        });
      }
      return result;
    } catch (e) {
      errorHandler.handleError(e);
      throw e;
    }
  }
  var PlatformRef_ = (function(_super) {
    __extends$3(PlatformRef_, _super);
    function PlatformRef_(_injector) {
      _super.call(this);
      this._injector = _injector;
      this._modules = [];
      this._destroyListeners = [];
      this._destroyed = false;
    }
    PlatformRef_.prototype.onDestroy = function(callback) {
      this._destroyListeners.push(callback);
    };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PlatformRef_.prototype, "destroyed", {
      get: function() {
        return this._destroyed;
      },
      enumerable: true,
      configurable: true
    });
    PlatformRef_.prototype.destroy = function() {
      if (this._destroyed) {
        throw new Error('The platform has already been destroyed!');
      }
      this._modules.slice().forEach(function(module) {
        return module.destroy();
      });
      this._destroyListeners.forEach(function(listener) {
        return listener();
      });
      this._destroyed = true;
    };
    PlatformRef_.prototype.bootstrapModuleFactory = function(moduleFactory) {
      return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
    };
    PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function(moduleFactory, ngZone) {
      var _this = this;
      if (!ngZone)
        ngZone = new NgZone({enableLongStackTrace: isDevMode()});
      return ngZone.run(function() {
        var ngZoneInjector = ReflectiveInjector.resolveAndCreate([{
          provide: NgZone,
          useValue: ngZone
        }], _this.injector);
        var moduleRef = (moduleFactory.create(ngZoneInjector));
        var exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
        if (!exceptionHandler) {
          throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
        }
        moduleRef.onDestroy(function() {
          return ListWrapper.remove(_this._modules, moduleRef);
        });
        ngZone.onError.subscribe({next: function(error) {
            exceptionHandler.handleError(error);
          }});
        return _callAndReportToErrorHandler(exceptionHandler, function() {
          var initStatus = moduleRef.injector.get(ApplicationInitStatus);
          return initStatus.donePromise.then(function() {
            _this._moduleDoBootstrap(moduleRef);
            return moduleRef;
          });
        });
      });
    };
    PlatformRef_.prototype.bootstrapModule = function(moduleType, compilerOptions) {
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
    };
    PlatformRef_.prototype._bootstrapModuleWithZone = function(moduleType, compilerOptions, ngZone, componentFactoryCallback) {
      var _this = this;
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      var compilerFactory = this.injector.get(CompilerFactory);
      var compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
      if (componentFactoryCallback) {
        return compiler.compileModuleAndAllComponentsAsync(moduleType).then(function(_a) {
          var ngModuleFactory = _a.ngModuleFactory,
              componentFactories = _a.componentFactories;
          componentFactoryCallback(componentFactories);
          return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
        });
      }
      return compiler.compileModuleAsync(moduleType).then(function(moduleFactory) {
        return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone);
      });
    };
    PlatformRef_.prototype._moduleDoBootstrap = function(moduleRef) {
      var appRef = moduleRef.injector.get(ApplicationRef);
      if (moduleRef.bootstrapFactories.length > 0) {
        moduleRef.bootstrapFactories.forEach(function(compFactory) {
          return appRef.bootstrap(compFactory);
        });
      } else if (moduleRef.instance.ngDoBootstrap) {
        moduleRef.instance.ngDoBootstrap(appRef);
      } else {
        throw new Error(("The module " + stringify(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") + "Please define one of these.");
      }
    };
    PlatformRef_.decorators = [{type: Injectable}];
    PlatformRef_.ctorParameters = function() {
      return [{type: Injector}];
    };
    return PlatformRef_;
  }(PlatformRef));
  var ApplicationRef = (function() {
    function ApplicationRef() {}
    ApplicationRef.prototype.bootstrap = function(componentFactory) {};
    ApplicationRef.prototype.tick = function() {};
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "components", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ;
    ApplicationRef.prototype.attachView = function(view) {
      unimplemented();
    };
    ApplicationRef.prototype.detachView = function(view) {
      unimplemented();
    };
    Object.defineProperty(ApplicationRef.prototype, "viewCount", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ApplicationRef;
  }());
  var ApplicationRef_ = (function(_super) {
    __extends$3(ApplicationRef_, _super);
    function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
      var _this = this;
      _super.call(this);
      this._zone = _zone;
      this._console = _console;
      this._injector = _injector;
      this._exceptionHandler = _exceptionHandler;
      this._componentFactoryResolver = _componentFactoryResolver;
      this._initStatus = _initStatus;
      this._testabilityRegistry = _testabilityRegistry;
      this._testability = _testability;
      this._bootstrapListeners = [];
      this._rootComponents = [];
      this._rootComponentTypes = [];
      this._views = [];
      this._runningTick = false;
      this._enforceNoNewChanges = false;
      this._enforceNoNewChanges = isDevMode();
      this._zone.onMicrotaskEmpty.subscribe({next: function() {
          _this._zone.run(function() {
            _this.tick();
          });
        }});
    }
    ApplicationRef_.prototype.attachView = function(viewRef) {
      var view = ((viewRef)).internalView;
      this._views.push(view);
      view.attachToAppRef(this);
    };
    ApplicationRef_.prototype.detachView = function(viewRef) {
      var view = ((viewRef)).internalView;
      ListWrapper.remove(this._views, view);
      view.detach();
    };
    ApplicationRef_.prototype.bootstrap = function(componentOrFactory) {
      var _this = this;
      if (!this._initStatus.done) {
        throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
      }
      var componentFactory;
      if (componentOrFactory instanceof ComponentFactory) {
        componentFactory = componentOrFactory;
      } else {
        componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
      }
      this._rootComponentTypes.push(componentFactory.componentType);
      var compRef = componentFactory.create(this._injector, [], componentFactory.selector);
      compRef.onDestroy(function() {
        _this._unloadComponent(compRef);
      });
      var testability = compRef.injector.get(Testability, null);
      if (testability) {
        compRef.injector.get(TestabilityRegistry).registerApplication(compRef.location.nativeElement, testability);
      }
      this._loadComponent(compRef);
      if (isDevMode()) {
        this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
      }
      return compRef;
    };
    ApplicationRef_.prototype._loadComponent = function(componentRef) {
      this.attachView(componentRef.hostView);
      this.tick();
      this._rootComponents.push(componentRef);
      var listeners = (this._injector.get(APP_BOOTSTRAP_LISTENER, []).concat(this._bootstrapListeners));
      listeners.forEach(function(listener) {
        return listener(componentRef);
      });
    };
    ApplicationRef_.prototype._unloadComponent = function(componentRef) {
      this.detachView(componentRef.hostView);
      ListWrapper.remove(this._rootComponents, componentRef);
    };
    ApplicationRef_.prototype.tick = function() {
      if (this._runningTick) {
        throw new Error('ApplicationRef.tick is called recursively');
      }
      var scope = ApplicationRef_._tickScope();
      try {
        this._runningTick = true;
        this._views.forEach(function(view) {
          return view.ref.detectChanges();
        });
        if (this._enforceNoNewChanges) {
          this._views.forEach(function(view) {
            return view.ref.checkNoChanges();
          });
        }
      } finally {
        this._runningTick = false;
        wtfLeave(scope);
      }
    };
    ApplicationRef_.prototype.ngOnDestroy = function() {
      this._views.slice().forEach(function(view) {
        return view.destroy();
      });
    };
    Object.defineProperty(ApplicationRef_.prototype, "viewCount", {
      get: function() {
        return this._views.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
      get: function() {
        return this._rootComponentTypes;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "components", {
      get: function() {
        return this._rootComponents;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_._tickScope = wtfCreateScope('ApplicationRef#tick()');
    ApplicationRef_.decorators = [{type: Injectable}];
    ApplicationRef_.ctorParameters = function() {
      return [{type: NgZone}, {type: Console}, {type: Injector}, {type: ErrorHandler}, {type: ComponentFactoryResolver}, {type: ApplicationInitStatus}, {
        type: TestabilityRegistry,
        decorators: [{type: Optional}]
      }, {
        type: Testability,
        decorators: [{type: Optional}]
      }];
    };
    return ApplicationRef_;
  }(ApplicationRef));
  var __extends$9 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NgModuleRef = (function() {
    function NgModuleRef() {}
    Object.defineProperty(NgModuleRef.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "instance", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    NgModuleRef.prototype.destroy = function() {};
    NgModuleRef.prototype.onDestroy = function(callback) {};
    return NgModuleRef;
  }());
  var NgModuleFactory = (function() {
    function NgModuleFactory(_injectorClass, _moduleType) {
      this._injectorClass = _injectorClass;
      this._moduleType = _moduleType;
    }
    Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
      get: function() {
        return this._moduleType;
      },
      enumerable: true,
      configurable: true
    });
    NgModuleFactory.prototype.create = function(parentInjector) {
      if (!parentInjector) {
        parentInjector = Injector.NULL;
      }
      var instance = new this._injectorClass(parentInjector);
      instance.create();
      return instance;
    };
    return NgModuleFactory;
  }());
  var _UNDEFINED = new Object();
  var NgModuleInjector = (function(_super) {
    __extends$9(NgModuleInjector, _super);
    function NgModuleInjector(parent, factories, bootstrapFactories) {
      _super.call(this, factories, parent.get(ComponentFactoryResolver, ComponentFactoryResolver.NULL));
      this.parent = parent;
      this.bootstrapFactories = bootstrapFactories;
      this._destroyListeners = [];
      this._destroyed = false;
    }
    NgModuleInjector.prototype.create = function() {
      this.instance = this.createInternal();
    };
    NgModuleInjector.prototype.createInternal = function() {};
    NgModuleInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      if (token === Injector || token === ComponentFactoryResolver) {
        return this;
      }
      var result = this.getInternal(token, _UNDEFINED);
      return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
    };
    NgModuleInjector.prototype.getInternal = function(token, notFoundValue) {};
    Object.defineProperty(NgModuleInjector.prototype, "injector", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    NgModuleInjector.prototype.destroy = function() {
      if (this._destroyed) {
        throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
      }
      this._destroyed = true;
      this.destroyInternal();
      this._destroyListeners.forEach(function(listener) {
        return listener();
      });
    };
    NgModuleInjector.prototype.onDestroy = function(callback) {
      this._destroyListeners.push(callback);
    };
    NgModuleInjector.prototype.destroyInternal = function() {};
    return NgModuleInjector;
  }(CodegenComponentFactoryResolver));
  var NgModuleFactoryLoader = (function() {
    function NgModuleFactoryLoader() {}
    NgModuleFactoryLoader.prototype.load = function(path) {};
    return NgModuleFactoryLoader;
  }());
  var moduleFactories = new Map();
  function registerModuleFactory(id, factory) {
    var existing = moduleFactories.get(id);
    if (existing) {
      throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
    }
    moduleFactories.set(id, factory);
  }
  function getModuleFactory(id) {
    var factory = moduleFactories.get(id);
    if (!factory)
      throw new Error("No module with ID " + id + " loaded");
    return factory;
  }
  var QueryList = (function() {
    function QueryList() {
      this._dirty = true;
      this._results = [];
      this._emitter = new EventEmitter();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
      get: function() {
        return this._emitter;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
      get: function() {
        return this._results.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
      get: function() {
        return this._results[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
      get: function() {
        return this._results[this.length - 1];
      },
      enumerable: true,
      configurable: true
    });
    QueryList.prototype.map = function(fn) {
      return this._results.map(fn);
    };
    QueryList.prototype.filter = function(fn) {
      return this._results.filter(fn);
    };
    QueryList.prototype.find = function(fn) {
      return this._results.find(fn);
    };
    QueryList.prototype.reduce = function(fn, init) {
      return this._results.reduce(fn, init);
    };
    QueryList.prototype.forEach = function(fn) {
      this._results.forEach(fn);
    };
    QueryList.prototype.some = function(fn) {
      return this._results.some(fn);
    };
    QueryList.prototype.toArray = function() {
      return this._results.slice();
    };
    QueryList.prototype[getSymbolIterator()] = function() {
      return ((this._results))[getSymbolIterator()]();
    };
    QueryList.prototype.toString = function() {
      return this._results.toString();
    };
    QueryList.prototype.reset = function(res) {
      this._results = ListWrapper.flatten(res);
      this._dirty = false;
    };
    QueryList.prototype.notifyOnChanges = function() {
      this._emitter.emit(this);
    };
    QueryList.prototype.setDirty = function() {
      this._dirty = true;
    };
    Object.defineProperty(QueryList.prototype, "dirty", {
      get: function() {
        return this._dirty;
      },
      enumerable: true,
      configurable: true
    });
    return QueryList;
  }());
  var _SEPARATOR = '#';
  var FACTORY_CLASS_SUFFIX = 'NgFactory';
  var SystemJsNgModuleLoaderConfig = (function() {
    function SystemJsNgModuleLoaderConfig() {}
    return SystemJsNgModuleLoaderConfig;
  }());
  var DEFAULT_CONFIG = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory'
  };
  var SystemJsNgModuleLoader = (function() {
    function SystemJsNgModuleLoader(_compiler, config) {
      this._compiler = _compiler;
      this._config = config || DEFAULT_CONFIG;
    }
    SystemJsNgModuleLoader.prototype.load = function(path) {
      var offlineMode = this._compiler instanceof Compiler;
      return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    SystemJsNgModuleLoader.prototype.loadAndCompile = function(path) {
      var _this = this;
      var _a = path.split(_SEPARATOR),
          module = _a[0],
          exportName = _a[1];
      if (exportName === undefined) {
        exportName = 'default';
      }
      return System.import(module).then(function(module) {
        return module[exportName];
      }).then(function(type) {
        return checkNotEmpty(type, module, exportName);
      }).then(function(type) {
        return _this._compiler.compileModuleAsync(type);
      });
    };
    SystemJsNgModuleLoader.prototype.loadFactory = function(path) {
      var _a = path.split(_SEPARATOR),
          module = _a[0],
          exportName = _a[1];
      var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
      if (exportName === undefined) {
        exportName = 'default';
        factoryClassSuffix = '';
      }
      return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix).then(function(module) {
        return module[exportName + factoryClassSuffix];
      }).then(function(factory) {
        return checkNotEmpty(factory, module, exportName);
      });
    };
    SystemJsNgModuleLoader.decorators = [{type: Injectable}];
    SystemJsNgModuleLoader.ctorParameters = function() {
      return [{type: Compiler}, {
        type: SystemJsNgModuleLoaderConfig,
        decorators: [{type: Optional}]
      }];
    };
    return SystemJsNgModuleLoader;
  }());
  function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
      throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
  }
  var __extends$10 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var TemplateRef = (function() {
    function TemplateRef() {}
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    TemplateRef.prototype.createEmbeddedView = function(context) {};
    return TemplateRef;
  }());
  var TemplateRef_ = (function(_super) {
    __extends$10(TemplateRef_, _super);
    function TemplateRef_(_parentView, _nodeIndex, _nativeElement) {
      _super.call(this);
      this._parentView = _parentView;
      this._nodeIndex = _nodeIndex;
      this._nativeElement = _nativeElement;
    }
    TemplateRef_.prototype.createEmbeddedView = function(context) {
      var view = this._parentView.createEmbeddedViewInternal(this._nodeIndex);
      view.create(context || ({}));
      return view.ref;
    };
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
      get: function() {
        return new ElementRef(this._nativeElement);
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef_;
  }(TemplateRef));
  var ViewContainerRef = (function() {
    function ViewContainerRef() {}
    Object.defineProperty(ViewContainerRef.prototype, "element", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "injector", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef.prototype.clear = function() {};
    ViewContainerRef.prototype.get = function(index) {};
    Object.defineProperty(ViewContainerRef.prototype, "length", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ;
    ViewContainerRef.prototype.createEmbeddedView = function(templateRef, context, index) {};
    ViewContainerRef.prototype.createComponent = function(componentFactory, index, injector, projectableNodes) {};
    ViewContainerRef.prototype.insert = function(viewRef, index) {};
    ViewContainerRef.prototype.move = function(viewRef, currentIndex) {};
    ViewContainerRef.prototype.indexOf = function(viewRef) {};
    ViewContainerRef.prototype.remove = function(index) {};
    ViewContainerRef.prototype.detach = function(index) {};
    return ViewContainerRef;
  }());
  var ViewContainerRef_ = (function() {
    function ViewContainerRef_(_element) {
      this._element = _element;
      this._createComponentInContainerScope = wtfCreateScope('ViewContainerRef#createComponent()');
      this._insertScope = wtfCreateScope('ViewContainerRef#insert()');
      this._removeScope = wtfCreateScope('ViewContainerRef#remove()');
      this._detachScope = wtfCreateScope('ViewContainerRef#detach()');
    }
    ViewContainerRef_.prototype.get = function(index) {
      return this._element.nestedViews[index].ref;
    };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
      get: function() {
        var views = this._element.nestedViews;
        return isPresent(views) ? views.length : 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
      get: function() {
        return this._element.elementRef;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
      get: function() {
        return this._element.injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
      get: function() {
        return this._element.parentInjector;
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef_.prototype.createEmbeddedView = function(templateRef, context, index) {
      if (context === void 0) {
        context = null;
      }
      if (index === void 0) {
        index = -1;
      }
      var viewRef = templateRef.createEmbeddedView(context);
      this.insert(viewRef, index);
      return viewRef;
    };
    ViewContainerRef_.prototype.createComponent = function(componentFactory, index, injector, projectableNodes) {
      if (index === void 0) {
        index = -1;
      }
      if (injector === void 0) {
        injector = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      var s = this._createComponentInContainerScope();
      var contextInjector = injector || this._element.parentInjector;
      var componentRef = componentFactory.create(contextInjector, projectableNodes);
      this.insert(componentRef.hostView, index);
      return wtfLeave(s, componentRef);
    };
    ViewContainerRef_.prototype.insert = function(viewRef, index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._insertScope();
      if (index == -1)
        index = this.length;
      var viewRef_ = (viewRef);
      this._element.attachView(viewRef_.internalView, index);
      return wtfLeave(s, viewRef_);
    };
    ViewContainerRef_.prototype.move = function(viewRef, currentIndex) {
      var s = this._insertScope();
      if (currentIndex == -1)
        return;
      var viewRef_ = (viewRef);
      this._element.moveView(viewRef_.internalView, currentIndex);
      return wtfLeave(s, viewRef_);
    };
    ViewContainerRef_.prototype.indexOf = function(viewRef) {
      return this._element.nestedViews.indexOf(((viewRef)).internalView);
    };
    ViewContainerRef_.prototype.remove = function(index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._removeScope();
      if (index == -1)
        index = this.length - 1;
      var view = this._element.detachView(index);
      view.destroy();
      wtfLeave(s);
    };
    ViewContainerRef_.prototype.detach = function(index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._detachScope();
      if (index == -1)
        index = this.length - 1;
      var view = this._element.detachView(index);
      return wtfLeave(s, view.ref);
    };
    ViewContainerRef_.prototype.clear = function() {
      for (var i = this.length - 1; i >= 0; i--) {
        this.remove(i);
      }
    };
    return ViewContainerRef_;
  }());
  var __extends$11 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ViewRef = (function(_super) {
    __extends$11(ViewRef, _super);
    function ViewRef() {
      _super.apply(this, arguments);
    }
    ViewRef.prototype.destroy = function() {};
    Object.defineProperty(ViewRef.prototype, "destroyed", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ViewRef.prototype.onDestroy = function(callback) {};
    return ViewRef;
  }(ChangeDetectorRef));
  var EmbeddedViewRef = (function(_super) {
    __extends$11(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
      get: function() {
        return (unimplemented());
      },
      enumerable: true,
      configurable: true
    });
    ;
    return EmbeddedViewRef;
  }(ViewRef));
  var ViewRef_ = (function() {
    function ViewRef_(_view, animationQueue) {
      this._view = _view;
      this.animationQueue = animationQueue;
      this._view = _view;
      this._originalMode = this._view.cdMode;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
      get: function() {
        return this._view;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
      get: function() {
        return this._view.flatRootNodes;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "context", {
      get: function() {
        return this._view.context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
      get: function() {
        return this._view.destroyed;
      },
      enumerable: true,
      configurable: true
    });
    ViewRef_.prototype.markForCheck = function() {
      this._view.markPathToRootAsCheckOnce();
    };
    ViewRef_.prototype.detach = function() {
      this._view.cdMode = ChangeDetectorStatus.Detached;
    };
    ViewRef_.prototype.detectChanges = function() {
      this._view.detectChanges(false);
      this.animationQueue.flush();
    };
    ViewRef_.prototype.checkNoChanges = function() {
      this._view.detectChanges(true);
    };
    ViewRef_.prototype.reattach = function() {
      this._view.cdMode = this._originalMode;
      this.markForCheck();
    };
    ViewRef_.prototype.onDestroy = function(callback) {
      if (!this._view.disposables) {
        this._view.disposables = [];
      }
      this._view.disposables.push(callback);
    };
    ViewRef_.prototype.destroy = function() {
      this._view.detachAndDestroy();
    };
    return ViewRef_;
  }());
  var __extends$12 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EventListener = (function() {
    function EventListener(name, callback) {
      this.name = name;
      this.callback = callback;
    }
    ;
    return EventListener;
  }());
  var DebugNode = (function() {
    function DebugNode(nativeNode, parent, _debugInfo) {
      this._debugInfo = _debugInfo;
      this.nativeNode = nativeNode;
      if (parent && parent instanceof DebugElement) {
        parent.addChild(this);
      } else {
        this.parent = null;
      }
      this.listeners = [];
    }
    Object.defineProperty(DebugNode.prototype, "injector", {
      get: function() {
        return this._debugInfo ? this._debugInfo.injector : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "componentInstance", {
      get: function() {
        return this._debugInfo ? this._debugInfo.component : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "context", {
      get: function() {
        return this._debugInfo ? this._debugInfo.context : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "references", {
      get: function() {
        return this._debugInfo ? this._debugInfo.references : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "providerTokens", {
      get: function() {
        return this._debugInfo ? this._debugInfo.providerTokens : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "source", {
      get: function() {
        return this._debugInfo ? this._debugInfo.source : null;
      },
      enumerable: true,
      configurable: true
    });
    return DebugNode;
  }());
  var DebugElement = (function(_super) {
    __extends$12(DebugElement, _super);
    function DebugElement(nativeNode, parent, _debugInfo) {
      _super.call(this, nativeNode, parent, _debugInfo);
      this.properties = {};
      this.attributes = {};
      this.classes = {};
      this.styles = {};
      this.childNodes = [];
      this.nativeElement = nativeNode;
    }
    DebugElement.prototype.addChild = function(child) {
      if (child) {
        this.childNodes.push(child);
        child.parent = this;
      }
    };
    DebugElement.prototype.removeChild = function(child) {
      var childIndex = this.childNodes.indexOf(child);
      if (childIndex !== -1) {
        child.parent = null;
        this.childNodes.splice(childIndex, 1);
      }
    };
    DebugElement.prototype.insertChildrenAfter = function(child, newChildren) {
      var siblingIndex = this.childNodes.indexOf(child);
      if (siblingIndex !== -1) {
        var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
        var nextChildren = this.childNodes.slice(siblingIndex + 1);
        this.childNodes = previousChildren.concat(newChildren, nextChildren);
        for (var i = 0; i < newChildren.length; ++i) {
          var newChild = newChildren[i];
          if (newChild.parent) {
            newChild.parent.removeChild(newChild);
          }
          newChild.parent = this;
        }
      }
    };
    DebugElement.prototype.query = function(predicate) {
      var results = this.queryAll(predicate);
      return results[0] || null;
    };
    DebugElement.prototype.queryAll = function(predicate) {
      var matches = [];
      _queryElementChildren(this, predicate, matches);
      return matches;
    };
    DebugElement.prototype.queryAllNodes = function(predicate) {
      var matches = [];
      _queryNodeChildren(this, predicate, matches);
      return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
      get: function() {
        return (this.childNodes.filter(function(node) {
          return node instanceof DebugElement;
        }));
      },
      enumerable: true,
      configurable: true
    });
    DebugElement.prototype.triggerEventHandler = function(eventName, eventObj) {
      this.listeners.forEach(function(listener) {
        if (listener.name == eventName) {
          listener.callback(eventObj);
        }
      });
    };
    return DebugElement;
  }(DebugNode));
  function asNativeElements(debugEls) {
    return debugEls.map(function(el) {
      return el.nativeElement;
    });
  }
  function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function(node) {
      if (node instanceof DebugElement) {
        if (predicate(node)) {
          matches.push(node);
        }
        _queryElementChildren(node, predicate, matches);
      }
    });
  }
  function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
      parentNode.childNodes.forEach(function(node) {
        if (predicate(node)) {
          matches.push(node);
        }
        if (node instanceof DebugElement) {
          _queryNodeChildren(node, predicate, matches);
        }
      });
    }
  }
  var _nativeNodeToDebugNode = new Map();
  function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode);
  }
  function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
  }
  function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
  }
  function _reflector() {
    return reflector;
  }
  var _CORE_PLATFORM_PROVIDERS = [PlatformRef_, {
    provide: PlatformRef,
    useExisting: PlatformRef_
  }, {
    provide: Reflector,
    useFactory: _reflector,
    deps: []
  }, {
    provide: ReflectorReader,
    useExisting: Reflector
  }, TestabilityRegistry, Console];
  var platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);
  var LOCALE_ID = new OpaqueToken('LocaleId');
  var TRANSLATIONS = new OpaqueToken('Translations');
  var TRANSLATIONS_FORMAT = new OpaqueToken('TranslationsFormat');
  function _iterableDiffersFactory() {
    return defaultIterableDiffers;
  }
  function _keyValueDiffersFactory() {
    return defaultKeyValueDiffers;
  }
  var ApplicationModule = (function() {
    function ApplicationModule() {}
    ApplicationModule.decorators = [{
      type: NgModule,
      args: [{providers: [ApplicationRef_, {
          provide: ApplicationRef,
          useExisting: ApplicationRef_
        }, ApplicationInitStatus, Compiler, APP_ID_RANDOM_PROVIDER, ViewUtils, AnimationQueue, {
          provide: IterableDiffers,
          useFactory: _iterableDiffersFactory
        }, {
          provide: KeyValueDiffers,
          useFactory: _keyValueDiffersFactory
        }, {
          provide: LOCALE_ID,
          useValue: 'en-US'
        }]}]
    }];
    ApplicationModule.ctorParameters = function() {
      return [];
    };
    return ApplicationModule;
  }());
  var FILL_STYLE_FLAG = 'true';
  var ANY_STATE = '*';
  var DEFAULT_STATE = '*';
  var EMPTY_STATE = 'void';
  var AnimationGroupPlayer = (function() {
    function AnimationGroupPlayer(_players) {
      var _this = this;
      this._players = _players;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._finished = false;
      this._started = false;
      this._destroyed = false;
      this.parentPlayer = null;
      var count = 0;
      var total = this._players.length;
      if (total == 0) {
        scheduleMicroTask(function() {
          return _this._onFinish();
        });
      } else {
        this._players.forEach(function(player) {
          player.parentPlayer = _this;
          player.onDone(function() {
            if (++count >= total) {
              _this._onFinish();
            }
          });
        });
      }
    }
    AnimationGroupPlayer.prototype._onFinish = function() {
      if (!this._finished) {
        this._finished = true;
        this._onDoneFns.forEach(function(fn) {
          return fn();
        });
        this._onDoneFns = [];
      }
    };
    AnimationGroupPlayer.prototype.init = function() {
      this._players.forEach(function(player) {
        return player.init();
      });
    };
    AnimationGroupPlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    AnimationGroupPlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    AnimationGroupPlayer.prototype.hasStarted = function() {
      return this._started;
    };
    AnimationGroupPlayer.prototype.play = function() {
      if (!isPresent(this.parentPlayer)) {
        this.init();
      }
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
        this._started = true;
      }
      this._players.forEach(function(player) {
        return player.play();
      });
    };
    AnimationGroupPlayer.prototype.pause = function() {
      this._players.forEach(function(player) {
        return player.pause();
      });
    };
    AnimationGroupPlayer.prototype.restart = function() {
      this._players.forEach(function(player) {
        return player.restart();
      });
    };
    AnimationGroupPlayer.prototype.finish = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.finish();
      });
    };
    AnimationGroupPlayer.prototype.destroy = function() {
      if (!this._destroyed) {
        this._onFinish();
        this._players.forEach(function(player) {
          return player.destroy();
        });
        this._destroyed = true;
      }
    };
    AnimationGroupPlayer.prototype.reset = function() {
      this._players.forEach(function(player) {
        return player.reset();
      });
      this._destroyed = false;
      this._finished = false;
      this._started = false;
    };
    AnimationGroupPlayer.prototype.setPosition = function(p) {
      this._players.forEach(function(player) {
        player.setPosition(p);
      });
    };
    AnimationGroupPlayer.prototype.getPosition = function() {
      var min = 0;
      this._players.forEach(function(player) {
        var p = player.getPosition();
        min = Math.min(p, min);
      });
      return min;
    };
    Object.defineProperty(AnimationGroupPlayer.prototype, "players", {
      get: function() {
        return this._players;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationGroupPlayer;
  }());
  var AnimationKeyframe = (function() {
    function AnimationKeyframe(offset, styles) {
      this.offset = offset;
      this.styles = styles;
    }
    return AnimationKeyframe;
  }());
  var AnimationPlayer = (function() {
    function AnimationPlayer() {}
    AnimationPlayer.prototype.onDone = function(fn) {};
    AnimationPlayer.prototype.onStart = function(fn) {};
    AnimationPlayer.prototype.init = function() {};
    AnimationPlayer.prototype.hasStarted = function() {};
    AnimationPlayer.prototype.play = function() {};
    AnimationPlayer.prototype.pause = function() {};
    AnimationPlayer.prototype.restart = function() {};
    AnimationPlayer.prototype.finish = function() {};
    AnimationPlayer.prototype.destroy = function() {};
    AnimationPlayer.prototype.reset = function() {};
    AnimationPlayer.prototype.setPosition = function(p) {};
    AnimationPlayer.prototype.getPosition = function() {};
    Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
      get: function() {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      set: function(player) {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      enumerable: true,
      configurable: true
    });
    return AnimationPlayer;
  }());
  var NoOpAnimationPlayer = (function() {
    function NoOpAnimationPlayer() {
      var _this = this;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._started = false;
      this.parentPlayer = null;
      scheduleMicroTask(function() {
        return _this._onFinish();
      });
    }
    NoOpAnimationPlayer.prototype._onFinish = function() {
      this._onDoneFns.forEach(function(fn) {
        return fn();
      });
      this._onDoneFns = [];
    };
    NoOpAnimationPlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    NoOpAnimationPlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    NoOpAnimationPlayer.prototype.hasStarted = function() {
      return this._started;
    };
    NoOpAnimationPlayer.prototype.init = function() {};
    NoOpAnimationPlayer.prototype.play = function() {
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
      }
      this._started = true;
    };
    NoOpAnimationPlayer.prototype.pause = function() {};
    NoOpAnimationPlayer.prototype.restart = function() {};
    NoOpAnimationPlayer.prototype.finish = function() {
      this._onFinish();
    };
    NoOpAnimationPlayer.prototype.destroy = function() {};
    NoOpAnimationPlayer.prototype.reset = function() {};
    NoOpAnimationPlayer.prototype.setPosition = function(p) {};
    NoOpAnimationPlayer.prototype.getPosition = function() {
      return 0;
    };
    return NoOpAnimationPlayer;
  }());
  var AnimationSequencePlayer = (function() {
    function AnimationSequencePlayer(_players) {
      var _this = this;
      this._players = _players;
      this._currentIndex = 0;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._finished = false;
      this._started = false;
      this._destroyed = false;
      this.parentPlayer = null;
      this._players.forEach(function(player) {
        player.parentPlayer = _this;
      });
      this._onNext(false);
    }
    AnimationSequencePlayer.prototype._onNext = function(start) {
      var _this = this;
      if (this._finished)
        return;
      if (this._players.length == 0) {
        this._activePlayer = new NoOpAnimationPlayer();
        scheduleMicroTask(function() {
          return _this._onFinish();
        });
      } else if (this._currentIndex >= this._players.length) {
        this._activePlayer = new NoOpAnimationPlayer();
        this._onFinish();
      } else {
        var player = this._players[this._currentIndex++];
        player.onDone(function() {
          return _this._onNext(true);
        });
        this._activePlayer = player;
        if (start) {
          player.play();
        }
      }
    };
    AnimationSequencePlayer.prototype._onFinish = function() {
      if (!this._finished) {
        this._finished = true;
        this._onDoneFns.forEach(function(fn) {
          return fn();
        });
        this._onDoneFns = [];
      }
    };
    AnimationSequencePlayer.prototype.init = function() {
      this._players.forEach(function(player) {
        return player.init();
      });
    };
    AnimationSequencePlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    AnimationSequencePlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    AnimationSequencePlayer.prototype.hasStarted = function() {
      return this._started;
    };
    AnimationSequencePlayer.prototype.play = function() {
      if (!isPresent(this.parentPlayer)) {
        this.init();
      }
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
        this._started = true;
      }
      this._activePlayer.play();
    };
    AnimationSequencePlayer.prototype.pause = function() {
      this._activePlayer.pause();
    };
    AnimationSequencePlayer.prototype.restart = function() {
      this.reset();
      if (this._players.length > 0) {
        this._players[0].restart();
      }
    };
    AnimationSequencePlayer.prototype.reset = function() {
      this._players.forEach(function(player) {
        return player.reset();
      });
      this._destroyed = false;
      this._finished = false;
      this._started = false;
    };
    AnimationSequencePlayer.prototype.finish = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.finish();
      });
    };
    AnimationSequencePlayer.prototype.destroy = function() {
      if (!this._destroyed) {
        this._onFinish();
        this._players.forEach(function(player) {
          return player.destroy();
        });
        this._destroyed = true;
        this._activePlayer = new NoOpAnimationPlayer();
      }
    };
    AnimationSequencePlayer.prototype.setPosition = function(p) {
      this._players[0].setPosition(p);
    };
    AnimationSequencePlayer.prototype.getPosition = function() {
      return this._players[0].getPosition();
    };
    Object.defineProperty(AnimationSequencePlayer.prototype, "players", {
      get: function() {
        return this._players;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationSequencePlayer;
  }());
  var __extends$13 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AUTO_STYLE = '*';
  var AnimationEntryMetadata = (function() {
    function AnimationEntryMetadata(name, definitions) {
      this.name = name;
      this.definitions = definitions;
    }
    return AnimationEntryMetadata;
  }());
  var AnimationStateMetadata = (function() {
    function AnimationStateMetadata() {}
    return AnimationStateMetadata;
  }());
  var AnimationStateDeclarationMetadata = (function(_super) {
    __extends$13(AnimationStateDeclarationMetadata, _super);
    function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
      _super.call(this);
      this.stateNameExpr = stateNameExpr;
      this.styles = styles;
    }
    return AnimationStateDeclarationMetadata;
  }(AnimationStateMetadata));
  var AnimationStateTransitionMetadata = (function(_super) {
    __extends$13(AnimationStateTransitionMetadata, _super);
    function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
      _super.call(this);
      this.stateChangeExpr = stateChangeExpr;
      this.steps = steps;
    }
    return AnimationStateTransitionMetadata;
  }(AnimationStateMetadata));
  var AnimationMetadata = (function() {
    function AnimationMetadata() {}
    return AnimationMetadata;
  }());
  var AnimationKeyframesSequenceMetadata = (function(_super) {
    __extends$13(AnimationKeyframesSequenceMetadata, _super);
    function AnimationKeyframesSequenceMetadata(steps) {
      _super.call(this);
      this.steps = steps;
    }
    return AnimationKeyframesSequenceMetadata;
  }(AnimationMetadata));
  var AnimationStyleMetadata = (function(_super) {
    __extends$13(AnimationStyleMetadata, _super);
    function AnimationStyleMetadata(styles, offset) {
      if (offset === void 0) {
        offset = null;
      }
      _super.call(this);
      this.styles = styles;
      this.offset = offset;
    }
    return AnimationStyleMetadata;
  }(AnimationMetadata));
  var AnimationAnimateMetadata = (function(_super) {
    __extends$13(AnimationAnimateMetadata, _super);
    function AnimationAnimateMetadata(timings, styles) {
      _super.call(this);
      this.timings = timings;
      this.styles = styles;
    }
    return AnimationAnimateMetadata;
  }(AnimationMetadata));
  var AnimationWithStepsMetadata = (function(_super) {
    __extends$13(AnimationWithStepsMetadata, _super);
    function AnimationWithStepsMetadata() {
      _super.call(this);
    }
    Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
      get: function() {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      enumerable: true,
      configurable: true
    });
    return AnimationWithStepsMetadata;
  }(AnimationMetadata));
  var AnimationSequenceMetadata = (function(_super) {
    __extends$13(AnimationSequenceMetadata, _super);
    function AnimationSequenceMetadata(_steps) {
      _super.call(this);
      this._steps = _steps;
    }
    Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
      get: function() {
        return this._steps;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationSequenceMetadata;
  }(AnimationWithStepsMetadata));
  var AnimationGroupMetadata = (function(_super) {
    __extends$13(AnimationGroupMetadata, _super);
    function AnimationGroupMetadata(_steps) {
      _super.call(this);
      this._steps = _steps;
    }
    Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
      get: function() {
        return this._steps;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationGroupMetadata;
  }(AnimationWithStepsMetadata));
  function animate(timing, styles) {
    if (styles === void 0) {
      styles = null;
    }
    var stylesEntry = styles;
    if (!isPresent(stylesEntry)) {
      var EMPTY_STYLE = {};
      stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
    }
    return new AnimationAnimateMetadata(timing, stylesEntry);
  }
  function group(steps) {
    return new AnimationGroupMetadata(steps);
  }
  function sequence(steps) {
    return new AnimationSequenceMetadata(steps);
  }
  function style(tokens) {
    var input;
    var offset = null;
    if (typeof tokens === 'string') {
      input = [(tokens)];
    } else {
      if (Array.isArray(tokens)) {
        input = (tokens);
      } else {
        input = [(tokens)];
      }
      input.forEach(function(entry) {
        var entryOffset = ((entry))['offset'];
        if (isPresent(entryOffset)) {
          offset = offset == null ? parseFloat(entryOffset) : offset;
        }
      });
    }
    return new AnimationStyleMetadata(input, offset);
  }
  function state(stateNameExpr, styles) {
    return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
  }
  function keyframes(steps) {
    return new AnimationKeyframesSequenceMetadata(steps);
  }
  function transition(stateChangeExpr, steps) {
    var animationData = Array.isArray(steps) ? new AnimationSequenceMetadata(steps) : steps;
    return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
  }
  function trigger(name, animation) {
    return new AnimationEntryMetadata(name, animation);
  }
  function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
    if (nullValue === void 0) {
      nullValue = null;
    }
    var finalStyles = {};
    Object.keys(newStyles).forEach(function(prop) {
      var value = newStyles[prop];
      finalStyles[prop] = value == AUTO_STYLE ? nullValue : value.toString();
    });
    Object.keys(previousStyles).forEach(function(prop) {
      if (!isPresent(finalStyles[prop])) {
        finalStyles[prop] = nullValue;
      }
    });
    return finalStyles;
  }
  function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
    var limit = keyframes.length - 1;
    var firstKeyframe = keyframes[0];
    var flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
    var extraFirstKeyframeStyles = {};
    var hasExtraFirstStyles = false;
    Object.keys(collectedStyles).forEach(function(prop) {
      var value = (collectedStyles[prop]);
      if (!flatenedFirstKeyframeStyles[prop]) {
        flatenedFirstKeyframeStyles[prop] = value;
        extraFirstKeyframeStyles[prop] = value;
        hasExtraFirstStyles = true;
      }
    });
    var keyframeCollectedStyles = StringMapWrapper.merge({}, flatenedFirstKeyframeStyles);
    var finalKeyframe = keyframes[limit];
    finalKeyframe.styles.styles.unshift(finalStateStyles);
    var flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
    var extraFinalKeyframeStyles = {};
    var hasExtraFinalStyles = false;
    Object.keys(keyframeCollectedStyles).forEach(function(prop) {
      if (!isPresent(flatenedFinalKeyframeStyles[prop])) {
        extraFinalKeyframeStyles[prop] = AUTO_STYLE;
        hasExtraFinalStyles = true;
      }
    });
    if (hasExtraFinalStyles) {
      finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
    }
    Object.keys(flatenedFinalKeyframeStyles).forEach(function(prop) {
      if (!isPresent(flatenedFirstKeyframeStyles[prop])) {
        extraFirstKeyframeStyles[prop] = AUTO_STYLE;
        hasExtraFirstStyles = true;
      }
    });
    if (hasExtraFirstStyles) {
      firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
    }
    collectAndResolveStyles(collectedStyles, [finalStateStyles]);
    return keyframes;
  }
  function clearStyles(styles) {
    var finalStyles = {};
    Object.keys(styles).forEach(function(key) {
      finalStyles[key] = null;
    });
    return finalStyles;
  }
  function collectAndResolveStyles(collection, styles) {
    return styles.map(function(entry) {
      var stylesObj = {};
      Object.keys(entry).forEach(function(prop) {
        var value = entry[prop];
        if (value == FILL_STYLE_FLAG) {
          value = collection[prop];
          if (!isPresent(value)) {
            value = AUTO_STYLE;
          }
        }
        collection[prop] = value;
        stylesObj[prop] = value;
      });
      return stylesObj;
    });
  }
  function renderStyles(element, renderer, styles) {
    Object.keys(styles).forEach(function(prop) {
      renderer.setElementStyle(element, prop, styles[prop]);
    });
  }
  function flattenStyles(styles) {
    var finalStyles = {};
    styles.forEach(function(entry) {
      Object.keys(entry).forEach(function(prop) {
        finalStyles[prop] = (entry[prop]);
      });
    });
    return finalStyles;
  }
  var AnimationStyles = (function() {
    function AnimationStyles(styles) {
      this.styles = styles;
    }
    return AnimationStyles;
  }());
  var AnimationTransitionEvent = (function() {
    function AnimationTransitionEvent(_a) {
      var fromState = _a.fromState,
          toState = _a.toState,
          totalTime = _a.totalTime,
          phaseName = _a.phaseName;
      this.fromState = fromState;
      this.toState = toState;
      this.totalTime = totalTime;
      this.phaseName = phaseName;
    }
    return AnimationTransitionEvent;
  }());
  var AnimationTransition = (function() {
    function AnimationTransition(_player, _fromState, _toState, _totalTime) {
      this._player = _player;
      this._fromState = _fromState;
      this._toState = _toState;
      this._totalTime = _totalTime;
    }
    AnimationTransition.prototype._createEvent = function(phaseName) {
      return new AnimationTransitionEvent({
        fromState: this._fromState,
        toState: this._toState,
        totalTime: this._totalTime,
        phaseName: phaseName
      });
    };
    AnimationTransition.prototype.onStart = function(callback) {
      var _this = this;
      var fn = (Zone.current.wrap(function() {
        return callback(_this._createEvent('start'));
      }, 'player.onStart'));
      this._player.onStart(fn);
    };
    AnimationTransition.prototype.onDone = function(callback) {
      var _this = this;
      var fn = (Zone.current.wrap(function() {
        return callback(_this._createEvent('done'));
      }, 'player.onDone'));
      this._player.onDone(fn);
    };
    return AnimationTransition;
  }());
  var DebugDomRootRenderer = (function() {
    function DebugDomRootRenderer(_delegate) {
      this._delegate = _delegate;
    }
    DebugDomRootRenderer.prototype.renderComponent = function(componentProto) {
      return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
    };
    return DebugDomRootRenderer;
  }());
  var DebugDomRenderer = (function() {
    function DebugDomRenderer(_delegate) {
      this._delegate = _delegate;
    }
    DebugDomRenderer.prototype.selectRootElement = function(selectorOrNode, debugInfo) {
      var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
      var debugEl = new DebugElement(nativeEl, null, debugInfo);
      indexDebugNode(debugEl);
      return nativeEl;
    };
    DebugDomRenderer.prototype.createElement = function(parentElement, name, debugInfo) {
      var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
      var debugEl = new DebugElement(nativeEl, getDebugNode(parentElement), debugInfo);
      debugEl.name = name;
      indexDebugNode(debugEl);
      return nativeEl;
    };
    DebugDomRenderer.prototype.createViewRoot = function(hostElement) {
      return this._delegate.createViewRoot(hostElement);
    };
    DebugDomRenderer.prototype.createTemplateAnchor = function(parentElement, debugInfo) {
      var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
      var debugEl = new DebugNode(comment, getDebugNode(parentElement), debugInfo);
      indexDebugNode(debugEl);
      return comment;
    };
    DebugDomRenderer.prototype.createText = function(parentElement, value, debugInfo) {
      var text = this._delegate.createText(parentElement, value, debugInfo);
      var debugEl = new DebugNode(text, getDebugNode(parentElement), debugInfo);
      indexDebugNode(debugEl);
      return text;
    };
    DebugDomRenderer.prototype.projectNodes = function(parentElement, nodes) {
      var debugParent = getDebugNode(parentElement);
      if (isPresent(debugParent) && debugParent instanceof DebugElement) {
        var debugElement_1 = debugParent;
        nodes.forEach(function(node) {
          debugElement_1.addChild(getDebugNode(node));
        });
      }
      this._delegate.projectNodes(parentElement, nodes);
    };
    DebugDomRenderer.prototype.attachViewAfter = function(node, viewRootNodes) {
      var debugNode = getDebugNode(node);
      if (isPresent(debugNode)) {
        var debugParent = debugNode.parent;
        if (viewRootNodes.length > 0 && isPresent(debugParent)) {
          var debugViewRootNodes_1 = [];
          viewRootNodes.forEach(function(rootNode) {
            return debugViewRootNodes_1.push(getDebugNode(rootNode));
          });
          debugParent.insertChildrenAfter(debugNode, debugViewRootNodes_1);
        }
      }
      this._delegate.attachViewAfter(node, viewRootNodes);
    };
    DebugDomRenderer.prototype.detachView = function(viewRootNodes) {
      viewRootNodes.forEach(function(node) {
        var debugNode = getDebugNode(node);
        if (isPresent(debugNode) && isPresent(debugNode.parent)) {
          debugNode.parent.removeChild(debugNode);
        }
      });
      this._delegate.detachView(viewRootNodes);
    };
    DebugDomRenderer.prototype.destroyView = function(hostElement, viewAllNodes) {
      viewAllNodes = viewAllNodes || [];
      viewAllNodes.forEach(function(node) {
        removeDebugNodeFromIndex(getDebugNode(node));
      });
      this._delegate.destroyView(hostElement, viewAllNodes);
    };
    DebugDomRenderer.prototype.listen = function(renderElement, name, callback) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl)) {
        debugEl.listeners.push(new EventListener(name, callback));
      }
      return this._delegate.listen(renderElement, name, callback);
    };
    DebugDomRenderer.prototype.listenGlobal = function(target, name, callback) {
      return this._delegate.listenGlobal(target, name, callback);
    };
    DebugDomRenderer.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.properties[propertyName] = propertyValue;
      }
      this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementAttribute = function(renderElement, attributeName, attributeValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.attributes[attributeName] = attributeValue;
      }
      this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
    };
    DebugDomRenderer.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {
      this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementClass = function(renderElement, className, isAdd) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.classes[className] = isAdd;
      }
      this._delegate.setElementClass(renderElement, className, isAdd);
    };
    DebugDomRenderer.prototype.setElementStyle = function(renderElement, styleName, styleValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.styles[styleName] = styleValue;
      }
      this._delegate.setElementStyle(renderElement, styleName, styleValue);
    };
    DebugDomRenderer.prototype.invokeElementMethod = function(renderElement, methodName, args) {
      this._delegate.invokeElementMethod(renderElement, methodName, args);
    };
    DebugDomRenderer.prototype.setText = function(renderNode, text) {
      this._delegate.setText(renderNode, text);
    };
    DebugDomRenderer.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
      if (previousPlayers === void 0) {
        previousPlayers = [];
      }
      return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
    };
    return DebugDomRenderer;
  }());
  var ViewType = {};
  ViewType.HOST = 0;
  ViewType.COMPONENT = 1;
  ViewType.EMBEDDED = 2;
  ViewType[ViewType.HOST] = "HOST";
  ViewType[ViewType.COMPONENT] = "COMPONENT";
  ViewType[ViewType.EMBEDDED] = "EMBEDDED";
  var StaticNodeDebugInfo = (function() {
    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
      this.providerTokens = providerTokens;
      this.componentToken = componentToken;
      this.refTokens = refTokens;
    }
    return StaticNodeDebugInfo;
  }());
  var DebugContext = (function() {
    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
      this._view = _view;
      this._nodeIndex = _nodeIndex;
      this._tplRow = _tplRow;
      this._tplCol = _tplCol;
    }
    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
      get: function() {
        return isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "context", {
      get: function() {
        return this._view.context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "component", {
      get: function() {
        var staticNodeInfo = this._staticNodeInfo;
        if (isPresent(staticNodeInfo) && isPresent(staticNodeInfo.componentToken)) {
          return this.injector.get(staticNodeInfo.componentToken);
        }
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
      get: function() {
        var componentView = this._view;
        while (isPresent(componentView.parentView) && componentView.type !== ViewType.COMPONENT) {
          componentView = (componentView.parentView);
        }
        return componentView.parentElement;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "injector", {
      get: function() {
        return this._view.injector(this._nodeIndex);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "renderNode", {
      get: function() {
        if (isPresent(this._nodeIndex) && this._view.allNodes) {
          return this._view.allNodes[this._nodeIndex];
        } else {
          return null;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "providerTokens", {
      get: function() {
        var staticNodeInfo = this._staticNodeInfo;
        return isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "source", {
      get: function() {
        return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "references", {
      get: function() {
        var _this = this;
        var varValues = {};
        var staticNodeInfo = this._staticNodeInfo;
        if (isPresent(staticNodeInfo)) {
          var refs_1 = staticNodeInfo.refTokens;
          Object.keys(refs_1).forEach(function(refName) {
            var refToken = refs_1[refName];
            var varValue;
            if (isBlank(refToken)) {
              varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
            } else {
              varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
            }
            varValues[refName] = varValue;
          });
        }
        return varValues;
      },
      enumerable: true,
      configurable: true
    });
    return DebugContext;
  }());
  var ViewAnimationMap = (function() {
    function ViewAnimationMap() {
      this._map = new Map();
      this._allPlayers = [];
    }
    ViewAnimationMap.prototype.find = function(element, animationName) {
      var playersByAnimation = this._map.get(element);
      if (isPresent(playersByAnimation)) {
        return playersByAnimation[animationName];
      }
    };
    ViewAnimationMap.prototype.findAllPlayersByElement = function(element) {
      var el = this._map.get(element);
      return el ? Object.keys(el).map(function(k) {
        return el[k];
      }) : [];
    };
    ViewAnimationMap.prototype.set = function(element, animationName, player) {
      var playersByAnimation = this._map.get(element);
      if (!isPresent(playersByAnimation)) {
        playersByAnimation = {};
      }
      var existingEntry = playersByAnimation[animationName];
      if (isPresent(existingEntry)) {
        this.remove(element, animationName);
      }
      playersByAnimation[animationName] = player;
      this._allPlayers.push(player);
      this._map.set(element, playersByAnimation);
    };
    ViewAnimationMap.prototype.getAllPlayers = function() {
      return this._allPlayers;
    };
    ViewAnimationMap.prototype.remove = function(element, animationName, targetPlayer) {
      if (targetPlayer === void 0) {
        targetPlayer = null;
      }
      var playersByAnimation = this._map.get(element);
      if (playersByAnimation) {
        var player = playersByAnimation[animationName];
        if (!targetPlayer || player === targetPlayer) {
          delete playersByAnimation[animationName];
          var index = this._allPlayers.indexOf(player);
          this._allPlayers.splice(index, 1);
          if (Object.keys(playersByAnimation).length === 0) {
            this._map.delete(element);
          }
        }
      }
    };
    return ViewAnimationMap;
  }());
  var AnimationViewContext = (function() {
    function AnimationViewContext(_animationQueue) {
      this._animationQueue = _animationQueue;
      this._players = new ViewAnimationMap();
    }
    AnimationViewContext.prototype.onAllActiveAnimationsDone = function(callback) {
      var activeAnimationPlayers = this._players.getAllPlayers();
      if (activeAnimationPlayers.length) {
        new AnimationGroupPlayer(activeAnimationPlayers).onDone(function() {
          return callback();
        });
      } else {
        callback();
      }
    };
    AnimationViewContext.prototype.queueAnimation = function(element, animationName, player) {
      var _this = this;
      this._animationQueue.enqueue(player);
      this._players.set(element, animationName, player);
      player.onDone(function() {
        return _this._players.remove(element, animationName, player);
      });
    };
    AnimationViewContext.prototype.getAnimationPlayers = function(element, animationName) {
      if (animationName === void 0) {
        animationName = null;
      }
      var players = [];
      if (animationName) {
        var currentPlayer = this._players.find(element, animationName);
        if (currentPlayer) {
          _recursePlayers(currentPlayer, players);
        }
      } else {
        this._players.findAllPlayersByElement(element).forEach(function(player) {
          return _recursePlayers(player, players);
        });
      }
      return players;
    };
    return AnimationViewContext;
  }());
  function _recursePlayers(player, collectedPlayers) {
    if ((player instanceof AnimationGroupPlayer) || (player instanceof AnimationSequencePlayer)) {
      player.players.forEach(function(player) {
        return _recursePlayers(player, collectedPlayers);
      });
    } else {
      collectedPlayers.push(player);
    }
  }
  var __extends$15 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ElementInjector = (function(_super) {
    __extends$15(ElementInjector, _super);
    function ElementInjector(_view, _nodeIndex) {
      _super.call(this);
      this._view = _view;
      this._nodeIndex = _nodeIndex;
    }
    ElementInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
    };
    return ElementInjector;
  }(Injector));
  var __extends$14 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _scope_check = wtfCreateScope("AppView#check(ascii id)");
  var EMPTY_CONTEXT$1 = new Object();
  var UNDEFINED$1 = new Object();
  var AppView = (function() {
    function AppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentElement, cdMode, declaredViewContainer) {
      if (declaredViewContainer === void 0) {
        declaredViewContainer = null;
      }
      this.clazz = clazz;
      this.componentType = componentType;
      this.type = type;
      this.viewUtils = viewUtils;
      this.parentView = parentView;
      this.parentIndex = parentIndex;
      this.parentElement = parentElement;
      this.cdMode = cdMode;
      this.declaredViewContainer = declaredViewContainer;
      this.numberOfChecks = 0;
      this.ref = new ViewRef_(this, viewUtils.animationQueue);
      if (type === ViewType.COMPONENT || type === ViewType.HOST) {
        this.renderer = viewUtils.renderComponent(componentType);
      } else {
        this.renderer = parentView.renderer;
      }
      this._directRenderer = this.renderer.directRenderer;
    }
    Object.defineProperty(AppView.prototype, "animationContext", {
      get: function() {
        if (!this._animationContext) {
          this._animationContext = new AnimationViewContext(this.viewUtils.animationQueue);
        }
        return this._animationContext;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "destroyed", {
      get: function() {
        return this.cdMode === ChangeDetectorStatus.Destroyed;
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.create = function(context) {
      this.context = context;
      return this.createInternal(null);
    };
    AppView.prototype.createHostView = function(rootSelectorOrNode, hostInjector, projectableNodes) {
      this.context = (EMPTY_CONTEXT$1);
      this._hasExternalHostElement = isPresent(rootSelectorOrNode);
      this._hostInjector = hostInjector;
      this._hostProjectableNodes = projectableNodes;
      return this.createInternal(rootSelectorOrNode);
    };
    AppView.prototype.createInternal = function(rootSelectorOrNode) {
      return null;
    };
    AppView.prototype.createEmbeddedViewInternal = function(templateNodeIndex) {
      return null;
    };
    AppView.prototype.init = function(lastRootNode, allNodes, disposables) {
      this.lastRootNode = lastRootNode;
      this.allNodes = allNodes;
      this.disposables = disposables;
      if (this.type === ViewType.COMPONENT) {
        this.dirtyParentQueriesInternal();
      }
    };
    AppView.prototype.injectorGet = function(token, nodeIndex, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      var result = UNDEFINED$1;
      var view = this;
      while (result === UNDEFINED$1) {
        if (isPresent(nodeIndex)) {
          result = view.injectorGetInternal(token, nodeIndex, UNDEFINED$1);
        }
        if (result === UNDEFINED$1 && view.type === ViewType.HOST) {
          result = view._hostInjector.get(token, notFoundValue);
        }
        nodeIndex = view.parentIndex;
        view = view.parentView;
      }
      return result;
    };
    AppView.prototype.injectorGetInternal = function(token, nodeIndex, notFoundResult) {
      return notFoundResult;
    };
    AppView.prototype.injector = function(nodeIndex) {
      return new ElementInjector(this, nodeIndex);
    };
    AppView.prototype.detachAndDestroy = function() {
      if (this.viewContainer) {
        this.viewContainer.detachView(this.viewContainer.nestedViews.indexOf(this));
      } else if (this.appRef) {
        this.appRef.detachView(this.ref);
      } else if (this._hasExternalHostElement) {
        this.detach();
      }
      this.destroy();
    };
    AppView.prototype.destroy = function() {
      var _this = this;
      if (this.cdMode === ChangeDetectorStatus.Destroyed) {
        return;
      }
      var hostElement = this.type === ViewType.COMPONENT ? this.parentElement : null;
      if (this.disposables) {
        for (var i = 0; i < this.disposables.length; i++) {
          this.disposables[i]();
        }
      }
      this.destroyInternal();
      this.dirtyParentQueriesInternal();
      if (this._animationContext) {
        this._animationContext.onAllActiveAnimationsDone(function() {
          return _this.renderer.destroyView(hostElement, _this.allNodes);
        });
      } else {
        this.renderer.destroyView(hostElement, this.allNodes);
      }
      this.cdMode = ChangeDetectorStatus.Destroyed;
    };
    AppView.prototype.destroyInternal = function() {};
    AppView.prototype.detachInternal = function() {};
    AppView.prototype.detach = function() {
      var _this = this;
      this.detachInternal();
      if (this._animationContext) {
        this._animationContext.onAllActiveAnimationsDone(function() {
          return _this._renderDetach();
        });
      } else {
        this._renderDetach();
      }
      if (this.declaredViewContainer && this.declaredViewContainer !== this.viewContainer && this.declaredViewContainer.projectedViews) {
        var projectedViews = this.declaredViewContainer.projectedViews;
        var index = projectedViews.indexOf(this);
        if (index >= projectedViews.length - 1) {
          projectedViews.pop();
        } else {
          projectedViews.splice(index, 1);
        }
      }
      this.appRef = null;
      this.viewContainer = null;
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype._renderDetach = function() {
      if (this._directRenderer) {
        this.visitRootNodesInternal(this._directRenderer.remove, null);
      } else {
        this.renderer.detachView(this.flatRootNodes);
      }
    };
    AppView.prototype.attachToAppRef = function(appRef) {
      if (this.viewContainer) {
        throw new Error('This view is already attached to a ViewContainer!');
      }
      this.appRef = appRef;
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype.attachAfter = function(viewContainer, prevView) {
      if (this.appRef) {
        throw new Error('This view is already attached directly to the ApplicationRef!');
      }
      this._renderAttach(viewContainer, prevView);
      this.viewContainer = viewContainer;
      if (this.declaredViewContainer && this.declaredViewContainer !== viewContainer) {
        if (!this.declaredViewContainer.projectedViews) {
          this.declaredViewContainer.projectedViews = [];
        }
        this.declaredViewContainer.projectedViews.push(this);
      }
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype.moveAfter = function(viewContainer, prevView) {
      this._renderAttach(viewContainer, prevView);
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype._renderAttach = function(viewContainer, prevView) {
      var prevNode = prevView ? prevView.lastRootNode : viewContainer.nativeElement;
      if (this._directRenderer) {
        var nextSibling = this._directRenderer.nextSibling(prevNode);
        if (nextSibling) {
          this.visitRootNodesInternal(this._directRenderer.insertBefore, nextSibling);
        } else {
          var parentElement = this._directRenderer.parentElement(prevNode);
          if (parentElement) {
            this.visitRootNodesInternal(this._directRenderer.appendChild, parentElement);
          }
        }
      } else {
        this.renderer.attachViewAfter(prevNode, this.flatRootNodes);
      }
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
      get: function() {
        return this.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
      get: function() {
        var nodes = [];
        this.visitRootNodesInternal(addToArray, nodes);
        return nodes;
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.projectNodes = function(parentElement, ngContentIndex) {
      if (this._directRenderer) {
        this.visitProjectedNodes(ngContentIndex, this._directRenderer.appendChild, parentElement);
      } else {
        var nodes = [];
        this.visitProjectedNodes(ngContentIndex, addToArray, nodes);
        this.renderer.projectNodes(parentElement, nodes);
      }
    };
    AppView.prototype.visitProjectedNodes = function(ngContentIndex, cb, c) {
      switch (this.type) {
        case ViewType.EMBEDDED:
          this.parentView.visitProjectedNodes(ngContentIndex, cb, c);
          break;
        case ViewType.COMPONENT:
          if (this.parentView.type === ViewType.HOST) {
            var nodes = this.parentView._hostProjectableNodes[ngContentIndex] || [];
            for (var i = 0; i < nodes.length; i++) {
              cb(nodes[i], c);
            }
          } else {
            this.parentView.visitProjectableNodesInternal(this.parentIndex, ngContentIndex, cb, c);
          }
          break;
      }
    };
    AppView.prototype.visitRootNodesInternal = function(cb, c) {};
    AppView.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, c) {};
    AppView.prototype.dirtyParentQueriesInternal = function() {};
    AppView.prototype.internalDetectChanges = function(throwOnChange) {
      if (this.cdMode !== ChangeDetectorStatus.Detached) {
        this.detectChanges(throwOnChange);
      }
    };
    AppView.prototype.detectChanges = function(throwOnChange) {
      var s = _scope_check(this.clazz);
      if (this.cdMode === ChangeDetectorStatus.Checked || this.cdMode === ChangeDetectorStatus.Errored)
        return;
      if (this.cdMode === ChangeDetectorStatus.Destroyed) {
        this.throwDestroyedError('detectChanges');
      }
      this.detectChangesInternal(throwOnChange);
      if (this.cdMode === ChangeDetectorStatus.CheckOnce)
        this.cdMode = ChangeDetectorStatus.Checked;
      this.numberOfChecks++;
      wtfLeave(s);
    };
    AppView.prototype.detectChangesInternal = function(throwOnChange) {};
    AppView.prototype.markAsCheckOnce = function() {
      this.cdMode = ChangeDetectorStatus.CheckOnce;
    };
    AppView.prototype.markPathToRootAsCheckOnce = function() {
      var c = this;
      while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
        if (c.cdMode === ChangeDetectorStatus.Checked) {
          c.cdMode = ChangeDetectorStatus.CheckOnce;
        }
        if (c.type === ViewType.COMPONENT) {
          c = c.parentView;
        } else {
          c = c.viewContainer ? c.viewContainer.parentView : null;
        }
      }
    };
    AppView.prototype.eventHandler = function(cb) {
      return cb;
    };
    AppView.prototype.throwDestroyedError = function(details) {
      throw new ViewDestroyedError(details);
    };
    return AppView;
  }());
  var DebugAppView = (function(_super) {
    __extends$14(DebugAppView, _super);
    function DebugAppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, staticNodeDebugInfos, declaredViewContainer) {
      if (declaredViewContainer === void 0) {
        declaredViewContainer = null;
      }
      _super.call(this, clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, declaredViewContainer);
      this.staticNodeDebugInfos = staticNodeDebugInfos;
      this._currentDebugContext = null;
    }
    DebugAppView.prototype.create = function(context) {
      this._resetDebug();
      try {
        return _super.prototype.create.call(this, context);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.createHostView = function(rootSelectorOrNode, injector, projectableNodes) {
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      this._resetDebug();
      try {
        return _super.prototype.createHostView.call(this, rootSelectorOrNode, injector, projectableNodes);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.injectorGet = function(token, nodeIndex, notFoundResult) {
      this._resetDebug();
      try {
        return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.detach = function() {
      this._resetDebug();
      try {
        _super.prototype.detach.call(this);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.destroy = function() {
      this._resetDebug();
      try {
        _super.prototype.destroy.call(this);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.detectChanges = function(throwOnChange) {
      this._resetDebug();
      try {
        _super.prototype.detectChanges.call(this, throwOnChange);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype._resetDebug = function() {
      this._currentDebugContext = null;
    };
    DebugAppView.prototype.debug = function(nodeIndex, rowNum, colNum) {
      return this._currentDebugContext = new DebugContext(this, nodeIndex, rowNum, colNum);
    };
    DebugAppView.prototype._rethrowWithContext = function(e) {
      if (!(e instanceof ViewWrappedError)) {
        if (!(e instanceof ExpressionChangedAfterItHasBeenCheckedError)) {
          this.cdMode = ChangeDetectorStatus.Errored;
        }
        if (isPresent(this._currentDebugContext)) {
          throw new ViewWrappedError(e, this._currentDebugContext);
        }
      }
    };
    DebugAppView.prototype.eventHandler = function(cb) {
      var _this = this;
      var superHandler = _super.prototype.eventHandler.call(this, cb);
      return function(eventName, event) {
        _this._resetDebug();
        try {
          return superHandler.call(_this, eventName, event);
        } catch (e) {
          _this._rethrowWithContext(e);
          throw e;
        }
      };
    };
    return DebugAppView;
  }(AppView));
  var ViewContainer = (function() {
    function ViewContainer(index, parentIndex, parentView, nativeElement) {
      this.index = index;
      this.parentIndex = parentIndex;
      this.parentView = parentView;
      this.nativeElement = nativeElement;
    }
    Object.defineProperty(ViewContainer.prototype, "elementRef", {
      get: function() {
        return new ElementRef(this.nativeElement);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "vcRef", {
      get: function() {
        return new ViewContainerRef_(this);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "parentInjector", {
      get: function() {
        return this.parentView.injector(this.parentIndex);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "injector", {
      get: function() {
        return this.parentView.injector(this.index);
      },
      enumerable: true,
      configurable: true
    });
    ViewContainer.prototype.detectChangesInNestedViews = function(throwOnChange) {
      if (this.nestedViews) {
        for (var i = 0; i < this.nestedViews.length; i++) {
          this.nestedViews[i].detectChanges(throwOnChange);
        }
      }
    };
    ViewContainer.prototype.destroyNestedViews = function() {
      if (this.nestedViews) {
        for (var i = 0; i < this.nestedViews.length; i++) {
          this.nestedViews[i].destroy();
        }
      }
    };
    ViewContainer.prototype.visitNestedViewRootNodes = function(cb, c) {
      if (this.nestedViews) {
        for (var i = 0; i < this.nestedViews.length; i++) {
          this.nestedViews[i].visitRootNodesInternal(cb, c);
        }
      }
    };
    ViewContainer.prototype.mapNestedViews = function(nestedViewClass, callback) {
      var result = [];
      if (this.nestedViews) {
        for (var i = 0; i < this.nestedViews.length; i++) {
          var nestedView = this.nestedViews[i];
          if (nestedView.clazz === nestedViewClass) {
            result.push(callback(nestedView));
          }
        }
      }
      if (this.projectedViews) {
        for (var i = 0; i < this.projectedViews.length; i++) {
          var projectedView = this.projectedViews[i];
          if (projectedView.clazz === nestedViewClass) {
            result.push(callback(projectedView));
          }
        }
      }
      return result;
    };
    ViewContainer.prototype.moveView = function(view, currentIndex) {
      var previousIndex = this.nestedViews.indexOf(view);
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      var nestedViews = this.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        this.nestedViews = nestedViews;
      }
      nestedViews.splice(previousIndex, 1);
      nestedViews.splice(currentIndex, 0, view);
      var prevView = currentIndex > 0 ? nestedViews[currentIndex - 1] : null;
      view.moveAfter(this, prevView);
    };
    ViewContainer.prototype.attachView = function(view, viewIndex) {
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      var nestedViews = this.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        this.nestedViews = nestedViews;
      }
      if (viewIndex >= nestedViews.length) {
        nestedViews.push(view);
      } else {
        nestedViews.splice(viewIndex, 0, view);
      }
      var prevView = viewIndex > 0 ? nestedViews[viewIndex - 1] : null;
      view.attachAfter(this, prevView);
    };
    ViewContainer.prototype.detachView = function(viewIndex) {
      var view = this.nestedViews[viewIndex];
      if (viewIndex >= this.nestedViews.length - 1) {
        this.nestedViews.pop();
      } else {
        this.nestedViews.splice(viewIndex, 1);
      }
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      view.detach();
      return view;
    };
    return ViewContainer;
  }());
  var __core_private__ = {
    isDefaultChangeDetectionStrategy: isDefaultChangeDetectionStrategy,
    ChangeDetectorStatus: ChangeDetectorStatus,
    constructDependencies: constructDependencies,
    LifecycleHooks: LifecycleHooks,
    LIFECYCLE_HOOKS_VALUES: LIFECYCLE_HOOKS_VALUES,
    ReflectorReader: ReflectorReader,
    CodegenComponentFactoryResolver: CodegenComponentFactoryResolver,
    ComponentRef_: ComponentRef_,
    ViewContainer: ViewContainer,
    AppView: AppView,
    DebugAppView: DebugAppView,
    NgModuleInjector: NgModuleInjector,
    registerModuleFactory: registerModuleFactory,
    ViewType: ViewType,
    view_utils: view_utils,
    ViewMetadata: ViewMetadata,
    DebugContext: DebugContext,
    StaticNodeDebugInfo: StaticNodeDebugInfo,
    devModeEqual: devModeEqual,
    UNINITIALIZED: UNINITIALIZED,
    ValueUnwrapper: ValueUnwrapper,
    RenderDebugInfo: RenderDebugInfo,
    TemplateRef_: TemplateRef_,
    ReflectionCapabilities: ReflectionCapabilities,
    makeDecorator: makeDecorator,
    DebugDomRootRenderer: DebugDomRootRenderer,
    Console: Console,
    reflector: reflector,
    Reflector: Reflector,
    NoOpAnimationPlayer: NoOpAnimationPlayer,
    AnimationPlayer: AnimationPlayer,
    AnimationSequencePlayer: AnimationSequencePlayer,
    AnimationGroupPlayer: AnimationGroupPlayer,
    AnimationKeyframe: AnimationKeyframe,
    prepareFinalAnimationStyles: prepareFinalAnimationStyles,
    balanceAnimationKeyframes: balanceAnimationKeyframes,
    flattenStyles: flattenStyles,
    clearStyles: clearStyles,
    renderStyles: renderStyles,
    collectAndResolveStyles: collectAndResolveStyles,
    APP_ID_RANDOM_PROVIDER: APP_ID_RANDOM_PROVIDER,
    AnimationStyles: AnimationStyles,
    ANY_STATE: ANY_STATE,
    DEFAULT_STATE: DEFAULT_STATE,
    EMPTY_STATE: EMPTY_STATE,
    FILL_STYLE_FLAG: FILL_STYLE_FLAG,
    ComponentStillLoadingError: ComponentStillLoadingError,
    isPromise: isPromise,
    AnimationTransition: AnimationTransition
  };
  exports.createPlatform = createPlatform;
  exports.assertPlatform = assertPlatform;
  exports.destroyPlatform = destroyPlatform;
  exports.getPlatform = getPlatform;
  exports.PlatformRef = PlatformRef;
  exports.ApplicationRef = ApplicationRef;
  exports.enableProdMode = enableProdMode;
  exports.isDevMode = isDevMode;
  exports.createPlatformFactory = createPlatformFactory;
  exports.NgProbeToken = NgProbeToken;
  exports.APP_ID = APP_ID;
  exports.PACKAGE_ROOT_URL = PACKAGE_ROOT_URL;
  exports.PLATFORM_INITIALIZER = PLATFORM_INITIALIZER;
  exports.APP_BOOTSTRAP_LISTENER = APP_BOOTSTRAP_LISTENER;
  exports.APP_INITIALIZER = APP_INITIALIZER;
  exports.ApplicationInitStatus = ApplicationInitStatus;
  exports.DebugElement = DebugElement;
  exports.DebugNode = DebugNode;
  exports.asNativeElements = asNativeElements;
  exports.getDebugNode = getDebugNode;
  exports.Testability = Testability;
  exports.TestabilityRegistry = TestabilityRegistry;
  exports.setTestabilityGetter = setTestabilityGetter;
  exports.TRANSLATIONS = TRANSLATIONS;
  exports.TRANSLATIONS_FORMAT = TRANSLATIONS_FORMAT;
  exports.LOCALE_ID = LOCALE_ID;
  exports.ApplicationModule = ApplicationModule;
  exports.wtfCreateScope = wtfCreateScope;
  exports.wtfLeave = wtfLeave;
  exports.wtfStartTimeRange = wtfStartTimeRange;
  exports.wtfEndTimeRange = wtfEndTimeRange;
  exports.Type = Type;
  exports.EventEmitter = EventEmitter;
  exports.ErrorHandler = ErrorHandler;
  exports.AnimationTransitionEvent = AnimationTransitionEvent;
  exports.AnimationPlayer = AnimationPlayer;
  exports.Sanitizer = Sanitizer;
  exports.SecurityContext = SecurityContext;
  exports.ANALYZE_FOR_ENTRY_COMPONENTS = ANALYZE_FOR_ENTRY_COMPONENTS;
  exports.Attribute = Attribute;
  exports.ContentChild = ContentChild;
  exports.ContentChildren = ContentChildren;
  exports.Query = Query;
  exports.ViewChild = ViewChild;
  exports.ViewChildren = ViewChildren;
  exports.Component = Component;
  exports.Directive = Directive;
  exports.HostBinding = HostBinding;
  exports.HostListener = HostListener;
  exports.Input = Input;
  exports.Output = Output;
  exports.Pipe = Pipe;
  exports.AfterContentChecked = AfterContentChecked;
  exports.AfterContentInit = AfterContentInit;
  exports.AfterViewChecked = AfterViewChecked;
  exports.AfterViewInit = AfterViewInit;
  exports.DoCheck = DoCheck;
  exports.OnChanges = OnChanges;
  exports.OnDestroy = OnDestroy;
  exports.OnInit = OnInit;
  exports.CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
  exports.NO_ERRORS_SCHEMA = NO_ERRORS_SCHEMA;
  exports.NgModule = NgModule;
  exports.ViewEncapsulation = ViewEncapsulation;
  exports.Version = Version;
  exports.VERSION = VERSION;
  exports.Class = Class;
  exports.forwardRef = forwardRef;
  exports.resolveForwardRef = resolveForwardRef;
  exports.Injector = Injector;
  exports.ReflectiveInjector = ReflectiveInjector;
  exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
  exports.ReflectiveKey = ReflectiveKey;
  exports.OpaqueToken = OpaqueToken;
  exports.Inject = Inject;
  exports.Optional = Optional;
  exports.Injectable = Injectable;
  exports.Self = Self;
  exports.SkipSelf = SkipSelf;
  exports.Host = Host;
  exports.NgZone = NgZone;
  exports.RenderComponentType = RenderComponentType;
  exports.Renderer = Renderer;
  exports.RootRenderer = RootRenderer;
  exports.COMPILER_OPTIONS = COMPILER_OPTIONS;
  exports.Compiler = Compiler;
  exports.CompilerFactory = CompilerFactory;
  exports.ModuleWithComponentFactories = ModuleWithComponentFactories;
  exports.ComponentFactory = ComponentFactory;
  exports.ComponentRef = ComponentRef;
  exports.ComponentFactoryResolver = ComponentFactoryResolver;
  exports.ElementRef = ElementRef;
  exports.NgModuleFactory = NgModuleFactory;
  exports.NgModuleRef = NgModuleRef;
  exports.NgModuleFactoryLoader = NgModuleFactoryLoader;
  exports.getModuleFactory = getModuleFactory;
  exports.QueryList = QueryList;
  exports.SystemJsNgModuleLoader = SystemJsNgModuleLoader;
  exports.SystemJsNgModuleLoaderConfig = SystemJsNgModuleLoaderConfig;
  exports.TemplateRef = TemplateRef;
  exports.ViewContainerRef = ViewContainerRef;
  exports.EmbeddedViewRef = EmbeddedViewRef;
  exports.ViewRef = ViewRef;
  exports.ChangeDetectionStrategy = ChangeDetectionStrategy;
  exports.ChangeDetectorRef = ChangeDetectorRef;
  exports.CollectionChangeRecord = CollectionChangeRecord;
  exports.DefaultIterableDiffer = DefaultIterableDiffer;
  exports.IterableDiffers = IterableDiffers;
  exports.KeyValueChangeRecord = KeyValueChangeRecord;
  exports.KeyValueDiffers = KeyValueDiffers;
  exports.SimpleChange = SimpleChange;
  exports.WrappedValue = WrappedValue;
  exports.platformCore = platformCore;
  exports.__core_private__ = __core_private__;
  exports.AUTO_STYLE = AUTO_STYLE;
  exports.AnimationEntryMetadata = AnimationEntryMetadata;
  exports.AnimationStateMetadata = AnimationStateMetadata;
  exports.AnimationStateDeclarationMetadata = AnimationStateDeclarationMetadata;
  exports.AnimationStateTransitionMetadata = AnimationStateTransitionMetadata;
  exports.AnimationMetadata = AnimationMetadata;
  exports.AnimationKeyframesSequenceMetadata = AnimationKeyframesSequenceMetadata;
  exports.AnimationStyleMetadata = AnimationStyleMetadata;
  exports.AnimationAnimateMetadata = AnimationAnimateMetadata;
  exports.AnimationWithStepsMetadata = AnimationWithStepsMetadata;
  exports.AnimationSequenceMetadata = AnimationSequenceMetadata;
  exports.AnimationGroupMetadata = AnimationGroupMetadata;
  exports.animate = animate;
  exports.group = group;
  exports.sequence = sequence;
  exports.style = style;
  exports.state = state;
  exports.keyframes = keyframes;
  exports.transition = transition;
  exports.trigger = trigger;
}));

})();
System.registerDynamic('rxjs/util/ObjectUnsubscribedError.js', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    

    return module.exports;
});
System.registerDynamic("rxjs/SubjectSubscription.js", ["./Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require("./Subscription");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            _super.call(this);
            this.subject = subject;
            this.subscriber = subscriber;
            this.closed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1.Subscription);
    exports.SubjectSubscription = SubjectSubscription;
    

    return module.exports;
});
System.registerDynamic('rxjs/Subject.js', ['./Observable', './Subscriber', './Subscription', './util/ObjectUnsubscribedError', './SubjectSubscription', './symbol/rxSubscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('./Observable');
    var Subscriber_1 = $__require('./Subscriber');
    var Subscription_1 = $__require('./Subscription');
    var ObjectUnsubscribedError_1 = $__require('./util/ObjectUnsubscribedError');
    var SubjectSubscription_1 = $__require('./SubjectSubscription');
    var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
    /**
     * @class SubjectSubscriber<T>
     */
    var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            _super.call(this, destination);
            this.destination = destination;
        }
        return SubjectSubscriber;
    }(Subscriber_1.Subscriber);
    exports.SubjectSubscriber = SubjectSubscriber;
    /**
     * @class Subject<T>
     */
    var Subject = function (_super) {
        __extends(Subject, _super);
        function Subject() {
            _super.call(this);
            this.observers = [];
            this.closed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
        }
        Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            } else if (this.isStopped) {
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            } else {
                this.observers.push(subscriber);
                return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable_1.Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    /**
     * @class AnonymousSubject<T>
     */
    var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            } else {
                return Subscription_1.Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject);
    exports.AnonymousSubject = AnonymousSubject;
    

    return module.exports;
});
System.registerDynamic('rxjs/AsyncSubject.js', ['./Subject', './Subscription'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1 = $__require('./Subject');
    var Subscription_1 = $__require('./Subscription');
    /**
     * @class AsyncSubject<T>
     */
    var AsyncSubject = function (_super) {
        __extends(AsyncSubject, _super);
        function AsyncSubject() {
            _super.apply(this, arguments);
            this.value = null;
            this.hasNext = false;
            this.hasCompleted = false;
        }
        AsyncSubject.prototype._subscribe = function (subscriber) {
            if (this.hasCompleted && this.hasNext) {
                subscriber.next(this.value);
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            } else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        AsyncSubject.prototype.next = function (value) {
            if (!this.hasCompleted) {
                this.value = value;
                this.hasNext = true;
            }
        };
        AsyncSubject.prototype.complete = function () {
            this.hasCompleted = true;
            if (this.hasNext) {
                _super.prototype.next.call(this, this.value);
            }
            _super.prototype.complete.call(this);
        };
        return AsyncSubject;
    }(Subject_1.Subject);
    exports.AsyncSubject = AsyncSubject;
    

    return module.exports;
});
System.registerDynamic('rxjs/observable/BoundCallbackObservable.js', ['../Observable', '../util/tryCatch', '../util/errorObject', '../AsyncSubject'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('../Observable');
    var tryCatch_1 = $__require('../util/tryCatch');
    var errorObject_1 = $__require('../util/errorObject');
    var AsyncSubject_1 = $__require('../AsyncSubject');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var BoundCallbackObservable = function (_super) {
        __extends(BoundCallbackObservable, _super);
        function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
            _super.call(this);
            this.callbackFunc = callbackFunc;
            this.selector = selector;
            this.args = args;
            this.scheduler = scheduler;
        }
        /* tslint:enable:max-line-length */
        /**
         * Converts a callback API to a function that returns an Observable.
         *
         * <span class="informal">Give it a function `f` of type `f(x, callback)` and
         * it will return a function `g` that when called as `g(x)` will output an
         * Observable.</span>
         *
         * `bindCallback` is not an operator because its input and output are not
         * Observables. The input is a function `func` with some parameters, but the
         * last parameter must be a callback function that `func` calls when it is
         * done. The output of `bindCallback` is a function that takes the same
         * parameters as `func`, except the last one (the callback). When the output
         * function is called with arguments, it will return an Observable where the
         * results will be delivered to.
         *
         * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
         * // Suppose we have jQuery.getJSON('/my/url', callback)
         * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
         * var result = getJSONAsObservable('/my/url');
         * result.subscribe(x => console.log(x), e => console.error(e));
         *
         * @see {@link bindNodeCallback}
         * @see {@link from}
         * @see {@link fromPromise}
         *
         * @param {function} func Function with a callback as the last parameter.
         * @param {function} [selector] A function which takes the arguments from the
         * callback and maps those a value to emit on the output Observable.
         * @param {Scheduler} [scheduler] The scheduler on which to schedule the
         * callbacks.
         * @return {function(...params: *): Observable} A function which returns the
         * Observable that delivers the same values the callback would deliver.
         * @static true
         * @name bindCallback
         * @owner Observable
         */
        BoundCallbackObservable.create = function (func, selector, scheduler) {
            if (selector === void 0) {
                selector = undefined;
            }
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return new BoundCallbackObservable(func, selector, args, scheduler);
            };
        };
        BoundCallbackObservable.prototype._subscribe = function (subscriber) {
            var callbackFunc = this.callbackFunc;
            var args = this.args;
            var scheduler = this.scheduler;
            var subject = this.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = this.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function handlerFn() {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i - 0] = arguments[_i];
                        }
                        var source = handlerFn.source;
                        var selector = source.selector,
                            subject = source.subject;
                        if (selector) {
                            var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                            if (result_1 === errorObject_1.errorObject) {
                                subject.error(errorObject_1.errorObject.e);
                            } else {
                                subject.next(result_1);
                                subject.complete();
                            }
                        } else {
                            subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                            subject.complete();
                        }
                    };
                    // use named function instance to avoid closure.
                    handler.source = this;
                    var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                    if (result === errorObject_1.errorObject) {
                        subject.error(errorObject_1.errorObject.e);
                    }
                }
                return subject.subscribe(subscriber);
            } else {
                return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber });
            }
        };
        BoundCallbackObservable.dispatch = function (state) {
            var self = this;
            var source = state.source,
                subscriber = state.subscriber;
            var callbackFunc = source.callbackFunc,
                args = source.args,
                scheduler = source.scheduler;
            var subject = source.subject;
            if (!subject) {
                subject = source.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector,
                        subject = source.subject;
                    if (selector) {
                        var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_2 === errorObject_1.errorObject) {
                            self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                        } else {
                            self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                        }
                    } else {
                        var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                        self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                    }
                };
                // use named function to pass values in without closure
                handler.source = source;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            self.add(subject.subscribe(subscriber));
        };
        return BoundCallbackObservable;
    }(Observable_1.Observable);
    exports.BoundCallbackObservable = BoundCallbackObservable;
    function dispatchNext(arg) {
        var value = arg.value,
            subject = arg.subject;
        subject.next(value);
        subject.complete();
    }
    function dispatchError(arg) {
        var err = arg.err,
            subject = arg.subject;
        subject.error(err);
    }
    

    return module.exports;
});
System.registerDynamic("rxjs/observable/bindCallback.js", ["./BoundCallbackObservable"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var BoundCallbackObservable_1 = $__require("./BoundCallbackObservable");
  exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
  

  return module.exports;
});
System.registerDynamic('rxjs/add/observable/bindCallback.js', ['../../Observable', '../../observable/bindCallback'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var bindCallback_1 = $__require('../../observable/bindCallback');
  Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
  

  return module.exports;
});
System.registerDynamic('adal-angular', [], true, function ($__require, exports, module) {
    //----------------------------------------------------------------------
    // AdalJS v1.0.10
    // @preserve Copyright (c) Microsoft Open Technologies, Inc.
    // All Rights Reserved
    // Apache License 2.0
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    //----------------------------------------------------------------------
    'use strict';

    // node.js usage for tests

    var define,
        global = this || self,
        GLOBAL = global;
    var Logging = {
        level: 0,
        log: function () {}
    };

    var AuthenticationContext;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.inject = function (conf) {
            return new AuthenticationContext(conf);
        };
    }

    /**
     * Config information
     * @public
     * @class Config
     * @property {tenant}          Your target tenant
     * @property {clientId}        Identifier assigned to your app by Azure Active Directory
     * @property {redirectUri}     Endpoint at which you expect to receive tokens
     * @property {instance}        Azure Active Directory Instance(default:https://login.microsoftonline.com/)
     * @property {endpoints}       Collection of {Endpoint-ResourceId} used for autmatically attaching tokens in webApi calls
     */

    /**
     * User information from idtoken.
     *  @class User
     *  @property {string} userName - username assigned from upn or email.
     *  @property {object} profile - properties parsed from idtoken.
     */

    /**
     * Creates a new AuthenticationContext object.
     * @constructor
     * @param {object}  config               Configuration options for AuthenticationContext
     *
     **/
    AuthenticationContext = function (config) {
        /**
         * Enum for request type
         * @enum {string}
         */
        this.REQUEST_TYPE = {
            LOGIN: 'LOGIN',
            RENEW_TOKEN: 'RENEW_TOKEN',
            UNKNOWN: 'UNKNOWN'
        };

        /**
         * Enum for storage constants
         * @enum {string}
         */
        this.CONSTANTS = {
            ACCESS_TOKEN: 'access_token',
            EXPIRES_IN: 'expires_in',
            ID_TOKEN: 'id_token',
            ERROR_DESCRIPTION: 'error_description',
            SESSION_STATE: 'session_state',
            STORAGE: {
                TOKEN_KEYS: 'adal.token.keys',
                ACCESS_TOKEN_KEY: 'adal.access.token.key',
                EXPIRATION_KEY: 'adal.expiration.key',
                START_PAGE: 'adal.start.page',
                START_PAGE_PARAMS: 'adal.start.page.params',
                STATE_LOGIN: 'adal.state.login',
                STATE_RENEW: 'adal.state.renew',
                STATE_RENEW_RESOURCE: 'adal.state.renew.resource',
                NONCE_IDTOKEN: 'adal.nonce.idtoken',
                SESSION_STATE: 'adal.session.state',
                USERNAME: 'adal.username',
                IDTOKEN: 'adal.idtoken',
                ERROR: 'adal.error',
                ERROR_DESCRIPTION: 'adal.error.description',
                LOGIN_REQUEST: 'adal.login.request',
                LOGIN_ERROR: 'adal.login.error'
            },
            RESOURCE_DELIMETER: '|',
            ERR_MESSAGES: {
                NO_TOKEN: 'User is not authorized'
            },
            LOGGING_LEVEL: {
                ERROR: 0,
                WARN: 1,
                INFO: 2,
                VERBOSE: 3
            },
            LEVEL_STRING_MAP: {
                0: 'ERROR:',
                1: 'WARNING:',
                2: 'INFO:',
                3: 'VERBOSE:'
            }
        };

        if (AuthenticationContext.prototype._singletonInstance) {
            return AuthenticationContext.prototype._singletonInstance;
        }
        AuthenticationContext.prototype._singletonInstance = this;

        // public
        this.instance = 'https://login.microsoftonline.com/';
        this.config = {};
        this.callback = null;
        this.popUp = false;

        // private
        this._user = null;
        this._activeRenewals = {};
        this._loginInProgress = false;
        this._renewStates = [];

        window.callBackMappedToRenewStates = {};
        window.callBacksMappedToRenewStates = {};

        // validate before constructor assignments
        if (config.displayCall && typeof config.displayCall !== 'function') {
            throw new Error('displayCall is not a function');
        }

        if (!config.clientId) {
            throw new Error('clientId is required');
        }

        if (!config.correlationId) {
            config.correlationId = this._guid();
        }

        this.config = this._cloneConfig(config);

        // App can request idtoken for itself using clientid as resource
        if (!this.config.loginResource) {
            this.config.loginResource = this.config.clientId;
        }

        if (!this.config.redirectUri) {
            this.config.redirectUri = window.location.href;
        }
    };

    /**
     * Gets initial Idtoken for the app backend
     * Saves the resulting Idtoken in localStorage.
     */
    AuthenticationContext.prototype.login = function () {
        // Token is not present and user needs to login
        var expectedState = this._guid();
        this.config.state = expectedState;
        this._idTokenNonce = this._guid();
        this.verbose('Expected state: ' + expectedState + ' startPage:' + window.location);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, window.location);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, expectedState);
        this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');

        var urlNavigate = this._getNavigateUrl('id_token', null) + '&nonce=' + encodeURIComponent(this._idTokenNonce);
        this.frameCallInProgress = false;
        this._loginInProgress = true;
        if (this.config.displayCall) {
            // User defined way of handling the navigation
            this.config.displayCall(urlNavigate);
        } else {
            this.promptUser(urlNavigate);
        }
        // callback from redirected page will receive fragment. It needs to call oauth2Callback
    };

    AuthenticationContext.prototype.loginInProgress = function () {
        return this._loginInProgress;
    };

    AuthenticationContext.prototype._hasResource = function (key) {
        var keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);
        return keys && !this._isEmpty(keys) && keys.indexOf(key + this.CONSTANTS.RESOURCE_DELIMETER) > -1;
    };

    /**
     * Gets token for the specified resource from local storage cache
     * @param {string}   resource A URI that identifies the resource for which the token is valid.
     * @returns {string} token if exists and not expired or null
     */
    AuthenticationContext.prototype.getCachedToken = function (resource) {
        if (!this._hasResource(resource)) {
            return null;
        }

        var token = this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource);
        var expired = this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource);

        // If expiration is within offset, it will force renew
        var offset = this.config.expireOffsetSeconds || 120;

        if (expired && expired > this._now() + offset) {
            return token;
        } else {
            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, '');
            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, 0);
            return null;
        }
    };

    /**
     * Retrieves and parse idToken from localstorage
     * @returns {User} user object
     */
    AuthenticationContext.prototype.getCachedUser = function () {
        if (this._user) {
            return this._user;
        }

        var idtoken = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
        this._user = this._createUser(idtoken);
        return this._user;
    };

    AuthenticationContext.prototype.registerCallback = function (expectedState, resource, callback) {
        this._activeRenewals[resource] = expectedState;
        if (!window.callBacksMappedToRenewStates[expectedState]) {
            window.callBacksMappedToRenewStates[expectedState] = [];
        }
        var self = this;
        window.callBacksMappedToRenewStates[expectedState].push(callback);
        if (!window.callBackMappedToRenewStates[expectedState]) {
            window.callBackMappedToRenewStates[expectedState] = function (message, token) {
                for (var i = 0; i < window.callBacksMappedToRenewStates[expectedState].length; ++i) {
                    window.callBacksMappedToRenewStates[expectedState][i](message, token);
                }
                self._activeRenewals[resource] = null;
                window.callBacksMappedToRenewStates[expectedState] = null;
                window.callBackMappedToRenewStates[expectedState] = null;
            };
        }
    };

    // var errorResponse = {error:'', errorDescription:''};
    // var token = 'string token';
    // callback(errorResponse, token)
    // with callback
    /**
     * Acquires access token with hidden iframe
     * @param {string}   resource  ResourceUri identifying the target resource
     * @returns {string} access token if request is successfull
     */
    AuthenticationContext.prototype._renewToken = function (resource, callback) {
        // use iframe to try refresh token
        // use given resource to create new authz url
        this.info('renewToken is called for resource:' + resource);
        var frameHandle = this._addAdalFrame('adalRenewFrame' + resource);
        var expectedState = this._guid() + '|' + resource;
        this._idTokenNonce = this._guid();
        this.config.state = expectedState;
        // renew happens in iframe, so it keeps javascript context
        this._renewStates.push(expectedState);

        this.verbose('Renew token Expected state: ' + expectedState);
        var urlNavigate = this._getNavigateUrl('token', resource) + '&prompt=none&login_hint=' + encodeURIComponent(this._user.userName);

        // don't add domain_hint twice if user provided it in the extraQueryParameter value
        if (!this._urlContainsQueryStringParameter("domain_hint", urlNavigate)) {
            urlNavigate += '&domain_hint=' + encodeURIComponent(this._getDomainHint());
        }

        urlNavigate += '&nonce=' + encodeURIComponent(this._idTokenNonce);
        this.callback = callback;
        this.registerCallback(expectedState, resource, callback);
        this.idTokenNonce = null;
        this.verbose('Navigate to:' + urlNavigate);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, '');
        frameHandle.src = 'about:blank';
        this._loadFrame(urlNavigate, 'adalRenewFrame' + resource);
    };

    AuthenticationContext.prototype._renewIdToken = function (callback) {
        // use iframe to try refresh token
        this.info('renewIdToken is called');
        var frameHandle = this._addAdalFrame('adalIdTokenFrame');
        var expectedState = this._guid() + '|' + this.config.clientId;
        this._idTokenNonce = this._guid();
        this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce);
        this.config.state = expectedState;
        // renew happens in iframe, so it keeps javascript context
        this._renewStates.push(expectedState);

        this.verbose('Renew Idtoken Expected state: ' + expectedState);
        var urlNavigate = this._getNavigateUrl('id_token', null) + '&prompt=none&login_hint=' + encodeURIComponent(this._user.userName);

        // don't add domain_hint twice if user provided it in the extraQueryParameter value
        if (!this._urlContainsQueryStringParameter("domain_hint", urlNavigate)) {
            urlNavigate += '&domain_hint=' + encodeURIComponent(this._getDomainHint());
        }

        urlNavigate += '&nonce=' + encodeURIComponent(this._idTokenNonce);
        this.registerCallback(expectedState, this.config.clientId, callback);
        this.idTokenNonce = null;
        this.verbose('Navigate to:' + urlNavigate);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, '');
        frameHandle.src = 'about:blank';
        this._loadFrame(urlNavigate, 'adalIdTokenFrame');
    };

    AuthenticationContext.prototype._urlContainsQueryStringParameter = function (name, url) {
        // regex to detect pattern of a ? or & followed by the name parameter and an equals character
        var regex = new RegExp("[\\?&]" + name + "=");
        return regex.test(url);
    };

    AuthenticationContext.prototype._loadFrame = function (urlNavigate, frameName) {
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        var self = this;
        self.info('LoadFrame: ' + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = self._addAdalFrame(frameCheck);
            if (frameHandle.src === '' || frameHandle.src === 'about:blank') {
                frameHandle.src = urlNavigate;
                self._loadFrame(urlNavigate, frameCheck);
            }
        }, 500);
    };

    /**
     * Acquire token from cache if not expired and available. Acquires token from iframe if expired.
     * @param {string}   resource  ResourceUri identifying the target resource
     * @param {requestCallback} callback
     */
    AuthenticationContext.prototype.acquireToken = function (resource, callback) {
        if (this._isEmpty(resource)) {
            this.warn('resource is required');
            callback('resource is required', null);
            return;
        }

        var token = this.getCachedToken(resource);
        if (token) {
            this.info('Token is already in cache for resource:' + resource);
            callback(null, token);
            return;
        }

        if (!this._user) {
            this.warn('User login is required');
            callback('User login is required', null);
            return;
        }

        // refresh attept with iframe
        //Already renewing for this resource, callback when we get the token.
        if (this._activeRenewals[resource]) {
            //Active renewals contains the state for each renewal.
            this.registerCallback(this._activeRenewals[resource], resource, callback);
        } else {
            if (resource === this.config.clientId) {
                // App uses idtoken to send to api endpoints
                // Default resource is tracked as clientid to store this token
                this.verbose('renewing idtoken');
                this._renewIdToken(callback);
            } else {
                this._renewToken(resource, callback);
            }
        }
    };

    /**
     * Redirect the Browser to Azure AD Authorization endpoint
     * @param {string}   urlNavigate The authorization request url
     */
    AuthenticationContext.prototype.promptUser = function (urlNavigate) {
        if (urlNavigate) {
            this.info('Navigate to:' + urlNavigate);
            window.location.replace(urlNavigate);
        } else {
            this.info('Navigate url is empty');
        }
    };

    /**
     * Clear cache items.
     */
    AuthenticationContext.prototype.clearCache = function () {
        this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY, '');
        this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY, 0);
        this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, '');
        this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, '');
        this._renewStates = [];
        this._saveItem(this.CONSTANTS.STORAGE.START_PAGE, '');
        this._saveItem(this.CONSTANTS.STORAGE.START_PAGE_PARAMS, '');
        this._saveItem(this.CONSTANTS.STORAGE.USERNAME, '');
        this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');
        var keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);

        if (!this._isEmpty(keys)) {
            keys = keys.split(this.CONSTANTS.RESOURCE_DELIMETER);
            for (var i = 0; i < keys.length; i++) {
                this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + keys[i], '');
                this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + keys[i], 0);
            }
        }
        this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, '');
    };

    /**
     * Clear cache items for a resource.
     */
    AuthenticationContext.prototype.clearCacheForResource = function (resource) {
        this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');
        if (this._hasResource(resource)) {
            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, '');
            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, 0);
        }
    };

    /**
     * Logout user will redirect page to logout endpoint.
     * After logout, it will redirect to post_logout page if provided.
     */
    AuthenticationContext.prototype.logOut = function () {
        this.clearCache();
        var tenant = 'common';
        var logout = '';
        this._user = null;
        if (this.config.tenant) {
            tenant = this.config.tenant;
        }

        if (this.config.instance) {
            this.instance = this.config.instance;
        }

        if (this.config.postLogoutRedirectUri) {
            logout = 'post_logout_redirect_uri=' + encodeURIComponent(this.config.postLogoutRedirectUri);
        }

        var urlNavigate = this.instance + tenant + '/oauth2/logout?' + logout;
        this.info('Logout navigate to: ' + urlNavigate);
        this.promptUser(urlNavigate);
    };

    AuthenticationContext.prototype._isEmpty = function (str) {
        return typeof str === 'undefined' || !str || 0 === str.length;
    };

    /**
     * This callback is displayed as part of the Requester class.
     * @callback requestCallback
     * @param {string} error
     * @param {User} user
     */

    /**
     * Gets a user profile
     * @param {requestCallback} cb - The callback that handles the response.
     */
    AuthenticationContext.prototype.getUser = function (callback) {
        // IDToken is first call
        if (typeof callback !== 'function') {
            throw new Error('callback is not a function');
        }

        this.callback = callback;

        // user in memory
        if (this._user) {
            this.callback(null, this._user);
            return;
        }

        // frame is used to get idtoken
        var idtoken = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
        if (!this._isEmpty(idtoken)) {
            this.info('User exists in cache: ');
            this._user = this._createUser(idtoken);
            this.callback(null, this._user);
        } else {
            this.warn('User information is not available');
            this.callback('User information is not available');
        }
    };

    AuthenticationContext.prototype._getDomainHint = function () {
        if (this._user && this._user.userName && this._user.userName.indexOf('@') > -1) {
            var parts = this._user.userName.split('@');
            // local part can include @ in quotes. Sending last part handles that.
            return parts[parts.length - 1];
        }

        return '';
    };

    AuthenticationContext.prototype._createUser = function (idToken) {
        var user = null;
        var parsedJson = this._extractIdToken(idToken);
        if (parsedJson && parsedJson.hasOwnProperty('aud')) {

            if (parsedJson.aud.toLowerCase() === this.config.clientId.toLowerCase()) {

                user = {
                    userName: '',
                    profile: parsedJson
                };

                if (parsedJson.hasOwnProperty('upn')) {
                    user.userName = parsedJson.upn;
                } else if (parsedJson.hasOwnProperty('email')) {
                    user.userName = parsedJson.email;
                }
            } else {
                this.warn('IdToken has invalid aud field');
            }
        }

        return user;
    };

    AuthenticationContext.prototype._getHash = function (hash) {
        if (hash.indexOf('#/') > -1) {
            hash = hash.substring(hash.indexOf('#/') + 2);
        } else if (hash.indexOf('#') > -1) {
            hash = hash.substring(1);
        }

        return hash;
    };

    /**
     * Checks if hash contains access token or id token or error_description
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {Boolean}
     */
    AuthenticationContext.prototype.isCallback = function (hash) {
        hash = this._getHash(hash);
        var parameters = this._deserialize(hash);
        return parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) || parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) || parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN);
    };

    /**
     * Gets login error
     * @returns {string} error message related to login
     */
    AuthenticationContext.prototype.getLoginError = function () {
        return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR);
    };

    /**
     * Gets requestInfo from given hash.
     * @returns {string} error message related to login
     */
    AuthenticationContext.prototype.getRequestInfo = function (hash) {
        hash = this._getHash(hash);
        var parameters = this._deserialize(hash);
        var requestInfo = {
            valid: false,
            parameters: {},
            stateMatch: false,
            stateResponse: '',
            requestType: this.REQUEST_TYPE.UNKNOWN
        };
        if (parameters) {
            requestInfo.parameters = parameters;
            if (parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) || parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) || parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)) {

                requestInfo.valid = true;

                // which call
                var stateResponse = '';
                if (parameters.hasOwnProperty('state')) {
                    this.verbose('State: ' + parameters.state);
                    stateResponse = parameters.state;
                } else {
                    this.warn('No state returned');
                    return requestInfo;
                }

                requestInfo.stateResponse = stateResponse;

                // async calls can fire iframe and login request at the same time if developer does not use the API as expected
                // incoming callback needs to be looked up to find the request type
                if (stateResponse === this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN)) {
                    requestInfo.requestType = this.REQUEST_TYPE.LOGIN;
                    requestInfo.stateMatch = true;
                    return requestInfo;
                }

                // external api requests may have many renewtoken requests for different resource
                if (!requestInfo.stateMatch && window.parent && window.parent.AuthenticationContext()) {
                    var statesInParentContext = window.parent.AuthenticationContext()._renewStates;
                    for (var i = 0; i < statesInParentContext.length; i++) {
                        if (statesInParentContext[i] === requestInfo.stateResponse) {
                            requestInfo.requestType = this.REQUEST_TYPE.RENEW_TOKEN;
                            requestInfo.stateMatch = true;
                            break;
                        }
                    }
                }
            }
        }

        return requestInfo;
    };

    AuthenticationContext.prototype._getResourceFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf('|');
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }

        return '';
    };

    /**
     * Saves token from hash that is received from redirect.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {string} error message related to login
     */
    AuthenticationContext.prototype.saveTokenFromHash = function (requestInfo) {
        this.info('State status:' + requestInfo.stateMatch + '; Request type:' + requestInfo.requestType);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');

        // Record error
        if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)) {
            this.info('Error :' + requestInfo.parameters.error + '; Error description:' + requestInfo.parameters[this.CONSTANTS.ERROR_DESCRIPTION]);
            this._saveItem(this.CONSTANTS.STORAGE.ERROR, requestInfo.parameters.error);
            this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, requestInfo.parameters[this.CONSTANTS.ERROR_DESCRIPTION]);

            if (requestInfo.requestType === this.REQUEST_TYPE.LOGIN) {
                this._loginInProgress = false;
                this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, requestInfo.parameters.errorDescription);
            }
        } else {

            // It must verify the state from redirect
            if (requestInfo.stateMatch) {
                // record tokens to storage if exists
                this.info('State is right');
                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE)) {
                    this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, requestInfo.parameters[this.CONSTANTS.SESSION_STATE]);
                }

                var keys, resource;

                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)) {
                    this.info('Fragment has access token');
                    resource = this._getResourceFromState(requestInfo.stateResponse);

                    if (!this._hasResource(resource)) {
                        keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || '';
                        this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, keys + resource + this.CONSTANTS.RESOURCE_DELIMETER);
                    }
                    // save token with related resource
                    this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, requestInfo.parameters[this.CONSTANTS.ACCESS_TOKEN]);
                    this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, this._expiresIn(requestInfo.parameters[this.CONSTANTS.EXPIRES_IN]));
                }

                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)) {
                    this.info('Fragment has id token');
                    this._loginInProgress = false;
                    this._user = this._createUser(requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                    if (this._user && this._user.profile) {
                        if (this._user.profile.nonce !== this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)) {
                            this._user = null;
                            this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, 'Nonce is not same as ' + this._idTokenNonce);
                        } else {
                            this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);

                            // Save idtoken as access token for app itself
                            resource = this.config.loginResource ? this.config.loginResource : this.config.clientId;
                            if (!this._hasResource(resource)) {
                                keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || '';
                                this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, keys + resource + this.CONSTANTS.RESOURCE_DELIMETER);
                            }
                            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, this._user.profile.exp);
                        }
                    }
                }
            } else {
                this._saveItem(this.CONSTANTS.STORAGE.ERROR, 'Invalid_state');
                this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, 'Invalid_state. state: ' + requestInfo.stateResponse);
            }
        }
    };

    /**
     * Gets resource for given endpoint if mapping is provided with config.
     * @param {string} endpoint  -  API endoibt
     * @returns {string} resource for this API endpoint
     */
    AuthenticationContext.prototype.getResourceForEndpoint = function (endpoint) {
        if (this.config && this.config.endpoints) {
            for (var configEndpoint in this.config.endpoints) {
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(configEndpoint) > -1) {
                    return this.config.endpoints[configEndpoint];
                }
            }
        }

        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf('http://') > -1 || endpoint.indexOf('https://') > -1) {
            if (this._getHostFromUri(endpoint) === this._getHostFromUri(this.config.redirectUri)) {
                return this.config.loginResource;
            }
        }
        // in angular level, the url for $http interceptor call could be relative url,
        // if it's relative call, we'll treat it as app backend call.
        else {
                // if user specified list of anonymous endpoints, no need to send token to these endpoints, return null.
                if (this.config && this.config.anonymousEndpoints) {
                    for (var i = 0; i < this.config.anonymousEndpoints.length; i++) {
                        if (endpoint.indexOf(this.config.anonymousEndpoints[i]) > -1) {
                            return null;
                        }
                    }
                }
                // all other app's backend calls are secured.
                return this.config.loginResource;
            }

        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };

    AuthenticationContext.prototype._getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, '');

        extractedUri = extractedUri.split('/')[0];
        return extractedUri;
    };

    /*exported  oauth2Callback */
    AuthenticationContext.prototype.handleWindowCallback = function () {
        // This is for regular javascript usage for redirect handling
        // need to make sure this is for callback
        var hash = window.location.hash;
        if (this.isCallback(hash)) {
            var requestInfo = this.getRequestInfo(hash);
            this.info('Returned from redirect url');
            this.saveTokenFromHash(requestInfo);
            var callback = null;
            if (requestInfo.requestType === this.REQUEST_TYPE.RENEW_TOKEN && window.parent) {
                // iframe call but same single page
                this.verbose('Window is in iframe');
                callback = window.parent.callBackMappedToRenewStates[requestInfo.stateResponse];
                window.src = '';
            } else if (window && window.oauth2Callback) {
                this.verbose('Window is redirecting');
                callback = this.callback;
            }

            window.location.hash = '';
            window.location = this._getItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST);
            if (requestInfo.requestType === this.REQUEST_TYPE.RENEW_TOKEN) {
                callback(this._getItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION), requestInfo.parameters[this.CONSTANTS.ACCESS_TOKEN] || requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                return;
            }
        }
    };

    AuthenticationContext.prototype._getNavigateUrl = function (responseType, resource) {
        var tenant = 'common';
        if (this.config.tenant) {
            tenant = this.config.tenant;
        }

        if (this.config.instance) {
            this.instance = this.config.instance;
        }

        var urlNavigate = this.instance + tenant + '/oauth2/authorize' + this._serialize(responseType, this.config, resource) + this._addLibMetadata();
        this.info('Navigate url:' + urlNavigate);
        return urlNavigate;
    };

    AuthenticationContext.prototype._extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this._decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }

        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this._base64DecodeStringUrlSafe(base64IdToken);
            if (!base64Decoded) {
                this.info('The returned id_token could not be base64 url safe decoded.');
                return null;
            }

            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        } catch (err) {
            this.error('The returned id_token could not be decoded', err);
        }

        return null;
    };

    AuthenticationContext.prototype._extractUserName = function (encodedIdToken) {
        // id token will be decoded to get the username
        try {
            var parsed = this._extractIdToken(encodedIdToken);
            if (parsed) {
                if (parsed.hasOwnProperty('upn')) {
                    return parsed.upn;
                } else if (parsed.hasOwnProperty('email')) {
                    return parsed.email;
                }
            }
        } catch (err) {
            this.error('The returned id_token could not be decoded', err);
        }

        return null;
    };

    AuthenticationContext.prototype._base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        base64IdToken = base64IdToken.replace(/-/g, '+').replace(/_/g, '/');
        if (window.atob) {
            return decodeURIComponent(escape(window.atob(base64IdToken))); // jshint ignore:line
        } else {
            return decodeURIComponent(escape(this._decode(base64IdToken)));
        }
    };

    //Take https://cdnjs.cloudflare.com/ajax/libs/Base64/0.3.0/base64.js and https://en.wikipedia.org/wiki/Base64 as reference. 
    AuthenticationContext.prototype._decode = function (base64IdToken) {
        var codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        base64IdToken = String(base64IdToken).replace(/=+$/, '');

        var length = base64IdToken.length;
        if (length % 4 === 1) {
            throw new Error('The token to be decoded is not correctly encoded.');
        }

        var h1,
            h2,
            h3,
            h4,
            bits,
            c1,
            c2,
            c3,
            decoded = '';
        for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));

            // For padding, if last two are '='
            if (i + 2 === length - 1) {
                bits = h1 << 18 | h2 << 12 | h3 << 6;
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                decoded += String.fromCharCode(c1, c2);
                break;
            }
            // if last one is '='
            else if (i + 1 === length - 1) {
                    bits = h1 << 18 | h2 << 12;
                    c1 = bits >> 16 & 255;
                    decoded += String.fromCharCode(c1);
                    break;
                }

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;

            decoded += String.fromCharCode(c1, c2, c3);
        }

        return decoded;
    };

    // Adal.node js crack function
    AuthenticationContext.prototype._decodeJwt = function (jwtToken) {
        if (this._isEmpty(jwtToken)) {
            return null;
        };

        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;

        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            this.warn('The returned id_token is not parseable.');
            return null;
        }

        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };

        return crackedToken;
    };

    AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString = function (str) {
        return str.replace('-', '+').replace('_', '/');
    };

    AuthenticationContext.prototype._serialize = function (responseType, obj, resource) {
        var str = [];
        if (obj !== null) {
            str.push('?response_type=' + responseType);
            str.push('client_id=' + encodeURIComponent(obj.clientId));
            if (resource) {
                str.push('resource=' + encodeURIComponent(resource));
            }

            str.push('redirect_uri=' + encodeURIComponent(obj.redirectUri));
            str.push('state=' + encodeURIComponent(obj.state));

            if (obj.hasOwnProperty('slice')) {
                str.push('slice=' + encodeURIComponent(obj.slice));
            }

            if (obj.hasOwnProperty('extraQueryParameter')) {
                str.push(obj.extraQueryParameter);
            }

            if (obj.correlationId) {
                str.push('client-request-id=' + encodeURIComponent(obj.correlationId));
            }
        }

        return str.join('&');
    };

    AuthenticationContext.prototype._deserialize = function (query) {
        var match,
            pl = /\+/g,
            // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) {
            return decodeURIComponent(s.replace(pl, ' '));
        },
            obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }

        return obj;
    };

    /* jshint ignore:start */
    AuthenticationContext.prototype._guid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var guidHolder = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var hex = '0123456789abcdef';
        var r = 0;
        var guidResponse = "";
        for (var i = 0; i < 36; i++) {
            if (guidHolder[i] !== '-' && guidHolder[i] !== '4') {
                // each x and y needs to be random
                r = Math.random() * 16 | 0;
            }

            if (guidHolder[i] === 'x') {
                guidResponse += hex[r];
            } else if (guidHolder[i] === 'y') {
                // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                r |= 0x8; // set pos 3 to 1 as 1???
                guidResponse += hex[r];
            } else {
                guidResponse += guidHolder[i];
            }
        }

        return guidResponse;
    };
    /* jshint ignore:end */

    AuthenticationContext.prototype._expiresIn = function (expires) {
        return this._now() + parseInt(expires, 10);
    };

    AuthenticationContext.prototype._now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };

    AuthenticationContext.prototype._addAdalFrame = function (iframeId) {
        if (typeof iframeId === 'undefined') {
            return;
        }

        this.info('Add adal frame to document:' + iframeId);
        var adalFrame = document.getElementById(iframeId);

        if (!adalFrame) {
            if (document.createElement && document.documentElement && (window.opera || window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                var ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.borderWidth = '0px';

                adalFrame = document.getElementsByTagName('body')[0].appendChild(ifr);
            } else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe name="' + iframeId + '" id="' + iframeId + '" style="display:none"></iframe>');
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }

        return adalFrame;
    };

    AuthenticationContext.prototype._saveItem = function (key, obj) {

        if (this.config && this.config.cacheLocation && this.config.cacheLocation === 'localStorage') {

            if (!this._supportsLocalStorage()) {
                this.info('Local storage is not supported');
                return false;
            }

            localStorage.setItem(key, obj);

            return true;
        }

        // Default as session storage
        if (!this._supportsSessionStorage()) {
            this.info('Session storage is not supported');
            return false;
        }

        sessionStorage.setItem(key, obj);
        return true;
    };

    AuthenticationContext.prototype._getItem = function (key) {

        if (this.config && this.config.cacheLocation && this.config.cacheLocation === 'localStorage') {

            if (!this._supportsLocalStorage()) {
                this.info('Local storage is not supported');
                return null;
            }

            return localStorage.getItem(key);
        }

        // Default as session storage
        if (!this._supportsSessionStorage()) {
            this.info('Session storage is not supported');
            return null;
        }

        return sessionStorage.getItem(key);
    };

    AuthenticationContext.prototype._supportsLocalStorage = function () {
        try {
            return 'localStorage' in window && window['localStorage'];
        } catch (e) {
            return false;
        }
    };

    AuthenticationContext.prototype._supportsSessionStorage = function () {
        try {
            return 'sessionStorage' in window && window['sessionStorage'];
        } catch (e) {
            return false;
        }
    };

    AuthenticationContext.prototype._cloneConfig = function (obj) {
        if (null === obj || 'object' !== typeof obj) {
            return obj;
        }

        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    };

    AuthenticationContext.prototype._addLibMetadata = function () {
        // x-client-SKU
        // x-client-Ver
        return '&x-client-SKU=Js&x-client-Ver=' + this._libVersion();
    };

    AuthenticationContext.prototype.log = function (level, message, error) {
        if (level <= Logging.level) {
            var correlationId = this.config.correlationId;
            var timestamp = new Date().toUTCString();

            var formattedMessage = timestamp + ':' + correlationId + '-' + this._libVersion() + '-' + this.CONSTANTS.LEVEL_STRING_MAP[level] + ' ' + message;

            if (error) {
                formattedMessage += '\nstack:\n' + error.stack;
            }

            Logging.log(formattedMessage);
        }
    };

    AuthenticationContext.prototype.error = function (message, error) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR, message, error);
    };

    AuthenticationContext.prototype.warn = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.WARN, message, null);
    };

    AuthenticationContext.prototype.info = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.INFO, message, null);
    };

    AuthenticationContext.prototype.verbose = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE, message, null);
    };

    AuthenticationContext.prototype._libVersion = function () {
        return '1.0.10';
    };
    return module.exports;
});
System.registerDynamic("ng2-adal/services/adal.service.js", ["@angular/core", "rxjs/Observable", "rxjs/add/observable/bindCallback", "adal-angular"], true, function ($__require, exports, module) {
    /**
     * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
     * @version v1.0.1
     * @link https://github.com/sureshchahal/angular2-adal#readme
     * @license MIT
     */
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var Observable_1 = $__require("rxjs/Observable");
    $__require("rxjs/add/observable/bindCallback");
    var adalLib = $__require("adal-angular");
    var AdalService = function () {
        function AdalService() {
            this.oauthData = {
                isAuthenticated: false,
                userName: '',
                loginError: '',
                profile: {}
            };
        }
        AdalService.prototype.init = function (configOptions) {
            if (!configOptions) {
                throw new Error('You must set config, when calling init.');
            }
            // redirect and logout_redirect are set to current location by default
            var existingHash = window.location.hash;
            var pathDefault = window.location.href;
            if (existingHash) {
                pathDefault = pathDefault.replace(existingHash, '');
            }
            configOptions.redirectUri = configOptions.redirectUri || pathDefault;
            configOptions.postLogoutRedirectUri = configOptions.postLogoutRedirectUri || pathDefault;
            // create instance with given config
            this.adalContext = adalLib.inject(configOptions);
            window.AuthenticationContext = this.adalContext.constructor;
            // loginresource is used to set authenticated status
            this.updateDataFromCache(this.adalContext.config.loginResource);
        };
        Object.defineProperty(AdalService.prototype, "config", {
            get: function () {
                return this.adalContext.config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdalService.prototype, "userInfo", {
            get: function () {
                return this.oauthData;
            },
            enumerable: true,
            configurable: true
        });
        AdalService.prototype.login = function () {
            this.adalContext.login();
        };
        AdalService.prototype.loginInProgress = function () {
            return this.adalContext.loginInProgress();
        };
        AdalService.prototype.logOut = function () {
            this.adalContext.logOut();
        };
        AdalService.prototype.handleWindowCallback = function () {
            var hash = window.location.hash;
            if (this.adalContext.isCallback(hash)) {
                var requestInfo = this.adalContext.getRequestInfo(hash);
                this.adalContext.saveTokenFromHash(requestInfo);
                if (requestInfo.requestType === this.adalContext.REQUEST_TYPE.LOGIN) {
                    this.updateDataFromCache(this.adalContext.config.loginResource);
                } else if (requestInfo.requestType === this.adalContext.REQUEST_TYPE.RENEW_TOKEN) {
                    this.adalContext.callback = window.parent.callBackMappedToRenewStates[requestInfo.stateResponse];
                }
                if (requestInfo.stateMatch) {
                    if (typeof this.adalContext.callback === 'function') {
                        if (requestInfo.requestType === this.adalContext.REQUEST_TYPE.RENEW_TOKEN) {
                            // Idtoken or Accestoken can be renewed
                            if (requestInfo.parameters['access_token']) {
                                this.adalContext.callback(this.adalContext._getItem(this.adalContext.CONSTANTS.STORAGE.ERROR_DESCRIPTION), requestInfo.parameters['access_token']);
                            } else if (requestInfo.parameters['id_token']) {
                                this.adalContext.callback(this.adalContext._getItem(this.adalContext.CONSTANTS.STORAGE.ERROR_DESCRIPTION), requestInfo.parameters['id_token']);
                            } else if (requestInfo.parameters['error']) {
                                this.adalContext.callback(this.adalContext._getItem(this.adalContext.CONSTANTS.STORAGE.ERROR_DESCRIPTION), null);
                                this.adalContext._renewFailed = true;
                            }
                        }
                    }
                }
            }
        };
        AdalService.prototype.getCachedToken = function (resource) {
            return this.adalContext.getCachedToken(resource);
        };
        AdalService.prototype.acquireToken = function (resource) {
            var _this = this; // save outer this for inner function
            var errorMessage;
            return Observable_1.Observable.bindCallback(acquireTokenInternal, function (token) {
                if (!token && errorMessage) {
                    throw errorMessage;
                }
                return token;
            })();
            function acquireTokenInternal(cb) {
                var s = '';
                _this.adalContext.acquireToken(resource, function (error, tokenOut) {
                    if (error) {
                        _this.adalContext.error('Error when acquiring token for resource: ' + resource, error);
                        errorMessage = error;
                        cb(null);
                    } else {
                        cb(tokenOut);
                        s = tokenOut;
                    }
                });
                return s;
            }
        };
        AdalService.prototype.getUser = function () {
            var _this = this;
            return Observable_1.Observable.bindCallback(function (cb) {
                _this.adalContext.getUser(function (error, user) {
                    if (error) {
                        this.adalContext.error('Error when getting user', error);
                        cb(null);
                    } else {
                        cb(user);
                    }
                });
            })();
        };
        AdalService.prototype.clearCache = function () {
            this.adalContext.clearCache();
        };
        AdalService.prototype.clearCacheForResource = function (resource) {
            this.adalContext.clearCacheForResource(resource);
        };
        AdalService.prototype.info = function (message) {
            this.adalContext.info(message);
        };
        AdalService.prototype.verbose = function (message) {
            this.adalContext.verbose(message);
        };
        AdalService.prototype.GetResourceForEndpoint = function (url) {
            return this.adalContext.getResourceForEndpoint(url);
        };
        AdalService.prototype.refreshDataFromCache = function () {
            this.updateDataFromCache(this.adalContext.config.loginResource);
        };
        AdalService.prototype.updateDataFromCache = function (resource) {
            var token = this.adalContext.getCachedToken(resource);
            this.oauthData.isAuthenticated = token !== null && token.length > 0;
            var user = this.adalContext.getCachedUser() || { userName: '', profile: undefined };
            if (user) {
                this.oauthData.userName = user.userName;
                this.oauthData.profile = user.profile;
                this.oauthData.loginError = this.adalContext.getLoginError();
            } else {
                this.oauthData.userName = '';
                this.oauthData.profile = {};
                this.oauthData.loginError = '';
            }
        };
        ;
        return AdalService;
    }();
    AdalService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [])], AdalService);
    exports.AdalService = AdalService;

    

    return module.exports;
});
System.registerDynamic('rxjs/operator/catch.js', ['../OuterSubscriber', '../util/subscribeToResult'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('../OuterSubscriber');
    var subscribeToResult_1 = $__require('../util/subscribeToResult');
    /**
     * Catches errors on the observable to be handled by returning a new observable or throwing an error.
     * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
     *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
     *  is returned by the `selector` will be used to continue the observable chain.
     * @return {Observable} an observable that originates from either the source or the observable returned by the
     *  catch `selector` function.
     * @method catch
     * @name catch
     * @owner Observable
     */
    function _catch(selector) {
        var operator = new CatchOperator(selector);
        var caught = this.lift(operator);
        return operator.caught = caught;
    }
    exports._catch = _catch;
    var CatchOperator = function () {
        function CatchOperator(selector) {
            this.selector = selector;
        }
        CatchOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
        };
        return CatchOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var CatchSubscriber = function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            _super.call(this, destination);
            this.selector = selector;
            this.caught = caught;
        }
        // NOTE: overriding `error` instead of `_error` because we don't want
        // to have this flag this subscriber as `isStopped`.
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                } catch (err) {
                    this.destination.error(err);
                    return;
                }
                this.unsubscribe();
                this.destination.remove(this);
                subscribeToResult_1.subscribeToResult(this, result);
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    

    return module.exports;
});
System.registerDynamic('rxjs/add/operator/catch.js', ['../../Observable', '../../operator/catch'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var catch_1 = $__require('../../operator/catch');
  Observable_1.Observable.prototype.catch = catch_1._catch;
  Observable_1.Observable.prototype._catch = catch_1._catch;
  

  return module.exports;
});
System.registerDynamic('rxjs/operator/map.js', ['../Subscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('../Subscriber');
    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map(project, thisArg) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return this.lift(new MapOperator(project, thisArg));
    }
    exports.map = map;
    var MapOperator = function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }();
    exports.MapOperator = MapOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MapSubscriber = function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            _super.call(this, destination);
            this.project = project;
            this.count = 0;
            this.thisArg = thisArg || this;
        }
        // NOTE: This looks unoptimized, but it's actually purposefully NOT
        // using try/catch optimizations.
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber_1.Subscriber);
    

    return module.exports;
});
System.registerDynamic('rxjs/add/operator/map.js', ['../../Observable', '../../operator/map'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var map_1 = $__require('../../operator/map');
  Observable_1.Observable.prototype.map = map_1.map;
  

  return module.exports;
});
System.registerDynamic('rxjs/util/isPromise.js', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports.isPromise = isPromise;
    

    return module.exports;
});
System.registerDynamic('rxjs/util/toSubscriber.js', ['../Subscriber', '../symbol/rxSubscriber', '../Observer'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var Subscriber_1 = $__require('../Subscriber');
    var rxSubscriber_1 = $__require('../symbol/rxSubscriber');
    var Observer_1 = $__require('../Observer');
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber(Observer_1.empty);
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
    

    return module.exports;
});
System.registerDynamic('rxjs/Observable.js', ['./util/root', './util/toSubscriber', './symbol/observable'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('./util/root');
    var toSubscriber_1 = $__require('./util/toSubscriber');
    var observable_1 = $__require('./symbol/observable');
    /**
     * A representation of any set of values over any amount of time. This the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is  called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this.source);
            } else {
                sink.add(this._subscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                    PromiseCtor = root_1.root.Rx.config.Promise;
                } else if (root_1.root.Promise) {
                    PromiseCtor = root_1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    } else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable_1.$$observable] = function () {
            return this;
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    

    return module.exports;
});
System.registerDynamic('rxjs/symbol/iterator.js', ['../util/root'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('../util/root');
    function symbolIteratorPonyfill(root) {
        var Symbol = root.Symbol;
        if (typeof Symbol === 'function') {
            if (!Symbol.iterator) {
                Symbol.iterator = Symbol('iterator polyfill');
            }
            return Symbol.iterator;
        } else {
            // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
            var Set_1 = root.Set;
            if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
                return '@@iterator';
            }
            var Map_1 = root.Map;
            // required for compatability with es6-shim
            if (Map_1) {
                var keys = Object.getOwnPropertyNames(Map_1.prototype);
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                    if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                        return key;
                    }
                }
            }
            return '@@iterator';
        }
    }
    exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
    exports.$$iterator = symbolIteratorPonyfill(root_1.root);
    

    return module.exports;
});
System.registerDynamic("rxjs/InnerSubscriber.js", ["./Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require("./Subscriber");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var InnerSubscriber = function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            _super.call(this);
            this.parent = parent;
            this.outerValue = outerValue;
            this.outerIndex = outerIndex;
            this.index = 0;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber_1.Subscriber);
    exports.InnerSubscriber = InnerSubscriber;
    

    return module.exports;
});
System.registerDynamic('rxjs/symbol/observable.js', ['../util/root'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('../util/root');
    function getSymbolObservable(context) {
        var $$observable;
        var Symbol = context.Symbol;
        if (typeof Symbol === 'function') {
            if (Symbol.observable) {
                $$observable = Symbol.observable;
            } else {
                $$observable = Symbol('observable');
                Symbol.observable = $$observable;
            }
        } else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.$$observable = getSymbolObservable(root_1.root);
    

    return module.exports;
});
System.registerDynamic('rxjs/util/subscribeToResult.js', ['./root', './isArray', './isPromise', './isObject', '../Observable', '../symbol/iterator', '../InnerSubscriber', '../symbol/observable'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('./root');
    var isArray_1 = $__require('./isArray');
    var isPromise_1 = $__require('./isPromise');
    var isObject_1 = $__require('./isObject');
    var Observable_1 = $__require('../Observable');
    var iterator_1 = $__require('../symbol/iterator');
    var InnerSubscriber_1 = $__require('../InnerSubscriber');
    var observable_1 = $__require('../symbol/observable');
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.closed) {
            return null;
        }
        if (result instanceof Observable_1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return null;
            } else {
                return result.subscribe(destination);
            }
        } else if (isArray_1.isArray(result)) {
            for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
                destination.next(result[i]);
            }
            if (!destination.closed) {
                destination.complete();
            }
        } else if (isPromise_1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.closed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) {
                return destination.error(err);
            }).then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1.root.setTimeout(function () {
                    throw err;
                });
            });
            return destination;
        } else if (result && typeof result[iterator_1.$$iterator] === 'function') {
            var iterator = result[iterator_1.$$iterator]();
            do {
                var item = iterator.next();
                if (item.done) {
                    destination.complete();
                    break;
                }
                destination.next(item.value);
                if (destination.closed) {
                    break;
                }
            } while (true);
        } else if (result && typeof result[observable_1.$$observable] === 'function') {
            var obs = result[observable_1.$$observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
            } else {
                return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        } else {
            var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
            destination.error(new TypeError(msg));
        }
        return null;
    }
    exports.subscribeToResult = subscribeToResult;
    

    return module.exports;
});
System.registerDynamic("rxjs/util/isArray.js", [], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  

  return module.exports;
});
System.registerDynamic("rxjs/util/isObject.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;
    

    return module.exports;
});
System.registerDynamic("rxjs/util/isFunction.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    

    return module.exports;
});
System.registerDynamic("rxjs/util/tryCatch.js", ["./errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var errorObject_1 = $__require("./errorObject");
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;
    ;
    

    return module.exports;
});
System.registerDynamic("rxjs/util/errorObject.js", [], true, function ($__require, exports, module) {
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  var define,
      global = this || self,
      GLOBAL = global;
  exports.errorObject = { e: {} };
  

  return module.exports;
});
System.registerDynamic("rxjs/util/UnsubscriptionError.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    

    return module.exports;
});
System.registerDynamic('rxjs/Subscription.js', ['./util/isArray', './util/isObject', './util/isFunction', './util/tryCatch', './util/errorObject', './util/UnsubscriptionError'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var isArray_1 = $__require('./util/isArray');
    var isObject_1 = $__require('./util/isObject');
    var isFunction_1 = $__require('./util/isFunction');
    var tryCatch_1 = $__require('./util/tryCatch');
    var errorObject_1 = $__require('./util/errorObject');
    var UnsubscriptionError_1 = $__require('./util/UnsubscriptionError');
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.closed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            this.closed = true;
            var _a = this,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this._subscriptions = null;
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject_1.errorObject.e);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `closed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === Subscription.EMPTY) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var sub = teardown;
            switch (typeof teardown) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
                        break;
                    } else if (this.closed) {
                        sub.unsubscribe();
                    } else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            // HACK: This might be redundant because of the logic in `add()`
            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    

    return module.exports;
});
System.registerDynamic("rxjs/Observer.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    exports.empty = {
        closed: true,
        next: function (value) {},
        error: function (err) {
            throw err;
        },
        complete: function () {}
    };
    

    return module.exports;
});
System.registerDynamic('rxjs/util/root.js', [], true, function ($__require, exports, module) {
    "use strict";
    /**
     * window: browser in DOM main thread
     * self: browser in WebWorker
     * global: Node.js/other
     */

    var define,
        global = this || self,
        GLOBAL = global;
    exports.root = typeof window == 'object' && window.window === window && window || typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global;
    if (!exports.root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
    

    return module.exports;
});
System.registerDynamic('rxjs/symbol/rxSubscriber.js', ['../util/root'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('../util/root');
    var Symbol = root_1.root.Symbol;
    exports.$$rxSubscriber = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
    

    return module.exports;
});
System.registerDynamic('rxjs/Subscriber.js', ['./util/isFunction', './Subscription', './Observer', './symbol/rxSubscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = $__require('./util/isFunction');
    var Subscription_1 = $__require('./Subscription');
    var Observer_1 = $__require('./Observer');
    var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        } else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return this;
        };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            _super.call(this);
            this._parent = _parent;
            var next;
            var context = this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                } else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    

    return module.exports;
});
System.registerDynamic("rxjs/OuterSubscriber.js", ["./Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require("./Subscriber");
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var OuterSubscriber = function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            _super.apply(this, arguments);
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber_1.Subscriber);
    exports.OuterSubscriber = OuterSubscriber;
    

    return module.exports;
});
System.registerDynamic('rxjs/operator/mergeMap.js', ['../util/subscribeToResult', '../OuterSubscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var subscribeToResult_1 = $__require('../util/subscribeToResult');
    var OuterSubscriber_1 = $__require('../OuterSubscriber');
    /* tslint:disable:max-line-length */
    /**
     * Projects each source value to an Observable which is merged in the output
     * Observable.
     *
     * <span class="informal">Maps each value to an Observable, then flattens all of
     * these inner Observables using {@link mergeAll}.</span>
     *
     * <img src="./img/mergeMap.png" width="100%">
     *
     * Returns an Observable that emits items based on applying a function that you
     * supply to each item emitted by the source Observable, where that function
     * returns an Observable, and then merging those resulting Observables and
     * emitting the results of this merger.
     *
     * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var result = letters.mergeMap(x =>
     *   Rx.Observable.interval(1000).map(i => x+i)
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following:
     * // a0
     * // b0
     * // c0
     * // a1
     * // b1
     * // c1
     * // continues to list a,b,c with respective ascending integers
     *
     * @see {@link concatMap}
     * @see {@link exhaustMap}
     * @see {@link merge}
     * @see {@link mergeAll}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     * @see {@link switchMap}
     *
     * @param {function(value: T, ?index: number): Observable} project A function
     * that, when applied to an item emitted by the source Observable, returns an
     * Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @return {Observable} An Observable that emits the result of applying the
     * projection function (and the optional `resultSelector`) to each item emitted
     * by the source Observable and merging the results of the Observables obtained
     * from this transformation.
     * @method mergeMap
     * @owner Observable
     */
    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
            resultSelector = null;
        }
        return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
    }
    exports.mergeMap = mergeMap;
    var MergeMapOperator = function () {
        function MergeMapOperator(project, resultSelector, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            this.project = project;
            this.resultSelector = resultSelector;
            this.concurrent = concurrent;
        }
        MergeMapOperator.prototype.call = function (observer, source) {
            return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
        };
        return MergeMapOperator;
    }();
    exports.MergeMapOperator = MergeMapOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MergeMapSubscriber = function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            _super.call(this, destination);
            this.project = project;
            this.resultSelector = resultSelector;
            this.concurrent = concurrent;
            this.hasCompleted = false;
            this.buffer = [];
            this.active = 0;
            this.index = 0;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            } else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (this.resultSelector) {
                this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
            } else {
                this.destination.next(innerValue);
            }
        };
        MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
            var result;
            try {
                result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.MergeMapSubscriber = MergeMapSubscriber;
    

    return module.exports;
});
System.registerDynamic('rxjs/add/operator/mergeMap.js', ['../../Observable', '../../operator/mergeMap'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var mergeMap_1 = $__require('../../operator/mergeMap');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
  

  return module.exports;
});
System.registerDynamic("ng2-adal/services/authHttp.service.js", ["@angular/core", "@angular/http", "rxjs/Observable", "./adal.service", "rxjs/add/operator/catch", "rxjs/add/operator/map", "rxjs/add/operator/mergeMap"], true, function ($__require, exports, module) {
    /**
     * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
     * @version v1.0.1
     * @link https://github.com/sureshchahal/angular2-adal#readme
     * @license MIT
     */
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var http_1 = $__require("@angular/http");
    var Observable_1 = $__require("rxjs/Observable");
    var adal_service_1 = $__require("./adal.service");
    $__require("rxjs/add/operator/catch");
    $__require("rxjs/add/operator/map");
    $__require("rxjs/add/operator/mergeMap");
    var AuthHttp = function () {
        function AuthHttp(http, adalService) {
            this.http = http;
            this.adalService = adalService;
        }
        AuthHttp.prototype.get = function (url, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Get });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.post = function (url, body, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, body: body });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.delete = function (url, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Delete });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.patch = function (url, body, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Patch, body: body });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.put = function (url, body, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Put, body: body });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.head = function (url, options) {
            var options1 = new http_1.RequestOptions({ method: http_1.RequestMethod.Put });
            options1 = options1.merge(options);
            return this.sendRequest(url, options1);
        };
        AuthHttp.prototype.sendRequest = function (url, options) {
            var _this = this;
            // make a copy
            var options1 = new http_1.RequestOptions();
            options1.method = options.method;
            options1 = options1.merge(options);
            var resource = this.adalService.GetResourceForEndpoint(url);
            var authenticatedCall;
            if (resource) {
                if (this.adalService.userInfo.isAuthenticated) {
                    authenticatedCall = this.adalService.acquireToken(resource).flatMap(function (token) {
                        if (options1.headers == null) {
                            options1.headers = new http_1.Headers();
                        }
                        options1.headers.set('Authorization', 'Bearer ' + token);
                        return _this.http.request(url, options1).catch(_this.handleError);
                    });
                } else {
                    authenticatedCall = Observable_1.Observable.throw(new Error('User Not Authenticated.'));
                }
            } else {
                authenticatedCall = this.http.request(url, options).map(this.extractData).catch(this.handleError);
            }
            return authenticatedCall;
        };
        AuthHttp.prototype.extractData = function (res) {
            if (res.status < 200 || res.status >= 300) {
                throw new Error('Bad response status: ' + res.status);
            }
            var body = {};
            // if there is some content, parse it
            if (res.status !== 204) {
                body = res.json();
            }
            return body || {};
        };
        AuthHttp.prototype.handleError = function (error) {
            // in a real world app, we might send the error to remote logging infrastructure
            console.error(JSON.stringify(error)); // log to console instead
            return Observable_1.Observable.throw(error);
        };
        return AuthHttp;
    }();
    AuthHttp = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [http_1.Http, adal_service_1.AdalService])], AuthHttp);
    exports.AuthHttp = AuthHttp;

    

    return module.exports;
});
System.registerDynamic("ng2-adal/modules/authHttp.module.js", ["@angular/core", "./adal.module", "./../services/authHttp.service"], true, function ($__require, exports, module) {
    /**
     * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
     * @version v1.0.1
     * @link https://github.com/sureshchahal/angular2-adal#readme
     * @license MIT
     */
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var adal_module_1 = $__require("./adal.module");
    var authHttp_service_1 = $__require("./../services/authHttp.service");
    var AuthHttpModule = function () {
        function AuthHttpModule() {}
        return AuthHttpModule;
    }();
    AuthHttpModule = __decorate([core_1.NgModule({
        imports: [adal_module_1.AdalModule],
        exports: [],
        declarations: [],
        providers: [authHttp_service_1.AuthHttp]
    }), __metadata("design:paramtypes", [])], AuthHttpModule);
    exports.AuthHttpModule = AuthHttpModule;

    

    return module.exports;
});
System.registerDynamic("ng2-adal/modules.js", ["./modules/adal.module", "./modules/authHttp.module"], true, function ($__require, exports, module) {
  /**
   * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
   * @version v1.0.1
   * @link https://github.com/sureshchahal/angular2-adal#readme
   * @license MIT
   */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var adal_module_1 = $__require("./modules/adal.module");
  exports.AdalModule = adal_module_1.AdalModule;
  var authHttp_module_1 = $__require("./modules/authHttp.module");
  exports.AuthHttpModule = authHttp_module_1.AuthHttpModule;

  

  return module.exports;
});
System.registerDynamic("ng2-adal/core.js", ["./services", "./modules"], true, function ($__require, exports, module) {
  /**
   * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
   * @version v1.0.1
   * @link https://github.com/sureshchahal/angular2-adal#readme
   * @license MIT
   */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var services_1 = $__require("./services");
  exports.AdalService = services_1.AdalService;
  exports.AuthHttp = services_1.AuthHttp;
  var modules_1 = $__require("./modules");
  exports.AdalModule = modules_1.AdalModule;
  exports.AuthHttpModule = modules_1.AuthHttpModule;

  

  return module.exports;
});
//# sourceMappingURL=ng2-adal.js.map