window.addEventListener("DOMContentLoaded", (() => {
    "undefined" != typeof Settings && new Settings({
        attributes: {placement: "horizontal"},
        showSettings: !0,
        storagePrefix: "acorn-standard-"
    }), "undefined" != typeof Variables && new Variables, document.documentElement.addEventListener(Globals.menuPlacementChange, (e => {
        setTimeout((() => {
            window.dispatchEvent(new Event("resize"))
        }), 25)
    })), document.documentElement.addEventListener(Globals.layoutChange, (e => {
        setTimeout((() => {
            window.dispatchEvent(new Event("resize"))
        }), 25)
    })), document.documentElement.addEventListener(Globals.menuBehaviourChange, (e => {
        setTimeout((() => {
            window.dispatchEvent(new Event("resize"))
        }), 25)
    })), setTimeout((() => {
        document.documentElement.setAttribute("data-show", "true"), document.body.classList.remove("spinner"), "undefined" != typeof Nav && new Nav(document.getElementById("nav")), "undefined" != typeof Search && new Search, "undefined" != typeof csicons && csicons.replace(), "undefined" != typeof Scripts && new Scripts
    }), 200)
}));