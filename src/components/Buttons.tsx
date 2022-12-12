import React, {ReactElement} from "react";
import {ActionType} from "../types";
import {Context} from "./Context";
import StyledButton from "./styles/StyledButton";
import ButtonGrid from "./styles/ButtonGrid";

type ButtonProps = {
    children: ReactElement | string | number;
    type: keyof typeof ActionType;
    value?: string;
};

const Button = ({type, value, children}: ButtonProps) => {
    const [, dispatch] = React.useContext(Context);
    const actionPayload = (value && value.toString()) || children.toString();

    const handleClick = () =>
        dispatch && dispatch({type: ActionType[type], payload: actionPayload});

    const color = children === "=" ? "CALCULATE" : type;
    return (
        <StyledButton onClick={handleClick} color={color}>
            {children}
        </StyledButton>
    );
};

const Buttons = () => {
    return (
        <ButtonGrid className="buttons">

            <Button type="NUMBER">7</Button>
            <Button type="NUMBER">8</Button>
            <Button type="NUMBER">9</Button>
            <Button type="OPERATOR" value="/">
                &#247;
            </Button>

            <Button type="NUMBER">4</Button>
            <Button type="NUMBER">5</Button>
            <Button type="NUMBER">6</Button>
            <Button type="OPERATOR" value="*">
                &#215;
            </Button>

            <Button type="NUMBER">1</Button>
            <Button type="NUMBER">2</Button>
            <Button type="NUMBER">3</Button>
            <Button type="OPERATOR" value="-">
                &#8722;
            </Button>

            <Button type="CLEAR">C</Button>
            <Button type="NUMBER">0</Button>
            <Button type="OPERATOR" value="=">
                &#61;
            </Button>
            <Button type="OPERATOR" value="+">
                &#43;
            </Button>
        </ButtonGrid>
    );
};

export default Buttons;
