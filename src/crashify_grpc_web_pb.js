/**
 * @fileoverview gRPC-Web generated client stub for crashify
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.crashify = require('./crashify_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.crashify.TransitoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.crashify.TransitoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.Mensaje,
 *   !proto.crashify.Mensaje>}
 */
const methodInfo_Transito_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.Mensaje,
  /** @param {!proto.crashify.Mensaje} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.Mensaje.deserializeBinary
);


/**
 * @param {!proto.crashify.Mensaje} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.Mensaje)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.Mensaje>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/Ping',
      request,
      metadata || {},
      methodInfo_Transito_Ping,
      callback);
};


/**
 * @param {!proto.crashify.Mensaje} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.Mensaje>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/Ping',
      request,
      metadata || {},
      methodInfo_Transito_Ping);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.Sesion,
 *   !proto.crashify.Usuario>}
 */
const methodInfo_Transito_IniciarSesion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.Usuario,
  /** @param {!proto.crashify.Sesion} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.Usuario.deserializeBinary
);


/**
 * @param {!proto.crashify.Sesion} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.Usuario)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.Usuario>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.iniciarSesion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/IniciarSesion',
      request,
      metadata || {},
      methodInfo_Transito_IniciarSesion,
      callback);
};


/**
 * @param {!proto.crashify.Sesion} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.Usuario>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.iniciarSesion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/IniciarSesion',
      request,
      metadata || {},
      methodInfo_Transito_IniciarSesion);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.Usuario,
 *   !proto.crashify.Respuesta>}
 */
const methodInfo_Transito_RegistrarUsuario = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.Respuesta,
  /** @param {!proto.crashify.Usuario} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.Respuesta.deserializeBinary
);


/**
 * @param {!proto.crashify.Usuario} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.Respuesta)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.Respuesta>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.registrarUsuario =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/RegistrarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_RegistrarUsuario,
      callback);
};


/**
 * @param {!proto.crashify.Usuario} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.Respuesta>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.registrarUsuario =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/RegistrarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_RegistrarUsuario);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.Usuario,
 *   !proto.crashify.Respuesta>}
 */
const methodInfo_Transito_ActualizarUsuario = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.Respuesta,
  /** @param {!proto.crashify.Usuario} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.Respuesta.deserializeBinary
);


/**
 * @param {!proto.crashify.Usuario} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.Respuesta)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.Respuesta>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.actualizarUsuario =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/ActualizarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_ActualizarUsuario,
      callback);
};


/**
 * @param {!proto.crashify.Usuario} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.Respuesta>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.actualizarUsuario =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/ActualizarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_ActualizarUsuario);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.ID,
 *   !proto.crashify.Respuesta>}
 */
const methodInfo_Transito_EliminarUsuario = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.Respuesta,
  /** @param {!proto.crashify.ID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.Respuesta.deserializeBinary
);


/**
 * @param {!proto.crashify.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.Respuesta)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.Respuesta>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.eliminarUsuario =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/EliminarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_EliminarUsuario,
      callback);
};


/**
 * @param {!proto.crashify.ID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.Respuesta>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.eliminarUsuario =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/EliminarUsuario',
      request,
      metadata || {},
      methodInfo_Transito_EliminarUsuario);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.crashify.Mensaje,
 *   !proto.crashify.ListaReportes>}
 */
const methodInfo_Transito_ObtenerReportes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.crashify.ListaReportes,
  /** @param {!proto.crashify.Mensaje} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.crashify.ListaReportes.deserializeBinary
);


/**
 * @param {!proto.crashify.Mensaje} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.crashify.ListaReportes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.crashify.ListaReportes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.crashify.TransitoClient.prototype.obtenerReportes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/crashify.Transito/ObtenerReportes',
      request,
      metadata || {},
      methodInfo_Transito_ObtenerReportes,
      callback);
};


/**
 * @param {!proto.crashify.Mensaje} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.crashify.ListaReportes>}
 *     A native promise that resolves to the response
 */
proto.crashify.TransitoPromiseClient.prototype.obtenerReportes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/crashify.Transito/ObtenerReportes',
      request,
      metadata || {},
      methodInfo_Transito_ObtenerReportes);
};


module.exports = proto.crashify;

