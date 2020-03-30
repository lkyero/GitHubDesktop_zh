module.exports = function (e) {
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  var t = {};
  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {
    Object.defineProperty(e, '__esModule', {
      value: !0
    })
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e['default']
    } : function () {
      return e
    };
    return n.d(t, 'a', t), t
  }, n.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, n.p = '', n(n.s = 134)
}([function (e) {
  e.exports = require('path')
}, function (e, n, t) {
  function r(e) {
    function n(n) {
      return m.apply(e, n)
    }

    function t() {
      return this instanceof t ? (f.apply(this, arguments), this) : t.apply(Object.create(t.prototype), arguments)
    }

    function a() {
      return this instanceof a ? (h.apply(this, arguments), this) : a.apply(Object.create(a.prototype), arguments)
    }

    function l(e, n, t, r) {
      function a(e, n, t, r) {
        return b(e, n, t, function (s) {
          s && ('EMFILE' === s.code || 'ENFILE' === s.code) ? o([a, [e, n, t, r]]) : ('function' == typeof r && r.apply(this, arguments), i())
        })
      }
      return 'function' == typeof t && (r = t, t = null), a(e, n, t, r)
    }
    s(e), e.gracefulify = r, e.createReadStream = function (n, t) {
      return new e.ReadStream(n, t)
    }, e.createWriteStream = function (n, t) {
      return new e.WriteStream(n, t)
    };
    var c = e.readFile;
    e.readFile = function (e, n, t) {
      function r(e, n, t) {
        return c(e, n, function (a) {
          a && ('EMFILE' === a.code || 'ENFILE' === a.code) ? o([r, [e, n, t]]) : ('function' == typeof t && t.apply(this, arguments), i())
        })
      }
      return 'function' == typeof n && (t = n, n = null), r(e, n, t)
    };
    var p = e.writeFile;
    e.writeFile = function (e, n, t, r) {
      function a(e, n, t, r) {
        return p(e, n, t, function (s) {
          s && ('EMFILE' === s.code || 'ENFILE' === s.code) ? o([a, [e, n, t, r]]) : ('function' == typeof r && r.apply(this, arguments), i())
        })
      }
      return 'function' == typeof t && (r = t, t = null), a(e, n, t, r)
    };
    var u = e.appendFile;
    u && (e.appendFile = function (e, n, t, r) {
      function a(e, n, t, r) {
        return u(e, n, t, function (s) {
          s && ('EMFILE' === s.code || 'ENFILE' === s.code) ? o([a, [e, n, t, r]]) : ('function' == typeof r && r.apply(this, arguments), i())
        })
      }
      return 'function' == typeof t && (r = t, t = null), a(e, n, t, r)
    });
    var m = e.readdir;
    if (e.readdir = function (e, t, r) {
        function a(e, t) {
          t && t.sort && t.sort(), e && ('EMFILE' === e.code || 'ENFILE' === e.code) ? o([n, [s]]) : ('function' == typeof r && r.apply(this, arguments), i())
        }
        var s = [e];
        return 'function' == typeof t ? r = t : s.push(t), s.push(a), n(s)
      }, 'v0.8' === process.version.substr(0, 4)) {
      var g = d(e);
      t = g.ReadStream, a = g.WriteStream
    }
    var f = e.ReadStream;
    f && (t.prototype = Object.create(f.prototype), t.prototype.open = function () {
      var e = this;
      l(e.path, e.flags, e.mode, function (n, t) {
        n ? (e.autoClose && e.destroy(), e.emit('error', n)) : (e.fd = t, e.emit('open', t), e.read())
      })
    });
    var h = e.WriteStream;
    h && (a.prototype = Object.create(h.prototype), a.prototype.open = function () {
      var e = this;
      l(e.path, e.flags, e.mode, function (n, t) {
        n ? (e.destroy(), e.emit('error', n)) : (e.fd = t, e.emit('open', t))
      })
    }), Object.defineProperty(e, 'ReadStream', {
      get: function () {
        return t
      },
      set: function (e) {
        t = e
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, 'WriteStream', {
      get: function () {
        return a
      },
      set: function (e) {
        a = e
      },
      enumerable: !0,
      configurable: !0
    });
    var y = t;
    Object.defineProperty(e, 'FileReadStream', {
      get: function () {
        return y
      },
      set: function (e) {
        y = e
      },
      enumerable: !0,
      configurable: !0
    });
    var _ = a;
    Object.defineProperty(e, 'FileWriteStream', {
      get: function () {
        return _
      },
      set: function (e) {
        _ = e
      },
      enumerable: !0,
      configurable: !0
    });
    var b = e.open;
    return e.open = l, e
  }

  function o(e) {
    m('ENQUEUE', e[0].name, e[1]), global[p].push(e)
  }

  function i() {
    var e = global[p].shift();
    e && (m('RETRY', e[0].name, e[1]), e[0].apply(null, e[1]))
  }
  var a = t(5),
    s = t(104),
    d = t(102),
    l = t(101),
    c = t(6),
    p, u;
  'function' == typeof Symbol && 'function' == typeof Symbol.for ? (p = Symbol.for('graceful-fs.queue'), u = Symbol.for('graceful-fs.previous')) : (p = '___graceful-fs.queue', u = '___graceful-fs.previous');
  var m = function () {};
  if (c.debuglog ? m = c.debuglog('gfs4') : /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') && (m = function () {
      var e = c.format.apply(c, arguments);
      e = 'GFS4: ' + e.split(/\n/).join('\nGFS4: '), console.error(e)
    }), !global[p]) {
    var g = [];
    Object.defineProperty(global, p, {
      get: function () {
        return g
      }
    }), a.close = function (e) {
      function n(n, t) {
        return e.call(a, n, function (e) {
          e || i(), 'function' == typeof t && t.apply(this, arguments)
        })
      }
      return Object.defineProperty(n, u, {
        value: e
      }), n
    }(a.close), a.closeSync = function (e) {
      function n() {
        e.apply(a, arguments), i()
      }
      return Object.defineProperty(n, u, {
        value: e
      }), n
    }(a.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') && process.on('exit', function () {
      m(global[p]), t(42).equal(global[p].length, 0)
    })
  }
  e.exports = r(l(a)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !a.__patched && (e.exports = r(a), a.__patched = !0)
}, function (e, n) {
  'use strict';
  n.fromCallback = function (e) {
    return Object.defineProperty(function () {
      return 'function' == typeof arguments[arguments.length - 1] ? void e.apply(this, arguments) : new Promise((n, t) => {
        arguments[arguments.length] = (e, r) => e ? t(e) : void n(r), arguments.length++, e.apply(this, arguments)
      })
    }, 'name', {
      value: e.name
    })
  }, n.fromPromise = function (e) {
    return Object.defineProperty(function () {
      const n = arguments[arguments.length - 1];
      return 'function' == typeof n ? void e.apply(this, arguments).then((e) => n(null, e), n) : e.apply(this, arguments)
    }, 'name', {
      value: e.name
    })
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = r(t(99)),
    i = t(98);
  e.exports = {
    mkdirs: o,
    mkdirsSync: i,
    mkdirp: o,
    mkdirpSync: i,
    ensureDir: o,
    ensureDirSync: i
  }
}, function (e) {
  e.exports = require('electron')
}, function (e) {
  e.exports = require('fs')
}, function (e) {
  e.exports = require('util')
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromPromise,
    o = t(43);
  e.exports = {
    pathExists: r(function (e) {
      return o.access(e).then(() => !0).catch(() => !1)
    }),
    pathExistsSync: o.existsSync
  }
}, function (e) {
  e.exports = require('stream')
}, function (e, n, t) {
  var r = t(6),
    o = t(129),
    i = t(128),
    a = t(5),
    s = t(127).StringDecoder,
    d = t(8).Stream,
    l = t(21);
  n.setLevels = function (e, t, r) {
    this;
    return t && Object.keys(t).forEach(function (n) {
      delete e[n]
    }), e.levels = r || l.npm.levels, e.padLevels && (e.levelLength = n.longestElement(Object.keys(e.levels))), Object.keys(e.levels).forEach(function (n) {
      return 'log' === n ? void console.warn('Log level named "log" will clash with the method "log". Consider using a different name.') : void(e[n] = function () {
        var t = [n].concat(Array.prototype.slice.call(arguments));
        e.log.apply(e, t)
      })
    }), e
  }, n.longestElement = function (e) {
    return Math.max.apply(null, e.map(function (e) {
      return e.length
    }))
  }, n.clone = function (e) {
    var t = {};
    if (e instanceof Error) return t = {
      message: e.message
    }, Object.getOwnPropertyNames(e).forEach(function (n) {
      t[n] = e[n]
    }), t;
    if (!(e instanceof Object)) return e;
    if (e instanceof Date) return new Date(e.getTime());
    for (var r in e) Array.isArray(e[r]) ? t[r] = e[r].slice(0) : e[r] instanceof Buffer ? t[r] = e[r].slice(0) : 'function' == typeof e[r] ? 'function' == typeof e[r] && (t[r] = e[r]) : t[r] = e[r] instanceof Object ? n.clone(e[r]) : e[r];
    return t
  }, n.log = function (e) {
    var t = 'function' == typeof e.timestamp ? e.timestamp : n.timestamp,
      o = e.timestamp ? t() : null,
      a = void 0 === e.showLevel || e.showLevel,
      s = null === e.meta || void 0 === e.meta || e.meta instanceof Error ? e.meta || null : n.clone(i.decycle(e.meta)),
      d;
    if (e.raw) return 'object' != typeof s && null != s && (s = {
      meta: s
    }), d = n.clone(s) || {}, d.level = e.level, d.message = e.message.stripColors ? e.message.stripColors : e.message, JSON.stringify(d);
    if (e.json || !0 === e.logstash) {
      if ('object' != typeof s && null != s && (s = {
          meta: s
        }), d = n.clone(s) || {}, d.level = e.level, d.message = d.message || '', e.label && (d.label = e.label), e.message && (d.message = e.message), o && (d.timestamp = o), !0 === e.logstash) {
        var c = {};
        void 0 !== d.message && (c['@message'] = d.message, delete d.message), void 0 !== d.timestamp && (c['@timestamp'] = d.timestamp, delete d.timestamp), c['@fields'] = n.clone(d), d = c
      }
      return 'function' == typeof e.stringify ? e.stringify(d) : JSON.stringify(d, function (e, n) {
        return n instanceof Buffer ? n.toString('base64') : n
      })
    }
    if ('function' == typeof e.formatter) return e.meta = s, e.formatter(n.clone(e)) + '';
    if (d = o ? o + ' - ' : '', a && (d += 'all' === e.colorize || 'level' === e.colorize || !0 === e.colorize ? l.colorize(e.level) : e.level), d += e.align ? '\t' : '', d += o || a ? ': ' : '', d += e.label ? '[' + e.label + '] ' : '', d += 'all' === e.colorize || 'message' === e.colorize ? l.colorize(e.level, e.message) : e.message, null !== s && void 0 !== s)
      if (s && s instanceof Error && s.stack && (s = s.stack), 'object' != typeof s) d += ' ' + s;
      else if (0 < Object.keys(s).length)
      if ('function' == typeof e.prettyPrint) d += ' ' + e.prettyPrint(s);
      else if (e.prettyPrint) d += ' \n' + r.inspect(s, !1, e.depth || null, e.colorize);
    else if (e.humanReadableUnhandledException && 5 === Object.keys(s).length && s.hasOwnProperty('date') && s.hasOwnProperty('process') && s.hasOwnProperty('os') && s.hasOwnProperty('trace') && s.hasOwnProperty('stack')) {
      var p = s.stack;
      delete s.stack, delete s.trace, d += ' ' + n.serialize(s), p && (d += '\n' + p.join('\n'))
    } else d += ' ' + n.serialize(s);
    return d
  }, n.capitalize = function (e) {
    return e && e[0].toUpperCase() + e.slice(1)
  }, n.hash = function (e) {
    return o.createHash('sha1').update(e).digest('hex')
  }, n.pad = function (e) {
    return 10 > e ? '0' + e.toString(10) : e.toString(10)
  }, n.timestamp = function () {
    return new Date().toISOString()
  }, n.serialize = function (e, t) {
    if ('symbol' == typeof t && (t = t.toString()), 'symbol' == typeof e && (e = e.toString()), null === e ? e = 'null' : void 0 === e ? e = 'undefined' : !1 === e && (e = 'false'), 'object' != typeof e) return t ? t + '=' + e : e;
    if (e instanceof Buffer) return t ? t + '=' + e.toString('base64') : e.toString('base64');
    for (var r = '', o = Object.keys(e), a = o.length, s = 0; s < a; s++) {
      if (Array.isArray(e[o[s]])) {
        r += o[s] + '=[';
        for (var i = 0, d = e[o[s]].length; i < d; i++) r += n.serialize(e[o[s]][i]), i < d - 1 && (r += ', ');
        r += ']'
      } else r += e[o[s]] instanceof Date ? o[s] + '=' + e[o[s]] : n.serialize(e[o[s]], o[s]);
      s < a - 1 && (r += ', ')
    }
    return r
  }, n.tailFile = function (e, n) {
    var t = new Buffer(65536),
      r = new s('utf8'),
      o = new d,
      c = '',
      p = 0,
      u = 0;
    return -1 === e.start && delete e.start, o.readable = !0, o.destroy = function () {
      o.destroyed = !0, o.emit('end'), o.emit('close')
    }, a.open(e.file, 'a+', '0644', function (i, s) {
      return i ? (n ? n(i) : o.emit('error', i), void o.destroy()) : void
      function d() {
        return o.destroyed ? void a.close(s) : a.read(s, t, 0, t.length, p, function (a, s) {
          if (a) return n ? n(a) : o.emit('error', a), void o.destroy();
          if (!s) return c && ((null == e.start || u > e.start) && (n ? n(null, c) : o.emit('line', c)), u++, c = ''), setTimeout(d, 1e3);
          var m = r.write(t.slice(0, s));
          n || o.emit('data', m);
          for (var m = (c + m).split(/\n+/), g = m.length - 1, l = 0; l < g; l++)(null == e.start || u > e.start) && (n ? n(null, m[l]) : o.emit('line', m[l])), u++;
          return c = m[g], p += s, d()
        })
      }()
    }), n ? o.destroy : o
  }, n.stringArrayToSet = function (e, n) {
    return 'undefined' == typeof n && (n = 'Cannot make set from Array with non-string elements'), e.reduce(function (e, t) {
      if (!('string' == typeof t || t instanceof String)) throw new Error(n);
      return e[t] = !0, e
    }, Object.create(null))
  }
}, function (e) {
  e.exports = require('os')
}, function (e, n) {
  function t(e, n, t) {
    if (n in e) return e[n];
    if (3 === arguments.length) return t;
    throw new Error('"' + n + '" is a required argument.')
  }

  function r(e) {
    var n = e.match(l);
    return n ? {
      scheme: n[1],
      auth: n[2],
      host: n[3],
      port: n[4],
      path: n[5]
    } : null
  }

  function o(e) {
    var n = '';
    return e.scheme && (n += e.scheme + ':'), n += '//', e.auth && (n += e.auth + '@'), e.host && (n += e.host), e.port && (n += ':' + e.port), e.path && (n += e.path), n
  }

  function i(e) {
    var t = e,
      a = r(e);
    if (a) {
      if (!a.path) return e;
      t = a.path
    }
    for (var s = n.isAbsolute(t), d = t.split(/\/+/), l = 0, c = d.length - 1, i; 0 <= c; c--) i = d[c], '.' === i ? d.splice(c, 1) : '..' === i ? l++ : 0 < l && ('' === i ? (d.splice(c + 1, l), l = 0) : (d.splice(c, 2), l--));
    return t = d.join('/'), '' === t && (t = s ? '/' : '.'), a ? (a.path = t, o(a)) : t
  }

  function a(e) {
    return e
  }

  function s(e) {
    if (!e) return !1;
    var n = e.length;
    if (9 > n) return !1;
    if (95 !== e.charCodeAt(n - 1) || 95 !== e.charCodeAt(n - 2) || 111 !== e.charCodeAt(n - 3) || 116 !== e.charCodeAt(n - 4) || 111 !== e.charCodeAt(n - 5) || 114 !== e.charCodeAt(n - 6) || 112 !== e.charCodeAt(n - 7) || 95 !== e.charCodeAt(n - 8) || 95 !== e.charCodeAt(n - 9)) return !1;
    for (var t = n - 10; 0 <= t; t--)
      if (36 !== e.charCodeAt(t)) return !1;
    return !0
  }

  function d(e, n) {
    return e === n ? 0 : e > n ? 1 : -1
  }
  n.getArg = t;
  var l = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
    c = /^data:.+\,.+$/;
  n.urlParse = r, n.urlGenerate = o, n.normalize = i, n.join = function (e, n) {
    '' === e && (e = '.'), '' === n && (n = '.');
    var t = r(n),
      a = r(e);
    if (a && (e = a.path || '/'), t && !t.scheme) return a && (t.scheme = a.scheme), o(t);
    if (t || n.match(c)) return n;
    if (a && !a.host && !a.path) return a.host = n, o(a);
    var s = '/' === n.charAt(0) ? n : i(e.replace(/\/+$/, '') + '/' + n);
    return a ? (a.path = s, o(a)) : s
  }, n.isAbsolute = function (e) {
    return '/' === e.charAt(0) || !!e.match(l)
  }, n.relative = function (e, n) {
    '' === e && (e = '.'), e = e.replace(/\/$/, '');
    for (var t = 0, r; 0 !== n.indexOf(e + '/');) {
      if (r = e.lastIndexOf('/'), 0 > r) return n;
      if (e = e.slice(0, r), e.match(/^([^\/]+:\/)?\/*$/)) return n;
      ++t
    }
    return Array(t + 1).join('../') + n.substr(e.length + 1)
  };
  var p = function () {
    var e = Object.create(null);
    return !('__proto__' in e)
  }();
  n.toSetString = p ? a : function (e) {
    return s(e) ? '$' + e : e
  }, n.fromSetString = p ? a : function (e) {
    return s(e) ? e.slice(1) : e
  }, n.compareByOriginalPositions = function (e, n, t) {
    var r = e.source - n.source;
    return 0 == r ? (r = e.originalLine - n.originalLine, 0 != r) ? r : (r = e.originalColumn - n.originalColumn, 0 != r || t) ? r : (r = e.generatedColumn - n.generatedColumn, 0 != r) ? r : (r = e.generatedLine - n.generatedLine, 0 == r ? e.name - n.name : r) : r
  }, n.compareByGeneratedPositionsDeflated = function (e, n, t) {
    var r = e.generatedLine - n.generatedLine;
    return 0 == r ? (r = e.generatedColumn - n.generatedColumn, 0 != r || t) ? r : (r = e.source - n.source, 0 != r) ? r : (r = e.originalLine - n.originalLine, 0 != r) ? r : (r = e.originalColumn - n.originalColumn, 0 == r ? e.name - n.name : r) : r
  }, n.compareByGeneratedPositionsInflated = function (e, n) {
    var t = e.generatedLine - n.generatedLine;
    return 0 === t ? (t = e.generatedColumn - n.generatedColumn, 0 !== t) ? t : (t = d(e.source, n.source), 0 !== t) ? t : (t = e.originalLine - n.originalLine, 0 !== t) ? t : (t = e.originalColumn - n.originalColumn, 0 === t ? d(e.name, n.name) : t) : t
  }
}, function (e, n, t) {
  var r = t(14),
    o = t(6),
    i = n.Transport = function (e) {
      r.EventEmitter.call(this), e = e || {}, this.silent = e.silent || !1, this.raw = e.raw || !1, this.name = e.name || this.name, this.formatter = e.formatter, this.level = e.level, this.handleExceptions = e.handleExceptions || !1, this.exceptionsLevel = e.exceptionsLevel || 'error', this.humanReadableUnhandledException = e.humanReadableUnhandledException || !1
    };
  o.inherits(i, r.EventEmitter), i.prototype.formatQuery = function (e) {
    return e
  }, i.prototype.normalizeQuery = function (e) {
    return e = e || {}, e.rows = e.rows || e.limit || 10, e.start = e.start || 0, e.until = e.until || new Date, 'object' != typeof e.until && (e.until = new Date(e.until)), e.from = e.from || e.until - 86400000, 'object' != typeof e.from && (e.from = new Date(e.from)), e.order = e.order || 'desc', e.fields = e.fields, e
  }, i.prototype.formatResults = function (e) {
    return e
  }, i.prototype.logException = function (e, n, t) {
    function r() {
      i || (i = !0, o.removeListener('logged', r), o.removeListener('error', r), t())
    }
    var o = this,
      i;
    return this.silent ? t() : void(this.once('logged', r), this.once('error', r), this.log(o.exceptionsLevel, e, n, function () {}))
  }
}, function (e, n, t) {
  function r(e) {
    var n = function e() {
      return o.apply(e, arguments)
    };
    return n._styles = e, n.__proto__ = m, n
  }

  function o() {
    var e = arguments,
      n = e.length,
      t = 0 !== n && arguments[0] + '';
    if (1 < n)
      for (var r = 1; r < n; r++) t += ' ' + e[r];
    if (!s.enabled || !t) return t;
    for (var o = this._styles, d = o.length, i; d--;) i = a[o[d]], t = i.open + t.replace(i.closeRe, i.open) + i.close;
    return t
  }

  function i(e) {
    for (var n in e)(function (n) {
      s[n] = function (t) {
        return s[e[n]](t)
      }
    })(n)
  }
  var s = {};
  e.exports = s, s.themes = {};
  var a = s.styles = t(125),
    d = Object.defineProperties;
  s.supportsColor = t(124), 'undefined' == typeof s.enabled && (s.enabled = s.supportsColor), s.stripColors = s.strip = function (e) {
    return ('' + e).replace(/\x1B\[\d+m/g, '')
  };
  var l = s.stylize = function (e, n) {
      return a[n].open + e + a[n].close
    },
    c = /[|\\{}()[\]^$+*?.]/g,
    p = function (e) {
      if ('string' != typeof e) throw new TypeError('Expected a string');
      return e.replace(c, '\\$&')
    },
    u = function () {
      var e = {};
      return a.grey = a.gray, Object.keys(a).forEach(function (n) {
        a[n].closeRe = new RegExp(p(a[n].close), 'g'), e[n] = {
          get: function () {
            return r(this._styles.concat(n))
          }
        }
      }), e
    }(),
    m = d(function () {}, u);
  s.setTheme = function (e) {
    if ('string' == typeof e) try {
      return s.themes[e] = t(123)(e), i(s.themes[e]), s.themes[e]
    } catch (e) {
      return console.log(e), e
    } else i(e)
  };
  var g = function (e, n) {
    var t = n.split('');
    return t = t.map(e), t.join('')
  };
  for (var f in s.trap = t(122), s.zalgo = t(121), s.maps = {}, s.maps.america = t(120), s.maps.zebra = t(119), s.maps.rainbow = t(118), s.maps.random = t(117), s.maps)(function (e) {
    s[e] = function (n) {
      return g(s.maps[e], n)
    }
  })(f);
  d(s, function () {
    var e = {};
    return Object.keys(u).forEach(function (n) {
      e[n] = {
        get: function () {
          return r([n])
        }
      }
    }), e
  }())
}, function (e) {
  e.exports = require('events')
}, function (e, n, t) {
  var r = n;
  r.version = t(132).version, r.transports = t(131);
  var o = t(9);
  r.hash = o.hash, r.clone = o.clone, r.longestElement = o.longestElement, r.exception = t(45), r.config = t(21), r.addColors = r.config.addColors, r.Container = t(106).Container, r.Logger = t(105).Logger, r.Transport = t(12).Transport, r.loggers = new r.Container;
  var i = new r.Logger({
    transports: [new r.transports.Console]
  });
  o.setLevels(r, null, i.levels), ['log', 'query', 'stream', 'add', 'remove', 'clear', 'profile', 'startTimer', 'extend', 'cli', 'handleExceptions', 'unhandleExceptions', 'configure'].forEach(function (e) {
    r[e] = function () {
      return i[e].apply(i, arguments)
    }
  }), r.cli = function () {
    return r.padLevels = !0, o.setLevels(r, i.levels, r.config.cli.levels), i.setLevels(r.config.cli.levels), r.config.addColors(r.config.cli.colors), i.transports.console && (i.transports.console.colorize = !0, i.transports.console.timestamp = !1), r
  }, r.setLevels = function (e) {
    o.setLevels(r, i.levels, e), i.setLevels(e)
  }, Object.defineProperty(r, 'level', {
    get: function () {
      return i.level
    },
    set: function (e) {
      i.level = e, Object.keys(i.transports).forEach(function (n) {
        i.transports[n].level = e
      })
    }
  }), ['emitErrs', 'exitOnError', 'padLevels', 'levelLength', 'stripColors'].forEach(function (e) {
    Object.defineProperty(r, e, {
      get: function () {
        return i[e]
      },
      set: function (n) {
        i[e] = n
      }
    })
  }), Object.defineProperty(r, 'default', {
    get: function () {
      return {
        transports: i.transports,
        exceptionHandlers: i.exceptionHandlers
      }
    }
  })
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(95);
  e.exports = {
    remove: r(o),
    removeSync: o.sync
  }
}, function (e) {
  (function () {
    var n;
    e.exports = n = function () {
      function e(e) {
        this.disposalAction = e
      }
      return e.prototype.disposed = !1, e.isDisposable = function (e) {
        return 'function' == typeof (null == e ? void 0 : e.dispose)
      }, e.prototype.dispose = function () {
        this.disposed || (this.disposed = !0, 'function' == typeof this.disposalAction && this.disposalAction(), this.disposalAction = null)
      }, e
    }()
  }).call(this)
}, function (e) {
  e.exports = require('url')
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(36);
  e.exports = {
    readJson: r(o.readFile),
    readJsonSync: o.readFileSync,
    writeJson: r(o.writeFile),
    writeJsonSync: o.writeFileSync
  }
}, function (e, n, t) {
  'use strict';
  e.exports = Object.assign({}, t(43), t(41), t(37), t(96), t(94), t(88), t(3), t(85), t(84), t(83), t(7), t(16));
  const r = t(5);
  Object.getOwnPropertyDescriptor(r, 'promises') && Object.defineProperty(e.exports, 'promises', {
    get() {
      return r.promises
    }
  })
}, function (e, n, t) {
  function r(e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return n.forEach(function (n) {
      for (var t = Object.keys(n), r = 0; r < t.length; r++) e[t[r]] = n[t[r]]
    }), e
  }
  var o = t(126);
  o.enabled = !0;
  var i = n,
    a = n.allColors = {};
  i.addColors = function (e) {
    r(a, e)
  }, i.colorize = function (e, n) {
    'undefined' == typeof n && (n = e);
    var t = n;
    if (a[e] instanceof Array)
      for (var r = 0, i = a[e].length; r < i; ++r) t = o[a[e][r]](t);
    else if (a[e].match(/\s/)) {
      for (var s = a[e].split(/\s+/), r = 0; r < s.length; ++r) t = o[s[r]](t);
      a[e] = s
    } else t = o[a[e]](t);
    return t
  }, i.cli = t(116), i.npm = t(115), i.syslog = t(114), i.addColors(i.cli.colors), i.addColors(i.npm.colors), i.addColors(i.syslog.colors)
}, function (e) {
  e.exports = require('child_process')
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(18),
    o = t(4);
  n.openDirectorySafe = function (e) {
    o.shell.openItem(e)
  }
}, function (e, n) {
  'use strict';

  function t(e) {
    return e.id || e.label || e.role || 'unknown'
  }

  function r(e, n = '@', o = new Set) {
    for (const i of e) {
      let e = 0,
        a = i.id;
      if (!a)
        do a = `${n}.${t(i)}${e++||''}`; while (o.has(a));
      if (i.id = a, o.add(a), i.submenu) {
        const e = i.submenu;
        r(e, i.id, o)
      }
    }
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.ensureItemIds = r
}, function (e, n, t) {
  'use strict';

  function r(e) {
    for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t])
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), r(t(63)), r(t(24)), r(t(59)), r(t(58))
}, function (e, n) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.now = function () {
    const e = process.hrtime();
    return 1e3 * e[0] + e[1] / 1e6
  }
}, function (e, n) {
  'use strict';

  function t(e) {
    throw new Error(e)
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.fatalError = t, n.assertNever = function (e, n) {
    throw new Error(n)
  }, n.forceUnwrap = function (e, n) {
    return null == n ? t(e) : n
  }
}, function (e, n) {
  'use strict';

  function t(e) {
    return e.isFullScreen() ? 'full-screen' : e.isMaximized() ? 'maximized' : e.isMinimized() ? 'minimized' : e.isVisible() ? 'normal' : 'hidden'
  }

  function r(e, t) {
    e.webContents.send(n.windowStateChannelName, t)
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.windowStateChannelName = 'window-state-changed', n.getWindowState = t, n.registerWindowStateChangedEvents = function (e) {
    e.on('enter-full-screen', () => r(e, 'full-screen')), e.on('leave-full-screen', () => r(e, 'normal')), e.on('maximize', () => r(e, 'maximized')), e.on('minimize', () => r(e, 'minimized')), e.on('unmaximize', () => r(e, 'normal')), e.on('restore', () => r(e, 'normal')), e.on('hide', () => r(e, 'hidden')), e.on('show', () => {
      r(e, t(e))
    })
  }
}, function (e, n, t) {
  (function () {
    n.Emitter = t(69), n.Disposable = t(17), n.CompositeDisposable = t(68)
  }).call(this)
}, function (e, n, t) {
  function r() {
    this._array = [], this._set = a ? new Map : Object.create(null)
  }
  var o = t(11),
    i = Object.prototype.hasOwnProperty,
    a = 'undefined' != typeof Map;
  r.fromArray = function (e, n) {
    for (var t = new r, o = 0, i = e.length; o < i; o++) t.add(e[o], n);
    return t
  }, r.prototype.size = function () {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length
  }, r.prototype.add = function (e, n) {
    var t = a ? e : o.toSetString(e),
      r = a ? this.has(e) : i.call(this._set, t),
      s = this._array.length;
    (!r || n) && this._array.push(e), r || (a ? this._set.set(e, s) : this._set[t] = s)
  }, r.prototype.has = function (e) {
    if (a) return this._set.has(e);
    var n = o.toSetString(e);
    return i.call(this._set, n)
  }, r.prototype.indexOf = function (e) {
    if (a) {
      var n = this._set.get(e);
      if (0 <= n) return n
    } else {
      var t = o.toSetString(e);
      if (i.call(this._set, t)) return this._set[t]
    }
    throw new Error('"' + e + '" is not in the set.')
  }, r.prototype.at = function (e) {
    if (0 <= e && e < this._array.length) return this._array[e];
    throw new Error('No element indexed by ' + e)
  }, r.prototype.toArray = function () {
    return this._array.slice()
  }, n.ArraySet = r
}, function (e, n, t) {
  function r(e) {
    return 0 > e ? (-e << 1) + 1 : (e << 1) + 0
  }

  function o(e) {
    var n = e >> 1;
    return 1 == (1 & e) ? -n : n
  }
  var i = t(77),
    a = 5,
    s = 1 << a,
    d = s - 1,
    l = s;
  n.encode = function (e) {
    var n = '',
      t = r(e),
      o;
    do o = t & d, t >>>= a, 0 < t && (o |= l), n += i.encode(o); while (0 < t);
    return n
  }, n.decode = function (e, n, t) {
    var r = e.length,
      s = 0,
      c = 0,
      p, u;
    do {
      if (n >= r) throw new Error('Expected more digits in base 64 VLQ value.');
      if (u = i.decode(e.charCodeAt(n++)), -1 === u) throw new Error('Invalid base64 digit: ' + e.charAt(n - 1));
      p = !!(u & l), u &= d, s += u << c, c += a
    } while (p);
    t.value = o(s), t.rest = n
  }
}, function (e, n, t) {
  function r(e) {
    e || (e = {}), this._file = a.getArg(e, 'file', null), this._sourceRoot = a.getArg(e, 'sourceRoot', null), this._skipValidation = a.getArg(e, 'skipValidation', !1), this._sources = new i, this._names = new i, this._mappings = new s, this._sourcesContents = null
  }
  var o = t(31),
    a = t(11),
    i = t(30).ArraySet,
    s = t(76).MappingList;
  r.prototype._version = 3, r.fromSourceMap = function (e) {
    var n = e.sourceRoot,
      t = new r({
        file: e.file,
        sourceRoot: n
      });
    return e.eachMapping(function (e) {
      var r = {
        generated: {
          line: e.generatedLine,
          column: e.generatedColumn
        }
      };
      null != e.source && (r.source = e.source, null != n && (r.source = a.relative(n, r.source)), r.original = {
        line: e.originalLine,
        column: e.originalColumn
      }, null != e.name && (r.name = e.name)), t.addMapping(r)
    }), e.sources.forEach(function (n) {
      var r = e.sourceContentFor(n);
      null != r && t.setSourceContent(n, r)
    }), t
  }, r.prototype.addMapping = function (e) {
    var n = a.getArg(e, 'generated'),
      t = a.getArg(e, 'original', null),
      r = a.getArg(e, 'source', null),
      o = a.getArg(e, 'name', null);
    this._skipValidation || this._validateMapping(n, t, r, o), null != r && (r = r + '', !this._sources.has(r) && this._sources.add(r)), null != o && (o = o + '', !this._names.has(o) && this._names.add(o)), this._mappings.add({
      generatedLine: n.line,
      generatedColumn: n.column,
      originalLine: null != t && t.line,
      originalColumn: null != t && t.column,
      source: r,
      name: o
    })
  }, r.prototype.setSourceContent = function (e, n) {
    var t = e;
    null != this._sourceRoot && (t = a.relative(this._sourceRoot, t)), null == n ? this._sourcesContents && (delete this._sourcesContents[a.toSetString(t)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null)) : (!this._sourcesContents && (this._sourcesContents = Object.create(null)), this._sourcesContents[a.toSetString(t)] = n)
  }, r.prototype.applySourceMap = function (e, n, t) {
    var r = n;
    if (null == n) {
      if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
      r = e.file
    }
    var o = this._sourceRoot;
    null != o && (r = a.relative(o, r));
    var s = new i,
      d = new i;
    this._mappings.unsortedForEach(function (n) {
      if (n.source === r && null != n.originalLine) {
        var i = e.originalPositionFor({
          line: n.originalLine,
          column: n.originalColumn
        });
        null != i.source && (n.source = i.source, null != t && (n.source = a.join(t, n.source)), null != o && (n.source = a.relative(o, n.source)), n.originalLine = i.line, n.originalColumn = i.column, null != i.name && (n.name = i.name))
      }
      var l = n.source;
      null == l || s.has(l) || s.add(l);
      var c = n.name;
      null == c || d.has(c) || d.add(c)
    }, this), this._sources = s, this._names = d, e.sources.forEach(function (n) {
      var r = e.sourceContentFor(n);
      null != r && (null != t && (n = a.join(t, n)), null != o && (n = a.relative(o, n)), this.setSourceContent(n, r))
    }, this)
  }, r.prototype._validateMapping = function (e, n, t, r) {
    if (n && 'number' != typeof n.line && 'number' != typeof n.column) throw new Error('original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.');
    if (!(e && 'line' in e && 'column' in e && 0 < e.line && 0 <= e.column && !n && !t && !r) && !(e && 'line' in e && 'column' in e && n && 'line' in n && 'column' in n && 0 < e.line && 0 <= e.column && 0 < n.line && 0 <= n.column && t)) throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: e,
      source: t,
      original: n,
      name: r
    }))
  }, r.prototype._serializeMappings = function () {
    for (var e = 0, n = 1, t = 0, r = 0, s = 0, d = 0, l = '', c = this._mappings.toArray(), p = 0, i = c.length, u, m, g, f; p < i; p++) {
      if (m = c[p], u = '', m.generatedLine !== n)
        for (e = 0; m.generatedLine !== n;) u += ';', n++;
      else if (0 < p) {
        if (!a.compareByGeneratedPositionsInflated(m, c[p - 1])) continue;
        u += ','
      }
      u += o.encode(m.generatedColumn - e), e = m.generatedColumn, null != m.source && (f = this._sources.indexOf(m.source), u += o.encode(f - d), d = f, u += o.encode(m.originalLine - 1 - r), r = m.originalLine - 1, u += o.encode(m.originalColumn - t), t = m.originalColumn, null != m.name && (g = this._names.indexOf(m.name), u += o.encode(g - s), s = g)), l += u
    }
    return l
  }, r.prototype._generateSourcesContent = function (e, n) {
    return e.map(function (e) {
      if (!this._sourcesContents) return null;
      null != n && (e = a.relative(n, e));
      var t = a.toSetString(e);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, t) ? this._sourcesContents[t] : null
    }, this)
  }, r.prototype.toJSON = function () {
    var e = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
  }, r.prototype.toString = function () {
    return JSON.stringify(this.toJSON())
  }, n.SourceMapGenerator = r
}, function (e, n, t) {
  'use strict';

  function r(e) {
    if (!c.some((n) => e.endsWith(n))) return null;
    e.startsWith('file://') && (e = d(e));
    const n = `${e}.map`;
    if (!1, !!s.existsSync(n)) try {
      const e = s.readFileSync(n, 'utf8');
      return {
        url: a.basename(n),
        map: e
      }
    } catch (e) {}
  }

  function o(e, n) {
    return p.set(e, n), e + n.map((e) => `\n    at ${e}`).join('')
  }

  function i(e) {
    let n = p.get(e);
    return n || ((e.stack || '').toString(), n = p.get(e)), n ? u(e, n) : e.stack
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const a = t(0),
    s = t(5),
    d = t(80),
    l = t(79),
    c = ['renderer.js', 'main.js'],
    p = new WeakMap;
  let u;
  n.enableSourceMaps = function () {
    l.install({
      environment: 'node',
      handleUncaughtExceptions: !1,
      retrieveSourceMap: r
    });
    const e = Error;
    u = e.prepareStackTrace, e.prepareStackTrace = o
  }, n.withSourceMappedStack = function (e) {
    return {
      name: e.name,
      message: e.message,
      stack: i(e)
    }
  }
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(33);
  n.formatError = function (e, n) {
    return e = r.withSourceMappedStack(e), e.stack ? n ? `${n}\n${e.stack}` : e.stack.trim() : n ? `${n}\n${e.name}: ${e.message}` : `${e.name}: ${e.message}`
  }
}, function (e, n, t) {
  function r(e, n, t, s) {
    'function' == typeof n ? (t = n, n = {}) : (!n || 'object' != typeof n) && (n = {
      mode: n
    });
    var d = n.mode,
      l = n.fs || i;
    d === void 0 && (d = a & ~process.umask()), s || (s = null);
    var c = t || function () {};
    e = o.resolve(e), l.mkdir(e, d, function (t) {
      if (!t) return s = s || e, c(null, s);
      switch (t.code) {
        case 'ENOENT':
          r(o.dirname(e), n, function (t, o) {
            t ? c(t, o) : r(e, n, c, o)
          });
          break;
        default:
          l.stat(e, function (e, n) {
            e || !n.isDirectory() ? c(t, s) : c(null, s)
          });
      }
    })
  }
  var o = t(0),
    i = t(5),
    a = parseInt('0777', 8);
  e.exports = r.mkdirp = r.mkdirP = r, r.sync = function e(n, t, r) {
    t && 'object' == typeof t || (t = {
      mode: t
    });
    var s = t.mode,
      d = t.fs || i;
    s === void 0 && (s = a & ~process.umask()), r || (r = null), n = o.resolve(n);
    try {
      d.mkdirSync(n, s), r = r || n
    } catch (i) {
      switch (i.code) {
        case 'ENOENT':
          r = e(o.dirname(n), t, r), e(n, t, r);
          break;
        default:
          var l;
          try {
            l = d.statSync(n)
          } catch (e) {
            throw i
          }
          if (!l.isDirectory()) throw i;
      }
    }
    return r
  }
}, function (e, n, t) {
  function r(e, n, t) {
    null == t && (t = n, n = {}), 'string' == typeof n && (n = {
      encoding: n
    }), n = n || {};
    var r = n.fs || l,
      o = !0;
    'throws' in n && (o = n.throws), r.readFile(e, n, function (r, i) {
      if (r) return t(r);
      i = d(i);
      var a;
      try {
        a = JSON.parse(i, n ? n.reviver : null)
      } catch (n) {
        return o ? (n.message = e + ': ' + n.message, t(n)) : t(null, null)
      }
      t(null, a)
    })
  }

  function o(e, n) {
    n = n || {}, 'string' == typeof n && (n = {
      encoding: n
    });
    var t = n.fs || l,
      r = !0;
    'throws' in n && (r = n.throws);
    try {
      var o = t.readFileSync(e, n);
      return o = d(o), JSON.parse(o, n.reviver)
    } catch (n) {
      if (r) throw n.message = e + ': ' + n.message, n;
      else return null
    }
  }

  function i(e, n) {
    var t = '\n',
      r;
    'object' == typeof n && null !== n && (n.spaces && (r = n.spaces), n.EOL && (t = n.EOL));
    var o = JSON.stringify(e, n ? n.replacer : null, r);
    return o.replace(/\n/g, t) + t
  }

  function a(e, n, t, r) {
    null == r && (r = t, t = {}), t = t || {};
    var o = t.fs || l,
      a = '';
    try {
      a = i(n, t)
    } catch (e) {
      return void(r && r(e, null))
    }
    o.writeFile(e, a, t, r)
  }

  function s(e, n, t) {
    t = t || {};
    var r = t.fs || l,
      o = i(n, t);
    return r.writeFileSync(e, o, t)
  }

  function d(e) {
    return Buffer.isBuffer(e) && (e = e.toString('utf8')), e = e.replace(/^\uFEFF/, ''), e
  }
  var l;
  try {
    l = t(1)
  } catch (e) {
    l = t(5)
  }
  e.exports = {
    readFile: r,
    readFileSync: o,
    writeFile: a,
    writeFileSync: s
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback;
  e.exports = {
    copy: r(t(97))
  }
}, function (e) {
  'use strict';
  e.exports = function (e) {
    if ('function' == typeof Buffer.allocUnsafe) try {
      return Buffer.allocUnsafe(e)
    } catch (n) {
      return new Buffer(e)
    }
    return new Buffer(e)
  }
}, function (e, n, t) {
  'use strict';
  var r = Math.floor;
  const o = t(1),
    i = t(10),
    a = t(0);
  e.exports = {
    hasMillisRes: function (e) {
      let n = a.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
      n = a.join(i.tmpdir(), n);
      const t = new Date(1435410243862);
      o.writeFile(n, 'https://github.com/jprichardson/node-fs-extra/pull/141', (r) => r ? e(r) : void o.open(n, 'r+', (r, i) => r ? e(r) : void o.futimes(i, t, t, (t) => t ? e(t) : void o.close(i, (t) => t ? e(t) : void o.stat(n, (n, t) => n ? e(n) : void e(null, 1435410243e3 < t.mtime))))))
    },
    hasMillisResSync: function () {
      let e = a.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
      e = a.join(i.tmpdir(), e);
      const n = new Date(1435410243862);
      o.writeFileSync(e, 'https://github.com/jprichardson/node-fs-extra/pull/141');
      const t = o.openSync(e, 'r+');
      return o.futimesSync(t, n, n), o.closeSync(t), 1435410243e3 < o.statSync(e).mtime
    },
    timeRemoveMillis: function (e) {
      if ('number' == typeof e) return 1e3 * r(e / 1e3);
      if (e instanceof Date) return new Date(1e3 * r(e.getTime() / 1e3));
      throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
    },
    utimesMillis: function (e, n, t, r) {
      o.open(e, 'r+', (e, i) => e ? r(e) : void o.futimes(i, n, t, (e) => {
        o.close(i, (n) => {
          r && r(e || n)
        })
      }))
    },
    utimesMillisSync: function (e, n, t) {
      const r = o.openSync(e, 'r+');
      return o.futimesSync(r, n, t), o.closeSync(r)
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e) {
    return e = o.normalize(o.resolve(e)).split(o.sep), 0 < e.length ? e[0] : null
  }
  const o = t(0),
    i = /[<>:"|?*]/;
  e.exports = {
    getRootPath: r,
    invalidWin32Path: function (e) {
      const n = r(e);
      return e = e.replace(n, ''), i.test(e)
    }
  }
}, function (e, n, t) {
  'use strict';
  e.exports = {
    copySync: t(100)
  }
}, function (e) {
  e.exports = require('assert')
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(1),
    i = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'fchmod', 'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchown', 'lchmod', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'readFile', 'readdir', 'readlink', 'realpath', 'rename', 'rmdir', 'stat', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile'].filter((e) => 'function' == typeof o[e]);
  Object.keys(o).forEach((e) => {
    'promises' === e || (n[e] = o[e])
  }), i.forEach((e) => {
    n[e] = r(o[e])
  }), n.exists = function (e, n) {
    return 'function' == typeof n ? o.exists(e, n) : new Promise((n) => o.exists(e, n))
  }, n.read = function (e, n, t, r, i, a) {
    return 'function' == typeof a ? o.read(e, n, t, r, i, a) : new Promise((a, s) => {
      o.read(e, n, t, r, i, (e, n, t) => e ? s(e) : void a({
        bytesRead: n,
        buffer: t
      }))
    })
  }, n.write = function (e, n, ...t) {
    return 'function' == typeof t[t.length - 1] ? o.write(e, n, ...t) : new Promise((r, i) => {
      o.write(e, n, ...t, (e, n, t) => e ? i(e) : void r({
        bytesWritten: n,
        buffer: t
      }))
    })
  }
}, function (e, n, t) {
  'use strict';

  function r() {
    if (!a) {
      const e = i.app.getPath('userData');
      a = o.join(e, 'logs')
    }
    return a
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = t(0),
    i = t(4);
  let a = null;
  n.getLogDirectoryPath = r
}, function (e, n, t) {
  var r = t(10),
    o = t(107),
    i = n;
  i.getAllInfo = function (e) {
    return {
      date: new Date().toString(),
      process: i.getProcessInfo(),
      os: i.getOsInfo(),
      trace: i.getTrace(e),
      stack: e.stack && e.stack.split('\n')
    }
  }, i.getProcessInfo = function () {
    return {
      pid: process.pid,
      uid: process.getuid ? process.getuid() : null,
      gid: process.getgid ? process.getgid() : null,
      cwd: process.cwd(),
      execPath: process.execPath,
      version: process.version,
      argv: process.argv,
      memoryUsage: process.memoryUsage()
    }
  }, i.getOsInfo = function () {
    return {
      loadavg: r.loadavg(),
      uptime: r.uptime()
    }
  }, i.getTrace = function (e) {
    var n = e ? o.parse(e) : o.get();
    return n.map(function (e) {
      return {
        column: e.getColumnNumber(),
        file: e.getFileName(),
        function: e.getFunctionName(),
        line: e.getLineNumber(),
        method: e.getMethodName(),
        native: e.isNative()
      }
    })
  }
}, function (e) {
  e.exports = require('zlib')
}, function (e, n) {
  var t, r;
  /*!
   * async
   * https://github.com/caolan/async
   *
   * Copyright 2010-2014 Caolan McMahon
   * Released under the MIT license
   */
  (function () {
    function o(e) {
      var n = !1;
      return function () {
        if (n) throw new Error('Callback was already called.');
        n = !0, e.apply(s, arguments)
      }
    }
    var a = {},
      i = function () {},
      s, d;
    s = 'object' == typeof window && this === window ? window : 'object' == typeof global && this === global ? global : this, null != s && (d = s.async), a.noConflict = function () {
      return s.async = d, a
    };
    var l = Object.prototype.toString,
      c = Array.isArray || function (e) {
        return '[object Array]' === l.call(e)
      },
      p = function (e, n) {
        for (var t = -1, r = e.length; ++t < r;) n(e[t], t, e)
      },
      u = function (e, n) {
        for (var t = -1, r = e.length, o = Array(r); ++t < r;) o[t] = n(e[t], t, e);
        return o
      },
      m = function (e, n, t) {
        return p(e, function (e, r, o) {
          t = n(t, e, r, o)
        }), t
      },
      g = function (e, n) {
        p(f(e), function (t) {
          n(e[t], t)
        })
      },
      f = Object.keys || function (e) {
        var n = [];
        for (var t in e) e.hasOwnProperty(t) && n.push(t);
        return n
      },
      h = function (e, n) {
        n = n || 0;
        var t = -1,
          r = e.length;
        n && (r -= n, r = 0 > r ? 0 : r);
        for (var o = Array(r); ++t < r;) o[t] = e[t + n];
        return o
      },
      y;
    'function' == typeof setImmediate && (y = setImmediate), 'undefined' != typeof process && process.nextTick ? (a.nextTick = process.nextTick, a.setImmediate = y ? function (e) {
      y(e)
    } : a.nextTick) : y ? (a.nextTick = function (e) {
      y(e)
    }, a.setImmediate = a.nextTick) : (a.nextTick = function (e) {
      setTimeout(e, 0)
    }, a.setImmediate = a.nextTick), a.each = function (e, n, t) {
      function r(n) {
        n ? (t(n), t = i) : (a += 1, a >= e.length && t())
      }
      if (t = t || i, !e.length) return t();
      var a = 0;
      p(e, function (e) {
        n(e, o(r))
      })
    }, a.forEach = a.each, a.eachSeries = function (e, n, t) {
      if (t = t || i, !e.length) return t();
      var r = 0,
        o = function () {
          n(e[r], function (n) {
            n ? (t(n), t = i) : (r += 1, r >= e.length ? t() : o())
          })
        };
      o()
    }, a.forEachSeries = a.eachSeries, a.eachLimit = function (e, n, t, r) {
      var o = _(n);
      o.apply(null, [e, t, r])
    }, a.forEachLimit = a.eachLimit;
    var _ = function (e) {
      return function (n, t, r) {
        if (r = r || i, !n.length || 0 >= e) return r();
        var o = 0,
          a = 0,
          s = 0;
        (function d() {
          if (o >= n.length) return r();
          for (; s < e && a < n.length;) a += 1, s += 1, t(n[a - 1], function (e) {
            e ? (r(e), r = i) : (o += 1, s -= 1, o >= n.length ? r() : d())
          })
        })()
      }
    };
    a.forEachOf = a.eachOf = function (e, n, t) {
      t = t || function () {};
      var r = e.length || f(e).length,
        o = 0;
      return r ? void g(e, function (i, a) {
        n(e[a], a, function (e) {
          e ? (t(e), t = function () {}) : (o += 1, o === r && t(null))
        })
      }) : t()
    }, a.forEachOfSeries = a.eachOfSeries = function (e, n, t) {
      t = t || function () {};
      var r = f(e),
        o = r.length;
      if (!o) return t();
      var i = 0,
        s = function () {
          var d = !0,
            l = r[i];
          n(e[l], l, function (e) {
            e ? (t(e), t = function () {}) : (i += 1, i >= o ? t(null) : d ? a.nextTick(s) : s())
          }), d = !1
        };
      s()
    }, a.forEachOfLimit = a.eachOfLimit = function (e, n, t, r) {
      b(n)(e, t, r)
    };
    var b = function (e) {
        return function (n, t, r) {
          r = r || function () {};
          var o = f(n),
            i = o.length;
          if (!i || 0 >= e) return r();
          var a = 0,
            s = 0,
            d = 0;
          (function l() {
            if (a >= i) return r();
            for (; d < e && s < i;) {
              s += 1, d += 1;
              var c = o[s - 1];
              t(n[c], c, function (e) {
                e ? (r(e), r = function () {}) : (a += 1, d -= 1, a >= i ? r() : l())
              })
            }
          })()
        }
      },
      S = function (e) {
        return function () {
          var n = h(arguments);
          return e.apply(null, [a.each].concat(n))
        }
      },
      w = function (e, n) {
        return function () {
          var t = h(arguments);
          return n.apply(null, [_(e)].concat(t))
        }
      },
      v = function (e) {
        return function () {
          var n = h(arguments);
          return e.apply(null, [a.eachSeries].concat(n))
        }
      },
      x = function (e, n, t, r) {
        if (n = u(n, function (e, n) {
            return {
              index: n,
              value: e
            }
          }), !r) e(n, function (e, n) {
          t(e.value, function (e) {
            n(e)
          })
        });
        else {
          var o = [];
          e(n, function (e, n) {
            t(e.value, function (t, r) {
              o[e.index] = r, n(t)
            })
          }, function (e) {
            r(e, o)
          })
        }
      };
    a.map = S(x), a.mapSeries = v(x), a.mapLimit = function (e, n, t, r) {
      return E(n)(e, t, r)
    };
    var E = function (e) {
      return w(e, x)
    };
    a.reduce = function (e, n, t, r) {
      a.eachSeries(e, function (e, r) {
        t(n, e, function (e, t) {
          n = t, r(e)
        })
      }, function (e) {
        r(e, n)
      })
    }, a.inject = a.reduce, a.foldl = a.reduce, a.reduceRight = function (e, n, t, r) {
      var o = u(e, function (e) {
        return e
      }).reverse();
      a.reduce(o, n, t, r)
    }, a.foldr = a.reduceRight;
    var C = function (e, n, t, r) {
      var o = [];
      n = u(n, function (e, n) {
        return {
          index: n,
          value: e
        }
      }), e(n, function (e, n) {
        t(e.value, function (t) {
          t && o.push(e), n()
        })
      }, function () {
        r(u(o.sort(function (e, n) {
          return e.index - n.index
        }), function (e) {
          return e.value
        }))
      })
    };
    a.filter = S(C), a.filterSeries = v(C), a.select = a.filter, a.selectSeries = a.filterSeries;
    var k = function (e, n, t, r) {
      var o = [];
      n = u(n, function (e, n) {
        return {
          index: n,
          value: e
        }
      }), e(n, function (e, n) {
        t(e.value, function (t) {
          t || o.push(e), n()
        })
      }, function () {
        r(u(o.sort(function (e, n) {
          return e.index - n.index
        }), function (e) {
          return e.value
        }))
      })
    };
    a.reject = S(k), a.rejectSeries = v(k);
    var M = function (e, n, t, r) {
      e(n, function (e, n) {
        t(e, function (t) {
          t ? (r(e), r = i) : n()
        })
      }, function () {
        r()
      })
    };
    a.detect = S(M), a.detectSeries = v(M), a.some = function (e, n, t) {
      a.each(e, function (e, r) {
        n(e, function (e) {
          e && (t(!0), t = i), r()
        })
      }, function () {
        t(!1)
      })
    }, a.any = a.some, a.every = function (e, n, t) {
      a.each(e, function (e, r) {
        n(e, function (e) {
          e || (t(!1), t = i), r()
        })
      }, function () {
        t(!0)
      })
    }, a.all = a.every, a.sortBy = function (e, n, t) {
      a.map(e, function (e, t) {
        n(e, function (n, r) {
          n ? t(n) : t(null, {
            value: e,
            criteria: r
          })
        })
      }, function (e, n) {
        if (e) return t(e);
        t(null, u(n.sort(function (e, n) {
          var t = e.criteria,
            r = n.criteria;
          return t < r ? -1 : t > r ? 1 : 0
        }), function (e) {
          return e.value
        }))
      })
    }, a.auto = function (e, n) {
      n = n || i;
      var t = f(e),
        r = t.length;
      if (!r) return n();
      var o = {},
        s = [],
        d = function (e) {
          s.unshift(e)
        },
        l = function (e) {
          for (var n = 0; n < s.length; n += 1)
            if (s[n] === e) return void s.splice(n, 1)
        },
        u = function () {
          r--, p(s.slice(0), function (e) {
            e()
          })
        };
      d(function () {
        if (!r) {
          var e = n;
          n = i, e(null, o)
        }
      }), p(t, function (t) {
        for (var r = c(e[t]) ? e[t] : [e[t]], s = function (e) {
            var r = h(arguments, 1);
            if (1 >= r.length && (r = r[0]), e) {
              var s = {};
              p(f(o), function (e) {
                s[e] = o[e]
              }), s[t] = r, n(e, s), n = i
            } else o[t] = r, a.setImmediate(u)
          }, g = r.slice(0, Math.abs(r.length - 1)) || [], y = g.length, _; y--;) {
          if (!(_ = e[g[y]])) throw new Error('Has inexistant dependency');
          if (c(_) && !!~_.indexOf(t)) throw new Error('Has cyclic dependencies')
        }
        var b = function () {
          return m(g, function (e, n) {
            return e && o.hasOwnProperty(n)
          }, !0) && !o.hasOwnProperty(t)
        };
        if (b()) r[r.length - 1](s, o);
        else {
          var S = function () {
            b() && (l(S), r[r.length - 1](s, o))
          };
          d(S)
        }
      })
    }, a.retry = function (e, n, t) {
      var r = 5,
        o = [];
      'function' == typeof e && (t = n, n = e, e = r), e = parseInt(e, 10) || r;
      var i = function (r, i) {
        for (var s = function (e, n) {
            return function (t) {
              e(function (e, r) {
                t(!e || n, {
                  err: e,
                  result: r
                })
              }, i)
            }
          }; e;) o.push(s(n, !(e -= 1)));
        a.series(o, function (e, n) {
          n = n[n.length - 1], (r || t)(n.err, n.result)
        })
      };
      return t ? i() : i
    }, a.waterfall = function (e, n) {
      if (n = n || i, !c(e)) {
        var t = new Error('First argument to waterfall must be an array of functions');
        return n(t)
      }
      if (!e.length) return n();
      var r = function (e) {
        return function (t) {
          if (t) n.apply(null, arguments), n = i;
          else {
            var o = h(arguments, 1),
              s = e.next();
            s ? o.push(r(s)) : o.push(n), a.setImmediate(function () {
              e.apply(null, o)
            })
          }
        }
      };
      r(a.iterator(e))()
    };
    var L = function (e, n, t) {
      if (t = t || i, c(n)) e.map(n, function (e, n) {
        e && e(function (e) {
          var t = h(arguments, 1);
          1 >= t.length && (t = t[0]), n.call(null, e, t)
        })
      }, t);
      else {
        var r = {};
        e.each(f(n), function (e, t) {
          n[e](function (n) {
            var o = h(arguments, 1);
            1 >= o.length && (o = o[0]), r[e] = o, t(n)
          })
        }, function (e) {
          t(e, r)
        })
      }
    };
    a.parallel = function (e, n) {
      L({
        map: a.map,
        each: a.each
      }, e, n)
    }, a.parallelLimit = function (e, n, t) {
      L({
        map: E(n),
        each: _(n)
      }, e, t)
    }, a.series = function (e, n) {
      if (n = n || i, c(e)) a.mapSeries(e, function (e, n) {
        e && e(function (e) {
          var t = h(arguments, 1);
          1 >= t.length && (t = t[0]), n.call(null, e, t)
        })
      }, n);
      else {
        var t = {};
        a.eachSeries(f(e), function (n, r) {
          e[n](function (e) {
            var o = h(arguments, 1);
            1 >= o.length && (o = o[0]), t[n] = o, r(e)
          })
        }, function (e) {
          n(e, t)
        })
      }
    }, a.iterator = function (e) {
      var n = function (t) {
        var r = function () {
          return e.length && e[t].apply(null, arguments), r.next()
        };
        return r.next = function () {
          return t < e.length - 1 ? n(t + 1) : null
        }, r
      };
      return n(0)
    }, a.apply = function (e) {
      var n = h(arguments, 1);
      return function () {
        return e.apply(null, n.concat(h(arguments)))
      }
    };
    var O = function (e, n, t, o) {
      var i = [];
      e(n, function (e, n) {
        t(e, function (e, t) {
          i = i.concat(t || []), n(e)
        })
      }, function (e) {
        o(e, i)
      })
    };
    a.concat = S(O), a.concatSeries = v(O), a.whilst = function (e, n, t) {
      e() ? n(function (r) {
        return r ? t(r) : void a.whilst(e, n, t)
      }) : t()
    }, a.doWhilst = function (e, n, t) {
      e(function (r) {
        if (r) return t(r);
        var o = h(arguments, 1);
        n.apply(null, o) ? a.doWhilst(e, n, t) : t()
      })
    }, a.until = function (e, n, t) {
      e() ? t() : n(function (r) {
        return r ? t(r) : void a.until(e, n, t)
      })
    }, a.doUntil = function (e, n, t) {
      e(function (r) {
        if (r) return t(r);
        var o = h(arguments, 1);
        n.apply(null, o) ? t() : a.doUntil(e, n, t)
      })
    }, a.queue = function (e, n) {
      function t(e, n, t, r) {
        return e.started || (e.started = !0), c(n) || (n = [n]), 0 === n.length ? a.setImmediate(function () {
          e.drain && e.drain()
        }) : void p(n, function (n) {
          var o = {
            data: n,
            callback: 'function' == typeof r ? r : null
          };
          t ? e.tasks.unshift(o) : e.tasks.push(o), e.saturated && e.tasks.length === e.concurrency && e.saturated(), a.setImmediate(e.process)
        })
      }
      if (n === void 0) n = 1;
      else if (0 === n) throw new Error('Concurrency must not be zero');
      var r = 0,
        i = {
          tasks: [],
          concurrency: n,
          saturated: null,
          empty: null,
          drain: null,
          started: !1,
          paused: !1,
          push: function (e, n) {
            t(i, e, !1, n)
          },
          kill: function () {
            i.drain = null, i.tasks = []
          },
          unshift: function (e, n) {
            t(i, e, !0, n)
          },
          process: function () {
            if (!i.paused && r < i.concurrency && i.tasks.length) {
              var n = i.tasks.shift();
              i.empty && 0 === i.tasks.length && i.empty(), r += 1;
              var t = function () {
                  r -= 1, n.callback && n.callback.apply(n, arguments), i.drain && 0 === i.tasks.length + r && i.drain(), i.process()
                },
                a = o(t);
              e(n.data, a)
            }
          },
          length: function () {
            return i.tasks.length
          },
          running: function () {
            return r
          },
          idle: function () {
            return 0 === i.tasks.length + r
          },
          pause: function () {
            !0 === i.paused || (i.paused = !0)
          },
          resume: function () {
            if (!1 !== i.paused) {
              i.paused = !1;
              for (var e = Math.min(i.concurrency, i.tasks.length), n = 1; n <= e; n++) a.setImmediate(i.process)
            }
          }
        };
      return i
    }, a.priorityQueue = function (e, n) {
      function t(e, n) {
        return e.priority - n.priority
      }

      function r(e, n, t) {
        for (var r = -1, o = e.length - 1, i; r < o;) i = r + (o - r + 1 >>> 1), 0 <= t(n, e[i]) ? r = i : o = i - 1;
        return r
      }

      function o(e, n, o, i) {
        return e.started || (e.started = !0), c(n) || (n = [n]), 0 === n.length ? a.setImmediate(function () {
          e.drain && e.drain()
        }) : void p(n, function (n) {
          var s = {
            data: n,
            priority: o,
            callback: 'function' == typeof i ? i : null
          };
          e.tasks.splice(r(e.tasks, s, t) + 1, 0, s), e.saturated && e.tasks.length === e.concurrency && e.saturated(), a.setImmediate(e.process)
        })
      }
      var i = a.queue(e, n);
      return i.push = function (e, n, t) {
        o(i, e, n, t)
      }, delete i.unshift, i
    }, a.cargo = function (e, n) {
      var t = !1,
        r = [],
        o = {
          tasks: r,
          payload: n,
          saturated: null,
          empty: null,
          drain: null,
          drained: !0,
          push: function (e, t) {
            c(e) || (e = [e]), p(e, function (e) {
              r.push({
                data: e,
                callback: 'function' == typeof t ? t : null
              }), o.drained = !1, o.saturated && r.length === n && o.saturated()
            }), a.setImmediate(o.process)
          },
          process: function i() {
            if (!t) {
              if (0 === r.length) return o.drain && !o.drained && o.drain(), void(o.drained = !0);
              var a = 'number' == typeof n ? r.splice(0, n) : r.splice(0, r.length),
                s = u(a, function (e) {
                  return e.data
                });
              o.empty && o.empty(), t = !0, e(s, function () {
                t = !1;
                var e = arguments;
                p(a, function (n) {
                  n.callback && n.callback.apply(null, e)
                }), i()
              })
            }
          },
          length: function () {
            return r.length
          },
          running: function () {
            return t
          }
        };
      return o
    };
    var P = function (e) {
      return function (n) {
        var t = h(arguments, 1);
        n.apply(null, t.concat([function (n) {
          var t = h(arguments, 1);
          'undefined' != typeof console && (n ? console.error && console.error(n) : console[e] && p(t, function (n) {
            console[e](n)
          }))
        }]))
      }
    };
    a.log = P('log'), a.dir = P('dir'), a.memoize = function (e, n) {
      var t = {},
        r = {};
      n = n || function (e) {
        return e
      };
      var o = function () {
        var o = h(arguments),
          i = o.pop(),
          s = n.apply(null, o);
        s in t ? a.nextTick(function () {
          i.apply(null, t[s])
        }) : s in r ? r[s].push(i) : (r[s] = [i], e.apply(null, o.concat([function () {
          t[s] = h(arguments);
          var e = r[s];
          delete r[s];
          for (var n = 0, o = e.length; n < o; n++) e[n].apply(null, arguments)
        }])))
      };
      return o.memo = t, o.unmemoized = e, o
    }, a.unmemoize = function (e) {
      return function () {
        return (e.unmemoized || e).apply(null, arguments)
      }
    }, a.times = function (e, n, t) {
      for (var r = [], o = 0; o < e; o++) r.push(o);
      return a.map(r, n, t)
    }, a.timesSeries = function (e, n, t) {
      for (var r = [], o = 0; o < e; o++) r.push(o);
      return a.mapSeries(r, n, t)
    }, a.seq = function () {
      var e = arguments;
      return function () {
        var n = this,
          t = h(arguments),
          r = t.pop();
        a.reduce(e, t, function (e, t, r) {
          t.apply(n, e.concat([function () {
            var e = arguments[0],
              n = h(arguments, 1);
            r(e, n)
          }]))
        }, function (e, t) {
          r.apply(n, [e].concat(t))
        })
      }
    }, a.compose = function () {
      return a.seq.apply(null, Array.prototype.reverse.call(arguments))
    };
    var T = function (e, n) {
      var t = function () {
        var t = this,
          r = h(arguments),
          o = r.pop();
        return e(n, function (e, n) {
          e.apply(t, r.concat([n]))
        }, o)
      };
      if (2 < arguments.length) {
        var r = h(arguments, 2);
        return t.apply(this, r)
      }
      return t
    };
    a.applyEach = S(T), a.applyEachSeries = v(T), a.forever = function (e, n) {
      function t(r) {
        if (r) {
          if (n) return n(r);
          throw r
        }
        e(t)
      }
      t()
    }, 'undefined' != typeof e && e.exports ? e.exports = a : (t = [], r = function () {
      return a
    }.apply(n, t), !(r !== void 0 && (e.exports = r)))
  })()
}, function (e, n, t) {
  'use strict';

  function r(e) {
    const n = `desktop.${'production'}.log`;
    return a.join(e, n)
  }

  function o(e) {
    const n = new s.transports.DailyRotateFile({
      filename: e,
      handleExceptions: !1,
      json: !1,
      datePattern: 'yyyy-MM-dd.',
      prepend: !0,
      level: 'info',
      maxFiles: c
    });
    n.on('error', () => {});
    const t = new s.transports.Console({
      level: 'error'
    });
    return s.configure({
      transports: [t, n]
    }), s.log
  }

  function i() {
    return p ? p : (p = new Promise((e, n) => {
      const t = d.getLogDirectoryPath();
      l.ensureDir(t).then(() => {
        try {
          const n = o(r(t));
          e(n)
        } catch (e) {
          n(e)
        }
      }).catch((e) => {
        n(e)
      })
    }), p)
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const a = t(0),
    s = t(15),
    d = t(44),
    l = t(20);
  t(82);
  const c = 14;
  let p = null;
  n.log = async function (e, n) {
    try {
      const t = await i();
      await new Promise((r, o) => {
        t(e, n, (e) => {
          e ? o(e) : r()
        })
      })
    } catch (e) {}
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n) {
    return (e ? e.toLowerCase() : e) === (n ? n.toLowerCase() : n)
  }

  function o() {
    const e = i.Menu.buildFromTemplate([{
        role: 'editMenu'
      }]).items[0],
      n = e && e.submenu ? e.submenu.items : [];
    return n.filter((e) => !r(e.role, 'pasteandmatchstyle'))
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const i = t(4);
  n.buildContextMenu = function (e, n) {
    const t = [];
    for (const [a, s] of e.entries()) r(s.role, 'editmenu') ? t.push(...o()) : t.push(new i.MenuItem({
      label: s.label,
      type: s.type,
      enabled: s.enabled,
      role: s.role,
      click: () => n(a, s)
    }));
    const a = new i.Menu;
    return t.forEach((e) => a.append(e)), a
  }
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(4),
    o = t(29),
    i = t(28),
    a = 600,
    s = 500;
  n.CrashWindow = class {
    constructor(e, n) {
      this.emitter = new o.Emitter, this.hasFinishedLoading = !1, this.hasSentReadyEvent = !1;
      const t = {
        width: a,
        height: s,
        minWidth: a,
        minHeight: s,
        show: !1,
        backgroundColor: '#fff',
        webPreferences: {
          disableBlinkFeatures: 'Auxclick',
          experimentalFeatures: !1,
          nodeIntegration: !0
        }
      };
      t.frame = !1, this.window = new r.BrowserWindow(t), this.error = n, this.errorType = e
    }
    load() {
      log.debug('Starting crash process'), this.window.webContents.once('did-start-loading', () => {
        log.debug('Crash process in startup')
      }), this.window.webContents.once('did-finish-load', () => {
        log.debug('Crash process started'), !1, this.hasFinishedLoading = !0, this.maybeEmitDidLoad()
      }), this.window.webContents.on('did-finish-load', () => {
        this.window.webContents.setVisualZoomLevelLimits(1, 1)
      }), this.window.webContents.on('did-fail-load', () => {
        log.error('Crash process failed to load'), this.emitter.emit('did-fail-load', null)
      }), r.ipcMain.on('crash-ready', () => {
        log.debug(`Crash process is ready`), this.hasSentReadyEvent = !0, this.sendError(), this.maybeEmitDidLoad()
      }), r.ipcMain.on('crash-quit', () => {
        log.debug('Got quit signal from crash process'), this.window.close()
      }), i.registerWindowStateChangedEvents(this.window), this.window.loadURL(`file://${__dirname}/crash.html`)
    }
    maybeEmitDidLoad() {
      this.hasFinishedLoading && this.hasSentReadyEvent && this.emitter.emit('did-load', null)
    }
    onClose(e) {
      this.window.on('closed', e)
    }
    onFailedToLoad(e) {
      this.emitter.on('did-fail-load', e)
    }
    onDidLoad(e) {
      return this.emitter.on('did-load', e)
    }
    focus() {
      this.window.focus()
    }
    show() {
      log.debug('Showing crash process window'), this.window.show()
    }
    sendError() {
      const e = {
          stack: this.error.stack,
          message: this.error.message,
          name: this.error.name
        },
        n = {
          type: this.errorType,
          error: e
        };
      this.window.webContents.send('error', n)
    }
    destroy() {
      this.window.destroy()
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n) {
    if (log.error(a.formatError(n)), d) return;
    d = !0, i.setCrashMenu();
    const t = new s.CrashWindow(e ? 'launch' : 'generic', n);
    t.onDidLoad(() => {
      t.show()
    }), t.onFailedToLoad(async () => {
      await o.dialog.showMessageBox({
        type: 'error',
        title: 'Unrecoverable error',
        message: `GitHub Desktop has encountered an unrecoverable error and will need to restart.\n\n` + `This has been reported to the team, but if you encounter this repeatedly please report ` + `this issue to the GitHub Desktop issue tracker.\n\n${n.stack||n.message}`
      }), o.app.relaunch(), o.app.quit()
    }), t.onClose(() => {
      o.app.relaunch(), o.app.quit()
    }), t.load()
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = t(4),
    i = t(25),
    a = t(34),
    s = t(50);
  let d = !1;
  n.showUncaughtException = r
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(4);
  n.reportError = async function (e, n, t) {
    const o = new Map;
    if (o.set('name', e.name), o.set('message', e.message), e.stack && o.set('stack', e.stack), o.set('platform', 'win32'), o.set('sha', '568b41137c77acc744f62decc721ea0110461d15'), o.set('version', r.app.getVersion()), n)
      for (const e of Object.keys(n)) o.set(e, n[e]);
    const i = {
        method: 'POST',
        url: t ? 'https://central.github.com/api/desktop-non-fatal/exception' : 'https://central.github.com/api/desktop/exception',
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      },
      a = [...o.entries()].map(([e, n]) => `${encodeURIComponent(e)}=${encodeURIComponent(n)}`).join('&');
    try {
      await new Promise((e, n) => {
        const t = r.net.request(i);
        t.on('response', (t) => {
          200 === t.statusCode ? e() : n(`Got ${t.statusCode} - ${t.statusMessage} from central`)
        }), t.on('error', n), t.end(a)
      }), log.info('Error report submitted')
    } catch (n) {
      log.error('Failed submitting error report', e)
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n) {
    try {
      const t = o.spawn(e, n);
      return new Promise((r, o) => {
        let i = '';
        t.stdout && t.stdout.on('data', (e) => {
          i += e
        }), t.on('close', (t) => {
          0 === t ? r(i) : o(new Error(`Command "${e} ${n}" failed: "${i}"`))
        }), t.on('error', (e) => {
          o(e)
        }), t.stdin && t.stdin.end()
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = t(22),
    i = t(0);
  n.getPathSegments = async function () {
    let e;
    const n = process.env.SystemRoot;
    if (null != n) {
      const t = i.join(n, 'System32');
      e = i.join(t, 'WindowsPowerShell', 'v1.0', 'powershell.exe')
    } else e = 'powershell.exe';
    const t = ['-noprofile', '-ExecutionPolicy', 'RemoteSigned', '-command', `
      [Console]::OutputEncoding=[System.Text.Encoding]::UTF8
      $output=[environment]::GetEnvironmentVariable('Path', 'User')
      [Console]::WriteLine($output)
    `],
      o = await r(e, t),
      a = o.replace(/^\s+|\s+$/g, '');
    return a.split(/;+/).filter((e) => e.length)
  }, n.setPathSegments = async function (e) {
    let n;
    const t = process.env.SystemRoot;
    if (t) {
      const e = i.join(t, 'System32');
      n = i.join(e, 'setx.exe')
    } else n = 'setx.exe';
    await r(n, ['Path', e.join(';')])
  }, n.spawn = r
}, function (e, n, t) {
  'use strict';
  async function r() {
    await p(['StartMenu', 'Desktop']), await i()
  }
  async function o() {
    await g(), await i()
  }
  async function i() {
    const e = a();
    await y.ensureDir(e), await d(e), await l(e);
    const n = await _.getPathSegments();
    0 > n.indexOf(e) && (await _.setPathSegments([...n, e]))
  }

  function a() {
    return f.resolve(process.execPath, '../../bin')
  }

  function s(e, n) {
    const t = f.resolve(process.execPath, '..');
    return f.relative(e, f.join(t, n))
  }

  function d(e) {
    const n = s(e, 'resources/app/static/github.bat'),
      t = `@echo off\n"%~dp0\\${n}" %*`,
      r = f.join(e, 'github.bat');
    return y.writeFile(r, t)
  }

  function l(e) {
    const n = s(e, 'resources/app/static/github.sh'),
      t = `#!/usr/bin/env bash
  DIR="$( cd "$( dirname "\$\{BASH_SOURCE[0]\}" )" && pwd )"
  sh "$DIR/${n}" "$@"`,
      r = f.join(e, 'github');
    return y.writeFile(r, t, {
      encoding: 'utf8',
      mode: 755
    })
  }
  async function c(e) {
    await _.spawn(w, e)
  }

  function p(e) {
    return c(['--createShortcut', v, '-l', e.join(',')])
  }
  async function u() {
    await m();
    const e = await _.getPathSegments(),
      n = a(),
      t = e.filter((e) => e !== n);
    return _.setPathSegments(t)
  }

  function m() {
    return c(['--removeShortcut', v])
  }
  async function g() {
    const e = h.homedir();
    if (e) {
      const n = f.join(e, 'Desktop', 'GitHub Desktop.lnk'),
        t = await y.pathExists(n),
        r = t ? ['StartMenu', 'Desktop'] : ['StartMenu'];
      return p(r)
    }
    return p(['StartMenu', 'Desktop'])
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const f = t(0),
    h = t(10),
    y = t(20),
    _ = t(53),
    b = f.resolve(process.execPath, '..'),
    S = f.resolve(b, '..'),
    w = f.resolve(f.join(S, 'Update.exe')),
    v = f.basename(process.execPath);
  n.handleSquirrelEvent = function (e) {
    return '--squirrel-install' === e ? r() : '--squirrel-updated' === e ? o() : '--squirrel-uninstall' === e ? u() : '--squirrel-obsolete' === e ? Promise.resolve() : null
  }
}, function (e, n) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const t = /[\x00-\x20\x7F~^:?*\[\\|""<>]+|@{|\.\.+|^\.|\.$|\.lock$|\/$/g;
  n.sanitizedBranchName = function (e) {
    return e.replace(t, '-').replace(/^[-\+]*/g, '')
  }, n.testForInvalidChars = function (e) {
    return t.test(e)
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n) {
    const t = e[n];
    return null == t ? null : Array.isArray(t) ? t[0] : t
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = t(18),
    i = t(55);
  n.parseAppURL = function (e) {
    const n = o.parse(e, !0),
      t = n.hostname,
      a = {
        name: 'unknown',
        url: e
      };
    if (!t) return a;
    const s = n.query,
      d = t.toLowerCase();
    if ('oauth' === d) {
      const e = r(s, 'code'),
        n = r(s, 'state');
      return null != e && null != n ? {
        name: 'oauth',
        code: e,
        state: n
      } : a
    }
    const l = n.pathname;
    if (!l || 1 >= l.length) return a;
    const c = l.substr(1);
    if ('openrepo' === d) {
      const e = r(s, 'pr'),
        n = r(s, 'branch'),
        t = r(s, 'filepath');
      if (null != e) {
        if (!/^\d+$/.test(e)) return a;
        if (null != n && !/^pr\/\d+$/.test(n)) return a
      }
      return null != n && i.testForInvalidChars(n) ? a : {
        name: 'open-repository-from-url',
        url: c,
        branch: n,
        pr: e,
        filepath: t
      }
    }
    return 'openlocalrepo' === d ? {
      name: 'open-repository-from-path',
      path: decodeURIComponent(c)
    } : a
  }
}, function (e, n, t) {
  'use strict';
  async function r() {
    const e = o(),
      n = new Promise((n) => {
        let t = null,
          r = null,
          o = '',
          i = !1;
        const a = () => {
          !i && t && (t.kill(), i = !0)
        };
        process.once('exit', a), setTimeout(() => {
          a()
        }, 5e3), t = s.spawn(e, ['-ilc', 'command env'], {
          detached: !0,
          stdio: ['ignore', 'pipe', process.stderr]
        });
        const d = [];
        t.on('error', (n) => {
          i = !0, r = n
        }), t.stdout && t.stdout.on('data', (e) => {
          d.push(e)
        }), t.on('close', () => {
          i = !0, process.removeListener('exit', a), d.length && (o = Buffer.concat(d).toString('utf8')), n({
            stdout: o,
            error: r
          })
        })
      }),
      {
        stdout: t,
        error: r
      } = await n;
    return r ? null : t
  }

  function o() {
    return process.env.SHELL ? process.env.SHELL : '/bin/bash'
  }
  async function i(e) {}

  function a(e) {
    for (const n in e) l.has(n) || (process.env[n] = e[n])
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const s = t(22),
    d = t(10),
    l = new Set(['LOCAL_GIT_DIRECTORY']);
  n.shellNeedsPatching = function () {
    return !1
  }, n.updateEnvironmentForProcess = function () {
    return i(a)
  }
}, function (e, n) {
  'use strict';

  function* t(e) {
    for (const n of e.items) yield n, 'submenu' === n.type && void 0 !== n.submenu && (yield* t(n.submenu))
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.getAllMenuItems = t
}, function (e, n, t) {
  'use strict';

  function r(e) {
    let n = !1;
    if (e.submenu instanceof o.Menu)
      for (const t of e.submenu.items) r(t) && (n = !0);
    if (n || e.role) return !0;
    const t = e.id;
    return !('show-devtools' !== t && 'reload-window' !== t) || (e.enabled = !1, !1)
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = t(4);
  n.setCrashMenu = function () {
    const e = o.Menu.getApplicationMenu();
    if (e)
      for (const n of e.items) r(n)
  }
}, function (e, n) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const t = ['.cmd', '.exe', '.bat', '.sh'];
  n.CopyFilePathLabel = 'Copy file path', n.DefaultEditorLabel = 'Open in external editor', n.RevealInFileManagerLabel = 'Show in Explorer', n.TrashNameLabel = 'Recycle Bin', n.OpenWithDefaultProgramLabel = 'Open with default program', n.isSafeFileExtension = function (e) {
    return -1 === t.indexOf(e.toLowerCase())
  }
}, function (e, n) {
  'use strict';

  function t() {
    return !1, '1' === process.env.GITHUB_DESKTOP_PREVIEW_FEATURES
  }

  function r() {
    return t() || !1
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  n.enableRecurseSubmodulesFlag = function () {
    return r()
  }, n.enableReadmeOverwriteWarning = function () {
    return r()
  }, n.enableBranchPruning = function () {
    return !0
  }, n.enableNoChangesCreatePRBlankslateAction = function () {
    return !0
  }, n.enableGroupRepositoriesByOwner = function () {
    return !0
  }, n.enableRebaseDialog = function () {
    return !0
  }, n.enableStashing = function () {
    return !0
  }, n.enableBranchProtectionChecks = function () {
    return !0
  }, n.enableWSLDetection = function () {
    return r()
  }, n.enableBranchProtectionWarningFlow = function () {
    return !0
  }, n.enableHideWhitespaceInDiffOption = function () {
    return !0
  }, n.enableTutorial = function () {
    return !0
  }, n.enableCreateForkFlow = function () {
    return !0
  }, n.enableSchannelCheckRevokeOptOut = function () {
    return !0
  }, n.enableAutomaticGitProxyConfiguration = function () {
    return !0
  }, n.enableCreateGitHubIssueFromMenu = function () {
    return !0
  }, n.enableUpdateRemoteUrl = function () {
    return !0
  }, n.enableForkyCreateBranchUI = function () {
    return !0
  }
}, function (e, n) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), n.truncateWithEllipsis = function (e, n) {
    if (e.length <= n) return e;
    const t = [...e];
    if (t.length <= n) return e;
    const r = t.reduce((e, n) => ('\uFE00' <= n && '\uFE0F' >= n ? e.length && e.push(`${e.pop()}${n}`) : e.push(n), e), []);
    if (r.length <= n) return e;
    const o = r.slice(0, n).join('');
    return `${o}…`
  }
}, function (e, n, t) {
  'use strict';

  function r({
    selectedExternalEditor: e,
    selectedShell: n,
    askForConfirmationOnForcePush: t,
    askForConfirmationOnRepositoryRemoval: r,
    hasCurrentPullRequest: s = !1,
    defaultBranchName: l = w,
    isForcePushForCurrentRepository: C = !1,
    isStashedChangesVisible: k = !1
  }) {
    l = u.truncateWithEllipsis(l, 25);
    const M = r ? v : x,
      L = s ? S : b,
      O = null === n ? _ : `用${n}打开`,
      P = null === e ? y.DefaultEditorLabel : `用${e}打开`,
      T = [],
      F = {
        type: 'separator'
      };
    const N = {
      label: '&文件(File)',
      submenu: [{
        label: '新建 存储库 &New\u2026',
        id: 'new-repository',
        click: a('create-repository'),
        accelerator: 'CmdOrCtrl+N'
      }, F, {
        label: '添加 &本地存储库 Add\u2026',
        id: 'add-local-repository',
        accelerator: 'CmdOrCtrl+O',
        click: a('add-local-repository')
      }, {
        label: '克隆& 存储库 Clone\u2026',
        id: 'clone-repository',
        accelerator: 'CmdOrCtrl+Shift+O',
        click: a('clone-repository')
      }]
    }; {
      const e = N.submenu;
      e.push(F, {
        label: '&选项 Options\u2026',
        id: 'preferences',
        accelerator: 'CmdOrCtrl+,',
        click: a('show-preferences')
      }, F, {
        role: 'quit',
        label: '退出 E&xit',
        accelerator: 'Alt+F4'
      })
    }
    T.push(N), T.push({
      label: '编辑 &(Edit)',
      submenu: [{
        role: 'undo',
        label: '撤消 &Undo'
      }, {
        role: 'redo',
        label: '恢复 &Redo'
      }, F, {
        role: 'cut',
        label: '剪切 Cu&t'
      }, {
        role: 'copy',
        label: '复制 &Copy'
      }, {
        role: 'paste',
        label: '粘贴 &Paste'
      }, {
        label: '全选 Select &all',
        accelerator: 'CmdOrCtrl+A',
        click: a('select-all')
      }, F, {
        id: 'find',
        label: '查找 &Find',
        accelerator: 'CmdOrCtrl+F',
        click: a('find-text')
      }]
    }), T.push({
      label: '视图 &(View)',
      submenu: [{
        label: '更改 &Changes',
        id: 'show-changes',
        accelerator: 'CmdOrCtrl+1',
        click: a('show-changes')
      }, {
        label: '历史 &History',
        id: 'show-history',
        accelerator: 'CmdOrCtrl+2',
        click: a('show-history')
      }, {
        label: '存储库列表 Repository &list',
        id: 'show-repository-list',
        accelerator: 'CmdOrCtrl+T',
        click: a('choose-repository')
      }, {
        label: '分支列表 &Branches list',
        id: 'show-branches-list',
        accelerator: 'CmdOrCtrl+B',
        click: a('show-branches')
      }, F, {
        label: '转到摘要 Go to &Summary',
        id: 'go-to-commit-message',
        accelerator: 'CmdOrCtrl+G',
        click: a('go-to-commit-message')
      }, {
        label: i(k),
        id: 'toggle-stashed-changes',
        accelerator: 'Ctrl+H',
        click: k ? a('hide-stashed-changes') : a('show-stashed-changes'),
        visible: h.enableStashing()
      }, {
        label: '全屏切换 Toggle &full screen',
        role: 'togglefullscreen'
      }, F, {
        label: '重置缩放 Reset zoom',
        accelerator: 'CmdOrCtrl+0',
        click: d(E.Reset)
      }, {
        label: '放大 Zoom in',
        accelerator: 'CmdOrCtrl+=',
        click: d(E.In)
      }, {
        label: '缩小 Zoom out',
        accelerator: 'CmdOrCtrl+-',
        click: d(E.Out)
      }, F, {
        label: '重载 &Reload',
        id: 'reload-window',
        accelerator: 'CmdOrCtrl+Alt+R',
        click(e, n) {
          n && n.reload()
        },
        visible: !1
      }, {
        id: 'show-devtools',
        label: '开发工具 &Developer tools',
        accelerator: (() => 'Ctrl+Shift+I')(),
        click(e, n) {
          n && n.webContents.toggleDevTools()
        }
      }]
    });
    const A = o(C, t),
      R = C ? 'force-push' : 'push';
    T.push({
      label: '存储库&(Repository)',
      id: 'repository',
      submenu: [{
        id: 'push',
        label: A,
        accelerator: 'CmdOrCtrl+P',
        click: a(R)
      }, {
        id: 'pull',
        label: '拉取 Pu&ll',
        accelerator: 'CmdOrCtrl+Shift+P',
        click: a('pull')
      }, {
        label: M,
        id: 'remove-repository',
        accelerator: 'CmdOrCtrl+Backspace',
        click: a('remove-repository')
      }, F, {
        id: 'view-repository-on-github',
        label: '在Github查看',
        accelerator: 'CmdOrCtrl+Shift+G',
        click: a('view-repository-on-github')
      }, {
        label: O,
        id: 'open-in-shell',
        accelerator: 'Ctrl+`',
        click: a('open-in-shell')
      }, {
        label: '资源管理器',
        id: 'open-working-directory',
        accelerator: 'CmdOrCtrl+Shift+F',
        click: a('open-working-directory')
      }, {
        label: P,
        id: 'open-external-editor',
        accelerator: 'CmdOrCtrl+Shift+A',
        click: a('open-external-editor')
      }, F, {
        id: 'create-issue-in-repository-on-github',
        label: '新建问题 Create &issue on GitHub',
        accelerator: 'CmdOrCtrl+Shift+I',
        click: a('create-issue-in-repository-on-github'),
        visible: h.enableCreateGitHubIssueFromMenu()
      }, F, {
        label: '存储库设置 Repository &settings\u2026',
        id: 'show-repository-settings',
        click: a('show-repository-settings')
      }]
    }), T.push({
      label: '分支&(Branch)',
      id: 'branch',
      submenu: [{
        label: '新建分支 New &branch\u2026',
        id: 'create-branch',
        accelerator: 'CmdOrCtrl+Shift+N',
        click: a('create-branch')
      }, {
        label: '重命名 &Rename\u2026',
        id: 'rename-branch',
        accelerator: 'CmdOrCtrl+Shift+R',
        click: a('rename-branch')
      }, {
        label: '删除 &Delete\u2026',
        id: 'delete-branch',
        accelerator: 'CmdOrCtrl+Shift+D',
        click: a('delete-branch')
      }, F, {
        label: '放弃所有更改 Discard\u2026',
        id: 'discard-all-changes',
        accelerator: 'CmdOrCtrl+Shift+Backspace',
        click: a('discard-all-changes')
      }, F, {
        label: `&更新自${l}`,
        id: 'update-branch',
        accelerator: 'CmdOrCtrl+Shift+U',
        click: a('update-branch')
      }, {
        label: '&与分支比较 Compare',
        id: 'compare-to-branch',
        accelerator: 'CmdOrCtrl+Shift+B',
        click: a('compare-to-branch')
      }, {
        label: '&合并到当前分支 Merge\u2026',
        id: 'merge-branch',
        accelerator: 'CmdOrCtrl+Shift+M',
        click: a('merge-branch')
      }, {
        label: '恢复当前分支 R&ebase\u2026',
        id: 'rebase-branch',
        accelerator: 'CmdOrCtrl+Shift+E',
        click: a('rebase-branch'),
        visible: h.enableRebaseDialog()
      }, F, {
        label: '前往GitHub比较 Compare',
        id: 'compare-on-github',
        accelerator: 'CmdOrCtrl+Shift+C',
        click: a('compare-on-github')
      }, {
        label: L,
        id: 'create-pull-request',
        accelerator: 'CmdOrCtrl+R',
        click: a('open-pull-request')
      }]
    }), !1;
    const I = {
        label: '反馈问题\u2026',
        click() {
          c.shell.openExternal('https://github.com/desktop/desktop/issues/new/choose').catch((e) => log.error('Failed opening issue creation page', e))
        }
      },
      D = {
        label: '&联系Github支持\u2026',
        click() {
          c.shell.openExternal(`https://github.com/contact?from_desktop_app=1&app_version=${c.app.getVersion()}`).catch((e) => log.error('Failed opening contact support page', e))
        }
      },
      z = {
        label: '用户指南 User Guides',
        click() {
          c.shell.openExternal('https://help.github.com/desktop/guides/').catch((e) => log.error('Failed opening user guides page', e))
        }
      },
      j = {
        label: '键盘快捷键 keyboard shortcuts',
        click() {
          c.shell.openExternal('https://help.github.com/en/desktop/getting-started-with-github-desktop/keyboard-shortcuts-in-github-desktop').catch((e) => log.error('Failed opening keyboard shortcuts page', e))
        }
      },
      B = '日志文件夹S&how logs in Explorer',
      U = {
        label: B,
        click() {
          const e = m.getLogDirectoryPath();
          g.ensureDir(e).then(() => {
            f.openDirectorySafe(e)
          }).catch((e) => {
            log.error('Failed opening logs directory', e)
          })
        }
      };
    return !1, T.push({
      label: '&帮助(Help)',
      submenu: [...[I, D, z, j, U], F, {
        label: '关于Github桌面 &About GitHub Desktop',
        click: a('show-about'),
        id: 'about'
      }]
    }), p.ensureItemIds(T), c.Menu.buildFromTemplate(T)
  }

  function o(e, n) {
    return e ? n ? 'Force P&ush\u2026' : '强制推送Force P&ush' : '推送 P&ush'
  }

  function i(e) {
    return e ? 'H&ide stashed changes' : 'Sho&w stashed changes'
  }

  function a(e) {
    return (n, t) => {
      t ? t.webContents.send('menu-event', {
        name: e
      }) : c.ipcMain.emit('menu-event', {
        name: e
      })
    }
  }

  function s(e, n) {
    return e.reduce((e, t) => l(t - n) < l(e - n) ? t : e)
  }

  function d(e) {
    return (n, t) => {
      if (t) {
        const {
          webContents: n
        } = t;
        if (e === E.Reset) n.setZoomFactor(1), n.send('zoom-factor-changed', 1);
        else {
          const t = n.getZoomFactor(),
            r = e === E.In ? C : k,
            o = s(r, t),
            i = r.find((n) => e === E.In ? n > o : n < o),
            a = void 0 === i ? o : i;
          n.setZoomFactor(a), n.send('zoom-factor-changed', a)
        }
      }
    }
  }
  var l = Math.abs;
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const c = t(4),
    p = t(24),
    u = t(62),
    m = t(44),
    g = t(20),
    f = t(23),
    h = t(61),
    y = t(60),
    _ = '在命令提示符下打开 Command Prompt',
    b = '创建拉取请求 Create &pull request',
    S = '显示拉取请求 Show &pull request',
    w = '默认分支 default branch',
    v = '&删除 Remove\u2026',
    x = '&删除 Remove';
  var E;
  (function (e) {
    e[e.Reset = 0] = 'Reset', e[e.In = 1] = 'In', e[e.Out = 2] = 'Out'
  })(E || (E = {})), n.buildDefaultMenu = r;
  const C = [1, 1.1, 1.25, 1.5, 1.75, 2],
    k = C.slice().reverse()
}, function (e, n, t) {
  'use strict';
  const r = t(0),
    o = t(4),
    i = t(36),
    a = t(35);
  e.exports = function (e) {
    function n(e) {
      return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
    }

    function t() {
      var e = Number.isInteger;
      return S && e(S.x) && e(S.y) && e(S.width) && 0 < S.width && e(S.height) && 0 < S.height
    }

    function s() {
      const e = b.getPrimaryDisplay().bounds;
      S = {
        width: E.defaultWidth || 800,
        height: E.defaultHeight || 600,
        x: 0,
        y: 0,
        displayBounds: e
      }
    }

    function d(e) {
      return S.x >= e.x && S.y >= e.y && S.x + S.width <= e.x + e.width && S.y + S.height <= e.y + e.height
    }

    function l() {
      const e = b.getAllDisplays().some((e) => d(e.bounds));
      if (!e) return s()
    }

    function c() {
      const e = S && (t() || S.isMaximized || S.isFullScreen);
      return e ? void(t() && S.displayBounds && l()) : void(S = null)
    }

    function p(e) {
      if (e = e || w, !!e) try {
        const t = e.getBounds();
        n(e) && (S.x = t.x, S.y = t.y, S.width = t.width, S.height = t.height), S.isMaximized = e.isMaximized(), S.isFullScreen = e.isFullScreen(), S.displayBounds = b.getDisplayMatching(t).bounds
      } catch (e) {}
    }

    function u(e) {
      e && p(e);
      try {
        a.sync(r.dirname(C)), i.writeFileSync(C, S)
      } catch (e) {}
    }

    function m() {
      clearTimeout(v), v = setTimeout(p, x)
    }

    function g() {
      p()
    }

    function f() {
      y(), u()
    }

    function h(e) {
      E.maximize && S.isMaximized && e.maximize(), E.fullScreen && S.isFullScreen && e.setFullScreen(!0), e.on('resize', m), e.on('move', m), e.on('close', g), e.on('closed', f), w = e
    }

    function y() {
      w && (w.removeListener('resize', m), w.removeListener('move', m), clearTimeout(v), w.removeListener('close', g), w.removeListener('closed', f), w = null)
    }
    const _ = o.app || o.remote.app,
      b = o.screen || o.remote.screen;
    let S, w, v;
    const x = 100,
      E = Object.assign({
        file: 'window-state.json',
        path: _.getPath('userData'),
        maximize: !0,
        fullScreen: !0
      }, e),
      C = r.join(E.path, E.file);
    try {
      S = i.readFileSync(C)
    } catch (e) {}
    return c(), S = Object.assign({
      width: E.defaultWidth || 800,
      height: E.defaultHeight || 600
    }, S), {
      get x() {
        return S.x
      },
      get y() {
        return S.y
      },
      get width() {
        return S.width
      },
      get height() {
        return S.height
      },
      get displayBounds() {
        return S.displayBounds
      },
      get isMaximized() {
        return S.isMaximized
      },
      get isFullScreen() {
        return S.isFullScreen
      },
      saveState: u,
      unmanage: y,
      manage: h,
      resetStateToDefault: s
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e) {
    if (e.accelerator) return e.accelerator;
    if (e.role) {
      const n = e.getDefaultRoleAccelerator;
      if ('function' == typeof n) try {
        const t = n.call(e);
        if ('string' == typeof t) return t
      } catch (e) {
        console.error('Could not retrieve default accelerator', e)
      }
    }
    return null
  }

  function o(e) {
    const n = e.match(/&([^&])/);
    return n ? n[1] : null
  }

  function i(e) {
    switch (e) {
      case 'normal':
      case 'separator':
      case 'submenu':
      case 'checkbox':
      case 'radio':
        return e;
      default:
        throw new Error(`Unable to parse string ${e} to a valid menu item type`);
    }
  }

  function a(e) {
    const n = e.id;
    if (!n) throw new Error(`menuItem must specify id: ${e.label}`);
    const t = e.enabled,
      a = e.visible,
      d = e.label,
      l = e.checked,
      c = r(e),
      u = o(e.label),
      m = i(e.type);
    switch (m) {
      case 'normal':
        return {
          id: n, type: 'menuItem', label: d, enabled: t, visible: a, accelerator: c, accessKey: u
        };
      case 'separator':
        return {
          id: n, type: 'separator', visible: a
        };
      case 'submenu':
        const r = s(e.submenu, n);
        return {
          id: n, type: 'submenuItem', label: d, enabled: t, visible: a, menu: r, accessKey: u
        };
      case 'checkbox':
        return {
          id: n, type: 'checkbox', label: d, enabled: t, visible: a, accelerator: c, checked: l, accessKey: u
        };
      case 'radio':
        return {
          id: n, type: 'radio', label: d, enabled: t, visible: a, accelerator: c, checked: l, accessKey: u
        };
      default:
        return p.assertNever(m, `Unknown menu item type ${m}`);
    }
  }

  function s(e, n) {
    const t = e.items.map(a);
    return !1, {
      id: n,
      type: 'menu',
      items: t
    }
  }

  function d(e, n = new Map) {
    for (const t of e.items) n.set(t.id, t), 'submenuItem' === t.type && d(t.menu, n);
    return n
  }

  function l(e) {
    return 'menuItem' === e.type || 'submenuItem' === e.type || 'checkbox' === e.type || 'radio' === e.type
  }

  function c(e) {
    return 'separator' !== e.type && e.enabled && e.visible
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const p = t(27);
  n.menuFromElectronMenu = s, n.itemMayHaveAccessKey = l, n.itemIsSelectable = c, n.findItemByAccessKey = function (e, n) {
    const t = e.toLowerCase();
    for (const r of n)
      if (l(r) && r.accessKey && r.accessKey.toLowerCase() === t) return r;
    return null
  };
  class u {
    constructor(e, n, t) {
      this.menu = e, this.openMenus = n, this.menuItemById = t
    }
    static fromMenu(e) {
      const n = d(e);
      return new u(e, [e], n)
    }
    getItemById(e) {
      return this.menuItemById.get(e)
    }
    withMenu(e) {
      const n = d(e),
        t = [];
      for (const r of this.openMenus) {
        let o;
        if (!r.id) o = e;
        else {
          const e = n.get(r.id);
          if (e && 'submenuItem' === e.type) o = e.menu;
          else break
        }
        let i;
        r.selectedItem && (i = n.get(r.selectedItem.id)), t.push({
          id: o.id,
          type: 'menu',
          items: o.items,
          selectedItem: i
        })
      }
      return new u(e, t, n)
    }
    withOpenedMenu(e, n = !1) {
      const t = this.menuItemById.get(e.id);
      if (!t) return this;
      if ('submenuItem' !== t.type) throw new Error(`Attempt to open a submenu from an item of wrong type: ${t.type}`);
      const r = this.openMenus.findIndex((e) => -1 !== e.items.indexOf(t));
      if (-1 === r) return this;
      const o = this.openMenus.slice(0, r + 1);
      if (n) {
        const e = t.menu.items.find(c);
        o.push(Object.assign({}, t.menu, {
          selectedItem: e
        }))
      } else o.push(t.menu);
      return new u(this.menu, o, this.menuItemById)
    }
    withClosedMenu(e) {
      if (!e.id) return this;
      const n = this.openMenus.findIndex((n) => n.id === e.id);
      if (-1 === n) return this;
      const t = this.openMenus.slice(0, n);
      return new u(this.menu, t, this.menuItemById)
    }
    withLastMenu(e) {
      const n = this.openMenus.findIndex((n) => n.id === e.id);
      if (-1 === n) return this;
      const t = this.openMenus.slice(0, n + 1);
      return new u(this.menu, t, this.menuItemById)
    }
    withSelectedItem(e) {
      const n = this.menuItemById.get(e.id);
      if (!n) return this;
      const t = this.openMenus.findIndex((e) => -1 !== e.items.indexOf(n));
      if (-1 === t) return this;
      const r = this.openMenus.slice(),
        o = r[t];
      r[t] = Object.assign({}, o, {
        selectedItem: n
      });
      for (let n = t + 1; n < r.length; n++) r[n] = Object.assign({}, r[n], {
        selectedItem: void 0
      });
      for (let n = t - 1; 0 <= n; n--) {
        const e = r[n],
          t = r[n + 1],
          o = e.items.find((e) => 'submenuItem' === e.type && e.id === t.id);
        r[n] = Object.assign({}, e, {
          selectedItem: o
        })
      }
      return new u(this.menu, r, this.menuItemById)
    }
    withDeselectedMenu(e) {
      const n = this.openMenus.findIndex((n) => n.id === e.id);
      if (-1 === n) return this;
      const t = this.openMenus[n],
        r = this.openMenus.slice();
      r[n] = Object.assign({}, t, {
        selectedItem: void 0
      });
      for (let t = n - 1; 0 <= t; t--) {
        const e = r[t],
          n = r[t + 1],
          o = e.items.find((e) => 'submenuItem' === e.type && e.id === n.id);
        r[t] = Object.assign({}, e, {
          selectedItem: o
        })
      }
      return new u(this.menu, r, this.menuItemById)
    }
    withReset() {
      return new u(this.menu, [this.menu], this.menuItemById)
    }
  }
  n.AppMenu = u
}, function (e, n, t) {
  'use strict';
  const r = t(0);
  e.exports = (e, n) => {
    if ('string' != typeof e) throw new TypeError(`Expected a string, got ${typeof e}`);
    n = Object.assign({
      resolve: !0
    }, n);
    let t = e;
    return n.resolve && (t = r.resolve(e)), t = t.replace(/\\/g, '/'), '/' !== t[0] && (t = `/${t}`), encodeURI(`file://${t}`).replace(/[?#]/g, encodeURIComponent)
  }
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(0),
    o = t(66);
  n.encodePathAsUrl = function (...e) {
    const n = r.resolve(...e);
    return o(n)
  }
}, function (e, n, t) {
  (function () {
    var n, r, o;
    r = null, e.exports = n = function () {
      function e() {
        var e, n, t;
        for (this.disposables = new Set, n = 0, t = arguments.length; n < t; n++) e = arguments[n], this.add(e)
      }
      return e.prototype.disposed = !1, e.prototype.dispose = function () {
        this.disposed || (this.disposed = !0, this.disposables.forEach(function (e) {
          return e.dispose()
        }), this.disposables = null)
      }, e.prototype.add = function () {
        var e, n, t;
        if (!this.disposed)
          for (n = 0, t = arguments.length; n < t; n += 1) e = arguments[n], o(e), this.disposables.add(e)
      }, e.prototype.remove = function (e) {
        this.disposed || this.disposables['delete'](e)
      }, e.prototype['delete'] = function (e) {
        this.remove(e)
      }, e.prototype.clear = function () {
        this.disposed || this.disposables.clear()
      }, e
    }(), o = function (e) {
      if (null == r && (r = t(17)), !r.isDisposable(e)) throw new TypeError('Arguments to CompositeDisposable.add must have a .dispose() method')
    }
  }).call(this)
}, function (e, n, t) {
  (function () {
    var n, r;
    n = t(17), e.exports = r = function () {
      function e() {
        this.clear()
      }
      return e.exceptionHandlers = [], e.onEventHandlerException = function (e) {
        return 0 === this.exceptionHandlers.length && (this.dispatch = this.exceptionHandlingDispatch), this.exceptionHandlers.push(e), new n(function (n) {
          return function () {
            if (n.exceptionHandlers.splice(n.exceptionHandlers.indexOf(e), 1), 0 === n.exceptionHandlers.length) return n.dispatch = n.simpleDispatch
          }
        }(this))
      }, e.simpleDispatch = function (e, n) {
        return e(n)
      }, e.exceptionHandlingDispatch = function (e, n) {
        var t, r, o, i, a, s;
        try {
          return e(n)
        } catch (e) {
          for (t = e, a = this.exceptionHandlers, s = [], (o = 0, i = a.length); o < i; o++) r = a[o], s.push(r(t));
          return s
        }
      }, e.dispatch = e.simpleDispatch, e.prototype.disposed = !1, e.prototype.clear = function () {
        return this.handlersByEventName = {}
      }, e.prototype.dispose = function () {
        return this.handlersByEventName = null, this.disposed = !0
      }, e.prototype.on = function (e, t, r) {
        var o;
        if (null == r && (r = !1), this.disposed) throw new Error('Emitter has been disposed');
        if ('function' != typeof t) throw new Error('Handler must be a function');
        return this.handlersByEventName[e] = (o = this.handlersByEventName[e]) ? r ? [t].concat(o) : o.concat(t) : [t], new n(this.off.bind(this, e, t))
      }, e.prototype.once = function (e, n, t) {
        var r, o;
        return null == t && (t = !1), o = function (e) {
          return r.dispose(), n(e)
        }, r = this.on(e, o, t)
      }, e.prototype.preempt = function (e, n) {
        return this.on(e, n, !0)
      }, e.prototype.off = function (e, n) {
        var t, r, o, i, a;
        if (!this.disposed && (o = this.handlersByEventName[e])) {
          for (r = [], i = 0, a = o.length; i < a; i++) t = o[i], t !== n && r.push(t);
          0 < r.length ? this.handlersByEventName[e] = r : delete this.handlersByEventName[e]
        }
      }, e.prototype.emit = function (e, n) {
        var t, r, o, i, a;
        if (r = null == (a = this.handlersByEventName) ? void 0 : a[e])
          for (o = 0, i = r.length; o < i; o++) t = r[o], this.constructor.dispatch(t, n)
      }, e.prototype.emitAsync = function (e, n) {
        var t, r, o, i;
        return (r = null == (i = this.handlersByEventName) ? void 0 : i[e]) ? (o = function () {
          var e, o, i;
          for (i = [], e = 0, o = r.length; e < o; e++) t = r[e], i.push(this.constructor.dispatch(t, n));
          return i
        }.call(this), Promise.all(o).then(function () {})) : Promise.resolve()
      }, e.prototype.getEventNames = function () {
        return Object.keys(this.handlersByEventName)
      }, e.prototype.listenerCountForEventName = function (e) {
        var n, t;
        return null == (n = null == (t = this.handlersByEventName[e]) ? void 0 : t.length) ? 0 : n
      }, e.prototype.getTotalListenerCount = function () {
        var e, n, t, r, o;
        for (n = 0, o = Object.keys(this.handlersByEventName), (t = 0, r = o.length); t < r; t++) e = o[t], n += this.handlersByEventName[e].length;
        return n
      }, e
    }()
  }).call(this)
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(4),
    o = t(29),
    i = t(67),
    a = t(28),
    s = t(65),
    d = t(26),
    l = t(0),
    c = t(64);
  class p {
    constructor() {
      this.emitter = new o.Emitter, this._loadTime = null, this._rendererReadyTime = null, this.minWidth = 960, this.minHeight = 660;
      const e = c({
          defaultWidth: this.minWidth,
          defaultHeight: this.minHeight
        }),
        n = {
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height,
          minWidth: this.minWidth,
          minHeight: this.minHeight,
          show: !1,
          backgroundColor: '#fff',
          webPreferences: {
            disableBlinkFeatures: 'Auxclick',
            experimentalFeatures: !0,
            nodeIntegration: !0
          },
          acceptFirstMouse: !0
        };
      n.frame = !1, this.window = new r.BrowserWindow(n), e.manage(this.window);
      let t = !1;
      r.app.on('before-quit', () => {
        t = !0
      }), r.ipcMain.on('will-quit', (e) => {
        t = !0, e.returnValue = !0
      }), !1, this.window.once('ready-to-show', () => {
        this.window.on('unmaximize', () => {
          setTimeout(() => {
            const e = this.window.getBounds();
            e.width += 1, this.window.setBounds(e), e.width -= 1, this.window.setBounds(e)
          }, 5)
        })
      })
    }
    load() {
      let e = 0;
      this.window.webContents.once('did-start-loading', () => {
        this._rendererReadyTime = null, this._loadTime = null, e = d.now()
      }), this.window.webContents.once('did-finish-load', () => {
        !1, this._loadTime = d.now() - e, this.maybeEmitDidLoad()
      }), this.window.webContents.on('did-finish-load', () => {
        this.window.webContents.setVisualZoomLevelLimits(1, 1)
      }), this.window.webContents.on('did-fail-load', () => {
        this.window.webContents.openDevTools(), this.window.show()
      }), r.ipcMain.once('renderer-ready', (e, n) => {
        this._rendererReadyTime = n, this.maybeEmitDidLoad()
      }), this.window.on('focus', () => this.window.webContents.send('focus')), this.window.on('blur', () => this.window.webContents.send('blur')), a.registerWindowStateChangedEvents(this.window), this.window.loadURL(i.encodePathAsUrl(__dirname, 'index.html'))
    }
    maybeEmitDidLoad() {
      this.rendererLoaded && this.emitter.emit('did-load', null)
    }
    get rendererLoaded() {
      return !!this.loadTime && !!this.rendererReadyTime
    }
    onClose(e) {
      this.window.on('closed', e)
    }
    onDidLoad(e) {
      return this.emitter.on('did-load', e)
    }
    isMinimized() {
      return this.window.isMinimized()
    }
    isVisible() {
      return this.window.isVisible()
    }
    restore() {
      this.window.restore()
    }
    focus() {
      this.window.focus()
    }
    show() {
      this.window.show()
    }
    sendMenuEvent(e) {
      this.show(), this.window.webContents.send('menu-event', {
        name: e
      })
    }
    sendURLAction(e) {
      this.show(), this.window.webContents.send('url-action', {
        action: e
      })
    }
    sendLaunchTimingStats(e) {
      this.window.webContents.send('launch-timing-stats', {
        stats: e
      })
    }
    sendAppMenu() {
      const e = r.Menu.getApplicationMenu();
      if (e) {
        const n = s.menuFromElectronMenu(e);
        this.window.webContents.send('app-menu', {
          menu: n
        })
      }
    }
    sendCertificateError(e, n, t) {
      this.window.webContents.send('certificate-error', {
        certificate: e,
        error: n,
        url: t
      })
    }
    showCertificateTrustDialog(e, n) {
      const t = r.dialog;
      t.showCertificateTrustDialog(this.window, {
        certificate: e,
        message: n
      }, () => {})
    }
    sendException(e) {
      const n = {
        stack: e.stack,
        message: e.message,
        name: e.name
      };
      this.window.webContents.send('main-process-exception', n)
    }
    get loadTime() {
      return this._loadTime
    }
    get rendererReadyTime() {
      return this._rendererReadyTime
    }
    destroy() {
      this.window.destroy()
    }
  }
  n.AppWindow = p
}, function (e) {
  e.exports = require('module')
}, function (e, n, t) {
  function r(e, n, t, r, o) {
    this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == n ? null : n, this.source = null == t ? null : t, this.name = null == o ? null : o, this[s] = !0, null != r && this.add(r)
  }
  var o = t(32).SourceMapGenerator,
    a = t(11),
    i = /(\r?\n)/,
    s = '$$$isSourceNode$$$';
  r.fromStringWithSourceMap = function (e, n, t) {
    function o(e, n) {
      if (null === e || void 0 === e.source) s.add(n);
      else {
        var o = t ? a.join(t, e.source) : e.source;
        s.add(new r(e.originalLine, e.originalColumn, o, n, e.name))
      }
    }
    var s = new r,
      d = e.split(i),
      l = 0,
      c = function () {
        function e() {
          return l < d.length ? d[l++] : void 0
        }
        var n = e(),
          t = e() || '';
        return n + t
      },
      p = 1,
      u = 0,
      m = null;
    return n.eachMapping(function (e) {
      if (null !== m)
        if (p < e.generatedLine) o(m, c()), p++, u = 0;
        else {
          var n = d[l],
            t = n.substr(0, e.generatedColumn - u);
          return d[l] = n.substr(e.generatedColumn - u), u = e.generatedColumn, o(m, t), void(m = e)
        } for (; p < e.generatedLine;) s.add(c()), p++;
      if (u < e.generatedColumn) {
        var n = d[l];
        s.add(n.substr(0, e.generatedColumn)), d[l] = n.substr(e.generatedColumn), u = e.generatedColumn
      }
      m = e
    }, this), l < d.length && (m && o(m, c()), s.add(d.splice(l).join(''))), n.sources.forEach(function (e) {
      var r = n.sourceContentFor(e);
      null != r && (null != t && (e = a.join(t, e)), s.setSourceContent(e, r))
    }), s
  }, r.prototype.add = function (e) {
    if (Array.isArray(e)) e.forEach(function (e) {
      this.add(e)
    }, this);
    else if (e[s] || 'string' == typeof e) e && this.children.push(e);
    else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e);
    return this
  }, r.prototype.prepend = function (e) {
    if (Array.isArray(e))
      for (var n = e.length - 1; 0 <= n; n--) this.prepend(e[n]);
    else if (e[s] || 'string' == typeof e) this.children.unshift(e);
    else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e);
    return this
  }, r.prototype.walk = function (e) {
    for (var n = 0, t = this.children.length, r; n < t; n++) r = this.children[n], r[s] ? r.walk(e) : '' !== r && e(r, {
      source: this.source,
      line: this.line,
      column: this.column,
      name: this.name
    })
  }, r.prototype.join = function (e) {
    var n = this.children.length,
      t, r;
    if (0 < n) {
      for (t = [], r = 0; r < n - 1; r++) t.push(this.children[r]), t.push(e);
      t.push(this.children[r]), this.children = t
    }
    return this
  }, r.prototype.replaceRight = function (e, n) {
    var t = this.children[this.children.length - 1];
    return t[s] ? t.replaceRight(e, n) : 'string' == typeof t ? this.children[this.children.length - 1] = t.replace(e, n) : this.children.push(''.replace(e, n)), this
  }, r.prototype.setSourceContent = function (e, n) {
    this.sourceContents[a.toSetString(e)] = n
  }, r.prototype.walkSourceContents = function (e) {
    for (var n = 0, t = this.children.length; n < t; n++) this.children[n][s] && this.children[n].walkSourceContents(e);
    for (var r = Object.keys(this.sourceContents), n = 0, t = r.length; n < t; n++) e(a.fromSetString(r[n]), this.sourceContents[r[n]])
  }, r.prototype.toString = function () {
    var e = '';
    return this.walk(function (n) {
      e += n
    }), e
  }, r.prototype.toStringWithSourceMap = function (e) {
    var n = {
        code: '',
        line: 1,
        column: 0
      },
      t = new o(e),
      r = !1,
      i = null,
      a = null,
      s = null,
      d = null;
    return this.walk(function (e, o) {
      n.code += e, null !== o.source && null !== o.line && null !== o.column ? ((i !== o.source || a !== o.line || s !== o.column || d !== o.name) && t.addMapping({
        source: o.source,
        original: {
          line: o.line,
          column: o.column
        },
        generated: {
          line: n.line,
          column: n.column
        },
        name: o.name
      }), i = o.source, a = o.line, s = o.column, d = o.name, r = !0) : r && (t.addMapping({
        generated: {
          line: n.line,
          column: n.column
        }
      }), i = null, r = !1);
      for (var l = 0, c = e.length; l < c; l++) e.charCodeAt(l) === 10 ? (n.line++, n.column = 0, l + 1 === c ? (i = null, r = !1) : r && t.addMapping({
        source: o.source,
        original: {
          line: o.line,
          column: o.column
        },
        generated: {
          line: n.line,
          column: n.column
        },
        name: o.name
      })) : n.column++
    }), this.walkSourceContents(function (e, n) {
      t.setSourceContent(e, n)
    }), {
      code: n.code,
      map: t
    }
  }, n.SourceNode = r
}, function (e, n) {
  function t(e, n, t) {
    var r = e[n];
    e[n] = e[t], e[t] = r
  }

  function o(e, n) {
    return Math.round(e + Math.random() * (n - e))
  }

  function a(e, n, s, d) {
    if (s < d) {
      var r = o(s, d),
        l = s - 1;
      t(e, r, d);
      for (var i = e[d], c = s; c < d; c++) 0 >= n(e[c], i) && (l += 1, t(e, l, c));
      t(e, l + 1, c);
      var p = l + 1;
      a(e, n, s, p - 1), a(e, n, p + 1, d)
    }
  }
  n.quickSort = function (e, n) {
    a(e, n, 0, e.length - 1)
  }
}, function (e, n) {
  function t(e, r, o, i, a, s) {
    var d = Math.floor((r - e) / 2) + e,
      l = a(o, i[d], !0);
    return 0 === l ? d : 0 < l ? 1 < r - d ? t(d, r, o, i, a, s) : s == n.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : d : 1 < d - e ? t(e, d, o, i, a, s) : s == n.LEAST_UPPER_BOUND ? d : 0 > e ? -1 : e
  }
  n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2, n.search = function (e, r, o, i) {
    if (0 === r.length) return -1;
    var a = t(-1, r.length, e, r, o, i || n.GREATEST_LOWER_BOUND);
    if (0 > a) return -1;
    for (; 0 <= a - 1 && !(0 !== o(r[a], r[a - 1], !0));) --a;
    return a
  }
}, function (e, n, t) {
  function r(e) {
    var n = e;
    return 'string' == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, ''))), null == n.sections ? new o(n) : new i(n)
  }

  function o(e) {
    var n = e;
    'string' == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, '')));
    var t = d.getArg(n, 'version'),
      r = d.getArg(n, 'sources'),
      o = d.getArg(n, 'names', []),
      i = d.getArg(n, 'sourceRoot', null),
      a = d.getArg(n, 'sourcesContent', null),
      s = d.getArg(n, 'mappings'),
      c = d.getArg(n, 'file', null);
    if (t != this._version) throw new Error('Unsupported version: ' + t);
    r = r.map(String).map(d.normalize).map(function (e) {
      return i && d.isAbsolute(i) && d.isAbsolute(e) ? d.relative(i, e) : e
    }), this._names = l.fromArray(o.map(String), !0), this._sources = l.fromArray(r, !0), this.sourceRoot = i, this.sourcesContent = a, this._mappings = s, this.file = c
  }

  function a() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
  }

  function i(e) {
    var n = e;
    'string' == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, '')));
    var t = d.getArg(n, 'version'),
      o = d.getArg(n, 'sections');
    if (t != this._version) throw new Error('Unsupported version: ' + t);
    this._sources = new l, this._names = new l;
    var i = {
      line: -1,
      column: 0
    };
    this._sections = o.map(function (e) {
      if (e.url) throw new Error('Support for url field in sections not implemented.');
      var n = d.getArg(e, 'offset'),
        t = d.getArg(n, 'line'),
        o = d.getArg(n, 'column');
      if (t < i.line || t === i.line && o < i.column) throw new Error('Section offsets must be ordered and non-overlapping.');
      return i = n, {
        generatedOffset: {
          generatedLine: t + 1,
          generatedColumn: o + 1
        },
        consumer: new r(d.getArg(e, 'map'))
      }
    })
  }
  var d = t(11),
    s = t(74),
    l = t(30).ArraySet,
    c = t(31),
    p = t(73).quickSort;
  r.fromSourceMap = function (e) {
    return o.fromSourceMap(e)
  }, r.prototype._version = 3, r.prototype.__generatedMappings = null, Object.defineProperty(r.prototype, '_generatedMappings', {
    get: function () {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
    }
  }), r.prototype.__originalMappings = null, Object.defineProperty(r.prototype, '_originalMappings', {
    get: function () {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
    }
  }), r.prototype._charIsMappingSeparator = function (e, n) {
    var t = e.charAt(n);
    return ';' === t || ',' === t
  }, r.prototype._parseMappings = function () {
    throw new Error('Subclasses must implement _parseMappings')
  }, r.GENERATED_ORDER = 1, r.ORIGINAL_ORDER = 2, r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2, r.prototype.eachMapping = function (e, n, t) {
    var o = t || r.GENERATED_ORDER,
      i;
    switch (o) {
      case r.GENERATED_ORDER:
        i = this._generatedMappings;
        break;
      case r.ORIGINAL_ORDER:
        i = this._originalMappings;
        break;
      default:
        throw new Error('Unknown order of iteration.');
    }
    var a = this.sourceRoot;
    i.map(function (e) {
      var n = null === e.source ? null : this._sources.at(e.source);
      return null != n && null != a && (n = d.join(a, n)), {
        source: n,
        generatedLine: e.generatedLine,
        generatedColumn: e.generatedColumn,
        originalLine: e.originalLine,
        originalColumn: e.originalColumn,
        name: null === e.name ? null : this._names.at(e.name)
      }
    }, this).forEach(e, n || null)
  }, r.prototype.allGeneratedPositionsFor = function (e) {
    var n = d.getArg(e, 'line'),
      t = {
        source: d.getArg(e, 'source'),
        originalLine: n,
        originalColumn: d.getArg(e, 'column', 0)
      };
    if (null != this.sourceRoot && (t.source = d.relative(this.sourceRoot, t.source)), !this._sources.has(t.source)) return [];
    t.source = this._sources.indexOf(t.source);
    var r = [],
      o = this._findMapping(t, this._originalMappings, 'originalLine', 'originalColumn', d.compareByOriginalPositions, s.LEAST_UPPER_BOUND);
    if (0 <= o) {
      var i = this._originalMappings[o];
      if (void 0 === e.column)
        for (var a = i.originalLine; i && i.originalLine === a;) r.push({
          line: d.getArg(i, 'generatedLine', null),
          column: d.getArg(i, 'generatedColumn', null),
          lastColumn: d.getArg(i, 'lastGeneratedColumn', null)
        }), i = this._originalMappings[++o];
      else
        for (var l = i.originalColumn; i && i.originalLine === n && i.originalColumn == l;) r.push({
          line: d.getArg(i, 'generatedLine', null),
          column: d.getArg(i, 'generatedColumn', null),
          lastColumn: d.getArg(i, 'lastGeneratedColumn', null)
        }), i = this._originalMappings[++o]
    }
    return r
  }, n.SourceMapConsumer = r, o.prototype = Object.create(r.prototype), o.prototype.consumer = r, o.fromSourceMap = function (e) {
    var n = Object.create(o.prototype),
      t = n._names = l.fromArray(e._names.toArray(), !0),
      r = n._sources = l.fromArray(e._sources.toArray(), !0);
    n.sourceRoot = e._sourceRoot, n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot), n.file = e._file;
    for (var s = e._mappings.toArray().slice(), c = n.__generatedMappings = [], u = n.__originalMappings = [], m = 0, i = s.length; m < i; m++) {
      var g = s[m],
        f = new a;
      f.generatedLine = g.generatedLine, f.generatedColumn = g.generatedColumn, g.source && (f.source = r.indexOf(g.source), f.originalLine = g.originalLine, f.originalColumn = g.originalColumn, g.name && (f.name = t.indexOf(g.name)), u.push(f)), c.push(f)
    }
    return p(n.__originalMappings, d.compareByOriginalPositions), n
  }, o.prototype._version = 3, Object.defineProperty(o.prototype, 'sources', {
    get: function () {
      return this._sources.toArray().map(function (e) {
        return null == this.sourceRoot ? e : d.join(this.sourceRoot, e)
      }, this)
    }
  }), o.prototype._parseMappings = function (e) {
    for (var n = 1, t = 0, r = 0, o = 0, i = 0, s = 0, l = e.length, u = 0, m = {}, g = {}, f = [], h = [], y, _, b, S, w; u < l;)
      if (';' === e.charAt(u)) n++, u++, t = 0;
      else if (',' === e.charAt(u)) u++;
    else {
      for (y = new a, y.generatedLine = n, S = u; S < l && !this._charIsMappingSeparator(e, S); S++);
      if (_ = e.slice(u, S), b = m[_], b) u += _.length;
      else {
        for (b = []; u < S;) c.decode(e, u, g), w = g.value, u = g.rest, b.push(w);
        if (2 === b.length) throw new Error('Found a source, but no line and column');
        if (3 === b.length) throw new Error('Found a source and line, but no column');
        m[_] = b
      }
      y.generatedColumn = t + b[0], t = y.generatedColumn, 1 < b.length && (y.source = i + b[1], i += b[1], y.originalLine = r + b[2], r = y.originalLine, y.originalLine += 1, y.originalColumn = o + b[3], o = y.originalColumn, 4 < b.length && (y.name = s + b[4], s += b[4])), h.push(y), 'number' == typeof y.originalLine && f.push(y)
    }
    p(h, d.compareByGeneratedPositionsDeflated), this.__generatedMappings = h, p(f, d.compareByOriginalPositions), this.__originalMappings = f
  }, o.prototype._findMapping = function (e, n, t, r, o, i) {
    if (0 >= e[t]) throw new TypeError('Line must be greater than or equal to 1, got ' + e[t]);
    if (0 > e[r]) throw new TypeError('Column must be greater than or equal to 0, got ' + e[r]);
    return s.search(e, n, o, i)
  }, o.prototype.computeColumnSpans = function () {
    for (var e = 0, n; e < this._generatedMappings.length; ++e) {
      if (n = this._generatedMappings[e], e + 1 < this._generatedMappings.length) {
        var t = this._generatedMappings[e + 1];
        if (n.generatedLine === t.generatedLine) {
          n.lastGeneratedColumn = t.generatedColumn - 1;
          continue
        }
      }
      n.lastGeneratedColumn = Infinity
    }
  }, o.prototype.originalPositionFor = function (e) {
    var n = {
        generatedLine: d.getArg(e, 'line'),
        generatedColumn: d.getArg(e, 'column')
      },
      t = this._findMapping(n, this._generatedMappings, 'generatedLine', 'generatedColumn', d.compareByGeneratedPositionsDeflated, d.getArg(e, 'bias', r.GREATEST_LOWER_BOUND));
    if (0 <= t) {
      var o = this._generatedMappings[t];
      if (o.generatedLine === n.generatedLine) {
        var i = d.getArg(o, 'source', null);
        null !== i && (i = this._sources.at(i), null != this.sourceRoot && (i = d.join(this.sourceRoot, i)));
        var a = d.getArg(o, 'name', null);
        return null !== a && (a = this._names.at(a)), {
          source: i,
          line: d.getArg(o, 'originalLine', null),
          column: d.getArg(o, 'originalColumn', null),
          name: a
        }
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    }
  }, o.prototype.hasContentsOfAllSources = function () {
    return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
      return null == e
    })
  }, o.prototype.sourceContentFor = function (e, n) {
    if (!this.sourcesContent) return null;
    if (null != this.sourceRoot && (e = d.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
    var t;
    if (null != this.sourceRoot && (t = d.urlParse(this.sourceRoot))) {
      var r = e.replace(/^file:\/\//, '');
      if ('file' == t.scheme && this._sources.has(r)) return this.sourcesContent[this._sources.indexOf(r)];
      if ((!t.path || '/' == t.path) && this._sources.has('/' + e)) return this.sourcesContent[this._sources.indexOf('/' + e)]
    }
    if (n) return null;
    throw new Error('"' + e + '" is not in the SourceMap.')
  }, o.prototype.generatedPositionFor = function (e) {
    var n = d.getArg(e, 'source');
    if (null != this.sourceRoot && (n = d.relative(this.sourceRoot, n)), !this._sources.has(n)) return {
      line: null,
      column: null,
      lastColumn: null
    };
    n = this._sources.indexOf(n);
    var t = {
        source: n,
        originalLine: d.getArg(e, 'line'),
        originalColumn: d.getArg(e, 'column')
      },
      o = this._findMapping(t, this._originalMappings, 'originalLine', 'originalColumn', d.compareByOriginalPositions, d.getArg(e, 'bias', r.GREATEST_LOWER_BOUND));
    if (0 <= o) {
      var i = this._originalMappings[o];
      if (i.source === t.source) return {
        line: d.getArg(i, 'generatedLine', null),
        column: d.getArg(i, 'generatedColumn', null),
        lastColumn: d.getArg(i, 'lastGeneratedColumn', null)
      }
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    }
  }, n.BasicSourceMapConsumer = o, i.prototype = Object.create(r.prototype), i.prototype.constructor = r, i.prototype._version = 3, Object.defineProperty(i.prototype, 'sources', {
    get: function () {
      for (var e = [], n = 0; n < this._sections.length; n++)
        for (var t = 0; t < this._sections[n].consumer.sources.length; t++) e.push(this._sections[n].consumer.sources[t]);
      return e
    }
  }), i.prototype.originalPositionFor = function (e) {
    var n = {
        generatedLine: d.getArg(e, 'line'),
        generatedColumn: d.getArg(e, 'column')
      },
      t = s.search(n, this._sections, function (e, n) {
        var t = e.generatedLine - n.generatedOffset.generatedLine;
        return t ? t : e.generatedColumn - n.generatedOffset.generatedColumn
      }),
      r = this._sections[t];
    return r ? r.consumer.originalPositionFor({
      line: n.generatedLine - (r.generatedOffset.generatedLine - 1),
      column: n.generatedColumn - (r.generatedOffset.generatedLine === n.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
      bias: e.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    }
  }, i.prototype.hasContentsOfAllSources = function () {
    return this._sections.every(function (e) {
      return e.consumer.hasContentsOfAllSources()
    })
  }, i.prototype.sourceContentFor = function (e, n) {
    for (var t = 0; t < this._sections.length; t++) {
      var r = this._sections[t],
        o = r.consumer.sourceContentFor(e, !0);
      if (o) return o
    }
    if (n) return null;
    throw new Error('"' + e + '" is not in the SourceMap.')
  }, i.prototype.generatedPositionFor = function (e) {
    for (var n = 0, t; n < this._sections.length; n++)
      if (t = this._sections[n], -1 !== t.consumer.sources.indexOf(d.getArg(e, 'source'))) {
        var r = t.consumer.generatedPositionFor(e);
        if (r) {
          var o = {
            line: r.line + (t.generatedOffset.generatedLine - 1),
            column: r.column + (t.generatedOffset.generatedLine === r.line ? t.generatedOffset.generatedColumn - 1 : 0)
          };
          return o
        }
      } return {
      line: null,
      column: null
    }
  }, i.prototype._parseMappings = function () {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var e = 0; e < this._sections.length; e++)
      for (var n = this._sections[e], t = n.consumer._generatedMappings, r = 0; r < t.length; r++) {
        var o = t[r],
          i = n.consumer._sources.at(o.source);
        null !== n.consumer.sourceRoot && (i = d.join(n.consumer.sourceRoot, i)), this._sources.add(i), i = this._sources.indexOf(i);
        var a = n.consumer._names.at(o.name);
        this._names.add(a), a = this._names.indexOf(a);
        var s = {
          source: i,
          generatedLine: o.generatedLine + (n.generatedOffset.generatedLine - 1),
          generatedColumn: o.generatedColumn + (n.generatedOffset.generatedLine === o.generatedLine ? n.generatedOffset.generatedColumn - 1 : 0),
          originalLine: o.originalLine,
          originalColumn: o.originalColumn,
          name: a
        };
        this.__generatedMappings.push(s), 'number' == typeof s.originalLine && this.__originalMappings.push(s)
      }
    p(this.__generatedMappings, d.compareByGeneratedPositionsDeflated), p(this.__originalMappings, d.compareByOriginalPositions)
  }, n.IndexedSourceMapConsumer = i
}, function (e, n, t) {
  function r(e, n) {
    var t = e.generatedLine,
      r = n.generatedLine,
      o = e.generatedColumn,
      a = n.generatedColumn;
    return r > t || r == t && a >= o || 0 >= i.compareByGeneratedPositionsInflated(e, n)
  }

  function o() {
    this._array = [], this._sorted = !0, this._last = {
      generatedLine: -1,
      generatedColumn: 0
    }
  }
  var i = t(11);
  o.prototype.unsortedForEach = function (e, n) {
    this._array.forEach(e, n)
  }, o.prototype.add = function (e) {
    r(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
  }, o.prototype.toArray = function () {
    return this._sorted || (this._array.sort(i.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
  }, n.MappingList = o
}, function (e, n) {
  var t = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
  n.encode = function (e) {
    if (0 <= e && e < t.length) return t[e];
    throw new TypeError('Must be between 0 and 63: ' + e)
  }, n.decode = function (e) {
    var n = 65,
      t = 97,
      r = 48;
    return n <= e && e <= 90 ? e - n : t <= e && e <= 122 ? e - t + 26 : r <= e && e <= 57 ? e - r + 52 : e == 43 ? 62 : e == 47 ? 63 : -1
  }
}, function (e, n, t) {
  n.SourceMapGenerator = t(32).SourceMapGenerator, n.SourceMapConsumer = t(75).SourceMapConsumer, n.SourceNode = t(72).SourceNode
}, function (e, n, t) {
  function r() {
    return !('browser' !== x) || 'node' !== x && 'undefined' != typeof window && 'function' == typeof XMLHttpRequest && !(window.require && window.module && window.process && 'renderer' === window.process.type)
  }

  function o() {
    return 'object' == typeof process && null !== process && 'function' == typeof process.on
  }

  function i(e) {
    return function (n) {
      for (var t = 0, r; t < e.length; t++)
        if (r = e[t](n), r) return r;
      return null
    }
  }

  function a(e, n) {
    if (!e) return n;
    var t = _.dirname(e),
      r = /^\w+:\/\/[^\/]*/.exec(t),
      o = r ? r[0] : '';
    return o + _.resolve(t.slice(o.length), n)
  }

  function s(e) {
    var n;
    if (r()) try {
      var t = new XMLHttpRequest;
      t.open('GET', e, !1), t.send(null), n = 4 === t.readyState ? t.responseText : null;
      var o = t.getResponseHeader('SourceMap') || t.getResponseHeader('X-SourceMap');
      if (o) return o
    } catch (n) {}
    n = O(e);
    for (var i = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg, a, s; s = i.exec(n);) a = s;
    return a ? a[1] : null
  }

  function d(e) {
    var n = C[e.source];
    if (!n) {
      var t = P(e.source);
      t ? (n = C[e.source] = {
        url: t.url,
        map: new y(t.map)
      }, n.map.sourcesContent && n.map.sources.forEach(function (e, t) {
        var r = n.map.sourcesContent[t];
        if (r) {
          var o = a(n.url, e);
          E[o] = r
        }
      })) : n = C[e.source] = {
        url: null,
        map: null
      }
    }
    if (n && n.map) {
      var r = n.map.originalPositionFor(e);
      if (null !== r.source) return r.source = a(n.url, r.source), r
    }
    return e
  }

  function l(e) {
    var n = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);
    if (n) {
      var t = d({
        source: n[2],
        line: +n[3],
        column: n[4] - 1
      });
      return 'eval at ' + n[1] + ' (' + t.source + ':' + t.line + ':' + (t.column + 1) + ')'
    }
    return n = /^eval at ([^(]+) \((.+)\)$/.exec(e), n ? 'eval at ' + n[1] + ' (' + l(n[2]) + ')' : e
  }

  function c() {
    var e = '',
      n;
    if (this.isNative()) e = 'native';
    else {
      n = this.getScriptNameOrSourceURL(), !n && this.isEval() && (e = this.getEvalOrigin(), e += ', '), e += n ? n : '<anonymous>';
      var t = this.getLineNumber();
      if (null != t) {
        e += ':' + t;
        var r = this.getColumnNumber();
        r && (e += ':' + r)
      }
    }
    var o = '',
      i = this.getFunctionName(),
      a = !0,
      s = this.isConstructor(),
      d = !(this.isToplevel() || s);
    if (d) {
      var l = this.getTypeName();
      '[object Object]' === l && (l = 'null');
      var c = this.getMethodName();
      i ? (l && 0 != i.indexOf(l) && (o += l + '.'), o += i, c && i.indexOf('.' + c) != i.length - c.length - 1 && (o += ' [as ' + c + ']')) : o += l + '.' + (c || '<anonymous>')
    } else s ? o += 'new ' + (i || '<anonymous>') : i ? o += i : (o += e, a = !1);
    return a && (o += ' (' + e + ')'), o
  }

  function p(e) {
    var n = {};
    return Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (t) {
      n[t] = /^(?:is|get)/.test(t) ? function () {
        return e[t].call(e)
      } : e[t]
    }), n.toString = c, n
  }

  function u(e) {
    if (e.isNative()) return e;
    var n = e.getFileName() || e.getScriptNameOrSourceURL();
    if (n) {
      var t = e.getLineNumber(),
        o = e.getColumnNumber() - 1,
        i = 62;
      1 !== t || !(o > i) || r() || e.isEval() || (o -= i);
      var a = d({
        source: n,
        line: t,
        column: o
      });
      return e = p(e), e.getFileName = function () {
        return a.source
      }, e.getLineNumber = function () {
        return a.line
      }, e.getColumnNumber = function () {
        return a.column + 1
      }, e.getScriptNameOrSourceURL = function () {
        return a.source
      }, e
    }
    var s = e.isEval() && e.getEvalOrigin();
    return s ? (s = l(s), e = p(e), e.getEvalOrigin = function () {
      return s
    }, e) : e
  }

  function m(e, n) {
    return v && (E = {}, C = {}), e + n.map(function (e) {
      return '\n    at ' + u(e)
    }).join('')
  }

  function g(e) {
    var n = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);
    if (n) {
      var t = n[1],
        r = +n[2],
        o = +n[3],
        i = E[t];
      if (!i && b && b.existsSync(t)) try {
        i = b.readFileSync(t, 'utf8')
      } catch (e) {
        i = ''
      }
      if (i) {
        var a = i.split(/(?:\r\n|\r|\n)/)[r - 1];
        if (a) return t + ':' + r + '\n' + a + '\n' + Array(o).join(' ') + '^'
      }
    }
    return null
  }

  function f(e) {
    var n = g(e);
    n && (console.error(), console.error(n)), console.error(e.stack), process.exit(1)
  }

  function h() {
    var e = process.emit;
    process.emit = function (n) {
      if ('uncaughtException' === n) {
        var t = arguments[1] && arguments[1].stack,
          r = 0 < this.listeners(n).length;
        if (t && !r) return f(arguments[1])
      }
      return e.apply(this, arguments)
    }
  }
  var y = t(78).SourceMapConsumer,
    _ = t(0),
    b;
  try {
    b = t(5), b.existsSync && b.readFileSync || (b = null)
  } catch (e) {}
  var S = !1,
    w = !1,
    v = !1,
    x = 'auto',
    E = {},
    C = {},
    k = /^data:application\/json[^,]+base64,/,
    M = [],
    L = [],
    O = i(M);
  M.push(function (e) {
    if (e = e.trim(), e in E) return E[e];
    var n = null;
    if (!b) {
      var t = new XMLHttpRequest;
      t.open('GET', e, !1), t.send(null);
      var n = null;
      4 === t.readyState && 200 === t.status && (n = t.responseText)
    } else if (b.existsSync(e)) try {
      n = b.readFileSync(e, 'utf8')
    } catch (e) {
      n = ''
    }
    return E[e] = n
  });
  var P = i(L);
  L.push(function (e) {
    var n = s(e);
    if (!n) return null;
    var t;
    if (k.test(n)) {
      var r = n.slice(n.indexOf(',') + 1);
      t = new Buffer(r, 'base64').toString(), n = e
    } else n = a(e, n), t = O(n);
    return t ? {
      url: n,
      map: t
    } : null
  }), n.wrapCallSite = u, n.getErrorSource = g, n.mapSourcePosition = d, n.retrieveSourceMap = P, n.install = function (e) {
    if (e = e || {}, e.environment && (x = e.environment, -1 === ['node', 'browser', 'auto'].indexOf(x))) throw new Error('environment ' + x + ' was unknown. Available options are {auto, browser, node}');
    if (e.retrieveFile && (e.overrideRetrieveFile && (M.length = 0), M.unshift(e.retrieveFile)), e.retrieveSourceMap && (e.overrideRetrieveSourceMap && (L.length = 0), L.unshift(e.retrieveSourceMap)), e.hookRequire && !r()) {
      var n;
      try {
        n = t(71)
      } catch (e) {}
      var i = n.prototype._compile;
      i.__sourceMapSupport || (n.prototype._compile = function (e, n) {
        return E[n] = e, C[n] = void 0, i.call(this, e, n)
      }, n.prototype._compile.__sourceMapSupport = !0)
    }
    if (v || (v = !!('emptyCacheBetweenOperations' in e) && e.emptyCacheBetweenOperations), S || (S = !0, Error.prepareStackTrace = m), !w) {
      var a = !('handleUncaughtExceptions' in e) || e.handleUncaughtExceptions;
      a && o() && (w = !0, h())
    }
  }
}, function (e, n, t) {
  var r = t(0).sep || '/';
  e.exports = function (e) {
    if ('string' != typeof e || 7 >= e.length || 'file://' != e.substring(0, 7)) throw new TypeError('must pass in a file:// URI to convert to a file path');
    var n = unescape(e.substring(7)),
      t = n.indexOf('/'),
      o = n.substring(0, t),
      i = n.substring(t + 1);
    return 'localhost' == o && (o = ''), o && (o = r + r + o), i = i.replace(/^(.+)\|/, '$1:'), '\\' == r && (i = i.replace(/\//g, '\\')), /^.+\:/.test(i) || (i = r + i), o + i
  }
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(34);
  n.formatLogMessage = function (e, n) {
    return n ? r.formatError(n, e) : e
  }
}, function (e, n, t) {
  'use strict';
  var r = t(5),
    o = t(0),
    i = t(6),
    a = t(9),
    s = t(15).Transport,
    d = t(8).Stream,
    l = t(10),
    c = t(15),
    p = t(35),
    u = t(46),
    m = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    g = e.exports = function (e) {
      function n(n) {
        Array.prototype.slice.call(arguments, 1).forEach(function (t) {
          if (e[t]) throw new Error('Cannot set ' + t + ' and ' + n + 'together')
        })
      }
      if (s.call(this, e), e.filename || e.dirname) n('filename or dirname', 'stream'), this._basename = this.filename = e.filename ? o.basename(e.filename) : 'winston.log', this.dirname = e.dirname || o.dirname(e.filename), this.options = e.options || {
        flags: 'a'
      }, this.options.highWaterMark = this.options.highWaterMark || 24;
      else if (e.stream) {
        n('stream', 'filename', 'maxsize'), this._stream = e.stream;
        var t = this;
        this._stream.on('error', function (e) {
          t.emit('error', e)
        }), this._stream.setMaxListeners(Infinity)
      } else throw new Error('Cannot log to file without filename or stream.');
      this.json = !1 !== e.json, this.colorize = e.colorize || !1, this.maxsize = e.maxsize || null, this.logstash = e.logstash || null, this.maxFiles = e.maxFiles || null, this.label = e.label || null, this.prettyPrint = e.prettyPrint || !1, this.showLevel = void 0 === e.showLevel || e.showLevel, this.timestamp = void 0 === e.timestamp || e.timestamp, this.datePattern = e.datePattern ? e.datePattern : '.yyyy-MM-dd', this.depth = e.depth || null, this.eol = e.eol || l.EOL, this.maxRetries = e.maxRetries || 2, this.prepend = e.prepend || !1, this.createTree = e.createTree || !1, this.localTime = e.localTime || !1, this.zippedArchive = e.zippedArchive || !1, this.maxDays = e.maxDays || 0, this.json && (this.stringify = e.stringify), this._size = 0, this._created = 0, this._buffer = [], this._draining = !1, this._failures = 0, this._archive = !1, this._currentFiles = function () {
        if (!this.maxsize) try {
          return r.readdirSync(this.dirname).filter(function (e) {
            return e.includes(this._basename)
          }.bind(this)).map(function (e) {
            return {
              name: e,
              time: r.statSync(o.join(this.dirname, e)).mtime.getTime()
            }
          }.bind(this)).sort(function (e, n) {
            return e.time - n.time
          }).map(function (e) {
            return e.name
          })
        } catch (n) {}
        return []
      }.bind(this)(), this._year = this._getTime('year'), this._month = this._getTime('month'), this._date = this._getTime('date'), this._hour = this._getTime('hour'), this._minute = this._getTime('minute'), this._weekday = m[this._getTime('day')];
      var i = /d{1,4}|m{1,4}|yy(?:yy)?|([HhM])\1?/g,
        a = function (e, n) {
          for (e += '', n = n || 2; e.length < n;) e = '0' + e;
          return e
        };
      this.getFormattedDate = function () {
        this._year = this._getTime('year'), this._month = this._getTime('month'), this._date = this._getTime('date'), this._hour = this._getTime('hour'), this._minute = this._getTime('minute'), this._weekday = m[this._getTime('day')];
        var e = {
          yy: (this._year + '').slice(2),
          yyyy: this._year,
          M: this._month + 1,
          MM: a(this._month + 1),
          d: this._date,
          dd: a(this._date),
          H: this._hour,
          HH: a(this._hour),
          m: this._minute,
          mm: a(this._minute),
          ddd: this._weekday
        };
        return this.datePattern.replace(i, function (n) {
          return n in e ? e[n] : n.slice(1, n.length - 1)
        })
      }
    };
  i.inherits(g, s), c.transports.DailyRotateFile = g, g.prototype.name = 'dailyRotateFile', g.prototype.log = function (e, n, t, r) {
    if (this.silent) return r(null, !0);
    if (this._failures >= this.maxRetries) return r(new Error('Transport is in a failed state.'));
    var o = this,
      i = a.log({
        level: e,
        message: n,
        meta: t,
        json: this.json,
        colorize: this.colorize,
        logstash: this.logstash,
        prettyPrint: this.prettyPrint,
        timestamp: this.timestamp,
        label: this.label,
        stringify: this.stringify,
        showLevel: this.showLevel,
        depth: this.depth,
        formatter: this.formatter,
        humanReadableUnhandledException: this.humanReadableUnhandledException
      }) + this.eol;
    this._size += i.length, this.filename ? this.open(function (e) {
      return e ? o._buffer.push([i, r]) : void(o._write(i, r), o._lazyDrain())
    }) : (this._write(i, r), this._lazyDrain())
  }, g.prototype._write = function (e, n) {
    var t = this._stream.write(e);
    return n ? !1 === t ? this._stream.once('drain', function () {
      n(null, !0)
    }) : void n(null, !0) : void 0
  }, g.prototype.query = function (e, n) {
    'function' == typeof e && (n = e, e = {});
    var t = this,
      i = t._currentFiles.slice(0),
      a = [],
      s = 0;
    e = t.normalizeQuery(e), 0 === i.length && n && n(null, a),
      function d(l) {
        function c(e, n) {
          try {
            var t = JSON.parse(e);
            u(t) && p(t)
          } catch (t) {
            n || f.emit('error', t)
          }
        }

        function p(n) {
          if (e.rows && a.length >= e.rows && 'desc' !== e.order) return void(f.readable && f.destroy());
          if (e.fields) {
            var t = {};
            e.fields.forEach(function (e) {
              t[e] = n[e]
            }), n = t
          }
          'desc' === e.order && a.length >= e.rows && a.shift(), a.push(n)
        }

        function u(n) {
          if (n && 'object' == typeof n) {
            var t = new Date(n.timestamp);
            return !(e.from && t < e.from || e.until && t > e.until) || void 0
          }
        }
        if (l) {
          var m = o.join(t.dirname, l),
            g = '',
            f = r.createReadStream(m, {
              encoding: 'utf8'
            });
          f.on('error', function (e) {
            return f.readable && f.destroy(), n ? 'ENOENT' === e.code ? n(null, a) : n(e) : void 0
          }), f.on('data', function (n) {
            n = (g + n).split(/\n+/);
            for (var t = n.length - 1, r = 0; r < t; r++)(!e.start || s >= e.start) && c(n[r]), s++;
            g = n[t]
          }), f.on('close', function () {
            g && c(g, !0), 'desc' === e.order && (a = a.reverse()), i.length ? d(i.shift()) : n && n(null, a)
          })
        }
      }(i.shift())
  }, g.prototype.stream = function (e) {
    var n = o.join(this.dirname, this._getFilename());
    e = e || {};
    var t = new d,
      r = {
        file: n,
        start: e.start
      };
    return t.destroy = a.tailFile(r, function (e, n) {
      if (e) return t.emit('error', e);
      try {
        t.emit('data', n), n = JSON.parse(n), t.emit('log', n)
      } catch (n) {
        t.emit('error', n)
      }
    }), t.resume && t.resume(), t
  }, g.prototype.open = function (e) {
    if (this.opening) return e(!0);
    return !this._stream || this.maxsize && this._size >= this.maxsize || this._filenameHasExpired() ? (this._cleanOldFiles(), e(!0), this._createStream()) : void e()
  }, g.prototype.close = function () {
    var e = this;
    this._stream && (this._stream.end(), this._stream.destroySoon(), this._stream.once('drain', function () {
      e.emit('flush'), e.emit('closed')
    }))
  }, g.prototype.flush = function () {
    var e = this;
    this._buffer.forEach(function (n) {
      var t = n[0],
        r = n[1];
      process.nextTick(function () {
        e._write(t, r), e._size += t.length
      })
    }), e._buffer.length = 0, e._stream.once('drain', function () {
      e.emit('flush'), e.emit('logged')
    })
  }, g.prototype._createStream = function () {
    var e = this;
    this.opening = !0,
      function n(t) {
        function i(n) {
          e._stream && (e._archive = !!e.zippedArchive && e._stream.path, e._stream.end(), e._stream.destroySoon()), e.createTree && p.sync(o.dirname(s)), e._size = n, e.filename = t, e._stream = r.createWriteStream(s, e.options), e._stream.on('error', function (n) {
            e._failures < e.maxRetries ? (e._createStream(), e._failures++) : e.emit('error', n)
          }), e._stream.setMaxListeners(Infinity), e.once('flush', function () {
            e.flush(), e.opening = !1, e.emit('open', s)
          }), e.flush(), a()
        }

        function a() {
          var n = e._archive;
          if (e._archive = !1, n && r.existsSync(n + '')) {
            var t = u.createGzip(),
              o = r.createReadStream(n + ''),
              i = r.createWriteStream(n + '.gz');
            o.pipe(t).pipe(i), r.unlinkSync(n + '')
          }
        }
        var s = o.join(e.dirname, t);
        r.stat(s, function (t, r) {
          return t ? 'ENOENT' === t.code ? i(0) : e.emit('error', t) : !r || e.maxsize && r.size >= e.maxsize ? n(e._getFile(!0)) : e._filenameHasExpired() ? (e._year = e._getTime('year'), e._month = e._getTime('month'), e._date = e._getTime('date'), e._hour = e._getTime('hour'), e._minute = e._getTime('minute'), e._weekday = m[e._getTime('day')], e._created = 0, n(e._getFile())) : void i(r.size)
        })
      }(this._getFile())
  }, g.prototype._getFile = function (e) {
    var n = this._getFilename(),
      t;
    if (e) {
      if (this.maxFiles && this._created >= this.maxFiles - 1)
        if (t = this._created - (this.maxFiles - 1), 0 === t) try {
          r.unlinkSync(o.join(this.dirname, n))
        } catch (n) {} else try {
          r.unlinkSync(o.join(this.dirname, n + '.' + t))
        } catch (n) {}
      this._created += 1
    } else if (!this.maxsize)
      for (-1 === this._currentFiles.indexOf(n) && this._currentFiles.push(n); this.maxFiles && this._currentFiles.length > this.maxFiles;) {
        try {
          r.unlinkSync(o.join(this.dirname, this._currentFiles[0]))
        } catch (n) {}
        this._currentFiles = this._currentFiles.slice(1)
      }
    return this._created ? n + '.' + this._created : n
  }, g.prototype._getFilename = function () {
    var e = this.getFormattedDate();
    return this.prepend ? ('.yyyy-MM-dd' === this.datePattern && (this.datePattern = 'yyyy-MM-dd.', e = this.getFormattedDate()), e + this._basename) : this._basename + e
  }, g.prototype._lazyDrain = function () {
    var e = this;
    !this._draining && this._stream && (this._draining = !0, this._stream.once('drain', function () {
      this._draining = !1, e.emit('logged')
    }))
  }, g.prototype._filenameHasExpired = function () {
    if (this.datePattern.match(/m/)) return this._year < this._getTime('year') || this._month < this._getTime('month') || this._date < this._getTime('date') || this._hour < this._getTime('hour') || this._minute < this._getTime('minute');
    return this.datePattern.match(/H/) ? this._year < this._getTime('year') || this._month < this._getTime('month') || this._date < this._getTime('date') || this._hour < this._getTime('hour') : this.datePattern.match(/d/) ? this._year < this._getTime('year') || this._month < this._getTime('month') || this._date < this._getTime('date') : this.datePattern.match(/M/) ? this._year < this._getTime('year') || this._month < this._getTime('month') : !!this.datePattern.match(/yy/) && this._year < this._getTime('year')
  }, g.prototype._getTime = function (e) {
    var n = new Date;
    if (this.localTime) {
      if ('year' === e) return n.getFullYear();
      if ('month' === e) return n.getMonth();
      if ('date' === e) return n.getDate();
      if ('hour' === e) return n.getHours();
      if ('minute' === e) return n.getMinutes();
      if ('day' === e) return n.getDay()
    }
    return 'year' === e ? n.getUTCFullYear() : 'month' === e ? n.getUTCMonth() : 'date' === e ? n.getUTCDate() : 'hour' === e ? n.getUTCHours() : 'minute' === e ? n.getUTCMinutes() : 'day' === e ? n.getUTCDay() : void 0
  }, g.prototype._cleanOldFiles = function () {
    function e(e) {
      r.unlink(t.dirname + o.sep + e, function (n) {
        n && console.error('Error removing file ', e)
      })
    }

    function n(n) {
      var s = t.dirname + o.sep + n;
      r.stat(s, function (r, o) {
        if (r) return void console.error('Error stats file ', n, r);
        var s = o.mtime && o.mtime.getTime() || 0;
        o.isFile() && a - s > i * t.maxDays && e(n)
      })
    }
    var t = this,
      i = 864e5,
      a = Date.now();
    t.maxDays && r.readdir(t.dirname, function (e, r) {
      if (e) return void console.error('Error reading directory ', t.dirname, e);
      var o = new RegExp(t._basename, 'g');
      r.forEach(function (e) {
        /.log/.test(e) && o.test(e) && n(e)
      })
    })
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(1),
    i = t(0),
    a = t(3),
    s = t(7).pathExists;
  e.exports = {
    outputFile: r(function (e, n, t, r) {
      'function' == typeof t && (r = t, t = 'utf8');
      const d = i.dirname(e);
      s(d, (i, s) => i ? r(i) : s ? o.writeFile(e, n, t, r) : void a.mkdirs(d, (i) => i ? r(i) : void o.writeFile(e, n, t, r)))
    }),
    outputFileSync: function (e, ...n) {
      const t = i.dirname(e);
      return o.existsSync(t) ? o.writeFileSync(e, ...n) : void(a.mkdirsSync(t), o.writeFileSync(e, ...n))
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n, t, r) {
    return t ? p(n, (i) => i ? r(i) : o(e, n, t, r)) : void m(n, (i, a) => i ? r(i) : a ? r(new Error('dest already exists.')) : o(e, n, t, r))
  }

  function o(e, n, t, r) {
    d.rename(e, n, (o) => o ? 'EXDEV' === o.code ? i(e, n, t, r) : r(o) : r())
  }

  function i(e, n, t, r) {
    c(e, n, {
      overwrite: t,
      errorOnExist: !0
    }, (n) => n ? r(n) : p(e, r))
  }

  function a(e, n) {
    const t = e.split(l.sep),
      r = n.split(l.sep);
    return t.reduce((e, n, t) => e && r[t] === n, !0)
  }
  const s = t(2).fromCallback,
    d = t(1),
    l = t(0),
    c = t(37).copy,
    p = t(16).remove,
    u = t(3).mkdirp,
    m = t(7).pathExists;
  e.exports = {
    move: s(function (e, n, t, o) {
      'function' == typeof t && (o = t, t = {});
      const i = t.overwrite || t.clobber || !1;
      return e = l.resolve(e), n = l.resolve(n), e === n ? d.access(e, o) : void d.stat(e, (t, s) => t ? o(t) : s.isDirectory() && a(e, n) ? o(new Error(`Cannot move '${e}' to a subdirectory of itself, '${n}'.`)) : void u(l.dirname(n), (t) => t ? o(t) : r(e, n, i, o)))
    })
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n, t) {
    function i() {
      if (a) try {
        return d.renameSync(e, n)
      } catch (i) {
        if ('ENOTEMPTY' === i.code || 'EEXIST' === i.code || 'EPERM' === i.code) return p(n), t.overwrite = !1, r(e, n, t);
        if ('EXDEV' !== i.code) throw i;
        return o(e, n, a)
      } else try {
        return d.linkSync(e, n), d.unlinkSync(e)
      } catch (t) {
        if ('EXDEV' === t.code || 'EISDIR' === t.code || 'EPERM' === t.code || 'ENOTSUP' === t.code) return o(e, n, a);
        throw t
      }
    }
    t = t || {};
    const a = t.overwrite || t.clobber || !1;
    if (e = l.resolve(e), n = l.resolve(n), e === n) return d.accessSync(e);
    if (s(e, n)) throw new Error(`Cannot move '${e}' into itself '${n}'.`);
    u(l.dirname(n)), i()
  }

  function o(e, n, t) {
    const r = d.statSync(e);
    return r.isDirectory() ? a(e, n, t) : i(e, n, t)
  }

  function i(e, n, t) {
    const r = 65536,
      o = m(r),
      i = t ? 'w' : 'wx',
      a = d.openSync(e, 'r'),
      s = d.fstatSync(a),
      l = d.openSync(n, i, s.mode);
    for (let i = 0; i < s.size;) {
      const e = d.readSync(a, o, 0, r, i);
      d.writeSync(l, o, 0, e), i += e
    }
    return d.closeSync(a), d.closeSync(l), d.unlinkSync(e)
  }

  function a(e, n, t) {
    function r() {
      return c(e, n, o), p(e)
    }
    const o = {
      overwrite: !1
    };
    t ? (p(n), r()) : r()
  }

  function s(e, n) {
    try {
      return d.statSync(e).isDirectory() && e !== n && -1 < n.indexOf(e) && n.split(l.dirname(e) + l.sep)[1].split(l.sep)[0] === l.basename(e)
    } catch (n) {
      return !1
    }
  }
  const d = t(1),
    l = t(0),
    c = t(41).copySync,
    p = t(16).removeSync,
    u = t(3).mkdirsSync,
    m = t(38);
  e.exports = {
    moveSync: r
  }
}, function (e, n, t) {
  'use strict';
  const r = t(1),
    o = t(0),
    i = t(3),
    a = t(19);
  e.exports = function (e, n, t) {
    const s = o.dirname(e);
    r.existsSync(s) || i.mkdirsSync(s), a.writeJsonSync(e, n, t)
  }
}, function (e, n, t) {
  'use strict';
  const r = t(0),
    o = t(3),
    i = t(7).pathExists,
    a = t(19);
  e.exports = function (e, n, t, s) {
    'function' == typeof t && (s = t, t = {});
    const d = r.dirname(e);
    i(d, (r, i) => r ? s(r) : i ? a.writeJson(e, n, t, s) : void o.mkdirs(d, (r) => r ? s(r) : void a.writeJson(e, n, t, s)))
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(19);
  o.outputJson = r(t(87)), o.outputJsonSync = t(86), o.outputJSON = o.outputJson, o.outputJSONSync = o.outputJsonSync, o.writeJSON = o.writeJson, o.writeJSONSync = o.writeJsonSync, o.readJSON = o.readJson, o.readJSONSync = o.readJsonSync, e.exports = o
}, function (e, n, t) {
  'use strict';
  const r = t(1);
  e.exports = {
    symlinkType: function (e, n, t) {
      return t = 'function' == typeof n ? n : t, n = 'function' != typeof n && n, n ? t(null, n) : void r.lstat(e, (e, r) => e ? t(null, 'file') : void(n = r && r.isDirectory() ? 'dir' : 'file', t(null, n)))
    },
    symlinkTypeSync: function (e, n) {
      let t;
      if (n) return n;
      try {
        t = r.lstatSync(e)
      } catch (n) {
        return 'file'
      }
      return t && t.isDirectory() ? 'dir' : 'file'
    }
  }
}, function (e, n, t) {
  'use strict';
  const r = t(0),
    o = t(1),
    i = t(7).pathExists;
  e.exports = {
    symlinkPaths: function (e, n, t) {
      if (r.isAbsolute(e)) return o.lstat(e, (n) => n ? (n.message = n.message.replace('lstat', 'ensureSymlink'), t(n)) : t(null, {
        toCwd: e,
        toDst: e
      }));
      else {
        const a = r.dirname(n),
          s = r.join(a, e);
        return i(s, (n, i) => n ? t(n) : i ? t(null, {
          toCwd: s,
          toDst: e
        }) : o.lstat(e, (n) => n ? (n.message = n.message.replace('lstat', 'ensureSymlink'), t(n)) : t(null, {
          toCwd: e,
          toDst: r.relative(a, e)
        })))
      }
    },
    symlinkPathsSync: function (e, n) {
      let t;
      if (r.isAbsolute(e)) {
        if (t = o.existsSync(e), !t) throw new Error('absolute srcpath does not exist');
        return {
          toCwd: e,
          toDst: e
        }
      } else {
        const i = r.dirname(n),
          a = r.join(i, e);
        if (t = o.existsSync(a), t) return {
          toCwd: a,
          toDst: e
        };
        if (t = o.existsSync(e), !t) throw new Error('relative srcpath does not exist');
        return {
          toCwd: e,
          toDst: r.relative(i, e)
        }
      }
    }
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(0),
    i = t(1),
    a = t(3),
    s = a.mkdirs,
    d = a.mkdirsSync,
    l = t(90),
    c = l.symlinkPaths,
    p = l.symlinkPathsSync,
    u = t(89),
    m = u.symlinkType,
    g = u.symlinkTypeSync,
    f = t(7).pathExists;
  e.exports = {
    createSymlink: r(function (e, n, t, r) {
      r = 'function' == typeof t ? t : r, t = 'function' != typeof t && t, f(n, (a, d) => a ? r(a) : d ? r(null) : void c(e, n, (a, d) => a ? r(a) : void(e = d.toDst, m(d.toCwd, t, (t, a) => {
        if (t) return r(t);
        const d = o.dirname(n);
        f(d, (t, o) => t ? r(t) : o ? i.symlink(e, n, a, r) : void s(d, (t) => t ? r(t) : void i.symlink(e, n, a, r)))
      }))))
    }),
    createSymlinkSync: function (e, n, t) {
      const r = i.existsSync(n);
      if (!r) {
        const r = p(e, n);
        e = r.toDst, t = g(r.toCwd, t);
        const a = o.dirname(n),
          s = i.existsSync(a);
        return s ? i.symlinkSync(e, n, t) : (d(a), i.symlinkSync(e, n, t))
      }
    }
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(0),
    i = t(1),
    a = t(3),
    s = t(7).pathExists;
  e.exports = {
    createLink: r(function (e, n, t) {
      function r(e, n) {
        i.link(e, n, (e) => e ? t(e) : void t(null))
      }
      s(n, (d, l) => d ? t(d) : l ? t(null) : void i.lstat(e, (i) => {
        if (i) return i.message = i.message.replace('lstat', 'ensureLink'), t(i);
        const d = o.dirname(n);
        s(d, (o, i) => o ? t(o) : i ? r(e, n) : void a.mkdirs(d, (o) => o ? t(o) : void r(e, n)))
      }))
    }),
    createLinkSync: function (e, n) {
      const t = i.existsSync(n);
      if (!t) {
        try {
          i.lstatSync(e)
        } catch (e) {
          throw e.message = e.message.replace('lstat', 'ensureLink'), e
        }
        const t = o.dirname(n),
          r = i.existsSync(t);
        return r ? i.linkSync(e, n) : (a.mkdirsSync(t), i.linkSync(e, n))
      }
    }
  }
}, function (e, n, t) {
  'use strict';
  const r = t(2).fromCallback,
    o = t(0),
    i = t(1),
    a = t(3),
    s = t(7).pathExists;
  e.exports = {
    createFile: r(function (e, n) {
      function t() {
        i.writeFile(e, '', (e) => e ? n(e) : void n())
      }
      i.stat(e, (r, i) => {
        if (!r && i.isFile()) return n();
        const d = o.dirname(e);
        s(d, (e, r) => e ? n(e) : r ? t() : void a.mkdirs(d, (e) => e ? n(e) : void t()))
      })
    }),
    createFileSync: function (e) {
      let n;
      try {
        n = i.statSync(e)
      } catch (n) {}
      if (!(n && n.isFile())) {
        const n = o.dirname(e);
        i.existsSync(n) || a.mkdirsSync(n), i.writeFileSync(e, '')
      }
    }
  }
}, function (e, n, t) {
  'use strict';
  const r = t(93),
    o = t(92),
    i = t(91);
  e.exports = {
    createFile: r.createFile,
    createFileSync: r.createFileSync,
    ensureFile: r.createFile,
    ensureFileSync: r.createFileSync,
    createLink: o.createLink,
    createLinkSync: o.createLinkSync,
    ensureLink: o.createLink,
    ensureLinkSync: o.createLinkSync,
    createSymlink: i.createSymlink,
    createSymlinkSync: i.createSymlinkSync,
    ensureSymlink: i.createSymlink,
    ensureSymlinkSync: i.createSymlinkSync
  }
}, function (e, n, t) {
  'use strict';

  function r(e) {
    ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach((n) => {
      e[n] = e[n] || p[n], n += 'Sync', e[n] = e[n] || p[n]
    }), e.maxBusyTries = e.maxBusyTries || 3
  }

  function o(e, n, t) {
    let o = 0;
    'function' == typeof n && (t = n, n = {}), f(e, 'rimraf: missing path'), f.strictEqual(typeof e, 'string', 'rimraf: path should be a string'), f.strictEqual(typeof t, 'function', 'rimraf: callback function required'), f(n, 'rimraf: invalid options argument provided'), f.strictEqual(typeof n, 'object', 'rimraf: options should be object'), r(n), i(e, n, function r(a) {
      if (a) {
        if (('EBUSY' === a.code || 'ENOTEMPTY' === a.code || 'EPERM' === a.code) && o < n.maxBusyTries) {
          o++;
          const t = 100 * o;
          return setTimeout(() => i(e, n, r), t)
        }
        'ENOENT' === a.code && (a = null)
      }
      t(a)
    })
  }

  function i(e, n, t) {
    f(e), f(n), f('function' == typeof t), n.lstat(e, (r, o) => r && 'ENOENT' === r.code ? t(null) : r && 'EPERM' === r.code && h ? a(e, n, r, t) : o && o.isDirectory() ? d(e, n, r, t) : void n.unlink(e, (r) => {
      if (r) {
        if ('ENOENT' === r.code) return t(null);
        if ('EPERM' === r.code) return a(e, n, r, t);
        if ('EISDIR' === r.code) return d(e, n, r, t)
      }
      return t(r)
    }))
  }

  function a(e, n, t, r) {
    f(e), f(n), f('function' == typeof r), t && f(t instanceof Error), n.chmod(e, 438, (o) => {
      o ? r('ENOENT' === o.code ? null : t) : n.stat(e, (o, i) => {
        o ? r('ENOENT' === o.code ? null : t) : i.isDirectory() ? d(e, n, t, r) : n.unlink(e, r)
      })
    })
  }

  function s(e, n, t) {
    let r;
    f(e), f(n), t && f(t instanceof Error);
    try {
      n.chmodSync(e, 438)
    } catch (e) {
      if ('ENOENT' === e.code) return;
      throw t
    }
    try {
      r = n.statSync(e)
    } catch (e) {
      if ('ENOENT' === e.code) return;
      throw t
    }
    r.isDirectory() ? u(e, n, t) : n.unlinkSync(e)
  }

  function d(e, n, t, r) {
    f(e), f(n), t && f(t instanceof Error), f('function' == typeof r), n.rmdir(e, (o) => {
      o && ('ENOTEMPTY' === o.code || 'EEXIST' === o.code || 'EPERM' === o.code) ? l(e, n, r) : o && 'ENOTDIR' === o.code ? r(t) : r(o)
    })
  }

  function l(e, t, r) {
    f(e), f(t), f('function' == typeof r), t.readdir(e, (i, a) => {
      if (i) return r(i);
      let s = a.length,
        n;
      return 0 === s ? t.rmdir(e, r) : void a.forEach((i) => {
        o(g.join(e, i), t, (o) => n ? void 0 : o ? r(n = o) : void(0 == --s && t.rmdir(e, r)))
      })
    })
  }

  function c(e, n) {
    let t;
    n = n || {}, r(n), f(e, 'rimraf: missing path'), f.strictEqual(typeof e, 'string', 'rimraf: path should be a string'), f(n, 'rimraf: missing options'), f.strictEqual(typeof n, 'object', 'rimraf: options should be object');
    try {
      t = n.lstatSync(e)
    } catch (t) {
      if ('ENOENT' === t.code) return;
      'EPERM' === t.code && h && s(e, n, t)
    }
    try {
      t && t.isDirectory() ? u(e, n, null) : n.unlinkSync(e)
    } catch (t) {
      if ('ENOENT' === t.code) return;
      if ('EPERM' === t.code) return s(e, n, t);
      if ('EISDIR' !== t.code) throw t;
      u(e, n, t)
    }
  }

  function u(e, n, t) {
    f(e), f(n), t && f(t instanceof Error);
    try {
      n.rmdirSync(e)
    } catch (r) {
      if ('ENOTDIR' === r.code) throw t;
      else if ('ENOTEMPTY' === r.code || 'EEXIST' === r.code || 'EPERM' === r.code) m(e, n);
      else if ('ENOENT' !== r.code) throw r
    }
  }

  function m(e, n) {
    f(e), f(n), n.readdirSync(e).forEach((t) => c(g.join(e, t), n)); {
      const t = Date.now();
      do try {
        const t = n.rmdirSync(e, n);
        return t
      } catch (e) {}
      while (500 > Date.now() - t)
    }
  }
  const p = t(1),
    g = t(0),
    f = t(42),
    h = !0;
  e.exports = o, o.sync = c
}, function (e, n, t) {
  'use strict';

  function r(e) {
    let n;
    try {
      n = i.readdirSync(e)
    } catch (n) {
      return s.mkdirsSync(e)
    }
    n.forEach((n) => {
      n = a.join(e, n), d.removeSync(n)
    })
  }
  const o = t(2).fromCallback,
    i = t(5),
    a = t(0),
    s = t(3),
    d = t(16),
    l = o(function (e, n) {
      n = n || function () {}, i.readdir(e, (t, r) => {
        function o() {
          const e = r.pop();
          return e ? void d.remove(e, (e) => e ? n(e) : void o()) : n()
        }
        return t ? s.mkdirs(e, n) : void(r = r.map((n) => a.join(e, n)), o())
      })
    });
  e.exports = {
    emptyDirSync: r,
    emptydirSync: r,
    emptyDir: l,
    emptydir: l
  }
}, function (e, n, t) {
  'use strict';

  function r(e, n, t, r) {
    'function' != typeof t || r ? 'function' == typeof t && (t = {
      filter: t
    }) : (r = t, t = {}), r = r || function () {}, t = t || {}, t.clobber = !('clobber' in t) || !!t.clobber, t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber, t.preserveTimestamps && 'ia32' === process.arch && console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`), v(e, n, (a, s) => a ? r(a) : t.filter ? i(o, s, e, n, t, r) : o(s, e, n, t, r))
  }

  function o(e, n, t, r, o) {
    const i = E.dirname(t);
    k(i, (s, d) => s ? o(s) : d ? a(e, n, t, r, o) : void C(i, (i) => i ? o(i) : a(e, n, t, r, o)))
  }

  function i(e, n, t, r, o, i) {
    Promise.resolve(o.filter(t, r)).then((a) => a ? n ? e(n, t, r, o, i) : e(t, r, o, i) : i(), (e) => i(e))
  }

  function a(e, n, t, r, o) {
    return r.filter ? i(s, e, n, t, r, o) : s(e, n, t, r, o)
  }

  function s(e, n, t, r, o) {
    const i = r.dereference ? x.stat : x.lstat;
    i(n, (i, a) => {
      if (i) return o(i);
      return a.isDirectory() ? m(a, e, n, t, r, o) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? d(a, e, n, t, r, o) : a.isSymbolicLink() ? _(e, n, t, r, o) : void 0
    })
  }

  function d(e, n, t, r, o, i) {
    return n === L ? c(e, t, r, o, i) : l(e, t, r, o, i)
  }

  function l(e, n, t, r, o) {
    return r.overwrite ? void x.unlink(t, (i) => i ? o(i) : c(e, n, t, r, o)) : r.errorOnExist ? o(new Error(`'${t}' already exists`)) : o()
  }

  function c(e, n, t, r, o) {
    return 'function' == typeof x.copyFile ? x.copyFile(n, t, (n) => n ? o(n) : u(e, t, r, o)) : p(e, n, t, r, o)
  }

  function p(e, n, t, r, o) {
    const i = x.createReadStream(n);
    i.on('error', (e) => o(e)).once('open', () => {
      const n = x.createWriteStream(t, {
        mode: e.mode
      });
      n.on('error', (e) => o(e)).on('open', () => i.pipe(n)).once('close', () => u(e, t, r, o))
    })
  }

  function u(e, n, t, r) {
    x.chmod(n, e.mode, (o) => o ? r(o) : t.preserveTimestamps ? M(n, e.atime, e.mtime, r) : r())
  }

  function m(e, n, t, r, o, i) {
    return n === L ? g(e, t, r, o, i) : n && !n.isDirectory() ? i(new Error(`Cannot overwrite non-directory '${r}' with directory '${t}'.`)) : f(t, r, o, i)
  }

  function g(e, n, t, r, o) {
    x.mkdir(t, (i) => i ? o(i) : void f(n, t, r, (n) => n ? o(n) : x.chmod(t, e.mode, o)))
  }

  function f(e, n, t, r) {
    x.readdir(e, (o, i) => o ? r(o) : h(i, e, n, t, r))
  }

  function h(e, n, t, r, o) {
    const i = e.pop();
    return i ? y(e, i, n, t, r, o) : o()
  }

  function y(e, n, t, r, o, i) {
    const s = E.join(t, n),
      d = E.join(r, n);
    v(s, d, (n, l) => n ? i(n) : void a(l, s, d, o, (n) => n ? i(n) : h(e, t, r, o, i)))
  }

  function _(e, n, t, r, o) {
    x.readlink(n, (n, i) => n ? o(n) : (r.dereference && (i = E.resolve(process.cwd(), i)), e === L ? x.symlink(i, t, o) : void x.readlink(t, (n, a) => n ? 'EINVAL' === n.code || 'UNKNOWN' === n.code ? x.symlink(i, t, o) : o(n) : (r.dereference && (a = E.resolve(process.cwd(), a)), S(i, a) ? o(new Error(`Cannot copy '${i}' to a subdirectory of itself, '${a}'.`)) : e.isDirectory() && S(a, i) ? o(new Error(`Cannot overwrite '${a}' with '${i}'.`)) : b(i, t, o)))))
  }

  function b(e, n, t) {
    x.unlink(n, (r) => r ? t(r) : x.symlink(e, n, t))
  }

  function S(e, n) {
    const t = E.resolve(e).split(E.sep),
      r = E.resolve(n).split(E.sep);
    return t.reduce((e, n, t) => e && r[t] === n, !0)
  }

  function w(e, n, t) {
    x.stat(e, (e, r) => e ? t(e) : void x.stat(n, (e, n) => e ? 'ENOENT' === e.code ? t(null, {
      srcStat: r,
      destStat: L
    }) : t(e) : t(null, {
      srcStat: r,
      destStat: n
    })))
  }

  function v(e, n, t) {
    w(e, n, (r, o) => {
      if (r) return t(r);
      const {
        srcStat: i,
        destStat: a
      } = o;
      return a.ino && a.ino === i.ino ? t(new Error('Source and destination must not be the same.')) : i.isDirectory() && S(e, n) ? t(new Error(`Cannot copy '${e}' to a subdirectory of itself, '${n}'.`)) : t(null, a)
    })
  }
  const x = t(1),
    E = t(0),
    C = t(3).mkdirs,
    k = t(7).pathExists,
    M = t(39).utimesMillis,
    L = Symbol('notExist');
  e.exports = r
}, function (e, n, t) {
  'use strict';

  function r(e, n, t) {
    n && 'object' == typeof n || (n = {
      mode: n
    });
    let d = n.mode;
    const l = n.fs || o;
    if (a(e)) {
      const n = new Error(e + ' contains invalid WIN32 path characters.');
      throw n.code = 'EINVAL', n
    }
    d === void 0 && (d = s & ~process.umask()), t || (t = null), e = i.resolve(e);
    try {
      l.mkdirSync(e, d), t = t || e
    } catch (o) {
      if ('ENOENT' === o.code) {
        if (i.dirname(e) === e) throw o;
        t = r(i.dirname(e), n, t), r(e, n, t)
      } else {
        let n;
        try {
          n = l.statSync(e)
        } catch (e) {
          throw o
        }
        if (!n.isDirectory()) throw o
      }
    }
    return t
  }
  const o = t(1),
    i = t(0),
    a = t(40).invalidWin32Path,
    s = parseInt('0777', 8);
  e.exports = r
}, function (e, n, t) {
  'use strict';

  function r(e, n, t, d) {
    if ('function' == typeof n ? (t = n, n = {}) : (!n || 'object' != typeof n) && (n = {
        mode: n
      }), a(e)) {
      const n = new Error(e + ' contains invalid WIN32 path characters.');
      return n.code = 'EINVAL', t(n)
    }
    let l = n.mode;
    const c = n.fs || o;
    void 0 === l && (l = s & ~process.umask()), d || (d = null), t = t || function () {}, e = i.resolve(e), c.mkdir(e, l, (o) => {
      if (!o) return d = d || e, t(null, d);
      switch (o.code) {
        case 'ENOENT':
          if (i.dirname(e) === e) return t(o);
          r(i.dirname(e), n, (o, i) => {
            o ? t(o, i) : r(e, n, t, i)
          });
          break;
        default:
          c.stat(e, (e, n) => {
            e || !n.isDirectory() ? t(o, d) : t(null, d)
          });
      }
    })
  }
  const o = t(1),
    i = t(0),
    a = t(40).invalidWin32Path,
    s = parseInt('0777', 8);
  e.exports = r
}, function (e, n, t) {
  'use strict';

  function r(e, n, t) {
    'function' == typeof t && (t = {
      filter: t
    }), t = t || {}, t.clobber = !('clobber' in t) || !!t.clobber, t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber, t.preserveTimestamps && 'ia32' === process.arch && console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    const r = _(e, n);
    if (!t.filter || t.filter(e, n)) {
      const i = S.dirname(n);
      return b.existsSync(i) || w(i), o(r, e, n, t)
    }
  }

  function o(e, n, t, r) {
    return r.filter && !r.filter(n, t) ? void 0 : i(e, n, t, r)
  }

  function i(e, n, t, r) {
    const o = r.dereference ? b.statSync : b.lstatSync,
      i = o(n);
    if (i.isDirectory()) return c(i, e, n, t, r);
    return i.isFile() || i.isCharacterDevice() || i.isBlockDevice() ? a(i, e, n, t, r) : i.isSymbolicLink() ? g(e, n, t, r) : void 0
  }

  function a(e, n, t, r, o) {
    return n === x ? d(e, t, r, o) : s(e, t, r, o)
  }

  function s(e, n, t, r) {
    if (r.overwrite) return b.unlinkSync(t), d(e, n, t, r);
    if (r.errorOnExist) throw new Error(`'${t}' already exists`)
  }

  function d(e, n, t, r) {
    return 'function' == typeof b.copyFileSync ? (b.copyFileSync(n, t), b.chmodSync(t, e.mode), r.preserveTimestamps ? v(t, e.atime, e.mtime) : void 0) : l(e, n, t, r)
  }

  function l(e, n, r, o) {
    const i = 65536,
      a = t(38)(i),
      s = b.openSync(n, 'r'),
      d = b.openSync(r, 'w', e.mode);
    for (let t = 0; t < e.size;) {
      const e = b.readSync(s, a, 0, i, t);
      b.writeSync(d, a, 0, e), t += e
    }
    o.preserveTimestamps && b.futimesSync(d, e.atime, e.mtime), b.closeSync(s), b.closeSync(d)
  }

  function c(e, n, t, r, o) {
    if (n === x) return p(e, t, r, o);
    if (n && !n.isDirectory()) throw new Error(`Cannot overwrite non-directory '${r}' with directory '${t}'.`);
    return u(t, r, o)
  }

  function p(e, n, t, r) {
    return b.mkdirSync(t), u(n, t, r), b.chmodSync(t, e.mode)
  }

  function u(e, n, t) {
    b.readdirSync(e).forEach((r) => m(r, e, n, t))
  }

  function m(e, n, t, r) {
    const i = S.join(n, e),
      a = S.join(t, e),
      s = _(i, a);
    return o(s, i, a, r)
  }

  function g(e, n, t, r) {
    let o = b.readlinkSync(n);
    if (r.dereference && (o = S.resolve(process.cwd(), o)), e === x) return b.symlinkSync(o, t);
    else {
      let e;
      try {
        e = b.readlinkSync(t)
      } catch (e) {
        if ('EINVAL' === e.code || 'UNKNOWN' === e.code) return b.symlinkSync(o, t);
        throw e
      }
      if (r.dereference && (e = S.resolve(process.cwd(), e)), h(o, e)) throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${e}'.`);
      if (b.statSync(t).isDirectory() && h(e, o)) throw new Error(`Cannot overwrite '${e}' with '${o}'.`);
      return f(o, t)
    }
  }

  function f(e, n) {
    return b.unlinkSync(n), b.symlinkSync(e, n)
  }

  function h(e, n) {
    const t = S.resolve(e).split(S.sep),
      r = S.resolve(n).split(S.sep);
    return t.reduce((e, n, t) => e && r[t] === n, !0)
  }

  function y(e, n) {
    const t = b.statSync(e);
    let r;
    try {
      r = b.statSync(n)
    } catch (e) {
      if ('ENOENT' === e.code) return {
        srcStat: t,
        destStat: x
      };
      throw e
    }
    return {
      srcStat: t,
      destStat: r
    }
  }

  function _(e, n) {
    const {
      srcStat: t,
      destStat: r
    } = y(e, n);
    if (r.ino && r.ino === t.ino) throw new Error('Source and destination must not be the same.');
    if (t.isDirectory() && h(e, n)) throw new Error(`Cannot copy '${e}' to a subdirectory of itself, '${n}'.`);
    return r
  }
  const b = t(1),
    S = t(0),
    w = t(3).mkdirsSync,
    v = t(39).utimesMillisSync,
    x = Symbol('notExist');
  e.exports = r
}, function (e) {
  'use strict';
  e.exports = function (e) {
    if (null === e || 'object' != typeof e) return e;
    if (e instanceof Object) var n = {
      __proto__: e.__proto__
    };
    else var n = Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function (t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
    }), n
  }
}, function (e, n, t) {
  var r = t(8).Stream;
  e.exports = function (e) {
    function n(t, o) {
      if (!(this instanceof n)) return new n(t, o);
      r.call(this);
      var i = this;
      this.path = t, this.fd = null, this.readable = !0, this.paused = !1, this.flags = 'r', this.mode = 438, this.bufferSize = 65536, o = o || {};
      for (var a = Object.keys(o), s = 0, d = a.length, l; s < d; s++) l = a[s], this[l] = o[l];
      if (this.encoding && this.setEncoding(this.encoding), void 0 !== this.start) {
        if ('number' != typeof this.start) throw TypeError('start must be a Number');
        if (void 0 === this.end) this.end = Infinity;
        else if ('number' != typeof this.end) throw TypeError('end must be a Number');
        if (this.start > this.end) throw new Error('start must be <= end');
        this.pos = this.start
      }
      return null === this.fd ? void e.open(this.path, this.flags, this.mode, function (e, n) {
        return e ? (i.emit('error', e), void(i.readable = !1)) : void(i.fd = n, i.emit('open', n), i._read())
      }) : void process.nextTick(function () {
        i._read()
      })
    }

    function t(n, o) {
      if (!(this instanceof t)) return new t(n, o);
      r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = 'w', this.encoding = 'binary', this.mode = 438, this.bytesWritten = 0, o = o || {};
      for (var i = Object.keys(o), a = 0, s = i.length, d; a < s; a++) d = i[a], this[d] = o[d];
      if (this.start !== void 0) {
        if ('number' != typeof this.start) throw TypeError('start must be a Number');
        if (0 > this.start) throw new Error('start must be >= zero');
        this.pos = this.start
      }
      this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
    }
    return {
      ReadStream: n,
      WriteStream: t
    }
  }
}, function (e) {
  e.exports = require('constants')
}, function (e, n, t) {
  var r = t(103),
    o = process.cwd,
    i = null,
    a = process.env.GRACEFUL_FS_PLATFORM || 'win32';
  process.cwd = function () {
    return i || (i = o.call(process)), i
  };
  try {
    process.cwd()
  } catch (e) {}
  var s = process.chdir;
  process.chdir = function (e) {
    i = null, s.call(process, e)
  }, e.exports = function (e) {
    function n(n) {
      return n ? function (t, r, o) {
        return n.call(e, t, r, function (e) {
          l(e) && (e = null), o && o.apply(this, arguments)
        })
      } : n
    }

    function t(n) {
      return n ? function (t, r) {
        try {
          return n.call(e, t, r)
        } catch (e) {
          if (!l(e)) throw e
        }
      } : n
    }

    function o(n) {
      return n ? function (t, r, o, i) {
        return n.call(e, t, r, o, function (e) {
          l(e) && (e = null), i && i.apply(this, arguments)
        })
      } : n
    }

    function i(n) {
      return n ? function (t, r, o) {
        try {
          return n.call(e, t, r, o)
        } catch (e) {
          if (!l(e)) throw e
        }
      } : n
    }

    function s(n) {
      return n ? function (t, r, o) {
        function i(e, n) {
          n && (0 > n.uid && (n.uid += 4294967296), 0 > n.gid && (n.gid += 4294967296)), o && o.apply(this, arguments)
        }
        return 'function' == typeof r && (o = r, r = null), r ? n.call(e, t, r, i) : n.call(e, t, i)
      } : n
    }

    function d(n) {
      return n ? function (t, r) {
        var o = r ? n.call(e, t, r) : n.call(e, t);
        return 0 > o.uid && (o.uid += 4294967296), 0 > o.gid && (o.gid += 4294967296), o
      } : n
    }

    function l(e) {
      if (!e) return !0;
      if ('ENOSYS' === e.code) return !0;
      var n = !process.getuid || 0 !== process.getuid();
      return !!(n && ('EINVAL' === e.code || 'EPERM' === e.code))
    }
    r.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
      e.lchmod = function (n, t, o) {
        e.open(n, r.O_WRONLY | r.O_SYMLINK, t, function (n, r) {
          return n ? void(o && o(n)) : void e.fchmod(r, t, function (n) {
            e.close(r, function (e) {
              o && o(n || e)
            })
          })
        })
      }, e.lchmodSync = function (n, t) {
        var o = e.openSync(n, r.O_WRONLY | r.O_SYMLINK, t),
          i = !0,
          a;
        try {
          a = e.fchmodSync(o, t), i = !1
        } finally {
          if (i) try {
            e.closeSync(o)
          } catch (e) {} else e.closeSync(o)
        }
        return a
      }
    }(e), e.lutimes || function (e) {
      r.hasOwnProperty('O_SYMLINK') ? (e.lutimes = function (n, t, o, i) {
        e.open(n, r.O_SYMLINK, function (n, r) {
          return n ? void(i && i(n)) : void e.futimes(r, t, o, function (n) {
            e.close(r, function (e) {
              i && i(n || e)
            })
          })
        })
      }, e.lutimesSync = function (n, t, o) {
        var i = e.openSync(n, r.O_SYMLINK),
          a = !0,
          s;
        try {
          s = e.futimesSync(i, t, o), a = !1
        } finally {
          if (a) try {
            e.closeSync(i)
          } catch (e) {} else e.closeSync(i)
        }
        return s
      }) : (e.lutimes = function (e, n, t, r) {
        r && process.nextTick(r)
      }, e.lutimesSync = function () {})
    }(e), e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = i(e.chownSync), e.fchownSync = i(e.fchownSync), e.lchownSync = i(e.lchownSync), e.chmodSync = t(e.chmodSync), e.fchmodSync = t(e.fchmodSync), e.lchmodSync = t(e.lchmodSync), e.stat = s(e.stat), e.fstat = s(e.fstat), e.lstat = s(e.lstat), e.statSync = d(e.statSync), e.fstatSync = d(e.fstatSync), e.lstatSync = d(e.lstatSync), e.lchmod || (e.lchmod = function (e, n, t) {
      t && process.nextTick(t)
    }, e.lchmodSync = function () {}), e.lchown || (e.lchown = function (e, n, t, r) {
      r && process.nextTick(r)
    }, e.lchownSync = function () {}), 'win32' === a && (e.rename = function (n) {
      return function (t, r, o) {
        var i = Date.now(),
          a = 0;
        n(t, r, function s(d) {
          return d && ('EACCES' === d.code || 'EPERM' === d.code) && 6e4 > Date.now() - i ? (setTimeout(function () {
            e.stat(r, function (e) {
              e && 'ENOENT' === e.code ? n(t, r, s) : o(d)
            })
          }, a), void(100 > a && (a += 10))) : void(o && o(d))
        })
      }
    }(e.rename)), e.read = function (n) {
      function t(t, r, o, i, a, s) {
        var d;
        if (s && 'function' == typeof s) {
          var l = 0;
          d = function (c) {
            return c && 'EAGAIN' === c.code && 10 > l ? (l++, n.call(e, t, r, o, i, a, d)) : void s.apply(this, arguments)
          }
        }
        return n.call(e, t, r, o, i, a, d)
      }
      return t.__proto__ = n, t
    }(e.read), e.readSync = function (n) {
      return function (t, r, o, i, a) {
        for (var s = 0;;) try {
          return n.call(e, t, r, o, i, a)
        } catch (e) {
          if ('EAGAIN' === e.code && 10 > s) {
            s++;
            continue
          }
          throw e
        }
      }
    }(e.readSync)
  }
}, function (e, n, t) {
  function r(e) {
    this.logger = e, this.start = Date.now()
  }
  var o = t(14),
    i = t(6),
    a = t(47),
    s = t(21),
    d = t(9),
    l = t(45),
    c = t(8).Stream,
    p = /%[sdj%]/g,
    u = n.Logger = function (e) {
      o.EventEmitter.call(this), this.configure(e)
    };
  i.inherits(u, o.EventEmitter), u.prototype.configure = function (e) {
    var n = this;
    Array.isArray(this._names) && this._names.length && this.clear(), e = e || {}, this.transports = {}, this._names = [], e.transports && e.transports.forEach(function (e) {
      n.add(e, null, !0)
    }), this.padLevels = e.padLevels || !1, this.setLevels(e.levels), e.colors && s.addColors(e.colors), this.id = e.id || null, this.level = e.level || 'info', this.emitErrs = e.emitErrs || !1, this.stripColors = e.stripColors || !1, this.exitOnError = !('undefined' != typeof e.exitOnError) || e.exitOnError, this.exceptionHandlers = {}, this.profilers = {}, ['rewriters', 'filters'].forEach(function (t) {
      n[t] = Array.isArray(e[t]) ? e[t] : []
    }), e.exceptionHandlers && this.handleExceptions(e.exceptionHandlers)
  }, u.prototype.log = function (e) {
    function n(e) {
      d ? d(e) : s.emitErrs && s.emit('error', e)
    }

    function t(n) {
      if (d) {
        if (n) return d(n);
        d(null, e, h, c)
      }
      d = null, n || s.emit('logged', e, h, c)
    }

    function r(n, r) {
      var o = s.transports[n];
      o.log(e, h, c, function (n) {
        return n ? (n.transport = o, t(n), r()) : void(s.emit('logging', o, e, h, c), r())
      })
    }
    for (var o = Array.prototype.slice.call(arguments, 1), s = this; null === o[o.length - 1];) o.pop();
    var d = 'function' == typeof o[o.length - 1] ? o.pop() : null;
    if (0 === this._names.length) return n(new Error('Cannot log with no transports.'));
    if ('undefined' == typeof s.levels[e]) return n(new Error('Unknown log level: ' + e));
    var l = this._names.filter(function (n) {
      var t = s.transports[n];
      return t.level && s.levels[t.level] >= s.levels[e] || !t.level && s.levels[s.level] >= s.levels[e]
    });
    if (!l.length) return void(d && d());
    var c = {},
      u = !1,
      m = o && o[0] && o[0].match && null !== o[0].match(p),
      g = m ? o[0].match(p) : [],
      f = g.filter(function (e) {
        return '%%' === e
      }),
      h;
    if (0 < o.length - 1 - (g.length - f.length) || 1 === o.length) {
      c = o[o.length - 1] || o;
      var y = Object.prototype.toString.call(c);
      u = '[object Object]' === y || '[object Error]' === y || '[object Array]' === y, c = u ? o.pop() : {}
    }
    if (h = i.format.apply(null, o), this.padLevels && (h = Array(this.levelLength - e.length + 1).join(' ') + h), this.rewriters.forEach(function (n) {
        c = n(e, h, c, s)
      }), this.filters.forEach(function (n) {
        var t = n(e, h, c, s);
        'string' == typeof t ? h = t : (h = t.msg, c = t.meta)
      }), this.stripColors) {
      var _ = /\u001b\[(\d+(;\d+)*)?m/g;
      h = ('' + h).replace(_, '')
    }
    return a.forEach(l, r, t), this
  }, u.prototype.query = function (e, n) {
    function t(n, t) {
      e.query && (e.query = n.formatQuery(i)), n.query(e, function (r, o) {
        return r ? t(r) : void t(null, n.formatResults(o, e.format))
      })
    }
    'function' == typeof e && (n = e, e = {});
    var r = this,
      e = e || {},
      o = {},
      i = d.clone(e.query) || {},
      s;
    return e.transport ? (e.transport = e.transport.toLowerCase(), t(this.transports[e.transport], n)) : void(s = this._names.map(function (e) {
      return r.transports[e]
    }).filter(function (e) {
      return !!e.query
    }), a.forEach(s, function (e, n) {
      t(e, function (t, r) {
        n && (r = t || r, r && (o[e.name] = r), n()), n = null
      })
    }, function () {
      n(null, o)
    }))
  }, u.prototype.stream = function (e) {
    var n = this,
      e = e || {},
      t = new c,
      r = [],
      o;
    if (e.transport) {
      var i = this.transports[e.transport];
      if (delete e.transport, i && i.stream) return i.stream(e)
    }
    return t._streams = r, t.destroy = function () {
      for (var e = r.length; e--;) r[e].destroy()
    }, o = this._names.map(function (e) {
      return n.transports[e]
    }).filter(function (e) {
      return !!e.stream
    }), o.forEach(function (n) {
      var o = n.stream(e);
      o && (r.push(o), o.on('log', function (e) {
        e.transport = e.transport || [], e.transport.push(n.name), t.emit('log', e)
      }), o.on('error', function (e) {
        e.transport = e.transport || [], e.transport.push(n.name), t.emit('error', e)
      }))
    }), t
  }, u.prototype.close = function () {
    var e = this;
    this._names.forEach(function (n) {
      var t = e.transports[n];
      t && t.close && t.close()
    }), this.emit('close')
  }, u.prototype.handleExceptions = function () {
    var e = Array.prototype.slice.call(arguments),
      n = [],
      t = this;
    e.forEach(function (e) {
      Array.isArray(e) ? n = n.concat(e) : n.push(e)
    }), this.exceptionHandlers = this.exceptionHandlers || {}, n.forEach(function (e) {
      t.exceptionHandlers[e.name] = e
    }), this._hnames = Object.keys(t.exceptionHandlers), this.catchExceptions || (this.catchExceptions = this._uncaughtException.bind(this), process.on('uncaughtException', this.catchExceptions))
  }, u.prototype.unhandleExceptions = function () {
    var e = this;
    this.catchExceptions && (Object.keys(this.exceptionHandlers).forEach(function (n) {
      var t = e.exceptionHandlers[n];
      t.close && t.close()
    }), this.exceptionHandlers = {}, Object.keys(this.transports).forEach(function (n) {
      var t = e.transports[n];
      t.handleExceptions && (t.handleExceptions = !1)
    }), process.removeListener('uncaughtException', this.catchExceptions), this.catchExceptions = !1)
  }, u.prototype.add = function (e, n, t) {
    var r = t ? e : new e(n);
    if (!r.name && !r.log) throw new Error('Unknown transport with no log() method');
    else if (this.transports[r.name]) throw new Error('Transport already attached: ' + r.name + ', assign a different name');
    return this.transports[r.name] = r, this._names = Object.keys(this.transports), r._onError = this._onError.bind(this, r), t || r.on('error', r._onError), r.handleExceptions && !this.catchExceptions && this.handleExceptions(), this
  }, u.prototype.clear = function () {
    Object.keys(this.transports).forEach(function (e) {
      this.remove({
        name: e
      })
    }, this)
  }, u.prototype.remove = function (e) {
    var n = 'string' == typeof e ? e : e.name || e.prototype.name;
    if (!this.transports[n]) throw new Error('Transport ' + n + ' not attached to this instance');
    var t = this.transports[n];
    return delete this.transports[n], this._names = Object.keys(this.transports), t.close && t.close(), t._onError && t.removeListener('error', t._onError), this
  }, u.prototype.startTimer = function () {
    return new r(this)
  }, u.prototype.profile = function (e) {
    var n = Date.now(),
      t, r, o, i, a;
    return this.profilers[e] ? (t = this.profilers[e], delete this.profilers[e], r = Array.prototype.slice.call(arguments), a = 'function' == typeof r[r.length - 1] ? r.pop() : null, i = 'object' == typeof r[r.length - 1] ? r.pop() : {}, o = 2 === r.length ? r[1] : e, i.durationMs = n - t, this.info(o, i, a)) : (this.profilers[e] = n, this)
  }, u.prototype.setLevels = function (e) {
    return d.setLevels(this, this.levels, e)
  }, u.prototype.cli = function () {
    return this.padLevels = !0, this.setLevels(s.cli.levels), s.addColors(s.cli.colors), this.transports.console && (this.transports.console.colorize = this.transports.console.colorize || !0, this.transports.console.timestamp = this.transports.console.timestamp || !1), this
  }, u.prototype._uncaughtException = function (e) {
    function n() {
      d && !r && (clearTimeout(s), r = !0, process.exit(1))
    }
    var t = this,
      r = !1,
      o = l.getAllInfo(e),
      i = this._getExceptionHandlers(),
      s, d;
    return d = 'function' == typeof this.exitOnError ? this.exitOnError(e) : this.exitOnError, i && 0 !== i.length ? void(a.forEach(i, function (n, t) {
      n.logException('uncaughtException: ' + (e.message || e), o, t, e)
    }, n), d && (s = setTimeout(n, 3e3))) : n()
  }, u.prototype._getExceptionHandlers = function () {
    var e = this;
    return this._hnames.map(function (n) {
      return e.exceptionHandlers[n]
    }).concat(this._names.map(function (n) {
      return e.transports[n].handleExceptions && e.transports[n]
    })).filter(Boolean)
  }, u.prototype._onError = function (e, n) {
    this.emitErrs && this.emit('error', n, e)
  }, r.prototype.done = function (e) {
    var n = Array.prototype.slice.call(arguments),
      t = 'function' == typeof n[n.length - 1] ? n.pop() : null,
      r = 'object' == typeof n[n.length - 1] ? n.pop() : {};
    return r.duration = Date.now() - this.start + 'ms', this.logger.info(e, r, t)
  }
}, function (e, n, t) {
  var r = t(9),
    o = t(15),
    i = t(6)._extend,
    a = n.Container = function (e) {
      this.loggers = {}, this.options = e || {}, this.default = {
        transports: [new o.transports.Console({
          level: 'silly',
          colorize: !1
        })]
      }
    };
  a.prototype.get = a.prototype.add = function (e, n) {
    var t = this,
      a;
    return this.loggers[e] || (n = i({}, n || this.options || this.default), a = n.transports || this.options.transports, n.transports = a ? a.slice() : [], 0 === n.transports.length && (!n || !n.console) && n.transports.push(this.default.transports[0]), Object.keys(n).forEach(function (t) {
      if ('transports' !== t) {
        var i = r.capitalize(t);
        if (!o.transports[i]) throw new Error('Cannot add unknown transport: ' + i);
        var a = n[t];
        a.id = e, n.transports.push(new o.transports[i](a))
      }
    }), n.id = e, this.loggers[e] = new o.Logger(n), this.loggers[e].on('close', function () {
      t._delete(e)
    })), this.loggers[e]
  }, a.prototype.has = function (e) {
    return !!this.loggers[e]
  }, a.prototype.close = function (e) {
    function n(e) {
      t.loggers[e] && (t.loggers[e].close(), t._delete(e))
    }
    var t = this;
    return e ? n(e) : Object.keys(this.loggers).forEach(function (e) {
      n(e)
    })
  }, a.prototype._delete = function (e) {
    delete this.loggers[e]
  }
}, function (e, n) {
  function t(e) {
    for (var n in e) this[n] = e[n]
  }
  n.get = function (e) {
    var t = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    var r = {},
      o = Error.prepareStackTrace;
    Error.prepareStackTrace = function (e, n) {
      return n
    }, Error.captureStackTrace(r, e || n.get);
    var i = r.stack;
    return Error.prepareStackTrace = o, Error.stackTraceLimit = t, i
  }, n.parse = function (e) {
    if (!e.stack) return [];
    var n = this,
      t = e.stack.split('\n').slice(1);
    return t.map(function (e) {
      if (e.match(/^\s*[-]{4,}$/)) return n._createParsedCallSite({
        fileName: e,
        lineNumber: null,
        functionName: null,
        typeName: null,
        methodName: null,
        columnNumber: null,
        native: null
      });
      var t = e.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (t) {
        var r = null,
          o = null,
          i = null,
          a = null,
          s = null,
          d = 'native' === t[5];
        if (t[1]) {
          i = t[1];
          var l = i.lastIndexOf('.');
          if ('.' == i[l - 1] && l--, 0 < l) {
            r = i.substr(0, l), o = i.substr(l + 1);
            var c = r.indexOf('.Module');
            0 < c && (i = i.substr(c + 1), r = r.substr(0, c))
          }
          a = null
        }
        o && (a = r, s = o), '<anonymous>' === o && (s = null, i = null);
        var p = {
          fileName: t[2] || null,
          lineNumber: parseInt(t[3], 10) || null,
          functionName: i,
          typeName: a,
          methodName: s,
          columnNumber: parseInt(t[4], 10) || null,
          native: d
        };
        return n._createParsedCallSite(p)
      }
    }).filter(function (e) {
      return !!e
    })
  };
  ['this', 'typeName', 'functionName', 'methodName', 'fileName', 'lineNumber', 'columnNumber', 'function', 'evalOrigin'].forEach(function (e) {
    t.prototype[e] = null, t.prototype['get' + e[0].toUpperCase() + e.substr(1)] = function () {
      return this[e]
    }
  }), ['topLevel', 'eval', 'native', 'constructor'].forEach(function (e) {
    t.prototype[e] = !1, t.prototype['is' + e[0].toUpperCase() + e.substr(1)] = function () {
      return this[e]
    }
  }), n._createParsedCallSite = function (e) {
    return new t(e)
  }
}, function (e, n, t) {
  var r = t(14),
    o = t(6),
    i = t(9),
    a = t(12).Transport,
    s = n.Memory = function (e) {
      a.call(this, e), e = e || {}, this.errorOutput = [], this.writeOutput = [], this.json = e.json || !1, this.colorize = e.colorize || !1, this.prettyPrint = e.prettyPrint || !1, this.timestamp = 'undefined' != typeof e.timestamp && e.timestamp, this.showLevel = !(e.showLevel !== void 0) || e.showLevel, this.label = e.label || null, this.depth = e.depth || null, this.json && (this.stringify = e.stringify || function (e) {
        return JSON.stringify(e, null, 2)
      })
    };
  o.inherits(s, a), s.prototype.name = 'memory', s.prototype.log = function (e, n, t, r) {
    if (this.silent) return r(null, !0);
    var o = this,
      a;
    a = i.log({
      colorize: this.colorize,
      json: this.json,
      level: e,
      message: n,
      meta: t,
      stringify: this.stringify,
      timestamp: this.timestamp,
      prettyPrint: this.prettyPrint,
      raw: this.raw,
      label: this.label,
      depth: this.depth,
      formatter: this.formatter,
      humanReadableUnhandledException: this.humanReadableUnhandledException
    }), 'error' === e || 'debug' === e ? this.errorOutput.push(a) : this.writeOutput.push(a), o.emit('logged'), r(null, !0)
  }, s.prototype.clearLogs = function () {
    this.errorOutput = [], this.writeOutput = []
  }
}, function (e) {
  e.exports = require('https')
}, function (e) {
  e.exports = require('http')
}, function (e, n, t) {
  var r = t(6),
    o = t(15),
    i = t(110),
    a = t(109),
    s = t(8).Stream,
    d = t(12).Transport,
    l = n.Http = function (e) {
      d.call(this, e), e = e || {}, this.name = 'http', this.ssl = !!e.ssl, this.host = e.host || 'localhost', this.port = e.port, this.auth = e.auth, this.path = e.path || '', this.agent = e.agent, this.port || (this.port = this.ssl ? 443 : 80)
    };
  r.inherits(l, o.Transport), l.prototype.name = 'http', l.prototype._request = function (e, n) {
    e = e || {};
    var t = e.auth || this.auth,
      r = e.path || this.path || '',
      o;
    delete e.auth, delete e.path, o = (this.ssl ? a : i).request({
      host: this.host,
      port: this.port,
      path: '/' + r.replace(/^\//, ''),
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      agent: this.agent,
      auth: t ? t.username + ':' + t.password : ''
    }), o.on('error', n), o.on('response', function (e) {
      var t = '';
      e.on('data', function (e) {
        t += e
      }), e.on('end', function () {
        n(null, e, t)
      }), e.resume()
    }), o.end(new Buffer(JSON.stringify(e), 'utf8'))
  }, l.prototype.log = function (e, n, t, r) {
    var o = this;
    'function' == typeof t && (r = t, t = {});
    var i = {
      method: 'collect',
      params: {
        level: e,
        message: n,
        meta: t
      }
    };
    t && (t.path && (i.path = t.path, delete t.path), t.auth && (i.auth = t.auth, delete t.auth)), this._request(i, function (e, n) {
      return n && 200 !== n.statusCode && (e = new Error('HTTP Status Code: ' + n.statusCode)), e ? r(e) : void(o.emit('logged'), r && r(null, !0))
    })
  }, l.prototype.query = function (e, n) {
    'function' == typeof e && (n = e, e = {});
    var t = this,
      e = this.normalizeQuery(e);
    e = {
      method: 'query',
      params: e
    }, e.params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth), this._request(e, function (e, t, r) {
      if (t && 200 !== t.statusCode && (e = new Error('HTTP Status Code: ' + t.statusCode)), e) return n(e);
      if ('string' == typeof r) try {
        r = JSON.parse(r)
      } catch (t) {
        return n(t)
      }
      n(null, r)
    })
  }, l.prototype.stream = function (e) {
    e = e || {};
    var n = this,
      t = new s,
      r, o;
    return t.destroy = function () {
      r.destroy()
    }, e = {
      method: 'stream',
      params: e
    }, e.params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth), r = this._request(e), o = '', r.on('data', function (e) {
      for (var e = (o + e).split(/\n+/), n = e.length - 1, r = 0; r < n; r++) try {
        t.emit('log', JSON.parse(e[r]))
      } catch (n) {
        t.emit('error', n)
      }
      o = e[n]
    }), r.on('error', function (e) {
      t.emit('error', e)
    }), t
  }
}, function (e, n, t) {
  function r(e) {
    return e instanceof a.Stream
  }

  function o(e) {
    return r(e) && 'function' == typeof e._read && 'object' == typeof e._readableState
  }

  function i(e) {
    return r(e) && 'function' == typeof e._write && 'object' == typeof e._writableState
  }
  var a = t(8);
  e.exports = r, e.exports.isReadable = o, e.exports.isWritable = i, e.exports.isDuplex = function (e) {
    return o(e) && i(e)
  }
}, function (e, n, t) {
  var r = t(14),
    o = t(5),
    a = t(0),
    i = t(6),
    s = t(47),
    d = t(46),
    l = t(9),
    c = t(12).Transport,
    p = t(112).isWritable,
    u = t(8).Stream,
    m = t(10),
    g = n.File = function (e) {
      function n(n) {
        Array.prototype.slice.call(arguments, 1).forEach(function (t) {
          if (e[t]) throw new Error('Cannot set ' + t + ' and ' + n + 'together')
        })
      }
      var t = this;
      if (c.call(this, e), e.filename || e.dirname) n('filename or dirname', 'stream'), this._basename = this.filename = e.filename ? a.basename(e.filename) : 'winston.log', this.dirname = e.dirname || a.dirname(e.filename), this.options = e.options || {
        flags: 'a'
      }, this.options.highWaterMark = this.options.highWaterMark || 24;
      else if (e.stream) n('stream', 'filename', 'maxsize'), this._stream = e.stream, this._isStreams2 = p(this._stream), this._stream.on('error', function (e) {
        t.emit('error', e)
      }), this._stream.setMaxListeners(Infinity);
      else throw new Error('Cannot log to file without filename or stream.');
      this.json = !1 !== e.json, this.logstash = e.logstash || !1, this.colorize = e.colorize || !1, this.maxsize = e.maxsize || null, this.rotationFormat = e.rotationFormat || !1, this.zippedArchive = e.zippedArchive || !1, this.maxFiles = e.maxFiles || null, this.prettyPrint = e.prettyPrint || !1, this.label = e.label || null, this.timestamp = null == e.timestamp || e.timestamp, this.eol = e.eol || m.EOL, this.tailable = e.tailable || !1, this.depth = e.depth || null, this.showLevel = void 0 === e.showLevel || e.showLevel, this.maxRetries = e.maxRetries || 2, this.json && (this.stringify = e.stringify), this._size = 0, this._created = 0, this._buffer = [], this._draining = !1, this._opening = !1, this._failures = 0, this._archive = null
    };
  i.inherits(g, c), g.prototype.name = 'file', g.prototype.log = function (e, n, t, r) {
    if (this.silent) return r(null, !0);
    if (this._failures >= this.maxRetries) return r(new Error('Transport is in a failed state.'));
    var o = this;
    'string' != typeof n && (n = '' + n);
    var i = l.log({
      level: e,
      message: n,
      meta: t,
      json: this.json,
      logstash: this.logstash,
      colorize: this.colorize,
      prettyPrint: this.prettyPrint,
      timestamp: this.timestamp,
      showLevel: this.showLevel,
      stringify: this.stringify,
      label: this.label,
      depth: this.depth,
      formatter: this.formatter,
      humanReadableUnhandledException: this.humanReadableUnhandledException
    });
    'string' == typeof i && (i += this.eol), this.filename ? this.open(function (e) {
      return e ? o._buffer.push([i, r]) : void(o._write(i, r), o._size += i.length, o._lazyDrain())
    }) : (this._write(i, r), this._size += i.length, this._lazyDrain())
  }, g.prototype._write = function (e, n) {
    if (this._isStreams2) return this._stream.write(e), n && process.nextTick(function () {
      n(null, !0)
    });
    var t = this._stream.write(e);
    return n ? !1 === t ? this._stream.once('drain', function () {
      n(null, !0)
    }) : void process.nextTick(function () {
      n(null, !0)
    }) : void 0
  }, g.prototype.query = function (e, n) {
    function t(e, n) {
      try {
        var t = JSON.parse(e);
        i(t) && r(t)
      } catch (t) {
        n || p.emit('error', t)
      }
    }

    function r(n) {
      if (e.rows && l.length >= e.rows && 'desc' != e.order) return void(p.readable && p.destroy());
      if (e.fields) {
        var t = {};
        e.fields.forEach(function (e) {
          t[e] = n[e]
        }), n = t
      }
      'desc' === e.order && l.length >= e.rows && l.shift(), l.push(n)
    }

    function i(n) {
      if (n && 'object' == typeof n) {
        var t = new Date(n.timestamp);
        return !(e.from && t < e.from || e.until && t > e.until) || void 0
      }
    }
    'function' == typeof e && (n = e, e = {});
    var s = a.join(this.dirname, this.filename),
      e = this.normalizeQuery(e),
      d = '',
      l = [],
      c = 0,
      p = o.createReadStream(s, {
        encoding: 'utf8'
      });
    p.on('error', function (e) {
      return p.readable && p.destroy(), n ? 'ENOENT' === e.code ? n(null, l) : n(e) : void 0
    }), p.on('data', function (n) {
      for (var n = (d + n).split(/\n+/), r = n.length - 1, o = 0; o < r; o++)(!e.start || c >= e.start) && t(n[o]), c++;
      d = n[r]
    }), p.on('close', function () {
      d && t(d, !0), 'desc' === e.order && (l = l.reverse()), n && n(null, l)
    })
  }, g.prototype.stream = function (e) {
    var n = a.join(this.dirname, this.filename),
      e = e || {},
      t = new u,
      r = {
        file: n,
        start: e.start
      };
    return t.destroy = l.tailFile(r, function (e, n) {
      if (e) return t.emit('error', e);
      try {
        t.emit('data', n), n = JSON.parse(n), t.emit('log', n)
      } catch (n) {
        t.emit('error', n)
      }
    }), t
  }, g.prototype.open = function (e) {
    if (this.opening) return e(!0);
    return !this._stream || this.maxsize && this._size >= this.maxsize ? (e(!0), this._createStream()) : void(this._archive = this.zippedArchive ? this._stream.path : null, e())
  }, g.prototype.close = function () {
    var e = this;
    this._stream && (this._stream.end(), this._stream.destroySoon(), this._stream.once('finish', function () {
      e.emit('flush'), e.emit('closed')
    }))
  }, g.prototype.flush = function () {
    var e = this;
    return this._buffer.length ? void(this._buffer.forEach(function (n) {
      var t = n[0],
        r = n[1];
      process.nextTick(function () {
        e._write(t, r), e._size += t.length
      })
    }), e._buffer.length = 0, e._stream.once('drain', function () {
      e.emit('flush'), e.emit('logged')
    })) : e.emit('flush')
  }, g.prototype._createStream = function () {
    var e = this;
    this.opening = !0,
      function n(t) {
        function r(n) {
          e._stream && (e._stream.end(), e._stream.destroySoon()), e._size = n, e.filename = t, e._stream = o.createWriteStream(s, e.options), e._isStreams2 = p(e._stream), e._stream.on('error', function (n) {
            e._failures < e.maxRetries ? (e._createStream(), e._failures++) : e.emit('error', n)
          }), e._stream.setMaxListeners(Infinity), e.once('flush', function () {
            e.flush(), e.opening = !1, e.emit('open', s)
          }), e.flush(), i()
        }

        function i() {
          if (e._archive) {
            var n = d.createGzip(),
              t = o.createReadStream(e._archive + ''),
              r = o.createWriteStream(e._archive + '.gz');
            t.pipe(n).pipe(r), o.unlink(e._archive + ''), e._archive = ''
          }
        }
        var s = a.join(e.dirname, t);
        o.stat(s, function (t, o) {
          return t ? 'ENOENT' === t.code ? r(0) : e.emit('error', t) : !o || e.maxsize && o.size >= e.maxsize ? e._incFile(function () {
            n(e._getFile())
          }) : void r(o.size)
        })
      }(this._getFile())
  }, g.prototype._incFile = function (e) {
    var n = a.extname(this._basename),
      t = a.basename(this._basename, n);
    this.tailable ? this._checkMaxFilesTailable(n, t, e) : (this._created += 1, this._checkMaxFilesIncrementing(n, t, e))
  }, g.prototype._getFile = function () {
    var e = a.extname(this._basename),
      n = a.basename(this._basename, e);
    return !this.tailable && this._created ? n + (this.rotationFormat ? this.rotationFormat() : this._created) + e : n + e
  }, g.prototype._checkMaxFilesIncrementing = function (e, n, t) {
    var r = this,
      i, s;
    return r.zippedArchive && (r._archive = a.join(r.dirname, n + (1 === r._created ? '' : r._created - 1) + e)), !r.maxFiles || r._created < r.maxFiles ? t() : void(i = r._created - r.maxFiles, s = a.join(r.dirname, n + (0 === i ? '' : i) + e + (r.zippedArchive ? '.gz' : '')), o.unlink(s, t))
  }, g.prototype._checkMaxFilesTailable = function (e, n, t) {
    var r = [],
      d = this;
    if (this.maxFiles) {
      for (var i = this.maxFiles - 1; 0 < i; i--) r.push(function (t) {
        return function (r) {
          var i = a.join(d.dirname, n + (t - 1) + e + (d.zippedArchive ? '.gz' : ''));
          o.exists(i, function (s) {
            return s ? void o.rename(i, a.join(d.dirname, n + t + e + (d.zippedArchive ? '.gz' : '')), r) : r(null)
          })
        }
      }(i));
      d.zippedArchive && (d._archive = a.join(d.dirname, n + 1 + e)), s.series(r, function () {
        o.rename(a.join(d.dirname, n + e), a.join(d.dirname, n + 1 + e), t)
      })
    }
  }, g.prototype._lazyDrain = function () {
    var e = this;
    !this._draining && this._stream && (this._draining = !0, this._stream.once('drain', function () {
      this._draining = !1, e.emit('logged')
    }))
  }
}, function (e, n) {
  var t = n;
  t.levels = {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7
  }, t.colors = {
    emerg: 'red',
    alert: 'yellow',
    crit: 'red',
    error: 'red',
    warning: 'red',
    notice: 'yellow',
    info: 'green',
    debug: 'blue'
  }
}, function (e, n) {
  var t = n;
  t.levels = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  }, t.colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta'
  }
}, function (e, n) {
  var t = n;
  t.levels = {
    error: 0,
    warn: 1,
    help: 2,
    data: 3,
    info: 4,
    debug: 5,
    prompt: 6,
    verbose: 7,
    input: 8,
    silly: 9
  }, t.colors = {
    error: 'red',
    warn: 'yellow',
    help: 'cyan',
    data: 'grey',
    info: 'green',
    debug: 'blue',
    prompt: 'grey',
    verbose: 'cyan',
    input: 'grey',
    silly: 'magenta'
  }
}, function (e, n, t) {
  var r = t(13);
  e.exports = function () {
    var e = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
    return function (n) {
      return ' ' === n ? n : r[e[Math.round(Math.random() * (e.length - 1))]](n)
    }
  }()
}, function (e, n, t) {
  var r = t(13);
  e.exports = function () {
    var e = ['red', 'yellow', 'green', 'blue', 'magenta'];
    return function (n, t) {
      return ' ' === n ? n : r[e[t++ % e.length]](n)
    }
  }()
}, function (e, n, t) {
  var r = t(13);
  e.exports = function (e, n) {
    return 0 == n % 2 ? e : r.inverse(e)
  }
}, function (e, n, t) {
  var r = t(13);
  e.exports = function () {
    return function (e, n) {
      if (' ' === e) return e;
      switch (n % 3) {
        case 0:
          return r.red(e);
        case 1:
          return r.white(e);
        case 2:
          return r.blue(e);
      }
    }
  }()
}, function (e) {
  e.exports = function (e) {
    function n(e) {
      var n = Math.floor(Math.random() * e);
      return n
    }

    function t(e) {
      var n = !1;
      return i.filter(function (t) {
        n = t === e
      }), n
    }

    function r(e, r) {
      var a = '',
        s, c;
      for (c in r = r || {}, r.up = r.up || !0, r.mid = r.mid || !0, r.down = r.down || !0, r.size = r.size || 'maxi', e = e.split(''), e)
        if (!t(c)) {
          switch (a += e[c], s = {
            up: 0,
            down: 0,
            mid: 0
          }, r.size) {
            case 'mini':
              s.up = n(8), s.min = n(2), s.down = n(8);
              break;
            case 'maxi':
              s.up = n(16) + 3, s.min = n(4) + 1, s.down = n(64) + 3;
              break;
            default:
              s.up = n(8) + 1, s.mid = n(6) / 2, s.down = n(8) + 1;
          }
          var l = ['up', 'mid', 'down'];
          for (var p in l)
            for (var d = l[p], u = 0; u <= s[d]; u++) r[d] && (a += o[d][n(o[d].length)])
        } return a
    }
    e = e || '   he is here   ';
    var o = {
        up: ['\u030D', '\u030E', '\u0304', '\u0305', '\u033F', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030A', '\u0342', '\u0313', '\u0308', '\u034A', '\u034B', '\u034C', '\u0303', '\u0302', '\u030C', '\u0350', '\u0300', '\u0301', '\u030B', '\u030F', '\u0312', '\u0313', '\u0314', '\u033D', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036A', '\u036B', '\u036C', '\u036D', '\u036E', '\u036F', '\u033E', '\u035B', '\u0346', '\u031A'],
        down: ['\u0316', '\u0317', '\u0318', '\u0319', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032A', '\u032B', '\u032C', '\u032D', '\u032E', '\u032F', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033A', '\u033B', '\u033C', '\u0345', '\u0347', '\u0348', '\u0349', '\u034D', '\u034E', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035A', '\u0323'],
        mid: ['\u0315', '\u031B', '\u0300', '\u0301', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u035C', '\u035D', '\u035E', '\u035F', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', ' \u0489']
      },
      i = [].concat(o.up, o.down, o.mid),
      a = {};
    return r(e)
  }
}, function (e) {
  e.exports = function (e) {
    var n = '';
    e = e || 'Run the trap, drop the bass', e = e.split('');
    var t = {
      a: ['@', '\u0104', '\u023A', '\u0245', '\u0394', '\u039B', '\u0414'],
      b: ['\xDF', '\u0181', '\u0243', '\u026E', '\u03B2', '\u0E3F'],
      c: ['\xA9', '\u023B', '\u03FE'],
      d: ['\xD0', '\u018A', '\u0500', '\u0501', '\u0502', '\u0503'],
      e: ['\xCB', '\u0115', '\u018E', '\u0258', '\u03A3', '\u03BE', '\u04BC', '\u0A6C'],
      f: ['\u04FA'],
      g: ['\u0262'],
      h: ['\u0126', '\u0195', '\u04A2', '\u04BA', '\u04C7', '\u050A'],
      i: ['\u0F0F'],
      j: ['\u0134'],
      k: ['\u0138', '\u04A0', '\u04C3', '\u051E'],
      l: ['\u0139'],
      m: ['\u028D', '\u04CD', '\u04CE', '\u0520', '\u0521', '\u0D69'],
      n: ['\xD1', '\u014B', '\u019D', '\u0376', '\u03A0', '\u048A'],
      o: ['\xD8', '\xF5', '\xF8', '\u01FE', '\u0298', '\u047A', '\u05DD', '\u06DD', '\u0E4F'],
      p: ['\u01F7', '\u048E'],
      q: ['\u09CD'],
      r: ['\xAE', '\u01A6', '\u0210', '\u024C', '\u0280', '\u042F'],
      s: ['\xA7', '\u03DE', '\u03DF', '\u03E8'],
      t: ['\u0141', '\u0166', '\u0373'],
      u: ['\u01B1', '\u054D'],
      v: ['\u05D8'],
      w: ['\u0428', '\u0460', '\u047C', '\u0D70'],
      x: ['\u04B2', '\u04FE', '\u04FC', '\u04FD'],
      y: ['\xA5', '\u04B0', '\u04CB'],
      z: ['\u01B5', '\u0240']
    };
    return e.forEach(function (e) {
      e = e.toLowerCase();
      var r = t[e] || [' '],
        o = Math.floor(Math.random() * r.length);
      n += 'undefined' == typeof t[e] ? e : t[e][o]
    }), n
  }
}, function (e) {
  function n(n) {
    var t = new Error('Cannot find module "' + n + '".');
    throw t.code = 'MODULE_NOT_FOUND', t
  }
  n.keys = function () {
    return []
  }, n.resolve = n, e.exports = n, n.id = 123
}, function (e) {
  var n = process.argv;
  e.exports = function () {
    return -1 === n.indexOf('--no-color') && -1 === n.indexOf('--color=false') && (!(-1 === n.indexOf('--color') && -1 === n.indexOf('--color=true') && -1 === n.indexOf('--color=always')) || !process.stdout || process.stdout.isTTY)
  }()
}, function (e) {
  var n = {};
  e.exports = n;
  var t = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(t).forEach(function (e) {
    var r = t[e],
      o = n[e] = [];
    o.open = '\x1B[' + r[0] + 'm', o.close = '\x1B[' + r[1] + 'm'
  })
}, function (e, n, t) {
  var r = t(13);
  e.exports = r
}, function (e) {
  e.exports = require('string_decoder')
}, function (module, exports) {
  var cycle = exports;
  cycle.decycle = function (e) {
    'use strict';
    var n = [],
      t = [];
    return function e(r, o) {
      var a, i, s;
      if ('object' == typeof r && null !== r && !(r instanceof Boolean) && !(r instanceof Date) && !(r instanceof Number) && !(r instanceof RegExp) && !(r instanceof String)) {
        for (a = 0; a < n.length; a += 1)
          if (n[a] === r) return {
            $ref: t[a]
          };
        if (n.push(r), t.push(o), '[object Array]' === Object.prototype.toString.apply(r))
          for (s = [], a = 0; a < r.length; a += 1) s[a] = e(r[a], o + '[' + a + ']');
        else
          for (i in s = {}, r) Object.prototype.hasOwnProperty.call(r, i) && (s[i] = e(r[i], o + '[' + JSON.stringify(i) + ']'));
        return s
      }
      return r
    }(e, '$')
  }, cycle.retrocycle = function ($) {
    'use strict';
    var px = /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;
    return function rez(value) {
      var i, item, name, path;
      if (value && 'object' == typeof value)
        if ('[object Array]' === Object.prototype.toString.apply(value))
          for (i = 0; i < value.length; i += 1) item = value[i], item && 'object' == typeof item && (path = item.$ref, 'string' == typeof path && px.test(path) ? value[i] = eval(path) : rez(item));
        else
          for (name in value) 'object' == typeof value[name] && (item = value[name], item && (path = item.$ref, 'string' == typeof path && px.test(path) ? value[name] = eval(path) : rez(item)))
    }($), $
  }
}, function (e) {
  e.exports = require('crypto')
}, function (e, n, t) {
  var r = t(14),
    o = t(10),
    i = t(6),
    a = t(9),
    s = t(12).Transport,
    d = n.Console = function (e) {
      s.call(this, e), e = e || {}, this.json = e.json || !1, this.colorize = e.colorize || !1, this.prettyPrint = e.prettyPrint || !1, this.timestamp = 'undefined' != typeof e.timestamp && e.timestamp, this.showLevel = !(e.showLevel !== void 0) || e.showLevel, this.label = e.label || null, this.logstash = e.logstash || !1, this.depth = e.depth || null, this.align = e.align || !1, this.stderrLevels = function (e, n) {
        var t = 'Cannot have non-string elements in stderrLevels Array';
        if (n) {
          if (e) throw new Error('Cannot set debugStdout and stderrLevels together');
          return a.stringArrayToSet(['error'], t)
        }
        if (!e) return a.stringArrayToSet(['error', 'debug'], t);
        if (!Array.isArray(e)) throw new Error('Cannot set stderrLevels to type other than Array');
        return a.stringArrayToSet(e, t)
      }(e.stderrLevels, e.debugStdout), this.eol = e.eol || o.EOL, this.json && (this.stringify = e.stringify || function (e) {
        return JSON.stringify(e, null, 2)
      })
    };
  i.inherits(d, s), d.prototype.name = 'console', d.prototype.log = function (e, n, t, r) {
    if (this.silent) return r(null, !0);
    var o = this,
      i;
    i = a.log({
      colorize: this.colorize,
      json: this.json,
      level: e,
      message: n,
      meta: t,
      stringify: this.stringify,
      timestamp: this.timestamp,
      showLevel: this.showLevel,
      prettyPrint: this.prettyPrint,
      raw: this.raw,
      label: this.label,
      logstash: this.logstash,
      depth: this.depth,
      formatter: this.formatter,
      align: this.align,
      humanReadableUnhandledException: this.humanReadableUnhandledException
    }), this.stderrLevels[e] ? process.stderr.write(i + this.eol) : process.stdout.write(i + this.eol), o.emit('logged'), r(null, !0)
  }
}, function (e, n, t) {
  Object.defineProperty(n, 'Console', {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return t(130).Console
    }
  }), Object.defineProperty(n, 'File', {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return t(113).File
    }
  }), Object.defineProperty(n, 'Http', {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return t(111).Http
    }
  }), Object.defineProperty(n, 'Memory', {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return t(108).Memory
    }
  })
}, function (e) {
  e.exports = {
    name: 'winston',
    description: 'A multi-transport async logging library for Node.js',
    version: '2.3.1',
    author: 'Charlie Robbins <charlie.robbins@gmail.com>',
    maintainers: ['Jarrett Cruger <jcrugzz@gmail.com>', 'Alberto Pose <albertopose@gmail.com>'],
    repository: {
      type: 'git',
      url: 'https://github.com/winstonjs/winston.git'
    },
    keywords: ['winston', 'logging', 'sysadmin', 'tools'],
    dependencies: {
      async: '~1.0.0',
      colors: '1.0.x',
      cycle: '1.0.x',
      eyes: '0.1.x',
      isstream: '0.1.x',
      "stack-trace": '0.0.x'
    },
    devDependencies: {
      "cross-spawn-async": '^2.0.0',
      hock: '1.x.x',
      "std-mocks": '~1.0.0',
      vows: '0.7.x'
    },
    main: './lib/winston',
    scripts: {
      test: 'vows --spec --isolate'
    },
    engines: {
      node: '>= 0.10.0'
    },
    license: 'MIT'
  }
}, function (e, n, t) {
  'use strict';
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const r = t(48),
    o = t(81),
    i = global;
  i.log = {
    error(e, n) {
      r.log('error', '[main] ' + o.formatLogMessage(e, n))
    },
    warn(e, n) {
      r.log('warn', '[main] ' + o.formatLogMessage(e, n))
    },
    info(e, n) {
      r.log('info', '[main] ' + o.formatLogMessage(e, n))
    },
    debug(e, n) {
      r.log('debug', '[main] ' + o.formatLogMessage(e, n))
    }
  }
}, function (e, n, t) {
  'use strict';

  function r(e) {
    O = !0;
    const n = null === M;
    M && (M.destroy(), M = null), C.showUncaughtException(n, e)
  }

  function o() {
    return (E.now() - L) / 1e3
  }

  function i() {
    return {
      uptime: o().toFixed(3),
      time: new Date().toString()
    }
  }

  function a(e) {
    log.info('Processing protocol url');
    const n = y.parseAppURL(e);
    c((e) => {
      e.focus(), e.sendURLAction(n)
    })
  }

  function s(e) {
    log.info(`Received possible protocol arguments: ${e.length}`); {
      const n = e.filter((e) => {
        try {
          const n = m.parse(e);
          return n.protocol && N.has(n.protocol.slice(0, -1))
        } catch (n) {
          return log.error(`Unable to parse argument as URL: ${e}`), !1
        }
      });
      e.includes(F) && 1 === n.length ? a(n[0]) : log.error(`Malformed launch arguments received: ${e}`)
    }
  }

  function d(e) {
    p.app.setAsDefaultProtocolClient(e, process.execPath, [F])
  }

  function l() {
    const e = new g.AppWindow;
    !1, e.onClose(() => {
      M = null, O || p.app.quit()
    }), e.onDidLoad(() => {
      e.show(), e.sendLaunchTimingStats({
        mainReadyTime: P,
        loadTime: e.loadTime,
        rendererReadyTime: e.rendererReadyTime
      });
      const n = T;
      T = null;
      for (const t of n) t(e)
    }), e.load(), M = e
  }

  function c(e) {
    T ? T.push(e) : M && e(M)
  }
  Object.defineProperty(n, '__esModule', {
    value: !0
  }), t(133);
  const p = t(4),
    u = t(5),
    m = t(18),
    g = t(70),
    f = t(25),
    h = t(57),
    y = t(56),
    _ = t(54),
    b = t(27),
    S = t(48),
    w = t(23),
    v = t(52),
    x = t(33),
    E = t(26),
    C = t(51),
    k = t(49);
  p.app.setAppLogsPath(), x.enableSourceMaps();
  let M = null;
  const L = E.now();
  let O = !1,
    P = null,
    T = [];
  const F = '--protocol-launcher',
    N = new Set(['x-github-client']);
  N.add('x-github-desktop-auth'), N.add('github-windows'), p.app.on('window-all-closed', () => {}), process.on('uncaughtException', (e) => {
    e = x.withSourceMappedStack(e), v.reportError(e, i()), r(e)
  });
  let A = !1;
  if (1 < process.argv.length) {
    const n = process.argv[1],
      e = _.handleSquirrelEvent(n);
    e ? (A = !0, e.catch((t) => {
      log.error(`Failed handling Squirrel event: ${n}`, t)
    }).then(() => {
      p.app.quit()
    })) : s(process.argv)
  }
  let R = !1;
  if (!A) {
    const e = p.app.requestSingleInstanceLock();
    R = !e, p.app.on('second-instance', (e, n) => {
      M && (M.isMinimized() && M.restore(), !M.isVisible() && M.show(), M.focus()), s(n)
    }), R && p.app.quit()
  }
  h.shellNeedsPatching(process) && h.updateEnvironmentForProcess(), p.app.on('will-finish-launching', () => {
    p.app.on('open-url', (e, n) => {
      e.preventDefault(), a(n)
    })
  }), !1, process.env.GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION && (log.info(`GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION environment variable set, disabling hardware acceleration`), p.app.disableHardwareAcceleration()), p.app.on('ready', () => {
    R || A || (P = E.now() - L, N.forEach((e) => d(e)), l(), p.Menu.setApplicationMenu(f.buildDefaultMenu({
      selectedShell: null,
      selectedExternalEditor: null,
      askForConfirmationOnRepositoryRemoval: !1,
      askForConfirmationOnForcePush: !1
    })), p.ipcMain.on('update-preferred-app-menu-item-labels', (e, n) => {
      const t = f.buildDefaultMenu(n),
        r = p.Menu.getApplicationMenu();
      if (null === r) return p.Menu.setApplicationMenu(t), void(null !== M && M.sendAppMenu());
      let o = !1;
      for (const i of f.getAllMenuItems(t)) {
        const e = i.id;
        if (!e) continue;
        const n = r.getMenuItemById(e);
        n ? (n.label !== i.label && (o = !0), n.enabled !== i.enabled && (i.enabled = n.enabled, o = !0)) : o = !0
      }
      o && M && (p.Menu.setApplicationMenu(t), M.sendAppMenu())
    }), p.ipcMain.on('menu-event', (e) => {
      const {
        name: n
      } = e;
      M && M.sendMenuEvent(n)
    }), p.ipcMain.on('execute-menu-item', (e, {
      id: n
    }) => {
      const t = p.Menu.getApplicationMenu();
      if (null !== t) {
        const r = t.getMenuItemById(n);
        if (r) {
          const n = p.BrowserWindow.fromWebContents(e.sender),
            t = {
              preventDefault: () => {},
              sender: e.sender
            };
          r.click(t, n, e.sender)
        }
      }
    }), p.ipcMain.on('update-menu-state', (e, n) => {
      let t = !1;
      const r = p.Menu.getApplicationMenu();
      if (null === r) return void log.debug(`unable to get current menu, bailing out...`);
      for (const o of n) {
        const {
          id: e,
          state: n
        } = o, i = r.getMenuItemById(e);
        i ? n.enabled !== void 0 && i.enabled !== n.enabled && (i.enabled = n.enabled, t = !0) : b.fatalError(`Unknown menu id: ${e}`)
      }
      t && M && (p.Menu.setApplicationMenu(r), M.sendAppMenu())
    }), p.ipcMain.on('show-contextual-menu', (e, n) => {
      const t = k.buildContextMenu(n, (n) => e.sender.send('contextual-menu-action', n)),
        r = p.BrowserWindow.fromWebContents(e.sender);
      t.popup({
        window: r
      })
    }), p.ipcMain.on('get-app-menu', () => {
      M && M.sendAppMenu()
    }), p.ipcMain.on('show-certificate-trust-dialog', (e, {
      certificate: n,
      message: t
    }) => {
      c((e) => {
        e.showCertificateTrustDialog(n, t)
      })
    }), p.ipcMain.on('log', (e, n, t) => {
      S.log(n, t)
    }), p.ipcMain.on('uncaught-exception', (e, n) => {
      r(n)
    }), p.ipcMain.on('send-error-report', (e, {
      error: n,
      extra: t,
      nonFatal: r
    }) => {
      v.reportError(n, Object.assign({}, i(), t), r)
    }), p.ipcMain.on('open-external', async (e, {
      path: n
    }) => {
      const t = n.toLowerCase();
      (t.startsWith('http://') || t.startsWith('https://')) && log.info(`opening in browser: ${n}`);
      let r;
      try {
        await p.shell.openExternal(n), r = !0
      } catch (n) {
        log.error(`Call to openExternal failed: '${n}'`), r = !1
      }
      e.sender.send('open-external-result', {
        result: r
      })
    }), p.ipcMain.on('show-item-in-folder', (e, {
      path: n
    }) => {
      u.stat(n, (e, t) => e ? void log.error(`Unable to find file at '${n}'`, e) : void(t.isDirectory() ? w.openDirectorySafe(n) : p.shell.showItemInFolder(n)))
    }))
  }), p.app.on('activate', () => {
    c((e) => {
      e.show()
    })
  }), p.app.on('web-contents-created', (e, n) => {
    n.on('new-window', (e, n) => {
      e.preventDefault(), log.warn(`Prevented new window to: ${n}`)
    })
  }), p.app.on('certificate-error', (e, n, t, r, o, i) => {
    i(!1), c((e) => {
      e.sendCertificateError(o, r, t)
    })
  })
}]);
//# sourceMappingURL=main.js.map