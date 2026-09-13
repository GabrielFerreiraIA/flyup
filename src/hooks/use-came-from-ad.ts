"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "flyup_veio_do_anuncio";
const AD_CLICK_PARAMS = ["gclid", "gbraid", "wbraid"];

// Visita vinda de anúncio do Google: click ID na URL ou utm_medium=cpc.
// Fica guardado na sessão para continuar valendo se a pessoa navegar pelo site.
function readCameFromAd(): boolean {
    try {
        const params = new URLSearchParams(window.location.search);
        const fromAd =
            AD_CLICK_PARAMS.some((key) => params.has(key)) ||
            params.get("utm_medium") === "cpc";
        if (fromAd) {
            sessionStorage.setItem(STORAGE_KEY, "1");
            return true;
        }
        return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
        return false;
    }
}

const subscribe = () => () => {};

export function useCameFromAd(): boolean {
    return useSyncExternalStore(subscribe, readCameFromAd, () => false);
}
