import Tesseract from 'tesseract.js';

const Ocr = async (image) => {
    return new Promise((resolve, reject) => {
        Tesseract.recognize(
            image,
            'kor',
            {
                logger: (m) => console.log(m),
            }
        ).then(({ data: { text } }) => {
            const regex = /\d{3}-\d{2}-\d{5}/; // 사업자 등록번호 패턴
            const match = text.match(regex);
            const number = match[0].replace(/-/g, '');
            console.log(number);
            if (number) {
                console.log(`추출된 사업자 등록번호: ${number}`);
                resolve(number);
            } else {
                console.log('사업자 등록번호를 찾을 수 없습니다.');
                reject(new Error('사업자 등록증 양식을 확인해 주세요.'));
            }
        }).catch((error) => {
            reject(error);
        })
    })
};

export default Ocr;