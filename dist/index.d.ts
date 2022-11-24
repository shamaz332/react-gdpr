declare module '@shamaz332/react-gdpr' {
    import * as React from 'react';

    export interface CookieNoticeProps {
        preferencesButtonText?: string;
        savePreferencesButtonText?: string;
        privacyWrapper?: string;
        linkOne?: string;
        linkTwo?: string;
        linkOneText?: string;
        linkTwoText?: string;
        acceptAllButtonText?: string;
        cookies?: object[];
        cookiePrefix?: string;
        containerClass?: string;
        contentClass?: string;
        buttonsClass?: string;
        buttonPrimaryClass?: string;
        buttonSecondaryClass?: string;
        onSave?: (...args: any[]) => any;
        onInit?: (...args: any[]) => any;
        containerStyle?: object;
        contentStyle?: object;
        cookiesStyle?: object;
        cookieStyle?: object;
        buttonsStyle?: object;
        buttonPrimaryStyle?: object;
        buttonSecondaryStyle?: object;
        cookieOptions?: object;
        toggleVisibility?: boolean;
        legacyCookie?: boolean;
        legacyCookieOptions?: object;
        showCookiePreferences?: boolean;
    }
    const CookieNotice: React.FC<CookieNoticeProps>;
    export default CookieNotice;
}
