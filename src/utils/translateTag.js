const translateTag = (en) => {
  let kr = '';
  switch(en) {
    case 'PERSON_NAME':
      kr = '이름';
      break;
    case 'GENDERE':
      kr = '성별';
      break;
    case 'AGE':
      kr = '나이';
      break;
    case 'LOCATION':
      kr = '주소';
      break;
    case 'EMAIL_ADDRESS':
      kr = '이메일';
      break;
    case 'PHONE_NUMBER':
      kr = '전화번호';
      break;
    case 'IP_ADDRESS':
      kr = 'IP 주소';
      break;
    case 'MAC_ADDRESS':
      kr = 'MAC 주소';
      break;
    case 'FINANCIAL_ACCOUNT_NUMBER':
      kr = '계좌번호';
      break;
    case 'CREDIT_CARD_NUMBER':
      kr = '카드번호';
      break;
    case 'IBAN_CODE':
      kr = '국제 계좌번호';
      break;
    case 'MEDICAL_RECORD_NUMBER':
      kr = '의료 기록 번호';
      break;
    case 'KOREA_DRIVERS_LICENSE_NUMBER':
      kr = '운전면허번호';
      break;
    case 'KOREA_PASSPORT':
      kr = '여권번호';
      break;
    default:
      break;
  }

  return kr;
};

export default translateTag;