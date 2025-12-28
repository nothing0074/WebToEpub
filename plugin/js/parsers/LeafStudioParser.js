"use strict";
parserFactory.register("leafstudio.site", () => new LeafStudioParser());

class LeafStudioParser extends Parser {
    constructor() {
        super();
    }

    async getChapterUrls(dom, chapterUrlsUI) {
        let menu = dom.querySelector(".novel_index");
        return util.hyperlinksToChapterList(menu).reverse();
    }
    
    findContent(dom) {
        return dom.querySelector(".small");
    }

    extractTitleImpl(dom) {
        return dom.querySelector(".title");
    }

    // Remove unwanted elements from fetched content
    removeUnwantedElementsFromContentElement(element) {
        ["#font-options-bar", ".confuse", ".post-rating-wrapper", "#donation-msg", ".novel_nav_item", ".text-center", ".navigation"]
            .forEach(s => util.removeChildElementsMatchingSelector(element, s));
        super.removeUnwantedElementsFromContentElement(element);
    }

    extractDescription(dom) {
        return dom.querySelector(".desc_div").textContent.trim();
    }

    findChapterTitle(dom) {
        return dom.querySelector(".title");
    }
}
