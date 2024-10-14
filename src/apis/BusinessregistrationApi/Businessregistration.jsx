import axios from "axios";
import { useState } from "react";

const Businessregistration = async (businessNumber) => {
    const [businessInfo, setBusinessInfo] = useState("");
    const [error, setError] = useState('');

    if (!businessNumber) {
        setError('사업자 등록번호를 입력해주세요.');
        return;
    }

    const data = {
        b_no: [businessNumber], // 사업자번호를 배열로 전달
    };

    console.log(data);

    const apiKey = process.env.REACT_APP_BUSINESS_API_KEY;// 발급받은 API 키
    const apiUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${apiKey}`;

    console.log(apiUrl);
    
    try {
        const response = await axios.post(apiUrl, data, {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        });
        console.log(response.data);
        // response.data.data의 b_stt_cd 코드 종류(01 계속사업자, 02 휴업자, 03 폐업자)
        if (response.data.data[0].b_stt_cd === "01") {
        setBusinessInfo("인증완료");
        setError('');
        console.log(businessInfo);
        } else {
        setBusinessInfo(null);
        setError('등록된 사업자가 없습니다.');
        alert(`${response.data.data[0].tax_type}`)
        }
        } catch (error) {
            console.error('Error:', error);
            setError('조회 중 오류가 발생했습니다.');
            setBusinessInfo(null);
        }
        return Businessregistration
    }

export default Businessregistration;