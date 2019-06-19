import {
    Http,
    Headers,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    RequestMethod,
    Response,
    HttpModule,
    ResponseOptions,
    ResponseOptionsArgs
} from "@angular/http";
import { Injectable, Provider, NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/defer";
import "rxjs/add/operator/mergeMap";
// import { Observable } from "rxjs";
import { JwtHelper } from "jwt";

export interface IAuthConfig {
    globalHeaders: Array<Object>;
    headerName: string;
    headerPrefix: string;
    noJwtError: boolean;
    noClientCheck: boolean;
    noTokenScheme?: boolean;
    tokenGetter: () => string | Promise<string>;
    tokenName: string;
}

export interface IAuthConfigOptional {
    headerName?: string;
    headerPrefix?: string;
    tokenName?: string;
    tokenGetter?: () => string | Promise<string>;
    noJwtError?: boolean;
    noClientCheck?: boolean;
    globalHeaders?: Array<Object>;
    noTokenScheme?: boolean;
}

export class AuthConfigConsts {
    public static DEFAULT_TOKEN_NAME = 'token';
    public static DEFAULT_HEADER_NAME = 'Authorization';
    public static HEADER_PREFIX_BEARER = 'Bearer ';
}

const AuthConfigDefaults: IAuthConfig = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: () => sessionStorage.getItem(AuthConfigDefaults.tokenName) as string,
    noJwtError: false,
    noClientCheck: false,
    globalHeaders: [],
    noTokenScheme: false
}

/**
* Sets up the authentication configuration.
*/

export class AuthConfig {

    private _config: IAuthConfig;

    constructor(config?: IAuthConfigOptional) {
        config = config || {};
        // this._config = objectAssign({}, AuthConfigDefaults, config);
        if (this._config.headerPrefix) {
            this._config.headerPrefix += ' ';
        } else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        } else {
            this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
        }

        if (config.tokenName && !config.tokenGetter) {
            this._config.tokenGetter = () => sessionStorage.getItem(config.tokenName) as string;
        }
    }
    public getConfig(): IAuthConfig {
        return this._config;
    }
}

export class AuthHttpError extends Error {
}

/**
* Allows for explicit authenticated HTTP requests.
*/

var PORT: any = (location.port == '4200') ? 3000 : location.port;
@Injectable()
export class AuthHttp {
    private config: IAuthConfig;
    public tokenStream: Observable<string>;

    public URL: any = (location.port == '4200') ? window.location.protocol + '//' + window.location.hostname : window.location.protocol + '//' + window.location.hostname + ':' + location.port;
    public apiendPoind = this.URL;

    constructor(options: AuthConfig, private http: Http, private defOpts?: RequestOptions) {
        this.config = options.getConfig();
        this.tokenStream = new Observable<string>((obs: any) => {
            obs.next(this.config.tokenGetter());
        });
    }
    private mergeOptions(providedOpts: RequestOptionsArgs, defaultOpts?: RequestOptions) {
        let newOptions = defaultOpts || new RequestOptions();
        if (this.config.globalHeaders) {
            this.setGlobalHeaders(this.config.globalHeaders, providedOpts);
        }
        newOptions = newOptions.merge(new RequestOptions(providedOpts));
        return newOptions;
    }
    private requestHelper(requestArgs: RequestOptionsArgs, additionaleOptions?: RequestOptionsArgs): Observable<Response> {
        let options = new RequestOptions(requestArgs);
        if (additionaleOptions) {
            options = options.merge(additionaleOptions);
        }
        return this.requestHelper(new Request(this.mergeOptions(options, this.defOpts)))
    }
    public setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs) {
        if (!request.headers) {
            request.headers = new Headers();
        }
        headers.forEach((header: Object) => {
            let key: string = Object.keys(header)[0];
            let headerValue: string = (header as any)[key];
            (request.headers as Headers).set(key, headerValue);
        });
    }
    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let token: string | Promise<string> = this.config.tokenGetter();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', '' + token)
        let opt = new RequestOptions({ headers: headers });
        return this.http.get(this.apiendPoind + url, opt)
    }

    public post(url: string, body: any, options?: ResponseOptionsArgs): Observable<Response> {
        return this.requestHelper({ body: body, method: RequestMethod.Post, url: this.apiendPoind + url }, options)
    }

}

export function tokenNotExpired(tokenName = AuthConfigConsts.DEFAULT_TOKEN_NAME, jwt?: string): boolean {
    const token: string = jwt || sessionStorage.getItem(tokenName);
    const jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token)
}