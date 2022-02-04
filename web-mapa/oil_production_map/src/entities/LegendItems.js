import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "+ 3000 Mbb", // tag
        "#331a00",    //color
        (quantity) => quantity >= 3000,
        "white"  // text color
    ),
    new LegendItem(
        "1000 - 3000",
        "#663300",
        (quantity) => quantity >= 1000 && quantity <= 3000,
        "white"  // text color
    ),
    new LegendItem(
        "500 - 1000",
        "#994d00",
        (quantity) => quantity >= 500 && quantity <= 1000,
        "white"  // text color
    ), 
    new LegendItem(
        "100 - 500",
        "#cc6600",
        (quantity) => quantity >= 100 && quantity <= 500,
    ),
    new LegendItem(
        "50 - 100",
        "#ff9933",
        (quantity) => quantity >= 50 && quantity <= 100,
    ),
    new LegendItem(
        "5 - 50",
        "#ffcc99",
        (quantity) => quantity >= 5 && quantity <= 50,
    ),
    new LegendItem("-5 Mbb", "#ffffff", (quantity) => true)

];

export default legendItems;