import { Component } from "react";
import "./catalog.scss";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1, // Храним ID активной вкладки
            tabs: [
                //храним сам контент
                {
                    id: 1,
                    title: "for tea",
                    data: [
                        {
                            name: "Terracotta Whisper",
                            prise: "19.99 €",
                            url: require("../catalog/img/tea-3057645_1280 1 (1).png"),
                        },
                        {
                            name: "Clay Bloom",
                            prise: "24.99 €",
                            url: require("../catalog/img/tea-7968441_1280 2.png"),
                        },
                        {
                            name: "Earthen Grace",
                            prise: "6,99$",
                            url: require("../catalog/img/tea-ceremony-7807230_1280 2.png"),
                        },
                        {
                            name: "Moss & Moon",
                            prise: "21.99 €",
                            url: require("../catalog/img/tea-6675004_1280 2.png"),
                        },
                        {
                            name: "Solace Set",
                            prise: "29.99 €",
                            url: require("../catalog/img/tea-3057645_1280 1 (1).png"),
                        },
                    ],
                },
                { id: 2, title: "for kitchen", data: [] },
                { id: 3, title: "for plants", data: [] },
            ],
        };
    }

    onClick = (tabId) => {
        this.setState({ activeTab: tabId });
    };

    renderCards = (data) => {
        if (!data || data.length === 0) {
            return <div className="catalogLink__empty">No items available</div>;
        }

        return data.map((card) => (
            <div className="catalogLink__card" key={card.name}>
                <img
                    className="catalogLink__card-img"
                    src={card.url}
                    alt={card.name}
                />
                <div className="catalogLink__card-infotext">
                    <p className="catalogLink__card-text ">{card.name}</p>
                    <p className="catalogLink__card-prise">{card.prise}</p>
                </div>
            </div>
        ));
    };

    render() {
        const { activeTab, tabs } = this.state;
        const activeTabData = tabs.find((tab) => tab.id === activeTab);

        return (
            <>
                <section className="catalogLink">
                    <div className="container">
                        <h1 className="catalogLink__title-h1">our pottery</h1>
                        <div className="catalogLink__tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`catalogLink__tab ${
                                        activeTab === tab.id
                                            ? "catalogLink__tab_active"
                                            : ""
                                    }`}
                                    onClick={() => this.onClick(tab.id)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="catalogLink__content">
                            <div className="catalogLink__content-conteiner">
                                <span className="catalogLink__content-line22"></span>
                                <span className="catalogLink__content-line21"></span>
                            </div>

                            <div className="catalogLink__cards-wrapper">
                                {activeTabData
                                    ? this.renderCards(activeTabData.data)
                                    : null}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Catalog;
