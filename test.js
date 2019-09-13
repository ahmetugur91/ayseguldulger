"use strict";
define(["jquery", "knockout", "bootstrap", "app", "global", "knockoutValidation", "setphone", "tfa"], function (e, o, a, n, t, r) {
    return o.validation.rules.phoneEmailValidation = {
        validator: function () {
            return !1 !== n.validateLogin()
        },
        message: "LÃ¼tfen geÃ§erli bir cep telefonu veya e-posta adresi giriniz."
    }, o.validation.init({
        registerExtenders: !0,
        messagesOnModified: !0,
        insertMessages: !0,
        parseInputAttributes: !0,
        messageTemplate: null
    }, !0),
        function () {
            n.loginMenu();
            var a = this;
            a.phoneEmailValidation = o.observable(!0), a.loginType = o.observable(0), a.loginTypeShow = !1, a.loginTypeShow = function () {
                return a.validationEnabled
            }, a.PhoneMail = o.observable().extend({
                required: {
                    message: "LÃ¼tfen cep telefonu veya e-posta adres alanÄ±nÄ± kontrol ediniz."
                },
                minLength: {
                    params: 6,
                    message: "LÃ¼tfen cep telefonu veya e-posta adres alanÄ±nÄ± kontrol ediniz."
                },
                phoneEmailValidation: a.phoneEmailValidation
            }), a.Password = o.observable().extend({
                required: {
                    message: "LÃ¼tfen ÅŸifre alanÄ±nÄ± doldurunuz."
                },
                minLength: {
                    params: 6,
                    message: "Åifre alanÄ± en az 6 haneli olmalÄ±dÄ±r."
                }
            }), a.ReCaptchaToken = o.observable(null), a.TfaToken = o.observable(null), a.TfaTokenShow = o.observable(null), a.SetMobileToken = o.observable(null), a.ChangePass = o.observable(null), a.Error = o.observable(null), a.LoginType = o.observable(null), a.PhoneCode = o.observable(null), a.EnabledButton = o.observable(!0), a.InputErrors = o.validation.group(a), a.ClearError = function () {
                a.Error(null)
            }, a.GenerateCaptcha = function () {
                n.reCaptcha()
            }, n.facebookModel(a), a.HumanVerificationToken = o.observable(), a.dialCodeControl = o.observable(null), a.LoginControl = function () {
                if (a.EnabledButton(!1), 0 !== a.InputErrors().length) return a.InputErrors.showAllMessages(), void a.EnabledButton(!0);
                a.LoginType(n.validateLogin()), "mobile" === a.LoginType() ? e.ajax({
                    method: "POST",
                    url: window.apiEndpoint + "/validate/phone",
                    data: o.toJSON({
                        phoneNumber: a.PhoneMail(),
                        locale: n.country(),
                        platform: 0
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    crossDomain: !0,
                    processData: !0,
                    success: function (e) {
                        n.loadingRemove(), null !== e.data ? (a.dialCodeControl(e.data), n.recaptchaClickLb()) : (a.Error(e.error.message), a.EnabledButton(!0), grecaptcha.reset())
                    }
                }) : n.recaptchaClickLb()
            }, a.Login = function () {
                n.loading(), a.EnabledButton(!1), a.HumanVerificationToken(grecaptcha.getResponse()), "mobile" === a.LoginType() ? e.ajax({
                    method: "POST",
                    url: window.apiEndpoint + "/user/login/phone",
                    data: o.toJSON({
                        PhoneNumber: a.dialCodeControl(),
                        Password: a.Password(),
                        Platform: "0",
                        HumanVerificationToken: a.HumanVerificationToken()
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    crossDomain: !0,
                    processData: !0,
                    success: function (e) {
                        e.succeeded ? !0 === e.data.hasPhoneNumber ? (a.TfaToken(e.data.access_token), a.TfaTokenShow(e.data.access_token)) : a.SetMobileToken(e.data.access_token) : (a.Error(e.error.message), a.EnabledButton(!0), grecaptcha.reset()), n.loadingRemove()
                    },
                    error: function (e) {
                        n.errorLb(), a.EnabledButton(!0), n.loadingRemove()
                    }
                }) : "email" === a.LoginType() && e.ajax({
                    method: "POST",
                    url: window.apiEndpoint + "/user/login/email",
                    data: o.toJSON({
                        Email: a.PhoneMail().toLowerCase(),
                        Password: a.Password(),
                        Platform: "0",
                        HumanVerificationToken: a.HumanVerificationToken()
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    crossDomain: !0,
                    processData: !0,
                    success: function (e) {
                        e.succeeded ? !0 === e.data.hasPhoneNumber ? (a.TfaToken(e.data.access_token), a.TfaTokenShow(e.data.access_token)) : a.SetMobileToken(e.data.access_token) : (a.Error(e.error.message), a.EnabledButton(!0), grecaptcha.reset()), n.loadingRemove()
                    },
                    error: function (e) {
                        n.errorLb(), a.EnabledButton(!0), n.loadingRemove()
                    }
                })
            }, n.Init(), n.mobilSmart(), n.toggleMenuRemove(), n.loadHtml(), n.loadingRemove(), n.scrollAndInputCon(), n.facebookLoginInit("tr_TR"), e(window).bind("load", function () {
                n.firstLoadRemove()
            })
        }
});