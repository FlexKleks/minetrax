import{A as w}from"./AppLayout.22a32b99.js";import F from"./DeleteUserForm.8a2ae264.js";import{J as y}from"./SectionBorder.e969bb86.js";import $ from"./LogoutOtherBrowserSessionsForm.388bb699.js";import k from"./TwoFactorAuthenticationForm.fcc6ce03.js";import v from"./UpdatePasswordForm.e951752d.js";import P from"./UpdateProfileInformationForm.d0b7eba5.js";import b from"./UpdateNotificationPreferencesForm.0ea65198.js";import{_ as j,c as B,w as p,l as t,o as s,a as n,t as U,b as o,d as a,e as m,F as x}from"./app.0ced9704.js";import"./useAuthorizable.d9640057.js";import"./ActionSection.d3ea20e3.js";import"./SectionTitle.a8136729.js";import"./DialogModal.80760055.js";import"./Modal.ded38391.js";import"./DangerButton.c5f26102.js";import"./Input.efe52ca9.js";import"./InputError.19b9c27d.js";import"./SecondaryButton.57343fb0.js";import"./ActionMessage.720ac8a4.js";import"./Button.6c18e802.js";import"./XInput.1b9b5e3c.js";import"./FormSection.e7fedcce.js";import"./PasswordStrengthMeter.770f3444.js";import"./Label.0ea79e0b.js";import"./index.es.36397a43.js";import"./XCheckbox.74336093.js";import"./XSelect.ebebfaf6.js";import"./XTextarea.11c0f0cb.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.auth.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.auth.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const ho=j(A,[["render",I]]);export{ho as default};