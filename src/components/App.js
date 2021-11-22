import styled from "styled-components";
import backImg from "../img/0001.PNG";

import Rootrouter from "../routers/Rootrouter";

function App() {
    return (
        <div>
            <BasicStyle>
                <Rootrouter />
            </BasicStyle>
        </div>
    );
}

export const BasicStyle = styled.div`
    width: 375pt;
    height: 812pt;
    margin-left: 55pt;

    background-image: url(${backImg});
    input:focus {
        outline: none;
    }
`;

export default App;
