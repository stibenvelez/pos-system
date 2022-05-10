import React from "react";
import Card from "../ui/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const IndicatorsCards = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
            <Card className="h-32 text-4xl">
                <FontAwesomeIcon icon={faMoneyBill} />
            </Card>
            <Card className="h-32">2</Card>
            <Card className="h-32">3</Card>
            <Card className="h-32">4</Card>
        </div>
    );
};

export default IndicatorsCards;
