export const checkListData = [
  {
    id: 1,
    title: '가입/계정 관련 항목',
    questions: [
      {
        id: 1,
        content: '회원가입 시 개인정보 처리 방침 및 이용약관을 꼼꼼히 살피시나요?',
        answer: 'yes',
        description: [
          {
            id: 1,
            terminology: '개인정보 처리 방침이란?',
            description: '개인정보 처리 목적, 처리 및 보유기간, 제3자 제공에 관한 사항, 정보 주체의 권리·의무 및 행사 방법, 위탁 업무의 내용 등 개인정보 취급 관련 내용을 포함한 문서를 뜻합니다.\n개인정보 처리 방침은 홈페이지 하단에 표시되어 있거나, 회원가입 시 확인할 수 있습니다.',
          },
          {
            id: 2,
            terminology: '이용약관이란?',
            description: '명칭이나 형태 또는 범위에 상관없이 사업자가 여러 명의 고객과 계약을 체결하기 위하여 일정한 형식으로 미리 마련한 계약의 내용을 뜻합니다.',
          },
        ],
      },
      {
        id: 2,
        content: '본인확인은 주민등록번호 대신 아이핀이나 휴대폰 번호 등을 사용하시나요?',
        answer: 'yes',
        description: [
          {
            id: 1,
            terminology: '아이핀이란?',
            description: 'Internet Personal Identification Number의 약자로, 온라인에서 주민등록번호를 입력하지 않고 본인임을 확인할 수 있는 인증 서비스입니다.',
          },
        ],
      },
      {
        id: 3,
        content: '비밀번호를 영어 대소문자와 특수문자를 이용하여 유추할 수 없도록 설정하시나요?',
        answer: 'yes',
      },
      {
        id: 4,
        content: '비밀번호를 주기적으로 변경하고 계신가요?',
        answer: 'yes',
      },
      {
        id: 5,
        content: '명의도용 확인 서비스를 이용하여 개인정보를 관리하고 계신가요?',
        answer: 'yes',
        description: [
          {
            id: 1,
            terminology: '명의도용 확인 서비스란?',
            description: '명의도용 확인서비스는 타인이 자신의 명의로 신규 회원가입을 시도하는 경우 즉각 차단하고, 이를 통지 받을 수 있는 서비스입니다.\n명의도용 확인서비스는 이동통신사를 통해 가입할 수 있습니다.',
          },
        ],
      },
    ]
  },
  {
    id: 2,
    title: '게시물 업로드 관련 항목',
    questions: [
      {
        id: 1,
        content: '개인정보 공개 범위를 확인하여 개인정보 공개를 방지하고 계신가요?',
        answer: 'yes',
      },
      {
        id: 2,
        content: '의도치 않은 위치 정보 노출을 예방하기 위해 SNS를 이용하지 않을 때는 위치 서비스를 끄고 계신가요?',
        answer: 'yes',
        description: [
          {
            id: 1,
            terminology: '위치 서비스란?',
            description: '기기의 위치를 확인하고 사용할 수 있는 서비스입니다.',
          },
        ],
      },
      {
        id: 3,
        content: '게시물 업로드 시 꼭 필요한 최소한의 정보만 게시하시나요?',
        answer: 'yes',
      },
      {
        id: 4,
        content: 'SNS에 업로드한 사진이나 내용에 자신이나 타인의 개인정보가 있는지 확인하시나요?',
        answer: 'yes',
      },
      {
        id: 5,
        content: '업로드한 게시물을 주기적으로 삭제하고 계신가요?',
        answer: 'yes',
      },
    ]
  },
  {
    id: 3,
    title: '기타 개인정보 보호 관련 항목',
    questions: [
      {
        id: 1,
        content: '개인정보를 친구 등 가까운 사람에게 공개한 적이 있으신가요?',
        answer: 'no',
      },
      {
        id: 2,
        content: '출처가 불명확한 자료를 다운로드하신 적이 있나요?',
        answer: 'no',
      },
      {
        id: 3,
        content: 'PC방에서 금융거래를 진행한 적이 있으신가요?',
        answer: 'no',
        description: [
          {
            id: 1,
            terminology: '금융거래란?',
            description: '신용카드번호와 같은 금융 정보를 사용하는 서비스입니다.\n금융거래 시에는 민감한 개인정보가 다수 포함될 수 있습니다.',
          },
        ],
      },
      {
        id: 4,
        content: 'P2P 공유폴더에 개인정보를 저장하신 적이 있나요?',
        answer: 'no',
        description: [
          {
            id: 1,
            terminology: 'P2P 서비스란?',
            description: 'P2P 서비스는 인터넷에 연결된 모든 개인 PC로부터 직접 정보를 제공받고 검색과 다운로드를 할 수 있는 서비스입니다.\nP2P 서비스의 대표적인 예시로는 파일 공유 사이트가 있습니다.',
          },
        ],
      },
      {
        id: 5,
        content: '필요시 개인정보 침해 신고 서비스를 적극 활용하실 계획인가요?',
        answer: 'yes',
        description: [
          {
            id: 1,
            terminology: '개인정보 침해 신고 서비스란?',
            description: '개인정보가 유출되는 등 침해가 발생하는 경우 개인정보 침해신고 또는 분쟁조정을 통해 피해를 구제받을 수 있습니다.\n개인정보 침해 신고는 침해 사실에 대한 사실조사 등을 통해 개인정보처리자의 위반사실을 확인하게 됩니다. 개인정보 침해와 관련한 상담은 국번없이 118 또는 개인정보침해신고센터를 통해 진행할 수 있습니다.',
          },
        ],
      },
    ]
  },
]