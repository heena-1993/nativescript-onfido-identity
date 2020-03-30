/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module onfido {
		export module android {
			export module sdk {
				export module capture {
					export module base {
						export class BuildConfig {
							public static class: java.lang.Class<com.onfido.android.sdk.capture.base.BuildConfig>;
							public static DEBUG: boolean;
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static FLAVOR: string;
							public static VERSION_CODE: number;
							public static VERSION_NAME: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class ErrorParser {
					public static class: java.lang.Class<com.onfido.api.client.ErrorParser>;
					/**
					 * Constructs a new instance of the com.onfido.api.client.ErrorParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parseErrorFrom(param0: retrofit2.Response): com.onfido.api.client.data.ErrorData;
					});
					public constructor();
					public parseErrorFrom(param0: retrofit2.Response): com.onfido.api.client.data.ErrorData;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class ErrorParserImpl extends com.onfido.api.client.ErrorParser {
					public static class: java.lang.Class<com.onfido.api.client.ErrorParserImpl>;
					public static newInstance(): com.onfido.api.client.ErrorParser;
					public parseErrorFrom(param0: retrofit2.Response): com.onfido.api.client.data.ErrorData;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class LiveVideoChallengeAPI {
					public static class: java.lang.Class<com.onfido.api.client.LiveVideoChallengeAPI>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export abstract class MultiPartRequestCreator {
					public static class: java.lang.Class<com.onfido.api.client.MultiPartRequestCreator>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class MultipartDocumentRequestCreator extends com.onfido.api.client.MultiPartRequestCreator {
					public static class: java.lang.Class<com.onfido.api.client.MultipartDocumentRequestCreator>;
					public createMultipartRequestBody(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param6: com.onfido.api.client.data.DocSide, param7: string, param8: string, param9: com.onfido.api.client.data.DeviceInfo): okhttp3.RequestBody;
					public static newInstance(): com.onfido.api.client.MultipartDocumentRequestCreator;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class MultipartLivePhotoRequestCreator extends com.onfido.api.client.MultiPartRequestCreator {
					public static class: java.lang.Class<com.onfido.api.client.MultipartLivePhotoRequestCreator>;
					public static newInstance(): com.onfido.api.client.MultipartLivePhotoRequestCreator;
					public createMultipartRequestBody(param0: string, param1: string, param2: string, param3: boolean, param4: native.Array<number>, param5: string, param6: string): okhttp3.RequestBody;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class MultipartLiveVideoRequestCreator extends com.onfido.api.client.MultiPartRequestCreator {
					public static class: java.lang.Class<com.onfido.api.client.MultipartLiveVideoRequestCreator>;
					public createMultipartRequestBody(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: string, param5: string, param6: string, param7: native.Array<com.onfido.api.client.data.Challenge>, param8: java.lang.Long, param9: native.Array<com.onfido.api.client.data.LiveVideoLanguage>, param10: com.onfido.api.client.data.DeviceInfo): okhttp3.RequestBody;
					public static newInstance(): com.onfido.api.client.MultipartLiveVideoRequestCreator;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoAPI {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoAPI>;
					/**
					 * Constructs a new instance of the com.onfido.api.client.OnfidoAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: com.onfido.api.client.data.DocSide, param8: string, param9: string, param10: com.onfido.api.client.data.DeviceInfo): void;
						upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: string, param8: string, param9: com.onfido.api.client.data.DeviceInfo): void;
						upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
						uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: boolean, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
						uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param5: string, param6: string, param7: com.onfido.api.client.data.DeviceInfo): void;
						uploadLiveVideo(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: string, param5: string, param6: string, param7: native.Array<com.onfido.api.client.data.Challenge>, param8: java.lang.Long, param9: native.Array<com.onfido.api.client.data.LiveVideoLanguage>, param10: com.onfido.api.client.data.DeviceInfo): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
						getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
					});
					public constructor();
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: com.onfido.api.client.data.DocSide, param8: string, param9: string, param10: com.onfido.api.client.data.DeviceInfo): void;
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: string, param8: string, param9: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param5: string, param6: string, param7: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: boolean, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
					public getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLiveVideo(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: string, param5: string, param6: string, param7: native.Array<com.onfido.api.client.data.Challenge>, param8: java.lang.Long, param9: native.Array<com.onfido.api.client.data.LiveVideoLanguage>, param10: com.onfido.api.client.data.DeviceInfo): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
				}
				export module OnfidoAPI {
					export class Callback<T>  extends retrofit2.Callback<any> {
						public static class: java.lang.Class<com.onfido.api.client.OnfidoAPI.Callback<any>>;
						public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
						public constructor(param0: com.onfido.api.client.OnfidoAPI.Listener<any>, param1: com.onfido.api.client.ErrorParser);
						public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
					}
					export class Listener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.onfido.api.client.OnfidoAPI.Listener<any>>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.OnfidoAPI$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onFailure(param0: java.lang.Throwable): void;
							onError(param0: number, param1: string, param2: com.onfido.api.client.data.ErrorData): void;
						});
						public constructor();
						public onError(param0: number, param1: string, param2: com.onfido.api.client.data.ErrorData): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoAPIFactory {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoAPIFactory>;
					public static create(param0: com.onfido.api.client.token.TokenProvider, param1: native.Array<string>): com.onfido.api.client.OnfidoAPI;
					public static create(param0: com.onfido.api.client.token.TokenProvider): com.onfido.api.client.OnfidoAPI;
					public static create(param0: com.onfido.api.client.token.TokenProvider, param1: string): com.onfido.api.client.OnfidoAPI;
					public static create(param0: com.onfido.api.client.token.TokenProvider, param1: string, param2: native.Array<string>): com.onfido.api.client.OnfidoAPI;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoAPIImpl extends com.onfido.api.client.OnfidoAPI {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoAPIImpl>;
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: com.onfido.api.client.data.DocSide, param8: string, param9: string, param10: com.onfido.api.client.data.DeviceInfo): void;
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: string, param8: string, param9: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param5: string, param6: string, param7: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: boolean, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
					public getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
					public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
					public uploadLiveVideo(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: string, param5: string, param6: string, param7: native.Array<com.onfido.api.client.data.Challenge>, param8: java.lang.Long, param9: native.Array<com.onfido.api.client.data.LiveVideoLanguage>, param10: com.onfido.api.client.data.DeviceInfo): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoFetcher {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoFetcher>;
					public static create(param0: com.onfido.api.client.token.TokenProvider, param1: string, param2: native.Array<string>): com.onfido.api.client.OnfidoFetcher;
					public applicants(): com.onfido.api.client.OnfidoService;
				}
				export module OnfidoFetcher {
					export class AuthTokenInterceptor {
						public static class: java.lang.Class<com.onfido.api.client.OnfidoFetcher.AuthTokenInterceptor>;
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoService {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoService>;
					/**
					 * Constructs a new instance of the com.onfido.api.client.OnfidoService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						upload(param0: okhttp3.RequestBody): retrofit2.Call<com.onfido.api.client.data.DocumentUpload>;
						uploadLivePhoto(param0: okhttp3.RequestBody): retrofit2.Call<com.onfido.api.client.data.LivePhotoUpload>;
						uploadLiveVideo(param0: okhttp3.RequestBody): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
						getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
					});
					public constructor();
					public uploadLivePhoto(param0: okhttp3.RequestBody): retrofit2.Call<com.onfido.api.client.data.LivePhotoUpload>;
					public uploadLiveVideo(param0: okhttp3.RequestBody): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
					public upload(param0: okhttp3.RequestBody): retrofit2.Call<com.onfido.api.client.data.DocumentUpload>;
					public getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class OnfidoTLSSocketFactory {
					public static class: java.lang.Class<com.onfido.api.client.OnfidoTLSSocketFactory>;
					public getSupportedCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
					public constructor();
					public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number): java.net.Socket;
					public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class UploadDocumentAPI {
					public static class: java.lang.Class<com.onfido.api.client.UploadDocumentAPI>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class UploadLivePhotoAPI {
					public static class: java.lang.Class<com.onfido.api.client.UploadLivePhotoAPI>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class UploadLiveVideoAPI {
					public static class: java.lang.Class<com.onfido.api.client.UploadLiveVideoAPI>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class Url {
					public static class: java.lang.Class<com.onfido.api.client.Url>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class Utils {
					public static class: java.lang.Class<com.onfido.api.client.Utils>;
					public constructor();
					public static Log(param0: string, param1: string, param2: string): void;
				}
				export module Utils {
					export class Log {
						public static class: java.lang.Class<com.onfido.api.client.Utils.Log>;
						public constructor();
						public static d(param0: string, param1: string): void;
						public static e(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class ValidationLevel {
					public static class: java.lang.Class<com.onfido.api.client.ValidationLevel>;
					public static ERROR: com.onfido.api.client.ValidationLevel;
					public static WARNING: com.onfido.api.client.ValidationLevel;
					public getId(): string;
					public static values(): native.Array<com.onfido.api.client.ValidationLevel>;
					public static valueOf(param0: string): com.onfido.api.client.ValidationLevel;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export class ValidationType {
					public static class: java.lang.Class<com.onfido.api.client.ValidationType>;
					public static DOCUMENT: com.onfido.api.client.ValidationType;
					public static GLARE: com.onfido.api.client.ValidationType;
					public static valueOf(param0: string): com.onfido.api.client.ValidationType;
					public getId(): string;
					public static values(): native.Array<com.onfido.api.client.ValidationType>;
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module adapters {
					export class LocaleConverter extends java.lang.Object {
						public static class: java.lang.Class<com.onfido.api.client.adapters.LocaleConverter>;
						public constructor();
						public serialize(param0: java.util.Locale, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Locale;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class BinaryDecoder extends com.onfido.api.client.codec.Decoder {
						public static class: java.lang.Class<com.onfido.api.client.codec.BinaryDecoder>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.codec.BinaryDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							decode(param0: native.Array<number>): native.Array<number>;
							decode(param0: any): any;
						});
						public constructor();
						public decode(param0: any): any;
						public decode(param0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class BinaryEncoder extends com.onfido.api.client.codec.Encoder {
						public static class: java.lang.Class<com.onfido.api.client.codec.BinaryEncoder>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.codec.BinaryEncoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							encode(param0: native.Array<number>): native.Array<number>;
							encode(param0: any): any;
						});
						public constructor();
						public encode(param0: native.Array<number>): native.Array<number>;
						public encode(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class CharEncoding {
						public static class: java.lang.Class<com.onfido.api.client.codec.CharEncoding>;
						public static ISO_8859_1: string;
						public static US_ASCII: string;
						public static UTF_16: string;
						public static UTF_16BE: string;
						public static UTF_16LE: string;
						public static UTF_8: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class Charsets {
						public static class: java.lang.Class<com.onfido.api.client.codec.Charsets>;
						public static ISO_8859_1: java.nio.charset.Charset;
						public static US_ASCII: java.nio.charset.Charset;
						public static UTF_16: java.nio.charset.Charset;
						public static UTF_16BE: java.nio.charset.Charset;
						public static UTF_16LE: java.nio.charset.Charset;
						public static UTF_8: java.nio.charset.Charset;
						public constructor();
						public static toCharset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
						public static toCharset(param0: string): java.nio.charset.Charset;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class Decoder {
						public static class: java.lang.Class<com.onfido.api.client.codec.Decoder>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.codec.Decoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							decode(param0: any): any;
						});
						public constructor();
						public decode(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class DecoderException {
						public static class: java.lang.Class<com.onfido.api.client.codec.DecoderException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class Encoder {
						public static class: java.lang.Class<com.onfido.api.client.codec.Encoder>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.codec.Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							encode(param0: any): any;
						});
						public constructor();
						public encode(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export class EncoderException {
						public static class: java.lang.Class<com.onfido.api.client.codec.EncoderException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export module binary {
						export class Base64 extends com.onfido.api.client.codec.binary.BaseNCodec {
							public static class: java.lang.Class<com.onfido.api.client.codec.binary.Base64>;
							public static decodeInteger(param0: native.Array<number>): java.math.BigInteger;
							public encode(param0: any): any;
							public static encodeBase64(param0: native.Array<number>, param1: boolean, param2: boolean, param3: number): native.Array<number>;
							public static encodeBase64URLSafeString(param0: native.Array<number>): string;
							public isInAlphabet(param0: string): boolean;
							public isUrlSafe(): boolean;
							public static decodeBase64(param0: native.Array<number>): native.Array<number>;
							public static encodeBase64(param0: native.Array<number>): native.Array<number>;
							public encode(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
							public static isBase64(param0: string): boolean;
							public static encodeBase64String(param0: native.Array<number>): string;
							public constructor(param0: number, param1: native.Array<number>);
							public isInAlphabet(param0: native.Array<number>, param1: boolean): boolean;
							public static encodeInteger(param0: java.math.BigInteger): native.Array<number>;
							public decode(param0: any): any;
							public static encodeBase64Chunked(param0: native.Array<number>): native.Array<number>;
							public static encodeBase64(param0: native.Array<number>, param1: boolean, param2: boolean): native.Array<number>;
							public isInAlphabet(param0: number): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
							public constructor();
							public encode(param0: native.Array<number>): native.Array<number>;
							public static isBase64(param0: number): boolean;
							public static decodeBase64(param0: string): native.Array<number>;
							public static encodeBase64URLSafe(param0: native.Array<number>): native.Array<number>;
							public static encodeBase64(param0: native.Array<number>, param1: boolean): native.Array<number>;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
							public static decodeBase64String(param0: string): string;
							public decode(param0: string): native.Array<number>;
							public constructor(param0: number);
							/** @deprecated */
							public static isArrayByteBase64(param0: native.Array<number>): boolean;
							public static isBase64(param0: native.Array<number>): boolean;
							public decode(param0: native.Array<number>): native.Array<number>;
							public constructor(param0: boolean);
							public constructor(param0: number, param1: native.Array<number>, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module codec {
					export module binary {
						export abstract class BaseNCodec implements com.onfido.api.client.codec.BinaryEncoder, com.onfido.api.client.codec.BinaryDecoder {
							public static class: java.lang.Class<com.onfido.api.client.codec.binary.BaseNCodec>;
							public static MIME_CHUNK_SIZE: number;
							public static PEM_CHUNK_SIZE: number;
							public static MASK_8BITS: number;
							public static PAD_DEFAULT: number;
							public PAD: number;
							public pad: number;
							public lineLength: number;
							public ensureBufferSize(param0: number, param1: com.onfido.api.client.codec.binary.BaseNCodec.Context): native.Array<number>;
							public encode(param0: any): any;
							public encodeToString(param0: native.Array<number>): string;
							public encodeAsString(param0: native.Array<number>): string;
							public encode(param0: native.Array<number>): native.Array<number>;
							public isInAlphabet(param0: string): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
							public decode(param0: string): native.Array<number>;
							public encode(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
							public static isWhiteSpace(param0: number): boolean;
							public decode(param0: native.Array<number>): native.Array<number>;
							public isInAlphabet(param0: native.Array<number>, param1: boolean): boolean;
							public getEncodedLength(param0: native.Array<number>): number;
							public decode(param0: any): any;
							public isInAlphabet(param0: number): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
							public containsAlphabetOrPad(param0: native.Array<number>): boolean;
							public getDefaultBufferSize(): number;
						}
						export module BaseNCodec {
							export class Context {
								public static class: java.lang.Class<com.onfido.api.client.codec.binary.BaseNCodec.Context>;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module common {
					export class Utils {
						public static class: java.lang.Class<com.onfido.api.client.common.Utils>;
						public constructor();
						public static hash(param0: native.Array<any>): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class Challenge extends com.onfido.api.client.data.JsonSerializable {
						public static class: java.lang.Class<com.onfido.api.client.data.Challenge>;
						public getIntArrayQuery(): native.Array<number>;
						public constructor();
						public getStringQuery(): string;
						public serialise(): com.google.gson.JsonObject;
						public getType(): com.onfido.api.client.data.Challenge.Type;
						public constructor(param0: com.onfido.api.client.data.Challenge.Type, param1: string);
						public constructor(param0: com.onfido.api.client.data.Challenge.Type, param1: native.Array<number>);
					}
					export module Challenge {
						export class Type {
							public static class: java.lang.Class<com.onfido.api.client.data.Challenge.Type>;
							public static MOVEMENT: com.onfido.api.client.data.Challenge.Type;
							public static RECITE: com.onfido.api.client.data.Challenge.Type;
							public static valueOf(param0: string): com.onfido.api.client.data.Challenge.Type;
							public getId(): string;
							public static values(): native.Array<com.onfido.api.client.data.Challenge.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DeviceInfo {
						public static class: java.lang.Class<com.onfido.api.client.data.DeviceInfo>;
						public constructor(param0: com.onfido.api.client.data.DeviceSystem);
						public getSystem(): com.onfido.api.client.data.DeviceSystem;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DeviceSystem {
						public static class: java.lang.Class<com.onfido.api.client.data.DeviceSystem>;
						public getBrand(): string;
						public getManufacturer(): string;
						public getFingerprint(): string;
						public getHardware(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
						public getProduct(): string;
						public getModel(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DocSide {
						public static class: java.lang.Class<com.onfido.api.client.data.DocSide>;
						public static FRONT: com.onfido.api.client.data.DocSide;
						public static BACK: com.onfido.api.client.data.DocSide;
						public static values(): native.Array<com.onfido.api.client.data.DocSide>;
						public getId(): string;
						public static valueOf(param0: string): com.onfido.api.client.data.DocSide;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DocType {
						public static class: java.lang.Class<com.onfido.api.client.data.DocType>;
						public static PASSPORT: com.onfido.api.client.data.DocType;
						public static DRIVING_LICENSE: com.onfido.api.client.data.DocType;
						public static NATIONAL_ID_CARD: com.onfido.api.client.data.DocType;
						public static RESIDENCE_PERMIT: com.onfido.api.client.data.DocType;
						public static VISA: com.onfido.api.client.data.DocType;
						public static WORK_PERMIT: com.onfido.api.client.data.DocType;
						public static UNKNOWN: com.onfido.api.client.data.DocType;
						public static values(): native.Array<com.onfido.api.client.data.DocType>;
						public getId(): string;
						public static valueOf(param0: string): com.onfido.api.client.data.DocType;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DocumentUpload {
						public static class: java.lang.Class<com.onfido.api.client.data.DocumentUpload>;
						public getFileSize(): number;
						public constructor();
						public getType(): com.onfido.api.client.data.DocType;
						public getFileType(): string;
						public getCreatedAt(): java.util.Date;
						public getFileName(): string;
						public getWarningsBundle(): com.onfido.api.client.data.DocumentValidationWarningsBundle;
						public getId(): string;
						public getHref(): string;
						public getSide(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DocumentValidationWarning {
						public static class: java.lang.Class<com.onfido.api.client.data.DocumentValidationWarning>;
						public constructor(param0: boolean);
						public isValid(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class DocumentValidationWarningsBundle {
						public static class: java.lang.Class<com.onfido.api.client.data.DocumentValidationWarningsBundle>;
						public constructor(param0: com.onfido.api.client.data.DocumentValidationWarning);
						public getDetectGlare(): com.onfido.api.client.data.DocumentValidationWarning;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class ErrorData {
						public static class: java.lang.Class<com.onfido.api.client.data.ErrorData>;
						public getMessage(): string;
						public constructor();
						public constructor(param0: string, param1: string, param2: string);
						public getError(): com.onfido.api.client.data.ErrorData.Error;
						public toString(): string;
					}
					export module ErrorData {
						export class Error {
							public static class: java.lang.Class<com.onfido.api.client.data.ErrorData.Error>;
							public getId(): string;
							public toString(): string;
							public getMessage(): string;
							public getType(): string;
							public getFields(): java.util.Map<string,java.util.List<string>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export abstract class JsonSerializable {
						public static class: java.lang.Class<com.onfido.api.client.data.JsonSerializable>;
						public constructor();
						public serialise(): com.google.gson.JsonObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class LivePhotoUpload {
						public static class: java.lang.Class<com.onfido.api.client.data.LivePhotoUpload>;
						public getFileSize(): number;
						public constructor();
						public getFileType(): string;
						public getCreatedAt(): java.util.Date;
						public getFileName(): string;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class LiveVideoChallenges {
						public static class: java.lang.Class<com.onfido.api.client.data.LiveVideoChallenges>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getData(): com.onfido.api.client.data.LiveVideoChallenges.LiveVideoChallengesData;
					}
					export module LiveVideoChallenges {
						export class LiveVideoChallenge {
							public static class: java.lang.Class<com.onfido.api.client.data.LiveVideoChallenges.LiveVideoChallenge>;
							public hashCode(): number;
							public getQuery(): any;
							public constructor(param0: com.onfido.api.client.data.LiveVideoChallenges);
							public equals(param0: any): boolean;
							public getType(): string;
						}
						export class LiveVideoChallengesData {
							public static class: java.lang.Class<com.onfido.api.client.data.LiveVideoChallenges.LiveVideoChallengesData>;
							public hashCode(): number;
							public getId(): string;
							public constructor(param0: com.onfido.api.client.data.LiveVideoChallenges);
							public equals(param0: any): boolean;
							public getChallenge(): java.util.List<com.onfido.api.client.data.LiveVideoChallenges.LiveVideoChallenge>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class LiveVideoLanguage extends com.onfido.api.client.data.JsonSerializable {
						public static class: java.lang.Class<com.onfido.api.client.data.LiveVideoLanguage>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public serialise(): com.google.gson.JsonObject;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class LiveVideoUpload {
						public static class: java.lang.Class<com.onfido.api.client.data.LiveVideoUpload>;
						public getFileSize(): number;
						public constructor();
						public getFileType(): string;
						public getCreatedAt(): java.util.Date;
						public getFileName(): string;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module data {
					export class Region {
						public static class: java.lang.Class<com.onfido.api.client.data.Region>;
						public static UK: com.onfido.api.client.data.Region;
						public static US: com.onfido.api.client.data.Region;
						public static EU: com.onfido.api.client.data.Region;
						public static values(): native.Array<com.onfido.api.client.data.Region>;
						public static valueOf(param0: string): com.onfido.api.client.data.Region;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module demo {
					export class OnfidoDemoAPIImpl extends com.onfido.api.client.OnfidoAPI {
						public static class: java.lang.Class<com.onfido.api.client.demo.OnfidoDemoAPIImpl>;
						public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: boolean, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
						public constructor();
						public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: string, param8: string, param9: com.onfido.api.client.data.DeviceInfo): void;
						public uploadLivePhoto(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.LivePhotoUpload>, param5: string, param6: string, param7: com.onfido.api.client.data.DeviceInfo): void;
						public getLiveVideoChallenges(): io.reactivex.Single<com.onfido.api.client.data.LiveVideoChallenges>;
						public uploadLiveVideo(param0: string, param1: string, param2: string, param3: native.Array<number>, param4: string, param5: string, param6: string, param7: native.Array<com.onfido.api.client.data.Challenge>, param8: java.lang.Long, param9: native.Array<com.onfido.api.client.data.LiveVideoLanguage>, param10: com.onfido.api.client.data.DeviceInfo): io.reactivex.Observable<com.onfido.api.client.data.LiveVideoUpload>;
						public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: string, param7: string, param8: com.onfido.api.client.data.DeviceInfo): void;
						public upload(param0: string, param1: string, param2: com.onfido.api.client.data.DocType, param3: string, param4: native.Array<number>, param5: com.onfido.api.client.OnfidoAPI.Listener<com.onfido.api.client.data.DocumentUpload>, param6: java.util.Map<com.onfido.api.client.ValidationType,com.onfido.api.client.ValidationLevel>, param7: com.onfido.api.client.data.DocSide, param8: string, param9: string, param10: com.onfido.api.client.data.DeviceInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module demo {
					export class OnfidoDemoAPISerializer {
						public static class: java.lang.Class<com.onfido.api.client.demo.OnfidoDemoAPISerializer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module exception {
					export class TokenExpiredException {
						public static class: java.lang.Class<com.onfido.api.client.exception.TokenExpiredException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export abstract class Token {
						public static class: java.lang.Class<com.onfido.api.client.token.Token>;
						public tokenValue: string;
						public demoToken: boolean;
						public region: string;
						public appId: string;
						public buildUrl(): string;
						public isDemoToken(): boolean;
						public getRegion(): string;
						public getAppId(): string;
						public constructor(param0: string, param1: string);
						public containsApplicantId(): boolean;
						public getTokenValue(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export class TokenConstants {
						public static class: java.lang.Class<com.onfido.api.client.token.TokenConstants>;
						public static DEFAULT_REGION: string;
						public static API_VERSION: string;
						public static BASE_API_URL: string;
						public static REGION_BASE_API_URL: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export class TokenProvider {
						public static class: java.lang.Class<com.onfido.api.client.token.TokenProvider>;
						/**
						 * Constructs a new instance of the com.onfido.api.client.token.TokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							provideToken(): com.onfido.api.client.token.Token;
						});
						public constructor();
						public provideToken(): com.onfido.api.client.token.Token;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module mobile {
						export class MobileToken extends com.onfido.api.client.token.Token {
							public static class: java.lang.Class<com.onfido.api.client.token.mobile.MobileToken>;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public containsApplicantId(): boolean;
							public buildUrl(): string;
						}
						export module MobileToken {
							export class MobileTokenFormat {
								public static class: java.lang.Class<com.onfido.api.client.token.mobile.MobileToken.MobileTokenFormat>;
								public static MOBILE_NEW_TOKEN_FORMAT: com.onfido.api.client.token.mobile.MobileToken.MobileTokenFormat;
								public static MOBILE_OLD_TOKEN_FORMAT: com.onfido.api.client.token.mobile.MobileToken.MobileTokenFormat;
								public static values(): native.Array<com.onfido.api.client.token.mobile.MobileToken.MobileTokenFormat>;
								public static valueOf(param0: string): com.onfido.api.client.token.mobile.MobileToken.MobileTokenFormat;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module mobile {
						export class MobileTokenConstants {
							public static class: java.lang.Class<com.onfido.api.client.token.mobile.MobileTokenConstants>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module mobile {
						export class MobileTokenUrlBuilder {
							public static class: java.lang.Class<com.onfido.api.client.token.mobile.MobileTokenUrlBuilder>;
							public static with(param0: com.onfido.api.client.token.Token): com.onfido.api.client.token.mobile.MobileTokenUrlBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module sdk {
						export class SDKToken extends com.onfido.api.client.token.Token {
							public static class: java.lang.Class<com.onfido.api.client.token.sdk.SDKToken>;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public containsApplicantId(): boolean;
							public buildUrl(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module sdk {
						export class SDKTokenExtractor {
							public static class: java.lang.Class<com.onfido.api.client.token.sdk.SDKTokenExtractor>;
							public static decodeSignature(param0: string): string;
							public static decodeHeader(param0: string): string;
							public static decodePayload(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module sdk {
						export module model {
							export class SDKTokenPayload {
								public static class: java.lang.Class<com.onfido.api.client.token.sdk.model.SDKTokenPayload>;
								public getBaseUrl(): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module token {
					export module sdk {
						export module model {
							export class SDKTokenUrl {
								public static class: java.lang.Class<com.onfido.api.client.token.sdk.model.SDKTokenUrl>;
								public getBaseUrl(): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module util {
					export class CharSequenceUtils {
						public static class: java.lang.Class<com.onfido.api.client.util.CharSequenceUtils>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module util {
					export class StringUtil {
						public static class: java.lang.Class<com.onfido.api.client.util.StringUtil>;
						public constructor();
						public static isNullOrEmpty(param0: string): boolean;
						public static hasCharacter(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module onfido {
		export module api {
			export module client {
				export module util {
					export class StringUtils {
						public static class: java.lang.Class<com.onfido.api.client.util.StringUtils>;
						public constructor();
						public static newStringUsAscii(param0: native.Array<number>): string;
						public static newStringUtf16(param0: native.Array<number>): string;
						public static getByteBufferUtf8(param0: string): java.nio.ByteBuffer;
						public static getBytesUsAscii(param0: string): native.Array<number>;
						public static getBytesUtf16Be(param0: string): native.Array<number>;
						public static newStringUtf16Le(param0: native.Array<number>): string;
						public static newStringUtf8(param0: native.Array<number>): string;
						public static getBytesIso8859_1(param0: string): native.Array<number>;
						public static getBytesUtf8(param0: string): native.Array<number>;
						public static getBytesUtf16(param0: string): native.Array<number>;
						public static equals(param0: string, param1: string): boolean;
						public static newString(param0: native.Array<number>, param1: string): string;
						public static newStringIso8859_1(param0: native.Array<number>): string;
						public static newStringUtf16Be(param0: native.Array<number>): string;
						public static getBytesUnchecked(param0: string, param1: string): native.Array<number>;
						public static getBytesUtf16Le(param0: string): native.Array<number>;
					}
				}
			}
		}
	}
}

//Generics information:
//com.onfido.api.client.OnfidoAPI.Callback:1
//com.onfido.api.client.OnfidoAPI.Listener:1

