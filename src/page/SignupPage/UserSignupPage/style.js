import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 802px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div {
        width: 600px;
        height: 500px;
        border: 1px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`;

export const Info = css`
    & div{
        width: 480px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px ;
        & input {
            height: 35px;
            width: 300px;
            border-radius: 10px;
            padding-left: 20px;
            font-size: 18px;
            
        }
    }
    & p {
        width: 100px;
        margin-right: 0px;
        padding: 0px;
    }    
`;

export const inputStyle = css`
    width: 100px;
    height: 20px;
    box-sizing: border-box;
    p {
        box-sizing: border-box;
        width: 100px;
        height: 20px;
        font-size: 15px;
    }

`;    


export const addressInfo = css`
    width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    & > div {
        width: 340px;
    }
    & p {
        width: 80px;
        margin-right: 40px;
        padding: 10px;
    }
`;

export const addressStyle = css`
    display: flex;
    flex-direction: column;
    width: 100px;
    box-sizing: border-box;
    & input {    
    border-radius: 10px;
    padding-left: 10px;
    }
    
`;

export const signupbutton = css`

`;
