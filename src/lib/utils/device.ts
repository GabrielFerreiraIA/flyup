/**
 * Device type detection utility
 * Usado para rastrear se o lead veio de mobile ou desktop
 */

export type DeviceType = 'mobile' | 'desktop'

export function getDeviceType(): DeviceType {
    // Server-side: padrão para desktop
    if (typeof window === 'undefined') return 'desktop'

    // Client-side: detecta mobile via userAgent ou viewport
    const isMobileUserAgent = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
    const isMobileViewport = window.innerWidth < 768

    return isMobileUserAgent || isMobileViewport ? 'mobile' : 'desktop'
}
