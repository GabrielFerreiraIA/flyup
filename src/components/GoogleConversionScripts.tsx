"use client";

import Script from "next/script";

export default function GoogleConversionScripts() {
    return (
        <>
            <Script id="gtag-conversion-agendamento" strategy="afterInteractive">
                {`
                    gtag('event', 'conversion', {
                        'send_to': 'AW-964505136/Xg2LCND_wrccELDc9MsD',
                        'value': 1.0,
                        'currency': 'BRL'
                    });
                `}
            </Script>
            <Script id="gtag-conversion-whatsapp" strategy="afterInteractive">
                {`
                    function gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                                window.location = url;
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-964505136/O6SyCLn7rLccELDc9MsD',
                            'value': 1.0,
                            'currency': 'BRL',
                            'event_callback': callback
                        });
                        return false;
                    }
                `}
            </Script>
        </>
    );
}
