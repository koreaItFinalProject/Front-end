# 🔖 목차

> ## ✨[프로젝트 소개](#-프로젝트-소개)
>
> ## 👥[팀원 소개](#-팀원-소개-및-역할-분담)
>
> ## 🤝[협업 방식](#-협업-방식)
>
> ## 📚[프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리)
>
> ## 🔍[브랜치 전략](#-브랜치-전략)
>
> ## ✔[컨벤션](#-컨벤션)
>
> ## ⚙️[배포](#-배포)
>
> ## 🛠[개발 도구](#-개발-도구)
>
> ## 📆[프로젝트 일정](#-프로젝트-일정)
>
> ## 📄[API 명세서 ERD 설계도](#-API-명세서-ERD-설계도)
>
> ## 📋[메뉴 구조도](#-메뉴-구조도)
>
> ## 🖥[화면 구현](#-화면-구현)
>
> ## 🙋‍♂️[주요 기능 및 코드 리뷰](#-주요-기능-및-코드-리뷰)
>
> ## 💡[느낀점](#-느낀점)


## ✨ 프로젝트 소개
- 카페를 좋아하는 사람들을 위한 카페 커뮤니티 플랫폼
### 🌟 제목
- Cafe In Busan
### 🚀 목적
- 커뮤니티 플랫폼 개발
### 🤝 참여 인원
- 팀원 3명
### 📆 제작 기간
- 2024.10.01 ~ 2024.11.14
### 🔎 주요 기능
- Kakao Map Api를 활용한 지도 페이지
- 공공데이터 API를 활용한 사업자 등록번호 조회
- OCR API를 활용하여 사업자 등록번호 추출
- SSE를 활용한 실시간 알림 기능 구현
## 👥 팀원 소개 및 역할 분담
<h3> 팀장: 김동인 </h3>

### 🔧 Back-End
- 카페 리스트 CRUD
- 카페 상세정보 CRUD
- 카페 메뉴 CRUD
- 카페 리뷰 CRUD
- 카페 좋아요 CRUD
- 게시글 리스트 CRUD
- 게시글 좋아요 CRUD
- 게시글 댓글 CRUD

### 🖥 Front-End
- 카페 리스트 페이지
- 카페 상세페이지
- 카페 리뷰 작성, 수정 페이지
- 게시글 리스트 페이지
- 게시글 상세 페이지
- 게시글 작성, 수정 페이지
- 사용자, 점주 마이페이지

### etc.
- 프로젝트 진행상황 점검 및 일정 조율
- 전체적인 페이지 CSS 디자인
- GitHub ReadMe 작성
  
<h3> 팀원: 김병규 </h3>

### 🔧 Back-End
- 회원가입/로그인
- OAuth2 로그인/회원가입
- 마이페이지 회원 정보 CRUD

### 🖥 Front-End
- 회원가입/로그인 페이지
- OAuth2 회원가입/로그인 페이지
- 마이페이지 모달창

### etc.
- API 명세서 작성

- <h3> 팀원: 김정현 </h3>

### 🔧 Back-End
- 카페 카테고리별 리스트
- 카페 검색 결과
- 관리자 사용자 리스트 CRUD
- 관리자 카페 리스트 CRUD
- 관리자 게시글, 리뷰, 댓글 리스트 CRUD
- 실시간 알림(SSE)

### 🖥 Front-End
- 지도 페이지
- 웹 관리자 페이지
- 실시간 알림

### etc.
- DB 설계
- ERD 명세서 작성
- 팀원 작업 백업
- 프로젝트 최종 발표
- PPT 제작

<br/>
<br/>

## 🤝 협업 방식

1. 개발하는 기능에 대해 GitHub Issue를 생성하고 브랜치를 생성합니다.
2. 생성한 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 개발을 완료하면 각자 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.
5. main 브랜치와 충돌이 없으면 merge 합니다.
6. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.
<br/>
<br/>

## 📚 프로젝트 진행 상황 관리
-   <a href="https://github.com/orgs/koreaItFinalProject/projects/1/views/1">📁 GitHub Projects</a>
    -   칸반 보드로 프로젝트 진행 상황을 한 눈에 확인할 수 있어 일정을 관리하기 수월했습니다.
</p>
    
<br/>
<br/>

## 🔍 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<br/>
<br/>

## ✔ 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

<h3>
<a href="">📍 커밋 컨벤션</a>
</h3>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기
</p></pre></div>

<h3>
<a href="">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>

</p>

<br/>
<br/>

## ⚙️ 배포
![무중단 배포](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/9412eee1-ae75-43f1-b84c-1b6d44948e5b)
<p>
확장성 및 유지보수성을 고려하여 배포에 대한 고민을 해보았습니다. 대부분의 팀 프로젝트의 경우 팀원들끼리 로컬 환경에서 개발 후 배포를 하고 프로젝트가 종료되는게 일반적입니다. 하지만, 배포 후 예상치 못한 버그 수정이나 기능 추가 등의 상황까지 고려한다면 배포된 상태에서 해당 서버를 중지시키고 작업을 하여 재배포하게 됩니다. 그 때 접속되어 있는 사용자의 경우는 해당 서비스를 이용하지 못하는 불편함을 겪게 됩니다. 즉, 중단된 상태를 나타내고 저희 조에서는 무중단 배포의 개념을 적용시켜 보았습니다. 서버를 Blue(8080 Port), Green(9090 Port) 각각의 백엔드 서버를 구동하면서 첫 배포시 사용자에게 Blue 서버를 구동하여 배포합니다. 이후 서비스의 추가적인 개발 작업이 필요할 경우 남아있는 Green 서버가 존재하기 때문에 여러 테스트 과정을 진행하고 Push를 하게되면 Github Action 에 의해 자동 CI/CD 작업을 Dokcer 파일에 입력된 되로 업데이트 되며, NGINX 에서 기존 사용자들에게 제공중인 Blue 서버에서 GREEN 서버로 이동하게 만들어 줍니다. 이렇게 되면 Blue -> Green 서버의 전환이 계속해서 반복되게 되는 구조로 사용자의 입장에서 서비스를 이용하는데 문제가 발생하지 않게 됩니다.
</p>

<br/>
<br/>

## 🛠 개발 도구

### 1. Back-End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
</p>

### 2. Front-End

<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/kakao-FFCD00?style=for-the-badge&logo=kakao&logoColor=white"/>
</p>

### 3. Database

<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

### 4. SCM & Deployment

<p>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
</p>

### 5. Library

-   ### Back-end

<p>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/><img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</p>

-   ### Front-end
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">
</p>

### <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"/> pom.xml(Back-end)

| 라이브러리                          | 용도                                  |
| ----------------------------------- | ------------------------------------- |
| lombok                              | 어노테이션(@)으로 코드 자동 생성         |
| spring-boot-starter-security        | spring security 적용                  |
| spring-boot-starter-validation      | 입력 값 검증                          |
| spring-boot-starter-web             | Spring Web 프로젝트에 필수 라이브러리  |
| spring-boot-starter-test            | 프로젝트 작동을 테스트하는 역할         |
| mybatis-spring-boot-starter         | 백엔드에서 MyBatis 문법 적용           |
| spring-boot-devtools                | 빠른 재시작                           |
| mysql-connector-java                | DB인 MySQL과 연결                     |
| jjwt-api / jjwt-impl / jjwt-jackson | JWT(JSON Web Token) 활용              |
| spring-boot-starter-oauth2-client   | Oauth2 인증(Naver, Kakao, Google)     |
| spring-boot-starter-aop             | spring aop 적용                       |
| spring-boot-starter-mail            | JavaMailSender를 활용하여 이메일 전송  |

### node_modules(Front-end)

| 모듈 이름                                                                   | 용도                                       |
| --------------------------------------------------------------------------- | ------------------------------------------ |
| emotion/react, emotion/styled                                               | 리액트 내 css 적용                         |
| testing-library/jest-dom, testing-library/react, testing-library/user-event | 리액트 dom 테스트                          |
| axios                                                                       | 서버로 요청을 보내 통신                    |
| firebase                                                                    | 저장된 이미지를 업로드                     |
| react-dom, react-router-dom                                                 | 주소 요청 발생 시 각 페이지로 이동         |
| react-icons                                                                 | 리액트 아이콘을 불러와 사용                |
| react-query                                                                 | 서버 데이터 동기화(fetching, caching) 지원 |
| react-select                                                                | select 요소를 쉽게 사용                    |
| react, react-scripts                                                        | 리액트 라이브러리 적용                     |
| recoil                                                                      | 전역 상태 관리                             |
| styled-reset                                                                | 초기 CSS 스타일 재설정                     |
| sweetalert2                                                                 | 알림창 구현                                |
| uuid                                                                        | 고유 아이디 값을 생성하는 함수 제공        |
| web-vitals                                                                  | 사용자의 웹 바이탈 항목 측정               |
react-kakao-maps-sdk| 카카오 지도 API |
react-modal| 모달 구현 역할 |
react-daum-postcode | 다음 주소 API |

## 📄 API 명세서 ERD 설계도
### 🛰 API 명세서
### 사용자 관련 API
### 유저
![API 명세서](https://github.com/user-attachments/assets/bbe5fab5-8e94-403a-9db4-c956efefb920)
### 관리자
![API 명세서](https://github.com/user-attachments/assets/c10b6f14-d737-421e-9184-ecc4214431a0)
### Oauth2
![API 명세서](https://github.com/user-attachments/assets/922b6e8f-859c-4d5e-85a4-a6bbc683ec42)
### 리뷰
![API 명세서](https://github.com/user-attachments/assets/6137613f-f66d-4f5f-9963-a144f1725c47)
### 게시판
![API 명세서](https://github.com/user-attachments/assets/c3b1835f-427e-4c03-998f-2b4834d5e163)
### 카페
![API 명세서](https://github.com/user-attachments/assets/645e4ad2-df60-40ec-a84d-b45fad30b7a5)
### 댓글
![API 명세서](https://github.com/user-attachments/assets/16efa3a6-eedb-4f60-9305-4d211112a497)
### 메일
![API 명세서](https://github.com/user-attachments/assets/b671f401-c57d-456f-975e-185d5596a617)
### 공지사항
![API 명세서](https://github.com/user-attachments/assets/5bcf9b73-70aa-4ff5-918f-4c7375463195)
### 신고
![API 명세서](https://github.com/user-attachments/assets/44fbadc4-7f20-4fa5-ad94-b91b7daba382)

### 📐 ERD 설계도
![CafeInBusan ERD](https://github.com/user-attachments/assets/0e98cf92-58bd-48c9-aebd-4b46a9a5c362)


## 📋 메뉴 구조도
### 메인페이지(사용자)
![CafeInBusan 메뉴 구조도(일반 페이지)](https://github.com/user-attachments/assets/c31fed64-cb59-44e4-b520-9132d60d17f6)
### 관리자 페이지(관리자)
![CafeInBusan 메뉴 구조도(관리자 페이지)](https://github.com/user-attachments/assets/79a33f42-34a6-4c6e-b6bc-947036ea468d)

## 🖥 화면 구현
### 로그인/회원가입 페이지
#### 일반 로그인/회원가입 페이지
![일반 회원가입](https://github.com/user-attachments/assets/52e3f219-e109-460b-8b43-0f9b17e7fa43)
![일반 로그인](https://github.com/user-attachments/assets/e6beb80a-f926-4d45-b212-225608ff6739)

### 점주 로그인/회원가입 페이지
![오너로그인](https://github.com/user-attachments/assets/9d4c3b62-ca0f-4b32-b2a3-b47793cd50d1)
![점주회원가입](https://github.com/user-attachments/assets/a5b06986-b703-4600-aaff-9f4abea559b4)

#### OAuth2 소셜 로그인/회원가입 페이지(구글)


#### OAuth2 소셜 로그인/회원가입 페이지(카카오)


#### OAuth2 소셜 로그인/회원가입 페이지(네이버)
![oauth2로그인](https://github.com/user-attachments/assets/992bfaa0-fb2f-4e50-b927-537d1bd637b1)
![oauth2통합회원가입](https://github.com/user-attachments/assets/d7fa6dd8-51f1-4699-9d33-f5064be57d68)

## 비밀번호 찾기/아이디 찾기
### 아이디
![아이디찾기](https://github.com/user-attachments/assets/88acba40-9062-4505-8a97-cf0a988b865b)

### 비밀번호 찾기
![비밀번호 찾기-수정](https://github.com/user-attachments/assets/87de8876-320e-437c-affe-e0d4ca8593e0)



### 지도 페이지
#### 지도 페이지 검색
![지도 페이지 검색](https://github.com/user-attachments/assets/6dacd955-0655-480f-846a-45e4c91d4da2)

#### 지도 페이지 카테고리 필터
![지도 페이지 카테고리 필터](https://github.com/user-attachments/assets/4e8a245d-e7cd-406e-9c37-a67590809919)

#### 지도 페이지에서 카페 상세 페이지 이동
![지도 페이지에서 카페 상세 페이지 이동](https://github.com/user-attachments/assets/8e1f81ec-2827-47a3-8887-f5d4d6d67618)

#### 지도페이지 슬라이더
![지도 페이지 슬라이더](https://github.com/user-attachments/assets/94676029-266b-4a16-a250-f6ef67768c2b)

###카페 리스트 페이지
#### 카페 카테고리 필터
![카페 리스트 카테고리 필터](https://github.com/user-attachments/assets/4db07076-4b32-406f-a0e0-efb6a53e69a9)

#### 카페 리스트 검색
![카페 리스트 검색](https://github.com/user-attachments/assets/cb43201c-6ecc-4252-b118-6127cd4f071a)

#### 카페 상세페이지
![카페 상세페이지](https://github.com/user-attachments/assets/1ee66a88-3a02-457c-be66-d2782a2767fd)

#### 카페 리뷰 작성
![리뷰 작성](https://github.com/user-attachments/assets/ea09ad31-f46c-433f-96b6-f6c5e80d2bec)

### 게시판
#### 게시판 선택, 게시글 검색 기능
![게시판 선택, 게시글 검색 기능](https://github.com/user-attachments/assets/542573f9-29d2-4652-91dc-a7f5452b5a68)

#### 게시글 작성
![게시글 작성](https://github.com/user-attachments/assets/7f10f083-7e74-40b9-8bbb-2bd1acbbca8b)

#### 게시글 수정
![게시글 수정](https://github.com/user-attachments/assets/bcea4a10-04a0-432a-a546-59f7c856c3cc)

#### 댓글 작성, 수정, 삭제 기능
![댓글 작성, 수정, 삭제](https://github.com/user-attachments/assets/83a3092a-8cb1-4c64-8c09-5edc0df4f06b)

#### 신고 기능
![신고 기능](https://github.com/user-attachments/assets/b9eaef39-3b1f-467e-90fe-cc46a21a001e)

#### 일반 정보
![프로필-일반정보](https://github.com/user-attachments/assets/acef40eb-d565-42df-b20f-8b9e960eedda)

#### 보안 정보, 비밀번호 수정
![프로필 수정 - 보안정보,비밀번호수정](https://github.com/user-attachments/assets/30e70cf0-7176-47df-a977-b9db348ea073)

#### 일반 - 마이페이지 메뉴 
![마이페이지 - 버튼](https://github.com/user-attachments/assets/088fd7cd-4ce7-4d71-8fb8-9bbd78cb16af)

#### 점주 - 마이페이지 메뉴
![오너 마이페이지](https://github.com/user-attachments/assets/eb34e7d1-acba-451b-95a3-6f26a0285116)


## 💡 느낀점
### 김동인
- 팀 프로젝트를 진행하면서 가장 크게 느낀점은 프로젝트 초반에 요구사항, 디자인, API, ERD 등의 프로젝트 전반적인 기초를 단단히 잡고 시작해야 한다는 점이었습니다.  이번 프로젝트는 기획이 충분히 되지 않은 상태로 기능 개발을 시작해서 프로젝트 중간에 헤메고 다시 요구사항을 정리하며 시간을 많이 낭비한 것 같습니다.  다음 프로젝트 떄는 기획 단계에서 충분한 시간을 가지고 프로젝트 기초를 탄탄하게 다지고 개발에 들어가야 한다는 것을 배웠습니다.
- 팀 프로젝트를 진행하면서 코드를 수정할때 너무 복잡하고 가독성이 떨어지는 코드를 작성해서 불편한 점이 많았기 때문에 유지 보수성과 확장성이 좋은 효율적인 코드를 쓸 수 있도록 더 신경쓰고 노력해야겠다고 느꼈습니다.
---

### 김병규
- 팀 프로젝트를 각각 기능 위주로 프론트와 백엔드를 둘 다 각 팀원들이 작업을 하다보니 개인의 역량이 중요해졌고 자신의 부족함이나 필요했던 부분들이 작업을 하면서
  몸으로 직접 와닿았던게 많았던거 같습니다. 그러다보니 아쉬웠던 부분들이 더 많았습니다.
- 개발 간에는 기초 기반 틀을 다져가면서 타 팀을 보면서 내심 불안감에 휘둘려서 DB, 기초가 되는 디자인들을 확실하게 지정하고 진행을 했어야 했는데 분위기에 휩쓸려
  마무리 못 짓고 작업을 시작해서 프로젝트 기간동안 게속 수정 및 반영을 프로젝트 작업을 하면서 해버려서
  기초 기반 틀이 중요하다는 걸 느끼게 되었습니다.
  추가적으로 DB를 먼저 전체 구축을 하고 관리자 페이지를 먼저 작업을 해서 받는 데이터, 뿌리는 데이터 , 보여지는 데이터들을 미리 선정했어야 헀는데
  보이는 화면(사용자)을 우선적으로 작업을 하면서 미흡한 부분들이 생겼어서 작업의 속도가 좀 늦춰지기도 하고 관리자 페이지를 처음 구축을 하니까 어떤 부분들을 넣어야하   고 관리자 입장에서 어떠한 작업을 할 수 있는지에 대한 부분들이 미흡했어서 프로젝트 작업에 어려움을 느끼게 되었습니다.
  이번 프로젝트를 통해서 각자의 개개인의 역량이나 협업을 통해 보는 시야적인 측면도 좀 넓어진거 같고 다양한 주제를 통해 여러가지 배경지식들을 공부해야한다는걸
  많이 느꼈습니다.

---

### 김정현
- 팀 프로젝트를 수행하면서, 게시판 CRUD와 관리자 게시판 CRUD를 구현하는 작업을 맡았습니다. 처음에는 게시판 CRUD를 쉬운 작업으로 생각했지만, 실제로는 생각보다 많은 기능을 구현해야 했고 여러 오류가 발생하여 작업 속도가 늦어졌습니다. 결과적으로 관리자 대시보드를 구현하지 못하고 프로젝트 전체의 진도가 늦어졌습니다. 다행히도 팀원이 코드 작성 절차와 요령을 알려주어 프로젝트를 무사히 마무리할 수 있었습니다.
- 이번 프로젝트를 통해 프로그래밍은 끊임없이 개인의 역량을 쌓아야 함을 깨달았습니다. 또한, 팀원 간의 커뮤니케이션이 프로젝트의 핵심이라는 것을 알게 되었습니다. 프로젝트를 진행하면서 수업 내용이 점차 이해되고, 모듈화와 클린 코드의 중요성을 깨달았습니다.
- 앞으로는 이번 팀 프로젝트에서 얻은 경험을 살려 개인 프로젝트를 꾸준히 수행하고, 개인의 역량을 키우며 커뮤니케이션을 적극적으로 하여 다음 프로젝트에 더 많은 기여를 할 것입니다.
---

