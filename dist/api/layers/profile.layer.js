"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileLayer = void 0;
var host_layer_1 = require("./host.layer");
var helpers_1 = require("../helpers");
var ProfileLayer = /** @class */ (function (_super) {
    __extends(ProfileLayer, _super);
    function ProfileLayer(page, session, options) {
        var _this = _super.call(this, page, session, options) || this;
        _this.page = page;
        return _this;
    }
    /**
     * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
     * @param time duration of silence
     * @param type kind of silence "hours" "minutes" "year"
     * To remove the silence, just enter the contact parameter
     */
    ProfileLayer.prototype.sendMute = function (id, time, type) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (id, time, type) { return WAPI.sendMute(id, time, type); }, id, time, type)];
                    case 1:
                        result = _a.sent();
                        if (result['erro'] == true) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Change the theme
     * @param string types "dark" or "light"
     */
    ProfileLayer.prototype.setTheme = function (type) {
        return this.page.evaluate(function (type) { return WAPI.setTheme(type); }, type);
    };
    /**
     * Sets current user profile status
     * @param status
     */
    ProfileLayer.prototype.setProfileStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var status = _a.status;
                            WAPI.setMyStatus(status);
                        }, { status: status })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 200];
                }
            });
        });
    };
    /**
     * Sets the user's current profile photo
     * @param name
     */
    ProfileLayer.prototype.setProfilePic = function (path, to) {
        return __awaiter(this, void 0, void 0, function () {
            var b64, buff, mimeInfo, _webb64_96, _webb64_640, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, helpers_1.downloadFileToBase64)(path, [
                            'image/gif',
                            'image/png',
                            'image/jpg',
                            'image/jpeg',
                            'image/webp'
                        ])];
                    case 1:
                        b64 = _a.sent();
                        if (!!b64) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, helpers_1.fileToBase64)(path)];
                    case 2:
                        b64 = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!b64) return [3 /*break*/, 8];
                        buff = Buffer.from(b64.replace(/^data:image\/(png|jpe?g|webp);base64,/, ''), 'base64');
                        mimeInfo = (0, helpers_1.base64MimeType)(b64);
                        if (!(!mimeInfo || mimeInfo.includes('image'))) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, helpers_1.resizeImg)(buff, { width: 96, height: 96 })];
                    case 4:
                        _webb64_96 = _a.sent();
                        return [4 /*yield*/, (0, helpers_1.resizeImg)(buff, { width: 640, height: 640 })];
                    case 5:
                        _webb64_640 = _a.sent();
                        obj = { a: _webb64_640, b: _webb64_96 };
                        return [4 /*yield*/, this.page.evaluate(function (_a) {
                                var obj = _a.obj, to = _a.to;
                                return WAPI.setProfilePic(obj, to);
                            }, {
                                obj: obj,
                                to: to
                            })];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        console.log('Not an image, allowed formats png, jpeg and webp');
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets current user profile name
     * @param name
     */
    ProfileLayer.prototype.setProfileName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.page.evaluate(function (_a) {
                    var name = _a.name;
                    WAPI.setMyName(name);
                }, { name: name });
                return [2 /*return*/, 200];
            });
        });
    };
    return ProfileLayer;
}(host_layer_1.HostLayer));
exports.ProfileLayer = ProfileLayer;
//# sourceMappingURL=profile.layer.js.map