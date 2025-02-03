import "./Main.css";
import WeatherCard from "../weatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <div className="cards__list">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item, index) => {
              return (
                <ItemCard
                  key={index}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}
export default Main;
