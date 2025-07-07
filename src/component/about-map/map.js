import "./map.scss";

const Map = () => {
    return (
        <section className="map">
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4679570752255!2d-73.95171882328638!3d40.72961057139099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593c58f8777d%3A0xe2215ac687bd7249!2sCLAY%20SPACE%20Ceramic%20Center!5e1!3m2!1sru!2sby!4v1746276982568!5m2!1sru!2sby"
                    // width="600"
                    // height="450"
                    style={{ border: 0 }} // JSX-формат стилей
                    allowFullScreen // camelCase
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" // camelCase
                    title="Google Maps Location" // Добавлено для доступности
                ></iframe>
            </div>
        </section>
    );
};

export default Map;
