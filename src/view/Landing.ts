import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import AOS from "aos";
import msg from "msg.js";
import Alert from "../component/dialogue/Alert";
import BrowserInfo from "../BrowserInfo";

export default class Landing implements View {

    private container: DomNode;

    constructor() {
        document.title = msg("TITLE");
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".landing-view",
                el("header.header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "#init" }, el("img", { src: "/images/logo.png", alt: "gaia genesis logo" })),
                        ),
                        el("input.menu-btn", { type: "checkbox", id: "menu-btn" }),
                        el("label.menu-icon", { for: "menu-btn" },
                            el("span.navicon")
                        ),
                        el("ul.menu",
                            el("li.item", el("a", msg("WHY_MENU"), { href: "#WHY" })),
                            el("li.item", el("a", msg("BUYBACK_FUND_MENU"), { href: "#FUND" })),
                            el("li.item", el("a", msg("SNEAK_PEEK_MENU"), { href: "#NFT" })),
                            el("li.item", el("a", msg("TEAM_MENU"), { href: "#TEAM" })),
                            el("li.item", el("a", msg("PARTNER_MENU"), { href: "#PARTNER" })),
                            el("li.item", el("a.enter-app", "Enter App", { href: "http://app.gaiakronos.com", target: "_blank" })),
                            el("li.item", select = el("select.language-select",
                                el("option", "한국어 🇰🇷 ", { value: "ko" }),
                                el("option", "English 🇺🇸 ", { value: "en" }),
                                el("option", "繁體字 🇨🇳 ", { value: "zh-TC" }),
                                el("option", "简体字 🇨🇳 ", { value: "zh-SC" }),
                                {
                                    change: () => {
                                        BrowserInfo.changeLanguage(select.domElement.value);
                                    },
                                },
                            )),
                        ),
                    )
                ),
                el("main",
                    el(".init-container", { id: "init" },
                        el("img", { src: "/images/logo-text.png", alt: "gaia genesis logo", "data-aos": "fade-up", }),
                        el("p", { "data-aos": "fade-up" }, msg("INIT_DESC")),
                    ),
                    el(".gaia-container", { id: "WHY" },
                        el("h2", msg("WHY_TITLE"), { "data-aos": "fade-up" },),
                        el("p", { "data-aos": "fade-up" }, msg("WHY_DESC")),
                    ),
                    // el(".why-container",
                    //     el("h2", msg("DEFI_TITLE"), { "data-aos": "fade-up" },),
                    //     el("p", { "data-aos": "fade-up" }, msg("DEFI_DESC"))
                    // ),
                    el(".buyback-container", { id: "FUND" },
                        el("h2", msg("BUYBACK_FUND_TITLE"), { "data-aos": "fade-up", }),
                        el("p", { "data-aos": "fade-up", }, msg("BUYBACK_FUND_DESC"))
                    ),
                    // el("img.fundflow", { "data-aos": "fade-up", src: "/images/fundflow.png" }),
                    el(".nft-container", { id: "NFT" },
                        el("h2", msg("SNEAK_PEEK_TITLE"), { "data-aos": "fade-up" }),
                        el(".swiper-slide",
                            el("img", { src: "/images/nft/sneakpeek1.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek2.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek3.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek4.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek5.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek6.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek7.jpeg", "data-aos": "fade-up" }),
                            el("img", { src: "/images/nft/sneakpeek8.jpeg", "data-aos": "fade-up" }),
                        ),
                    ),
                    el(".mint-container", { id: "MINT" },
                        el("h2", msg("MINT_TITLE"), { "data-aos": "fade-up" },),
                        el("h3", msg("PRE_SALE_TITLE"), { "data-aos": "fade-up" },),
                        el(".caption", msg("MINT_DESC"), { "data-aos": "fade-up" },),
                        el("a", { "data-aos": "fade-up", href: "https://opensea.io/collection/gaia-genesis", target: "_blank" },
                            el("img", { src: "/images/community/opensea-button.svg", alt: "opensea" }),
                        ),
                    ),
                    el(".team-container", { id: "TEAM" },
                        el("h2", msg("TEAM_TITLE"), { "data-aos": "fade-up" },),
                        el(".swiper-slide",
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/sim-young-jae.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE1"), { href: "https://twitter.com/gaia_yj", target: "_blank" }),
                                        el("h4", msg("TEAM_ROLE_DESC1")),
                                        el("p",
                                            msg("TEAM_NAME_DESC1"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/cho-sun-woo.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE2"), { href: "https://twitter.com/Chowbie_", target: "_blank" },),
                                        el("h4", msg("TEAM_ROLE_DESC2")),
                                        el("p",
                                            msg("TEAM_NAME_DESC2"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/TheGreatHB.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE3"), { href: "https://twitter.com/TheGreatHB_", target: "_blank" },),
                                        el("h4", msg("TEAM_ROLE_DESC3")),
                                        el("p",
                                            msg("TEAM_NAME_DESC3"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/lee-hak-seong.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE4"), { href: "https://twitter.com/dilrong_", target: "_blank" },),
                                        el("h4", msg("TEAM_ROLE_DESC4")),
                                        el("p",
                                            msg("TEAM_NAME_DESC4"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/park-min.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE5"), { href: "https://twitter.com/Medo_DSC", target: "_blank" }),
                                        el("h4", msg("TEAM_ROLE_DESC5")),
                                        el("p",
                                            msg("TEAM_NAME_DESC5"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".team", { "data-aos": "fade-up" },
                                el(".content",
                                    el(".front",
                                        el("img", { src: "/images/team/kang-hee-min.png" })
                                    ),
                                    el(".back",
                                        el("a", msg("TEAM_NAME_TITLE6"), { href: "https://twitter.com/Docent_Mgr", target: "_blank" },),
                                        el("h4", msg("TEAM_ROLE_DESC6")),
                                        el("p",
                                            msg("TEAM_NAME_DESC6"),
                                        ),
                                    ),
                                ),
                            ),
                        )
                    ),
                    el(".partnership-container", { id: "partnership" },
                        el("h2", { "data-aos": "fade-up" }, "PARTNER"),
                        el("section",
                            el("a", { href: "https://dexata.kr", target: "_blank" },
                                el("img", { src: "/images/partner/dexata.svg", "data-aos": "fade-up" }),
                            ),
                            // el("a", { href: "https://kronosdao.finance/", target: "_blank" },
                            //     el("img", { src: "/images/partner/kronosDAO.svg", "data-aos": "fade-up" }),
                            // ),
                            el("a", { href: "https://klayswap.com/", target: "_blank" },
                                el("img", { src: "/images/partner/klayswap.svg", "data-aos": "fade-up" }),
                            ),
                            el("a", { href: "https://electrik.finance/", target: "_blank" },
                                el("img.electrikFinance", { src: "/images/partner/electrik-finance.png", "data-aos": "fade-up" }),
                            ),
                            el("a", { href: "https://swapscanner.io", target: "_blank" },
                                el("img", { src: "/images/partner/swapscanner.svg", "data-aos": "fade-up" }),
                            ),
                            el("a", { href: "http://www.townverse.info/", target: "_blank" },
                                el("img", { src: "/images/partner/townverse.svg", "data-aos": "fade-up" }),
                            ),
                        ),
                    ),
                ),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.opensea", { href: "https://opensea.io/collection/gaia-genesis", target: "_blank" },
                                el("img", { src: "/images/community/opensea.svg", width: "40" }),
                            ),
                            el("a.discord", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" },
                                el("img", { src: "/images/community/discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/community/twitter.svg" }),
                            ),
                            el("a.gitbook", { href: "https://gaiaprotocol.notion.site/Gaia-Kronos-Docs-3268938f02a34b3eb9e86179bdc8b767", target: "_blank" },
                                el("img", { src: "/images/community/gitbook.svg" }),
                            ),
                        ),
                        el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"),
                    ),
                ),
            ))
        );
        this.init();
        select.domElement.value = BrowserInfo.language;
    }

    private async init() {
        AOS.init();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
